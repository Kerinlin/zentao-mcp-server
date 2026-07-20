# 2.18 工单

> 禅道 RESTful API v1.0 · 模块文档（共 5 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.18.1 | 获取工单列表 | `GET` | `/tickets` |
| 2.18.2 | 获取工单详情 | `GET` | `/tickets/id` |
| 2.18.3 | 修改工单 | `PUT` | `/tickets/id` |
| 2.18.4 | 创建工单 | `POST` | `/tickets` |
| 2.18.5 | 删除工单 | `DELETE` | `/tickets/id` |

---

## 2.18.1 获取工单列表

- **手册编号**: `2.18.1`
- **页面 ID**: `1266`
- **官方文档**: https://www.zentao.net/book/api/1266.html
- **Method**: `GET`
- **Path**: `/tickets`
- **完整 URL 模板**: `https://{host}/api.php/v1/tickets`

### 请求URL

https://xxx.com/api.php/v1/tickets

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求参数

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| browseType | string | 否 | 工单状态（all 所有 | wait 待处理 | doing 处理中 | done 待关闭 | finishedbyme 由我解决 | openedbyme 由我创建 | assignedtome 指派给我） |
| param | String | 否 | 模块ID， 默认为0 |
| orderBy | string | 否 | 排序，默认id_desc；排序字段+下划线+asc/desc |
| page | string | 否 | 第几页，默认为1 |
| limit | string | 否 | 每页工单数量，默认20 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 页数 |
| total | int | 是 | 工单总数 |
| limit | int | 是 | 每页工单数 |
| tickets | array | 是 | 工单列表 |
| ∟ id | int | 是 | 工单id |
| ∟ product | int | 是 | 所属产品 |
| ∟ module | int | 是 | 所属分类 |
| ∟ title | int | 是 | 标题 |
| ∟ type | string | 是 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |
| ∟ desc | string | 是 | 描述 |
| ∟ openedBuild | string | 是 | 影响版本 |
| ∟ feedback | string | 是 | 相关反馈 |
| ∟ assignedTo | string | 是 | 指派给 |
| ∟ assignedDate | date | 是 | 指派日期 |
| ∟ realStarted | date | 是 | 实际开始日期 |
| ∟ startedBy | string | 是 | 由谁开始 |
| ∟ startedDate | string | 是 | 开始日期 |
| ∟ deadline | date | 是 | 截止日期 |
| ∟ pri | string | 是 | 优先级 |
| ∟ estimate | float | 是 | 预计工时 |
| ∟ left | float | 是 | 剩余工时 |
| ∟ status | string | 是 | 状态 |
| ∟ openedBy | string | 是 | 创建人 |
| ∟ openedDate | date | 是 | 创建时间 |
| ∟ activatedCount | int | 是 | 激活次数 |
| ∟ closedBy | string | 是 | 由谁关闭 |
| ∟ closedDate | date | 是 | 关闭时间 |
| ∟ closedReason | string | 是 | 关闭原因 |
| ∟ finishedBy | string | 是 | 由谁完成 |
| ∟ finishedDate | date | 是 | 完成日期 |
| ∟ resolvedBy | string | 是 | 由谁解决 |
| ∟ resolvedDate | date | 是 | 解决日期 |
| ∟ resolution | string | 是 | 解决方案 |
| ∟ editedBy | user | 是 | 最后处理人 |
| ∟ editedDate | date | 是 | 最后修改时间 |
| ∟ deleted | int | 是 | 已删除 |

### 响应示例

```json
{
    "page": 1,
    "total": 7,
    "limit": 20,
    "tickets": [
        {
            "id": 7,
            "product": 80,
            "module": 80,
            "title": "sgm GIAO",
            "type": "",
            "desc": "",
            "openedBuild": "",
            "feedback": 0,
            "assignedTo": null,
            "assignedDate": "0000-00-00 00:00:00",
            "realStarted": "0000-00-00 00:00:00",
            "startedBy": "",
            "startedDate": "0000-00-00 00:00:00",
            "deadline": "-0001-11-29T16:00:00Z",
            "pri": 0,
            "estimate": 0,
            "left": 0,
            "status": "wait",
            "openedBy": {
                "id": 4,
                "account": "admin",
                "avatar": "/data/upload/1/202104/02151445087773h0",
                "realname": "管理员"
            },
            "openedDate": "2022-12-21T07:45:54Z",
            "activatedCount": 0,
            "activatedBy": null,
            "activatedDate": null,
            "closedBy": null,
            "closedDate": null,
            "closedReason": "",
            "finishedBy": null,
            "finishedDate": null,
            "resolvedBy": "",
            "resolvedDate": "0000-00-00 00:00:00",
            "resolution": "",
            "editedBy": null,
            "editedDate": null,
            "keywords": "",
            "repeatTicket": 0,
            "mailto": [],
            "deleted": false,
            "consumed": 0,
        }
}
```


---

## 2.18.2 获取工单详情

