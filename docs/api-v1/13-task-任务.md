# 2.13 任务

> 禅道 RESTful API v1.0 · 模块文档（共 12 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.13.1 | 获取执行任务列表 | `GET` | `/executions/id/tasks` |
| 2.13.2 | 创建任务 | `POST` | `/executions/id/tasks` |
| 2.13.3 | 获取任务详情 | `GET` | `/tasks/id` |
| 2.13.4 | 修改任务 | `PUT` | `/tasks/id` |
| 2.13.5 | 删除任务 | `DELETE` | `/tasks/id` |
| 2.13.6 | 开始任务 | `POST` | `/tasks/id/start` |
| 2.13.7 | 暂停任务 | `POST` | `/tasks/id/pause` |
| 2.13.8 | 继续任务 | `POST` | `/tasks/id/restart` |
| 2.13.9 | 完成任务 | `POST` | `/tasks/id/finish` |
| 2.13.10 | 关闭任务 | `POST` | `/tasks/id/close` |
| 2.13.11 | 添加任务日志 | `POST` | `/tasks/id/estimate` |
| 2.13.12 | 获取任务日志 | `GET` | `/tasks/id/estimate` |

---

## 2.13.1 获取执行任务列表

- **手册编号**: `2.13.1`
- **页面 ID**: `715`
- **官方文档**: https://www.zentao.net/book/api/715.html
- **Method**: `GET`
- **Path**: `/executions/id/tasks`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id/tasks`

### 请求URL

https://xxx.com/api.php/v1/executions/id/tasks

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页数 |
| total | int | 是 | 任务总数 |
| limit | int | 是 | 每页任务数 |
| tasks | array | 是 | 任务列表 |
| ∟ id | int | 是 | 任务ID |
| ∟ project | int | 是 | 所属项目 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ module | int | 是 | 所属模块 |
| ∟ story | int | 是 | 关联需求 |
| ∟ name | string | 是 | 任务名称 |
| ∟ type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| ∟ pri | int | 是 | 优先级 |
| ∟ estimate | float | 是 | 预计工时 |
| ∟ left | float | 是 | 剩余工时 |
| ∟ deadline | date | 是 | 截止日期 |
| ∟ consumed | float | 是 | 消耗工时 |
| ∟ status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| ∟ desc | string | 是 | 任务详情 |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ assignedTo |   | 是 | 指派给 |
| ∟ estStarted | date | 是 | 预计开始日期 |
| ∟ realStarted | datetime | 是 | 实际开始时间 |
| ∟ finishedBy |   | 否 | 由谁完成 |
| ∟ finishedDate | datetime | 否 | 完成时间 |
| ∟ closedBy |   | 否 | 由谁关闭 |
| ∟ closedDate | datetime | 否 | 关闭时间 |
| ∟ mailto | array | 否 | 抄送给 |

### 响应示例

```json
{
    "page": 1,
    "total": 1,
    "limit": 100,
    "tasks": [
        {
            "id": 18,
            "project": 12,
            "parent": 0,
            "execution": 13,
            "module": 0,
            "design": 0,
            "story": 0,
            "storyVersion": 1,
            "designVersion": 0,
            "fromBug": 0,
            "name": "task1",
            "type": "devel",
            "pri": 3,
            "estimate": 0,
            "consumed": 2,
            "left": 0,
            "deadline": null,
            "status": "done",
            "subStatus": "",
            "color": "",
            "mailto": [],
            "desc": "",
            "version": 1,
            "openedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "openedDate": "2021-11-29T02:33:47Z",
            "assignedTo": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "assignedDate": "2021-11-29T02:52:25Z",
            "estStarted": "0000-00-00",
            "realStarted": "2021-11-29T02:50:00Z",
            "finishedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "finishedDate": "2021-11-29T02:52:17Z",
            "finishedList": "",
            "canceledBy": null,
            "canceledDate": null,
            "closedBy": null,
            "closedDate": null,
            "planDuration": 0,
            "realDuration": 0,
            "closedReason": "",
            "lastEditedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "lastEditedDate": "2021-11-29T02:52:25Z",
            "activatedDate": "0000-00-00",
            "deleted": false,
            "storyID": null,
            "storyTitle": null,
            "product": null,
            "branch": null,
            "latestStoryVersion": null,
            "storyStatus": null,
            "assignedToRealName": "管理员",
            "needConfirm": false,
            "progress": 100
        }
    ]
}
```


---

## 2.13.2 创建任务

- **手册编号**: `2.13.2`
- **页面 ID**: `716`
- **官方文档**: https://www.zentao.net/book/api/716.html
- **Method**: `POST`
- **Path**: `/executions/id/tasks`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id/tasks`

