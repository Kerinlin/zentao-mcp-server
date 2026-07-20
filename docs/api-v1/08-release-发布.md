# 2.8 发布

> 禅道 RESTful API v1.0 · 模块文档（共 2 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.8.1 | 获取产品发布列表 | `GET` | `/products/id/releases` |
| 2.8.2 | 获取项目发布列表 | `GET` | `/projects/id/releases` |

---

## 2.8.1 获取产品发布列表

- **手册编号**: `2.8.1`
- **页面 ID**: `689`
- **官方文档**: https://www.zentao.net/book/api/689.html
- **Method**: `GET`
- **Path**: `/products/id/releases`
- **完整 URL 模板**: `https://{host}/api.php/v1/products/id/releases`

### 请求URL

https://xxx.com/api.php/v1/products/id/releases

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| total | int | 是 | 发布总数 |
| releases | array | 是 | 发布列表 |
| ∟ id | int | 否 | 发布编号 |
| ∟ project | int | 否 | 所属项目 |
| ∟ product | int | 否 | 所属产品 |
| ∟ branch | int | 否 | 所属分支 |
| ∟ build | int | 否 | 所属版本 |
| ∟ name | string | 否 | 发布名称 |
| ∟ date | date | 否 | 发布日期 |
| ∟ desc | string | 否 | 描述 |
| ∟ status | string | 否 | 状态(normal 正常 | terminate 停止维护) |

### 响应示例

```json
{
    "total": 1,
    "releases": [
        {
            "id": 1,
            "project": 41,
            "product": 4,
            "branch": 0,
            "build": 3,
            "name": "发布test",
            "marker": "0",
            "date": "2021-12-02",
            "stories": "",
            "bugs": "",
            "leftBugs": "",
            "desc": "",
            "mailto": "",
            "notify": null,
            "status": "normal",
            "subStatus": "",
            "deleted": false,
            "productName": "多分支产品",
            "buildID": 3,
            "buildName": "test",
            "projectName": "测试"
        }
    ]
}
```


---

## 2.8.2 获取项目发布列表

- **手册编号**: `2.8.2`
- **页面 ID**: `690`
- **官方文档**: https://www.zentao.net/book/api/690.html
- **Method**: `GET`
- **Path**: `/projects/id/releases`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/releases`

### 请求URL

https://xxx.com/api.php/v1/projects/id/releases

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| total | int | 是 | 发布总数 |
| releases | array | 是 | 发布列表 |
| ∟ id | int | 否 | 发布编号 |
| ∟ project | int | 否 | 所属项目 |
| ∟ product | int | 否 | 所属产品 |
| ∟ branch | int | 否 | 所属分支 |
| ∟ build | int | 否 | 所属版本 |
| ∟ name | string | 否 | 发布名称 |
| ∟ date | date | 否 | 发布日期 |
| ∟ desc | string | 否 | 描述 |
| ∟ status | string | 否 | 状态(normal 正常 | terminate 停止维护) |

### 响应示例

```json
{
    "total": 1,
    "releases": [
        {
            "id": 1,
            "project": 41,
            "product": 4,
            "branch": 0,
            "build": 3,
            "name": "发布test",
            "marker": "0",
            "date": "2021-12-02",
            "stories": "",
            "bugs": "",
            "leftBugs": "",
            "desc": "",
            "mailto": "",
            "notify": null,
            "status": "normal",
            "subStatus": "",
            "deleted": false,
            "productName": "多分支产品",
            "buildID": 3,
            "buildName": "test",
            "projectName": "测试"
        }
    ]
}
```


---
