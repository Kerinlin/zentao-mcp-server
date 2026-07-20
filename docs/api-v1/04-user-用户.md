# 2.4 用户

> 禅道 RESTful API v1.0 · 模块文档（共 6 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.4.1 | 获取我的个人信息 | `GET` | `/user` |
| 2.4.2 | 获取用户列表 | `GET` | `/users` |
| 2.4.3 | 获取用户信息 | `GET` | `/users/id` |
| 2.4.4 | 修改用户信息 | `PUT` | `/users/id` |
| 2.4.5 | 删除用户 | `DELETE` | `/users/id` |
| 2.4.6 | 创建用户 | `POST` | `/users` |

---

## 2.4.1 获取我的个人信息

- **手册编号**: `2.4.1`
- **页面 ID**: `665`
- **官方文档**: https://www.zentao.net/book/api/665.html
- **Method**: `GET`
- **Path**: `/user`
- **完整 URL 模板**: `https://{host}/api.php/v1/user`

### 请求URL

https://xxx.com/api.php/v1/user

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| profile | object | 是 |   |
| ∟ id | int | 是 | 用户编号 |
| ∟ type | string | 是 | 类型(inside 内部用户 | outside 外部用户) |
| ∟ dept | int | 是 | 所属部门 |
| ∟ account | string | 是 | 用户名 |
| ∟ realname | string | 是 | 真实姓名 |
| ∟ nickname | string | 否 | 昵称 |
| ∟ avatar | string | 否 | 头像 |
| ∟ birthday | date | 否 | 生日 |
| ∟ gender | string | 否 | 性别(f 女性 | m 男性) |
| ∟ mobile | string | 否 | 手机号码 |
| ∟ phone | string | 否 | 电话号码 |
| ∟ weixin | string | 否 | 微信号码 |
| ∟ address | string | 否 | 住址 |
| ∟ join | date | 否 | 加入日期 |
| ∟ admin | boolean | 是 | 是否管理员 |

### 响应示例

```json
{
    "profile": {
        "id": 1,
        "company": 0,
        "type": "inside",
        "dept": 0,
        "account": "admin",
        "role": {
            "code": "",
            "name": ""
        },
        "realname": "admin",
        "nickname": "",
        "commiter": "",
        "avatar": "",
        "birthday": null,
        "gender": "f",
        "email": "",
        "skype": "",
        "qq": "",
        "mobile": "",
        "phone": "",
        "weixin": "",
        "dingding": "",
        "slack": "",
        "whatsapp": "",
        "address": "",
        "zipcode": "",
        "nature": "",
        "analysis": "",
        "strategy": "",
        "join": null,
        "visits": 10,
        "ip": "127.0.0.1",
        "last": "2021-11-28T16:31:40Z",
        "fails": 0,
        "locked": null,
        "ranzhi": "",
        "score": 0,
        "scoreLevel": 0,
        "deleted": "0",
        "admin": true
    }
}
```


---

## 2.4.2 获取用户列表

- **手册编号**: `2.4.2`
- **页面 ID**: `666`
- **官方文档**: https://www.zentao.net/book/api/666.html
- **Method**: `GET`
- **Path**: `/users`
- **完整 URL 模板**: `https://{host}/api.php/v1/users`

### 请求URL

https://xxx.com/api.php/v1/users

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求参数

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| browse | string | 否 | 人员类型，默认为 inside（内部人员），可选 inside outside（外部人员），如果填入了其他的内容（比如空）查询所有用户 |
| page | string | 否 | 当前页数 |
| limit | string | 否 | 每页用户数 |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页数 |
| total | int | 是 | 用户总数 |
| limit | int | 是 | 每页用户数 |
| users | array | 是 | 用户列表 |
| ∟ id | int | 是 | 用户编号 |
| ∟ dept | int | 是 | 所属部门 |
| ∟ account | string | 是 | 用户名 |
| ∟ realname | string | 是 | 真实姓名 |
| ∟ role | string | 否 | 角色 |
| ∟ email | string | 否 | 邮箱 |

