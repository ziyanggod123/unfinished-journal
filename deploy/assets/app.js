const APP_VERSION = "0.16.0-phase0";
const PRODUCT_STAGE = "《未竟 V3.1 MVP - Preview Freeze》";
console.log(`The Unfinished v${APP_VERSION} loaded.`);
console.log(PRODUCT_STAGE);

/* ===== Module Boundaries ===== */
/* Router */
/* SubmissionStore */
/* AdminAuth */
/* PageRenderer */
/* SeedData */

const STATUS_META = {
  "萌芽": { icon: "🌱", className: "status-sprout", color: "#7bcf9a", inheritanceStatus: "待观察" },
  "探索中": { icon: "🟢", className: "status-active", color: "#98d59f", inheritanceStatus: "持续推进" },
  "停滞中": { icon: "🟡", className: "status-paused", color: "#f0c371", inheritanceStatus: "等待整理" },
  "等待传承": { icon: "🔥", className: "status-awaiting", color: "#ff8f61", inheritanceStatus: "等待传承" },
  "已被继承": { icon: "🔵", className: "status-inherited", color: "#82b6ff", inheritanceStatus: "已被继承" },
  "已证道": { icon: "✨", className: "status-proven", color: "#f8df96", inheritanceStatus: "已完成传承" },
  "失联": { icon: "⚫", className: "status-lost", color: "#8d8f9a", inheritanceStatus: "暂时失联" }
};

const STATUS_ORDER = ["萌芽", "探索中", "停滞中", "等待传承", "已被继承", "已证道", "失联"];
const FIELD_OPTIONS = ["基础科学", "生命科学", "工程系统", "人工智能", "创业与商业", "人文思想"];

const SEED_MILESTONES = [
  {
    id: "MS-STAR-0001",
    titleZh: "用于潮间带塑料分解的微生物共生路径",
    titleEn: "Symbiotic Routes for Intertidal Plastic Decomposition",
    field: "生命科学",
    status: "等待传承",
    pioneer: "林知远",
    summary: "尝试构建可在潮间带低温环境中稳定工作的塑料分解菌群。实验在第三轮出现代谢失衡，路线中止，但留下了完整的样本记录和菌群互作图。",
    dataCompleteness: 82,
    logicCredibility: 74,
    inheritanceStatus: "等待传承",
    aiUsageCount: 17,
    cogWeight: 138,
    timeline: [
      { date: "2025-02", label: "提出低温塑料分解假设" },
      { date: "2025-06", label: "完成第一轮菌群筛选" },
      { date: "2025-11", label: "出现代谢失衡，项目停滞" }
    ],
    failureReasons: "关键共生菌在低温和高盐双重应激下出现不可逆退化，导致降解链条无法稳定闭环。",
    inheritableAssets: "样本库编号、菌群互作图、18 个月环境监测数据、失败批次日志。",
    futurePath: "引入更耐盐的替代菌株，并将培养环境拆成两阶段反应室以降低代谢冲突。",
    reviewReport: "审稿认为问题真实、数据连续性强，建议优先补做替代菌株共生实验。",
    dataLicense: "AI 检索授权",
    citation: "The Unfinished Archive. MS-STAR-0001. 2025. 未竟 The Unfinished.",
    coords: { x: 16, y: 24 }
  },
  {
    id: "MS-STAR-0002",
    titleZh: "面向乡镇工厂的低成本视觉质检引擎",
    titleEn: "Low-Cost Vision QA Engine for Township Factories",
    field: "人工智能",
    status: "探索中",
    pioneer: "Sarah Chen",
    summary: "目标是为无法承担工业相机方案的小工厂提供轻量视觉质检系统。原型能跑，但在低光和油污环境中误报过高。",
    dataCompleteness: 68,
    logicCredibility: 79,
    inheritanceStatus: "持续推进",
    aiUsageCount: 29,
    cogWeight: 121,
    timeline: [
      { date: "2025-01", label: "完成需求调研" },
      { date: "2025-04", label: "搭建第一代视觉模型" },
      { date: "2025-10", label: "进入真实工厂测试" }
    ],
    failureReasons: "训练集与真实部署环境差异过大，尤其在油污、反光、灯光闪烁场景下不稳定。",
    inheritableAssets: "17 万张缺陷图像、数据清洗脚本、边缘部署推理脚本。",
    futurePath: "引入主动学习采样机制，并增加环境光校准模块。",
    reviewReport: "方法路径可行，但需正视数据域偏移问题。建议公开失败集供后来者比对。",
    dataLicense: "公开展示授权",
    citation: "The Unfinished Archive. MS-STAR-0002. 2025. 未竟 The Unfinished.",
    coords: { x: 33, y: 61 }
  },
  {
    id: "MS-STAR-0003",
    titleZh: "城市夜航者心理韧性社区实验",
    titleEn: "Urban Night-Shift Resilience Community Experiment",
    field: "创业与商业",
    status: "停滞中",
    pioneer: "王思涵",
    summary: "一个为夜班劳动者设计的线下互助网络项目，前期验证了需求，但商业模式和持续组织成本无法闭合。",
    dataCompleteness: 71,
    logicCredibility: 72,
    inheritanceStatus: "等待整理",
    aiUsageCount: 8,
    cogWeight: 96,
    timeline: [
      { date: "2024-09", label: "启动社区试点" },
      { date: "2025-03", label: "建立三个线下节点" },
      { date: "2025-08", label: "资金链与组织力双重不足" }
    ],
    failureReasons: "需求真实存在，但供给端严重依赖少数发起人持续投入，组织成本无法规模化。",
    inheritableAssets: "用户访谈 126 份、社群运营 SOP、线下活动模板、退出复盘文档。",
    futurePath: "转向与工会、医院、物流园合作的轻平台模式，而不是独立组织。",
    reviewReport: "这是一条重要但昂贵的路。建议后来者优先继承其组织机制而非原商业壳。",
    dataLicense: "学术引用授权",
    citation: "The Unfinished Archive. MS-STAR-0003. 2025. 未竟 The Unfinished.",
    coords: { x: 44, y: 19 }
  },
  {
    id: "MS-STAR-0004",
    titleZh: "沙漠边缘无线供电道路样机",
    titleEn: "Wireless-Powered Desert Edge Road Prototype",
    field: "工程系统",
    status: "已被继承",
    pioneer: "Alex Rivera",
    summary: "一条尝试在沙漠边缘公路段做低维护无线供电的工程路线。原始团队止步于材料耐久性，但第二代团队正在接力验证。",
    dataCompleteness: 89,
    logicCredibility: 84,
    inheritanceStatus: "已被继承",
    aiUsageCount: 34,
    cogWeight: 201,
    timeline: [
      { date: "2023-12", label: "完成理论论证" },
      { date: "2024-08", label: "铺设 120 米实验段" },
      { date: "2025-07", label: "第二代团队介入继承" }
    ],
    failureReasons: "高温与沙尘导致线圈包覆层寿命远低于预期。",
    inheritableAssets: "实验段结构图、材料测试报告、风沙监测数据、二代团队接棒记录。",
    futurePath: "使用陶瓷复合包覆层并将供电节点模块化，以降低维护成本。",
    reviewReport: "这是未竟平台理想的传承样本：第一代止步，第二代接力，失败被转换成路径资产。",
    dataLicense: "企业数据授权",
    citation: "The Unfinished Archive. MS-STAR-0004. 2025. 未竟 The Unfinished.",
    coords: { x: 58, y: 44 }
  },
  {
    id: "MS-STAR-0005",
    titleZh: "未发表的地方志认知地图工程",
    titleEn: "Cognitive Atlas from Unpublished Local Chronicles",
    field: "人文思想",
    status: "萌芽",
    pioneer: "陈嘉禾",
    summary: "试图把散落在地方志、手札和未发表笔记里的判断路径建成认知地图，以供未来 AI 检索与史学研究。",
    dataCompleteness: 43,
    logicCredibility: 66,
    inheritanceStatus: "待观察",
    aiUsageCount: 5,
    cogWeight: 73,
    timeline: [
      { date: "2025-05", label: "提出地图化整理方案" },
      { date: "2025-09", label: "收集第一批地方志样本" }
    ],
    failureReasons: "暂未失败，但样本异质性极高，标注体系尚未稳定。",
    inheritableAssets: "地方志样本索引、标注草案、跨版本术语对齐表。",
    futurePath: "优先缩小到两个地区做标注闭环，再扩展到更大谱系。",
    reviewReport: "这是文明档案方向的重要萌芽项目，价值高于短期完成度。",
    dataLicense: "限制访问授权",
    citation: "The Unfinished Archive. MS-STAR-0005. 2025. 未竟 The Unfinished.",
    coords: { x: 72, y: 18 }
  },
  {
    id: "MS-STAR-0006",
    titleZh: "海上风暴前体异常的廉价观测网络",
    titleEn: "Affordable Observation Network for Pre-Storm Anomalies",
    field: "基础科学",
    status: "失联",
    pioneer: "Mina Solberg",
    summary: "项目想用廉价多点传感器追踪海上风暴前体异常，但团队解散、设备失联，只留下一批珍贵却未充分解释的原始记录。",
    dataCompleteness: 57,
    logicCredibility: 63,
    inheritanceStatus: "暂时失联",
    aiUsageCount: 11,
    cogWeight: 88,
    timeline: [
      { date: "2024-06", label: "部署沿岸观测节点" },
      { date: "2024-12", label: "记录到异常信号" },
      { date: "2025-04", label: "团队失联，资料中断" }
    ],
    failureReasons: "项目资金与团队稳定性同时崩溃，异常信号来不及完成排误与复核。",
    inheritableAssets: "原始传感器数据、设备布设草图、异常信号时间戳序列。",
    futurePath: "后续若有继承者，首先应完成异常信号的对照排误与气象史料互证。",
    reviewReport: "项目已经失联，但数据本身值得保留，它可能是后来者重新出发的起点。",
    dataLicense: "完全私有存档",
    citation: "The Unfinished Archive. MS-STAR-0006. 2025. 未竟 The Unfinished.",
    coords: { x: 81, y: 67 }
  }
];

