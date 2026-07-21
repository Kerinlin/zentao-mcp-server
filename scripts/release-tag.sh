#!/usr/bin/env bash
# 自动打 tag 并推送到远程，触发 GitHub Actions 构建二进制 Release
#
# 用法:
#   bash scripts/release-tag.sh              # 用 package.json version 打 vX.Y.Z 并 push
#   bash scripts/release-tag.sh --dry-run    # 只预览
#   bash scripts/release-tag.sh --force      # 覆盖已存在的同名 tag（本地+远程）
#   bash scripts/release-tag.sh --push-branch # 先 push 当前分支再打 tag
#   bash scripts/release-tag.sh --message "release notes"
#   bash scripts/release-tag.sh 1.1.3        # 显式指定版本（可带或不带 v）
#   bash scripts/release-tag.sh --watch      # 推送后用 gh run watch 盯 Actions
#
# 环境变量:
#   RELEASE_REMOTE  默认 origin
#   RELEASE_BRANCH  默认当前分支；若设置则要求必须在该分支

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REMOTE="${RELEASE_REMOTE:-origin}"
REQUIRE_BRANCH="${RELEASE_BRANCH:-}"
DRY_RUN=0
FORCE=0
PUSH_BRANCH=0
WATCH=0
MESSAGE=""
EXPLICIT_VERSION=""

log() { printf '%s\n' "$*"; }
info() { printf '→ %s\n' "$*"; }
ok() { printf '✓ %s\n' "$*"; }
warn() { printf '⚠ %s\n' "$*" >&2; }
err() { printf '✗ %s\n' "$*" >&2; exit 1; }

usage() {
  cat <<'EOF'
自动打 Git tag 并推送远程（触发 Build Binaries workflow）

用法:
  bash scripts/release-tag.sh [版本] [选项]

参数:
  版本                 可选，如 1.1.3 或 v1.1.3；省略则读 package.json 的 version

选项:
  --dry-run            只打印将要执行的命令，不真正打 tag / push
  --force              删除并重建同名 tag（本地 + 远程）
  --push-branch        先 git push 当前分支，再打 tag
  --message <msg>      annotated tag 说明；默认 "Release vX.Y.Z"
  --watch              推送后尝试 gh run watch（需已安装 gh 且已登录）
  -h, --help           帮助

环境变量:
  RELEASE_REMOTE       远程名，默认 origin
  RELEASE_BRANCH       若设置，则必须在该分支上执行（如 main）

示例:
  bash scripts/release-tag.sh
  bash scripts/release-tag.sh --push-branch --watch
  bash scripts/release-tag.sh v1.1.3 --force --message "fix release upload perms"
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1; shift ;;
    --force) FORCE=1; shift ;;
    --push-branch) PUSH_BRANCH=1; shift ;;
    --watch) WATCH=1; shift ;;
    --message)
      MESSAGE="${2:-}"
      [[ -n "$MESSAGE" ]] || err "--message 需要参数"
      shift 2
      ;;
    -h|--help) usage; exit 0 ;;
    -*)
      err "未知选项: $1"
      ;;
    *)
      if [[ -n "$EXPLICIT_VERSION" ]]; then
        err "版本参数重复: $EXPLICIT_VERSION 与 $1"
      fi
      EXPLICIT_VERSION="$1"
      shift
      ;;
  esac
done

have_cmd() { command -v "$1" >/dev/null 2>&1; }

run() {
  if [[ $DRY_RUN -eq 1 ]]; then
    printf '[dry-run] %s\n' "$*"
  else
    eval "$@"
  fi
}

# --- 前置检查 ---
have_cmd git || err "需要 git"
[[ -d .git ]] || err "当前目录不是 git 仓库: $ROOT"

if ! git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
  warn "当前分支未设置 upstream，push 时将使用 ${REMOTE}/$(git branch --show-current)"
fi

branch="$(git branch --show-current)"
[[ -n "$branch" ]] || err "处于 detached HEAD，请先 checkout 到分支"

if [[ -n "$REQUIRE_BRANCH" && "$branch" != "$REQUIRE_BRANCH" ]]; then
  err "当前分支是 ${branch}，要求在 ${REQUIRE_BRANCH} 上打 tag（RELEASE_BRANCH）"
fi

# 工作区干净（允许 untracked，如 __pycache__）
if [[ -n "$(git status --porcelain --untracked-files=no)" ]]; then
  err "有未提交的修改，请先 commit 或 stash：
$(git status --short --untracked-files=no)"
fi

# 版本
if [[ -n "$EXPLICIT_VERSION" ]]; then
  version="${EXPLICIT_VERSION#v}"
