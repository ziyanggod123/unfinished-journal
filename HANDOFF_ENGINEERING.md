# 未竟 (Unfinished Journal) — 工程交接文档 v0.15.0

> 生成日期：2026-06-10  
> 在线地址：https://unfinishedjournal.com  
> 预览地址：https://abcc00be.unfinished-journal.pages.dev  

---

## 1. 项目代码仓库

当前为本地工程，无 Git 仓库或 GitHub 链接。完整代码位于：

```
C:\Users\DELL\AppData\Roaming\Tencent\Marvis\User\oAN1i2cvTGdg2C24zS3_d-2V8iBY\workspace\conv_19ea6df0402_c21d38d11a65
```

关键目录：
| 目录 | 说明 |
|------|------|
| `output/` | 源码目录（主工作区） |
| `deploy/` | 部署目录（推送到 Cloudflare Pages 的文件） |
| `temp/` | 中间产物（脚本/测试文件，可忽略） |

---

## 2. 当前线上页面对应的分支

- Cloudflare Pages 项目名：**unfinished-journal**
- 分支：**main**
- 最新部署预览：`abcc00be.unfinished-journal.pages.dev`

---

## 3. 技术栈

| 层级 | 选型 | 说明 |
|------|------|------|
| 前端框架 | **无框架** | 纯 HTML + CSS + JavaScript，单文件 SPA（index.html, ~3930 行） |
| UI 框架 | **无** | 手写 CSS 变量体系，无第三方 UI 库 |
| 路由 | **Hash-based SPA** | `switchPage()` + `history.replaceState` + `hashchange` 事件 |
| 数据库 | **localStorage（模拟）** | 无真实数据库，`mockStore` 对象以 IIFE 模式封装，含 5 篇种子数据 |
| 认证 | **前端硬编码密码** | 管理员密码 `UNFINISHED-ADMIN-2026`，仅用于原型阶段 |
| 部署平台 | **Cloudflare Pages** | 静态资源托管，通过 wrangler CLI 部署 |
| 字体 | **Google Fonts** | Noto Serif SC + Inter |

---

## 4. 本地运行方式

无需安装、构建、编译。直接打开 HTML 文件即可运行。

### 开发

```bash
# 方式一：直接双击打开
start output/index.html

# 方式二：用任意 HTTP 服务器
cd output
python -m http.server 8080
# 然后访问 http://localhost:8080
```

### 部署

```bash
# 1. 同步 output 到 deploy/
Copy-Item output/index.html deploy/ -Force
Copy-Item output/logo2.png deploy/ -Force
Copy-Item output/manifest.json deploy/ -Force
Copy-Item output/sw.js deploy/ -Force
Copy-Item output/rss.xml deploy/ -Force
Copy-Item output/sitemap.xml deploy/ -Force
Copy-Item output/robots.txt deploy/ -Force

# 2. 设置环境变量（PowerShell）
$env:CLOUDFLARE_API_TOKEN = "<你的 API Token>"
$env:CLOUDFLARE_ACCOUNT_ID = "<你的 Account ID>"

# 3. 部署
npx wrangler pages deploy deploy/ --project-name=unfinished-journal --branch=main --commit-dirty=true
```

Wrangler 版本：4.99.0（全局安装或 npx 均可）

---

## 5. 环境变量模板

### .env.example

```bash
# Cloudflare Pages 部署
CLOUDFLARE_API_TOKEN=       # Cloudflare API Token（需 Pages:Edit + Workers Scripts:Edit + Account Settings:Read + Access:Apps:Edit 权限）
CLOUDFLARE_ACCOUNT_ID=      # Cloudflare Account ID

# Google Analytics（可选）
GA_MEASUREMENT_ID=          # Google Analytics 4 Measurement ID，如 G-XXXXXXXXXX，填入后取消 index.html 中注释

# 后端（未来）
SUPABASE_URL=               # Supabase 项目 URL
SUPABASE_ANON_KEY=          # Supabase 匿名公钥
EMAIL_SERVICE_API_KEY=      # 邮件通知服务 API Key
```

---

## 6. 当前已完成的页面列表

