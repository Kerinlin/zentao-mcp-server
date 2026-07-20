# 2.17 反馈

> 禅道 RESTful API v1.0 · 模块文档（共 7 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.17.1 | 创建反馈 | `POST` | `/feedbacks` |
| 2.17.2 | 指派反馈 | `POST` | `/feedbacks/id/assign` |
| 2.17.3 | 关闭反馈 | `POST` | `/feedbacks/id/close` |
| 2.17.4 | 删除反馈 | `DELETE` | `/feedbacks/id` |
| 2.17.5 | 修改反馈 | `PUT` | `/feedbacks/id` |
| 2.17.6 | 获取反馈详情 | `GET` | `/feedbacks/id` |
| 2.17.7 | 获取反馈列表 | `GET` | `/feedbacks` |

---

## 2.17.1 创建反馈

- **手册编号**: `2.17.1`
- **页面 ID**: `840`
- **官方文档**: https://www.zentao.net/book/api/840.html
- **Method**: `POST`
- **Path**: `/feedbacks`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks`

### 请求URL

https://xxx.com/api.php/v1/feedbacks

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
| type | string | 否 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| desc | string | 否 | 描述 |
| public | int | 否 | 公开 |
| notify | int | 否 | 通知 |
| notifyEmail | string | 否 | 通知邮箱 |
| feedbackBy | string | 否 | 反馈者 |

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
| id | int | 是 | 反馈id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| desc | string | 是 | 描述 |
| status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| subStatus | string | 是 | 子状态 |
| public | int | 是 | 公开 |
| notify | int | 是 | 通知 |
| notifyEmail | string | 是 | 通知邮箱 |
| likes | string | 是 | 点赞人 |
| result | int | 是 | 转化结果 |
| faq | int | 是 | FAQ |
| openedBy | user | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| reviewedBy | string | 是 | 由谁评审 |
| reviewedDate | date | 是 | 评审时间 |
| processedBy | string | 是 | 由谁处理 |
| processedDate | date | 是 | 处理时间 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| editedBy | user | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派时间 |
| feedbackBy | string | 是 | 反馈者 |
| mailto | array | 是 | 抄送给 |
| deleted | int | 是 | 已删除 |
| likesCount | int | 是 | 点赞总数 |

### 响应示例

```json
{
    "id": 14,
    "product": 2,
    "module": 0,
    "title": "create test feedback",
    "type": "",
    "solution": "",
    "desc": "",
    "status": "wait",
    "subStatus": "",
    "public": "0",
    "notify": "0",
    "notifyEmail": "",
    "likes": "",
    "result": 0,
    "faq": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "openedDate": "2022-06-28T05:35:43Z",
    "reviewedBy": null,
    "reviewedDate": null,
    "processedBy": null,
    "processedDate": null,
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "editedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "editedDate": "2022-06-28T05:35:43Z",
    "assignedTo": null,
    "assignedDate": "2022-06-28T05:35:43Z",
    "feedbackBy": null,
    "mailto": [],
    "deleted": false,
    "likesCount": 0,
    "files": []
}
```


---

## 2.17.2 指派反馈

- **手册编号**: `2.17.2`
- **页面 ID**: `841`
- **官方文档**: https://www.zentao.net/book/api/841.html
- **Method**: `POST`
- **Path**: `/feedbacks/id/assign`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks/id/assign`

### 请求URL

https://xxx.com/api.php/v1/feedbacks/id/assign

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| assignedTo | string | 否 | 指派给，填写用户的account字段 |
| comment | string | 否 | 备注 |
| mailto | string | 否 | 抄送给，填写用户的account字段并用“,”分开 |

### 请求示例

