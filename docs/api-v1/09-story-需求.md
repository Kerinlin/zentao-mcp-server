# 2.9 需求

> 禅道 RESTful API v1.0 · 模块文档（共 9 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.9.1 | 获取产品需求列表 | `GET` | `/products/id/stories` |
| 2.9.2 | 获取项目需求列表 | `GET` | `/projects/id/stories` |
| 2.9.3 | 获取执行需求列表 | `GET` | `/executions/id/stories` |
| 2.9.4 | 创建需求 | `POST` | `/stories` |
| 2.9.5 | 获取需求详情 | `GET` | `/stories/id` |
| 2.9.6 | 变更需求 | `POST` | `/stories/id/change` |
| 2.9.7 | 修改需求其他字段 | `PUT` | `/stories/id` |
| 2.9.8 | 删除需求 | `DELETE` | `/stories/id` |
| 2.9.9 | 关闭需求 | `POST` | `/stories/id/close` |

---

## 2.9.1 获取产品需求列表

- **手册编号**: `2.9.1`
- **页面 ID**: `691`
- **官方文档**: https://www.zentao.net/book/api/691.html
- **Method**: `GET`
- **Path**: `/products/id/stories`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/stories`

### 请求URL

https://xxx.com/api.php/v1/products/id/stories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求参数

| page | String | 否 | 当前页数 |
| --- | --- | --- | --- |
| limit | String | 否 | 每页需求数 |
| status | String | 否 | 需求类型(allstory 全部|unclosed 未关闭|assignedtome 指给我|openedbyme 我创建|reviewbyme 待我评审|draftstory 草稿|reviewedbyme 我评审|assignedbyme 我指派|closedbyme 我关闭|activestory 激活|changingstory 变更中|reviewingstory 评审中|willclose 待关闭|closedstory 已关闭|feedback 来自反馈) |

请求响应

| page | int | 是 | 当前页面 |
| --- | --- | --- | --- |
| total | int | 是 | 需求总数 |
| limit | int | 是 | 每页需求数 |
| stories | array | 是 | 需求列表 |
| ∟ id | int | 是 | 需求ID |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属产品模块 |
| ∟ fromBug | int | 是 | 来自于Bug |
| ∟ source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| ∟ sourceNote | string | 是 | 来源备注 |
| ∟ title | string | 是 | 需求标题 |
| ∟ category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| ∟ pri | int | 是 | 优先级 |
| ∟ estimate | int | 是 | 预计工时 |
| ∟ status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ toBug | int | 是 | 转为Bug |

### 响应示例

```
 "page": 1,
    "total": 1,
    "limit": 20,
    "stories": [
        {
            "id": 7,
            "parent": 0,
            "product": 1,
            "branch": 0,
            "module": 7,
            "plan": "1",
            "source": "po",
            "sourceNote": "",
            "fromBug": 0,
            "title": "关于我们的设计和开发",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 1,
            "estimate": 1,
            "status": "draft",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": "",
            "openedBy": "productManager",
            "openedDate": "2012-06-05T02:24:19Z",
            "assignedTo": "productManager",
            "assignedDate": "2012-06-05T02:24:19Z",
            "lastEditedBy": "",
            "lastEditedDate": null,
            "reviewedBy": "",
            "reviewedDate": null,
            "closedBy": "",
            "closedDate": null,
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": false,
            "planTitle": "1.0版本 "
        }
    ]
}
```


---

## 2.9.2 获取项目需求列表

- **手册编号**: `2.9.2`
- **页面 ID**: `692`
- **官方文档**: https://www.zentao.net/book/api/692.html
- **Method**: `GET`
- **Path**: `/projects/id/stories`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/stories`

### 请求URL

https://xxx.com/api.php/v1/projects/id/stories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页面 |
| total | int | 是 | 需求总数 |
| limit | int | 是 | 每页需求数 |
| stories | array | 是 | 需求列表 |
| ∟ id | int | 是 | 需求ID |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属产品模块 |
| ∟ fromBug | int | 是 | 来自于Bug |
| ∟ source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| ∟ sourceNote | string | 是 | 来源备注 |
| ∟ title | string | 是 | 需求标题 |
| ∟ category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| ∟ pri | int | 是 | 优先级 |
| ∟ estimate | int | 是 | 预计工时 |
| ∟ status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ toBug | int | 是 | 转为Bug |

