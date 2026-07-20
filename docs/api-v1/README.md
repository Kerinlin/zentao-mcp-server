# 禅道 RESTful API v1.0 接口文档索引

> 来源：https://www.zentao.net/book/api/ （禅道二次开发手册 > 禅道 RESTful APIv1.0 开发手册）
>
> 共 **98** 个接口/页面，按模块拆分存储。
>
> 由 `scripts/fetch_zentao_api_docs.py` 自动抓取生成，字段以官方页面为准。

## 模块列表

| 编号 | 模块 | 接口数 | 文档 |
| --- | --- | ---: | --- |
| 2.1 | 配置使用与常见问题 | 1 | [01-config-faq-配置使用与常见问题.md](./01-config-faq-配置使用与常见问题.md) |
| 2.2 | Token | 1 | [02-token-Token.md](./02-token-Token.md) |
| 2.3 | 部门 | 2 | [03-dept-部门.md](./03-dept-部门.md) |
| 2.4 | 用户 | 6 | [04-user-用户.md](./04-user-用户.md) |
| 2.5 | 项目集 | 5 | [05-program-项目集.md](./05-program-项目集.md) |
| 2.6 | 产品 | 5 | [06-product-产品.md](./06-product-产品.md) |
| 2.7 | 产品计划 | 9 | [07-product-plan-产品计划.md](./07-product-plan-产品计划.md) |
| 2.8 | 发布 | 2 | [08-release-发布.md](./08-release-发布.md) |
| 2.9 | 需求 | 9 | [09-story-需求.md](./09-story-需求.md) |
| 2.10 | 项目 | 5 | [10-project-项目.md](./10-project-项目.md) |
| 2.11 | 版本 | 6 | [11-build-版本.md](./11-build-版本.md) |
| 2.12 | 执行 | 5 | [12-execution-执行.md](./12-execution-执行.md) |
| 2.13 | 任务 | 12 | [13-task-任务.md](./13-task-任务.md) |
| 2.14 | Bug | 9 | [14-bug-Bug.md](./14-bug-Bug.md) |
| 2.15 | 用例 | 6 | [15-testcase-用例.md](./15-testcase-用例.md) |
| 2.16 | 测试单 | 3 | [16-testtask-测试单.md](./16-testtask-测试单.md) |
| 2.17 | 反馈 | 7 | [17-feedback-反馈.md](./17-feedback-反馈.md) |
| 2.18 | 工单 | 5 | [18-ticket-工单.md](./18-ticket-工单.md) |

## 全部接口速查