let adminPage = 1;
const ADMIN_PAGE_SIZE = 8;
let starRoadGraphRuntime = null;
let starRoadResizeBound = false;
let starRoadManualLayout = {};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function statusMeta(status) {
  return STATUS_META[status] || STATUS_META["萌芽"];
}

function toPercentLabel(value) {
  return `${Math.max(0, Math.min(100, Number(value) || 0))}%`;
}

function legacyStatusToMilestone(status) {
  const map = {
    received: "萌芽",
    screening: "探索中",
    revision: "停滞中",
    accepted: "探索中",
    collab: "已被继承",
    protected: "等待传承",
    rejected: "失联"
  };
  return map[status] || "萌芽";
}

function milestoneStatusToLegacy(status) {
  const map = {
    "萌芽": "received",
    "探索中": "screening",
    "停滞中": "revision",
    "等待传承": "protected",
    "已被继承": "collab",
    "已证道": "accepted",
    "失联": "rejected"
  };
  return map[status] || "received";
}

function loadLegacyEntries() {
  return JSON.parse(localStorage.getItem("uj_submissions") || "[]");
}

function saveLegacyEntries(entries) {
  localStorage.setItem("uj_submissions", JSON.stringify(entries));
}

function normalizeLegacyEntry(entry, index) {
  const milestoneStatus = legacyStatusToMilestone(entry.status);
  const meta = statusMeta(milestoneStatus);
  const createdAt = entry.created_at || new Date().toISOString();
  const titleZh = entry.titleZh || entry.title || "未命名路碑";
  const titleEn = entry.titleEn || `Legacy Milestone ${index + 1}`;
  const field = entry.field || entry.type || "未分类";
  const summary = entry.summary || entry.abstract || "暂无摘要。";
  const failureReasons = entry.failureReasons || entry.failure || entry.abstract || "该记录来自 Phase 0 的 legacy submission，尚未补写停滞原因。";
  const inheritableAssets = entry.inheritableAssets || entry.assets || entry.collab || "原表单未填写可继承资产。";
  const futurePath = entry.futurePath || entry.next_step || "建议补充后续路线建议。";
  const dataLicense = entry.dataLicense || entry.visibility || "限制访问授权";
  const pioneer = entry.pioneer || entry.author || entry.name || "匿名开路人";
  const baseId = entry.submission_id || entry.id || `UJ-LEGACY-${String(index + 1).padStart(4, "0")}`;
  return {
    id: baseId,
    titleZh,
    titleEn,
    field,
    status: milestoneStatus,
    pioneer,
    summary,
    dataCompleteness: entry.dataCompleteness || 58,
    logicCredibility: entry.logicCredibility || 61,
    inheritanceStatus: entry.inheritanceStatus || meta.inheritanceStatus,
    aiUsageCount: entry.aiUsageCount || 0,
    cogWeight: entry.cogWeight || 12,
    timeline: [
      { date: createdAt.slice(0, 10), label: "路碑写入 localStorage" },
      { date: entry.status_updated ? entry.status_updated.slice(0, 10) : createdAt.slice(0, 10), label: `当前状态：${milestoneStatus}` }
    ],
    failureReasons,
    inheritableAssets,
    futurePath,
    reviewReport: entry.reviewReport || "这是由旧投稿模型自动映射而来的路碑。建议补充逻辑、数据与失败原因，以便后来者继承。",
    dataLicense,
    citation: entry.citation || `The Unfinished Archive. ${baseId}. ${createdAt.slice(0, 4)}. 未竟 The Unfinished.`,
    sourceType: "legacy",
    sourceIndex: index,
    email: entry.email || "",
    coords: { x: 14 + (index % 5) * 16, y: 18 + ((index * 13) % 54) }
  };
}

const milestoneStore = {
  all() {
    const legacyMapped = loadLegacyEntries().map(normalizeLegacyEntry);
    return [...SEED_MILESTONES, ...legacyMapped];
  },
  get(id) {
    return this.all().find((item) => item.id === id);
  },
  add(payload) {
    const data = loadLegacyEntries();
    const maxId = data.reduce((max, s) => {
      const match = String(s.submission_id || "").match(/UJ-2026-(\d+)/);
      return match ? Math.max(max, parseInt(match[1], 10)) : max;
    }, 0);
    const submissionId = `UJ-2026-${String(maxId + 1).padStart(4, "0")}`;
    const createdAt = new Date().toISOString();
    const entry = {
      submission_id: submissionId,
      created_at: createdAt,
      titleZh: payload.titleZh,
      titleEn: payload.titleEn,
      title: payload.titleZh,
      field: payload.field,
      type: payload.field,
      status: milestoneStatusToLegacy(payload.status),
      pioneer: payload.pioneer,
      author: payload.pioneer,
      email: payload.email,
      summary: payload.summary,
      abstract: payload.summary,
      hypothesis: payload.hypothesis,
      method: payload.method,
      rawData: payload.rawData,
      failureReasons: payload.failureReasons,
      inheritableAssets: payload.inheritableAssets,
      futurePath: payload.futurePath,
      inheritanceNeeds: payload.inheritanceNeeds,
      dataLicense: payload.dataLicense,
      ethics: payload.ethics,
      visibility: payload.dataLicense,
      next_step: payload.futurePath,
      dataCompleteness: payload.dataCompleteness,
      logicCredibility: payload.logicCredibility,
      inheritanceStatus: statusMeta(payload.status).inheritanceStatus,
      aiUsageCount: 0,
      cogWeight: payload.cogWeight,
      reviewReport: "系统已收录该路碑，等待未来的逻辑审稿与传承申请。",
      citation: `The Unfinished Archive. ${submissionId}. ${createdAt.slice(0, 4)}. 未竟 The Unfinished.`
    };
    data.push(entry);
    saveLegacyEntries(data);
    return normalizeLegacyEntry(entry, data.length - 1);
  },
  updateLegacyStatus(id, milestoneStatus) {
    const entries = loadLegacyEntries();
    const index = entries.findIndex((item) => item.submission_id === id || item.id === id);
    if (index === -1) return false;
    entries[index].status = milestoneStatusToLegacy(milestoneStatus);
    entries[index].status_updated = new Date().toISOString();
    entries[index].inheritanceStatus = statusMeta(milestoneStatus).inheritanceStatus;
    saveLegacyEntries(entries);
    return true;
  }
};