```json
{
    "assignedTo": "admin",
    "comment":"yes"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 反馈id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| desc | string | 是 | 描述 |
| status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| subStatus | string | 是 | 子状态 |
| public | int | 是 | 公开 |
| notify | int | 是 | 通知 |
| notifyEmail | string | 是 | 通知邮箱 |
| likes | string | 是 | 点赞人 |
| result | int | 是 | 转化结果 |
| faq | int | 是 | FAQ |
| openedBy | user | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| reviewedBy | string | 是 | 由谁评审 |
| reviewedDate | date | 是 | 评审时间 |
| processedBy | string | 是 | 由谁处理 |
| processedDate | date | 是 | 处理时间 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| editedBy | string | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| assignedTo | user | 是 | 指派给 |
| assignedDate | date | 是 | 指派时间 |
| feedbackBy | string | 是 | 反馈者 |
| mailto | array | 是 | 抄送给 |
| deleted | int | 是 | 已删除 |
| likesCount | int | 是 | 点赞总数 |

### 响应示例

```json
{
    "id": 2,
    "product": 2,
    "module": 0,
    "title": "test",
    "type": "",
    "solution": "",
    "desc": "edit test1",
    "status": "wait",
    "subStatus": "",
    "public": "1",
    "notify": "1",
    "notifyEmail": "",
    "likes": "",
    "result": 0,
    "faq": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "openedDate": "2022-06-10T00:56:02Z",
    "reviewedBy": "",
    "reviewedDate": "0000-00-00 00:00:00",
    "processedBy": "",
    "processedDate": "0000-00-00 00:00:00",
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "editedBy": "admin",
    "editedDate": "2022-06-28 11:55:08",
    "assignedTo": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "assignedDate": "2022-06-28T03:55:08Z",
    "feedbackBy": "",
    "mailto": [],
    "deleted": false,
    "likesCount": 0,
    "files": []
}
```


---

## 2.17.3 关闭反馈

- **手册编号**: `2.17.3`
- **页面 ID**: `842`
- **官方文档**: https://www.zentao.net/book/api/842.html
- **Method**: `POST`
- **Path**: `/feedbacks/id/close`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks/id/close`

### 请求URL

https://xxx.com/api.php/v1/feedbacks/id/close

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| closedReason | string | 否 | 关闭原因（commented 已处理 | repeat 重复 | refuse 不予采纳） |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "closedReason":"repeat"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 反馈id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| desc | string | 是 | 描述 |
| status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| subStatus | string | 是 | 子状态 |
| public | int | 是 | 公开 |
| notify | int | 是 | 通知 |
| notifyEmail | string | 是 | 通知邮箱 |
| likes | string | 是 | 点赞人 |
| result | int | 是 | 转化结果 |
| faq | int | 是 | FAQ |
| openedBy | string | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| reviewedBy | string | 是 | 由谁评审 |
| reviewedDate | date | 是 | 评审时间 |
| processedBy | string | 是 | 由谁处理 |
| processedDate | date | 是 | 处理时间 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| editedBy | string | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派时间 |
| feedbackBy | string | 是 | 反馈者 |
| mailto | array | 是 | 抄送给 |
| deleted | int | 是 | 已删除 |
| likesCount | int | 是 | 点赞总数 |

### 响应示例

```json
{
    "id": 2,
    "product": 2,
    "module": 0,
    "title": "test",
    "type": "",
    "solution": "",
    "desc": "edit test1",
    "status": "closed",
    "subStatus": "",
    "public": "1",
    "notify": "1",
    "notifyEmail": "",
    "likes": "",
    "result": 0,
    "faq": 0,
    "openedBy": "admin",
    "openedDate": "2022-06-10 08:56:02",
    "reviewedBy": "",
    "reviewedDate": "0000-00-00 00:00:00",
    "processedBy": "",
    "processedDate": "0000-00-00 00:00:00",
    "closedBy": "admin",
    "closedDate": "2022-06-28 13:15:42",
    "closedReason": "repeat",
    "editedBy": "admin",
    "editedDate": "2022-06-28 13:15:42",
    "assignedTo": "closed",
    "assignedDate": "2022-06-28 11:55:08",
    "feedbackBy": "",
    "mailto": "",
    "deleted": "0",
    "likesCount": 0,
    "files": []
}
```


---

## 2.17.4 删除反馈

- **手册编号**: `2.17.4`
- **页面 ID**: `843`
- **官方文档**: https://www.zentao.net/book/api/843.html
- **Method**: `DELETE`
- **Path**: `/feedbacks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks/id`

### 请求URL

https://xxx.com/api.php/v1/feedbacks/id

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

## 2.17.5 修改反馈

- **手册编号**: `2.17.5`
- **页面 ID**: `844`
- **官方文档**: https://www.zentao.net/book/api/844.html
- **Method**: `PUT`
- **Path**: `/feedbacks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks/id`

### 请求URL

