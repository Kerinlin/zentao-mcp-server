# 2.14 Bug

> 禅道 RESTful API v1.0 · 模块文档（共 9 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.14.1 | 获取产品 Bug 列表 | `GET` | `/products/id/bugs` |
| 2.14.2 | 创建 Bug | `POST` | `/products/id/bugs` |
| 2.14.3 | 获取 Bug 详情 | `GET` | `/bugs/id` |
| 2.14.4 | 修改 Bug | `PUT` | `/bugs/id` |
| 2.14.5 | 删除 Bug | `DELETE` | `/bugs/id` |
| 2.14.6 | 确认 Bug | `POST` | `/bugs/id/confirm` |
| 2.14.7 | 关闭 Bug | `POST` | `/bugs/id/close` |
| 2.14.8 | 激活 Bug | `POST` | `/bugs/id/active` |
| 2.14.9 | 解决 Bug | `POST` | `/bugs/id/resolve` |

---

## 2.14.1 获取产品 Bug 列表

- **手册编号**: `2.14.1`
- **页面 ID**: `720`
- **官方文档**: https://www.zentao.net/book/api/720.html
- **Method**: `GET`
- **Path**: `/products/id/bugs`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/bugs`

### 请求URL

https://xxx.com/api.php/v1/products/id/bugs

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页数 |
| total | int | 是 | Bug总数 |
| limit | int | 是 | 每页Bug数 |
| bugs | array | 是 | Bug列表 |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ project | int | 是 | 所属项目 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ toTask | int | 是 | 转为任务 |
| ∟ toStory | int | 是 | 转为需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ keywords | string | 是 | 关键字 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | 优先级 |
| ∟ type | string | 是 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| ∟ os | string | 否 | 操作系统 |
| ∟ browser | string | 否 | 浏览器 |
| ∟ steps | string | 是 | 重现步骤 |
| ∟ task | int | 否 | 相关任务 |
| ∟ story | int | 否 | 相关需求 |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ deadline | date | 否 | 截止日期 |
| ∟ assignedTo |   | 否 | 指派给 |
| ∟ assignedDate | datetime | 否 | 指派时间 |
| ∟ resolvedBy |   | 否 | 由谁解决 |
| ∟ resolvedDate | datetime | 否 | 解决时间 |
| ∟ resolvedBuild | string | 否 | 解决版本 |
| ∟ closedBy |   | 否 | 由谁关闭 |
| ∟ closedDate | datetime | 否 | 关闭时间 |

### 响应示例

```json
{
    "page": 1,
    "total": 1,
    "limit": 20,
    "bugs": [
        {
            "id": 9,
            "project": 0,
            "product": 4,
            "branch": 0,
            "module": 0,
            "execution": 0,
            "plan": 0,
            "story": 0,
            "storyVersion": 1,
            "task": 0,
            "toTask": 0,
            "toStory": 0,
            "title": "Bug3",
            "keywords": "",
            "severity": 3,
            "pri": 0,
            "type": "",
            "os": "",
            "browser": "",
            "hardware": "",
            "found": "",
            "steps": "",
            "status": {
                "code": "active",
                "name": "激活"
            },
            "subStatus": "",
            "color": "",
            "confirmed": 0,
            "activatedCount": 0,
            "activatedDate": "1969-12-31T16:00:00Z",
            "feedbackBy": "",
            "notifyEmail": "",
            "mailto": null,
            "openedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "openedDate": "2021-12-01T01:25:42Z",
            "openedBuild": "主干",
            "assignedTo": null,
            "assignedDate": "1969-12-31T16:00:00Z",
            "deadline": "1970-01-01",
            "resolvedBy": null,
            "resolution": "",
            "resolvedBuild": "",
            "resolvedDate": "1969-12-31T16:00:00Z",
            "closedBy": null,
            "closedDate": "1969-12-31T16:00:00Z",
            "duplicateBug": 0,
            "linkBug": "",
            "case": 0,
            "caseVersion": 1,
            "result": 0,
            "repo": 0,
            "entry": "",
            "lines": "",
            "v1": "",
            "v2": "",
            "repoType": "",
            "testtask": 0,
            "lastEditedBy": null,
            "lastEditedDate": "1969-12-31T16:00:00Z",
            "deleted": false,
            "needconfirm": false
        }
    ]
}
```


---

## 2.14.2 创建 Bug

- **手册编号**: `2.14.2`
- **页面 ID**: `721`
- **官方文档**: https://www.zentao.net/book/api/721.html
- **Method**: `POST`
- **Path**: `/products/id/bugs`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/bugs`

