# 2.2 Token

> 禅道 RESTful API v1.0 · 模块文档（共 1 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.2 | 获取 Token | `POST` | `/tokens` |

---

## 2.2 获取 Token

- **手册编号**: `2.2`
- **页面 ID**: `664`
- **官方文档**: https://www.zentao.net/book/api/664.html
- **Method**: `POST`
- **Path**: `/tokens`
- **完整 URL 模板**: `https://{host}/api.php/v1/tokens`

### 请求URL

https://xxx.com/api.php/v1/tokens

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| account | string | 是 | 登录名 |
| password | string | 是 | 密码 |

### 请求示例

```json
{"account": "admin", "password": "123456"}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| token | string | 否 |   |

### 响应示例

```json
{
    "token": "cuejkiesahl9k1j8be5bv5lndo"
}
```


---
