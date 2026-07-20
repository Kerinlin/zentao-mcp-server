# 2.6 产品

> 禅道 RESTful API v1.0 · 模块文档（共 5 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.6.1 | 获取产品列表 | `GET` | `/products` |
| 2.6.2 | 创建产品 | `POST` | `/products` |
| 2.6.3 | 获取产品详情 | `GET` | `/products/id` |
| 2.6.4 | 编辑产品 | `PUT` | `/product/id` |
| 2.6.5 | 删除产品 | `DELETE` | `/products/id` |

---

## 2.6.1 获取产品列表

- **手册编号**: `2.6.1`
- **页面 ID**: `675`
- **官方文档**: https://www.zentao.net/book/api/675.html
- **Method**: `GET`
- **Path**: `/products`
- **完整 URL 模板**: `https://{host}/api.php/v1/products`

### 请求URL

https://xxx.com/api.php/v1/products

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 否 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| products | array | 是 |   |
| ∟ id | int | 是 | 产品ID |
| ∟ program | int | 是 | 所属项目集 |
| ∟ name | string | 是 | 产品名称 |
| ∟ code | string | 是 | 产品代号 |
| ∟ line | int | 是 | 所属产品线 |
| ∟ PO |   | 否 | 产品负责人 |
| ∟ QD |   | 否 | 测试负责人 |
| ∟ RD |   | 否 | 发布负责人 |
| ∟ type | string | 是 | 产品类型（normal 正常 | branch 多分支 | platform 多平台） |
| ∟ desc | string | 是 | 产品描述 |
| ∟ acl | string | 是 | 访问控制（open 公开 | private 私有） |
| ∟ whitelist | array | 否 | 白名单 |
| ∟ createdBy |   | 是 | 创建人 |
| ∟ createdDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "total": 1,
    "products": [
        {
            "id": 6,
            "program": 6,
            "name": "测试",
            "code": "",
            "bind": "1",
            "line": 0,
            "type": "normal",
            "status": "normal",
            "subStatus": "",
            "desc": "",
            "PO": {
                "id": 2,
                "account": "productManager",
                "avatar": "",
                "realname": "产品经理"
            },
            "QD": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "RD": {
                "id": 2,
                "account": "productManager",
                "avatar": "",
                "realname": "产品经理"
            },
            "acl": "private",
            "whitelist": [
                {
                    "id": 1,
                    "account": "admin",
                    "avatar": "",
                    "realname": "管理员"
                },
                {
                    "id": 2,
                    "account": "productManager",
                    "avatar": "",
                    "realname": "产品经理"
                }
            ],
            "reviewer": "",
            "createdBy": {
                "id": 1,
                "account": "admin",
                "avatar": "",
                "realname": "管理员"
            },
            "createdDate": "2021-12-01T05:17:04Z",
            "createdVersion": "15.8",
            "order": 30,
            "deleted": "0",
            "lineName": "",
            "programName": "企业管理",
            "stories": {
                "0": "",
                "1": "draft",
                "2": "active",
                "3": "closed",
                "4": "changed",
                "": 0,
                "draft": 0,
                "active": 0,
                "closed": 0,
                "changed": 0
            },
            "requirements": {
                "0": "",
                "1": "draft",
                "2": "active",
                "3": "closed",
                "4": "changed",
                "": 0,
                "draft": 0,
                "active": 0,
                "closed": 0,
                "changed": 0
            },
            "plans": 0,
            "releases": 0,
            "bugs": 0,
            "unResolved": 0,
            "closedBugs": 0,
            "fixedBugs": 0,
            "thisWeekBugs": 0,
            "assignToNull": 0,
            "progress": 0
        }
    ]
}
```


---

## 2.6.2 创建产品

- **手册编号**: `2.6.2`
- **页面 ID**: `676`
- **官方文档**: https://www.zentao.net/book/api/676.html
- **Method**: `POST`
- **Path**: `/products`
- **完整 URL 模板**: `https://{host}/api.php/v1/products`

### 请求URL

