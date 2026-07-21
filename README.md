# ZenTao MCP Server (API V1.0)

基于 `TypeScript + Node.js + @modelcontextprotocol/sdk` 的禅道 MCP 服务，完整覆盖禅道 API v1 Bug 模块 9 个接口：

- 登录初始化（`initZentao`）
- 查看产品（`getProducts`）
- 查看我的 bug（`getMyBugs`，指派给我的，跨产品）
- 查看产品 bug 列表（`getProductBugs`，官方 `GET /products/{id}/bugs`，单页）
- 查看 bug 详情（`getBugDetail`）
- 创建 bug（`createBug`）
- 修改 bug（`updateBug`）
- 删除 bug（`deleteBug`，需 `confirm: true`）
- 确认 bug（`confirmBug`）
- 关闭 bug（`closeBug`）
- 解决 bug（`resolveBug`）
- 激活 bug（`activateBug`，重新打开）

## 1. 环境准备

```bash
npm install
cp .env.example .env
```

请在 `.env` 中配置禅道地址与鉴权信息（推荐在运行时通过 `initZentao` 传入账号密码，不在文件中存明文）。

## 2. 安装方式

### 2.0 一键安装（推荐）

**macOS / Linux**（无需 Node；优先下载预编译二进制，失败再回退 npm）：

```bash
curl -fsSL https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.sh | bash
```

常用选项：

```bash
# 指定版本 / 安装前缀 / 强制覆盖
curl -fsSL https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.sh | bash -s -- --version v1.1.2 --prefix ~/.local --force

# 仅二进制 / 仅 npm
bash scripts/install.sh --method binary
bash scripts/install.sh --method npm
```

默认安装到 `~/.local/bin/zentao-mcp-server`。若该目录不在 `PATH`，脚本会提示你补上。

**Windows（PowerShell）**：

```powershell
irm https://raw.githubusercontent.com/Kerinlin/zentao-mcp-server/main/scripts/install.ps1 | iex
```

```powershell
# 指定版本 / 前缀 / 强制覆盖
.\scripts\install.ps1 -Version v1.1.2 -Prefix "$env:LOCALAPPDATA\zentao-mcp" -Force
```

默认安装到 `%LOCALAPPDATA%\zentao-mcp\bin\zentao-mcp-server.exe`。

安装成功后脚本会打印 MCP 配置示例；把 `command` 改成输出的绝对路径即可。

### 2.1 无需 Node 环境（手动下载）

下载预编译二进制，**无需安装 Node.js**：

**macOS (Apple Silicon M1/M2/M3)**：
```bash
curl -L https://github.com/Kerinlin/zentao-mcp-server/releases/latest/download/zentao-mcp-server-darwin-arm64 -o zentao-mcp-server
chmod +x zentao-mcp-server
```

**macOS (Intel)**：
```bash
curl -L https://github.com/Kerinlin/zentao-mcp-server/releases/latest/download/zentao-mcp-server-darwin-x64 -o zentao-mcp-server
chmod +x zentao-mcp-server
```

**Linux (x64)**：
```bash
curl -L https://github.com/Kerinlin/zentao-mcp-server/releases/latest/download/zentao-mcp-server-linux-x64 -o zentao-mcp-server
chmod +x zentao-mcp-server
```

**Linux (ARM64)**：
```bash
curl -L https://github.com/Kerinlin/zentao-mcp-server/releases/latest/download/zentao-mcp-server-linux-arm64 -o zentao-mcp-server
chmod +x zentao-mcp-server
```

**Windows**：
```powershell
# PowerShell
Invoke-WebRequest -Uri "https://github.com/Kerinlin/zentao-mcp-server/releases/latest/download/zentao-mcp-server-windows-x64.exe" -OutFile "zentao-mcp-server.exe"
```

**验证下载**（可选）：
```bash
# 下载对应的 .sha256 文件验证
shasum -a 256 -c zentao-mcp-server-darwin-arm64.sha256
```

