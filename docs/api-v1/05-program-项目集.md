# 2.5 项目集

> 禅道 RESTful API v1.0 · 模块文档（共 5 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.5.1 | 获取项目集列表 | `GET` | `/programs` |
| 2.5.2 | 修改项目集 | `PUT` | `/programs/id` |
| 2.5.3 | 获取项目集详情 | `GET` | `/programs/id` |
| 2.5.4 | 删除项目集 | `DELETE` | `/programs/id` |
| 2.5.5 | 创建项目集 | `POST` | `/programs` |

---

## 2.5.1 获取项目集列表

- **手册编号**: `2.5.1`
- **页面 ID**: `670`
- **官方文档**: https://www.zentao.net/book/api/670.html
- **Method**: `GET`
- **Path**: `/programs`
- **完整 URL 模板**: `https://{host}/api.php/v1/programs`

### 请求URL

https://xxx.com/api.php/v1/programs

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 访问凭证Token |

### 请求参数

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| order | String |   | 排序，默认order_asc；排序字段+下划线+asc/desc |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| programs | array | 是 | 项目集列表 |
| ∟ id | int | 是 | 项目集ID |
| ∟ name | string | 是 | 项目集名称 |
| ∟ budget | int | 是 | 预算金额 |
| ∟ budgetUnit | string | 是 | 预算币种(CNY/USD) |
| ∟ begin | date | 是 | 预计开始日期 |
| ∟ end | date | 是 | 预计结束日期 |
| ∟ realBegan | date | 是 | 实际开始日期 |
| ∟ realEnd | date | 是 | 实际结束日期 |
| ∟ parent | int | 是 | 父项目集，顶层项目集的parent为0 |
| ∟ openedBy |   | 是 | 由谁创建 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ PM |   | 是 | 项目集负责人 |
| ∟ progress | int | 是 | 进度 |

### 响应示例

```json
{
    "programs": [
        {
            "id": 6,
            "project": 0,
            "model": "",
            "type": "program",
            "lifetime": "sprint",
            "budget": "0",
            "budgetUnit": "CNY",
            "attribute": "",
            "percent": 0,
            "milestone": "0",
            "output": "",
            "auth": "",
            "parent": 0,
            "path": ",6,",
            "grade": 1,
            "name": "企业管理",
            "code": "",
            "begin": "2021-06-05",
            "end": "2022-06-04",
            "realBegan": "2021-12-01",
            "realEnd": "2021-12-01",
            "days": 0,
            "status": "doing",
            "subStatus": "",
            "pri": "1",
            "desc": "",
            "version": 0,
            "parentVersion": 0,
            "planDuration": 0,
            "realDuration": 0,
            "openedBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "openedDate": "2021-04-28T03:22:04Z",
            "openedVersion": "15.0.rc3",
            "lastEditedBy": "",
            "lastEditedDate": "2021-11-30T16:00:00Z",
            "closedBy": null,
            "closedDate": "2021-11-30T16:00:00Z",
            "canceledBy": null,
            "canceledDate": "2021-11-30T16:00:00Z",
            "PO": null,
            "PM": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "QD": null,
            "RD": null,
            "team": "企业管理",
            "acl": "open",
            "whitelist": ",",
            "order": 30,
            "deleted": false,
            "progress": 0
        }
    ]
}
```


---

## 2.5.2 修改项目集

- **手册编号**: `2.5.2`
- **页面 ID**: `671`
- **官方文档**: https://www.zentao.net/book/api/671.html
- **Method**: `PUT`
- **Path**: `/programs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/programs/id`

### 请求URL

https://xxx.com/api.php/v1/programs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 否 | 项目名称 |
| parent | string | 否 | 父项目集，0表示没有父项目集 |
| PM | string | 否 | 项目负责人 |
| budget | int | 否 | 预算金额 |
| budgetUnit | string | 否 | 预算币种(CNY | USD) |
| desc | string | 否 | 项目集描述 |
| begin | date | 否 | 预计开始日期 |
| end | date | 否 | 预计结束日期 |
| acl | string | 否 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单 |

### 请求示例

