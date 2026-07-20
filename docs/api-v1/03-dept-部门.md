# 2.3 部门

> 禅道 RESTful API v1.0 · 模块文档（共 2 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.3.1 | 获取部门列表 | `GET` | `/departments` |
| 2.3.2 | 获取部门详情 | `GET` | `/departments/id` |

---

## 2.3.1 获取部门列表

- **手册编号**: `2.3.1`
- **页面 ID**: `964`
- **官方文档**: https://www.zentao.net/book/api/964.html
- **Method**: `GET`
- **Path**: `/departments`
- **完整 URL 模板**: `https://{host}/api.php/v1/departments`

### 请求URL

https://xxx.com/api.php/v1/departments

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 访问凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| departments | array | 是 | 部门列表 |
| ∟ id | int | 是 | 编号 |
| ∟ name | string | 是 | 部门名称 |
| ∟ parent | int | 是 | 上级部门 |
| ∟ path | string | 是 | 路径 |
| ∟ grade | int | 是 | 部门级别 |
| ∟ order | int | 是 | 排序 |
| ∟ position | string | 否 | 职位 |
| ∟ function | string | 否 |   |
| ∟ manager | string | 否 | 负责人 |

### 响应示例

```json
[
    {
        "id": 1,
        "name": "dept1",
        "parent": 0,
        "path": ",1,",
        "grade": 1,
        "order": 10,
        "position": "",
        "function": "",
        "manager": "",
        "managerName": ""
    },
    {
        "id": 2,
        "name": "dept2",
        "parent": 0,
        "path": ",2,",
        "grade": 1,
        "order": 20,
        "position": "",
        "function": "",
        "manager": "",
        "managerName": ""
    }
] 
```


---

## 2.3.2 获取部门详情

- **手册编号**: `2.3.2`
- **页面 ID**: `965`
- **官方文档**: https://www.zentao.net/book/api/965.html
- **Method**: `GET`
- **Path**: `/departments/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/departments/id`

### 请求URL

https://xxx.com/api.php/v1/departments/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 访问凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 编号 |
| name | string | 是 | 部门名称 |
| parent | int | 是 | 上级部门 |
| path | string | 是 | 路径 |
| grade | int | 是 | 部门级别 |
| order | int | 是 | 排序 |
| position | string | 否 | 职位 |
| function | string | 否 |   |
| manager | string | 否 | 负责人 |

### 响应示例

```json
{
    "id": 1,
    "name": "dept1",
    "parent": 0,
    "path": ",1,",
    "grade": 1,
    "order": 10,
    "position": "",
    "function": "",
    "manager": ""
}
```


---
