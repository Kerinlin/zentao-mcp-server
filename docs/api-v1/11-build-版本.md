# 2.11 版本

> 禅道 RESTful API v1.0 · 模块文档（共 6 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.11.1 | 获取项目版本列表 | `GET` | `/projects/id/builds` |
| 2.11.2 | 获取执行版本列表 | `GET` | `/executions/id/builds` |
| 2.11.3 | 创建版本 | `POST` | `/projects/id/builds` |
| 2.11.4 | 获取版本详情 | `GET` | `/builds/id` |
| 2.11.5 | 修改版本 | `PUT` | `/builds/id` |
| 2.11.6 | 删除版本 | `DELETE` | `/builds/id` |

---

## 2.11.1 获取项目版本列表

- **手册编号**: `2.11.1`
- **页面 ID**: `704`
- **官方文档**: https://www.zentao.net/book/api/704.html
- **Method**: `GET`
- **Path**: `/projects/id/builds`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/builds`

### 请求URL

https://xxx.com/api.php/v1/projects/id/builds

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| total | int | 是 | 版本总数 |
| builds | array | 是 | 版本列表 |
| ∟ id | int | 是 | 版本ID |
| ∟ project | int | 是 | 所属项目 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ name | string | 是 | 版本名称 |
| ∟ scmPath | string | 否 | 源代码地址 |
| ∟ filePath | string | 否 | 下载地址 |
| ∟ date | date | 是 | 打包日期 |
| ∟ builder |   | 是 | 构建者 |
| ∟ desc | string | 是 | 版本描述 |

### 响应示例

```json
{
    "total": 1,
    "builds": [
        {
            "id": 2,
            "project": 12,
            "product": 5,
            "branch": 0,
            "execution": 40,
            "name": "1111111",
            "scmPath": "",
            "filePath": "",
            "date": "2021-12-01",
            "stories": [],
            "bugs": [],
            "builder": "admin",
            "desc": "",
            "deleted": false,
            "executionName": "测试执行1111111",
            "executionID": 40,
            "productName": "测试",
            "branchName": ""
        }
    ]
}
```


---

## 2.11.2 获取执行版本列表

- **手册编号**: `2.11.2`
- **页面 ID**: `705`
- **官方文档**: https://www.zentao.net/book/api/705.html
- **Method**: `GET`
- **Path**: `/executions/id/builds`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id/builds`

### 请求URL

https://xxx.com/api.php/v1/executions/id/builds

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| total | int | 是 | 版本总数 |
| builds | array | 是 | 版本列表 |
| ∟ id | int | 是 | 版本ID |
| ∟ project | int | 是 | 所属项目 |
| ∟ product | int | 是 | 所属产品 |
| ∟ branch | int | 是 | 所属分支 |
| ∟ execution | int | 是 | 所属执行 |
| ∟ name | string | 是 | 版本名称 |
| ∟ scmPath | string | 否 | 源代码地址 |
| ∟ filePath | string | 否 | 下载地址 |
| ∟ date | date | 是 | 打包日期 |
| ∟ builder |   | 是 | 构建者 |
| ∟ desc | string | 是 | 版本描述 |

### 响应示例

```json
{
    "total": 1,
    "builds": [
        {
            "id": 2,
            "project": 12,
            "product": 5,
            "branch": 0,
            "execution": 40,
            "name": "1111111",
            "scmPath": "",
            "filePath": "",
            "date": "2021-12-01",
            "stories": [],
            "bugs": [],
            "builder": "admin",
            "desc": "",
            "deleted": false,
            "executionName": "测试执行1111111",
            "executionID": 40,
            "productName": "测试",
            "branchName": ""
        }
    ]
}
```


---

## 2.11.3 创建版本