### 响应示例

```
 "page": 1,
    "total": 1,
    "limit": 20,
    "stories": [
        {
            "id": 7,
            "parent": 0,
            "product": 1,
            "branch": 0,
            "module": 7,
            "plan": "1",
            "source": "po",
            "sourceNote": "",
            "fromBug": 0,
            "title": "关于我们的设计和开发",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 1,
            "estimate": 1,
            "status": "draft",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": "",
            "openedBy": "productManager",
            "openedDate": "2012-06-05T02:24:19Z",
            "assignedTo": "productManager",
            "assignedDate": "2012-06-05T02:24:19Z",
            "lastEditedBy": "",
            "lastEditedDate": null,
            "reviewedBy": "",
            "reviewedDate": null,
            "closedBy": "",
            "closedDate": null,
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": false,
            "planTitle": "1.0版本 "
        }
    ]
}
```


---

## 2.9.3 获取执行需求列表

- **手册编号**: `2.9.3`
- **页面 ID**: `693`
- **官方文档**: https://www.zentao.net/book/api/693.html
- **Method**: `GET`
- **Path**: `/executions/id/stories`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id/stories`

### 请求URL

https://xxx.com/api.php/v1/executions/id/stories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页面 |
| total | int | 是 | 需求总数 |
| limit | int | 是 | 每页需求数 |
| stories | array | 是 | 需求列表 |
| ∟ id | int | 是 | 需求ID |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ module | int | 是 | 所属产品模块 |
| ∟ fromBug | int | 是 | 来自于Bug |
| ∟ source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| ∟ sourceNote | string | 是 | 来源备注 |
| ∟ title | string | 是 | 需求标题 |
| ∟ category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| ∟ stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| ∟ pri | int | 是 | 优先级 |
| ∟ estimate | int | 是 | 预计工时 |
| ∟ status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ toBug | int | 是 | 转为Bug |

### 响应示例

```
 "page": 1,
    "total": 1,
    "limit": 20,
    "stories": [
        {
            "id": 7,
            "parent": 0,
            "product": 1,
            "branch": 0,
            "module": 7,
            "plan": "1",
            "source": "po",
            "sourceNote": "",
            "fromBug": 0,
            "title": "关于我们的设计和开发",
            "keywords": "",
            "type": "story",
            "category": "feature",
            "pri": 1,
            "estimate": 1,
            "status": "draft",
            "subStatus": "",
            "color": "",
            "stage": "planned",
            "stagedBy": "",
            "mailto": "",
            "openedBy": "productManager",
            "openedDate": "2012-06-05T02:24:19Z",
            "assignedTo": "productManager",
            "assignedDate": "2012-06-05T02:24:19Z",
            "lastEditedBy": "",
            "lastEditedDate": null,
            "reviewedBy": "",
            "reviewedDate": null,
            "closedBy": "",
            "closedDate": null,
            "closedReason": "",
            "toBug": 0,
            "childStories": "",
            "linkStories": "",
            "duplicateStory": 0,
            "version": 1,
            "URChanged": "0",
            "deleted": false,
            "planTitle": "1.0版本 "
        }
    ]
}
```


---

## 2.9.4 创建需求

- **手册编号**: `2.9.4`
- **页面 ID**: `694`
- **官方文档**: https://www.zentao.net/book/api/694.html
- **Method**: `POST`
- **Path**: `/stories`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories`

### 请求URL

https://xxx.com/api.php/v1/stories

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| title | string | 是 | 需求标题 |
| product | int | 是 | 所属产品 |
| pri | int | 是 | 优先级 |
| category | string | 是 | 需求类型 |
| spec | string | 否 | 需求描述 |
| verify | string | 否 | 验收标准 |
| source | string | 否 | 需求来源 |
| sourceNote | string | 否 | 来源备注 |
| estimate | float | 否 | 预计工时 |
| keywords | string | 否 | 关键词 |

### 请求示例

