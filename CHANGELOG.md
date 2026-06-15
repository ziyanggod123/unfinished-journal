# CHANGELOG

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

## [v0.15.0] — 2026-06-10 (Round 12/13/14/15 - 自动持续优化第7/8/9/10轮)

### Round 15 — v0.15.0 补充交付
- 中/英双语切换：语言切换按钮 + I18N 字典 + translatePage() + localStorage 持久化

### Round 14
- RSS Feed：rss.xml（5 篇种子投稿）+ head 中 alternate link

### Round 13
- PWA：manifest.json + sw.js（缓存策略）+ Service Worker 注册 + Apple Web App 元标签

### Round 12
- 社交分享元标签：Twitter Card（summary）+ GA4 注释代码模板
- 打印样式：@media print 导航/CTA/页脚隐藏 + 黑白适配 + page-break

### 部署
- 部署至 Cloudflare Pages（预览: abcc00be.unfinished-journal.pages.dev）

## [v0.14.0] — 2026-06-10 (Round 11 - 自动持续优化第6轮)

### 新增
- 无障碍：skip-link 跳至内容、focus-visible 焦点样式、表单 label for 属性、main role、sr-only 工具类
- 投稿草稿自动保存：800ms 防抖写入 localStorage，切换回投稿页自动恢复，提交成功后清除

### 部署
- 部署至 Cloudflare Pages（预览: 23df3367.unfinished-journal.pages.dev）
- 全量项目文档更新至 v0.14.0

## [v0.13.0] — 2026-06-10 (Round 10 - 自动持续优化第5轮)

### 新增
- 暗色模式：CSS 变量暗色主题 + 导航栏 ◐ 切换按钮 + localStorage 持久化 + 系统偏好自动检测
- 404 页面搜索引导：搜索框 + 宣言/档案/投稿指南/关于未竟 快速链接
- 页面切换过渡动画：opacity 0.25s 淡入淡出

### 部署
- 部署至 Cloudflare Pages（预览: 8f02b5da.unfinished-journal.pages.dev）
- 全量项目文档更新至 v0.13.0

## [v0.12.0] — 2026-06-10 (Round 9 - 自动持续优化第4轮)

### 新增
- 投稿防重复提交：提交按钮点击后禁用 3 秒 + 文字变更为"提交中..."
- 档案页搜索/筛选：搜索框（标题/作者/摘要）+ 类型下拉筛选（7 种投稿类型）

### 优化
- 档案页筛选栏移动端垂直堆叠布局

### 部署
- 部署至 Cloudflare Pages（预览: 9109d61a.unfinished-journal.pages.dev）
- 全量项目文档更新至 v0.12.0

## [v0.11.0] — 2026-06-10 (Round 8 - 自动持续优化第3轮)

### 修复
- 首页 Hero 锚点跨页面不可用：hashchange 中 navigateTo('home') 覆盖锚点，修复后恢复原 hash 并延时滚动

### 优化
- logo2.png 压缩：798KB → 53KB（1916×821 → 400×171），加载速度提升 14 倍
- 移动端表单触控优化：输入框/按钮 min-height 48px / font-size 16px（防 iOS 缩放），my-submissions 搜索表单手机端堆叠

### 新增
- sitemap.xml：覆盖 10 个页面，含优先级
- robots.txt：Allow / + Sitemap 指向
- _headers 安全头配置恢复

### 部署
- 部署至 Cloudflare Pages（预览: bea650cc.unfinished-journal.pages.dev）
- 自定义域名 unfinishedjournal.com 已生效
- 全量项目文档更新至 v0.11.0

## [v0.10.0] — 2026-06-10 (Round 7 - 自动持续优化第2轮)

### 变更
- Token 区精简：「加密经济与激励机制」→「社区激励与贡献记录」，6 卡片 → 3 卡片，移除"智能合约""代币""声誉加权投票"等术语
- 投稿页文件上传措辞：`（模拟上传）` → 明确指引发邮件至 editorial@unfinishedjournal.com

### 新增
- 独立「关于未竟」专题页（`#/about`）：我们是谁 / 为什么存在 / 出版什么 / 运作方式 / 当前状态
- Footer「关于未竟」链接更新为 `#about`

### 部署
- 部署至 Cloudflare Pages（预览: f6afaa84.unfinished-journal.pages.dev）
- 自定义域名 unfinishedjournal.com 已生效（200 OK）
- 全量项目文档更新至 v0.10.0

## [v0.9.0] — 2026-06-10 (Round 6 - 自动持续优化第1轮)

