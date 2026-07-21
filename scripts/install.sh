#!/usr/bin/env bash
# ZenTao MCP Server 一键安装脚本
# 用法：
#   curl -fsSL https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.sh | bash
#   或本地：bash scripts/install.sh [--version v1.1.2] [--prefix ~/.local] [--force]
#
# 默认：下载 GitHub Release 预编译二进制 → 安装到 $PREFIX/bin/zentao-mcp-server
# 若二进制不可用且本机有 Node >= 20，回退 npm 全局安装。

set -euo pipefail

REPO="Kerinlin/zentao-mcp-server"
NPM_PKG="@kerin/zentao-mcp-server"
BIN_NAME="zentao-mcp-server"
DEFAULT_PREFIX="${HOME}/.local"
PREFIX="${ZENTAO_MCP_PREFIX:-$DEFAULT_PREFIX}"
VERSION="${ZENTAO_MCP_VERSION:-}" # 空 = latest
FORCE=0
METHOD="auto" # auto | binary | npm

log() { printf '%s\n' "$*"; }
info() { printf '→ %s\n' "$*"; }
warn() { printf '⚠ %s\n' "$*" >&2; }
err() { printf '✗ %s\n' "$*" >&2; exit 1; }
ok() { printf '✓ %s\n' "$*"; }

usage() {
  cat <<'EOF'
ZenTao MCP Server 一键安装

用法:
  bash scripts/install.sh [选项]
  curl -fsSL https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.sh | bash

选项:
  --version <ver>   指定版本，如 v1.1.2 或 1.1.2（默认 latest）
  --prefix <dir>    安装前缀，默认 ~/.local（二进制 → $prefix/bin）
  --method <m>      auto | binary | npm（默认 auto）
  --force           覆盖已存在的安装
  -h, --help        显示帮助

环境变量:
  ZENTAO_MCP_VERSION  同 --version
  ZENTAO_MCP_PREFIX   同 --prefix
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --version)
      VERSION="${2:-}"
      [[ -n "$VERSION" ]] || err "--version 需要参数"
      shift 2
      ;;
    --prefix)
      PREFIX="${2:-}"
      [[ -n "$PREFIX" ]] || err "--prefix 需要参数"
      shift 2
      ;;
    --method)
      METHOD="${2:-}"
      case "$METHOD" in auto|binary|npm) ;; *) err "--method 只能是 auto|binary|npm" ;; esac
      shift 2
      ;;
    --force)
      FORCE=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      err "未知参数: $1（用 --help 查看用法）"
      ;;
  esac
done

# 规范化版本：去掉可选的 v 前缀再统一加上（Release tag 约定 v*）
normalize_tag() {
  local v="$1"
  v="${v#v}"
  printf 'v%s' "$v"
}

detect_platform() {
  local os arch
  os="$(uname -s | tr '[:upper:]' '[:lower:]')"
  arch="$(uname -m)"

  case "$os" in
    darwin) os="darwin" ;;
    linux) os="linux" ;;
    mingw*|msys*|cygwin*)
      err "Windows 请使用 PowerShell 脚本: scripts/install.ps1"
      ;;
    *)
      err "不支持的操作系统: $os"
      ;;
  esac

  case "$arch" in
    x86_64|amd64) arch="x64" ;;
    aarch64|arm64) arch="arm64" ;;
    *)
      err "不支持的 CPU 架构: $arch"
      ;;
  esac

  # 产物命名：zentao-mcp-server-{os}-{arch}[ .exe]
  printf '%s-%s' "$os" "$arch"
}

have_cmd() { command -v "$1" >/dev/null 2>&1; }

download() {
  local url="$1" dest="$2"
  if have_cmd curl; then
    curl -fL --retry 3 --retry-delay 1 -o "$dest" "$url"
  elif have_cmd wget; then
    wget -q -O "$dest" "$url"
  else
    err "需要 curl 或 wget"
  fi
}

http_ok() {
  local url="$1"
  if have_cmd curl; then
    curl -fsSIL "$url" >/dev/null 2>&1
  elif have_cmd wget; then
    wget --spider -q "$url" 2>/dev/null
  else
    return 1
  fi
}

resolve_asset_name() {
  local platform="$1"
  printf '%s-%s' "$BIN_NAME" "$platform"
}

