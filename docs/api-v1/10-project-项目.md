# 2.10 项目

> 禅道 RESTful API v1.0 · 模块文档（共 5 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.10.1 | 获取项目列表 | `GET` | `/projects` |
| 2.10.2 | 创建项目 | `POST` | `/projects` |
| 2.10.3 | 获取项目详情 | `GET` | `/projects/id` |
| 2.10.4 | 修改项目 | `PUT` | `/projects/id` |
| 2.10.5 | 删除项目 | `DELETE` | `/projects/id` |

---

## 2.10.1 获取项目列表

- **手册编号**: `2.10.1`
- **页面 ID**: `699`
- **官方文档**: https://www.zentao.net/book/api/699.html
- **Method**: `GET`
- **Path**: `/projects`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects`

### 请求URL

https://xxx.com/api.php/v1/projects

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求参数

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | String |   | 第几页，默认为1 |
| limit | String |   | 每页项目数量，默认20 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 页数 |
| total | int | 是 | 项目总数 |
| limit | int | 是 | 每页项目数 |
| projects | array | 是 | 项目列表 |
| ∟ id | int | 是 | 项目id |
| ∟ name | string | 是 | 项目名称 |
| ∟ code | string | 是 | 项目编号 |
| ∟ model | string | 是 | 项目模型(scrum敏捷 | waterfall 瀑布) |
| ∟ budget | int | 是 | 项目预算 |
| ∟ budgetUnit | string | 是 | 预算币种(CNY | USD) |
| ∟ parent | int | 是 | 所属项目集 |
| ∟ begin | date | 是 | 预计开始日期 |
| ∟ end | date | 是 | 预计结束日期 |
| ∟ status | string | 是 | 项目状态(wait 未开始 | doing 进行中 | suspend 已挂起 | closed 已关闭) |
| ∟ openedBy | string | 是 | 创建人 |
| ∟ openedDate | datetime | 否 | 创建时间 |
| ∟ PM | string | 否 | 项目经理 |
| ∟ progress | int | 否 | 进度 |

### 响应示例

```json
{
    "page": 1,
    "total": 2,
    "limit": 20,
    "projects": [
        {
            "id": 7,
            "name": "企业管理系统",
            "code": "",
            "model": "scrum",
            "type": "project",
            "budget": "0",
            "budgetUnit": "CNY",
            "parent": 6,
            "begin": "2021-06-05",
            "end": "2022-06-04",
            "status": "doing",
            "openedBy": "admin",
            "openedDate": "2021-04-28T03:22:04Z",
            "PM": "projectManager",
            "progress": 33
        },
        {
            "id": 8,
            "name": "分支项目",
            "code": "bb",
            "model": "scrum",
            "type": "project",
            "budget": "",
            "budgetUnit": "CNY",
            "parent": 6,
            "begin": "2021-11-23",
            "end": "2021-12-23",
            "status": "wait",
            "openedBy": "admin",
            "openedDate": "2021-11-23T07:45:16Z",
            "PM": "",
            "progress": 0
        }
    ]
}
```


---

## 2.10.2 创建项目

- **手册编号**: `2.10.2`
- **页面 ID**: `700`
- **官方文档**: https://www.zentao.net/book/api/700.html
- **Method**: `POST`
- **Path**: `/projects`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects`

### 请求URL

https://xxx.com/api.php/v1/projects

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 是 | 项目名称 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| products | array | 是 | 关联产品，比如 [1, 2]，不能为空。 |
| code | string | 是 | 项目编号 |
| model | string | 否 | 项目模型，默认为scrum |
| parent | int | 否 | 所属项目集，默认为0 |

### 请求示例

```json
{
    "name": "test",
    "code": "test",
    "begin": "2021-01-01",
    "end": "2022-01-01",
    "products": [1]
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 项目编号 |
| model | string | 是 | 项目模型(scrum 敏捷 | waterfall 瀑布) |
| budget | int | 是 | 预算金额 |
| budgetUnit | string | 是 | 预算币种(CNY | USD) |
| parent | int | 是 | 所属项目集 |
| name | string | 是 | 项目名称 |
| code | string | 是 | 项目代号 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| realBegan | date | 否 | 实际开始日期 |
| realEnd | date | 否 | 实际结束日期 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 9,
    "model": "scrum",
    "type": "project",
    "lifetime": "",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 0,
    "path": ",9,",
    "grade": 1,
    "name": "test",
    "code": "test",
    "begin": "2021-01-01",
    "end": "2022-01-01",
    "realBegan": "0000-00-00",
    "realEnd": "0000-00-00",
    "days": 0,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-11-25T09:12:30Z",
    "openedVersion": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-25T09:12:30Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "",
    "QD": "",
    "RD": "",
    "team": "test",
    "acl": "private",
    "whitelist": ",",
    "order": 45,
    "deleted": "0"
}
```