### 请求URL

https://xxx.com/api.php/v1/executions/id/tasks

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| module | int | 否 | 所属模块 |
| story | int | 否 | 关联需求 |
| fromBug | int | 否 | 来自于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| assignedTo | string | 是 | 指派给 |
| pri | int | 否 | 优先级 |
| estimate | float | 否 | 预计工时 |
| estStarted | date | 是 | 预计开始日期 |
| deadline | date | 是 | 预计结束日期 |

### 请求示例

```json
{
    "name": "testtt",
    "assignedTo": "admin",
    "type": "devel",
    "estStarted": "2021-12-01",
    "deadline": "2021-12-31"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 23,
    "project": 12,
    "parent": 0,
    "execution": 55,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "name": "testttt",
    "type": "devel",
    "pri": 0,
    "estimate": 0,
    "consumed": 0,
    "left": 0,
    "deadline": "2021-12-31",
    "status": "wait",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "openedDate": "2021-12-05T12:54:30Z",
    "assignedTo": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "assignedDate": "2021-12-05T12:54:30Z",
    "estStarted": "2021-12-01",
    "realStarted": null,
    "finishedBy": null,
    "finishedDate": null,
    "finishedList": "",
    "canceledBy": null,
    "canceledDate": null,
    "closedBy": null,
    "closedDate": null,
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": null,
    "lastEditedDate": null,
    "activatedDate": "",
    "deleted": false,
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "管理员",
    "children": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 0
}
```


---

## 2.13.3 获取任务详情

- **手册编号**: `2.13.3`
- **页面 ID**: `717`
- **官方文档**: https://www.zentao.net/book/api/717.html
- **Method**: `GET`
- **Path**: `/tasks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id`

### 请求URL

https://xxx.com/api.php/v1/tasks/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy | string | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |

### 响应示例

```json
{
    "id": 22,
    "project": 41,
    "parent": 0,
    "execution": 42,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "name": "多人任务",
    "type": "devel",
    "pri": 3,
    "estimate": 2,
    "consumed": 0,
    "left": 2,
    "deadline": "2021-12-23",
    "status": "wait",
    "subStatus": "",
    "color": "",
    "mailto": [],
    "desc": "",
    "version": 1,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "openedDate": "2021-12-05T12:00:57Z",
    "assignedTo": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "assignedDate": "2021-12-05T12:00:57Z",
    "estStarted": "2021-12-05",
    "realStarted": null,
    "finishedBy": null,
    "finishedDate": null,
    "finishedList": "",
    "canceledBy": null,
    "canceledDate": null,
    "closedBy": null,
    "closedDate": null,
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": null,
    "lastEditedDate": null,
    "activatedDate": "",
    "deleted": false,
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "管理员",
    "children": [],
    "team": [
        {
            "id": 50,
            "root": 22,
            "type": "task",
            "account": "admin",
            "role": "",
            "limited": "no",
            "join": "2021-12-05",
            "days": 0,
            "hours": 0,
            "estimate": 1,
            "consumed": 0,
            "left": 1,
            "order": 0,
            "realname": "管理员",
            "avatar": "",
            "progress": 0
        },
        {
            "id": 51,
            "root": 22,
            "type": "task",
            "account": "productManager",
            "role": "",
            "limited": "no",
            "join": "2021-12-05",
            "days": 0,
            "hours": 0,
            "estimate": 1,
            "consumed": 0,
            "left": 1,
            "order": 1,
            "realname": "产品经理",
            "avatar": "",
            "progress": 0
        }
    ],
    "files": [],
    "needConfirm": false,
    "progress": 0,
    "storySpec": "",
    "storyVerify": "",
    "storyFiles": [],
    "executionName": "testt",
    "moduleTitle": "/",
    "actions": [
        {
            "id": 1253748,
            "objectType": "task",
            "objectID": 22,
            "product": ",4,",
            "project": 41,
            "execution": 42,
            "actor": "管理员",
            "action": "opened",
            "date": "2021-12-05 20:00:57",
            "comment": "",
            "extra": "",
            "read": "1",
            "history": [],
            "desc": "2021-12-05 20:00:57, 由 <strong>管理员</strong> 创建。\n"
        }
    ],
    "preAndNext": {
        "pre": "",
        "next": ""
    }
}
```


