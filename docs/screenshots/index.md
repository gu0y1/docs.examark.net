# 截图补充清单

本页用于集中管理文档中的截图上传位。当前阶段不引用任何不存在的图片文件；你上传截图后，再把对应页面里的截图说明块替换为真实图片。

## 命名规则

- 图片格式优先使用 PNG。
- 文件名使用图号和英文短名，例如 `02-01-admin-settings-entry.png`。
- 文件放在 `docs/assets/screenshots/{章节目录}/` 下。
- 图号保持稳定，后续补图不重新编号。

## 替换方式

截图上传前，正文使用：

```markdown
!!! note "图 2-1 管理员设置入口（截图待上传）"
    建议文件：`docs/assets/screenshots/02-first-exam/02-01-admin-settings-entry.png`

    画面要求：显示侧边栏中的“管理员设置”，并能看到学校基础信息、校历、年级或科目相关入口。
```

截图上传后，替换为：

```markdown
图片语法示例：![图 2-1 管理员设置入口](../assets/screenshots/02-first-exam/02-01-admin-settings-entry.png)
```

路径层级要根据当前页面所在目录调整。

## 截图清单

| 图号 | 所在页面 | 建议文件 | 画面要求 |
| --- | --- | --- | --- |
| 图 1-1 | 登录与组织入口 | `docs/assets/screenshots/01-getting-started/01-01-org-selector.png` | 显示组织选择页面和学校搜索入口。 |
| 图 1-2 | 登录与组织入口 | `docs/assets/screenshots/01-getting-started/01-02-org-login.png` | 显示组织登录页的工号、密码和登录按钮。 |
| 图 1-3 | 界面与导航 | `docs/assets/screenshots/01-getting-started/01-03-sidebar.png` | 显示侧边栏主要入口。 |
| 图 1-4 | 界面与导航 | `docs/assets/screenshots/01-getting-started/01-04-exam-workspace-tabs.png` | 显示考试工作区顶部标签。 |
| 图 2-1 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-01-admin-settings-entry.png` | 显示管理员设置入口和基础数据相关标签。 |
| 图 2-2 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-02-create-exam-entry.png` | 显示考试管理中新建考试的位置。 |
| 图 2-3 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-03-exam-collaboration.png` | 显示考试概览中的协作人员和考核班级区域。 |
| 图 2-4 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-04-paper-editor.png` | 显示试题配置页面的题组、题目编辑器和预览入口。 |
| 图 2-5 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-05-preprint-settings.png` | 显示预印配置、纸张、单双面和预览通过位置。 |
| 图 2-6 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-06-scan-batches.png` | 显示扫描批次、上传入口和录入结果入口。 |
| 图 2-7 | 完成第一场考试 | `docs/assets/screenshots/02-first-exam/02-07-grading-review.png` | 显示客观复核、主观阅卷和保存评分区域。 |
| 图 3-1 | 考试流程总览 | `docs/assets/screenshots/03-workflow/03-01-exam-workspace-overview.png` | 显示考试工作区全局结构。 |
| 图 3-2 | 新建考试 | `docs/assets/screenshots/03-workflow/03-02-create-exam-form.png` | 显示新建考试表单关键字段。 |
| 图 3-3 | 配置考试协作 | `docs/assets/screenshots/03-workflow/03-03-collaboration-panel.png` | 显示配置协作人员的位置。 |
| 图 3-4 | 试题编写 | `docs/assets/screenshots/03-workflow/03-04-paper-authoring.png` | 显示题组、题目编辑器、分值、答案和预览入口。 |
| 图 3-5 | 预印与印刷数据 | `docs/assets/screenshots/03-workflow/03-05-preprint-print-data.png` | 显示预印配置和印刷数据生成入口。 |
| 图 3-6 | 扫描上传 | `docs/assets/screenshots/03-workflow/03-06-scan-results.png` | 显示扫描批次状态和录入结果。 |
| 图 3-7 | 客观复核与主观阅卷 | `docs/assets/screenshots/03-workflow/03-07-grading-page.png` | 显示客观复核列表、主观阅卷任务和分数保存。 |
| 图 3-8 | 成绩发布与报告 | `docs/assets/screenshots/03-workflow/03-08-scores-reports.png` | 显示成绩表、发布状态、报告和导出入口。 |
| 图 4-1 | 考试创建人手册 | `docs/assets/screenshots/04-roles/04-01-exam-owner-dashboard.png` | 显示考试创建人查看考试状态的位置。 |
| 图 4-2 | 试题编写人手册 | `docs/assets/screenshots/04-roles/04-02-paper-author-workflow.png` | 显示试题配置、预印和印刷数据流程。 |
| 图 4-3 | 扫描人员手册 | `docs/assets/screenshots/04-roles/04-03-scanner-workflow.png` | 显示扫描批次、异常处理、人工绑定和交付阅卷。 |
| 图 4-4 | 阅卷教师手册 | `docs/assets/screenshots/04-roles/04-04-grader-tasks.png` | 显示客观复核和主观阅卷任务。 |
| 图 5-1 | 扫描与识别 SOP | `docs/assets/screenshots/05-scanning/05-01-scan-quality.png` | 显示清晰条码、完整页码和可识别填涂区。 |
| 图 6-1 | 常见权限场景 | `docs/assets/screenshots/06-permissions/06-01-permission-denied.png` | 显示无权访问或入口被隐藏时的界面。 |
| 图 7-1 | 学校基础数据 | `docs/assets/screenshots/07-admin/07-01-admin-settings-tabs.png` | 显示管理员设置中的基础数据标签。 |
| 图 7-2 | 教师、角色与绑定 | `docs/assets/screenshots/07-admin/07-02-teacher-workspace.png` | 显示教师工作台弹窗的基本信息、角色和绑定标签。 |
| 图 7-3 | 学生与家长档案 | `docs/assets/screenshots/07-admin/07-03-student-management.png` | 显示学生列表、学生详情、班级和敏感字段区域。 |

## 上传后检查

- 确认图片文件路径与正文引用一致。
- 检查页面预览是否正常。
- 检查页面中没有图片加载失败。
- 如果截图包含真实学生或教师信息，先打码再提交。
