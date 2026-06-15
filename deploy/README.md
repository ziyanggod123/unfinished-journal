# 部署说明 — 未竟 (Unfinished Journal)

## 文件结构

```
deploy/
  index.html    # 单文件静态官网 MVP，所有页面通过 hash 路由（#home, #submit, #admin 等）
```

## 部署到 Cloudflare Pages

### 步骤 1: 上传到 GitHub

1. 在 GitHub 创建一个新仓库（例如 `unfinished-journal-site`）
2. 将 `deploy/` 目录下的内容（index.html）推送到仓库根目录：

```bash
cd deploy
git init
git add index.html
git commit -m "v0.7.0 MVP: 未竟静态官网"
git remote add origin https://github.com/YOUR_USER/unfinished-journal-site.git
git push -u origin main
```

### 步骤 2: 连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** → **Pages** → **连接到 Git**
3. 选择 GitHub，授权访问你刚才创建的仓库
4. 配置构建设置：
   - **构建命令**：留空（无需构建）
   - **部署目录**：`/`（根目录）
   - **框架预设**：无
5. 点击「保存并部署」

### 步骤 3: 自定义域名

1. 部署成功后，进入该 Pages 项目 → **自定义域**
2. 点击「设置自定义域」
3. 输入域名：`unfinishedjournal.com`
4. Cloudflare 会自动提供 SSL 证书（约 1-2 分钟生效）
5. 如 Cloudflare 也是 DNS 托管商，CNAME 记录会自动添加；否则手动在 DNS 中添加 CNAME 指向 `<project>.pages.dev`

### 步骤 4: 验证

部署完成后访问 https://unfinishedjournal.com 确认：
- 首页加载正常
- 导航栏所有链接可点击且无 404
- `/submit` 投稿页可正常打开
- `/admin` 管理后台需密码认证（UNFINISHED-ADMIN-2026）
- `/join` 加入未竟页可正常打开

## 其他部署平台

### Vercel

1. 导入 GitHub 仓库
2. 框架预设选择「Other」
3. 无需构建命令和输出目录
4. 自定义域名在 Settings → Domains 中配置

### Netlify

1. 导入 GitHub 仓库
2. 构建命令留空，发布目录设为 `/`
3. 自定义域名在 Domain Settings 中配置

## 注意事项

- **单文件架构**：所有页面逻辑包含在 index.html 中，通过 hash 路由（`#` + 页面名）切换
- **纯前端**：无后端依赖，投稿数据存储在浏览器 localStorage 中
- **无需构建**：是纯静态 HTML 文件，不需要 npm install / build 步骤
- **邮箱**：所有联系邮箱统一为 editorial@unfinishedjournal.com