const authStore = {
  isLoggedIn() {
    return localStorage.getItem("uj_admin_authenticated") === "true";
  },
  login() {
    localStorage.setItem("uj_admin_authenticated", "true");
  },
  logout() {
    localStorage.removeItem("uj_admin_authenticated");
  }
};

function byRecent(a, b) {
  const aDate = new Date((a.timeline && a.timeline[a.timeline.length - 1]?.date) || a.created_at || "2000-01-01").getTime();
  const bDate = new Date((b.timeline && b.timeline[b.timeline.length - 1]?.date) || b.created_at || "2000-01-01").getTime();
  return bDate - aDate;
}

function closeNav() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.remove("open");
}

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.toggle("open");
}

function openModal(title, html) {
  const shell = document.getElementById("modalShell");
  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");
  if (!shell || !titleEl || !bodyEl) return;
  titleEl.textContent = title;
  bodyEl.innerHTML = html;
  shell.classList.add("active");
  shell.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const shell = document.getElementById("modalShell");
  if (!shell) return;
  shell.classList.remove("active");
  shell.setAttribute("aria-hidden", "true");
}

function milestoneHref(id) {
  return `milestone/${id}`;
}

function navigateTo(page) {
  switchPage(page);
}

function switchPage(page) {
  if (page === "browse") page = "archive";
  if (page === "submission") page = "archive";

  if (page === "admin" && !authStore.isLoggedIn()) {
    sessionStorage.setItem("uj_redirect_after_login", "admin");
    navigateTo("login");
    return;
  }

  document.querySelectorAll(".page").forEach((node) => node.classList.remove("active"));

  let pageId = page;
  let detailId = null;

  if (page.startsWith("milestone/")) {
    pageId = "milestone";
    detailId = page.replace("milestone/", "");
  }

  const target = document.getElementById(`page-${pageId}`);
  if (!target) {
    document.getElementById("page-404")?.classList.add("active");
    history.replaceState(null, "", "#404");
    closeNav();
    document.getElementById("loadingOverlay")?.classList.remove("active");
    window.scrollTo(0, 0);
    return;
  }

  target.classList.add("active");
  window.scrollTo(0, 0);

  if (pageId !== "star-road") stopStarRoadGraph();

  if (pageId === "home") renderHome();
  if (pageId === "star-road") renderStarRoad();
  if (pageId === "archive") renderArchive();
  if (pageId === "inheritance") renderInheritance();
  if (pageId === "admin") renderAdmin();
  if (pageId === "milestone" && detailId) renderMilestone(detailId);

  history.replaceState(null, "", `#${page}`);
  closeNav();
  document.getElementById("loadingOverlay")?.classList.remove("active");
}

function bindArchiveFilters() {
  const statusFilter = document.getElementById("archiveStatusFilter");
  const fieldFilter = document.getElementById("archiveFieldFilter");
  if (statusFilter && statusFilter.options.length === 1) {
    STATUS_ORDER.forEach((status) => {
      statusFilter.insertAdjacentHTML("beforeend", `<option value="${status}">${statusMeta(status).icon} ${status}</option>`);
    });
  }
  if (fieldFilter && fieldFilter.options.length === 1) {
    FIELD_OPTIONS.forEach((field) => {
      fieldFilter.insertAdjacentHTML("beforeend", `<option value="${field}">${field}</option>`);
    });
  }
}

function renderHome() {
  const milestones = milestoneStore.all().slice().sort(byRecent);
  const homePreview = document.getElementById("homeStarPreview");
  const waiting = document.getElementById("awaitingInheritanceList");
  const latest = document.getElementById("latestMilestonesList");
  if (!homePreview || !waiting || !latest) return;

  const previewItems = milestones.slice(0, 4).map((item) => {
    const meta = statusMeta(item.status);
    return `
      <article class="star-preview-card">
        <div class="star-preview-head">
          <div>
            <span class="eyebrow">${escapeHtml(item.field)}</span>
            <h3>${escapeHtml(item.titleZh)}</h3>
          </div>
          <span class="star-dot" style="color:${meta.color}"></span>
        </div>
        <p>${escapeHtml(item.summary)}</p>
        <div class="meta-line">
          <span>${meta.icon} ${item.status}</span>
          <span>思元 ${item.cogWeight}</span>
        </div>
        <div class="archive-card-footer">
          <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑</button>
        </div>
      </article>
    `;
  }).join("");

  const waitingItems = milestones.filter((item) => item.inheritanceStatus.includes("传承") || item.status === "等待传承").slice(0, 4).map((item) => `
    <article class="inheritance-card">
      <span class="eyebrow">${escapeHtml(item.field)}</span>
      <h3>${escapeHtml(item.titleZh)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="inheritance-meta">
        <span>${statusMeta(item.status).icon} ${item.status}</span>
        <span>数据完整度 ${toPercentLabel(item.dataCompleteness)}</span>
      </div>
      <div class="inheritance-card-footer">
        <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑</button>
        <button onclick="openInheritancePrompt('${escapeHtml(item.id)}')">继承此路</button>
      </div>
    </article>
  `).join("");

  const latestItems = milestones.slice(0, 4).map((item) => `
    <article class="latest-card">
      <span class="eyebrow">${escapeHtml(item.pioneer)}</span>
      <h3>${escapeHtml(item.titleZh)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="latest-meta">
        <span>${statusMeta(item.status).icon} ${item.status}</span>
        <span>AI 使用 ${item.aiUsageCount}</span>
      </div>
      <div class="archive-card-footer">
        <button onclick="navigateTo('${milestoneHref(item.id)}')">查看详情</button>
      </div>
    </article>
  `).join("");

  homePreview.innerHTML = previewItems;
  waiting.innerHTML = waitingItems;
  latest.innerHTML = latestItems;
}

function stopStarRoadGraph() {
  if (starRoadGraphRuntime?.rafId) {
    cancelAnimationFrame(starRoadGraphRuntime.rafId);
  }
  starRoadGraphRuntime = null;
}

function ensureStarRoadResizeBinding() {
  if (starRoadResizeBound) return;
  window.addEventListener("resize", () => {
    const page = document.getElementById("page-star-road");
    if (page?.classList.contains("active")) {
      renderStarRoad();
    }
  });
  starRoadResizeBound = true;
}

function clampGraphValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function graphNodeShortLabel(value) {
  const text = String(value || "").trim();
  if (!text) return "Untitled";
  return text.length > 10 ? `${text.slice(0, 10)}...` : text;
}