- **手册编号**: `2.11.3`
- **页面 ID**: `706`
- **官方文档**: https://www.zentao.net/book/api/706.html
- **Method**: `POST`
- **Path**: `/projects/id/builds`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/builds`

### 请求URL

https://xxx.com/api.php/v1/projects/id/builds

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| execution | int | 是 | 所属执行 |
| product | int | 是 | 所属产品 |
| branch | int | 否 | 所属分支 |
| name | string | 是 | 版本名称 |
| builder | string | 是 | 构建者 |
| date | date | 否 | 打包日期 |
| scmPath | string | 否 | 源代码地址 |
| filePath | string | 否 | 下载地址 |
| desc | string | 否 | 版本描述 |

### 请求示例

```json
{
    "name": "test",
    "product": 4,
    "date": "2021-01-01",
    "execution": 42,
    "builder": "admin"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 版本ID |
| project | int | 是 | 所属项目 |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属产品分支（主分支为0） |
| execution | int | 是 | 所属执行 |
| name | string | 是 | 版本名称 |
| scmPath | string | 是 | 源代码地址 |
| filePath | string | 是 | 下载地址 |
| desc | string | 是 | 版本描述 |
| builder |   | 是 | 构建者 |
| date | date | 是 | 打包日期 |

### 响应示例

```json
{
    "id": 3,
    "project": 41,
    "product": 4,
    "branch": 0,
    "execution": 42,
    "name": "test",
    "scmPath": "",
    "filePath": "",
    "date": "2021-01-01",
    "stories": "",
    "bugs": "",
    "builder": "admin",
    "desc": "",
    "deleted": "0",
    "executionName": "testt",
    "productName": "多分支产品",
    "productType": "branch",
    "files": []
}
```


---

## 2.11.4 获取版本详情

- **手册编号**: `2.11.4`
- **页面 ID**: `707`
- **官方文档**: https://www.zentao.net/book/api/707.html
- **Method**: `GET`
- **Path**: `/builds/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/builds/id`

### 请求URL

https://xxx.com/api.php/v1/builds/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 版本ID |
| project | int | 是 | 所属项目 |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属产品分支（主分支为0） |
| execution | int | 是 | 所属执行 |
| name | string | 是 | 版本名称 |
| scmPath | string | 是 | 源代码地址 |
| filePath | string | 是 | 下载地址 |
| desc | string | 是 | 版本描述 |
| builder |   | 是 | 构建者 |
| date | date | 是 | 打包日期 |

### 响应示例

```json
{
    "id": 3,
    "project": 41,
    "product": 4,
    "branch": 0,
    "execution": 42,
    "name": "test",
    "scmPath": "",
    "filePath": "",
    "date": "2021-01-01",
    "stories": "",
    "bugs": "",
    "builder": "admin",
    "desc": "",
    "deleted": "0",
    "executionName": "testt",
    "productName": "多分支产品",
    "productType": "branch",
    "files": []
}
```


---

## 2.11.5 修改版本

- **手册编号**: `2.11.5`
- **页面 ID**: `708`
- **官方文档**: https://www.zentao.net/book/api/708.html
- **Method**: `PUT`
- **Path**: `/builds/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/builds/id`

### 请求URL

https://xxx.com/api.php/v1/builds/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 版本ID |
| project | int | 是 | 所属项目 |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属产品分支（主分支为0） |
| execution | int | 是 | 所属执行 |
| name | string | 是 | 版本名称 |
| scmPath | string | 是 | 源代码地址 |
| filePath | string | 是 | 下载地址 |
| desc | string | 是 | 版本描述 |
| builder |   | 是 | 构建者 |
| date | date | 是 | 打包日期 |

### 响应示例

```json
{
    "id": 3,
    "project": 41,
    "product": 4,
    "branch": 0,
    "execution": 42,
    "name": "test",
    "scmPath": "",
    "filePath": "",
    "date": "2021-01-01",
    "stories": "",
    "bugs": "",
    "builder": "admin",
    "desc": "",
    "deleted": "0",
    "executionName": "testt",
    "productName": "多分支产品",
    "productType": "branch",
    "files": []
}
```


---

## 2.11.6 删除版本

- **手册编号**: `2.11.6`
- **页面 ID**: `709`
- **官方文档**: https://www.zentao.net/book/api/709.html
- **Method**: `DELETE`
- **Path**: `/builds/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/builds/id`

### 请求URL

https://xxx.com/api.php/v1/builds/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 版本ID |
| project | int | 是 | 所属项目 |
| product | int | 是 | 所属产品 |
| branch | int | 是 | 所属产品分支（主分支为0） |
| execution | int | 是 | 所属执行 |
| name | string | 是 | 版本名称 |
| scmPath | string | 是 | 源代码地址 |
| filePath | string | 是 | 下载地址 |
| desc | string | 是 | 版本描述 |
| builder | string | 是 | 构建者 |
| date | date | 是 | 打包日期 |

### 响应示例

```json
{
    "id": 3,
    "project": 41,
    "product": 4,
    "branch": 0,
    "execution": 42,
    "name": "test",
    "scmPath": "",
    "filePath": "",
    "date": "2021-01-01",
    "stories": "",
    "bugs": "",
    "builder": "admin",
    "desc": "",
    "deleted": "0",
    "executionName": "testt",
    "productName": "多分支产品",
    "productType": "branch",
    "files": []
}
```


---
