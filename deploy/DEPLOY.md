# 未竟 Unfinished Journal — Cloudflare Pages 部署指南

## 前置条件

1. Cloudflare 账号 & 域名 `unfinishedjournal.com` 已添加到 Cloudflare
2. Git 仓库已推送（推荐 GitHub / GitLab）

## 方式一：Cloudflare Pages Git 集成（推荐）

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages
2. 点击 **Create application** → **Pages** → **Connect to Git**
3. 授权并选择仓库，配置：
   - **Build command**: 留空（纯静态，无需构建）
   - **Build output directory**: `/`（仓库根目录即为 deploy 内容）
   - **Root directory**: 留空
4. 点击 **Save and Deploy**
5. 部署成功后，在 **Custom domains** 添加 `unfinishedjournal.com`

## 方式二：Direct Upload（无需 Git）

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets
2. 将 `output/deploy/` 目录下所有文件拖入上传区域
3. 项目名称填写 `unfinished-journal`
4. 上传完成后绑定自定义域名 `unfinishedjournal.com`

## 部署文件清单

```
deploy/
├── index.html    # 单文件 SPA 官网
├── logo2.png     # 期刊 Logo（金色圆环笔触）
└── _headers      # 安全头配置
```

## DNS 配置（Cloudflare）

部署后确认以下 DNS 记录：

| 类型 | 名称 | 内容 | 代理状态 |
|------|------|------|----------|
| CNAME | @ | unfinished-journal.pages.dev | 已代理 |
| CNAME | www | unfinished-journal.pages.dev | 已代理 |

## 注意事项

- Cloudflare Pages 自动签发 SSL 证书，无需额外操作
- `_headers` 文件用于设置安全响应头
- 纯静态 HTML，无后端依赖，全球 CDN 加速
- 当前为 MVP 原型，投稿数据仅存 localStorage

## 本地验证

用任意浏览器打开 `deploy/index.html`，确认：
- 导航所有链接可点击
- 投稿表单可填写提交
- 管理员后台可登录（密码：UNFINISHED-ADMIN-2026）
- Logo 正常显示
- 所有邮箱链接指向 editorial@unfinishedjournal.com