### 修复
- Footer 死链：关于未竟 → `#manifesto`，社区 → `#contact`，常见问题 → `#faq`
- 页面底部 CTA 按钮 `openModal()` 改为 `navigateTo('submit')`，不再打开劣化版投稿弹窗

### 移除
- 冗余投稿 Modal：HTML 模板、CSS、JS（openModal / closeModal / handleSubmit）全部移除，统一使用完整投稿页

### 部署
- 部署至 Cloudflare Pages（预览: 5f5f65ce.unfinishedjournal.pages.dev）
- 自定义域名 unfinishedjournal.com 状态：Initializing（Cloudflare 自动配置中）
- 全量项目文档更新至 v0.9.0

## [v0.8.0] — 2026-06-09 (Round 5 - 静态官网 MVP 重构)

### 新增
- Logo（logo2.png）集成：favicon、导航栏、Footer、og:image 社交分享图
- deploy/ 部署目录：可部署版 index.html + logo2.png + _headers + DEPLOY.md
- Cloudflare Pages 部署指南（Git 集成 / Direct Upload 两种方式）

### 变更
- 登录页 →「管理员原型入口」：密码认证 UNFINISHED-ADMIN-2026，已认证用户直接跳转后台
- 注册页 →「加入未竟计划」：姓名/邮箱/意向表单 + 编辑部联系说明
- 投稿页：新增明确原型声明（数据仅存 localStorage）+ mailto 到 editorial@unfinishedjournal.com
- 投稿成功页：mailto 一键发送投稿邮件
- 全站统一邮箱 editorial@unfinishedjournal.com
- favicon 从 SVG 文字图标替换为 logo2.png 位图

### 技术
- 导航栏和 Footer 新增 `<img>` Logo 元素
- og:image meta 标签指向 logo2.png
- 添加 `_headers` 安全头配置（X-Frame-Options / X-Content-Type-Options / Referrer-Policy）
- 更新 TODO / CHANGELOG / SELF_AUDIT / HANDOFF / README 全部项目文档

## [v0.7.0] — 2026-06-09 (Round 4 - 后台与投稿接收链路自检修复)

### 新增
- 「我的提交记录」页面（/my-submissions）：作者可通过邮箱 + Submission ID 查询本地投稿
- 管理员投稿详情页（/admin-submission/:id）：完整投稿信息 + 状态时间线 + 编辑备注 + 操作面板
- 成功页增强：明确本地存储提示 + 额外操作按钮（查看记录、进入后台、导出JSON）
- OPERATIONS.md 文档：真实部署方案（Supabase/Airtable/自建后端）与迁移路线图
- 原型状态说明：所有关键页面添加原型/本地存储警告

### 修复
- 登录/注册 404 问题：修复路由表，确保登录注册页面可正常访问
- 导航链接 404：修复所有导航链接，确保点击后正确跳转
- 投稿数据存储位置说明：在成功页明确告知用户数据仅存 localStorage
- 管理员后台链接：从公共详情页改为管理员详情页

### 技术
- 新增 `searchMySubmissions()` 函数：邮箱+ID 查询本地投稿
- 新增 `renderAdminSubmission()` 函数：管理员详情页渲染
- 新增 `saveAdminNote()` 函数：编辑备注保存到 localStorage
- 扩展 `standalonePages` 路由表：新增 `my-submissions`, `admin-submission`
- 新增 CSS 样式：`.my-submissions-*`, `.admin-detail-*`, `.timeline-*` 等
- 状态时间线可视化：展示投稿状态流转历史

## [v0.6.0] — 2026-06-09 (Round 3)

### 新增
- Admin 面板「导出 JSON」按钮：一键下载所有投稿数据（含时间戳、总数、导出时间）
- 投稿 ID 生成机制改进：基于现有 ID 最大值递增，避免删除投稿后 ID 碰撞
- `mockSubmissions` 增强：新增 `.get(id)`、`.delete(id)` 方法，`.all()` 每次从 localStorage 重新读取，确保状态变更后数据新鲜

### 修复
- 致命 Bug：`mockSubmissions.all()` 返回闭包捕获的初始数组引用，`changeStatus` 写 localStorage 后该引用仍为旧数据，导致 Admin 表格刷不出最新状态
- 路由表补全：`submit-success` 页面加入独立页面路由表，确保 hashchange 能正确切换

