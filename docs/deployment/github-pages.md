# 文档站发布

本文档站使用 MkDocs 和 GitHub Pages 发布。

## 本地预览

```bash
pip install -r requirements.txt
mkdocs serve
```

默认地址：

```text
http://127.0.0.1:8000
```

## 本地构建

```bash
mkdocs build --strict
```

`--strict` 会将断链、配置错误等问题视为构建失败。

## GitHub Pages

仓库 push 到 `main` 后，GitHub Actions 会：

1. 安装 Python。
2. 安装 MkDocs 依赖。
3. 执行 `mkdocs build --strict`。
4. 上传 Pages artifact。
5. 部署到 GitHub Pages。

## 自定义域名

站点绑定：

```text
docs.examark.net
```

仓库包含 `docs/CNAME`，构建后会发布到站点根目录。