**MCP 客户端配置**（以 Claude Code 为例）：
```json
{
  "mcpServers": {
    "zentao": {
      "type": "stdio",
      "command": "/absolute/path/to/zentao-mcp-server",
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
```

### 2.2 使用 npm / npx（已有 Node 环境）

npm 包名：**`@kerin/zentao-mcp-server`**（作用域包；可执行命令 **`zentao-mcp-server`**）。

要求：**Node.js >= 20**。Linux/macOS 建议安装系统 **`curl`**（默认 HTTP 后端为 `curl`）。

**命令行试跑**：
```bash
npx -y @kerin/zentao-mcp-server
```

**全局安装**：
```bash
npm install -g @kerin/zentao-mcp-server
zentao-mcp-server
```

**HTTP 模式**：
```bash
MCP_TRANSPORT=http npx -y @kerin/zentao-mcp-server
```

**MCP 客户端配置**（npx 方式）：
```json
{
  "mcpServers": {
    "zentao": {
      "command": "npx",
      "args": ["-y", "@kerin/zentao-mcp-server@1.1.1"],
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
```

修改配置后请**完全重启 Cursor / Claude Code**。

### 2.3 维护者：发布到 npm

```bash
npm run build
npm test
npm publish --access public
```

首次发布前需 `npm login`，并确保 `package.json` 中 `version` 未被占用。

### 2.4 维护者：构建多平台二进制

```bash
# 安装 Bun
curl -fsSL https://bun.sh/install | bash

# 构建所有平台
npm run build:binary:all

# 产物在 dist/ 目录
ls -lh dist/zentao-mcp-server-*
```

**GitHub Actions 自动构建**：推送 `v*` tag 时会自动构建并上传到 Release。

一键打 tag 并推送（触发二进制构建）：

```bash
# 用 package.json 的 version 打 vX.Y.Z 并 push tag
npm run release:tag

# 先推当前分支，再打 tag，并 watch Actions
npm run release:tag:push

# 预览 / 覆盖已有 tag / 指定版本
bash scripts/release-tag.sh --dry-run
bash scripts/release-tag.sh --force
bash scripts/release-tag.sh v1.1.3 --push-branch --watch
```

> 若 Release 上传 403：仓库 Settings → Actions → General → Workflow permissions 选 **Read and write**；workflow 需含 `permissions: contents: write`。

源码仓库：<https://github.com/Kerinlin/zentao-mcp-server>

## 3. 启动方式

### stdio（本地 IDE 首选）

```bash
npm run start:stdio
```

### HTTP/SSE（远程接入）

```bash
npm run start:http
```

默认端口 `3000`，健康检查：

```bash
curl http://localhost:3000/healthz
```

## 4. 构建与测试

```bash
npm run build
npm test
```

## 5. MCP 工具参数说明

### initZentao

- `baseUrl?: string`
- `account: string`
- `password?: string`
- `token?: string`

> `password` 与 `token` 二选一。

### getMyBugs

- `status?: "active" | "resolved" | "closed" | "all"`（默认 `active`）
- `productId?: number`
- 语义：指派给我的 bug；与 `getProductBugs`（产品下全部 bug）不同

### getProductBugs

- `productId: number`（必填）
- `status?: "active" | "resolved" | "closed" | "all"`（**无默认**；`all`/不传则不按状态过滤）
- `page?: number`
- `limit?: number`
- 官方路径 `GET /products/{id}/bugs`；**单页返回，不自动翻页**

### getBugDetail

- `bugId: number`

### createBug

- `productId: number`
- `title: string` / `severity: number` / `pri: number` / `type: BugType`（必填）
- 可选：`branch` / `module` / `execution` / `keywords` / `os` / `browser` / `steps` / `task` / `story` / `deadline` / `openedBuild`
- `openedBuild?: string | string[]`（**不传则默认 `["trunk"]`**）
- `type` 枚举：`codeerror | config | install | security | performance | standard | automation | designdefect | others`