install_binary() {
  local platform asset_name tag base_url url tmp_dir dest_dir dest_bin sha_url

  platform="$(detect_platform)"
  asset_name="$(resolve_asset_name "$platform")"
  dest_dir="${PREFIX}/bin"
  dest_bin="${dest_dir}/${BIN_NAME}"

  if [[ -x "$dest_bin" && $FORCE -eq 0 ]]; then
    ok "已安装: $dest_bin（使用 --force 覆盖）"
    print_mcp_hint "$dest_bin"
    return 0
  fi

  if [[ -n "$VERSION" ]]; then
    tag="$(normalize_tag "$VERSION")"
    base_url="https://github.com/${REPO}/releases/download/${tag}"
  else
    base_url="https://github.com/${REPO}/releases/latest/download"
  fi

  url="${base_url}/${asset_name}"
  sha_url="${url}.sha256"

  info "检测平台: ${platform}"
  info "下载: $url"

  if ! http_ok "$url"; then
    warn "二进制不存在或网络不可达: $url"
    return 1
  fi

  tmp_dir="$(mktemp -d)"
  # shellcheck disable=SC2064
  trap "rm -rf '$tmp_dir'" RETURN

  download "$url" "${tmp_dir}/${asset_name}"

  if http_ok "$sha_url"; then
    info "校验 SHA256..."
    download "$sha_url" "${tmp_dir}/${asset_name}.sha256"
    (
      cd "$tmp_dir"
      # 兼容 "hash  filename" 与 "hash" 两种格式
      if grep -q '[[:space:]]' "${asset_name}.sha256" 2>/dev/null; then
        shasum -a 256 -c "${asset_name}.sha256"
      else
        expected="$(tr -d '[:space:]' < "${asset_name}.sha256")"
        actual="$(shasum -a 256 "$asset_name" | awk '{print $1}')"
        [[ "$expected" == "$actual" ]] || err "SHA256 校验失败"
        ok "SHA256 校验通过"
      fi
    )
  else
    warn "未找到 .sha256，跳过校验"
  fi

  mkdir -p "$dest_dir"
  install -m 755 "${tmp_dir}/${asset_name}" "$dest_bin"
  ok "已安装二进制: $dest_bin"

  if ! echo ":$PATH:" | grep -q ":${dest_dir}:"; then
    warn "${dest_dir} 不在 PATH 中。可临时执行："
    log "  export PATH=\"${dest_dir}:\$PATH\""
    log "  或把上面一行写入 ~/.zshrc / ~/.bashrc"
  fi

  print_mcp_hint "$dest_bin"
  return 0
}

node_major() {
  node -p "process.versions.node.split('.')[0]" 2>/dev/null || true
}

install_npm() {
  local major dest_bin

  have_cmd npm || {
    warn "未找到 npm"
    return 1
  }
  have_cmd node || {
    warn "未找到 node"
    return 1
  }

  major="$(node_major)"
  if [[ -z "$major" || "$major" -lt 20 ]]; then
    warn "需要 Node.js >= 20（当前: $(node --version 2>/dev/null || echo unknown)）"
    return 1
  fi

  info "使用 npm 全局安装 ${NPM_PKG}..."
  if [[ -n "$VERSION" ]]; then
    local ver="${VERSION#v}"
    npm install -g "${NPM_PKG}@${ver}"
  else
    npm install -g "${NPM_PKG}"
  fi

  dest_bin="$(command -v "$BIN_NAME" || true)"
  if [[ -z "$dest_bin" ]]; then
    # npm prefix/bin 可能不在 PATH
    local npm_bin
    npm_bin="$(npm prefix -g)/bin/${BIN_NAME}"
    if [[ -x "$npm_bin" ]]; then
      dest_bin="$npm_bin"
    else
      dest_bin="$BIN_NAME"
    fi
  fi

  ok "npm 安装完成: $dest_bin"
  print_mcp_hint "$dest_bin"
  return 0
}

print_mcp_hint() {
  local cmd="$1"
  cat <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
安装完成。Claude Code / Cursor MCP 配置示例：

{
  "mcpServers": {
    "zentao": {
      "type": "stdio",
      "command": "${cmd}",
      "args": [],
      "env": {
        "ZENTAO_BASE_URL": "http://your-host/zentao/api.php/v1",
        "ZENTAO_ACCOUNT": "your_account",
        "ZENTAO_PASSWORD": "your_password",
        "ZENTAO_HTTP_BACKEND": "curl",
        "LOG_LEVEL": "info"
      }
    }
  }
}

Claude Code 用户可将上述片段写入 ~/.claude.json 的 mcpServers 字段。
修改后请重启客户端。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EOF
}

main() {
  log "ZenTao MCP Server 安装程序"
  log "仓库: https://github.com/${REPO}"
  log "安装前缀: ${PREFIX}"
  [[ -n "$VERSION" ]] && log "版本: $(normalize_tag "$VERSION")" || log "版本: latest"
  log ""

  case "$METHOD" in
    binary)
      install_binary || err "二进制安装失败"
      ;;
    npm)
      install_npm || err "npm 安装失败"
      ;;
    auto)
      if install_binary; then
        exit 0
      fi
      warn "二进制安装失败，尝试 npm 回退..."
      install_npm || err "自动安装失败：二进制与 npm 均不可用。
请检查网络，或手动下载: https://github.com/${REPO}/releases
或使用: npm install -g ${NPM_PKG}"
      ;;
  esac
}

main