| # | 页面 | 路由 | 状态 |
|---|------|------|------|
| 1 | 首页 | `#/home` | 完成 |
| 2 | 关于未竟 | `#/about` | 完成 |
| 3 | 投稿页 | `#/submit` | 完成 |
| 4 | 投稿指南 | `#/guidelines` | 完成 |
| 5 | 投稿成功 | `#/submit-success` | 完成 |
| 6 | 档案浏览 | `#/browse` | 完成（含搜索/筛选） |
| 7 | 稿件详情 | `#/submission/UJ-XXXX-XXXX` | 完成 |
| 8 | 管理员登录 | `#/login` | 完成（原型密码入口） |
| 9 | 管理员后台 | `#/admin` | 完成（含搜索/筛选/分页/导出 JSON） |
| 10 | 管理员投稿详情 | `#/admin-submission/UJ-XXXX-XXXX` | 完成（含状态流转按钮） |
| 11 | 加入未竟 | `#/join` | 完成 |
| 12 | 我的提交记录 | `#/my-submissions` | 完成 |
| 13 | 隐私政策 | `#/privacy` | 完成（占位） |
| 14 | 使用条款 | `#/terms` | 完成（占位） |
| 15 | 联系 | `#/contact` | 完成（占位） |
| 16 | 404 | `#/404` | 完成（含搜索引导） |

---

## 7. 当前各子系统状态

| 子系统 | 状态 | 详情 |
|--------|------|------|
| **登录** | ⚠️ 原型 | 硬编码密码 `UNFINISHED-ADMIN-2026`，无真实认证（无 JWT/OAuth/Session） |
| **投稿** | ⚠️ 原型 | 前端表单校验通过后存入 localStorage，提交成功页引导用户发邮件至 editorial@unfinishedjournal.com |
| **数据库** | ❌ 无 | localStorage 模拟存储，刷新不丢失但清除浏览器数据即丢失。5 篇种子投稿硬编码在 mockStore 中 |
| **部署** | ✅ 正常 | Cloudflare Pages + wrangler CLI 部署，自定义域名 unfinishedjournal.com 200 OK |
| **域名** | ✅ 正常 | unfinishedjournal.com 托管在 Cloudflare DNS，已绑定 Pages 项目。邮箱 editorial@unfinishedjournal.com 通过 Zoho 配置 |

---

## 8. 当前已知问题和待办

### P0 — 真实上线前必做

| # | 问题 | 描述 |
|---|------|------|
| 1 | 无真实后端 | 需接入 Supabase / Notion / Airtable 替代 localStorage |
| 2 | 无邮件通知 | 投稿确认、初筛结果需配置邮件服务 |
| 3 | 隐私/条款法律审阅 | privacy 和 terms 页面为占位内容 |
| 4 | DNS/HTTPS | 已完成，无需操作 |

### P1

| # | 问题 | 描述 |
|---|------|------|
| 1 | Google Analytics | 代码模板已放置，需填入真实 Measurement ID 并取消注释 |

### 已知技术债务

| # | 问题 | 描述 |
|---|------|------|
| 1 | 单文件 SPA | index.html ~3930 行，后续应拆分为 HTML/CSS/JS 独立文件 |
| 2 | i18n 覆盖不完整 | 核心 UI 已翻译（导航/Hero/章节标题），用户内容区未覆盖 |
| 3 | 无 TypeScript | 纯 JS，无类型检查 |
| 4 | 无测试 | 无单元/集成/E2E 测试 |
| 5 | logo2.png | 已压缩至 53KB，若升级至真实 Logo 需重新替换 |

---

## 9. Cloudflare / 第三方配置

### Cloudflare Pages

| 配置项 | 值 |
|--------|---|
| 项目名称 | `unfinished-journal` |
| Account ID | `1ea5dd701095391c59817c84b02c2d2f` |
| Zone ID（域名） | `8891ad8ca855e1617bc62ab266a18fc8` |
| 自定义域名 | `unfinishedjournal.com`（active, 200 OK） |
| 构建命令 | 无（静态上传） |
| 输出目录 | `deploy/` |

### DNS（Cloudflare）

- 类型：CNAME
- 名称：unfinishedjournal.com
- 目标：unfinished-journal.pages.dev

### 邮箱（Zoho）

- 地址：editorial@unfinishedjournal.com
- 配置完成，可正常收发

### 未使用 / 不涉及

- GitHub Pages：未配置
- Vercel：未使用
- Supabase：未接入（P0 待办）
- Firebase：未使用

---

## 10. 附录：关键常量速查

| 常量 | 值 |
|------|------|
| 域名 | `unfinishedjournal.com` |
| 联系邮箱 | `editorial@unfinishedjournal.com` |
| 管理员密码 | `UNFINISHED-ADMIN-2026` |
| localStorage 键投稿草稿 | `uj-draft` |
| localStorage 键主题 | `uj-theme` |
| localStorage 键语言 | `uj-lang` |
| localStorage 键投稿列表 | `mockStore`（IIFE 内部） |
| 种子投稿数 | 5 篇 |

---

*本文档由 AI 辅助生成，基于 2026-06-10 工程状态。*