```json
{
    "title": "测试需求",
    "spec": "测试",
    "product": 1, 

	 "pri": 1,


	 "reviewer": ["admin"],

 "category": "feature"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 需求ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属产品模块 |
| fromBug | int | 是 | 来自于Bug |
| source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| sourceNote | string | 是 | 来源备注 |
| title | string | 是 | 需求标题 |
| category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| verify | string | 是 | 验收标准 |
| status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| toBug | int | 是 | 转为Bug |

### 响应示例

```json
{
    "id": 14,
    "parent": 0,
    "product": 1,
    "branch": 0,
    "module": 0,
    "plan": "",
    "source": "",
    "sourceNote": "",
    "fromBug": 0,
    "title": "测试需求",
    "keywords": "",
    "type": "story",
    "category": "feature",
    "pri": 1,
    "estimate": 0,
    "status": "active",
    "subStatus": "",
    "color": "",
    "stage": "wait",
    "stagedBy": "",
    "mailto": null,
    "openedBy": "admin",
    "openedDate": "2021-11-29T01:18:02Z",
    "assignedTo": "",
    "assignedDate": null,
    "lastEditedBy": "",
    "lastEditedDate": null,
    "reviewedBy": "",
    "reviewedDate": null,
    "closedBy": "",
    "closedDate": null,
    "closedReason": "",
    "toBug": 0,
    "childStories": "",
    "linkStories": "",
    "duplicateStory": 0,
    "version": 1,
    "URChanged": "0",
    "deleted": false,
    "spec": "测试",
    "verify": "",
    "executions": [],
    "tasks": [],
    "stages": [],
    "children": []
}
```


---

## 2.9.5 获取需求详情

- **手册编号**: `2.9.5`
- **页面 ID**: `695`
- **官方文档**: https://www.zentao.net/book/api/695.html
- **Method**: `GET`
- **Path**: `/stories/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories/id`

### 请求URL

https://xxx.com/api.php/v1/stories/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 需求ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属产品模块 |
| fromBug | int | 是 | 来自于Bug |
| source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| sourceNote | string | 是 | 来源备注 |
| title | string | 是 | 需求标题 |
| category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| verify | string | 是 | 验收标准 |
| status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| toBug | int | 是 | 转为Bug |

### 响应示例

```json
{
    "id": 14,
    "parent": 0,
    "product": 1,
    "branch": 0,
    "module": 0,
    "plan": "",
    "source": "",
    "sourceNote": "",
    "fromBug": 0,
    "title": "测试需求",
    "keywords": "",
    "type": "story",
    "category": "feature",
    "pri": 1,
    "estimate": 0,
    "status": "active",
    "subStatus": "",
    "color": "",
    "stage": "wait",
    "stagedBy": "",
    "mailto": null,
    "openedBy": "admin",
    "openedDate": "2021-11-29T01:18:02Z",
    "assignedTo": "",
    "assignedDate": null,
    "lastEditedBy": "",
    "lastEditedDate": null,
    "reviewedBy": "",
    "reviewedDate": null,
    "closedBy": "",
    "closedDate": null,
    "closedReason": "",
    "toBug": 0,
    "childStories": "",
    "linkStories": "",
    "duplicateStory": 0,
    "version": 1,
    "URChanged": "0",
    "deleted": false,
    "spec": "测试",
    "verify": "",
    "executions": [],
    "tasks": [],
    "stages": [],
    "children": []
}
```


---

## 2.9.6 变更需求

- **手册编号**: `2.9.6`
- **页面 ID**: `696`
- **官方文档**: https://www.zentao.net/book/api/696.html
- **Method**: `POST`
- **Path**: `/stories/id/change`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories/id/change`

### 请求URL

https://xxx.com/api.php/v1/stories/id/change

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| title | string | 否 | 需求标题 |
| spec | string | 否 | 需求描述 |
| verify | string | 否 | 验收标准 |

### 请求示例