else
  if have_cmd node; then
    version="$(node -p "require('./package.json').version")"
  elif have_cmd python3; then
    version="$(python3 -c "import json; print(json.load(open('package.json'))['version'])")"
  else
    version="$(sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' package.json | head -1)"
  fi
  [[ -n "$version" ]] || err "无法从 package.json 读取 version"
fi

# 简单 semver 校验：x.y.z 可选后缀
if ! [[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+([.-][0-9A-Za-z.-]+)?$ ]]; then
  err "版本号格式不合法: $version（期望如 1.1.2）"
fi

tag="v${version}"
if [[ -z "$MESSAGE" ]]; then
  MESSAGE="Release ${tag}"
fi

# 确认 remote
if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  err "远程不存在: $REMOTE"
fi

remote_url="$(git remote get-url "$REMOTE")"
head_sha="$(git rev-parse --short HEAD)"

log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "仓库:   $ROOT"
log "分支:   $branch @ $head_sha"
log "远程:   $REMOTE ($remote_url)"
log "Tag:    $tag"
log "说明:   $MESSAGE"
log "选项:   dry-run=$DRY_RUN force=$FORCE push-branch=$PUSH_BRANCH watch=$WATCH"
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 本地/远程是否已有 tag
local_tag_exists=0
remote_tag_exists=0
if git rev-parse "$tag" >/dev/null 2>&1; then
  local_tag_exists=1
fi
if git ls-remote --tags "$REMOTE" "refs/tags/${tag}" | grep -q .; then
  remote_tag_exists=1
fi

if [[ $local_tag_exists -eq 1 || $remote_tag_exists -eq 1 ]]; then
  if [[ $FORCE -eq 0 ]]; then
    err "Tag ${tag} 已存在（local=$local_tag_exists remote=$remote_tag_exists）。
用 --force 删除并重建，或换更高版本号。"
  fi
  warn "将删除已存在的 tag: $tag"
  if [[ $local_tag_exists -eq 1 ]]; then
    run "git tag -d $(printf %q "$tag")"
  fi
  if [[ $remote_tag_exists -eq 1 ]]; then
    run "git push $(printf %q "$REMOTE") :refs/tags/$(printf %q "$tag")"
  fi
fi

# 先推分支（可选）
if [[ $PUSH_BRANCH -eq 1 ]]; then
  info "推送分支 ${branch} → ${REMOTE}"
  run "git push -u $(printf %q "$REMOTE") $(printf %q "$branch")"
fi

# 打 annotated tag
info "创建 tag ${tag}"
run "git tag -a $(printf %q "$tag") -m $(printf %q "$MESSAGE")"

# 推送 tag
info "推送 tag ${tag} → ${REMOTE}"
run "git push $(printf %q "$REMOTE") $(printf %q "$tag")"

ok "已推送 ${tag}"
log ""
log "Actions: https://github.com/Kerinlin/zentao-mcp-server/actions"
log "Release: https://github.com/Kerinlin/zentao-mcp-server/releases/tag/${tag}"
log ""
log "盯进度: gh run list --workflow=build-binaries.yml"
log "        gh run watch"

if [[ $WATCH -eq 1 ]]; then
  if ! have_cmd gh; then
    warn "未安装 gh，跳过 --watch"
    exit 0
  fi
  if [[ $DRY_RUN -eq 1 ]]; then
    info "[dry-run] gh run watch"
    exit 0
  fi
  info "等待 workflow 出现..."
  # 最多等 60s 让 run 创建
  for _ in $(seq 1 30); do
    run_id="$(gh run list --workflow=build-binaries.yml --limit 5 --json databaseId,headBranch,event,status,displayTitle \
      --jq ".[] | select(.displayTitle|test(\"${tag}\") or .headBranch==\"${tag}\") | .databaseId" 2>/dev/null | head -1 || true)"
    if [[ -z "$run_id" ]]; then
      # tag push 的 headBranch 有时是空，用最新 tag 触发的 run
      run_id="$(gh run list --workflow=build-binaries.yml --event push --limit 3 --json databaseId,status,createdAt \
        --jq 'sort_by(.createdAt) | reverse | .[0].databaseId' 2>/dev/null || true)"
    fi
    if [[ -n "$run_id" && "$run_id" != "null" ]]; then
      info "跟踪 run: $run_id"
      gh run watch "$run_id" --exit-status
      exit $?
    fi
    sleep 2
  done
  warn "未在时限内找到 workflow run，请手动: gh run list --workflow=build-binaries.yml"
fi
