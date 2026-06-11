# 文件、导出与 render-data 保护

Examark 不只在前端隐藏字段，后端会对文件、导出和打印数据统一做 capability 校验。

## 文件类型

| 类型 | 默认可见角色 |
| --- | --- |
| 试卷 PDF | can_print |
| 答题卡 PDF | can_print |
| 试题图片素材 | can_edit_paper、can_print、can_grade |
| 扫描原卷 | can_view_scan_original |
| 题目裁剪图 | 被分配题目的 grader 或 can_grade_all |

## render token

打印页面和后端 Playwright 渲染需要 render token。

token 绑定：

- exam_id。
- actor_id。
- purpose。
- resource_id。
- 过期时间。

不同 purpose 要求不同 capability。例如 print 要求 can_print，scan_original 要求 can_view_scan_original，score_report 要求 can_view_scores。

## 导出保护

CSV、Excel 和 PDF 导出都必须执行同一套字段裁剪。页面匿名时，导出也不能泄露姓名、学号、student_id 或扫描原卷。

## 无权限返回

无权限时，后端不仅不能返回文件内容，也不能返回 file_id、storage_key、download_url、preview_url 等可间接访问文件的字段。