https://xxx.com/api.php/v1/products

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 是 | 产品名称 |
| program | int | 是 | 所属项目集 |
| code | int | 是 | 产品代号 |
| line | int | 否 | 所属产品线 |
| PO |   | 否 | 产品负责人 |
| QD |   | 否 | 测试负责人 |
| RD |   | 否 | 发布负责人 |
| type | string | 否 | 产品类型(normal 正常 | branch 多分支 | ) |
| desc | string | 否 | 产品描述 |
| acl | string | 否 | 访问控制（open 公开 | private 私有） |
| whitelist | array | 否 | 白名单 |

### 请求示例

```json
{
    "name": "测试产品",
    "code": "test",
    "program": 1
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 否 | 产品ID |
| name | string | 否 | 产品名称 |
| program | int | 否 | 所属项目集 |
| code | string | 否 | 产品代号 |
| line | int | 否 | 产品线 |
| type | string | 否 | 产品类型(normal 正常 | branch 多分支 | platform 多平台) |
| status | string | 否 | 状态(normal 正常 | closed 结束) |
| PO | string | 否 | 产品负责人 |
| QD | string | 否 | 测试负责人 |
| RD | string | 否 | 发布负责人 |
| acl | string | 否 | 访问控制（open 公开 | private 私有） |
| whitelist | array | 否 | 白名单 |
| createdBy | string | 否 | 创建人 |
| createdDate | datetime | 否 | 创建时间 |
| desc | string | 否 | 产品描述 |

### 响应示例

```json
{
    "total": 11,
    "products": [
        {
            "id": 1,
            "program": 6,
            "name": "公司企业网站建设1",
            "code": "companyWebsite",
            "bind": "0",
            "line": 0,
            "type": "normal",
            "status": "normal",
            "subStatus": "",
            "desc": "建立公司企业网站，可以更好对外展示。<br />",
            "PO": {
                "id": 2,
                "account": "productManager",
                "avatar": "",
                "realname": "产品经理"
            },
            "QD": {
                "id": 10,
                "account": "testManager",
                "avatar": "",
                "realname": "测试经理"
            },
            "RD": {
                "id": 2,
                "account": "productManager",
                "avatar": "",
                "realname": "产品经理"
            },
            "acl": "open",
            "whitelist": [],
            "reviewer": "",
            "createdBy": {
                "id": 2,
                "account": "productManager",
                "avatar": "",
                "realname": "产品经理"
            },
            "createdDate": "2012-06-05T01:57:07Z",
            "createdVersion": "",
            "order": 5,
            "deleted": "0",
            "lineName": "",
            "programName": "企业管理",
            "stories": {
                "active": 5,
                "draft": 3,
                "": 0,
                "closed": 0,
                "changed": 0
            },
            "requirements": {
                "0": "",
                "1": "draft",
                "2": "active",
                "3": "closed",
                "4": "changed",
                "": 0,
                "draft": 0,
                "active": 0,
                "closed": 0,
                "changed": 0
            },
            "plans": 0,
            "releases": 0,
            "bugs": 5,
            "unResolved": 5,
            "closedBugs": 0,
            "fixedBugs": 0,
            "thisWeekBugs": 1,
            "assignToNull": 1,
            "progress": 0
        }
    ]
}
```


---

## 2.6.3 获取产品详情

- **手册编号**: `2.6.3`
- **页面 ID**: `677`
- **官方文档**: https://www.zentao.net/book/api/677.html
- **Method**: `GET`
- **Path**: `/products/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id`

### 请求URL

https://xxx.com/api.php/v1/products/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 产品ID |
| name | string | 是 | 产品名称 |
| code | string | 是 | 产品代号 |
| program | int | 是 | 所属项目集 |
| line | int | 是 | 所属产品线 |
| type | string | 是 | 产品类型(normal 正常 | branch 多分支 | platform 多平台) |
| PO |   | 否 | 产品负责人 |
| QD |   | 否 | 测试负责人 |
| RD |   | 否 | 发布负责人 |
| desc | object | 否 | 产品描述 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单 |
| createdBy |   | 是 | 创建人 |
| createdDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 1,
    "program": 6,
    "name": "公司企业网站建设1",
    "code": "companyWebsite",
    "bind": "0",
    "line": 0,
    "type": "normal",
    "status": "normal",
    "subStatus": "",
    "desc": "建立公司企业网站，可以更好对外展示。<br />",
    "PO": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "QD": {
        "id": 10,
        "account": "testManager",
        "avatar": "",
        "realname": "测试经理"
    },
    "RD": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "acl": "open",
    "whitelist": [],
    "reviewer": "",
    "createdBy": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "createdDate": "2012-06-05T01:57:07Z",
    "createdVersion": "",
    "order": 5,
    "deleted": "0",
    "stories": {
        "active": 5,
        "draft": 3,
        "": 0,
        "closed": 0,
        "changed": 0
    },
    "plans": 0,
    "releases": 0,
    "builds": 0,
    "cases": 5,
    "projects": 0,
    "executions": 0,
    "bugs": 5,
    "docs": 0,
    "progress": 0,
    "caseReview": false
}
```