---

## 2.13.4 修改任务

- **手册编号**: `2.13.4`
- **页面 ID**: `718`
- **官方文档**: https://www.zentao.net/book/api/718.html
- **Method**: `PUT`
- **Path**: `/tasks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id`

### 请求URL

https://xxx.com/api.php/v1/tasks/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| module | int | 否 | 所属模块 |
| story | int | 否 | 关联需求 |
| fromBug | int | 否 | 来自于Bug |
| name | string | 否 | 任务名称 |
| type | string | 否 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| assignedTo | string | 否 | 指派给 |
| pri | int | 否 | 优先级 |
| estimate | float | 否 | 预计工时 |
| estStarted | date | 否 | 预计开始日期 |
| deadline | date | 否 | 预计结束日期 |

### 请求示例

```json
{
    "name": "testtt",
    "assignedTo": "admin",
    "type": "devel",
    "estStarted": "2021-12-01",
    "deadline": "2021-12-31"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy |   | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |

### 响应示例

```json
{
    "id": 13,
    "project": 7,
    "parent": 0,
    "execution": 1,
    "module": 0,
    "design": 0,
    "story": 2,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "name": "ccc",
    "type": "devel",
    "pri": 1,
    "estimate": 10,
    "consumed": 0,
    "left": 10,
    "deadline": null,
    "status": "wait",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "新闻中心的开发",
    "version": 2,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "openedDate": "2021-04-28T05:16:15Z",
    "assignedTo": {
        "id": 4,
        "account": "dev1",
        "avatar": "",
        "realname": "开发甲"
    },
    "assignedDate": "2021-04-28T05:16:15Z",
    "estStarted": "",
    "realStarted": null,
    "finishedBy": null,
    "finishedDate": null,
    "finishedList": "",
    "canceledBy": null,
    "canceledDate": null,
    "closedBy": null,
    "closedDate": null,
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "lastEditedDate": "2021-12-05T12:57:10Z",
    "activatedDate": "",
    "deleted": false,
    "storyID": 2,
    "storyTitle": "新闻中心的设计和开发。",
    "latestStoryVersion": 1,
    "storyStatus": "active",
    "assignedToRealName": "开发甲",
    "children": [],
    "team": [],
    "files": [],
    "cases": {
        "3": "新闻中心的测试用例"
    },
    "needConfirm": false,
    "progress": 0
}
```


---

## 2.13.5 删除任务

- **手册编号**: `2.13.5`
- **页面 ID**: `719`
- **官方文档**: https://www.zentao.net/book/api/719.html
- **Method**: `DELETE`
- **Path**: `/tasks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id`

### 请求URL

https://xxx.com/api.php/v1/tasks/id

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
    “message”: "success"
}
```


---

## 2.13.6 开始任务