### updateBug

- `bugId: number`
- `title` / `severity` / `pri` / `type`（必填，按文档全量提交；建议先 `getBugDetail`）
- 其余可选字段同 `createBug`；未传 `openedBuild` 时**不**默认 trunk

### deleteBug

- `bugId: number`
- `confirm: true`（**字面量 true**；删除不可逆，缺省或 `false` 均拒绝）

### confirmBug

- `bugId: number`
- `assignedTo?: string` / `type?: BugType` / `mailto?: string[]` / `comment?: string` / `pri?: number`

### closeBug

- `bugId: number`
- `comment?: string`
- 成功后校验 `status === "closed"`，否则抛错

### activateBug

- `bugId: number`
- `assignedTo?: string`（指派给，账号）
- `openedBuild?: string | string[]`（影响版本，文档为数组；**不传则默认 `["trunk"]`**）
- `comment?: string`

### resolveBug

- `bugId: number`
- `resolution.resolution: "fixed" | "notrepro" | "duplicate" | "bydesign" | "willnotfix" | "tostory" | "external" | "postponed"`
- `resolution.resolvedBuild?: string`（**当解决方案为 `fixed` 时，服务端固定提交 `trunk`**，忽略该字段，避免部分禅道网页端显示异常）
- `resolution.duplicateBug?: number`（当 `resolution=duplicate` 时必填）
- `resolution.comment?: string`

## 6. 安全与运维基线

- 日志默认对 `password/token/authorization` 做脱敏处理
- 默认请求超时 `10s`
- 查询接口（GET）支持指数退避重试
- HTTP 模式提供 `/healthz` 健康检查
- 若配置了 `ZENTAO_BASE_URL` + `ZENTAO_ACCOUNT` +（`ZENTAO_PASSWORD` 或 `ZENTAO_TOKEN`），进程启动时会自动登录，无需每次先调 `initZentao`
- `ZENTAO_HTTP_BACKEND`：`axios` 使用 Node 内置 HTTP；`curl` 调用系统 `curl`。在非 Windows 上默认 `curl`，用于规避部分禅道实例对「Node 客户端 + `Token` 头 + GET」长时间无响应的问题

### 6.1 环境变量一览

| 变量 | 说明 |
| --- | --- |
| `ZENTAO_BASE_URL` | 禅道 API V1 根地址，如 `http://host/zentao/api.php/v1` |
| `ZENTAO_ACCOUNT` / `ZENTAO_PASSWORD` / `ZENTAO_TOKEN` | 自动登录用（密码与 token 二选一） |
| `ZENTAO_HTTP_BACKEND` | `axios` 或 `curl`；未设置时 Linux/macOS 默认 `curl`，Windows 默认 `axios` |

## 7. 项目结构

```text
src/
  adapters/      # 禅道 API V1.0 适配层
  schemas/       # zod 参数校验
  server/        # stdio/http 双入口
  services/      # 领域服务
  tools/         # MCP 工具实现
```

## 8. 注意事项

- 当前实现按禅道 API V1.0 常见 REST 路径封装（`/tokens`、`/bugs`、`/products`、`/products/{id}/bugs`）。
- **解决 Bug**：官方 v1 接口为 **`POST /bugs/{id}/resolve`**（不是 PUT）。若误用 PUT，可能出现 HTTP 成功但禅道未真正更新状态的情况。
- **关闭 Bug**：`POST /bugs/{id}/close` 后会二次校验 `status=closed`。
- **删除 Bug**：必须 `confirm: true`；操作不可逆，请谨慎。
- **列表语义**：`getMyBugs` = 指派给我；`getProductBugs` = 产品下全部（官方路径、单页）。
- 如果你的禅道实例路径或鉴权字段有差异，可在 `src/adapters/zentaoApiV1.ts` 适配。