```json
{
    "spec": "变更描述"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 需求ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属产品模块 |
| fromBug | int | 是 | 来自于Bug |
| source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| sourceNote | string | 是 | 来源备注 |
| title | string | 是 | 需求标题 |
| category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| verify | string | 是 | 验收标准 |
| status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| toBug | int | 是 | 转为Bug |

### 响应示例

```json
{
    "id": 1,
    "parent": 0,
    "product": 1,
    "branch": 0,
    "module": 1,
    "plan": "1",
    "source": "po",
    "sourceNote": "",
    "fromBug": 0,
    "title": "首页设计和开发",
    "keywords": "",
    "type": "story",
    "category": "feature",
    "pri": 1,
    "estimate": 1,
    "status": "active",
    "subStatus": "",
    "color": "",
    "stage": "developing",
    "stagedBy": "",
    "mailto": "",
    "openedBy": "productManager",
    "openedDate": "2012-06-05T02:09:49Z",
    "assignedTo": "productManager",
    "assignedDate": null,
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-29T01:43:18Z",
    "reviewedBy": "",
    "reviewedDate": null,
    "closedBy": "",
    "closedDate": null,
    "closedReason": "",
    "toBug": 0,
    "childStories": "",
    "linkStories": "",
    "duplicateStory": 0,
    "version": 2,
    "URChanged": "0",
    "deleted": "0",
    "spec": "变更描述",
    "verify": "开发并通过验收<br />",
    "executions": {
        "1": {
            "project": 1,
            "name": "企业网站第一期",
            "status": "doing"
        }
    },
    "tasks": {
        "1": [
            {
                "id": 11,
                "name": "首页页面的开发",
                "assignedTo": "dev1",
                "execution": 1,
                "status": "doing",
                "consumed": 0,
                "left": 8,
                "type": "devel"
            },
            {
                "id": 10,
                "name": "首页页面的设计",
                "assignedTo": "dev1",
                "execution": 1,
                "status": "done",
                "consumed": 8,
                "left": 0,
                "type": "design"
            }
        ]
    },
    "stages": [],
    "planTitle": {
        "1": "1.0版本"
    },
    "children": []
}
```


---

## 2.9.7 修改需求其他字段

- **手册编号**: `2.9.7`
- **页面 ID**: `697`
- **官方文档**: https://www.zentao.net/book/api/697.html
- **Method**: `PUT`
- **Path**: `/stories/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories/id`

### 请求URL

https://xxx.com/api.php/v1/stories/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| module | int | 否 | 所属模块 |
| source | string | 否 | 来源 |
| sourceNote | string | 否 | 来源备注 |
| pri | int | 否 | 优先级 |
| category | string | 否 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| estimate | float | 否 | 预计工时 |
| keywords | string | 否 | 关键词 |

### 请求示例

```json
{
    "category": "other"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 需求ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属产品模块 |
| fromBug | int | 是 | 来自于Bug |
| source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| sourceNote | string | 是 | 来源备注 |
| title | string | 是 | 需求标题 |
| category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| verify | string | 是 | 验收标准 |
| status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| toBug | int | 是 | 转为Bug |

### 响应示例

```json
{
    "id": 14,
    "parent": 0,
    "product": 1,
    "branch": 0,
    "module": 0,
    "plan": "",
    "source": "",
    "sourceNote": "",
    "fromBug": 0,
    "title": "测试需求",
    "keywords": "",
    "type": "story",
    "category": "feature",
    "pri": 1,
    "estimate": 0,
    "status": "active",
    "subStatus": "",
    "color": "",
    "stage": "wait",
    "stagedBy": "",
    "mailto": null,
    "openedBy": "admin",
    "openedDate": "2021-11-29T01:18:02Z",
    "assignedTo": "",
    "assignedDate": null,
    "lastEditedBy": "",
    "lastEditedDate": null,
    "reviewedBy": "",
    "reviewedDate": null,
    "closedBy": "",
    "closedDate": null,
    "closedReason": "",
    "toBug": 0,
    "childStories": "",
    "linkStories": "",
    "duplicateStory": 0,
    "version": 1,
    "URChanged": "0",
    "deleted": false,
    "spec": "测试",
    "verify": "",
    "executions": [],
    "tasks": [],
    "stages": [],
    "children": []
}
```


---

## 2.9.8 删除需求

- **手册编号**: `2.9.8`
- **页面 ID**: `698`
- **官方文档**: https://www.zentao.net/book/api/698.html
- **Method**: `DELETE`
- **Path**: `/stories/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories/id`

### 请求URL

https://xxx.com/api.php/v1/stories/id

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

## 2.9.9 关闭需求

- **手册编号**: `2.9.9`
- **页面 ID**: `1060`
- **官方文档**: https://www.zentao.net/book/api/1060.html
- **Method**: `POST`
- **Path**: `/stories/id/close`
- **完整 URL 模板**: `https://{host}/api.php/v1/stories/id/close`

### 请求URL

https://xxx.com/api.php/v1/stories/id/close

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| closedReason | string | 是 | 关闭原因（done 已完成 | duplicate 重复 | postponed 延期 | willnotdo 不做 | cancel 已取消 | bydesign 设计如此） |
| duplicate | int | 否 | 重复研发需求 当 closedReason 选择为 duplicate 时，传入重复研发需求的 ID |
| comment | string | 否 | 备注 |

### 请求示例

```json
{
    "closedReason":"done",
    "comment":"close the story"
}
```

请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 需求ID |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属分支 |
| module | int | 是 | 所属产品模块 |
| fromBug | int | 是 | 来自于Bug |
| source | string | 是 | 需求来源(customer 客户 | user 用户 | po 产品经理 | market 市场) |
| sourceNote | string | 是 | 来源备注 |
| title | string | 是 | 需求标题 |
| category | string | 是 | 类型(feature 功能 | interface 接口 | performance 性能 | safe 安全 | experience 体验 | improve 改进 | other 其他) |
| stage | string | 是 | 阶段(wait 未开始 | planned 已计划 | projected 已立项 | developing 研发中 | developed 研发完毕 | testing 测试中 | tested 测试完毕 | verified 已验收 | released 已发布 | closed 已关闭) |
| pri | int | 是 | 优先级 |
| estimate | float | 是 | 预计工时 |
| verify | string | 是 | 验收标准 |
| status | string | 是 | 状态(draft 草稿 | active 激活 | closed 已关闭 | changed 已变更) |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| toBug | int | 是 | 转为Bug |

### 响应示例

```json
{
    "id": 1,
    "vision": "rnd",
    "parent": 0,
    "product": 1,
    "branch": 0,
    "module": 0,
    "plan": "",
    "source": "",
    "sourceNote": "",
    "fromBug": 0,
    "feedback": 2,
    "title": "222",
    "keywords": "",
    "type": "story",
    "category": "feature",
    "pri": 3,
    "estimate": 0,
    "status": "closed",
    "subStatus": "",
    "color": "",
    "stage": "closed",
    "stagedBy": "",
    "mailto": null,
    "lib": 0,
    "fromStory": 0,
    "fromVersion": 1,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": null,
        "realname": "admin"
    },
    "openedDate": "2023-08-15T09:37:49Z",
    "assignedTo": null,
    "assignedDate": "2023-08-18T01:30:43Z",
    "approvedDate": null,
    "lastEditedBy": {
        "id": 1,
        "account": "admin",
        "avatar": null,
        "realname": "admin"
    },
    "lastEditedDate": "2023-08-18T01:30:43Z",
    "changedBy": "",
    "changedDate": null,
    "reviewedBy": null,
    "reviewedDate": null,
    "closedBy": {
        "id": 1,
        "account": "admin",
        "avatar": null,
        "realname": "admin"
    },
    "closedDate": "2023-08-18T01:30:43Z",
    "closedReason": "duplicate",
    "activatedDate": null,
    "toBug": 0,
    "childStories": "",
    "linkStories": "",
    "linkRequirements": "",
    "twins": "",
    "duplicateStory": 2,
    "version": 1,
    "storyChanged": "0",
    "feedbackBy": "",
    "notifyEmail": "",
    "BSA": "",
    "duration": "",
    "demand": 0,
    "submitedBy": "",
    "roadmap": "",
    "URChanged": "0",
    "deleted": false,
    "spec": "",
    "verify": "",
    "files": [],
    "executions": [],
    "tasks": [],
    "stages": [],
    "extraStories": {
        "2": "222"
    },
    "children": [],
    "feedbackTitle": "222"
}
```


---
