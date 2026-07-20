# 2.7 产品计划

> 禅道 RESTful API v1.0 · 模块文档（共 9 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.7.1 | 获取产品计划列表 | `GET` | `/products/id/plans` |
| 2.7.2 | 创建计划 | `POST` | `/products/id/plans` |
| 2.7.3 | 获取计划详情 | `GET` | `/productplans/id` |
| 2.7.4 | 修改计划 | `PUT` | `/productplans/id` |
| 2.7.5 | 删除计划 | `DELETE` | `/productsplan/id` |
| 2.7.6 | 产品计划关联需求 | `POST` | `/productplans/id/linkstories` |
| 2.7.7 | 产品计划取消关联需求 | `POST` | `/productplans/id/unlinkstories` |
| 2.7.8 | 产品计划关联 Bug | `POST` | `/productplans/id/linkbugs` |
| 2.7.9 | 产品计划取消关联 Bug | `POST` | `/productplans/id/unlinkbugs` |

---

## 2.7.1 获取产品计划列表

- **手册编号**: `2.7.1`
- **页面 ID**: `680`
- **官方文档**: https://www.zentao.net/book/api/680.html
- **Method**: `GET`
- **Path**: `/products/id/plans`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/plans`

### 请求URL

https://xxx.com/api.php/v1/products/id/plans

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页数 |
| total | int | 是 | 计划总数 |
| limit | int | 是 | 每页计划数 |
| plans | array | 是 | 计划列表 |
| ∟ id | int | 是 | 计划ID |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ title | string | 是 | 计划名称 |
| ∟ desc | string | 是 | 计划描述 |
| ∟ begin | date | 是 | 开始日期 |
| ∟ end | date | 是 | 结束日期 |

### 响应示例

```json
{
    "page": 1,
    "total": 1,
    "limit": 1,
    "plans": [
        {
            "id": 1,
            "product": 1,
            "branch": 0,
            "parent": 0,
            "title": "1.0beta",
            "status": "wait",
            "desc": "",
            "begin": "2022-11-09",
            "end": "2030-01-01",
            "order": "",
            "closedReason": "",
            "deleted": false,
            "stories": 2,
            "bugs": 0,
            "hour": 0,
            "projects": {
                "2": {
                    "project": 2,
                    "name": "计划1.0beta迭代"
                }
            },
            "expired": false
        }
    ]
} 
```


---

## 2.7.2 创建计划

- **手册编号**: `2.7.2`
- **页面 ID**: `681`
- **官方文档**: https://www.zentao.net/book/api/681.html
- **Method**: `POST`
- **Path**: `/products/id/plans`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/plans`

### 请求URL

