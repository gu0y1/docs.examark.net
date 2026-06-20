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

## Nginx 与 Certbot 检查

常见检查命令：

```bash
nginx -t
systemctl is-active nginx
certbot certificates
systemctl list-timers | grep certbot
```

排查顺序：

1. DNS 是否指向当前服务器。
2. 80/443 端口是否开放。
3. Nginx 站点配置是否启用。
4. 反向代理目标服务是否 active。
5. 证书是否覆盖当前域名。
6. 自动续期 timer 是否存在。

## 多组织入口检查

业务入口采用：

```text
/org/{orgSlug}/grading
```

运维检查时，应分别确认：

- 根路径能进入组织选择或组织卡片页面。
- 本地组织能进入 `/org/{orgSlug}/login`。
- 外部组织会跳转到外部登录地址。
- 旧入口只用于提示，不作为推荐入口。

## 中文字体与 PDF 渲染

如果 PDF 中中文显示为空白或方框，先检查 Linux 上是否安装中文字体：

```bash
fc-list :lang=zh family file
```

推荐安装 Noto CJK 字体。PDF 渲染依赖 Chromium 或 Playwright 可用浏览器；如果系统没有 Chromium，需要安装或配置可用浏览器路径。

## 数据库与 storage 备份

备份至少覆盖：

- master 数据库。
- tenant 数据库目录。
- tenant storage 目录。
- Nginx 配置。
- systemd 服务文件。
- 环境变量配置文件。

建议策略：

| 对象 | 建议频率 | 说明 |
| --- | --- | --- |
| master 数据库 | 每日 | 保存组织目录、平台设置和审计 |
| tenant 数据库 | 每日或考试前后 | 保存学校业务数据 |
| tenant storage | 每日或考试前后 | 保存上传文件、PDF、扫描和裁剪产物 |
| 配置文件 | 每次变更后 | 便于恢复服务 |

恢复前应先停止相关服务，确认目标路径，再恢复数据库和 storage。

## GitHub Pages 文档站发布

文档站由 GitHub Pages workflow 发布。推荐流程：

```bash
mkdocs build --strict
git status --short
git add -A
git commit -m "Update docs"
git push origin main
```

`main` 分支 push 后会触发 Pages workflow。部署完成后，访问 `https://docs.examark.net/` 验证首页是否更新。

如果文档中新增截图，先确认图片文件已提交，并执行 `mkdocs build --strict` 检查图片引用。

## 常见技术排错

**服务不 active**

检查 systemd 日志，确认环境变量、端口、依赖和工作目录是否正确。

**HTTPS 不可用**

检查 DNS、Nginx 配置、证书状态和 80/443 端口。

**PDF 渲染失败**

检查 Chromium 是否可用，中文字体是否安装，服务环境变量是否正确。

**普通用户反馈找不到考试**

不要先从服务器排错。请先让学校管理员按 [故障处理](../faq/troubleshooting.md) 检查筛选条件、考试协作和权限。