| 编号 | 接口 | Method | Path | 文档锚点 |
| --- | --- | --- | --- | --- |
| 2.1 | 配置使用与常见问题 | `—` | `—` | [2.1](./01-config-faq-配置使用与常见问题.md#21-配置使用与常见问题) |
| 2.2 | 获取 Token | `POST` | `/tokens` | [2.2](./02-token-Token.md#22-获取-Token) |
| 2.3.1 | 获取部门列表 | `GET` | `/departments` | [2.3.1](./03-dept-部门.md#231-获取部门列表) |
| 2.3.2 | 获取部门详情 | `GET` | `/departments/id` | [2.3.2](./03-dept-部门.md#232-获取部门详情) |
| 2.4.1 | 获取我的个人信息 | `GET` | `/user` | [2.4.1](./04-user-用户.md#241-获取我的个人信息) |
| 2.4.2 | 获取用户列表 | `GET` | `/users` | [2.4.2](./04-user-用户.md#242-获取用户列表) |
| 2.4.3 | 获取用户信息 | `GET` | `/users/id` | [2.4.3](./04-user-用户.md#243-获取用户信息) |
| 2.4.4 | 修改用户信息 | `PUT` | `/users/id` | [2.4.4](./04-user-用户.md#244-修改用户信息) |
| 2.4.5 | 删除用户 | `DELETE` | `/users/id` | [2.4.5](./04-user-用户.md#245-删除用户) |
| 2.4.6 | 创建用户 | `POST` | `/users` | [2.4.6](./04-user-用户.md#246-创建用户) |
| 2.5.1 | 获取项目集列表 | `GET` | `/programs` | [2.5.1](./05-program-项目集.md#251-获取项目集列表) |
| 2.5.2 | 修改项目集 | `PUT` | `/programs/id` | [2.5.2](./05-program-项目集.md#252-修改项目集) |
| 2.5.3 | 获取项目集详情 | `GET` | `/programs/id` | [2.5.3](./05-program-项目集.md#253-获取项目集详情) |
| 2.5.4 | 删除项目集 | `DELETE` | `/programs/id` | [2.5.4](./05-program-项目集.md#254-删除项目集) |
| 2.5.5 | 创建项目集 | `POST` | `/programs` | [2.5.5](./05-program-项目集.md#255-创建项目集) |
| 2.6.1 | 获取产品列表 | `GET` | `/products` | [2.6.1](./06-product-产品.md#261-获取产品列表) |
| 2.6.2 | 创建产品 | `POST` | `/products` | [2.6.2](./06-product-产品.md#262-创建产品) |
| 2.6.3 | 获取产品详情 | `GET` | `/products/id` | [2.6.3](./06-product-产品.md#263-获取产品详情) |
| 2.6.4 | 编辑产品 | `PUT` | `/product/id` | [2.6.4](./06-product-产品.md#264-编辑产品) |
| 2.6.5 | 删除产品 | `DELETE` | `/products/id` | [2.6.5](./06-product-产品.md#265-删除产品) |
| 2.7.1 | 获取产品计划列表 | `GET` | `/products/id/plans` | [2.7.1](./07-product-plan-产品计划.md#271-获取产品计划列表) |
| 2.7.2 | 创建计划 | `POST` | `/products/id/plans` | [2.7.2](./07-product-plan-产品计划.md#272-创建计划) |
| 2.7.3 | 获取计划详情 | `GET` | `/productplans/id` | [2.7.3](./07-product-plan-产品计划.md#273-获取计划详情) |
| 2.7.4 | 修改计划 | `PUT` | `/productplans/id` | [2.7.4](./07-product-plan-产品计划.md#274-修改计划) |
| 2.7.5 | 删除计划 | `DELETE` | `/productsplan/id` | [2.7.5](./07-product-plan-产品计划.md#275-删除计划) |
| 2.7.6 | 产品计划关联需求 | `POST` | `/productplans/id/linkstories` | [2.7.6](./07-product-plan-产品计划.md#276-产品计划关联需求) |
| 2.7.7 | 产品计划取消关联需求 | `POST` | `/productplans/id/unlinkstories` | [2.7.7](./07-product-plan-产品计划.md#277-产品计划取消关联需求) |
| 2.7.8 | 产品计划关联 Bug | `POST` | `/productplans/id/linkbugs` | [2.7.8](./07-product-plan-产品计划.md#278-产品计划关联-Bug) |
| 2.7.9 | 产品计划取消关联 Bug | `POST` | `/productplans/id/unlinkbugs` | [2.7.9](./07-product-plan-产品计划.md#279-产品计划取消关联-Bug) |
| 2.8.1 | 获取产品发布列表 | `GET` | `/products/id/releases` | [2.8.1](./08-release-发布.md#281-获取产品发布列表) |
| 2.8.2 | 获取项目发布列表 | `GET` | `/projects/id/releases` | [2.8.2](./08-release-发布.md#282-获取项目发布列表) |
| 2.9.1 | 获取产品需求列表 | `GET` | `/products/id/stories` | [2.9.1](./09-story-需求.md#291-获取产品需求列表) |
| 2.9.2 | 获取项目需求列表 | `GET` | `/projects/id/stories` | [2.9.2](./09-story-需求.md#292-获取项目需求列表) |
| 2.9.3 | 获取执行需求列表 | `GET` | `/executions/id/stories` | [2.9.3](./09-story-需求.md#293-获取执行需求列表) |
| 2.9.4 | 创建需求 | `POST` | `/stories` | [2.9.4](./09-story-需求.md#294-创建需求) |
| 2.9.5 | 获取需求详情 | `GET` | `/stories/id` | [2.9.5](./09-story-需求.md#295-获取需求详情) |
| 2.9.6 | 变更需求 | `POST` | `/stories/id/change` | [2.9.6](./09-story-需求.md#296-变更需求) |
| 2.9.7 | 修改需求其他字段 | `PUT` | `/stories/id` | [2.9.7](./09-story-需求.md#297-修改需求其他字段) |
| 2.9.8 | 删除需求 | `DELETE` | `/stories/id` | [2.9.8](./09-story-需求.md#298-删除需求) |
| 2.9.9 | 关闭需求 | `POST` | `/stories/id/close` | [2.9.9](./09-story-需求.md#299-关闭需求) |
| 2.10.1 | 获取项目列表 | `GET` | `/projects` | [2.10.1](./10-project-项目.md#2101-获取项目列表) |
| 2.10.2 | 创建项目 | `POST` | `/projects` | [2.10.2](./10-project-项目.md#2102-创建项目) |
| 2.10.3 | 获取项目详情 | `GET` | `/projects/id` | [2.10.3](./10-project-项目.md#2103-获取项目详情) |
| 2.10.4 | 修改项目 | `PUT` | `/projects/id` | [2.10.4](./10-project-项目.md#2104-修改项目) |
| 2.10.5 | 删除项目 | `DELETE` | `/projects/id` | [2.10.5](./10-project-项目.md#2105-删除项目) |
| 2.11.1 | 获取项目版本列表 | `GET` | `/projects/id/builds` | [2.11.1](./11-build-版本.md#2111-获取项目版本列表) |
| 2.11.2 | 获取执行版本列表 | `GET` | `/executions/id/builds` | [2.11.2](./11-build-版本.md#2112-获取执行版本列表) |
| 2.11.3 | 创建版本 | `POST` | `/projects/id/builds` | [2.11.3](./11-build-版本.md#2113-创建版本) |
| 2.11.4 | 获取版本详情 | `GET` | `/builds/id` | [2.11.4](./11-build-版本.md#2114-获取版本详情) |
| 2.11.5 | 修改版本 | `PUT` | `/builds/id` | [2.11.5](./11-build-版本.md#2115-修改版本) |
| 2.11.6 | 删除版本 | `DELETE` | `/builds/id` | [2.11.6](./11-build-版本.md#2116-删除版本) |
| 2.12.1 | 获取项目的执行列表 | `GET` | `/projects/id/executions` | [2.12.1](./12-execution-执行.md#2121-获取项目的执行列表) |
| 2.12.2 | 创建执行 | `POST` | `/projects/id/executions` | [2.12.2](./12-execution-执行.md#2122-创建执行) |
| 2.12.3 | 查看执行详情 | `GET` | `/executions/id` | [2.12.3](./12-execution-执行.md#2123-查看执行详情) |
| 2.12.4 | 修改执行 | `PUT` | `/executions/id` | [2.12.4](./12-execution-执行.md#2124-修改执行) |
| 2.12.5 | 删除执行 | `DELETE` | `/executions/id` | [2.12.5](./12-execution-执行.md#2125-删除执行) |
| 2.13.1 | 获取执行任务列表 | `GET` | `/executions/id/tasks` | [2.13.1](./13-task-任务.md#2131-获取执行任务列表) |
| 2.13.2 | 创建任务 | `POST` | `/executions/id/tasks` | [2.13.2](./13-task-任务.md#2132-创建任务) |
| 2.13.3 | 获取任务详情 | `GET` | `/tasks/id` | [2.13.3](./13-task-任务.md#2133-获取任务详情) |
| 2.13.4 | 修改任务 | `PUT` | `/tasks/id` | [2.13.4](./13-task-任务.md#2134-修改任务) |
| 2.13.5 | 删除任务 | `DELETE` | `/tasks/id` | [2.13.5](./13-task-任务.md#2135-删除任务) |
| 2.13.6 | 开始任务 | `POST` | `/tasks/id/start` | [2.13.6](./13-task-任务.md#2136-开始任务) |
| 2.13.7 | 暂停任务 | `POST` | `/tasks/id/pause` | [2.13.7](./13-task-任务.md#2137-暂停任务) |
| 2.13.8 | 继续任务 | `POST` | `/tasks/id/restart` | [2.13.8](./13-task-任务.md#2138-继续任务) |
| 2.13.9 | 完成任务 | `POST` | `/tasks/id/finish` | [2.13.9](./13-task-任务.md#2139-完成任务) |
| 2.13.10 | 关闭任务 | `POST` | `/tasks/id/close` | [2.13.10](./13-task-任务.md#21310-关闭任务) |
| 2.13.11 | 添加任务日志 | `POST` | `/tasks/id/estimate` | [2.13.11](./13-task-任务.md#21311-添加任务日志) |
| 2.13.12 | 获取任务日志 | `GET` | `/tasks/id/estimate` | [2.13.12](./13-task-任务.md#21312-获取任务日志) |
| 2.14.1 | 获取产品 Bug 列表 | `GET` | `/products/id/bugs` | [2.14.1](./14-bug-Bug.md#2141-获取产品-Bug-列表) |
| 2.14.2 | 创建 Bug | `POST` | `/products/id/bugs` | [2.14.2](./14-bug-Bug.md#2142-创建-Bug) |
| 2.14.3 | 获取 Bug 详情 | `GET` | `/bugs/id` | [2.14.3](./14-bug-Bug.md#2143-获取-Bug-详情) |
| 2.14.4 | 修改 Bug | `PUT` | `/bugs/id` | [2.14.4](./14-bug-Bug.md#2144-修改-Bug) |
| 2.14.5 | 删除 Bug | `DELETE` | `/bugs/id` | [2.14.5](./14-bug-Bug.md#2145-删除-Bug) |
| 2.14.6 | 确认 Bug | `POST` | `/bugs/id/confirm` | [2.14.6](./14-bug-Bug.md#2146-确认-Bug) |
| 2.14.7 | 关闭 Bug | `POST` | `/bugs/id/close` | [2.14.7](./14-bug-Bug.md#2147-关闭-Bug) |
| 2.14.8 | 激活 Bug | `POST` | `/bugs/id/active` | [2.14.8](./14-bug-Bug.md#2148-激活-Bug) |
| 2.14.9 | 解决 Bug | `POST` | `/bugs/id/resolve` | [2.14.9](./14-bug-Bug.md#2149-解决-Bug) |
| 2.15.1 | 获取产品用例列表 | `GET` | `/products/id/testcases` | [2.15.1](./15-testcase-用例.md#2151-获取产品用例列表) |
| 2.15.2 | 创建用例 | `POST` | `/products/id/testcases` | [2.15.2](./15-testcase-用例.md#2152-创建用例) |
| 2.15.3 | 获取用例详情 | `GET` | `/testcases/id` | [2.15.3](./15-testcase-用例.md#2153-获取用例详情) |
| 2.15.4 | 修改用例 | `PUT` | `/testcases/id` | [2.15.4](./15-testcase-用例.md#2154-修改用例) |
| 2.15.5 | 删除用例 | `DELETE` | `/testcases/id` | [2.15.5](./15-testcase-用例.md#2155-删除用例) |
| 2.15.6 | 执行用例 | `POST` | `/testcases/id/results` | [2.15.6](./15-testcase-用例.md#2156-执行用例) |
| 2.16.1 | 获取测试单列表 | `GET` | `/testtasks` | [2.16.1](./16-testtask-测试单.md#2161-获取测试单列表) |
| 2.16.2 | 获取项目的测试单 | `GET` | `/projects/id/testtasks` | [2.16.2](./16-testtask-测试单.md#2162-获取项目的测试单) |
| 2.16.3 | 获取测试单详情 | `GET` | `/testtasks/id` | [2.16.3](./16-testtask-测试单.md#2163-获取测试单详情) |
| 2.17.1 | 创建反馈 | `POST` | `/feedbacks` | [2.17.1](./17-feedback-反馈.md#2171-创建反馈) |
| 2.17.2 | 指派反馈 | `POST` | `/feedbacks/id/assign` | [2.17.2](./17-feedback-反馈.md#2172-指派反馈) |
| 2.17.3 | 关闭反馈 | `POST` | `/feedbacks/id/close` | [2.17.3](./17-feedback-反馈.md#2173-关闭反馈) |
| 2.17.4 | 删除反馈 | `DELETE` | `/feedbacks/id` | [2.17.4](./17-feedback-反馈.md#2174-删除反馈) |
| 2.17.5 | 修改反馈 | `PUT` | `/feedbacks/id` | [2.17.5](./17-feedback-反馈.md#2175-修改反馈) |
| 2.17.6 | 获取反馈详情 | `GET` | `/feedbacks/id` | [2.17.6](./17-feedback-反馈.md#2176-获取反馈详情) |
| 2.17.7 | 获取反馈列表 | `GET` | `/feedbacks` | [2.17.7](./17-feedback-反馈.md#2177-获取反馈列表) |
| 2.18.1 | 获取工单列表 | `GET` | `/tickets` | [2.18.1](./18-ticket-工单.md#2181-获取工单列表) |
| 2.18.2 | 获取工单详情 | `GET` | `/tickets/id` | [2.18.2](./18-ticket-工单.md#2182-获取工单详情) |
| 2.18.3 | 修改工单 | `PUT` | `/tickets/id` | [2.18.3](./18-ticket-工单.md#2183-修改工单) |
| 2.18.4 | 创建工单 | `POST` | `/tickets` | [2.18.4](./18-ticket-工单.md#2184-创建工单) |
| 2.18.5 | 删除工单 | `DELETE` | `/tickets/id` | [2.18.5](./18-ticket-工单.md#2185-删除工单) |