https://xxx.com/api.php/v1/products/id/plans

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| branch | int | 否 | 所属分支 |
| title | string | 是 | 计划名称 |
| begin | date | 否 | 计划开始日期 |
| end | date | 否 | 计划结束日期 |
| desc | string | 否 | 计划描述 |
| parent | int | 否 | 所属父计划 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 2,
    "product": 4,
    "branch": 0,
    "parent": 0,
    "title": "主干计划",
    "desc": "",
    "begin": "2021-11-23",
    "end": "2021-11-29",
    "order": "",
    "deleted": false,
    "stories": [
        {
            "story": 12,
            "plan": "2",
            "order": 1,
            "id": 12,
            "parent": 0,
            "product": 4,
            "branch": 0,
            "module": 23,
            "source": "",
            "sourceNote": "",
            "fromBug": 0,
            "title": "主干需求",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 0,
            "estimate": 0,
            "status": "active",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": null,
            "openedBy": "admin",
            "openedDate": "2021-11-23 16:04:30",
            "assignedTo": "admin",
            "assignedDate": "2021-11-23 19:42:55",
            "lastEditedBy": "admin",
            "lastEditedDate": "2021-11-23 19:42:55",
            "reviewedBy": "",
            "reviewedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": "0"
        }
    ],
    "bugs": [
        {
            "id": 5,
            "project": 0,
            "product": 4,
            "branch": 1,
            "module": 24,
            "execution": 0,
            "plan": 2,
            "story": 0,
            "storyVersion": 1,
            "task": 0,
            "toTask": 0,
            "toStory": 0,
            "title": "Bug1",
            "keywords": "",
            "severity": 3,
            "pri": 3,
            "type": "codeerror",
            "os": "",
            "browser": "",
            "hardware": "",
            "found": "",
            "steps": "<p>[步骤]</p><br /><p>[结果]</p><br /><p>[期望]</p><br />",
            "status": "active",
            "subStatus": "",
            "color": "",
            "confirmed": 0,
            "activatedCount": 0,
            "activatedDate": "0000-00-00 00:00:00",
            "mailto": "",
            "openedBy": "admin",
            "openedDate": "2021-11-29 13:02:34",
            "openedBuild": "trunk",
            "assignedTo": "",
            "assignedDate": "0000-00-00 00:00:00",
            "deadline": "2021-11-29",
            "resolvedBy": "",
            "resolution": "",
            "resolvedBuild": "",
            "resolvedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "duplicateBug": 0,
            "linkBug": "",
            "case": 0,
            "caseVersion": 0,
            "result": 0,
            "repo": 0,
            "entry": "",
            "lines": "",
            "v1": "",
            "v2": "",
            "repoType": "",
            "testtask": 0,
            "lastEditedBy": "",
            "lastEditedDate": "0000-00-00 00:00:00",
            "deleted": "0"
        }
    ]
}
```


---

## 2.7.3 获取计划详情

- **手册编号**: `2.7.3`
- **页面 ID**: `682`
- **官方文档**: https://www.zentao.net/book/api/682.html
- **Method**: `GET`
- **Path**: `/productplans/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id`

### 请求URL

https://xxx.com/api.php/v1/productplans/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 2,
    "product": 4,
    "branch": 0,
    "parent": 0,
    "title": "主干计划",
    "desc": "",
    "begin": "2021-11-23",
    "end": "2021-11-29",
    "order": "",
    "deleted": false,
    "stories": [
        {
            "story": 12,
            "plan": "2",
            "order": 1,
            "id": 12,
            "parent": 0,
            "product": 4,
            "branch": 0,
            "module": 23,
            "source": "",
            "sourceNote": "",
            "fromBug": 0,
            "title": "主干需求",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 0,
            "estimate": 0,
            "status": "active",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": null,
            "openedBy": "admin",
            "openedDate": "2021-11-23 16:04:30",
            "assignedTo": "admin",
            "assignedDate": "2021-11-23 19:42:55",
            "lastEditedBy": "admin",
            "lastEditedDate": "2021-11-23 19:42:55",
            "reviewedBy": "",
            "reviewedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": "0"
        }
    ],
    "bugs": [
        {
            "id": 5,
            "project": 0,
            "product": 4,
            "branch": 1,
            "module": 24,
            "execution": 0,
            "plan": 2,
            "story": 0,
            "storyVersion": 1,
            "task": 0,
            "toTask": 0,
            "toStory": 0,
            "title": "Bug1",
            "keywords": "",
            "severity": 3,
            "pri": 3,
            "type": "codeerror",
            "os": "",
            "browser": "",
            "hardware": "",
            "found": "",
            "steps": "<p>[步骤]</p><br /><p>[结果]</p><br /><p>[期望]</p><br />",
            "status": "active",
            "subStatus": "",
            "color": "",
            "confirmed": 0,
            "activatedCount": 0,
            "activatedDate": "0000-00-00 00:00:00",
            "mailto": "",
            "openedBy": "admin",
            "openedDate": "2021-11-29 13:02:34",
            "openedBuild": "trunk",
            "assignedTo": "",
            "assignedDate": "0000-00-00 00:00:00",
            "deadline": "2021-11-29",
            "resolvedBy": "",
            "resolution": "",
            "resolvedBuild": "",
            "resolvedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "duplicateBug": 0,
            "linkBug": "",
            "case": 0,
            "caseVersion": 0,
            "result": 0,
            "repo": 0,
            "entry": "",
            "lines": "",
            "v1": "",
            "v2": "",
            "repoType": "",
            "testtask": 0,
            "lastEditedBy": "",
            "lastEditedDate": "0000-00-00 00:00:00",
            "deleted": "0"
        }
    ]
}
```


---

## 2.7.4 修改计划

- **手册编号**: `2.7.4`
- **页面 ID**: `683`
- **官方文档**: https://www.zentao.net/book/api/683.html
- **Method**: `PUT`
- **Path**: `/productplans/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id`

### 请求URL