### 请求URL

https://xxx.com/api.php/v1/products/id/bugs

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| branch | int | 否 | 所属分支 |
| module | int | 否 | 所属模块 |
| execution | int | 否 | 所属执行 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键词 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 是 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| deadline | date | 否 | 截止日期 |
| openedBuild | array | 否 | 影响版本 |

### 请求示例

```json
{
    "title": "Bug2",
    "severity": 1,
    "pri": 1,
    "steps": "",
    "type": "codeerror",
    "openedBuild": [
        "trunk"
    ]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": [],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.3 获取 Bug 详情

- **手册编号**: `2.14.3`
- **页面 ID**: `722`
- **官方文档**: https://www.zentao.net/book/api/722.html
- **Method**: `GET`
- **Path**: `/bugs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id`

### 请求URL

https://xxx.com/api.php/v1/bugs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": [],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.4 修改 Bug

- **手册编号**: `2.14.4`
- **页面 ID**: `723`
- **官方文档**: https://www.zentao.net/book/api/723.html
- **Method**: `PUT`
- **Path**: `/bugs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id`

### 请求URL

https://xxx.com/api.php/v1/bugs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| branch | int | 否 | 所属分支 |
| module | int | 否 | 所属模块 |
| execution | int | 否 | 所属执行 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键词 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 是 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| deadline | date | 否 | 截止日期 |
| openedBuild | array | 否 | 影响版本 |

### 请求示例

```json
{
    "title": "Bug2",
    "severity": 1,
    "pri": 1,
    "steps": "",
    "type": "codeerror",
    "openedBuild": [
        "trunk"
    ]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": [],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.5 删除 Bug

- **手册编号**: `2.14.5`
- **页面 ID**: `724`
- **官方文档**: https://www.zentao.net/book/api/724.html
- **Method**: `DELETE`
- **Path**: `/bugs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id`

### 请求URL

https://xxx.com/api.php/v1/bugs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| message | string | 是 | 结果信息 |

### 响应示例

```json
{
    "message": "success"
}
```


---

## 2.14.6 确认 Bug

- **手册编号**: `2.14.6`
- **页面 ID**: `1120`
- **官方文档**: https://www.zentao.net/book/api/1120.html
- **Method**: `POST`
- **Path**: `/bugs/id/confirm`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id/confirm`

### 请求URL

https://xxx.com/api.php/v1/bugs/id/confirm

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| mailto | array | 否 | 抄送给 |
| comment | string | 否 | 备注 |
| pri | int | 否 | 优先级 |

### 请求示例

```json
{
    "assignedTo":"admin",
    "mailto":["lihua"],
    "pri":1,
    "type":"codeerror",
    "comment":"this is a comment"
} 
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": ["lihua"],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.7 关闭 Bug

- **手册编号**: `2.14.7`
- **页面 ID**: `1121`
- **官方文档**: https://www.zentao.net/book/api/1121.html
- **Method**: `POST`
- **Path**: `/bugs/id/close`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id/close`

### 请求URL

https://xxx.com/api.php/v1/bugs/id/close

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "comment":"this is a comment"
} 
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": ["lihua"],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.8 激活 Bug

- **手册编号**: `2.14.8`
- **页面 ID**: `1142`
- **官方文档**: https://www.zentao.net/book/api/1142.html
- **Method**: `POST`
- **Path**: `/bugs/id/active`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id/active`

### 请求URL

https://xxx.com/api.php/v1/bugs/id/active

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给 |
| openedBuild | array | 否 | 影响版本 |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "assignedTo": "dev1",
    "openedBuild": ["trunk"],
    "comment": "active bug"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1, "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "active",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": ["lihua"],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "1969-12-31T16:00:00Z",
    "deadline": null,
    "resolvedBy": null,
    "resolution": "",
    "resolvedBuild": "",
    "resolvedDate": null,
    "closedBy": null,
    "closedDate": "1969-12-31T16:00:00Z",
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---

## 2.14.9 解决 Bug

- **手册编号**: `2.14.9`
- **页面 ID**: `1181`
- **官方文档**: https://www.zentao.net/book/api/1181.html
- **Method**: `POST`
- **Path**: `/bugs/id/resolve`
- **完整 URL 模板**: `https://{host}/api.php/v1/bugs/id/resolve`

### 请求URL

https://xxx.com/api.php/v1/bugs/id/resolve

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| resolution | string | 是 | 解决方案(bydesign 设计如此 | duplicate 重复bug | external 外部原因 | fixed 已解决 | notrepro 无法重现 | postponed 延期处理 | willnotfix 不予解决 | tostory 转需求) |
| duplicateBug | int | 否 | 重复Bug ID，当 resolution 选择 duplicate 时，应传入此参数 |
| resolvedBuild | int/string | 否 | 解决版本，传入版本的ID，或者传入 trunk（主干） |
| resolvedDate | datetime | 否 | 解决时间 |
| assignedTo | string | 否 | 指派给 |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "resolution":"duplicate",
    "duplicateBug":5,
    "resolvedBuild":"trunk",
    "resolvedDate":"2023-07-02 20:10:45",
    "assignedTo":"admin",
    "comment":"fix bug comment"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | Bug ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属模块 |
| project | int | 是 | 所属项目 |
| execution | int | 是 | 所属执行 |
| toTask | boolean | 否 | 转为任务 |
| toStory | boolean | 否 | 转为需求 |
| title | string | 是 | Bug标题 |
| keywords | string | 否 | 关键字 |
| severity | int | 是 | 严重程度 |
| pri | int | 是 | 优先级 |
| type | string | 否 | Bug类型(codeerror 代码错误 | config 配置相关 | install 安装部署 | security 安全相关 | performance 性能问题 | standard 标准规范 | automation |测试脚本 | designdefect 设计缺陷 | others 其他) |
| os | string | 否 | 操作系统 |
| browser | string | 否 | 浏览器 |
| steps | string | 否 | 重现步骤 |
| task | int | 否 | 相关任务 |
| story | int | 否 | 相关需求 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| deadline | date | 否 | 截止日期 |
| assignedTo |   | 否 | 指派给 |
| assgnedDate | datetime | 否 | 指派时间 |
| resolvedBy |   | 否 | 由谁解决 |
| resolvedDate | datetime | 否 | 解决时间 |
| resolvedBuild | string | 否 | 解决版本 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| status | string | 是 | 状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 1,
    "project": 7,
    "product": 1,
    "branch": 0,
    "module": 0,
    "execution": 1,
    "plan": 0,
    "story": 1,
    "storyVersion": 1,
    "task": 1,
    "toTask": 0,
    "toStory": 0,
    "title": "aaa",
    "keywords": "",
    "severity": 3,
    "pri": 1,
    "type": "codeerror",
    "os": "",
    "browser": "",
    "hardware": "",
    "found": "",
    "steps": "<p>[步骤]进入首页</p>\r\n<p>[结果]出现乱码&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n<p>[期望]正常显示</p>",
    "status": "resolved",
    "subStatus": "",
    "color": "",
    "confirmed": 0,
    "activatedCount": 0,
    "activatedDate": "1969-12-31T16:00:00Z",
    "feedbackBy": "",
    "notifyEmail": "",
    "mailto": ["lihua"],
    "openedBy": {
        "id": 7,
        "account": "tester1",
        "avatar": "",
        "realname": "测试甲"
    },
    "openedDate": "2012-06-05T02:56:11Z",
    "openedBuild": "trunk",
    "assignedTo": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "assignedDate": "2023-07-02 20:10:45",
    "deadline": null,
    "resolvedBy": admin,
    "resolution": "duplicate",
    "resolvedBuild": "trunk",
    "resolvedDate": 2023-07-02 20:10:45,
    "closedBy": null,
    "closedDate": null,
    "duplicateBug": 0,
    "linkBug": "",
    "case": 0,
    "caseVersion": 1,
    "result": 0,
    "repo": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "repoType": "",
    "testtask": 0,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T14:53:35Z",
    "deleted": false,
    "executionName": "企业网站第一期",
    "storyTitle": "首页设计和开发",
    "storyStatus": "active",
    "latestStoryVersion": 2,
    "taskName": null,
    "planName": null,
    "projectName": "企业管理系统",
    "toCases": [],
    "files": []
}
```


---
