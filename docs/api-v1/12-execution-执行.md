# 2.12 执行

> 禅道 RESTful API v1.0 · 模块文档（共 5 个接口/页面）
>
> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`

## 本模块接口

| 编号 | 接口 | Method | Path |
| --- | --- | --- | --- |
| 2.12.1 | 获取项目的执行列表 | `GET` | `/projects/id/executions` |
| 2.12.2 | 创建执行 | `POST` | `/projects/id/executions` |
| 2.12.3 | 查看执行详情 | `GET` | `/executions/id` |
| 2.12.4 | 修改执行 | `PUT` | `/executions/id` |
| 2.12.5 | 删除执行 | `DELETE` | `/executions/id` |

---

## 2.12.1 获取项目的执行列表

- **手册编号**: `2.12.1`
- **页面 ID**: `710`
- **官方文档**: https://www.zentao.net/book/api/710.html
- **Method**: `GET`
- **Path**: `/projects/id/executions`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/executions`

### 请求URL

https://xxx.com/api.php/v1/projects/id/executions

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| page | int | 是 | 当前页数 |
| total | int | 是 | 执行总数 |
| limit | int | 是 | 每页执行数 |
| executions | array | 是 | 执行列表 |
| ∟ id | int | 是 | 执行ID |
| ∟ name | string | 是 | 执行名称 |
| ∟ code | string | 是 | 执行代号 |
| ∟ begin | date | 是 | 计划开始日期 |
| ∟ end | date | 是 | 计划结束日期 |
| ∟ status | string | 是 | 执行状态() |
| ∟ openedBy |   | 是 | 创建人 |
| ∟ openedDate | datetime | 是 | 创建时间 |
| ∟ progress | int | 是 | 当前进度 |

### 响应示例

```json
{
    "page": 1,
    "total": 1,
    "limit": 20,
    "executions": [
        {
            "id": 13,
            "name": "迭代1",
            "project": 12,
            "code": "sprint1",
            "type": "sprint",
            "parent": 12,
            "begin": "2021-11-26",
            "end": "2021-12-02",
            "status": "wait",
            "openedBy": "admin",
            "openedDate": "2021-11-26T02:42:22Z",
            "progress": 0
        }
    ]
}
```


---

## 2.12.2 创建执行

- **手册编号**: `2.12.2`
- **页面 ID**: `711`
- **官方文档**: https://www.zentao.net/book/api/711.html
- **Method**: `POST`
- **Path**: `/projects/id/executions`
- **完整 URL 模板**: `https://{host}/api.php/v1/projects/id/executions`

### 请求URL

https://xxx.com/api.php/v1/projects/id/executions

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证 |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| project | int | 是 | 所属项目 |
| name | string | 是 | 执行名称 |
| code | string | 是 | 执行代号 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| days | int | 否 | 可用工作日 |
| lifetime | string | 否 | 类型(short 短期 | long 长期 | ops 运维) |
| PO | string | 否 | 产品负责人 |
| PM | string | 否 | 迭代负责人 |
| QD | string | 否 | 测试负责人 |
| RD | string | 否 | 发布负责人 |
| teamMembers | array | 否 | 团队成员 ["admin"] |
| desc | string | 否 | 迭代描述 |
| acl | string | 否 | 访问控制(private 私有 | open 继承项目权限) |
| whitelist | array | 否 | 白名单 |

### 请求示例

```json
{"name": "测试执行1", "code": "test1", "begin": "2021-12-01", "end": "2021-12-11", "days": 10}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 执行ID |
| project | boolean | 是 | 所属项目 |
| name | string | 是 | 执行名称 |
| code | string | 是 | 执行代号 |
| days | int | 是 | 可用工作日 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| lifetime | string | 是 | 类型(short 短期 | long 长期 | ops 运维) |
| PO |   | 否 | 产品负责人 |
| PM |   | 否 | 迭代负责人 |
| QD |   | 否 | 测试负责人 |
| RD |   | 否 | 发布负责人 |
| teamMembers | array | 是 | 团队成员 ["admin"] |
| desc | string | 是 | 迭代描述 |
| acl | string | 是 | 访问控制(private 私有 | open 继承项目权限) |
| whitelist | array | 是 | 白名单，acl = private时生效 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 40,
    "project": 12,
    "model": "",
    "type": "sprint",
    "lifetime": "",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 12,
    "path": ",12,40,",
    "grade": 1,
    "name": "测试执行1",
    "code": "test1",
    "begin": "2021-12-01",
    "end": "2021-12-11",
    "realBegan": "0000-00-00",
    "realEnd": "0000-00-00",
    "days": 100,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-11-28T15:37:59Z",
    "openedVersion": "15.8",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-28T15:37:59Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "",
    "QD": "",
    "RD": "",
    "team": "测试执行1",
    "acl": "private",
    "whitelist": ",",
    "order": 200,
    "deleted": "0",
    "totalHours": 700,
    "totalEstimate": 0,
    "totalConsumed": 0,
    "totalLeft": 0
}
```


---

## 2.12.3 查看执行详情

- **手册编号**: `2.12.3`
- **页面 ID**: `712`
- **官方文档**: https://www.zentao.net/book/api/712.html
- **Method**: `GET`
- **Path**: `/executions/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id`

### 请求URL