https://xxx.com/api.php/v1/productplans/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| branch | int | 否 | 所属分支 |
| title | string | 是 | 计划名称 |
| begin | date | 否 | 计划开始日期 |
| end | date | 否 | 计划结束日期 |
| desc | string | 否 | 计划描述 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 2,
    "product": 4,
    "branch": 0,
    "parent": 0,
    "title": "主干计划",
    "desc": "",
    "begin": "2021-11-23",
    "end": "2021-11-29",
    "order": "",
    "deleted": false,
    "stories": [
        {
            "story": 12,
            "plan": "2",
            "order": 1,
            "id": 12,
            "parent": 0,
            "product": 4,
            "branch": 0,
            "module": 23,
            "source": "",
            "sourceNote": "",
            "fromBug": 0,
            "title": "主干需求",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 0,
            "estimate": 0,
            "status": "active",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": null,
            "openedBy": "admin",
            "openedDate": "2021-11-23 16:04:30",
            "assignedTo": "admin",
            "assignedDate": "2021-11-23 19:42:55",
            "lastEditedBy": "admin",
            "lastEditedDate": "2021-11-23 19:42:55",
            "reviewedBy": "",
            "reviewedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": "0"
        }
    ],
    "bugs": [
        {
            "id": 5,
            "project": 0,
            "product": 4,
            "branch": 1,
            "module": 24,
            "execution": 0,
            "plan": 2,
            "story": 0,
            "storyVersion": 1,
            "task": 0,
            "toTask": 0,
            "toStory": 0,
            "title": "Bug1",
            "keywords": "",
            "severity": 3,
            "pri": 3,
            "type": "codeerror",
            "os": "",
            "browser": "",
            "hardware": "",
            "found": "",
            "steps": "<p>[步骤]</p><br /><p>[结果]</p><br /><p>[期望]</p><br />",
            "status": "active",
            "subStatus": "",
            "color": "",
            "confirmed": 0,
            "activatedCount": 0,
            "activatedDate": "0000-00-00 00:00:00",
            "mailto": "",
            "openedBy": "admin",
            "openedDate": "2021-11-29 13:02:34",
            "openedBuild": "trunk",
            "assignedTo": "",
            "assignedDate": "0000-00-00 00:00:00",
            "deadline": "2021-11-29",
            "resolvedBy": "",
            "resolution": "",
            "resolvedBuild": "",
            "resolvedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "duplicateBug": 0,
            "linkBug": "",
            "case": 0,
            "caseVersion": 0,
            "result": 0,
            "repo": 0,
            "entry": "",
            "lines": "",
            "v1": "",
            "v2": "",
            "repoType": "",
            "testtask": 0,
            "lastEditedBy": "",
            "lastEditedDate": "0000-00-00 00:00:00",
            "deleted": "0"
        }
    ]
}
```


---

## 2.7.5 删除计划

- **手册编号**: `2.7.5`
- **页面 ID**: `684`
- **官方文档**: https://www.zentao.net/book/api/684.html
- **Method**: `DELETE`
- **Path**: `/productsplan/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/productsplan/id`

### 请求URL

https://xxx.com/api.php/v1/productsplan/id

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

## 2.7.6 产品计划关联需求

- **手册编号**: `2.7.6`
- **页面 ID**: `685`
- **官方文档**: https://www.zentao.net/book/api/685.html
- **Method**: `POST`
- **Path**: `/productplans/id/linkstories`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id/linkstories`

### 请求URL

https://xxx.com/api.php/v1/productplans/id/linkstories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| stories | array | 否 | 新增关联的需求，比如 [1, 2] |

### 请求示例

```json
{
    "stories": [ 11 ]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 4,
    "product": 4,
    "branch": 2,
    "parent": 0,
    "title": "分支2计划",
    "desc": "",
    "begin": "2021-11-30",
    "end": "2021-12-06",
    "order": "",
    "deleted": false,
    "stories": [
        {
            "story": 11,
            "plan": "4",
            "order": 1,
            "id": 11,
            "parent": 0,
            "product": 4,
            "branch": 2,
            "module": 22,
            "source": "",
            "sourceNote": "",
            "fromBug": 0,
            "title": "分支2需求",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 3,
            "estimate": 0,
            "status": "active",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": "",
            "openedBy": "admin",
            "openedDate": "2021-11-23 15:37:37",
            "assignedTo": "",
            "assignedDate": "0000-00-00 00:00:00",
            "lastEditedBy": "",
            "lastEditedDate": "0000-00-00 00:00:00",
            "reviewedBy": "",
            "reviewedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": "0"
        }
    ],
    "bugs": []
}
```


---

## 2.7.7 产品计划取消关联需求

- **手册编号**: `2.7.7`
- **页面 ID**: `686`
- **官方文档**: https://www.zentao.net/book/api/686.html
- **Method**: `POST`
- **Path**: `/productplans/id/unlinkstories`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id/unlinkstories`

### 请求URL

https://xxx.com/api.php/v1/productplans/id/unlinkstories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| stories | array | 是 | 取消关联的需求ID，比如 [1, 2] |

### 请求示例

```json
{
    "stories": [11]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 4,
    "product": 4,
    "branch": 2,
    "parent": 0,
    "title": "分支2计划",
    "desc": "",
    "begin": "2021-11-30",
    "end": "2021-12-06",
    "order": "",
    "deleted": false,
    "stories": [],
    "bugs": []
}
```


---

## 2.7.8 产品计划关联 Bug

- **手册编号**: `2.7.8`
- **页面 ID**: `687`
- **官方文档**: https://www.zentao.net/book/api/687.html
- **Method**: `POST`
- **Path**: `/productplans/id/linkbugs`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id/linkbugs`