### 响应示例

```json
{
    "page": 1,
    "total": 3,
    "limit": 20,
    "users": [
        {
            "id": 3,
            "dept": 6,
            "account": "projectManager",
            "realname": "项目经理",
            "role": "pm",
            "email": ""
        },
        {
            "id": 2,
            "dept": 5,
            "account": "productManager",
            "realname": "产品经理",
            "role": "po",
            "email": ""
        },
        {
            "id": 1,
            "dept": 0,
            "account": "admin",
            "realname": "admin",
            "role": "",
            "email": ""
        }
    ]
}
```


---

## 2.4.3 获取用户信息

- **手册编号**: `2.4.3`
- **页面 ID**: `667`
- **官方文档**: https://www.zentao.net/book/api/667.html
- **Method**: `GET`
- **Path**: `/users/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/users/id`

### 请求URL

https://xxx.com/api.php/v1/users/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 用户编号 |
| type | string | 是 | 类型(inside 内部用户 | outside 外部用户) |
| dept | int | 是 | 所属部门 |
| account | string | 是 | 用户名 |
| role | string | 是 | 角色 |
| realname | string | 是 | 真实姓名 |
| nickname | string | 否 | 昵称 |
| avatar | string | 否 | 头像 |
| birthday | date | 否 | 生日 |
| gender | string | 否 | 性别(f 女性 | m 男性) |
| email | string | 否 | 邮箱 |
| mobile | string | 否 | 手机号 |
| phone | string | 否 | 电话号 |
| weixin | string | 否 | 微信号 |
| join | date | 否 | 加入日期 |

### 响应示例

```json
{
    "id": 2,
    "company": 0,
    "type": "inside",
    "dept": 5,
    "account": "productManager",
    "role": "po",
    "realname": "产品经理",
    "nickname": "",
    "commiter": "",
    "avatar": "",
    "birthday": "0000-00-00",
    "gender": "m",
    "email": "",
    "skype": "",
    "qq": "",
    "mobile": "",
    "phone": "",
    "weixin": "",
    "dingding": "",
    "slack": "",
    "whatsapp": "",
    "address": "",
    "zipcode": "",
    "nature": "",
    "analysis": "",
    "strategy": "",
    "join": "0000-00-00",
    "visits": 3,
    "ip": "192.168.0.8",
    "last": "2012-06-05 11:14:43",
    "fails": 0,
    "locked": "0000-00-00 00:00:00",
    "ranzhi": "",
    "score": 0,
    "scoreLevel": 0,
    "deleted": "0"
}
```


---

## 2.4.4 修改用户信息

- **手册编号**: `2.4.4`
- **页面 ID**: `668`
- **官方文档**: https://www.zentao.net/book/api/668.html
- **Method**: `PUT`
- **Path**: `/users/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/users/id`

### 请求URL

https://xxx.com/api.php/v1/users/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证 |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| dept | int | 否 | 所属部门 |
| role | string | 否 | 角色 |
| mobile | string | 否 | 手机号 |
| realname | string | 否 | 真实姓名 |
| email | string | 否 | 邮箱 |
| phone | string | 否 | 电话号码 |

### 请求示例