https://xxx.com/api.php/v1/executions/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 执行ID |
| project | int | 是 | 所属项目 |
| name | string | 是 | 执行名称 |
| code | string | 是 | 执行代号 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| days | int | 否 | 可用工作日 |
| lifetime | string | 否 | 类型(short 短期 | long 长期 | ops 运维) |
| PO |   | 否 | 产品负责人 |
| PM |   | 否 | 迭代负责人 |
| QD |   | 否 | 测试负责人 |
| RD |   | 否 | 发布负责人 |
| teamMembers | array | 否 | 团队成员 ["admin"] |
| desc | string | 是 | 迭代描述 |
| acl | string | 是 | 访问控制(private 私有 | open 继承项目权限) |
| whitelist | array | 否 | 白名单 |
| openedBy |   | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 40,
    "project": 12,
    "model": "",
    "type": "sprint",
    "lifetime": "",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 12,
    "path": ",12,40,",
    "grade": 1,
    "name": "测试执行1111111",
    "code": "test1111111",
    "begin": "2021-12-01",
    "end": "2021-12-11",
    "realBegan": "0000-00-00",
    "realEnd": "0000-00-00",
    "days": 100,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-11-28T15:37:59Z",
    "openedVersion": "15.8",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-28T15:37:59Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "",
    "QD": "",
    "RD": "",
    "team": "测试执行1111111",
    "acl": "private",
    "whitelist": ",",
    "order": 200,
    "deleted": "0",
    "totalHours": 700,
    "totalEstimate": 0,
    "totalConsumed": 0,
    "totalLeft": 0
}
```


---

## 2.12.4 修改执行

- **手册编号**: `2.12.4`
- **页面 ID**: `713`
- **官方文档**: https://www.zentao.net/book/api/713.html
- **Method**: `PUT`
- **Path**: `/executions/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id`

### 请求URL

https://xxx.com/api.php/v1/executions/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证 |

### 请求体

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| project | int | 是 | 所属项目 |
| name | string | 是 | 执行名称 |
| code | string | 是 | 执行代号 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| days | int | 否 | 可用工作日 |
| lifetime | string | 否 | 类型(short 短期 | long 长期 | ops 运维) |
| PO | string | 否 | 产品负责人 |
| PM | string | 否 | 迭代负责人 |
| QD | string | 否 | 测试负责人 |
| RD | string | 否 | 发布负责人 |
| teamMembers | array | 否 | 团队成员 ["admin"] |
| desc | string | 否 | 迭代描述 |
| acl | string | 否 | 访问控制(private 私有 | open 继承项目权限) |
| whitelist | array | 否 | 白名单 |

### 请求示例

```json
{"name": "测试执行1", "code": "test1", "begin": "2021-12-01", "end": "2021-12-11", "days": 10}
```

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | int | 是 | 执行ID |
| project | boolean | 是 | 所属项目 |
| name | string | 是 | 执行名称 |
| code | string | 是 | 执行代号 |
| days | int | 是 | 可用工作日 |
| begin | date | 是 | 计划开始日期 |
| end | date | 是 | 计划结束日期 |
| lifetime | string | 是 | 类型(short 短期 | long 长期 | ops 运维) |
| PO | string | 否 | 产品负责人 |
| PM | string | 否 | 迭代负责人 |
| QD | string | 否 | 测试负责人 |
| RD | string | 否 | 发布负责人 |
| teamMembers | array | 是 | 团队成员 ["admin"] |
| desc | string | 是 | 迭代描述 |
| acl | string | 是 | 访问控制(private 私有 | open 继承项目权限) |
| whitelist | array | 是 | 白名单，acl = private时生效 |
| openedBy | string | 是 | 创建人 |
| openedDate | datetime | 是 | 创建时间 |

### 响应示例

```json
{
    "id": 40,
    "project": 12,
    "model": "",
    "type": "sprint",
    "lifetime": "",
    "budget": "0",
    "budgetUnit": "CNY",
    "attribute": "",
    "percent": 0,
    "milestone": "0",
    "output": "",
    "auth": "",
    "parent": 12,
    "path": ",12,40,",
    "grade": 1,
    "name": "测试执行1",
    "code": "test1",
    "begin": "2021-12-01",
    "end": "2021-12-11",
    "realBegan": "0000-00-00",
    "realEnd": "0000-00-00",
    "days": 100,
    "status": "wait",
    "subStatus": "",
    "pri": "1",
    "desc": "",
    "version": 0,
    "parentVersion": 0,
    "planDuration": 0,
    "realDuration": 0,
    "openedBy": "admin",
    "openedDate": "2021-11-28T15:37:59Z",
    "openedVersion": "15.8",
    "lastEditedBy": "admin",
    "lastEditedDate": "2021-11-28T15:37:59Z",
    "closedBy": "",
    "closedDate": null,
    "canceledBy": "",
    "canceledDate": null,
    "PO": "",
    "PM": "",
    "QD": "",
    "RD": "",
    "team": "测试执行1",
    "acl": "private",
    "whitelist": ",",
    "order": 200,
    "deleted": "0",
    "totalHours": 700,
    "totalEstimate": 0,
    "totalConsumed": 0,
    "totalLeft": 0
}
```


---

## 2.12.5 删除执行

- **手册编号**: `2.12.5`
- **页面 ID**: `714`
- **官方文档**: https://www.zentao.net/book/api/714.html
- **Method**: `DELETE`
- **Path**: `/executions/id`
- **完整 URL 模板**: `https://{host}/api.php/v1/executions/id`

### 请求URL

https://xxx.com/api.php/v1/executions/id

### 请求头

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Token | String | 是 | 认证凭证Token |

### 请求响应

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| message | string | 是 | 删除结果 |

### 响应示例

```json
{
    ”message": "success"
}
```


---