- **手册编号**: `2.13.6`
- **页面 ID**: `967`
- **官方文档**: https://www.zentao.net/book/api/967.html
- **Method**: `POST`
- **Path**: `/tasks/id/start`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/start`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/start

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给 |
| realStarted | date | 否 | 实际开始 |
| consumed | int | 否 | 总计消耗 |
| left | int | 是 | 预计剩余 |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "assignedTo":"test",
    "realStarted":"2022-12-02 11:04:59",
    "consumed":2,
    "left":2,
    "comment":"开始任务"
} 
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 2,
    "left": 2,
    "deadline": "2022-12-31",
    "status": "doing",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2022-12-02 13:08:49",
    "assignedTo": "test",
    "assignedDate": "2022-12-02 13:08:49",
    "estStarted": "2022-12-01",
    "realStarted": "2022-12-02 11:04:59",
    "finishedBy": "",
    "finishedDate": "",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": "",
    "closedBy": "",
    "closedDate": "",
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2022-12-02 14:07:21",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "林晨",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 50
} 
```


---

## 2.13.7 暂停任务

- **手册编号**: `2.13.7`
- **页面 ID**: `968`
- **官方文档**: https://www.zentao.net/book/api/968.html
- **Method**: `POST`
- **Path**: `/tasks/id/pause`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/pause`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/pause

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
    "comment":"暂停任务"
} 
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 2,
    "left": 2,
    "deadline": "2022-12-31",
    "status": "doing",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2022-12-02 13:08:49",
    "assignedTo": "test",
    "assignedDate": "2022-12-02 13:08:49",
    "estStarted": "2022-12-01",
    "realStarted": "2022-12-02 11:04:59",
    "finishedBy": "",
    "finishedDate": "",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": "",
    "closedBy": "",
    "closedDate": "",
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2022-12-02 14:07:21",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "林晨",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 50
} 
```


---

## 2.13.8 继续任务

- **手册编号**: `2.13.8`
- **页面 ID**: `969`
- **官方文档**: https://www.zentao.net/book/api/969.html
- **Method**: `POST`
- **Path**: `/tasks/id/restart`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/restart`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/restart

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给 |
| realStarted | date | 否 | 实际开始 |
| consumed | int | 否 | 总计消耗 |
| left | int | 是 | 预计剩余 |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "assignedTo":"admin",
    "realStarted":"2022-12-02 14:04:59",
    "consumed":3,
    "left":3,
    "comment":"重新开始任务"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 3,
    "left": 3,
    "deadline": "2022-12-31",
    "status": "doing",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2022-12-02 13:08:49",
    "assignedTo": "admin",
    "assignedDate": "2022-12-02 15:37:21",
    "estStarted": "2022-12-01",
    "realStarted": "2022-12-02 14:04:59",
    "finishedBy": "",
    "finishedDate": "",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": "",
    "closedBy": "",
    "closedDate": "",
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2022-12-02 15:37:21",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "admin",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 50
} 
```


---

## 2.13.9 完成任务

- **手册编号**: `2.13.9`
- **页面 ID**: `970`
- **官方文档**: https://www.zentao.net/book/api/970.html
- **Method**: `POST`
- **Path**: `/tasks/id/finish`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/finish`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/finish

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给，如果没填会使用任务当前的指派人 |
| currentConsumed | int | 是 | 本次消耗 |
| realStarted | date | 否 | 实际开始，如果没填会使用任务开始(继续)时填写的实际开始时间 |
| finishedDate | date | 是 | 完成时间 |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "currentConsumed":1,
    "assignedTo":"admin",
    "realStarted":"2022-12-02 14:04:59",
    "finishedDate":"2022-12-02 15:45:27",
    "comment":"完成任务"
} 
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 4,
    "left": 0,
    "deadline": "2022-12-31",
    "status": "done",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2022-12-02T05:08:49Z",
    "assignedTo": "admin",
    "assignedDate": "2022-12-02T07:55:26Z",
    "estStarted": "2022-12-01",
    "realStarted": "2022-12-02T06:04:59Z",
    "finishedBy": "admin",
    "finishedDate": "2022-12-02T07:45:27Z",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": null,
    "closedBy": "",
    "closedDate": null,
    "planDuration": 0,
    "realDuration": 1,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2022-12-02T07:55:26Z",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "admin",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 100
} 
```