```json
{
    "realname": "管理员"
}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 用户编号 |
| type | string | 是 | 类型(inside 内部用户 | outside 外部用户) |
| dept | int | 是 | 所属部门 |
| account | string | 是 | 用户名 |
| role | string | 是 | 角色 |
| realname | string | 是 | 真实姓名 |
| nickname | string | 否 | 昵称 |
| avatar | string | 否 | 头像 |
| birthday | date | 否 | 生日 |
| gender | string | 否 | 性别(f 女性 | m 男性) |
| email | string | 否 | 邮箱 |
| mobile | string | 否 | 手机号 |
| phone | string | 否 | 电话号 |
| weixin | string | 否 | 微信号 |
| join | date | 否 | 加入日期 |

### 响应示例

```json
{
    "id": 2,
    "company": 0,
    "type": "inside",
    "dept": 5,
    "account": "productManager",
    "role": "po",
    "realname": "产品经理",
    "nickname": "",
    "commiter": "",
    "avatar": "",
    "birthday": "0000-00-00",
    "gender": "m",
    "email": "",
    "skype": "",
    "qq": "",
    "mobile": "",
    "phone": "",
    "weixin": "",
    "dingding": "",
    "slack": "",
    "whatsapp": "",
    "address": "",
    "zipcode": "",
    "nature": "",
    "analysis": "",
    "strategy": "",
    "join": "0000-00-00",
    "visits": 3,
    "ip": "192.168.0.8",
    "last": "2012-06-05 11:14:43",
    "fails": 0,
    "locked": "0000-00-00 00:00:00",
    "ranzhi": "",
    "score": 0,
    "scoreLevel": 0,
    "deleted": "0"
}
```


---

## 2.4.5 删除用户

- **手册编号**: `2.4.5`
- **页面 ID**: `669`
- **官方文档**: https://www.zentao.net/book/api/669.html
- **Method**: `DELETE`
- **Path**: `/users/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/users/id`

### 请求URL

https://xxx.com/api.php/v1/users/id

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

## 2.4.6 创建用户

- **手册编号**: `2.4.6`
- **页面 ID**: `838`
- **官方文档**: https://www.zentao.net/book/api/838.html
- **Method**: `POST`
- **Path**: `/users`
- **完整 URL 模板**: `https://{host}/api.php/v1/users`

### 请求URL

https://xxx.com/api.php/v1/users

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| account | string | 是 | 账号 |
| password | string | 是 | 密码 |
| realname | string | 否 | 真实姓名 |
| visions | array | 否 | 界面 ['rnd', 'lite']，(综合研发界面 rnd, 迅捷界面 lite)。默认是rnd |
| role | string | 否 | 职位，可以在 'dev', 'qa', 'pm', 'po', 'td', 'pd', 'qd', 'top', 'others' 中选，(研发dev，测试qa，项目经理pm，产品经理po，研发主管td，产品主管pd，测试主管qd，高层管理top，其他others) |
| group | string | 否 | 权限分组，以英文逗号分隔的字符串，如 '2,3,4'，只有一个权限时填写字符串即可，如 '2'，权限分组列表在 后台-人员管理-权限 中查看，填写分组的编号即可 |

请求示例

```json
{"account": "usertest", "password": "123qwe!@#", "realname": "测试用户"}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 用户id |
| account | string | 是 | 登陆名 |
| type | string | 是 | 内部用户 inside, 外部用户 outside |
| gender | string | 是 | f 女性, m 男性 |
| dept | int | 否 | 部门ID |
| string | string | 否 | 真实姓名 |

### 响应示例

```json
{
    "id": 8,
    "company": 0,
    "type": "inside",
    "dept": 0,
    "account": "usertest",
    "role": "",
    "realname": "测试用户",
    "pinyin": "",
    "nickname": "",
    "commiter": "",
    "avatar": "",
    "birthday": "0000-00-00",
    "gender": "f",
    "email": "",
    "skype": "",
    "qq": "",
    "mobile": "",
    "phone": "",
    "weixin": "",
    "dingding": "",
    "slack": "",
    "whatsapp": "",
    "address": "",
    "zipcode": "",
    "nature": "",
    "analysis": "",
    "strategy": "",
    "join": "0000-00-00",
    "visits": 0,
    "visions": "rnd",
    "ip": "",
    "last": "1970-01-01T00:00:00Z",
    "fails": 0,
    "locked": null,
    "feedback": "0",
    "ranzhi": "",
    "ldap": "",
    "score": 0,
    "scoreLevel": 0,
    "deleted": "0",
    "clientStatus": "offline",
    "clientLang": "zh-cn"
}
```


---