function updateStarRoadViewport() {
  const starViewport = document.getElementById("starViewport");
  const viewState = starRoadGraphRuntime?.viewState;
  if (!starViewport || !viewState) return;
  starViewport.style.transform = `translate(${viewState.offsetX}px, ${viewState.offsetY}px) scale(${viewState.scale})`;
}

function resetStarRoadView() {
  if (!starRoadGraphRuntime) return;
  starRoadGraphRuntime.viewState = { scale: 1, offsetX: 0, offsetY: 0 };
  updateStarRoadViewport();
}

function ensureStarRoadInteraction(starMap) {
  if (!starMap || starMap.dataset.graphBound === "true") return;

  const endDrag = (event) => {
    const runtime = starRoadGraphRuntime;
    if (!runtime?.dragState) return;
    if (!event || runtime.dragState.pointerId === event.pointerId) {
      if (runtime.dragState.type === "node") {
        const draggedNode = runtime.graph?.nodeById.get(runtime.dragState.nodeId);
        const draggedElement = runtime.nodeElements?.get(runtime.dragState.nodeId);
        if (draggedElement) {
          draggedElement.classList.remove("is-dragging");
        }
        if (draggedNode && runtime.dragState.moved) {
          starRoadManualLayout[runtime.dragState.nodeId] = {
            baseX: draggedNode.baseX,
            baseY: draggedNode.baseY
          };
        }
        if (draggedNode?.href && !runtime.dragState.moved) {
          navigateTo(draggedNode.href);
        }
      }
      runtime.dragState = null;
      starMap.classList.remove("is-dragging");
    }
  };

  starMap.addEventListener("wheel", (event) => {
    const runtime = starRoadGraphRuntime;
    if (!runtime?.viewState) return;
    event.preventDefault();
    const rect = starMap.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const previousScale = runtime.viewState.scale;
    const nextScale = clampGraphValue(
      previousScale * (event.deltaY < 0 ? 1.08 : 0.92),
      0.82,
      1.7
    );
    const graphX = (pointerX - runtime.viewState.offsetX) / previousScale;
    const graphY = (pointerY - runtime.viewState.offsetY) / previousScale;

    runtime.viewState.scale = nextScale;
    runtime.viewState.offsetX = pointerX - graphX * nextScale;
    runtime.viewState.offsetY = pointerY - graphY * nextScale;
    updateStarRoadViewport();
  }, { passive: false });

  starMap.addEventListener("pointerdown", (event) => {
    const runtime = starRoadGraphRuntime;
    if (!runtime?.viewState) return;
    if (event.target.closest(".star-node--milestone")) return;

    runtime.dragState = {
      type: "pan",
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: runtime.viewState.offsetX,
      originY: runtime.viewState.offsetY,
      moved: false
    };
    starMap.classList.add("is-dragging");
    if (starMap.setPointerCapture) {
      starMap.setPointerCapture(event.pointerId);
    }
  });

  starMap.addEventListener("pointermove", (event) => {
    const runtime = starRoadGraphRuntime;
    if (!runtime?.dragState || runtime.dragState.pointerId !== event.pointerId) return;
    if (runtime.dragState.type === "pan") {
      runtime.viewState.offsetX = runtime.dragState.originX + (event.clientX - runtime.dragState.startX);
      runtime.viewState.offsetY = runtime.dragState.originY + (event.clientY - runtime.dragState.startY);
      runtime.dragState.moved = runtime.dragState.moved
        || Math.abs(event.clientX - runtime.dragState.startX) > 3
        || Math.abs(event.clientY - runtime.dragState.startY) > 3;
      updateStarRoadViewport();
      return;
    }

    if (runtime.dragState.type === "node") {
      const node = runtime.graph?.nodeById.get(runtime.dragState.nodeId);
      if (!node || !runtime.graph) return;
      const scale = runtime.viewState?.scale || 1;
      const deltaX = (event.clientX - runtime.dragState.startX) / scale;
      const deltaY = (event.clientY - runtime.dragState.startY) / scale;
      node.baseX = clampGraphValue(runtime.dragState.originBaseX + deltaX, 48, runtime.graph.width - 48);
      node.baseY = clampGraphValue(runtime.dragState.originBaseY + deltaY, 48, runtime.graph.height - 48);
      runtime.dragState.moved = runtime.dragState.moved
        || Math.abs(deltaX) > 3
        || Math.abs(deltaY) > 3;
    }
  });

  starMap.addEventListener("pointerup", endDrag);
  starMap.addEventListener("pointercancel", endDrag);
  starMap.addEventListener("pointerleave", (event) => {
    const runtime = starRoadGraphRuntime;
    if (!runtime?.dragState || runtime.dragState.pointerId !== event.pointerId) return;
    endDrag(event);
  });

  starMap.dataset.graphBound = "true";
}

function milestoneRelationScore(a, b) {
  let score = 0;
  if (a.field === b.field) score += 3;
  if (a.status === b.status) score += 2;
  if (a.inheritanceStatus === b.inheritanceStatus) score += 1;
  if (Math.abs((a.dataCompleteness || 0) - (b.dataCompleteness || 0)) <= 18) score += 1;
  if (Math.abs((a.logicCredibility || 0) - (b.logicCredibility || 0)) <= 18) score += 1;
  if (Math.abs((a.aiUsageCount || 0) - (b.aiUsageCount || 0)) <= 12) score += 1;
  return score;
}