- **手册编号**: `2.18.2`
- **页面 ID**: `1267`
- **官方文档**: https://www.zentao.net/book/api/1267.html
- **Method**: `GET`
- **Path**: `/tickets/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tickets/id`

### 请求URL

https://xxx.com/api.php/v1/tickets/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 页数 |
| total | int | 是 | 工单总数 |
| limit | int | 是 | 每页工单数 |
| tickets | array | 是 | 工单列表 |
| ∟ id | int | 是 | 反馈id |
| ∟ product | int | 是 | 所属产品 |
| ∟ module | int | 是 | 所属分类 |
| ∟ title | int | 是 | 标题 |
| ∟ type | string | 是 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |
| ∟ desc | string | 是 | 描述 |
| ∟ openedBuild | string | 是 | 影响版本 |
| ∟ feedback | string | 是 | 相关反馈 |
| ∟ assignedTo | string | 是 | 指派给 |
| ∟ assignedDate | date | 是 | 指派日期 |
| ∟ realStarted | date | 是 | 实际开始日期 |
| ∟ startedBy | string | 是 | 由谁开始 |
| ∟ startedDate | string | 是 | 开始日期 |
| ∟ deadline | date | 是 | 截止日期 |
| ∟ pri | string | 是 | 优先级 |
| ∟ estimate | float | 是 | 预计工时 |
| ∟ left | float | 是 | 剩余工时 |
| ∟ status | string | 是 | 状态 |
| ∟ openedBy | string | 是 | 创建人 |
| ∟ openedDate | date | 是 | 创建时间 |
| ∟ activatedCount | int | 是 | 激活次数 |
| ∟ closedBy | string | 是 | 由谁关闭 |
| ∟ closedDate | date | 是 | 关闭时间 |
| ∟ closedReason | string | 是 | 关闭原因 |
| ∟ finishedBy | string | 是 | 由谁完成 |
| ∟ finishedDate | date | 是 | 完成日期 |
| ∟ resolvedBy | string | 是 | 由谁解决 |
| ∟ resolvedDate | date | 是 | 解决日期 |
| ∟ resolution | string | 是 | 解决方案 |
| ∟ editedBy | user | 是 | 最后处理人 |
| ∟ editedDate | date | 是 | 最后修改时间 |
| ∟ deleted | int | 是 | 已删除 |

### 响应示例

```json
{
    "id": 5,
    "product": 80,
    "module": 80,
    "title": "测试工单",
    "type": "",
    "desc": "",
    "openedBuild": "",
    "feedback": 0,
    "assignedTo": null,
    "assignedDate": null,
    "realStarted": "0000-00-00 00:00:00",
    "startedBy": "",
    "startedDate": "",
    "deadline": null,
    "pri": 0,
    "estimate": 0,
    "left": 0,
    "status": "wait",
    "openedBy": {
        "id": 4,
        "account": "admin",
        "avatar": "/data/upload/1/202104/02151445087773h0",
        "realname": "管理员"
    },
    "openedDate": "2022-12-21T07:43:33Z",
    "activatedCount": 0,
    "activatedBy": "",
    "activatedDate": null,
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "finishedBy": "",
    "finishedDate": "",
    "resolvedBy": null,
    "resolvedDate": null,
    "resolution": "",
    "editedBy": "admin",
    "editedDate": "2022-12-22 10:29:27",
    "keywords": "",
    "repeatTicket": 0,
    "mailto": [],
    "deleted": false,
    "consumed": 0,
    "createFiles": [],
    "finishFiles": [],
    "productName": null,
    "moduleName": "/",
    "actions": [
        {
            "id": 179347,
            "objectType": "ticket",
            "objectID": 5,
            "product": ",80,",
            "project": "0",
            "execution": 0,
            "actor": "管理员",
            "action": "opened",
            "date": "2022-12-21 15:43:33",
            "comment": "",
            "extra": "",
            "efforted": 0,
            "read": "0",
            "vision": "rnd",
            "history": [],
            "desc": "2022-12-21 15:43:33, 由 <strong>管理员</strong> 创建。\n"
        }
        }
    ]
}
```


---

## 2.18.3 修改工单

- **手册编号**: `2.18.3`
- **页面 ID**: `1268`
- **官方文档**: https://www.zentao.net/book/api/1268.html
- **Method**: `PUT`
- **Path**: `/tickets/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tickets/id`

### 请求URL

https://xxx.com/api.php/v1/tickets/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| product | int | 否 | 所属产品 |
| module | int | 否 | 所属分类 |
| title | string | 否 | 标题 |
| type | string | 否 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |
| desc | string | 否 | 描述 |

### 请求示例