---

## 2.13.10 关闭任务

- **手册编号**: `2.13.10`
- **页面 ID**: `1200`
- **官方文档**: https://www.zentao.net/book/api/1200.html
- **Method**: `POST`
- **Path**: `/tasks/id/close`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/close`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/close

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
    "comment":"关闭任务"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 3,
    "left": 3,
    "deadline": "2024-12-31",
    "status": "closed",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2023-12-02 13:08:49",
    "assignedTo": "closed",
    "assignedDate": "2023-12-02 15:37:21",
    "estStarted": "2023-12-01",
    "realStarted": "2023-12-02 14:04:59",
    "finishedBy": "",
    "finishedDate": "",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": "",
    "closedBy": "admin",
    "closedDate": "2024-04-07 12:03:22",
    "planDuration": 0,
    "realDuration": 0,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2024-03-02 15:37:21",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "admin",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 50
} 
```


---

## 2.13.11 添加任务日志

- **手册编号**: `2.13.11`
- **页面 ID**: `1198`
- **官方文档**: https://www.zentao.net/book/api/1198.html
- **Method**: `POST`
- **Path**: `/tasks/id/estimate`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/estimate`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/estimate

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

对于禅道开源版20.7（企业版10.6、旗舰版5.6、IPD版2.6）之前的版本，使用下面的请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | array | 是 | 从0自增，表示记录几条日志，如3条日志则填入 [0,1,2] |
| objectID | array | 是 | 任务ID |
| dates | array | 是 | 日期 |
| work | array | 是 | 工作内容 |
| consumed | array | 是 | 消耗 |
| left | array | 是 | 剩余 |
| objectType | array | 是 | 对象类型，此处填入task |

对于禅道开源版20.7（企业版10.6、旗舰版5.6、IPD版2.6）及之后的版本，使用下面的请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| date | array | 是 | 日期 |
| work | array | 是 | 工作内容 |
| consumed | array | 是 | 消耗 |
| left | array | 是 | 剩余 |

### 请求示例

对于禅道开源版20.7（企业版10.6、旗舰版5.6、IPD版2.6）之前的版本，使用下面的请求示例

```json
{
    "id": [0,1,2],
    "objectID": [2,2,2],
    "dates": ["2024-02-27","2024-02-28","2024-02-29"],
    "work": ["work1","work2","work3"],
    "consumed": [2,2,2],
    "left": [6,4,2],
    "objectType": ["task","task","task"]
}
```

对于禅道开源版20.7（企业版10.6、旗舰版5.6、IPD版2.6）及之后的版本，使用下面的请求示例

```json
{
    "date": ["2024-02-27","2024-02-28","2024-02-29"],
    "work": ["work1","work2","work3"],
    "consumed": [2,2,2],
    "left": [6,4,2]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 任务ID |
| project | int | 是 | 所属任务 |
| parent | int | 是 | 父任务 |
| execution | int | 是 | 所属执行 |
| module | int | 是 | 所属模块 |
| story | int | 是 | 关联需求 |
| fromBug | int | 是 | 来源于Bug |
| name | string | 是 | 任务名称 |
| type | string | 是 | 任务类型(design 设计 | devel 开发 | request 需求 | test 测试 | study 研究 | discuss 讨论 | ui 界面 | affair 事务 | misc 其他) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| consumed | float | 是 | 消耗工时 |
| left | float | 是 | 剩余工时 |
| deadline | date | 是 | 预计结束日期 |
| status | string | 是 | 状态(wait 未开始 | doing 进行中 | done 已完成 | closed 已关闭 | cancel 已取消) |
| desc | string | 是 | 任务描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| assignedTo |   | 是 | 指派给 |
| assignedDate | datetime | 是 | 指派时间 |
| estStarted | date | 是 | 预计开始日期 |
| realStarted | datetime | 否 | 实际开始时间 |
| finishedBy | string | 否 | 由谁完成 |
| finishedDate | datetime | 否 | 完成时间 |
| closedBy |   | 否 | 由谁关闭 |
| closedDate | datetime | 否 | 关闭时间 |
| team | array | 是 | 团队，应用于多人任务 |

### 响应示例

```json
{
    "id": 2,
    "project": 1,
    "parent": 0,
    "execution": 2,
    "module": 0,
    "design": 0,
    "story": 0,
    "storyVersion": 1,
    "designVersion": 0,
    "fromBug": 0,
    "feedback": 0,
    "fromIssue": 0,
    "name": "testtt",
    "type": "devel",
    "mode": "",
    "pri": 0,
    "estimate": 0,
    "consumed": 6,
    "left": 2,
    "deadline": "2024-04-31",
    "status": "doing",
    "subStatus": "",
    "color": "",
    "mailto": null,
    "desc": "",
    "version": 1,
    "openedBy": "admin",
    "openedDate": "2024-02-02T05:08:49Z",
    "assignedTo": "admin",
    "assignedDate": "2024-02-02T07:55:26Z",
    "estStarted": "2024-02-01",
    "realStarted": "2024-02-02T06:04:59Z",
    "finishedBy": "admin",
    "finishedDate": "2024-02-02T07:45:27Z",
    "finishedList": "",
    "canceledBy": "",
    "canceledDate": null,
    "closedBy": "",
    "closedDate": null,
    "planDuration": 0,
    "realDuration": 1,
    "closedReason": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2024-02-02T07:55:26Z",
    "activatedDate": "",
    "order": 0,
    "repo": 0,
    "mr": 0,
    "entry": "",
    "lines": "",
    "v1": "",
    "v2": "",
    "deleted": "0",
    "vision": "rnd",
    "storyID": null,
    "storyTitle": null,
    "latestStoryVersion": null,
    "storyStatus": null,
    "assignedToRealName": "admin",
    "children": [],
    "members": [],
    "team": [],
    "files": [],
    "needConfirm": false,
    "progress": 80
}
```


---

## 2.13.12 获取任务日志

- **手册编号**: `2.13.12`
- **页面 ID**: `1199`
- **官方文档**: https://www.zentao.net/book/api/1199.html
- **Method**: `GET`
- **Path**: `/tasks/id/estimate`
- **完整 URL 模板**: `https://{host}/api.php/v1/tasks/id/estimate`

### 请求URL

https://xxx.com/api.php/v1/tasks/id/estimate

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| effort | class | 是 | 日志列表 |
| ∟ id | int | 是 | 日志ID |
| ∟ objectType | string | 是 | 对象类型 |
| ∟ objectID | int | 是 | 对象ID，此处表示任务ID |
| ∟ product | string | 是 | 所属产品 |
| ∟ project | int | 是 | 所属项目 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ account | string | 是 | 人员账号 |
| ∟ work | string | 是 | 工作内容 |
| ∟ vision | string | 是 | 界面内容 |
| ∟ date | string | 是 | 日期 |
| ∟ left | int | 是 | 剩余工时 |
| ∟ consumed | int | 是 | 消耗工时 |
| ∟ begin | string | 是 | 开始日期 |
| ∟ end | string | 是 | 结束日期 |
| ∟ extra |   | 是 |   |
| ∟ order | int | 是 |   |
| ∟ deleted | string | 是 | 已删除 |

### 响应示例

```json
{
    "effort": {
        "9": {
            "id": 9,
            "objectType": "task",
            "objectID": 2,
            "product": ",10,",
            "project": 12,
            "execution": 13,
            "account": "admin",
            "work": "work3",
            "vision": "rnd",
            "date": "2024-02-29",
            "left": 2,
            "consumed": 2,
            "begin": "0000",
            "end": "0000",
            "extra": "",
            "order": 0,
            "deleted": "0"
        }
    }
}
```


---