---

## 2.6.4 编辑产品

- **手册编号**: `2.6.4`
- **页面 ID**: `678`
- **官方文档**: https://www.zentao.net/book/api/678.html
- **Method**: `PUT`
- **Path**: `/product/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/product/id`

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 否 | 访问凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | string | 否 | 产品名称 |
| code | string | 否 | 产品代号 |
| type | string | 否 | 产品类型(normal 正常 | branch 多分支 | platform 多平台) |
| line | int | 否 | 所属产品线 |
| program | int | 否 | 所属项目集 |
| status | string | 否 | 产品状态(normal 正常 | closed 已关闭) |
| desc | string | 否 | 产品描述，富文本 |

### 请求示例

```json
{
    "name": "公司企业网站建设1"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 产品ID |
| name | string | 是 | 产品名称 |
| code | string | 是 | 产品代号 |
| program | int | 是 | 所属项目集 |
| line | int | 是 | 所属产品线 |
| type | string | 是 | 产品类型(normal 正常 | branch 多分支 | platform 多平台) |
| PO |   | 否 | 产品负责人 |
| QD |   | 否 | 测试负责人 |
| RD |   | 否 | 发布负责人 |
| desc | object | 否 | 产品描述 |
| acl | string | 是 | 访问控制(open 公开 | private 私有) |
| whitelist | array | 否 | 白名单 |
| createdBy |   | 是 | 创建人 |
| createdDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 1,
    "program": 6,
    "name": "公司企业网站建设1",
    "code": "companyWebsite",
    "bind": "0",
    "line": 0,
    "type": "normal",
    "status": "normal",
    "subStatus": "",
    "desc": "建立公司企业网站，可以更好对外展示。<br />",
    "PO": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "QD": {
        "id": 10,
        "account": "testManager",
        "avatar": "",
        "realname": "测试经理"
    },
    "RD": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "acl": "open",
    "whitelist": [],
    "reviewer": "",
    "createdBy": {
        "id": 2,
        "account": "productManager",
        "avatar": "",
        "realname": "产品经理"
    },
    "createdDate": "2012-06-05T01:57:07Z",
    "createdVersion": "",
    "order": 5,
    "deleted": "0",
    "stories": {
        "active": 5,
        "draft": 3,
        "": 0,
        "closed": 0,
        "changed": 0
    },
    "plans": 0,
    "releases": 0,
    "builds": 0,
    "cases": 5,
    "projects": 0,
    "executions": 0,
    "bugs": 5,
    "docs": 0,
    "progress": 0,
    "caseReview": false
}
```


---

## 2.6.5 删除产品

- **手册编号**: `2.6.5`
- **页面 ID**: `679`
- **官方文档**: https://www.zentao.net/book/api/679.html
- **Method**: `DELETE`
- **Path**: `/products/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id`

### 请求URL

https://xxx.com/api.php/v1/products/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| message | string | 否 | 响应信息 |

### 响应示例

```json
{
    "message": "success"
}
```


---