### 技术
- 新增 `exportSubmissionsJSON()` 函数，使用 Blob + URL.createObjectURL + download 属性实现前端 JSON 导出
- 重构 `mockSubmissions` 工厂函数，内部 `load()` 函数确保每次调用都从 localStorage 读取最新
- 新增 `standalonePages` 数组包含 `submit-success`

## [v0.5.0] — 2026-06-09 (Round 2)

### 新增
- Admin 面板搜索框：支持标题/作者/编号/机构实时过滤
- Admin 面板状态筛选：7 种状态下拉筛选
- Admin 面板分页：每页 10 条，页码导航 + 总量提示
- 路由保护：未登录访问 admin 自动跳转登录页，登录后回跳

### 修复
- 状态统计计数 Bug：`received` 字段从错误的全量赋值改为实际计数

### 技术
- 新增 `adminPage` / `ADMIN_PAGE_SIZE` 分页状态
- 新增 `adminGoToPage()` 分页导航函数
- `renderAdmin()` 重构：搜索→筛选→分页→统计分离
- `switchPage()` 新增路由守卫逻辑
- `handleLogin()` 支持登录后回跳原页面（sessionStorage）
- 新增 CSS：`.admin-toolbar` / `.admin-search` / `.admin-filters` / `.admin-pagination`

## [v0.4.0] — 2026-06-09 (Round 1)

### 新增
- 「未竟档案」公开展示页（`#/browse`）：卡片网格展示所有公开/协作可见投稿，点击进入详情
- 稿件详情页（`#/submission/UJ-XXXX-XXXX`）：完整展示投稿信息（标题/作者/机构/摘要/状态/协作/资助），管理员可见操作按钮
- 导航栏新增「档案」入口

### 修复
- Admin 面板四个操作按钮（查看/状态/编辑/通知）从 `alert("待开发")` 替换为真实功能：
  - 「查看」→ 跳转稿件详情页
  - 「状态 ▾」→ 弹出状态流转菜单，支持 received→screening→accepted/revision/rejected→... 状态机
  - 「编辑」→ 跳转稿件详情页（待增加内联编辑）
  - 「通知」→ Toast 模拟邮件通知发送

### 技术
- 新增 `toggleStatusMenu` / `changeStatus` / `simulateNotify` / `renderBrowse` / `renderSubmission` 函数
- 新增 `statusFlow` 状态机配置，定义 7 种状态间的合法流转路径
- 路由系统扩展支持 `submission/` 动态路径前缀
- 新增 browse 和 submission 页面 CSS（~70行）

## [v0.3.0] — 2026-06-08

### 新增
- 编辑部后台管理原型（/admin）
- 404 错误页面
- 隐私政策页面（/privacy）
- 使用条款页面（/terms）
- 联系我们页面（/contact）
- 页面 loading 加载状态
- 表单空状态/错误状态完善
- favicon 占位图标（SVG 内联）
- 简单 analytics 占位说明
- 完整项目文档体系（README / ROADMAP / TODO / CHANGELOG / OPERATIONS / CONTENT_GUIDE / MAINTENANCE_CHECKLIST / SELF_AUDIT）
- 维护检查清单
- SEO 元标签进一步完善

### 变更
- 导航栏新增"管理""隐私""条款""联系"入口
- 页面路由系统兼容新页面
- footer 新增隐私/条款/联系链接

## [v0.2.0] — 2026-06-08

### 新增
- 完整投稿表单页（/submit）：13 个字段 + 3 项声明 + 文件上传区域
- 投稿指南页（/guidelines）：7 大章节
- 提交成功确认页：Submission ID + 时间戳 + 状态 + 法律声明
- 前端表单校验（必填项、邮箱格式、摘要长度、声明确认）
- localStorage 模拟投稿数据库（mockSubmissions）
- 单文件 SPA 路由系统（hash-based）

### 变更
- 导航栏「指南」指向新投稿指南页
- 导航栏新增「提交」快捷入口
- Hero 区域 CTA 按钮指向新投稿页
- 旧弹窗表单保留但不再被触发

## [v0.1.0] — 2026-06-07

### 新增
- 品牌首页（Hero / 宣言 / 期刊栏目 / 投稿流程 / IP 确权 / Token 经济 / 示例项目 / Footer）
- 响应式布局
- 滚动淡入动画（Intersection Observer）
- 汉堡菜单（移动端）
- 投稿弹窗（前端演示）
- FAQ 手风琴
- SEO 基础标签（description, keywords, og:*）
- 投稿指南卡片（4 维度）
- 审稿流程卡片（4 阶段）
- Token 法律声明
*（内容由AI生成，仅供参考）*
