# ZenTao MCP Server 一键安装脚本（Windows PowerShell）
# 用法：
#   irm https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.ps1 | iex
#   或本地：.\scripts\install.ps1 [-Version v1.1.2] [-Prefix $env:LOCALAPPDATA\zentao-mcp] [-Force]

[CmdletBinding()]
param(
    [string]$Version = $env:ZENTAO_MCP_VERSION,
    [string]$Prefix = $(if ($env:ZENTAO_MCP_PREFIX) { $env:ZENTAO_MCP_PREFIX } else { Join-Path $env:LOCALAPPDATA "zentao-mcp" }),
    [ValidateSet("auto", "binary", "npm")]
    [string]$Method = "auto",
    [switch]$Force
)

$ErrorActionPreference = "Stop"
$Repo = "Kerinlin/zentao-mcp-server"
$NpmPkg = "@kerin/zentao-mcp-server"
$BinName = "zentao-mcp-server.exe"

function Write-Info([string]$Message) { Write-Host "→ $Message" }
function Write-Ok([string]$Message) { Write-Host "✓ $Message" -ForegroundColor Green }
function Write-Warn([string]$Message) { Write-Host "⚠ $Message" -ForegroundColor Yellow }
function Write-Err([string]$Message) { Write-Host "✗ $Message" -ForegroundColor Red; exit 1 }

function Normalize-Tag([string]$v) {
    if ([string]::IsNullOrWhiteSpace($v)) { return $null }
    $v = $v.Trim()
    if ($v.StartsWith("v")) { return $v }
    return "v$v"
}

function Get-AssetName {
    $arch = [System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture.ToString().ToLowerInvariant()
    switch ($arch) {
        "x64" { return "zentao-mcp-server-windows-x64.exe" }
        "arm64" {
            Write-Warn "当前未提供 Windows ARM64 预编译包，请使用 npm 安装或在 x64 上运行。"
            return $null
        }
        default { Write-Err "不支持的架构: $arch" }
    }
}

function Test-Url([string]$Url) {
    try {
        $resp = Invoke-WebRequest -Uri $Url -Method Head -UseBasicParsing -TimeoutSec 15
        return $resp.StatusCode -ge 200 -and $resp.StatusCode -lt 400
    } catch {
        return $false
    }
}

function Install-Binary {
    $asset = Get-AssetName
    if (-not $asset) { return $false }

    $destDir = Join-Path $Prefix "bin"
    $destBin = Join-Path $destDir $BinName

    if ((Test-Path $destBin) -and -not $Force) {
        Write-Ok "已安装: $destBin（使用 -Force 覆盖）"
        Show-McpHint $destBin
        return $true
    }

    $tag = Normalize-Tag $Version
    if ($tag) {
        $baseUrl = "https://github.com/$Repo/releases/download/$tag"
    } else {
        $baseUrl = "https://github.com/$Repo/releases/latest/download"
    }
    $url = "$baseUrl/$asset"

    Write-Info "下载: $url"
    if (-not (Test-Url $url)) {
        Write-Warn "二进制不存在或网络不可达: $url"
        return $false
    }

    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    $tmp = Join-Path $env:TEMP $asset
    Invoke-WebRequest -Uri $url -OutFile $tmp -UseBasicParsing
    Move-Item -Force $tmp $destBin
    Write-Ok "已安装二进制: $destBin"
    Show-McpHint $destBin
    return $true
}

function Install-Npm {
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Warn "未找到 npm"
        return $false
    }
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Warn "未找到 node"
        return $false
    }

    $major = node -p "process.versions.node.split('.')[0]" 2>$null
    if (-not $major -or [int]$major -lt 20) {
        Write-Warn "需要 Node.js >= 20（当前: $(node --version 2>$null)）"
        return $false
    }

    Write-Info "使用 npm 全局安装 $NpmPkg..."
    if ($Version) {
        $ver = $Version.TrimStart("v")
        npm install -g "$NpmPkg@$ver"
    } else {
        npm install -g $NpmPkg
    }

    $dest = (Get-Command zentao-mcp-server -ErrorAction SilentlyContinue)?.Source
    if (-not $dest) { $dest = "zentao-mcp-server" }
    Write-Ok "npm 安装完成: $dest"
    Show-McpHint $dest
    return $true
}

function Show-McpHint([string]$Cmd) {
    $jsonCmd = $Cmd -replace '\\', '\\'
    Write-Host @"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
安装完成。Claude Code / Cursor MCP 配置示例：

{
  "mcpServers": {
    "zentao": {
      "type": "stdio",
      "command": "$jsonCmd",
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

修改后请重启客户端。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"@
}

Write-Host "ZenTao MCP Server 安装程序"
Write-Host "仓库: https://github.com/$Repo"
Write-Host "安装前缀: $Prefix"
if ($Version) { Write-Host "版本: $(Normalize-Tag $Version)" } else { Write-Host "版本: latest" }
Write-Host ""

switch ($Method) {
    "binary" {
        if (-not (Install-Binary)) { Write-Err "二进制安装失败" }
    }
    "npm" {
        if (-not (Install-Npm)) { Write-Err "npm 安装失败" }
    }
    "auto" {
        if (Install-Binary) { exit 0 }
        Write-Warn "二进制安装失败，尝试 npm 回退..."
        if (-not (Install-Npm)) {
            Write-Err "自动安装失败。请手动下载: https://github.com/$Repo/releases 或 npm install -g $NpmPkg"
        }
    }
}