---

## 2.10.3 获取项目详情

- **手册编号**: `2.10.3`
- **页面 ID**: `701`
- **官方文档**: https://www.zentao.net/book/api/701.html
- **Method**: `GET`
- **Path**: `/projects/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id`

### 请求URL

https://xxx.com/api.php/v1/projects/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 项目编号 |
| parent | int | 是 | 所属项目集 |
| model | string | 是 | 项目模型(scrum 敏捷 | waterfall 瀑布) |
| budget | int | 是 | 项目预算金额 |
| budgetUnit | string | 是 | 预算币种(CNY | USD) |
| name | string | 是 | 项目名称 |
| code | string | 是 | 项目编号 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| realBegan | date | 是 | 实际开始日期 |
| realEnd | date | 是 | 实际结束日期 |
| status | string | 是 | 项目状态(wait 未开始 | doing 进行中 | suspend 已挂起 | closed 已关闭) |
| desc | string | 是 | 项目描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| PM |   | 是 | 项目负责人 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 是 | 白名单 |

### 响应示例

```json
{
    "id": 7,
    "project": 0,
    "model": "scrum",
    "type": "project",
    "lifetime": "sprint",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "extend",
    "parent": 6,
    "path": ",6,7,",
    "grade": 2,
    "name": "企业管理系统",
    "code": "",
    "begin": "2021-06-05",
    "end": "2022-06-04",
    "realBegan": null,
    "realEnd": null,
    "days": 0,
    "status": "doing",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-04-28T03:22:04Z",
    "openedVersion": "15.0.rc3",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-04-28T03:22:04Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "projectManager",
    "QD": "",
    "RD": "",
    "team": "",
    "acl": "open",
    "whitelist": ",tester3,admin",
    "order": 35,
    "deleted": false,
    "caseReview": false
}
```


---

## 2.10.4 修改项目

- **手册编号**: `2.10.4`
- **页面 ID**: `702`
- **官方文档**: https://www.zentao.net/book/api/702.html
- **Method**: `PUT`
- **Path**: `/projects/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id`

### 请求URL

https://xxx.com/api.php/v1/projects/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 否 | 项目名称 |
| code | string | 否 | 项目代号 |
| parent | int | 否 | 所属项目集 |
| PM | int | 否 | 项目负责人 |
| budget | int | 否 | 项目预算金额 |
| budgetUnit | string | 否 | 预算币种(CNY | USD) |
| days | int | 否 | 可用工作日 |
| desc | string | 否 | 项目描述 |
| acl | string | 否 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单 |
| auth | string | 否 | 权限控制(extend 继承 | reset 重新定义) |

### 请求示例

```json
{
    "name": "修改项目",
    "PM": "admin"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 项目名称 |
| name | string | 否 | 项目名称 |
| parent | int | 否 | 所属项目集 |
| code | string | 否 | 项目代号 |
| PM |   | 否 | 项目负责人 |
| budget | int | 否 | 项目预算金额 |
| budgetUnit | string | 否 | 预算币种(CNY | USD) |
| days | int | 否 | 可用工作日 |
| desc | string | 否 | 项目描述 |
| acl | string | 否 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单 |
| auth | string | 否 | 权限控制(extend 继承 | reset 重新定义) |

### 响应示例

```json
{
    "id": 12,
    "project": 0,
    "model": "scrum",
    "type": "project",
    "lifetime": "",
    "budget": "",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "extend",
    "parent": 0,
    "path": ",12,",
    "grade": 1,
    "name": "修改项目",
    "code": "tt",
    "begin": "2021-11-26",
    "end": "2021-12-26",
    "realBegan": "0000-00-00",
    "realEnd": "0000-00-00",
    "days": 21,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-11-26T02:27:15Z",
    "openedVersion": "",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-26T02:33:18Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "admin",
    "QD": "",
    "RD": "",
    "team": "修改项目",
    "acl": "private",
    "whitelist": ",",
    "order": 60,
    "deleted": "0"
}
```


---

## 2.10.5 删除项目

- **手册编号**: `2.10.5`
- **页面 ID**: `703`
- **官方文档**: https://www.zentao.net/book/api/703.html
- **Method**: `DELETE`
- **Path**: `/projects/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id`

### 请求URL

https://xxx.com/api.php/v1/projects/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| message | string | 是 | 响应信息 |

### 响应示例

```json
{
    "message": "success"
}
```


---
