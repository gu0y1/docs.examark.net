# Linux 部署与排错

本页面向 IT / 运维 / 开发人员。普通教师不需要执行本页命令。

## 适用角色

- IT / 运维人员。
- 平台管理员。
- 开发或部署负责人。

## 你将完成什么

- 知道 Linux 部署需要关注哪些系统依赖。
- 知道如何检查服务状态。
- 知道 PDF 渲染和中文字体问题应从哪里排查。

## Linux-only 说明

Examark 当前按 Linux-only 部署维护。Windows、WSL、PowerShell、Windows dev server 和本地 3000 端口问题不属于普通用户手册内容。

如果学校用户遇到考试流程问题，请让他们查看 [普通用户 FAQ](../faq/index.md)，不要把开发环境命令发给普通教师。

## 推荐系统依赖

Linux 部署至少需要关注：

- Python 运行环境。
- Node.js 和 npm。
- Nginx。
- Certbot。
- SQLite。
- `fontconfig`。
- 中文字体，例如 `fonts-noto-cjk`。
- Chromium 或 Playwright 可用浏览器。

## 服务检查

常见检查命令：

```bash
systemctl is-active examark-api examark-web nginx
curl -fsS http://127.0.0.1:8000/health
curl -I https://app.examark.net
```

## 中文字体与 PDF 渲染

如果 PDF 中中文显示为空白或方框，先检查 Linux 上是否安装中文字体：

```bash
fc-list :lang=zh family file
```

推荐安装 Noto CJK 字体。PDF 渲染依赖 Chromium 或 Playwright 可用浏览器；如果系统没有 Chromium，需要安装或配置可用浏览器路径。

## 组织入口

学校用户业务入口使用：

```text
/org/{orgSlug}/grading
```

示例：

```text
/org/demoSchool/grading
```

旧入口只用于提示用户切换到组织入口，不应作为教程里的推荐入口。

## 备份建议

运维人员应定期备份：

- master 数据库。
- tenant 数据库。
- tenant storage。
- Nginx 与 systemd 配置。
- 环境变量配置文件。

备份恢复前，应先停止相关服务并确认目标路径。

## 常见技术排错

**服务不 active**

检查 systemd 日志，确认环境变量、端口、依赖和工作目录是否正确。

**HTTPS 不可用**

检查 DNS、Nginx 配置、证书状态和 80/443 端口。

**PDF 渲染失败**

检查 Chromium 是否可用，中文字体是否安装，服务环境变量是否正确。

**普通用户反馈找不到考试**

不要先从服务器排错。请先让学校管理员按 [故障处理](../faq/troubleshooting.md) 检查筛选条件、考试协作和权限。
