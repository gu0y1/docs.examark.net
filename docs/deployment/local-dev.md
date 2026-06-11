# 本地启动

## 后端

```powershell
cd apps/api
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m app.seed
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API 文档：

```text
http://127.0.0.1:8000/docs
```

## 前端

```powershell
cd apps/web
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

前端地址：

```text
http://127.0.0.1:3000/grading
```

## API 代理

浏览器端默认请求同源 `/api/grading/...`，由 Next.js rewrite 转发到后端 `http://127.0.0.1:8000/api/grading/...`。

这样可以避免 Windows 浏览器和 WSL 内部服务对 `127.0.0.1:8000` 的解析不一致。

## 验证命令

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:8000/api/grading/health
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:3000/api/grading/health
```