function buildStarRoadGraph(milestones, width, height) {
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const fieldRadiusX = Math.min(width * 0.24, 220);
  const fieldRadiusY = Math.min(height * 0.19, 170);
  const fieldList = Array.from(new Set(milestones.map((item) => item.field))).sort();

  const hubDefinitions = [
    { id: "hub-archive", label: "ARCHIVE", x: centerX, y: centerY, size: 13, color: "rgba(244, 236, 224, 0.84)", wobbleX: 5, wobbleY: 4, speed: 0.00022, phase: 0.2 },
    { id: "hub-data", label: "DATA", x: centerX - fieldRadiusX - 90, y: centerY - fieldRadiusY - 52, size: 10, color: "rgba(144, 175, 255, 0.76)", wobbleX: 6, wobbleY: 5, speed: 0.00018, phase: 1.2 },
    { id: "hub-failure", label: "FAILURE", x: centerX - fieldRadiusX - 74, y: centerY + fieldRadiusY + 44, size: 10, color: "rgba(255, 158, 121, 0.74)", wobbleX: 7, wobbleY: 5, speed: 0.0002, phase: 2.5 },
    { id: "hub-inherit", label: "INHERIT", x: centerX + fieldRadiusX + 82, y: centerY - fieldRadiusY - 42, size: 10, color: "rgba(152, 230, 190, 0.76)", wobbleX: 6, wobbleY: 5, speed: 0.00019, phase: 3.7 },
    { id: "hub-route", label: "ROUTE", x: centerX + fieldRadiusX + 76, y: centerY + fieldRadiusY + 38, size: 10, color: "rgba(198, 181, 255, 0.72)", wobbleX: 8, wobbleY: 6, speed: 0.00017, phase: 4.8 }
  ];

  const fieldDefinitions = fieldList.map((field, index) => {
    const angle = -Math.PI / 2 + (index / Math.max(fieldList.length, 1)) * Math.PI * 1.72 - 0.38;
    return {
      id: `field-${index}`,
      kind: "field",
      label: field,
      x: centerX + Math.cos(angle) * fieldRadiusX,
      y: centerY + Math.sin(angle) * fieldRadiusY,
      size: 7,
      color: "rgba(241, 234, 224, 0.62)",
      wobbleX: 4,
      wobbleY: 4,
      speed: 0.00011 + index * 0.00001,
      phase: index * 0.82 + 0.5,
      field
    };
  });

  const nodes = [...hubDefinitions, ...fieldDefinitions].map((node) => ({
    ...node,
    baseX: node.x,
    baseY: node.y
  }));
  const edges = [];
  const edgeKeys = new Set();
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const fieldNodeByField = new Map(fieldDefinitions.map((node) => [node.field, node]));
  const milestoneGroups = new Map();

  milestones.forEach((item) => {
    const current = milestoneGroups.get(item.field) || [];
    current.push(item);
    milestoneGroups.set(item.field, current);
  });

  fieldDefinitions.forEach((fieldNode) => {
    edges.push({
      from: "hub-archive",
      to: fieldNode.id,
      kind: "field",
      color: "rgba(186, 198, 255, 0.2)",
      opacity: 0.2,
      width: 0.85
    });
  });

  [
    { from: "hub-archive", to: "hub-data" },
    { from: "hub-archive", to: "hub-failure" },
    { from: "hub-archive", to: "hub-inherit" },
    { from: "hub-archive", to: "hub-route" }
  ].forEach((edge) => {
    edges.push({
      ...edge,
      kind: "core",
      color: "rgba(188, 199, 255, 0.18)",
      opacity: 0.18,
      width: 0.9
    });
  });

  milestones.forEach((item, index) => {
    const meta = statusMeta(item.status);
    const siblings = milestoneGroups.get(item.field) || [];
    const fieldNode = fieldNodeByField.get(item.field);
    const siblingIndex = siblings.findIndex((candidate) => candidate.id === item.id);
    const fieldAngle = fieldDefinitions.findIndex((candidate) => candidate.field === item.field);
    const anchorAngle = -Math.PI / 2 + (fieldAngle / Math.max(fieldDefinitions.length, 1)) * Math.PI * 1.72 - 0.38;
    const localAngle = anchorAngle + (siblingIndex - (siblings.length - 1) / 2) * 0.36;
    const localRadius = 38 + siblingIndex * 14;
    const fallbackX = 96 + (width - 192) * ((item.coords?.x ?? (14 + (index % 5) * 16)) / 100);
    const fallbackY = 92 + (height - 184) * ((item.coords?.y ?? (18 + (index % 4) * 18)) / 100);
    const mappedX = fieldNode
      ? fieldNode.x * 0.68 + centerX * 0.32 + Math.cos(localAngle) * localRadius
      : fallbackX;
    const mappedY = fieldNode
      ? fieldNode.y * 0.68 + centerY * 0.32 + Math.sin(localAngle) * localRadius
      : fallbackY;
    const milestoneId = `milestone-${item.id}`;
    const savedLayout = starRoadManualLayout[milestoneId];
    const baseX = savedLayout?.baseX ?? mappedX;
    const baseY = savedLayout?.baseY ?? mappedY;
    const milestoneNode = {
      id: milestoneId,
      kind: "milestone",
      label: item.titleZh,
      summary: item.summary,
      href: milestoneHref(item.id),
      icon: meta.icon,
      color: meta.color,
      size: 16 + Math.min(12, Math.round((item.cogWeight || 80) / 28)),
      baseX,
      baseY,
      wobbleX: 7 + (index % 3) * 2,
      wobbleY: 6 + ((index + 1) % 3) * 2,
      speed: 0.00036 + index * 0.00003,
      phase: 0.8 + index * 0.72,
      statusClass: meta.className
    };
    nodes.push(milestoneNode);
    nodeById.set(milestoneId, milestoneNode);

    edges.push({
      from: "hub-archive",
      to: milestoneId,
      kind: "core",
      color: "rgba(150, 171, 255, 0.18)",
      opacity: 0.18,
      width: 0.9
    });
    if (fieldNode) {
      edges.push({
        from: fieldNode.id,
        to: milestoneId,
        kind: "field",
        color: "rgba(214, 202, 182, 0.22)",
        opacity: 0.22,
        width: 0.85
      });
    }

    [
      { suffix: "data", angle: 0.4, radius: 26, color: "rgba(141, 176, 255, 0.88)" },
      { suffix: "reason", angle: 2.2, radius: 36, color: "rgba(255, 152, 112, 0.88)" },
      { suffix: "asset", angle: 4.45, radius: 46, color: "rgba(152, 230, 191, 0.88)" },
      { suffix: "note", angle: 5.55, radius: 58, color: "rgba(220, 212, 245, 0.74)" }
    ].forEach((fragment, fragmentIndex) => {
      const fragmentId = `${milestoneId}-${fragment.suffix}`;
      const phase = index * 0.9 + fragmentIndex * 1.3;
      const fragmentNode = {
        id: fragmentId,
        kind: "fragment",
        color: fragment.color,
        size: 4 + fragmentIndex,
        baseX: baseX + Math.cos(fragment.angle + index * 0.38) * (fragment.radius + (index % 2) * 8),
        baseY: baseY + Math.sin(fragment.angle + index * 0.38) * (fragment.radius + (index % 2) * 8),
        wobbleX: 5 + fragmentIndex,
        wobbleY: 4 + fragmentIndex,
        speed: 0.00042 + fragmentIndex * 0.00005,
        phase
      };
      nodes.push(fragmentNode);
      nodeById.set(fragmentId, fragmentNode);
      edges.push({ from: milestoneId, to: fragmentId, kind: "fragment", color: fragment.color, opacity: 0.26, width: 0.75 });
      edges.push({
        from: fragmentId,
        to: fragment.suffix === "data"
          ? "hub-data"
          : fragment.suffix === "reason"
            ? "hub-failure"
            : fragment.suffix === "asset"
              ? "hub-inherit"
              : "hub-route",
        kind: fragment.suffix,
        color: fragment.color,
        opacity: 0.22,
        width: 0.72
      });
    });

    edges.push({
      from: milestoneId,
      to: "hub-route",
      kind: "route",
      color: "rgba(198, 181, 255, 0.2)",
      opacity: 0.2,
      width: 0.78
    });
  });

  milestones.forEach((item) => {
    let bestMatch = null;
    let bestScore = 0;
    milestones.forEach((other) => {
      if (other.id === item.id) return;
      const score = milestoneRelationScore(item, other);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = other;
      }
    });
    if (!bestMatch || bestScore <= 0) return;
    const edgeId = [item.id, bestMatch.id].sort().join("::");
    if (edgeKeys.has(edgeId)) return;
    edgeKeys.add(edgeId);
    edges.push({
      from: `milestone-${item.id}`,
      to: `milestone-${bestMatch.id}`,
      kind: "relation",
      color: statusMeta(bestMatch.status).color,
      opacity: 0.32,
      width: 1.05
    });
  });

  return { nodes, edges, nodeById };
}