https://xxx.com/api.php/v1/feedbacks/id

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
| type | string | 否 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| desc | string | 否 | 描述 |
| public | int | 否 | 公开 |
| notify | int | 否 | 通知 |
| notifyEmail | string | 否 | 通知邮箱 |
| feedbackBy | string | 否 | 反馈者 |

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
| id | int | 是 | 反馈id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| desc | string | 是 | 描述 |
| status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| subStatus | string | 是 | 子状态 |
| public | int | 是 | 公开 |
| notify | int | 是 | 通知 |
| notifyEmail | string | 是 | 通知邮箱 |
| likes | string | 是 | 点赞人 |
| result | int | 是 | 转化结果 |
| faq | int | 是 | FAQ |
| openedBy | user | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| reviewedBy | string | 是 | 由谁评审 |
| reviewedDate | date | 是 | 评审时间 |
| processedBy | string | 是 | 由谁处理 |
| processedDate | date | 是 | 处理时间 |
| closedBy | user | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| editedBy | string | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派时间 |
| feedbackBy | string | 是 | 反馈者 |
| mailto | array | 是 | 抄送给 |
| deleted | int | 是 | 已删除 |
| likesCount | int | 是 | 点赞总数 |

### 响应示例

```json
{
    "id": 2,
    "product": 2,
    "module": 0,
    "title": "test",
    "type": "",
    "solution": "",
    "desc": "edit test",
    "status": "wait",
    "subStatus": "",
    "public": "0",
    "notify": "1",
    "notifyEmail": "",
    "likes": "",
    "result": 0,
    "faq": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "openedDate": "2022-06-10T00:56:02Z",
    "reviewedBy": null,
    "reviewedDate": null,
    "processedBy": null,
    "processedDate": null,
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "editedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "editedDate": "2022-06-28T02:48:38Z",
    "assignedTo": "admin",
    "assignedDate": "2022-06-10 15:56:14",
    "feedbackBy": "",
    "mailto": [],
    "deleted": false,
    "likesCount": 0,
    "files": []
}
```


---

## 2.17.6 获取反馈详情

- **手册编号**: `2.17.6`
- **页面 ID**: `845`
- **官方文档**: https://www.zentao.net/book/api/845.html
- **Method**: `GET`
- **Path**: `/feedbacks/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks/id`

### 请求URL

https://xxx.com/api.php/v1/feedbacks/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 反馈id |
| product | int | 是 | 所属产品 |
| module | int | 是 | 所属分类 |
| title | int | 是 | 标题 |
| type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| desc | string | 是 | 描述 |
| status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| subStatus | string | 是 | 子状态 |
| public | int | 是 | 公开 |
| notify | int | 是 | 通知 |
| notifyEmail | string | 是 | 通知邮箱 |
| likes | string | 是 | 点赞人 |
| result | int | 是 | 转化结果 |
| faq | int | 是 | FAQ |
| openedBy | user | 是 | 创建人 |
| openedDate | date | 是 | 创建时间 |
| reviewedBy | string | 是 | 由谁评审 |
| reviewedDate | date | 是 | 评审时间 |
| processedBy | string | 是 | 由谁处理 |
| processedDate | date | 是 | 处理时间 |
| closedBy | string | 是 | 由谁关闭 |
| closedDate | date | 是 | 关闭时间 |
| closedReason | string | 是 | 关闭原因 |
| editedBy | user | 是 | 最后处理人 |
| editedDate | date | 是 | 最后修改时间 |
| assignedTo | string | 是 | 指派给 |
| assignedDate | date | 是 | 指派时间 |
| feedbackBy | string | 是 | 反馈者 |
| mailto | array | 是 | 抄送给 |
| deleted | int | 是 | 已删除 |
| likesCount | int | 是 | 点赞总数 |
| productName | string | 是 | 产品名称 |

### 响应示例

```json
{
    "id": 4,
    "product": 2,
    "module": 0,
    "title": "一个反馈",
    "type": "",
    "solution": "",
    "desc": "",
    "status": "wait",
    "subStatus": "",
    "public": "0",
    "notify": "1",
    "notifyEmail": "",
    "likes": "",
    "result": 0,
    "faq": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "admin"
    },
    "openedDate": "2022-06-10T03:18:52Z",
    "reviewedBy": "",
    "reviewedDate": "0000-00-00 00:00:00",
    "processedBy": "",
    "processedDate": "0000-00-00 00:00:00",
    "closedBy": null,
    "closedDate": null,
    "closedReason": "",
    "editedBy": "admin",
    "editedDate": "2022-06-10 11:18:52",
    "assignedTo": null,
    "assignedDate": "2022-06-10T03:18:52Z",
    "feedbackBy": "",
    "mailto": [],
    "deleted": false,
    "likesCount": 0,
    "files": [],
    "likeIcon": "thumbs-up",
    "publicStatus": "0",
    "productName": "产品X",
    "moduleName": "/",
    "resultType": "",
    "actions": [
        {
            "id": 163,
            "objectType": "feedback",
            "objectID": 4,
            "product": ",0,",
            "project": 0,
            "execution": 0,
            "actor": "admin",
            "action": "opened",
            "date": "2022-06-10 11:18:52",
            "comment": "",
            "extra": "",
            "read": "0",
            "vision": "rnd",
            "efforted": 0,
            "history": [],
            "desc": "2022-06-10 11:18:52, 由 <strong>admin</strong> 创建。\n"
        }
    ]
}
```


