# TODO

## v0.15.0 — 已交付（2026-06-10 Round 12/13/14/15 - 自动持续优化第7/8/9/10轮）

- [x] 社交分享元标签：Twitter Card + GA4 模板
- [x] 打印样式：@media print
- [x] PWA 支持：manifest.json + sw.js + Service Worker 注册
- [x] RSS Feed：rss.xml（5 篇种子投稿）
- [x] 中/英双语切换：语言切换按钮 + I18N 字典 + translatePage()
- [x] 部署至 Cloudflare Pages（预览: abcc00be.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.15.0

## v0.14.0 — 已交付（2026-06-10 Round 11 - 自动持续优化第6轮）

- [x] 无障碍优化：skip-link + focus-visible + label for + main role
- [x] 投稿草稿自动保存：localStorage 800ms 防抖
- [x] 部署至 Cloudflare Pages（预览: 23df3367.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.14.0

## v0.13.0 — 已交付（2026-06-10 Round 10 - 自动持续优化第5轮）

- [x] 暗色模式：CSS 变量 + 切换按钮 + localStorage + 系统偏好检测
- [x] 404 页面搜索引导：搜索框 + 快速链接
- [x] 页面切换过渡动画
- [x] 部署至 Cloudflare Pages（预览: 8f02b5da.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.13.0

## v0.12.0 — 已交付（2026-06-10 Round 9 - 自动持续优化第4轮）

- [x] 投稿防重复提交：按钮禁用 3 秒 + 文字变更
- [x] 档案页搜索/筛选：搜索框 + 类型下拉筛选
- [x] 部署至 Cloudflare Pages（预览: 9109d61a.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.12.0

## v0.11.0 — 已交付（2026-06-10 Round 8 - 自动持续优化第3轮）

- [x] 首页 Hero 锚点跨页面修复：hashchange 恢复原 hash + 延时滚动
- [x] logo2.png 压缩：798KB → 53KB
- [x] sitemap.xml + robots.txt SEO 基础设施
- [x] 移动端表单触控优化：min-height 48px / font-size 16px
- [x] 部署至 Cloudflare Pages（预览: bea650cc.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.11.0

## v0.10.0 — 已交付（2026-06-10 Round 7 - 自动持续优化第2轮）

- [x] Token 区精简：6 卡片 → 3 卡片，移除敏感术语，标题改为"社区激励与贡献记录"
- [x] 新增独立「关于未竟」专题页（#/about），Footer 链接更新
- [x] 投稿页文件上传措辞优化：`（模拟上传）` → 指引发邮件至 editorial@unfinishedjournal.com
- [x] 部署至 Cloudflare Pages（预览: f6afaa84.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.10.0

## v0.4.0 — 已交付（2026-06-09 Round 1）

- [x] Admin 操作按钮从 alert 占位升级为真实状态流转
- [x] 新增「未竟档案」公开展示页（#/browse）
- [x] 新增稿件详情页（#/submission/UJ-XXXX-XXXX）
- [x] 导航栏新增「档案」入口

## v0.5.0 — 已交付（2026-06-09 Round 2）

- [x] Admin 面板搜索/状态筛选/分页
- [x] Admin 路由保护
- [x] 修复状态统计计数 Bug

## v0.6.0 — 已交付（2026-06-09 Round 3）

- [x] 修复 mockSubmissions.all() 数据新鲜度
- [x] 改进投稿 ID 生成机制
- [x] Admin 面板「导出 JSON」按钮

## v0.7.0 — 已交付（2026-06-09 Round 4）

- [x] 修复登录/注册 404
- [x] 新增「我的提交记录」页面
- [x] 新增管理员投稿详情页
- [x] 成功页增强 + 原型状态说明
- [x] OPERATIONS.md 部署方案文档

## v0.9.0 — 已交付（2026-06-10 Round 6 - 自动持续优化第1轮）

- [x] Footer 死链修复：「关于未竟」→ #manifesto，「社区」→ #contact，「常见问题」→ #faq
- [x] 页面底部 CTA「提交未竟之作」从 openModal() 改为 navigateTo('submit')
- [x] 删除冗余投稿 Modal：HTML / CSS / JS 全部移除，统一投稿入口
- [x] 部署至 Cloudflare Pages（预览: 5f5f65ce.unfinished-journal.pages.dev）
- [x] 全量项目文档更新至 v0.9.0

## v0.8.0 — 已交付（2026-06-09 Round 5 - 静态官网 MVP 重构）

- [x] 登录页 →「管理员原型入口」（密码 UNFINISHED-ADMIN-2026）
- [x] 注册页 →「加入未竟计划」
- [x] 投稿页原型说明 + mailto 链接
- [x] 全站统一邮箱 editorial@unfinishedjournal.com
- [x] Logo（logo2.png）集成：favicon / 导航栏 / Footer / og:image
- [x] deploy/ 部署目录 + Cloudflare Pages 部署指南
- [x] 全部项目文档更新至 v0.8.0

## P0 — 真实上线前必做

- [ ] 接入真实后端（Supabase / Notion / Airtable）
- [ ] 配置邮件通知服务（投稿确认、初筛结果）
- [ ] 部署到 unfinishedjournal.com 并配置 HTTPS/DNS
- [ ] 隐私政策与使用条款法律审阅

## P1 — 影响体验

- [x] 首页 Hero 锚点跨页面修复
- [x] 投稿防重复提交
- [x] 移动端投稿表单优化
- [x] 骨架屏 / loading 状态
- [x] 404 页面搜索引导
- [ ] Google Analytics 接入
- [x] 档案页搜索/筛选

## P2 — 锦上添花

- [x] 暗色模式
- [x] 多语言支持（中/英）
- [x] 投稿草稿自动保存
- [x] sitemap.xml + robots.txt
- [x] RSS Feed
- [x] 打印友好样式
- [x] 无障碍优化（ARIA）
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*