function renderStarRoad() {
  const starMap = document.getElementById("starMap");
  const starViewport = document.getElementById("starViewport");
  const starLinks = document.getElementById("starLinks");
  const starNodeLayer = document.getElementById("starNodeLayer");
  const legend = document.getElementById("statusLegend");
  if (!starMap || !starViewport || !starLinks || !starNodeLayer || !legend) return;

  const previousViewState = starRoadGraphRuntime?.viewState
    ? { ...starRoadGraphRuntime.viewState }
    : { scale: 1, offsetX: 0, offsetY: 0 };
  stopStarRoadGraph();
  ensureStarRoadResizeBinding();
  ensureStarRoadInteraction(starMap);

  const milestones = milestoneStore.all();
  const width = Math.max(starMap.clientWidth, 880);
  const height = Math.max(starMap.clientHeight, 720);
  const graph = buildStarRoadGraph(milestones, width, height);

  starViewport.style.width = `${width}px`;
  starViewport.style.height = `${height}px`;
  starLinks.setAttribute("viewBox", `0 0 ${width} ${height}`);
  starLinks.innerHTML = graph.edges.map((edge, index) => `
    <line
      class="star-link star-link--${edge.kind}"
      data-edge-id="${index}"
      x1="0"
      y1="0"
      x2="0"
      y2="0"
      stroke="${edge.color}"
      stroke-opacity="${edge.opacity}"
      stroke-width="${edge.width}"
    ></line>
  `).join("");

  starNodeLayer.innerHTML = graph.nodes.map((node) => {
    if (node.kind === "hub") {
      return `
        <div class="star-node star-node--hub" data-node-id="${node.id}" style="--node-color:${node.color}; --node-size:${node.size}px;">
          <span class="star-node-core"></span>
          <span class="star-node-label">${node.label}</span>
        </div>
      `;
    }

    if (node.kind === "field") {
      return `
        <div class="star-node star-node--field" data-node-id="${node.id}" style="--node-color:${node.color}; --node-size:${node.size}px;">
          <span class="star-node-core"></span>
          <span class="star-node-label">${node.label}</span>
        </div>
      `;
    }

    if (node.kind === "fragment") {
      return `
        <span class="star-node star-node--fragment" data-node-id="${node.id}" style="--node-color:${node.color}; --node-size:${node.size}px;">
          <span class="star-node-core"></span>
        </span>
      `;
    }

    return `
      <button
        class="star-node star-node--milestone ${node.statusClass}"
        data-node-id="${node.id}"
        data-href="${node.href}"
        style="--node-color:${node.color}; --node-size:${node.size}px;"
      >
        <span class="star-node-ring"></span>
        <span class="star-node-core"></span>
        <span class="star-node-center"></span>
        <span class="star-node-name">${escapeHtml(graphNodeShortLabel(node.label))}</span>
        <span class="star-tooltip">
          <strong>${escapeHtml(node.label)}</strong>
          <p>${escapeHtml(node.summary)}</p>
        </span>
      </button>
    `;
  }).join("");

  const nodeElements = new Map(
    graph.nodes.map((node) => [node.id, starNodeLayer.querySelector(`[data-node-id="${node.id}"]`)])
  );
  const lineElements = Array.from(starLinks.querySelectorAll("[data-edge-id]"));
  const milestoneNodes = graph.nodes.filter((node) => node.kind === "milestone");

  milestoneNodes.forEach((node) => {
    const element = nodeElements.get(node.id);
    if (!element) return;
    element.addEventListener("pointerdown", (event) => {
      const runtime = starRoadGraphRuntime;
      if (!runtime?.viewState) return;
      event.preventDefault();
      event.stopPropagation();
      runtime.dragState = {
        type: "node",
        pointerId: event.pointerId,
        nodeId: node.id,
        startX: event.clientX,
        startY: event.clientY,
        originBaseX: node.baseX,
        originBaseY: node.baseY,
        moved: false
      };
      element.classList.add("is-dragging");
      if (element.setPointerCapture) {
        element.setPointerCapture(event.pointerId);
      }
    });
  });

  const animate = (time) => {
    const draggingNodeId = starRoadGraphRuntime?.dragState?.type === "node"
      ? starRoadGraphRuntime.dragState.nodeId
      : null;

    graph.nodes.forEach((node) => {
      const currentX = draggingNodeId === node.id
        ? node.baseX
        : node.baseX + Math.sin(time * node.speed + node.phase) * node.wobbleX;
      const currentY = draggingNodeId === node.id
        ? node.baseY
        : node.baseY + Math.cos(time * node.speed * 0.92 + node.phase) * node.wobbleY;
      node.currentX = currentX;
      node.currentY = currentY;
      const element = nodeElements.get(node.id);
      if (element) {
        element.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
    });

    graph.edges.forEach((edge, index) => {
      const from = graph.nodeById.get(edge.from);
      const to = graph.nodeById.get(edge.to);
      const line = lineElements[index];
      if (!from || !to || !line) return;
      line.setAttribute("x1", from.currentX ?? from.baseX);
      line.setAttribute("y1", from.currentY ?? from.baseY);
      line.setAttribute("x2", to.currentX ?? to.baseX);
      line.setAttribute("y2", to.currentY ?? to.baseY);
    });

    if (starRoadGraphRuntime) {
      starRoadGraphRuntime.rafId = requestAnimationFrame(animate);
    }
  };

  starRoadGraphRuntime = {
    rafId: 0,
    viewState: previousViewState,
    dragState: null,
    graph: { ...graph, width, height },
    nodeElements,
    lineElements
  };
  updateStarRoadViewport();
  animate(performance.now());

  legend.innerHTML = STATUS_ORDER.map((status) => {
    const meta = statusMeta(status);
    return `<li><span class="legend-color" style="background:${meta.color}; box-shadow:0 0 12px ${meta.color};"></span><span>${meta.icon} ${status}</span></li>`;
  }).join("");
}

function renderArchive() {
  bindArchiveFilters();
  const searchValue = (document.getElementById("archiveSearch")?.value || "").trim().toLowerCase();
  const statusValue = document.getElementById("archiveStatusFilter")?.value || "";
  const fieldValue = document.getElementById("archiveFieldFilter")?.value || "";
  const grid = document.getElementById("archiveGrid");
  const empty = document.getElementById("archiveEmpty");
  if (!grid || !empty) return;

  let items = milestoneStore.all().slice().sort(byRecent);
  if (searchValue) {
    items = items.filter((item) => {
      return [
        item.id,
        item.titleZh,
        item.titleEn,
        item.pioneer,
        item.field,
        item.status,
        item.summary
      ].join(" ").toLowerCase().includes(searchValue);
    });
  }
  if (statusValue) items = items.filter((item) => item.status === statusValue);
  if (fieldValue) items = items.filter((item) => item.field === fieldValue);

  if (items.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  grid.innerHTML = items.map((item) => {
    const meta = statusMeta(item.status);
    return `
      <article class="archive-card">
        <div class="archive-head">
          <div>
            <span class="eyebrow">${escapeHtml(item.field)}</span>
            <h3>${escapeHtml(item.titleZh)}</h3>
          </div>
          <span class="badge ${meta.className}">${meta.icon} ${item.status}</span>
        </div>
        <p>${escapeHtml(item.summary)}</p>
        <div class="archive-meta">
          <span>开路人 ${escapeHtml(item.pioneer)}</span>
          <span>数据完整度 ${toPercentLabel(item.dataCompleteness)}</span>
          <span>逻辑可信度 ${toPercentLabel(item.logicCredibility)}</span>
          <span>思元 ${item.cogWeight}</span>
        </div>
        <div class="archive-card-footer">
          <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑详情</button>
          <button onclick="openInheritancePrompt('${escapeHtml(item.id)}')">继承此路</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderInheritance() {
  const target = document.getElementById("inheritanceList");
  if (!target) return;
  const items = milestoneStore.all()
    .filter((item) => item.status === "等待传承" || item.inheritanceStatus.includes("传承"))
    .sort(byRecent)
    .slice(0, 6);

  target.innerHTML = items.map((item) => `
    <article class="inheritance-card">
      <span class="eyebrow">${escapeHtml(item.field)}</span>
      <h3>${escapeHtml(item.titleZh)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="inheritance-meta">
        <span>${statusMeta(item.status).icon} ${item.status}</span>
        <span>需要的人才 ${escapeHtml(item.futurePath.slice(0, 24))}${item.futurePath.length > 24 ? "…" : ""}</span>
        <span>数据完整度 ${toPercentLabel(item.dataCompleteness)}</span>
      </div>
      <div class="inheritance-card-footer">
        <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑</button>
        <button onclick="openInheritancePrompt('${escapeHtml(item.id)}')">继承此路</button>
      </div>
    </article>
  `).join("");
}

function renderMilestone(id) {
  const item = milestoneStore.get(id);
  const shell = document.getElementById("milestoneContent");
  if (!shell) return;
  if (!item) {
    shell.innerHTML = `
      <div class="empty-state">
        <h3>未找到这块路碑</h3>
        <p>这条路径暂时没有留下可访问的坐标。</p>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="navigateTo('star-road')">返回星空古路</button>
        </div>
      </div>
    `;
    return;
  }

  const meta = statusMeta(item.status);
  const timelineHtml = item.timeline.map((step) => `
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div>
        <strong>${escapeHtml(step.date)}</strong>
        <p>${escapeHtml(step.label)}</p>
      </div>
    </div>
  `).join("");

  shell.innerHTML = `
    <a href="#" class="milestone-back" onclick="navigateTo('archive'); return false;">← 返回未竟档案馆</a>
    <div class="milestone-hero">
      <div>
        <span class="eyebrow">${escapeHtml(item.field)}</span>
        <h1 class="milestone-title">${escapeHtml(item.titleZh)}</h1>
        <p class="milestone-subtitle">${escapeHtml(item.titleEn)}</p>
      </div>
      <div class="milestone-actions">
        <span class="badge ${meta.className}">${meta.icon} ${item.status}</span>
        <button class="btn btn-primary" onclick="openInheritancePrompt('${escapeHtml(item.id)}')">继承此路</button>
      </div>
    </div>
    <div class="milestone-layout">
      <div class="milestone-main">
        <section class="milestone-block">
          <h3>项目摘要</h3>
          <p>${escapeHtml(item.summary)}</p>
        </section>
        <section class="milestone-block">
          <h3>路碑信息</h3>
          <dl class="detail-grid">
            <div class="detail-row"><dt>项目标题</dt><dd>${escapeHtml(item.titleZh)}</dd></div>
            <div class="detail-row"><dt>开路人</dt><dd>${escapeHtml(item.pioneer)}</dd></div>
            <div class="detail-row"><dt>项目状态</dt><dd>${meta.icon} ${item.status}</dd></div>
            <div class="detail-row"><dt>所属领域</dt><dd>${escapeHtml(item.field)}</dd></div>
            <div class="detail-row"><dt>传承状态</dt><dd>${escapeHtml(item.inheritanceStatus)}</dd></div>
            <div class="detail-row"><dt>数据授权方式</dt><dd>${escapeHtml(item.dataLicense)}</dd></div>
            <div class="detail-row"><dt>引用格式</dt><dd>${escapeHtml(item.citation)}</dd></div>
          </dl>
        </section>
        <section class="milestone-block">
          <h3>失败或停滞原因</h3>
          <p>${escapeHtml(item.failureReasons)}</p>
        </section>
        <section class="milestone-block">
          <h3>可继承资产</h3>
          <p>${escapeHtml(item.inheritableAssets)}</p>
        </section>
        <section class="milestone-block">
          <h3>后续路线建议</h3>
          <p>${escapeHtml(item.futurePath)}</p>
        </section>
        <section class="milestone-block">
          <h3>审稿报告</h3>
          <p>${escapeHtml(item.reviewReport)}</p>
        </section>
        <section class="milestone-block">
          <h3>时间线</h3>
          <div class="timeline-list">${timelineHtml}</div>
        </section>
      </div>
      <aside class="milestone-side">
        <div class="metric-panel">
          <div class="metric-card">
            <h4>数据完整度</h4>
            <p>${toPercentLabel(item.dataCompleteness)}</p>
          </div>
          <div class="metric-card">
            <h4>逻辑可信度</h4>
            <p>${toPercentLabel(item.logicCredibility)}</p>
          </div>
          <div class="metric-card">
            <h4>AI 使用次数</h4>
            <p>${item.aiUsageCount}</p>
          </div>
          <div class="metric-card">
            <h4>思元贡献权重</h4>
            <p>${item.cogWeight}</p>
          </div>
        </div>
        <div class="milestone-note">
          守灯者 AI 与思元 COG 当前仍为占位能力与权重展示。未来会基于更完整的数据资产体系升级。
        </div>
      </aside>
    </div>
  `;
}

function renderAdmin() {
  const statsEl = document.getElementById("adminStats");
  const tableWrap = document.getElementById("adminTableWrap");
  const paginationEl = document.getElementById("adminPagination");
  if (!statsEl || !tableWrap || !paginationEl) return;

  const query = (document.getElementById("adminSearch")?.value || "").trim().toLowerCase();
  let items = milestoneStore.all().slice().sort(byRecent);

  if (query) {
    items = items.filter((item) => {
      return [item.id, item.titleZh, item.pioneer, item.field, item.status].join(" ").toLowerCase().includes(query);
    });
  }

  const counts = STATUS_ORDER.reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
  milestoneStore.all().forEach((item) => { counts[item.status] = (counts[item.status] || 0) + 1; });

  statsEl.innerHTML = `
    <div class="admin-stat"><span class="stat-label">路碑总数</span><span class="stat-num">${milestoneStore.all().length}</span></div>
    <div class="admin-stat"><span class="stat-label">等待传承</span><span class="stat-num">${counts["等待传承"] || 0}</span></div>
    <div class="admin-stat"><span class="stat-label">探索中</span><span class="stat-num">${counts["探索中"] || 0}</span></div>
    <div class="admin-stat"><span class="stat-label">已被继承</span><span class="stat-num">${counts["已被继承"] || 0}</span></div>
  `;

  const totalPages = Math.max(1, Math.ceil(items.length / ADMIN_PAGE_SIZE));
  if (adminPage > totalPages) adminPage = totalPages;
  const start = (adminPage - 1) * ADMIN_PAGE_SIZE;
  const currentItems = items.slice(start, start + ADMIN_PAGE_SIZE);

  if (currentItems.length === 0) {
    tableWrap.innerHTML = `<div class="empty-state"><h3>没有匹配结果</h3><p>请尝试缩短搜索词，或切换到未竟档案馆查看前台展示。</p></div>`;
    paginationEl.innerHTML = "";
    return;
  }

  const rows = currentItems.map((item) => {
    const meta = statusMeta(item.status);
    const statusButtons = item.sourceType === "legacy"
      ? STATUS_ORDER.filter((status) => status !== item.status).slice(0, 3).map((status) => `<button onclick="changeLegacyStatus('${item.id}','${status}')">${statusMeta(status).icon} ${status}</button>`).join("")
      : `<button onclick="openModal('示例路碑说明', '<p>这是一条种子路碑，用于展示 V3.1 的星空古路与档案馆风格，不写回 localStorage。</p>')">示例说明</button>`;
    return `
      <tr>
        <td>${escapeHtml(item.id)}</td>
        <td>
          <h3>${escapeHtml(item.titleZh)}</h3>
          <div class="metric-line"><span>${escapeHtml(item.pioneer)}</span><span>${escapeHtml(item.field)}</span></div>
        </td>
        <td><span class="badge ${meta.className}">${meta.icon} ${item.status}</span></td>
        <td>${toPercentLabel(item.dataCompleteness)}</td>
        <td>${item.cogWeight}</td>
        <td>
          <div class="admin-actions">
            <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑</button>
            ${statusButtons}
          </div>
        </td>
      </tr>
    `;
  }).join("");

  tableWrap.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>编号</th>
          <th>路碑</th>
          <th>状态</th>
          <th>数据完整度</th>
          <th>思元</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  paginationEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
    return `<button class="${pageNum === adminPage ? "active" : ""}" onclick="adminGoToPage(${pageNum})">${pageNum}</button>`;
  }).join("");
}

function adminGoToPage(page) {
  adminPage = page;
  renderAdmin();
}

function changeLegacyStatus(id, status) {
  milestoneStore.updateLegacyStatus(id, status);
  renderAdmin();
}

function exportSubmissionsJSON() {
  const data = {
    exported_at: new Date().toISOString(),
    app_version: APP_VERSION,
    milestones: milestoneStore.all(),
    legacy_entries: loadLegacyEntries()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `unfinished_v31_export_${new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function clearPrototypeData() {
  if (!window.confirm("确定要清空所有 localStorage 路碑测试数据吗？该操作不可恢复。")) return;
  localStorage.removeItem("uj_submissions");
  renderAdmin();
  renderHome();
  renderArchive();
  alert("测试数据已清空。种子路碑仍会保留用于前台展示。");
}

function openInheritancePrompt(id) {
  const item = milestoneStore.get(id);
  if (!item) return;
  openModal(
    "继承此路",
    `
      <p><strong>${escapeHtml(item.titleZh)}</strong></p>
      <p>传承入口当前为占位流程。未来这里会接入传承申请、身份确认、谱系记录与协作配对。</p>
      <p>如果你想在当前原型中继续体验，可以前往“传承者社区”查看等待继承项目，或通过邮箱与未竟团队联系。</p>
      <p>邮箱：<a href="mailto:editorial@unfinishedjournal.com">editorial@unfinishedjournal.com</a></p>
      <div class="hero-actions">
        <button class="btn btn-primary" onclick="closeModal(); navigateTo('inheritance');">前往传承者社区</button>
      </div>
    `
  );
}

function validateField(id, message) {
  const field = document.getElementById(id);
  if (!field || String(field.value).trim()) return true;
  const error = field.parentElement.querySelector(".form-error");
  if (error) error.textContent = message;
  return false;
}

function resetFormErrors() {
  document.querySelectorAll(".form-error").forEach((node) => { node.textContent = ""; });
}

function handleFullSubmit(event) {
  event.preventDefault();
  resetFormErrors();
  let valid = true;
  valid = validateField("sf-title-zh", "请填写中文标题") && valid;
  valid = validateField("sf-title-en", "请填写英文标题") && valid;
  valid = validateField("sf-field", "请选择项目领域") && valid;
  valid = validateField("sf-status", "请选择项目状态") && valid;
  valid = validateField("sf-pioneer", "请填写开路人") && valid;
  valid = validateField("sf-email", "请填写联系邮箱") && valid;
  valid = validateField("sf-summary", "请填写摘要") && valid;
  valid = validateField("sf-hypothesis", "请填写初始假设") && valid;
  valid = validateField("sf-method", "请填写方法与实验设计") && valid;
  valid = validateField("sf-data", "请填写原始数据与结果") && valid;
  valid = validateField("sf-failure", "请填写失败或停滞原因") && valid;
  valid = validateField("sf-assets", "请填写可继承资产") && valid;
  valid = validateField("sf-future", "请填写后续路线建议") && valid;
  valid = validateField("sf-needs", "请填写传承需求") && valid;
  valid = validateField("sf-license", "请选择数据授权方式") && valid;
  valid = validateField("sf-ethics", "请填写伦理安全声明") && valid;

  if (!document.getElementById("sf-check-real").checked || !document.getElementById("sf-check-share").checked || !document.getElementById("sf-check-ai").checked) {
    document.getElementById("check-error").textContent = "请确认三个声明选项。";
    valid = false;
  }
  if (!valid) return;

  const created = milestoneStore.add({
    titleZh: document.getElementById("sf-title-zh").value.trim(),
    titleEn: document.getElementById("sf-title-en").value.trim(),
    field: document.getElementById("sf-field").value,
    status: document.getElementById("sf-status").value,
    pioneer: document.getElementById("sf-pioneer").value.trim(),
    email: document.getElementById("sf-email").value.trim(),
    summary: document.getElementById("sf-summary").value.trim(),
    hypothesis: document.getElementById("sf-hypothesis").value.trim(),
    method: document.getElementById("sf-method").value.trim(),
    rawData: document.getElementById("sf-data").value.trim(),
    failureReasons: document.getElementById("sf-failure").value.trim(),
    inheritableAssets: document.getElementById("sf-assets").value.trim(),
    futurePath: document.getElementById("sf-future").value.trim(),
    inheritanceNeeds: document.getElementById("sf-needs").value.trim(),
    dataLicense: document.getElementById("sf-license").value,
    ethics: document.getElementById("sf-ethics").value.trim(),
    dataCompleteness: 64,
    logicCredibility: 67,
    cogWeight: 24
  });

  document.getElementById("success-submission-id").textContent = created.id;
  document.getElementById("success-time").textContent = `记录时间：${new Date().toLocaleString("zh-CN", { hour12: false })}`;
  document.getElementById("submitForm").reset();
  navigateTo("submit-success");
}

function handleLogin(event) {
  event.preventDefault();
  const password = document.getElementById("login-password");
  const errorEl = document.getElementById("login-password-error");
  if (errorEl) errorEl.textContent = "";
  if (!password || !password.value.trim()) {
    if (errorEl) errorEl.textContent = "请输入原型密码";
    return;
  }
  if (password.value.trim() !== "UNFINISHED-ADMIN-2026") {
    if (errorEl) errorEl.textContent = "密码错误，请重试";
    return;
  }
  authStore.login();
  const redirect = sessionStorage.getItem("uj_redirect_after_login") || "admin";
  sessionStorage.removeItem("uj_redirect_after_login");
  navigateTo(redirect);
}

function handleLogout() {
  authStore.logout();
  navigateTo("home");
}

function searchMySubmissions() {
  const email = (document.getElementById("my-submissions-email")?.value || "").trim().toLowerCase();
  const id = (document.getElementById("my-submissions-id")?.value || "").trim().toUpperCase();
  const target = document.getElementById("mySubmissionsResults");
  if (!target) return;
  if (!email && !id) {
    target.innerHTML = `<div class="empty-state"><h3>请先输入查询条件</h3><p>输入邮箱或路碑编号即可查询你留下的记录。</p></div>`;
    return;
  }
  let items = milestoneStore.all().filter((item) => item.sourceType === "legacy");
  if (email) items = items.filter((item) => (item.email || "").toLowerCase().includes(email));
  if (id) items = items.filter((item) => item.id === id);
  if (items.length === 0) {
    target.innerHTML = `<div class="empty-state"><h3>未找到匹配的路碑</h3><p>请确认邮箱或路碑编号是否正确。</p></div>`;
    return;
  }
  target.innerHTML = items.map((item) => `
    <article class="latest-card">
      <span class="eyebrow">${escapeHtml(item.id)}</span>
      <h3>${escapeHtml(item.titleZh)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="latest-meta">
        <span>${statusMeta(item.status).icon} ${item.status}</span>
        <span>${escapeHtml(item.dataLicense)}</span>
      </div>
      <div class="archive-card-footer">
        <button onclick="navigateTo('${milestoneHref(item.id)}')">查看路碑</button>
      </div>
    </article>
  `).join("");
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace(/^#/, "");
  const standalonePages = ["home", "star-road", "archive", "inheritance", "legacy", "keeper-ai", "cog", "journal", "about", "submit", "submit-success", "my-submissions", "admin", "login", "404"];
  if (standalonePages.includes(hash)) {
    navigateTo(hash);
  } else if (hash.startsWith("milestone/")) {
    navigateTo(hash);
  } else {
    navigateTo("home");
  }
});

(function init() {
  renderHome();
  bindArchiveFilters();
  const hash = window.location.hash.replace(/^#/, "");
  const route = hash || "home";
  if (route.startsWith("milestone/")) {
    switchPage(route);
  } else {
    switchPage(route);
  }
})();
