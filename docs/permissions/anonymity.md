# 匿名阅卷与身份字段

匿名阅卷是 Examark 的核心权限边界之一。

## 字段分层

基础身份字段：

- `student_id`。
- `student_name`。
- `student_no`。
- `classroom_name`。

扫描绑定字段：

- `answer_sheet_id`。
- `barcode`。
- `seat_no`。
- `binding_status`。
- `full_scan_image`。

敏感字段：

- 身份证号。
- 电话。
- 邮箱。
- 国籍。
- 家长信息。
- 地址。

## 匿名 ID

系统区分两类匿名 ID：

- `anonymous_submission_id`：同一学生在本场考试中的匿名整卷记录。
- `anonymous_answer_id`：某一道题的匿名答案记录。

二者都必须不可推断，不能由 `student_id` 推出，也不能跨考试关联。

## 阅卷默认匿名

普通阅卷人和 AI 教师默认只能看到：

- 被分配题目的题干。
- 评分标准。
- 匿名答题内容。
- 识别文本。
- 安全题目裁剪图。

默认不能看到学生身份、学号、班级、整卷原图或答题卡绑定关系。

## 去匿名能力

`can_deanonymize_grading` 是高风险能力。默认仅 owner、examiner、超管或被明确放权者拥有。scanner 虽然能在扫描流程看身份和原卷，但不自动拥有阅卷界面去匿名能力。