---

## 2.17.7 获取反馈列表

- **手册编号**: `2.17.7`
- **页面 ID**: `846`
- **官方文档**: https://www.zentao.net/book/api/846.html
- **Method**: `GET`
- **Path**: `/feedbacks`
- **完整 URL 模板**: `https://{host}/api.php/v1/feedbacks`

### 请求URL

https://xxx.com/api.php/v1/feedbacks

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| solution | string | 否 | 反馈处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| orderBy | string | 否 | 排序，默认id_desc；排序字段+下划线+asc/desc |
| page | string | 否 | 第几页，默认为1 |
| limit | string | 否 | 每页反馈数量，默认20 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 页数 |
| total | int | 是 | 反馈总数 |
| limit | int | 是 | 每页反馈数 |
| feedbacks | array | 是 | 反馈列表 |
| ∟ id | int | 是 | 反馈id |
| ∟ product | int | 是 | 所属产品 |
| ∟ module | int | 是 | 所属分类 |
| ∟ title | int | 是 | 标题 |
| ∟ type | string | 是 | 类型(story 需求 | task 任务 | bug Bug | todo 代办 | advice 建议) 全新项目集模式还有（issue 问题 | risk 风险 | opportunity 机会） |
| ∟ solution | string | 是 | 处理结果（unclosed 未关闭 | all 全部 | public公开 | tostory 转任务 | totask 转任务 | tobug 转Bug | totodo 转代办 | review 待评审 | assigntome 指派给我） |
| ∟ desc | string | 是 | 描述 |
| ∟ status | string | 是 | 状态(wait 待处理 | commenting 处理中 | replied 已处理 | closed 已关闭) |
| ∟ subStatus | string | 是 | 子状态 |
| ∟ public | int | 是 | 公开 |
| ∟ notify | int | 是 | 通知 |
| ∟ notifyEmail | string | 是 | 通知邮箱 |
| ∟ likes | string | 是 | 点赞人 |
| ∟ result | int | 是 | 转化结果 |
| ∟ faq | int | 是 | FAQ |
| ∟ openedBy | string | 是 | 创建人 |
| ∟ openedDate | date | 是 | 创建时间 |
| ∟ reviewedBy | string | 是 | 由谁评审 |
| ∟ reviewedDate | date | 是 | 评审时间 |
| ∟ processedBy | string | 是 | 由谁处理 |
| ∟ processedDate | date | 是 | 处理时间 |
| ∟ closedBy | string | 是 | 由谁关闭 |
| ∟ closedDate | date | 是 | 关闭时间 |
| ∟ closedReason | string | 是 | 关闭原因 |
| ∟ editedBy | user | 是 | 最后处理人 |
| ∟ editedDate | date | 是 | 最后修改时间 |
| ∟ assignedTo | user | 是 | 指派给 |
| ∟ assignedDate | date | 是 | 指派时间 |
| ∟ feedbackBy | string | 是 | 反馈者 |
| ∟ mailto | array | 是 | 抄送给 |
| ∟ deleted | int | 是 | 已删除 |

### 响应示例

```json
{
    "page": 1,
    "total": 1,
    "limit": 20,
    "feedbacks": [
        {
            "id": 2,
            "product": 2,
            "module": 0,
            "title": "一个反馈",
            "type": "",
            "solution": "",
            "desc": "",
            "status": "wait",
            "subStatus": "",
            "public": "0",
            "notify": "1",
            "notifyEmail": "",
            "likes": "",
            "result": 0,
            "faq": 0,
            "openedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "admin"
            },
            "openedDate": "2022-06-10T00:56:02Z",
            "reviewedBy": null,
            "reviewedDate": null,
            "processedBy": null,
            "processedDate": null,
            "closedBy": null,
            "closedDate": null,
            "closedReason": "",
            "editedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "admin"
            },
            "editedDate": "2022-06-10T00:56:02Z",
            "assignedTo": null,
            "assignedDate": "2022-06-10 08:56:02",
            "feedbackBy": "",
            "mailto": [],
            "deleted": false,
            "dept": 0
        }
    ]
}
```


---