### 请求URL

https://xxx.com/api.php/v1/productplans/id/linkbugs

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| bugs | array | 是 | 关联的Bug ID，比如 [1, 2] |

### 请求示例

```json
{
    "bugs": [7]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 4,
    "product": 4,
    "branch": 2,
    "parent": 0,
    "title": "分支2计划",
    "desc": "",
    "begin": "2021-11-30",
    "end": "2021-12-06",
    "order": "",
    "deleted": false,
    "stories": [],
    "bugs": [
        {
            "id": 7,
            "project": 0,
            "product": 4,
            "branch": 0,
            "module": 0,
            "execution": 0,
            "plan": 4,
            "story": 0,
            "storyVersion": 1,
            "task": 0,
            "toTask": 0,
            "toStory": 0,
            "title": "Bug1",
            "keywords": "",
            "severity": 3,
            "pri": 3,
            "type": "codeerror",
            "os": "",
            "browser": "",
            "hardware": "",
            "found": "",
            "steps": "<p>[步骤]</p>\n<br />\n<p>[结果]</p>\n<br />\n<p>[期望]</p>\n<br />",
            "status": "active",
            "subStatus": "",
            "color": "",
            "confirmed": 0,
            "activatedCount": 0,
            "activatedDate": "0000-00-00 00:00:00",
            "mailto": "",
            "openedBy": "admin",
            "openedDate": "2021-12-01 09:25:23",
            "openedBuild": "trunk",
            "assignedTo": "",
            "assignedDate": "0000-00-00 00:00:00",
            "deadline": "0000-00-00",
            "resolvedBy": "",
            "resolution": "",
            "resolvedBuild": "",
            "resolvedDate": "0000-00-00 00:00:00",
            "closedBy": "",
            "closedDate": "0000-00-00 00:00:00",
            "duplicateBug": 0,
            "linkBug": "",
            "case": 0,
            "caseVersion": 0,
            "result": 0,
            "repo": 0,
            "entry": "",
            "lines": "",
            "v1": "",
            "v2": "",
            "repoType": "",
            "testtask": 0,
            "lastEditedBy": "",
            "lastEditedDate": "0000-00-00 00:00:00",
            "deleted": "0"
        }
    ]
}
```


---

## 2.7.9 产品计划取消关联 Bug

- **手册编号**: `2.7.9`
- **页面 ID**: `688`
- **官方文档**: https://www.zentao.net/book/api/688.html
- **Method**: `POST`
- **Path**: `/productplans/id/unlinkbugs`
- **完整 URL 模板**: `https://{host}/api.php/v1/productplans/id/unlinkbugs`

### 请求URL

https://xxx.com/api.php/v1/productplans/id/unlinkbugs

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| bugs | array | 是 | 取消关联的Bug ID，比如 [1, 2] |

### 请求示例

```json
{
    "bugs": [7]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 计划ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属计划 |
| parent | int | 是 | 父计划 |
| title | string | 是 | 计划名称 |
| desc | string | 是 | 计划描述 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| stories | array | 是 | 关联需求 |
| ∟ id | int | 是 | 需求ID |
| ∟ title | string | 是 | 需求标题 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ category | string | 是 | 需求类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ pri | int | 是 | 需求优先级 |
| bugs | array | 是 | 关联Bug |
| ∟ id | int | 是 | Bug ID |
| ∟ product | int | 是 | 产品ID |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属模块 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ story | int | 是 | 相关需求 |
| ∟ title | string | 是 | Bug标题 |
| ∟ severity | int | 是 | 严重程度 |
| ∟ pri | int | 是 | Bug优先级 |
| ∟ type | string | 是 | Bug类型 |
| ∟ steps | string | 是 | Bug复现步骤 |
| ∟ status | string | 是 | Bug状态(active 激活 | resolved 已解决 | closed 已关闭) |

### 响应示例

```json
{
    "id": 4,
    "product": 4,
    "branch": 2,
    "parent": 0,
    "title": "分支2计划",
    "desc": "",
    "begin": "2021-11-30",
    "end": "2021-12-06",
    "order": "",
    "deleted": false,
    "stories": [],
    "bugs": []
}
```


---