```json
{
    "name": "项目集",
    "PM": "admin"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 |   |
| name | string | 是 | 项目名称 |
| budget | int | 是 | 预算金额 |
| budgetUnit | string | 是 | 预算币种(CNY | USD) |
| parent | int | 是 | 父项目集 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| realBegan | date | 是 | 实际开始日期 |
| realEnd | date | 是 | 实际结束日期 |
| desc | string | 是 | 项目集描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | string | 是 | 创建时间 |
| PM |   | 否 | 负责人 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 是 | 白名单 |

### 响应示例

```json
{
    "id": 12,
    "project": 0,
    "model": "",
    "type": "program",
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
    "name": "项目集",
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

## 2.5.3 获取项目集详情

- **手册编号**: `2.5.3`
- **页面 ID**: `672`
- **官方文档**: https://www.zentao.net/book/api/672.html
- **Method**: `GET`
- **Path**: `/programs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/programs/id`

### 请求URL

https://xxx.com/api.php/v1/programs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 项目集ID |
| name | string | 是 | 项目集名称 |
| PM | string | 是 | 负责人 |
| budget | int | 是 | 预算金额 |
| budgetUnit | string | 是 | 预算币种(CNY | USD) |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| realBegan | date | 是 | 实际开始日期 |
| realEnd | date | 是 | 实际结束日期 |
| desc | string | 是 | 项目集描述 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 是 | 白名单 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |
| PM |   | 否 | 项目负责人 |

### 响应示例

```json
{
    "id": 14,
    "project": 0,
    "model": "",
    "type": "program",
    "lifetime": "",
    "budget": "11111",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 0,
    "path": ",14,",
    "grade": 1,
    "name": "测试项目集",
    "code": "",
    "begin": "2021-11-26",
    "end": "2021-12-26",
    "realBegan": null,
    "realEnd": null,
    "days": 0,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "openedDate": "2021-11-26T10:05:51Z",
    "openedVersion": "",
    "lastEditedBy": "",
    "lastEditedDate": null,
    "closedBy": null,
    "closedDate": null,
    "canceledBy": null,
    "canceledDate": null,
    "PO": null,
    "PM": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "QD": null,
    "RD": null,
    "team": "",
    "acl": "private",
    "whitelist": [],
    "order": 70,
    "deleted": false
}
```


---

## 2.5.4 删除项目集

- **手册编号**: `2.5.4`
- **页面 ID**: `673`
- **官方文档**: https://www.zentao.net/book/api/673.html
- **Method**: `DELETE`
- **Path**: `/programs/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/programs/id`

### 请求URL

https://xxx.com/api.php/v1/programs/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| message | string | 是 | success |

### 响应示例

```json
{
    "message": "sucess"
}
```


---

## 2.5.5 创建项目集

- **手册编号**: `2.5.5`
- **页面 ID**: `674`
- **官方文档**: https://www.zentao.net/book/api/674.html
- **Method**: `POST`
- **Path**: `/programs`
- **完整 URL 模板**: `https://{host}/api.php/v1/programs`

### 请求URL

https://xxx.com/api.php/v1/programs

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 否 | 项目名称 |
| parent | string | 否 | 父项目集，0表示没有父项目集 |
| PM | string | 否 | 项目负责人 |
| budget | int | 否 | 预算金额 |
| budgetUnit | string | 否 | 预算币种(CNY | USD) |
| desc | string | 否 | 项目集描述 |
| begin | date | 否 | 预计开始日期 |
| end | date | 否 | 预计结束日期 |
| acl | string | 否 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单，只有acl = private才生效 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 |   |
| name | string | 是 | 项目名称 |
| budget | int | 是 | 预算金额 |
| budgetUnit | string | 是 | 预算币种(CNY | USD) |
| parent | int | 是 | 父项目集 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| realBegan | date | 是 | 实际开始日期 |
| realEnd | date | 是 | 实际结束日期 |
| desc | string | 是 | 项目集描述 |
| openedBy |   | 是 | 创建人 |
| openedDate | string | 是 | 创建时间 |
| PM |   | 否 | 负责人 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 是 | 白名单 |

### 响应示例

```json
{
    "id": 43,
    "project": 0,
    "model": "",
    "type": "program",
    "lifetime": "",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 0,
    "path": ",43,",
    "grade": 1,
    "name": "项目集21",
    "code": "",
    "begin": "2021-09-11",
    "end": "2021-12-31",
    "realBegan": null,
    "realEnd": null,
    "days": 0,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": {
        "id": 1,
        "account": "admin",
        "avatar": "",
        "realname": "管理员"
    },
    "openedDate": "2021-12-03T02:07:36Z",
    "openedVersion": "",
    "lastEditedBy": "",
    "lastEditedDate": null,
    "closedBy": null,
    "closedDate": null,
    "canceledBy": null,
    "canceledDate": null,
    "PO": null,
    "PM": null,
    "QD": null,
    "RD": null,
    "team": "",
    "acl": "private",
    "whitelist": [
        {
            "id": 1,
            "account": "admin",
            "avatar": "",
            "realname": "管理员"
        }
    ],
    "order": 215,
    "deleted": false
}
```


---