```json
{
    "title": "test",
    "desc": "edit test"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 工单id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |
| desc | string | 是 | 描述 |
| openedBuild | string | 是 | 影响版本 |
| feedback | string | 是 | 相关反馈 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派日期 |
| realStarted | date | 是 | 实际开始日期 |
| startedBy | string | 是 | 由谁开始 |
| startedDate | string | 是 | 开始日期 |
| deadline | date | 是 | 截止日期 |
| pri | string | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| left | float | 是 | 剩余工时 |
| status | string | 是 | 状态 |
| openedBy | string | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| activatedCount | int | 是 | 激活次数 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| finishedBy | string | 是 | 由谁完成 |
| finishedDate | date | 是 | 完成日期 |
| resolvedBy | string | 是 | 由谁解决 |
| resolvedDate | date | 是 | 解决日期 |
| resolution | string | 是 | 解决方案 |
| editedBy | user | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| deleted | int | 是 | 已删除 |

### 响应示例

```json
{
    "id": 5,
    "product": 80,
    "module": 80,
    "title": "test",
    "type": "",
    "desc": "edit test",
    "openedBuild": "",
    "feedback": 0,
    "assignedTo": null,
    "assignedDate": "",
    "realStarted": "0000-00-00 00:00:00",
    "startedBy": "",
    "startedDate": "",
    "deadline": null,
    "pri": 0,
    "estimate": 0,
    "left": 0,
    "status": "wait",
    "openedBy": {
        "id": 4,
        "account": "admin",
        "avatar": "/data/upload/1/202104/02151445087773h0",
        "realname": "管理员"
    },
    "openedDate": "2022-12-21T07:43:33Z",
    "activatedCount": 0,
    "activatedBy": null,
    "activatedDate": null,
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "finishedBy": null,
    "finishedDate": null,
    "resolvedBy": "",
    "resolvedDate": "",
    "resolution": "",
    "editedBy": {
        "id": 4,
        "account": "admin",
        "avatar": "/data/upload/1/202104/02151445087773h0",
        "realname": "管理员"
    },
    "editedDate": "2022-12-22T06:02:26Z",
    "keywords": "",
    "repeatTicket": 0,
    "mailto": [],
    "deleted": false,
    "consumed": 0,
    "sgm": "",
    "sgmA": "",
    "createFiles": [],
    "finishFiles": []
}
```


---

## 2.18.4 创建工单

- **手册编号**: `2.18.4`
- **页面 ID**: `1269`
- **官方文档**: https://www.zentao.net/book/api/1269.html
- **Method**: `POST`
- **Path**: `/tickets`
- **完整 URL 模板**: `https://{host}/api.php/v1/tickets`

### 请求URL

https://xxx.com/api.php/v1/tickets

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| product | int | 是 | 所属产品 |
| module | int | 否 | 所属分类 |
| title | string | 是 | 标题 |
| type | string | 否 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |

### 请求示例

```json
{
    "product": 2,
    "title":"create test feedback"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 工单id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 工单类型(code 程序报错 | data 数据错误 | stuck 流程卡断 | security 安全问题 | affair 事务) |
| desc | string | 是 | 描述 |
| openedBuild | string | 是 | 影响版本 |
| feedback | string | 是 | 相关反馈 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派日期 |
| realStarted | date | 是 | 实际开始日期 |
| startedBy | string | 是 | 由谁开始 |
| startedDate | string | 是 | 开始日期 |
| deadline | date | 是 | 截止日期 |
| pri | string | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| left | float | 是 | 剩余工时 |
| status | string | 是 | 状态 |
| openedBy | string | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| activatedCount | int | 是 | 激活次数 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| finishedBy | string | 是 | 由谁完成 |
| finishedDate | date | 是 | 完成日期 |
| resolvedBy | string | 是 | 由谁解决 |
| resolvedDate | date | 是 | 解决日期 |
| resolution | string | 是 | 解决方案 |
| editedBy | user | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| deleted | int | 是 | 已删除 |

### 响应示例

```json
{
    "id": 8,
    "product": 2,
    "module": 2,
    "title": "create test ticket",
    "type": "",
    "desc": "",
    "openedBuild": "",
    "feedback": 0,
    "assignedTo": null,
    "assignedDate": "",
    "realStarted": "0000-00-00 00:00:00",
    "startedBy": "",
    "startedDate": "",
    "deadline": null,
    "pri": 0,
    "estimate": 0,
    "left": 0,
    "status": "wait",
    "openedBy": {
        "id": 4,
        "account": "admin",
        "avatar": "/data/upload/1/202104/02151445087773h0",
        "realname": "管理员"
    },
    "openedDate": "2022-12-22T05:49:43Z",
    "activatedCount": 0,
    "activatedBy": null,
    "activatedDate": null,
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "finishedBy": null,
    "finishedDate": null,
    "resolvedBy": "",
    "resolvedDate": "",
    "resolution": "",
    "editedBy": null,
    "editedDate": null,
    "keywords": "",
    "repeatTicket": 0,
    "mailto": [],
    "deleted": false,
    "consumed": 0,
    "createFiles": [],
    "finishFiles": []
}
```


---

## 2.18.5 删除工单

- **手册编号**: `2.18.5`
- **页面 ID**: `1270`
- **官方文档**: https://www.zentao.net/book/api/1270.html
- **Method**: `DELETE`
- **Path**: `/tickets/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tickets/id`

### 请求URL

https://xxx.com/api.php/v1/tickets/id

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
