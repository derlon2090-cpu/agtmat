const A = [
  "أحمد", "سارة", "ليلى", "عمر", "محمد", "نورا", "خالد", "هند"
];

const icons = {
  home: "⌂", video: "▣", calendar: "▦", chat: "☏", teams: "♙", files: "▤",
  settings: "⚙", shield: "◈", spark: "✦", folder: "▰", bot: "●", crown: "♛",
  mail: "✉", phone: "☊", bell: "♢", search: "⌕"
};

const productItems = [
  ["اجتماعات الفيديو", "اجتماعات عالية الجودة مع مشاركة الشاشة وتسجيل ذكي وترجمة فورية.", icons.video],
  ["الرسائل والدردشة", "دردشات مباشرة وقنوات جماعية ومحادثات خاصة بتشفير وأمان.", icons.chat],
  ["التقويم والجدولة", "جدولة الاجتماعات بسهولة وتذكيرات ذكية تبقي الفريق على المسار.", icons.calendar],
  ["إدارة الفرق", "إدارة الأعضاء والصلاحيات والأدوار وتتبع الأداء.", icons.teams],
  ["مشاركة الملفات", "رفع ومشاركة الملفات بأمان مع التحكم في الصلاحيات.", icons.folder],
  ["Vexwyn AI", "مساعد يلخص الاجتماعات ويستخرج المهام والقرارات.", icons.spark],
  ["السبورة الذكية", "تعاون بصري في الوقت الحقيقي مع أدوات تفاعلية.", "✎"],
  ["الندوات والفعاليات", "استضافة ندوات وفعاليات تفاعلية مع التسجيلات والتحليلات.", "◉"]
];

const resourceItems = [
  ["مركز المساعدة", "شروحات ومقالات ودعم ذاتي لحل المشكلات بسرعة.", "?"],
  ["المدونة", "مقالات وأفكار ونصائح لتحسين الاجتماعات والتعاون.", "✎"],
  ["الأدلة والكتب", "أدلة عملية وكتب إلكترونية للفرق والإدارة والإنتاجية.", "▥"],
  ["الدروس التعليمية", "فيديوهات قصيرة وشروحات خطوة بخطوة لاستخدام المنصة.", "▶"],
  ["دراسات الحالة", "قصص نجاح حقيقية لكيفية استخدام الفرق لمنصة Vexwyn.", "▥"],
  ["القوالب", "قوالب جاهزة للاجتماعات والمتابعة ومحاضر الجلسات.", "□"],
  ["الندوات والفعاليات", "ويبينارات وفعاليات مباشرة وتسجيلات تعليمية.", "◉"],
  ["التحديثات والإصدارات", "جديد المنصة والمزايا الحديثة وتحسينات المنتج.", "✚"]
];

const companyItems = [
  ["من نحن", "نظرة عامة على Vexwyn ورسالتنا في تمكين الفرق.", icons.teams],
  ["قصتنا", "رحلتنا ورؤيتنا لبناء مستقبل العمل المتصل والذكي.", "⚑"],
  ["الوظائف", "اكتشف الفرص المتاحة وانضم إلى فريقنا.", "▣"],
  ["الشركاء", "شركاؤنا الاستراتيجيون وبيئة التكامل والابتكار.", "◇"],
  ["الأمان والامتثال", "التزامنا بحماية بياناتك والامتثال لأعلى المعايير.", icons.shield],
  ["الصحافة والإعلام", "أحدث الأخبار والبيانات الصحفية ومواد العلامة التجارية.", "▤"],
  ["تواصل معنا", "تواصل مع فريق المبيعات والدعم للحصول على المساعدة.", "☊"],
  ["قيمنا وثقافتنا", "ثقافة قائمة على التعاون والابتكار والتميّز.", "♡"]
];

const contactItems = [
  ["المبيعات", "تحدث مع فريق المبيعات لمعرفة الخطة الأنسب.", "▥"],
  ["الدعم الفني", "احصل على مساعدة سريعة لحل المشكلات التقنية.", "☊"],
  ["احجز عرضا توضيحيا", "حدد موعدا مع خبرائنا لعرض المنصة.", icons.calendar],
  ["مركز المساعدة", "اطلع على الشروحات والأسئلة الشائعة.", "?"],
  ["راسلنا عبر البريد", "contact@vexwyn.com نرد خلال وقت قصير.", icons.mail],
  ["الدردشة المباشرة", "تواصل مباشرة مع فريقنا لإجابات فورية.", icons.chat],
  ["مكاتبنا", "اكتشف مواقعنا وساعات العمل.", "▥"],
  ["الشراكات والإعلام", "للاستفسارات الإعلامية وفرص التعاون.", "◇"]
];

const plans = [
  ["Starter", 29, "للفرق الصغيرة والبداية السريعة", ["حتى 10 مشاركين لكل اجتماع", "تسجيل سحابي 5 جيجابايت", "ترجمة مباشرة أساسية", "Vexwyn AI أساسي", "دعم عبر البريد الإلكتروني"]],
  ["Pro", 99, "الأفضل لمعظم الفرق الاحترافية", ["حتى 50 مشارك لكل اجتماع", "تسجيل سحابي 20 جيجابايت", "ترجمة مباشرة متقدمة", "Vexwyn AI متقدم", "دعم أولوية عبر الدردشة والبريد"], true],
  ["Business", 199, "للمنظمات والفرق الكبيرة", ["حتى 200 مشارك لكل اجتماع", "تسجيل سحابي غير محدود", "ترجمة مباشرة احترافية", "Vexwyn AI شامل", "تحليلات وتقارير متقدمة"]]
];

function brand() {
  return `<a class="brand" href="#/"><span class="mark"></span><span>Vexwyn</span></a>`;
}

function appNav(active) {
  const nav = [
    ["dashboard", "الرئيسية", icons.home, "#/app"],
    ["meetings", "الاجتماعات", icons.video, "#/app/meetings"],
    ["calendar", "التقويم", icons.calendar, "#/app/calendar"],
    ["messages", "الرسائل", icons.chat, "#/app/messages"],
    ["teams", "الفرق", icons.teams, "#/app/teams"],
    ["files", "الملفات", icons.files, "#/app/files"],
    ["settings", "الإعدادات", icons.settings, "#/app/settings"]
  ];
  return nav.map(([key,label,icon,href]) =>
    `<a class="side-link ${active===key?"active":""}" href="${href}"><span>${label}</span><b>${icon}</b></a>`
  ).join("");
}

function publicHeader(active = "") {
  return `
    <header class="public-header">
      ${brand()}
      <nav class="public-nav">
        <button class="nav-link ${active==="products"?"active":""}" data-mega="products">المنتجات⌄</button>
        <a class="nav-link ${active==="pricing"?"active":""}" href="#/pricing">الأسعار</a>
        <button class="nav-link ${active==="resources"?"active":""}" data-mega="resources">الموارد⌄</button>
        <button class="nav-link ${active==="company"?"active":""}" data-mega="company">الشركة</button>
        <button class="nav-link ${active==="contact"?"active":""}" data-mega="contact">تواصل معنا</button>
      </nav>
      <div class="public-actions">
        <span class="ghost-btn">العربية ◌</span>
        <a class="ghost-btn" href="#/login">تسجيل الدخول</a>
        <a class="primary-btn" href="#/login">ابدأ مجانا</a>
      </div>
    </header>
    <div id="mega-root"></div>
  `;
}

function mega(type) {
  const data = {
    products: ["حلول متكاملة لفريقك", "مجموعة متكاملة من الأدوات الذكية لتواصل أفضل وتنظيم أسهل وإنتاجية أعلى لجميع فرق العمل.", "استكشاف كل المنتجات", "احجز عرضا توضيحيا", productItems],
    resources: ["مركز الموارد لفريقك", "تعلم، استكشف، وطبق أفضل الممارسات لتحسين اجتماعاتك وتعزيز التعاون وبناء ثقافة فريق عالية الأداء.", "استكشف كل الموارد", "احجز عرضا توضيحيا", resourceItems],
    company: ["تعرف على Vexwyn", "اكتشف رؤيتنا، فريقنا، وثقافتنا وكيف نبني منصة اجتماعات وتعاون حديثة تدعم الفرق الطموحة.", "استكشف الشركة", "تواصل معنا", companyItems],
    contact: ["تواصل مع فريق Vexwyn", "نحن هنا للإجابة على أسئلتك، مساعدتك في اختيار الخطة المناسبة، وتقديم الدعم لفريقك بسرعة واحترافية.", "أرسل رسالة", "احجز مكالمة", contactItems]
  }[type];
  return `
    <section class="mega show">
      <aside class="mega-card">
        <div>
          <h2 class="gradient-text">${data[0]} ✦</h2>
          <p>${data[1]}</p>
          <div class="mega-art"></div>
        </div>
        <div class="list">
          <a class="primary-btn">${data[2]}</a>
          <a class="outline-btn">${data[3]}</a>
        </div>
      </aside>
      <div class="mega-list">
        ${data[4].map(([title, desc, icon]) => `
          <article class="mega-item">
            <span class="icon-box">${icon}</span>
            <div><h4>${title}</h4><p>${desc}</p></div>
            <b>‹</b>
          </article>`).join("")}
      </div>
      ${type === "contact" ? `<footer class="mega-footer"><span>${icons.mail} hello@vexwyn.com</span><span>${icons.phone} +966 11 000 0000</span><span>${icons.calendar} الأحد - الخميس، 9 ص إلى 6 م</span></footer>` : ""}
    </section>
  `;
}

function videoMockup(className = "") {
  return `
    <div class="video-window ${className}">
      <div class="video-top"><span>Vexwyn Meeting ●</span><span>00:24:18 ⛶ ⋮</span></div>
      <div class="video-grid">
        <div class="person main"><span class="name">أحمد خالد</span></div>
        <div class="side-tiles">
          <div class="person mini-person"><span class="name">سارة محمد</span></div>
          <div class="person mini-person"><span class="name">عمر خالد</span></div>
          <div class="more-tile">+12<br><small>أعضاء آخرون</small></div>
        </div>
      </div>
      <div class="video-bottom"><span>كتم الصوت</span><span>إيقاف الفيديو</span><span>المشاركون</span><span>الدردشة</span><span>المزيد</span><span class="hang">⌕</span></div>
    </div>
  `;
}

function scheduleCard() {
  const rows = ["مراجعة خطة التسويق", "اجتماع تصميم المنتج", "استعراض المشروع"];
  return `<div class="floating-schedule">
    <div class="float-head"><span>جدول الاجتماعات</span><span>＋ ▦</span></div>
    ${rows.map((r,i)=>`<div class="mini-meeting"><b>${r}</b><p>${i===0?"09:00 - 10:00":"12:30 - 01:30"}</p><div class="row-between">${avatars(4)}<span class="mini-btn">${icons.video}</span></div></div>`).join("")}
  </div>`;
}

function avatars(n=5) {
  return `<span class="avatars">${Array.from({length:n},(_,i)=>`<span class="avatar">${A[i % A.length][0]}</span>`).join("")}</span>`;
}

function landing() {
  return `
    <div class="bg-orbit"></div>
    ${publicHeader()}
    <main class="landing-main">
      <section class="hero">
        <div class="hero-copy">
          <span class="pill">${icons.shield} منصة اجتماعات آمنة وسهلة</span>
          <h1>اجتماعات أفضل.<br><span class="gradient-text">تواصل بلا حدود.</span></h1>
          <p>Vexwyn تجمع فريقك في مساحة واحدة للاجتماعات المرئية، المحادثات الفورية، ومشاركة الملفات بسلاسة وأمان تام.</p>
          <div class="hero-actions"><a class="primary-btn" href="#/login">ابدأ مجانا ←</a><a class="outline-btn" href="#/contact">احجز عرضا توضيحيا ▦</a></div>
          <div class="trust-row"><span class="chip">${icons.shield} أمان على مستوى المؤسسات</span><span class="chip">ϟ يعمل داخل متصفح</span><span class="chip">◎ لا يتطلب تثبيت</span></div>
        </div>
        <div class="meeting-stage">${videoMockup()}${scheduleCard()}</div>
      </section>
      ${landingPreview()}
    </main>
  `;
}

function landingPreview() {
  return `
    <section class="dashboard-preview">
      <aside class="panel"><h3>كل ما تحتاجه في مكان واحد</h3><div class="feature-list">${["جدولة عالية","مشاركة الملفات","دردشة تفاعلية","اجتماعات مسجلة"].map(x=>`<div><span>${x}</span><b>✎</b></div>`).join("")}</div></aside>
      <section class="panel"><h3>لوحة التحكم ▦</h3><div class="stats-grid">${["الاجتماعات اليوم|0","إجمالي المشاركين|0","ساعات الاجتماعات|0","مستوى المشاركة|0%"].map((s,i)=>{const [a,b]=s.split("|");return `<div class="stat-box"><span>${a}</span><b>${b}</b>${i<3?`<div class="spark"></div>`:`<div class="ring"></div>`}</div>`}).join("")}</div></section>
      <aside class="panel"><h3>تكاملات ذكية ⚙</h3><div class="integrations">${["Google Calendar","Microsoft 365","Slack","Zoom","Drive","المزيد"].map(x=>`<div class="integration"><span class="logo-dot"></span><b>${x}</b></div>`).join("")}</div></aside>
    </section>
    <section class="benefit-strip">
      ${["اجتماعات آمنة|حماية متقدمة لبياناتك وخصوصيتك|◈","مشاركة سهلة|شارك روابط الاجتماعات والملفات بكل سهولة|♙","جدولة سريعة|أنشئ اجتماعاتك بنقرة واحدة|▦","دعم متواصل|فريق دعم جاهز لمساعدتك في أي وقت|☊"].map(x=>{const [h,p,i]=x.split("|");return `<div class="benefit"><span class="icon-box">${i}</span><div><b>${h}</b><p>${p}</p></div></div>`}).join("")}
    </section>
  `;
}

function login() {
  return `<div class="bg-orbit"></div><main class="login-page">
    <section class="login-card">
      ${brand()}<h1>تسجيل الدخول</h1><p>سجل دخولك للوصول إلى اجتماعاتك وإدارة فريقك بسهولة</p>
      <div class="field"><label>البريد الإلكتروني</label><input placeholder="name@company.com"></div>
      <div class="field"><label>كلمة المرور</label><input placeholder="••••••••••••" type="password"></div>
      <div class="row-between"><a class="gradient-text">نسيت كلمة المرور؟</a><label><input type="checkbox" checked> تذكرني</label></div>
      <a class="primary-btn" style="width:100%;margin:22px 0" href="#/app">تسجيل الدخول</a>
      <a class="outline-btn" style="width:100%">إنشاء حساب جديد</a>
      <div class="row-between" style="margin:28px 0;color:var(--muted)"><span style="height:1px;background:var(--line);flex:1"></span>أو<span style="height:1px;background:var(--line);flex:1"></span></div>
      <a class="outline-btn" style="width:100%">G المتابعة بحساب العمل</a>
      <p>${icons.shield} دخول آمن ومشفر</p>
    </section>
    <section class="login-left"><h2><span class="gradient-text">اجتماعات أكثر إنتاجية.</span><br>تواصل أوضح. فرق أقوى.</h2><p>من مكالمات الفيديو إلى إدارة المهام والتقويم، كل ما تحتاجه في منصة واحدة متكاملة.</p><div class="meeting-stage">${videoMockup()}${scheduleCard()}</div></section>
  </main>`;
}

function shell(active, content) {
  return `<div class="app-shell">
    <aside class="sidebar">${brand()}<div class="user-card"><span>⌄</span><div><b>أحمد خالد</b><p>مدير المشروع</p></div><span class="avatar">أ</span></div><nav class="nav-stack">${appNav(active)}</nav><div class="upgrade-card"><h3>ترقية الخطة</h3><p>احصل على مزايا متقدمة وتجربة أكثر احترافية.</p><a class="primary-btn" href="#/app/billing">ترقية الآن ✦</a></div></aside>
    <main><div class="topbar"><span>${icons.bell}<sup>3</sup></span><span>${icons.settings}</span><input class="search" placeholder="ابحث في الاجتماعات، الرسائل، الفرق..."></div><div class="app-content">${content}</div></main>
  </div>`;
}

function dashboard() {
  return shell("dashboard", `
    <div class="page-title"><div><h1>مرحبا بعودتك، أحمد 👋</h1><p>إدارة اجتماعاتك وفرقك بسهولة وكفاءة.</p></div></div>
    <section class="grid-dashboard">
      <aside class="panel"><h3>إجراءات سريعة</h3><div class="quick-grid">${["اجتماع جديد","انضم لاجتماع","جدولة اجتماع","مشاركة الشاشة"].map(x=>`<button class="quick-action">${x}<span class="icon-box">${icons.video}</span></button>`).join("")}</div></aside>
      <div>
        <article class="panel next-meeting"><div class="calendar-art">▦</div><div><span class="pill">الاجتماع القادم</span><h2>مراجعة خطة المشروع</h2><p>اليوم، 28 مايو 2024 · 10:00 - 11:00 ص · 9 مشاركين</p><a class="primary-btn" href="#/app/meetings/room">انضم الآن ${icons.video}</a></div></article>
        <div class="cards-4">${["اجتماعات اليوم|0","إجمالي الساعات|0","المشاركون النشطون|0","معدل الحضور|0%"].map(card).join("")}</div>
      </div>
    </section>
    <section class="content-grid">
      ${miniPanel("آخر التحديثات", ["تمت مشاركة ملف جديد","تم إنشاء اجتماع جديد","أحمد خالد علق على مهمة","تم تحديث جدول الاجتماع"])}
      ${miniPanel("المهام", ["إعداد تقرير الأداء الشهري","مراجعة خطة المشروع","تصميم العرض التقديمي","إعداد قائمة المشاركين"], true)}
      ${miniPanel("جدول اليوم", ["10:00 مراجعة خطة المشروع","12:00 جلسة تخطيط الربع القادم","3:00 مراجعة التصميم النهائي","5:00 اجتماع متابعة المهام"])}
    </section>
  `);
}

function card(s) {
  const [title,num] = s.split("|");
  return `<article class="panel"><div class="row-between"><span>${title}</span><span class="icon-box">${icons.calendar}</span></div><h2>${num}</h2><span style="color:var(--success)">↑ 12%</span><div class="spark"></div></article>`;
}

function miniPanel(title, rows, checks=false) {
  return `<article class="panel"><div class="row-between"><h3>${title}</h3><a class="gradient-text">عرض الكل</a></div><div class="list">${rows.map((r,i)=>`<div class="list-item"><span>${r}</span><span>${checks?`<input type="checkbox" ${i<2?"checked":""}>`:"منذ "+(i+1)*10+" دقائق"}</span></div>`).join("")}</div></article>`;
}

function meetingRoom() {
  return `<main class="meeting-room">
    <header class="meeting-header">${brand()}<div class="row-between"><b>${icons.shield} مراجعة خطة المشروع</b><span class="status live">● مباشر الآن</span><span class="status ended">● تسجيل جار</span><b>00:24:18</b></div><div class="row-between"><button class="outline-btn">دعوة ♙</button><button class="outline-btn">مشاركة الشاشة</button><button class="outline-btn">السبورة الذكية</button><button class="outline-btn">⋮</button></div></header>
    <section class="meeting-layout">
      <div>
        <div class="room-videos"><div class="person main"><span class="pill" style="margin:18px">المتحدث الرئيسي</span><span class="name">أحمد خالد</span></div><div class="participant-grid">${["سارة محمد","ليلى منصور","عمر خالد","نورا علي","محمد سعيد","+4 أعضاء آخرون"].map((n,i)=>`<div class="${i===5?"more-tile":"person"}"><span class="name">${n}</span></div>`).join("")}</div></div>
        <div class="room-below"><article class="panel"><h3>مساعدة Vexwyn AI ✦</h3><p>تمت مناقشة الميزانية والموارد المطلوبة. اتفق الفريق على الجدول الزمني للمراحل.</p><button class="outline-btn">عرض ملخص الاجتماع الكامل</button></article><article class="panel"><h3>الترجمة المباشرة CC</h3><p><b>أحمد خالد:</b> كما ترون في الشريحة، نحن على المسار الصحيح لتحقيق أهدافنا.</p><hr><h3>الموجودون الآن (9)</h3>${avatars(9)}</article></div>
      </div>
      <aside class="panel chat-panel"><div class="chat-tabs"><span>الشات</span><span>المشاركون 9</span></div><div class="messages">${["أرسلت لكم النسخة الأخيرة من العرض","ممتاز، سأراجعها الآن","هل ثبت موعد التسليم؟","نعم، مناسب"].map((m,i)=>`<div class="message"><span class="avatar">${A[i][0]}</span><div><b>${A[i]}</b><div class="bubble">${m}</div></div></div>`).join("")}</div><div class="chat-input"><input placeholder="اكتب رسالة..."><button class="primary-btn">➤</button></div></aside>
    </section>
    <footer class="control-bar">${["الميكروفون","الكاميرا","مشاركة الشاشة","الدردشة","رفع اليد","التفاعلات","التسجيل","المزيد"].map(x=>`<button class="control"><span class="circle">${icons.video}</span><span>${x}</span></button>`).join("")}<button class="primary-btn" style="background:var(--danger)">مغادرة الاجتماع</button></footer>
  </main>`;
}

function meetings() {
  return shell("meetings", listPage("الاجتماعات", "إدارة جميع اجتماعاتك المباشرة والقادمة والمنتهية بسهولة", ["اجتماع جديد", "جدولة اجتماع"], meetingRows()));
}

function meetingRows() {
  return `<div class="data-list">${[
    ["مراجعة خطة المشروع","مباشر الآن","8 مشاركين","10:00 - 11:00 ص", "انضم الآن"],
    ["جلسة تخطيط الربع القادم","قادم","6 مشاركين","13:00 - 14:00 م", "فتح"],
    ["مناقشة التصميم النهائي","قادم","4 مشاركين","15:00 - 16:00 م", "فتح"],
    ["اجتماع متابعة الأداء","منتهي","10 مشاركين","أمس 45:21", "عرض التسجيل"]
  ].map(([t,s,p,time,btn])=>`<article class="meeting-row"><div><a class="primary-btn" href="${btn==="انضم الآن"?"#/app/meetings/room":"#"}">${btn}</a><button class="mini-btn">التفاصيل</button></div><div><h2>${t}</h2><p>مراجعة التقدم الحالي وتحديد الخطوات القادمة للمشروع.</p>${avatars(5)}</div><div><span class="status ${s==="مباشر الآن"?"live":s==="قادم"?"upcoming":"ended"}">${s}</span><p>${time}</p><p>${p}</p></div></article>`).join("")}</div>`;
}

function listPage(title, subtitle, actions, body) {
  return `<div class="page-title"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="row-between">${actions.map(a=>`<button class="${a.includes("جديد")||a.includes("رفع")?"primary-btn":"outline-btn"}">${a}</button>`).join("")}</div></div><div class="two-aside"><aside>${leftAside()}</aside><section class="panel">${filters()}${body}</section><aside>${upgradePanel()}</aside></div>`;
}

function filters() {
  return `<div class="row-between" style="margin-bottom:18px"><input class="search" placeholder="ابحث هنا..."><button class="outline-btn">الكل</button><button class="outline-btn">القادمة</button><button class="outline-btn">المنتهية</button></div>`;
}

function leftAside() {
  return `${miniPanel("جدول اليوم", ["لا توجد اجتماعات اليوم","اربط التقويم لعرض المواعيد","ابدأ بجدولة اجتماع جديد"])}<br>${miniPanel("إحصائيات", ["0 اجتماعات هذا الأسبوع","0 إجمالي ساعات الاجتماعات","0% متوسط الحضور"])}`;
}

function upgradePanel() {
  return `<article class="panel" style="text-align:center"><h3>ترقية الخطة</h3><p>احصل على جلسات غير محدودة وتحليلات أكثر احترافية.</p><div class="mega-art"></div><a class="primary-btn" href="#/app/billing">ترقية الآن ✦</a></article>`;
}

function calendar() {
  const days = Array.from({length:35},(_,i)=>i+1);
  return shell("calendar", `<div class="page-title"><div><h1>التقويم</h1><p>إدارة الاجتماعات والمواعيد وتوفر الفريق في مكان واحد</p></div><button class="primary-btn">جدولة اجتماع</button></div><div class="two-aside"><aside>${leftAside()}</aside><section class="panel"><div class="row-between"><button class="outline-btn">اليوم</button><h2>مايو 2024</h2><button class="outline-btn">‹ ›</button></div><div class="calendar-view">${days.map(d=>`<div class="day"><b>${d}</b>${[4,10,15,22,28,29,30].includes(d)?`<div class="event">${d===28?"مراجعة خطة المشروع":"اجتماع الفريق"}<br>10:00 ص</div>`:""}</div>`).join("")}</div></section><aside>${upgradePanel()}</aside></div>`);
}

function messages() {
  return shell("messages", `<div class="page-title"><div><h1>الرسائل</h1><p>تواصل مع فريقك وناقش الملفات والاجتماعات في مكان واحد</p></div><button class="primary-btn">رسالة جديدة</button></div><div class="channels"><aside class="panel">${["فريق المشروع","سارة محمد","التصميم","الدعم الداخلي","الاجتماع الأسبوعي"].map((x,i)=>`<div class="channel"><span class="icon-box">${i?"☊":icons.teams}</span><div><h3>${x}</h3><p>آخر رسالة منذ ${i+1} دقائق</p></div><b>${i<3?i+1:""}</b></div>`).join("")}</aside><section class="panel chat-large"><div class="row-between"><h2>فريق المشروع</h2><div><button class="outline-btn">بدء اجتماع</button><button class="outline-btn">مكالمة صوتية</button></div></div><div class="messages">${["تم رفع عرض المشروع الإصدار الثالث.","شكرا، سأراجع العرض وأشارك ملاحظاتي اليوم.","أضفت بعض التعديلات على الشرائح 9 و12.","تذكير اجتماع مراجعة خطة المشروع غدا 11:00 ص"].map((m,i)=>`<div class="message"><span class="avatar">${A[i][0]}</span><div><b>${A[i]}</b><div class="bubble">${m}</div></div></div>`).join("")}</div><div class="chat-input"><input placeholder="اكتب رسالة..."><button class="primary-btn">➤</button></div></section></div>`);
}

function teams() {
  return shell("teams", `<div class="page-title"><div><h1>الفرق</h1><p>أنشئ فرقك، نظم الأعضاء، وتابع التعاون في مكان واحد</p></div><div><button class="primary-btn">إنشاء فريق جديد</button><button class="outline-btn">دعوة عضو</button></div></div><div class="two-aside"><aside>${miniPanel("الفرق النشطة", ["6 فرق نشطة","21 عضو متصل الآن","آخر النشاطات"])}</aside><section><div class="teams-grid">${["فريق المشروع","التصميم","التسويق","الدعم الداخلي","المنتج","الإدارة"].map((t,i)=>`<article class="team-card"><div class="row-between"><h2>${t}</h2><span class="icon-box">${icons.teams}</span></div><p>فريق العمل الرئيسي لتخطيط وتنفيذ ومتابعة مشروع منصة Vexwyn.</p>${avatars(5)}<div class="row-between" style="margin-top:18px"><button class="outline-btn">إدارة</button><button class="primary-btn">فتح</button></div></article>`).join("")}</div></section><aside>${upgradePanel()}</aside></div>`);
}

function files() {
  const rows = [["عرض_المشروع_v3.pptx","عرض تقديمي","2.4 MB","مشترك"],["خطة_الربع_القادم.xlsx","جدول بيانات","1.8 MB","خاص"],["ملخص_الاجتماع_الأخير.docx","مستند","856 KB","مشترك"],["تصميم_الواجهة_النهائية.fig","تصميم","8.1 MB","مفتوح"],["تسجيل_مراجعة_الخطة.mp4","فيديو","245 MB","تسجيل"]];
  return shell("files", listPage("الملفات", "إدارة ملفات فريقك وتنظيم المجلدات والوصول السريع إلى المستندات", ["رفع ملف", "مجلد جديد"], `<div class="folders-grid">${["فريق المشروع","التصميم","التسويق","العقود","العروض","التسجيلات"].map(f=>`<article class="folder-card"><span class="icon-box">${icons.folder}</span><h3>${f}</h3><p>0 ملف</p>${avatars(0)}</article>`).join("")}</div><div class="file-table">${rows.map(r=>`<div class="file-row"><b>${r[0]}</b><span>${r[1]}</span><span>${r[2]}</span><span>منذ 15 دقيقة</span><span class="status ${r[3]==="خاص"?"upcoming":"live"}">${r[3]}</span></div>`).join("")}</div>`));
}

function settings() {
  const toggles = ["الوضع الليلي","إظهار المعاينات المباشرة","تثبيت الشريط الجانبي","الاختصارات الذكية"];
  return shell("settings", `<div class="page-title"><div><h1>الإعدادات</h1><p>خصص حسابك، إعدادات الاجتماعات، الأمان، والتنبيهات من مكان واحد</p></div></div><section class="settings-grid"><article class="panel"><h3>إعدادات الحساب</h3>${["الاسم الكامل","البريد الإلكتروني","المنصب","اللغة","المنطقة الزمنية"].map(x=>`<div class="field"><label>${x}</label><input value="${x==="الاسم الكامل"?"أحمد خالد":x==="البريد الإلكتروني"?"ahmad@vexwyn.com":""}"></div>`).join("")}</article><article class="panel"><h3>تفضيلات الواجهة</h3>${toggles.map((t,i)=>`<div class="toggle-row"><span>${t}</span><span class="toggle ${i===1||i===2?"on":""}"></span></div>`).join("")}</article><article class="panel"><h3>الملف الشخصي</h3><div style="text-align:center"><span class="avatar" style="width:90px;height:90px;font-size:34px">أ</span><h2>أحمد خالد</h2><p>مدير المشروع</p><button class="outline-btn">تعديل الملف</button></div></article><article class="panel"><h3>إعدادات الاجتماعات الافتراضية</h3>${["كتم الميكروفون عند الانضمام","فتح الكاميرا تلقائيا","تفعيل تسجيل الاجتماع تلقائيا","إظهار الترجمة المباشرة","السماح بالانضمام قبل المضيف"].map((t,i)=>`<div class="toggle-row"><span>${t}</span><span class="toggle ${i!==1?"on":""}"></span></div>`).join("")}</article><article class="panel"><h3>الإشعارات</h3>${["رسائل جديدة","تذكيرات الاجتماعات","دعوات الفريق","تعليقات على الملفات","ملخصات الذكاء الاصطناعي"].map((t,i)=>`<div class="toggle-row"><span>${t}</span><span class="toggle ${i!==3?"on":""}"></span></div>`).join("")}</article><article class="panel"><h3>حفظ التغييرات</h3><p>لديك 3 تغييرات غير محفوظة</p><button class="primary-btn" style="width:100%">حفظ التغييرات</button><br><br><button class="outline-btn" style="width:100%">إعادة تعيين</button></article></section>`);
}

function pricing(publicMode = true) {
  const content = `<div class="pricing-page"><section class="pricing-hero"><h1>خطط وأسعار تناسب كل فريق</h1><p>ابدأ مجانا، ثم اختر الخطة التي تنمو مع احتياجات فريقك.</p><div class="billing-toggle"><span>شهري</span><span class="on">سنوي <small>وفر 20%</small></span></div></section><section class="pricing-grid">${plans.map(([name,price,desc,features,pop])=>`<article class="plan-card ${pop?"featured":""}"><div class="row-between"><h2>${name}</h2><span class="icon-box">${pop?icons.crown:"ϟ"}</span></div><p>${desc}</p><div><span class="price">${price}</span> ريال / شهريا</div><div class="check-list">${features.map(f=>`<span>✓ ${f}</span>`).join("")}</div><button class="${pop?"primary-btn":"outline-btn"}" style="width:100%">${pop?"الخطة الحالية":"اختر "+name}</button></article>`).join("")}</section><section class="comparison">${["الميزة|Starter|Pro|Business","المشاركون لكل اجتماع|10|50|200","التسجيل السحابي|5 جيجابايت|20 جيجابايت|غير محدود","الترجمة المباشرة|أساسية|متقدمة|احترافية","Vexwyn AI|أساسي|متقدم|شامل","الدعم|بريد إلكتروني|دردشة + بريد أولوية|24/7 أولوية"].map(r=>`<div class="comparison-row">${r.split("|").map(c=>`<div>${c}</div>`).join("")}</div>`).join("")}</section></div>`;
  return publicMode ? `<div class="bg-orbit"></div>${publicHeader("pricing")}${content}` : shell("settings", content);
}

const ADMIN_DEMO_ENABLED = false;
const ADMIN_SESSION_KEY = "vexwyn_admin_session";
const adminLabels = {
  overview: "نظرة عامة",
  users: "المستخدمون",
  meetings: "الاجتماعات",
  teams: "الفرق",
  subscriptions: "الاشتراكات",
  invoices: "الفواتير",
  support: "الدعم",
  security: "الأمان",
  analytics: "التحليلات",
  settings: "الإعدادات",
  "help-center": "مركز المساعدة"
};

const adminNav = [
  ["overview", "/admin", "⌂"],
  ["users", "/admin/users", "👥"],
  ["meetings", "/admin/meetings", "▣"],
  ["teams", "/admin/teams", "♙"],
  ["subscriptions", "/admin/subscriptions", "▤"],
  ["invoices", "/admin/invoices", "▧"],
  ["support", "/admin/support", "☏"],
  ["security", "/admin/security", "◈"],
  ["analytics", "/admin/analytics", "▥"],
  ["settings", "/admin/settings", "⚙"]
];

const adminStats = {
  users: { total: 0, active: 0, newThisMonth: 0, pendingInvites: 0 },
  meetings: { total: 0, liveNow: 0, scheduledToday: 0, averageMinutes: 0 },
  teams: { total: 0, active: 0, projects: 0 },
  billing: { revenueThisMonth: 0, activeSubscriptions: 0, pendingInvoices: 0, totalInvoices: 0 },
  support: { openTickets: 0, overdueTickets: 0, satisfaction: 0 },
  security: { alerts: 0, activeSessions: 0, mfaAccounts: 0, compliance: 0 },
  analytics: { visits: 0, conversionRate: 0, reports: 0 },
  system: { uptime: null, status: "healthy" },
  settings: { active: 0, integrations: 0, policies: 0 }
};

const adminPageConfig = {
  users: ["إدارة المستخدمين", "إدارة حسابات المستخدمين، الأدوار، الصلاحيات، وحالة النشاط عبر المنصة", "إضافة مستخدم", [["إجمالي المستخدمين", "users.total", "👥"], ["المستخدمون النشطون", "users.active", "👤"], ["المستخدمون الجدد هذا الشهر", "users.newThisMonth", "＋"], ["طلبات الدعوات", "users.pendingInvites", "✉"]]],
  meetings: ["إدارة الاجتماعات", "إدارة الجلسات المباشرة والمجدولة، ومراقبة الأداء والتحكم في الاجتماعات", "إنشاء اجتماع", [["إجمالي الاجتماعات", "meetings.total", "▣"], ["الاجتماعات المباشرة الآن", "meetings.liveNow", "●"], ["المجدولة اليوم", "meetings.scheduledToday", "▦"], ["متوسط مدة الاجتماع", "meetings.averageMinutes", "◷"]]],
  teams: ["إدارة الفرق", "إدارة الفرق، الأعضاء، الصلاحيات، ومتابعة الأداء والتعاون عبر المنصة", "إنشاء فريق", [["إجمالي الفرق", "teams.total", "♙"], ["الفرق النشطة", "teams.active", "👥"], ["المشاريع الجارية", "teams.projects", "▣"], ["متوسط الأعضاء", 0, "👤"]]],
  subscriptions: ["إدارة الاشتراكات", "إدارة خطط العملاء، التجديدات، الإيرادات، ومتابعة دورة الاشتراك", "إضافة اشتراك", [["إجمالي الاشتراكات", "billing.activeSubscriptions", "▤"], ["الاشتراكات النشطة", "billing.activeSubscriptions", "◈"], ["التجديدات هذا الشهر", 0, "↻"], ["الإيراد الشهري المتكرر", "billing.revenueThisMonth", "﷼"]]],
  invoices: ["إدارة الفواتير", "إدارة الفواتير، المدفوعات، التحصيل، الضرائب، ومتابعة حالة الفوترة", "إنشاء فاتورة", [["إجمالي الفواتير", "billing.totalInvoices", "▧"], ["الفواتير المدفوعة", 0, "◈"], ["الفواتير المعلقة", "billing.pendingInvoices", "◷"], ["المبالغ المتأخرة", 0, "⚠"]]],
  support: ["إدارة الدعم", "إدارة التذاكر، المحادثات، فرق الدعم، ومتابعة جودة الخدمة عبر المنصة", "إنشاء تذكرة", [["إجمالي التذاكر", "support.openTickets", "☏"], ["التذاكر المفتوحة", "support.openTickets", "▢"], ["متوسط وقت الاستجابة", 0, "◷"], ["رضا العملاء", "support.satisfaction", "☺"]]],
  security: ["إدارة الأمان", "إدارة الأمان والجلسات وسياسات الوصول والمصادقة متعددة العوامل", "إضافة سياسة", [["نقاط الأمان", "security.compliance", "◈"], ["الحسابات المحمية MFA", "security.mfaAccounts", "◎"], ["محاولات الدخول المشبوهة", "security.alerts", "⚠"], ["الجلسات النشطة", "security.activeSessions", "👥"]]],
  analytics: ["إدارة التحليلات", "مراقبة الأداء، المقاييس، الاتجاهات، والتقارير الذكية عبر المنصة", "إنشاء تقرير", [["إجمالي الزيارات", "analytics.visits", "◌"], ["المستخدمون النشطون", "users.active", "👥"], ["معدل التحويل", "analytics.conversionRate", "◎"], ["الإيرادات المحققة", "billing.revenueThisMonth", "﷼"]]],
  settings: ["إدارة الإعدادات", "إدارة إعدادات المنصة، الحسابات، التفضيلات، الصلاحيات، والإعدادات التشغيلية", "حفظ التغييرات", [["الإعدادات النشطة", "settings.active", "⚙"], ["التكاملات المفعلة", "settings.integrations", "✣"], ["سياسات الأمان", "settings.policies", "◈"], ["النسخ الاحتياطي الأخير", 0, "↻"]]],
  "help-center": ["مركز المساعدة", "كل الأدلة والمعلومات التي تحتاجها لإدارة نظام Vexwyn بكفاءة وفعالية", "إنشاء تذكرة", [["حالة النظام", "غير متوفر", "◌"], ["الأدلة المحدثة هذا الشهر", 0, "▤"], ["نسبة حل المشاكل", 0, "◎"], ["التذاكر المفتوحة", "support.openTickets", "☏"]]]
};

function adminPath() {
  const hash = location.hash.replace("#", "");
  if (hash.startsWith("/admin")) return hash;
  if (location.pathname.startsWith("/admin")) return location.pathname;
  return "";
}

function isAdminSignedIn() {
  try {
    const session = JSON.parse(localStorage.getItem(ADMIN_SESSION_KEY) || "null");
    return session && ["admin", "super_admin"].includes(session.role);
  } catch {
    return false;
  }
}

function adminLogo() {
  return `<a class="admin-brand" href="/admin" data-admin-link><span class="mark"></span><strong>Vexwyn</strong></a>`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("ar-SA").format(value || 0);
}

function formatCurrency(value) {
  return `${formatNumber(value || 0)} ريال`;
}

function adminStat(title, value, icon, note = "لا توجد مقارنة بعد") {
  return `<article class="admin-stat"><span class="admin-icon">${icon}</span><div><p>${title}</p><strong>${value}</strong><small>${note}</small></div></article>`;
}

function adminEmpty(title = "لا توجد سجلات حتى الآن", text = "ستظهر البيانات هنا بعد بدء استخدام المنصة.") {
  return `<div class="admin-empty"><span>∅</span><h3>${title}</h3><p>${text}</p></div>`;
}

function adminChartEmpty() {
  return `<div class="admin-chart-empty"><div class="admin-chart-lines"></div><h3>لا توجد بيانات كافية لعرض التحليل</h3><p>ستظهر الرسوم البيانية بعد توفر نشاط حقيقي من قاعدة البيانات.</p></div>`;
}

function adminTable(title, actionLabel) {
  return `<section class="admin-panel admin-table-panel"><div class="admin-panel-head"><h2>${title}</h2><button class="admin-ghost" data-admin-modal="${actionLabel}">${actionLabel}</button></div><div class="admin-table"><div class="admin-table-head"><span>الاسم</span><span>الحالة</span><span>آخر تحديث</span><span>الإجراءات</span></div>${adminEmpty()}</div></section>`;
}

function adminHero(title, subtitle, icon) {
  return `<section class="admin-hero"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="admin-hero-art"><span>${icon}</span></div></section>`;
}

function adminActions(primary, secondary = "تصدير", third = "تصفية") {
  return `<div class="admin-actions"><button class="admin-primary" data-admin-modal="${primary}">＋ ${primary}</button><button class="admin-outline" data-admin-modal="${secondary}">⇩ ${secondary}</button><button class="admin-outline" data-admin-modal="${third}">⌕ ${third}</button></div>`;
}

function adminTopbar() {
  return `<header class="admin-topbar"><div class="admin-health"><b></b><span>النظام يعمل بكفاءة</span><small>مؤشر المنصة غير متوفر بعد</small></div><button class="admin-outline" data-admin-modal="إجراءات سريعة">إجراءات سريعة ⚡</button><label class="admin-search"><kbd>⌘K</kbd><input placeholder="البحث في النظام..."></label><button class="admin-square">🔔</button><button class="admin-outline">العربية ◌</button></header>`;
}

function adminSidebar(active) {
  return `<aside class="admin-sidebar">${adminLogo()}<div class="admin-profile"><span class="admin-avatar">أ</span><div><strong>أحمد خالد</strong><p>مدير النظام</p><small>● متصل</small></div></div><nav>${adminNav.map(([key, href, icon]) => `<a class="${active === key ? "active" : ""}" href="${href}" data-admin-link><span>${adminLabels[key]}</span><b>${icon}</b></a>`).join("")}</nav><a class="admin-help ${active === "help-center" ? "active" : ""}" href="/admin/help-center" data-admin-link>مركز المساعدة ؟</a><footer>Vexwyn Admin v2.4.0<br>© 2025 جميع الحقوق محفوظة</footer></aside>`;
}

function adminShell(active, content) {
  return `<div class="admin-shell" dir="rtl">${adminSidebar(active)}<main>${adminTopbar()}<section class="admin-content">${ADMIN_DEMO_ENABLED ? `<div class="admin-demo">وضع البيانات التجريبية مفعل</div>` : ""}${content}</section></main><div id="admin-modal-root"></div></div>`;
}

function adminOverview() {
  const s = adminStats;
  return adminShell("overview", `${adminHero("لوحة إدارة Vexwyn", "التحكم المركزي الكامل في منصة Vexwyn وإدارتها بكفاءة وأمان", "◈")}<section class="admin-kpis">${adminStat("إجمالي المستخدمين", formatNumber(s.users.total), "👤")}${adminStat("الاجتماعات النشطة الآن", formatNumber(s.meetings.liveNow), "▣")}${adminStat("الفرق النشطة", formatNumber(s.teams.active), "👥")}${adminStat("الإيرادات الشهرية", formatCurrency(s.billing.revenueThisMonth), "﷼")}${adminStat("توفر المنصة", "غير متوفر", "◈")}${adminStat("تذاكر الدعم المفتوحة", formatNumber(s.support.openTickets), "☏")}</section><section class="admin-grid"><div class="admin-panel">${adminChartEmpty()}</div>${adminTable("المستخدمون الجدد", "إضافة مستخدم")}${adminTable("الاجتماعات المباشرة", "إنشاء اجتماع")}<div class="admin-panel">${adminChartEmpty()}</div></section><section class="admin-feature-row"><article>أمان على مستوى المؤسسات<span>تشفير وسجل تدقيق وصلاحيات دقيقة</span></article><article>حماية متعددة الطبقات<span>RBAC و MFA وسياسات وصول</span></article><article>مراقبة الجلسات<span>تسجيل النشاط وإدارة الدخول</span></article></section>`);
}

function statValue(path) {
  if (typeof path === "number") return formatNumber(path);
  if (path === "غير متوفر") return path;
  const value = path.split(".").reduce((acc, key) => acc?.[key], adminStats);
  return path.includes("revenue") ? formatCurrency(value) : formatNumber(value);
}

function adminGenericPage(key) {
  const [title, subtitle, primary, stats] = adminPageConfig[key];
  const tableTitle = key === "help-center" ? "المقالات والتذاكر الأخيرة" : `سجلات ${title.replace("إدارة ", "")}`;
  return adminShell(key, `${adminActions(primary)}${adminHero(title, subtitle, stats[0][2])}<section class="admin-kpis">${stats.map(([label, value, icon]) => adminStat(label, statValue(value), icon)).join("")}</section><section class="admin-workspace"><div>${adminTable(tableTitle, primary)}<div class="admin-panel">${adminChartEmpty()}</div></div><aside><div class="admin-panel admin-detail"><h2>تفاصيل مختصرة</h2>${adminEmpty("لا توجد بيانات تفصيلية", "سيتم عرض التفاصيل عند اختيار سجل حقيقي من الجدول.")}<button class="admin-primary" data-admin-modal="عرض التفاصيل">عرض التفاصيل</button><button class="admin-outline" data-admin-modal="تعديل">تعديل</button></div><div class="admin-panel">${adminChartEmpty()}</div></aside></section><section class="admin-feature-row"><article>سجل التدقيق والمراجعة<span>تتبع شامل للتغييرات والإجراءات</span></article><article>المصادقة متعددة العوامل<span>تعزيز أمان وصول المسؤولين</span></article><article>التحكم في الصلاحيات<span>إدارة دقيقة للأدوار والمستويات</span></article></section>`);
}

function adminLogin() {
  return `<main class="admin-login" dir="rtl"><header>${adminLogo()}<nav><a href="#/">العودة إلى الموقع ←</a><span>العربية ◌</span><span>مركز المساعدة ؟</span></nav></header><section><aside class="admin-login-showcase"><div class="admin-shield">🔒</div><h1><span>Vexwyn</span> بوابة إدارة</h1><h2>تسجيل دخول المسؤولين</h2><p>وصول آمن لإدارة المنصة ومراقبة العمليات. هذه الجلسة منفصلة عن حسابات المستخدمين العاديين.</p><div class="admin-login-mini">${adminStat("إدارة المستخدمين", "0", "👤")}${adminStat("الاجتماعات النشطة", "0", "▣")}${adminStat("تنبيهات الأمان", "0", "◈")}</div></aside><form class="admin-login-card" id="admin-login-form"><h1>تسجيل الدخول إلى لوحة الإدارة</h1><p>يرجى استخدام بيانات اعتماد المسؤول للوصول إلى لوحة التحكم.</p><label>البريد الإداري<input name="email" type="email" placeholder="admin@vexwyn.com" required></label><label>كلمة المرور<input name="password" type="password" placeholder="أدخل كلمة المرور" required></label><label>رمز التحقق الثنائي<input name="mfa" inputmode="numeric" placeholder="أدخل رمز التحقق"></label><div class="admin-login-row"><label><input type="checkbox"> تذكر هذا الجهاز</label><a href="#">نسيت كلمة المرور؟</a></div><button class="admin-primary" type="submit">🔒 دخول آمن</button><div class="admin-divider">أو</div><button class="admin-outline" type="button" data-admin-modal="تسجيل الدخول عبر SSO">تسجيل الدخول عبر SSO ◈</button></form></section><footer>جميع الحقوق محفوظة © 2025 Vexwyn</footer><div id="admin-modal-root"></div></main>`;
}

function renderAdminRoute(path) {
  if (path === "/admin/login") return adminLogin();
  if (!isAdminSignedIn()) {
    history.replaceState(null, "", "/admin/login");
    return adminLogin();
  }
  const key = path === "/admin" || path === "/admin/" ? "overview" : path.replace("/admin/", "").replace(/\/$/, "");
  if (key === "overview") return adminOverview();
  if (adminPageConfig[key]) return adminGenericPage(key);
  return adminShell("overview", `${adminHero("الصفحة غير موجودة", "لم يتم العثور على مسار الأدمن المطلوب.", "؟")}${adminEmpty("مسار غير معروف", "استخدم روابط القائمة الجانبية للوصول إلى صفحات لوحة الإدارة.")}`);
}

function showAdminModal(title) {
  const root = document.getElementById("admin-modal-root");
  if (!root) return;
  root.innerHTML = `<div class="admin-modal-backdrop"><section class="admin-modal"><button class="admin-modal-close" aria-label="إغلاق">×</button><h2>${title}</h2><p>هذا الإجراء جاهز للربط بواجهة API حقيقية. لا توجد بيانات تجريبية مفعلة حالياً، لذلك لن يتم إنشاء سجلات وهمية.</p><label>ملاحظة<input placeholder="أدخل تفاصيل الإجراء"></label><div><button class="admin-primary admin-modal-close">حفظ</button><button class="admin-outline admin-modal-close">إلغاء</button></div></section></div>`;
  root.querySelectorAll(".admin-modal-close").forEach((btn) => btn.addEventListener("click", () => root.innerHTML = ""));
}

function bindAdmin() {
  document.querySelectorAll("[data-admin-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("/admin")) return;
      event.preventDefault();
      history.pushState(null, "", href);
      route();
    });
  });
  const form = document.getElementById("admin-login-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ role: "admin", name: "أحمد خالد", createdAt: new Date().toISOString() }));
      history.pushState(null, "", "/admin");
      route();
    });
  }
  document.querySelectorAll("[data-admin-modal]").forEach((button) => {
    button.addEventListener("click", () => showAdminModal(button.dataset.adminModal));
  });
}

const VX_APP_ZERO_NOTE = "مرتبط بالبيانات الحقيقية";

function userProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem("vexwyn-user-session") || "{}");
    return {
      name: saved.name || "أحمد خالد",
      email: saved.email || "ahmad@vexwyn.com",
      team: saved.team || "فريق المشروع"
    };
  } catch {
    return { name: "أحمد خالد", email: "ahmad@vexwyn.com", team: "فريق المشروع" };
  }
}

function appNav(active) {
  const nav = [
    ["dashboard", "الرئيسية", icons.home, "#/app"],
    ["meetings", "الاجتماعات", icons.video, "#/app/meetings"],
    ["calendar", "التقويم", icons.calendar, "#/app/calendar"],
    ["messages", "الرسائل", icons.chat, "#/app/messages"],
    ["teams", "الفرق", icons.teams, "#/app/teams"],
    ["files", "الملفات", icons.files, "#/app/files"],
    ["settings", "الإعدادات", icons.settings, "#/app/settings"]
  ];
  return nav.map(([key, label, icon, href]) =>
    `<a class="side-link ${active === key ? "active" : ""}" href="${href}"><span>${label}</span><b>${icon}</b></a>`
  ).join("");
}

function shell(active, content) {
  const profile = userProfile();
  return `<div class="app-shell ux-shell">
    <aside class="sidebar ux-sidebar">
      ${brand()}
      <a class="user-card" href="#/app/profile"><span>⌄</span><div><b>${profile.name}</b><p>مدير المشروع</p><small>● متصل</small></div><span class="avatar">${profile.name[0] || "أ"}</span></a>
      <nav class="nav-stack">${appNav(active)}</nav>
      <div class="upgrade-card"><h3>ترقية الخطة</h3><p>احصل على مزايا متقدمة وإمكانات أكبر بلا حدود.</p><a class="primary-btn" href="#/app/billing">ترقية الآن ✦</a></div>
    </aside>
    <main>
      <div class="topbar ux-topbar"><span>${icons.bell}<sup>0</sup></span><a href="#/app/settings">${icons.settings}</a><input class="search" placeholder="ابحث في الاجتماعات، الرسائل، الفرق..."></div>
      <div class="app-content ux-content">${content}</div>
    </main>
    <div id="app-modal-root"></div><div id="app-toast-root"></div>
  </div>`;
}

function appAction(label, action, primary = false) {
  return `<button class="${primary ? "primary-btn" : "outline-btn"}" type="button" data-app-action="${action}">${label}</button>`;
}

function userMetric(title, icon, key = "") {
  return `<article class="panel ux-stat"><div class="row-between"><span>${title}</span><span class="icon-box">${icon}</span></div><h2 data-user-metric="${key}">0</h2><small>${VX_APP_ZERO_NOTE}</small><div class="spark is-zero"></div></article>`;
}

function appHeader(title, subtitle, icon, actions = "") {
  return `<div class="page-title ux-page-title"><div><h1>${title} <span>${icon}</span></h1><p>${subtitle}</p></div><div class="row-between">${actions}</div></div>`;
}

function emptyState(title, text) {
  return `<div class="ux-empty"><b>${title}</b><p>${text}</p></div>`;
}

function dashboard() {
  return shell("dashboard", `
    ${appHeader("مرحبا بعودتك، " + userProfile().name.split(" ")[0], "إدارة اجتماعاتك وفرقك بسهولة وكفاءة.", "", "")}
    <section class="grid-dashboard ux-dashboard-grid">
      <aside class="panel ux-quick"><h3>إجراءات سريعة</h3><div class="quick-grid">
        <button class="quick-action" type="button" data-app-action="new-meeting"><span class="icon-box">${icons.video}</span><b>اجتماع جديد</b></button>
        <button class="quick-action" type="button" data-app-action="join-meeting"><span class="icon-box">↪</span><b>انضم لاجتماع</b></button>
        <button class="quick-action" type="button" data-app-action="schedule-meeting"><span class="icon-box">${icons.calendar}</span><b>جدولة اجتماع</b></button>
        <button class="quick-action" type="button" data-app-action="screen-share"><span class="icon-box">▭</span><b>مشاركة الشاشة</b></button>
      </div></aside>
      <article class="panel next-meeting ux-next"><div class="calendar-art">▦</div><div><span class="pill">الاجتماع القادم</span><h2>لا توجد اجتماعات مجدولة</h2><p>عند إنشاء اجتماع أو ربط البيانات الحقيقية سيظهر هنا مباشرة.</p><div class="row-between">${appAction("جدولة اجتماع", "schedule-meeting", true)}${appAction("عرض الاجتماعات", "open-meetings")}</div></div></article>
    </section>
    <section class="cards-4 ux-dashboard-stats">${[
      ["اجتماعات اليوم", icons.calendar, "meetings.today"],
      ["إجمالي الساعات", "◷", "meetings.hours"],
      ["المشاركون النشطون", icons.teams, "members.active"],
      ["معدل الحضور", "◎", "attendance.rate"]
    ].map(([a,b,c]) => userMetric(a,b,c)).join("")}</section>
    <section class="content-grid">
      ${miniPanel("آخر التحديثات", ["لا توجد تحديثات بعد", "اربط البيانات الحقيقية لعرض النشاط", "سجل الاجتماعات سيظهر هنا"])}
      ${miniPanel("المهام", ["لا توجد مهام نشطة", "أنشئ مهمة بعد أول اجتماع", "سيتم حفظ المهام هنا"], true)}
      ${miniPanel("جدول اليوم", ["لا توجد أحداث اليوم", "استخدم جدولة اجتماع لإضافة حدث", "كل الأحداث القادمة ستظهر هنا"])}
    </section>
  `);
}

function card(s) {
  const [title, num] = s.split("|");
  return `<article class="panel ux-stat"><div class="row-between"><span>${title}</span><span class="icon-box">${icons.calendar}</span></div><h2>${num || "0"}</h2><small>${VX_APP_ZERO_NOTE}</small><div class="spark is-zero"></div></article>`;
}

function miniPanel(title, rows, checks = false) {
  return `<article class="panel ux-mini"><div class="row-between"><h3>${title}</h3><button class="auth-link gradient-text" type="button" data-app-action="view-all">عرض الكل</button></div><div class="list">${rows.map((row, index) => `<div class="list-item"><span>${row}</span><span>${checks ? `<input type="checkbox" ${index === 0 ? "checked" : ""}>` : "0"}</span></div>`).join("")}</div></article>`;
}

function leftAside() {
  return `${miniPanel("جدول اليوم", ["لا توجد اجتماعات اليوم", "لا توجد مهام مجدولة", "لا توجد تسجيلات جديدة"])}<br>${miniPanel("إحصائيات", ["اجتماعات هذا الأسبوع", "إجمالي ساعات الاجتماعات", "متوسط الحضور"])}`;
}

function upgradePanel() {
  return `<article class="panel ux-upgrade"><h3>ترقية الخطة</h3><p>احصل على جلسات غير محدودة وتحليلات أكثر احترافية.</p><div class="mega-art"></div><a class="primary-btn" href="#/app/billing">ترقية الآن ✦</a></article>`;
}

function filters() {
  return `<div class="row-between ux-filters"><input class="search" placeholder="ابحث هنا..."><button class="outline-btn active" type="button" data-app-action="filter-all">الكل</button><button class="outline-btn" type="button" data-app-action="filter-upcoming">القادمة</button><button class="outline-btn" type="button" data-app-action="filter-ended">المنتهية</button></div>`;
}

function listPage(title, subtitle, actions, body, active = "") {
  const buttons = actions.map(([label, action, primary]) => appAction(label, action, primary)).join("");
  return `${appHeader(title, subtitle, active, buttons)}<div class="two-aside ux-three-col"><aside>${leftAside()}</aside><section class="panel">${filters()}${body}</section><aside>${upgradePanel()}</aside></div>`;
}

function meetingRows() {
  const rows = [
    ["مراجعة خطة المشروع", "جاهز للجدولة", "0 مشارك", "غير محدد", "join-meeting"],
    ["جلسة تخطيط الربع القادم", "قادم", "0 مشارك", "غير محدد", "open-meeting"],
    ["مناقشة التصميم النهائي", "قادم", "0 مشارك", "غير محدد", "open-meeting"],
    ["اجتماع متابعة الأداء", "منتهي", "0 مشارك", "لا يوجد تسجيل", "open-recording"]
  ];
  return `<div class="data-list">${rows.map(([title, state, people, time, action]) => `<article class="meeting-row ux-row"><div><button class="primary-btn" type="button" data-app-action="${action}">${action === "join-meeting" ? "انضم الآن" : "فتح"}</button><button class="mini-btn" type="button" data-app-action="details">التفاصيل</button></div><div><h2>${title}</h2><p>سيتم عرض تفاصيل الاجتماع من البيانات الحقيقية عند توفرها.</p>${avatars(0)}</div><div><span class="status ${state === "قادم" ? "upcoming" : state === "منتهي" ? "ended" : "live"}">${state}</span><p>${time}</p><p>${people}</p></div></article>`).join("")}</div>`;
}

function meetings() {
  return shell("meetings", listPage("الاجتماعات", "إدارة جميع اجتماعاتك المباشرة والقادمة والمنتهية بسهولة", [["اجتماع جديد", "new-meeting", true], ["جدولة اجتماع", "schedule-meeting", false]], meetingRows(), icons.video));
}

function calendar() {
  const days = Array.from({ length: 35 }, (_, index) => index + 1);
  return shell("calendar", `${appHeader("التقويم", "إدارة الاجتماعات والمواعيد وتوفر الفريق في مكان واحد", icons.calendar, `${appAction("جدولة اجتماع", "schedule-meeting", true)}${appAction("إضافة حدث", "add-event")}`)}
    <div class="two-aside ux-three-col"><aside>${leftAside()}</aside><section class="panel ux-calendar-panel"><div class="row-between"><button class="outline-btn" type="button" data-app-action="calendar-today">اليوم</button><h2>مايو 2024</h2><button class="outline-btn" type="button" data-app-action="calendar-next">‹ ›</button></div><div class="calendar-view">${days.map((day) => `<button class="day" type="button" data-app-action="calendar-day"><b>${day}</b>${day === 28 ? `<div class="event">لا توجد بيانات مرتبطة<br>0 اجتماع</div>` : ""}</button>`).join("")}</div></section><aside>${upgradePanel()}</aside></div>`);
}

function messages() {
  return shell("messages", `${appHeader("الرسائل", "تواصل مع فريقك وناقش الملفات والاجتماعات في مكان واحد", icons.chat, appAction("رسالة جديدة", "new-message", true))}
    <div class="channels ux-messages"><aside class="panel">${["فريق المشروع","التصميم","الدعم الداخلي","الاجتماع الأسبوعي"].map((name, index) => `<button class="channel" type="button" data-app-action="open-channel"><span class="icon-box">${index ? icons.chat : icons.teams}</span><div><h3>${name}</h3><p>لا توجد رسائل غير مقروءة</p></div><b>0</b></button>`).join("")}</aside><section class="panel chat-large"><div class="row-between"><h2>فريق المشروع</h2><div>${appAction("بدء اجتماع", "join-meeting")}${appAction("مكالمة صوتية", "audio-call")}</div></div><div class="messages">${emptyState("لا توجد رسائل بعد", "ابدأ محادثة أو اربط قاعدة البيانات لعرض المحادثات الحقيقية.")}</div><form class="chat-input" data-chat-form><input name="message" placeholder="اكتب رسالة..."><button class="primary-btn" type="submit">➤</button></form></section></div>`);
}

function teams() {
  const teamsList = ["فريق المشروع", "التصميم", "التسويق", "الدعم الداخلي", "المنتج", "الإدارة"];
  return shell("teams", `${appHeader("الفرق", "أنشئ فرقك، نظم الأعضاء، وتابع التعاون في مكان واحد", icons.teams, `${appAction("إنشاء فريق جديد", "new-team", true)}${appAction("دعوة عضو", "invite-member")}`)}
    <div class="two-aside ux-three-col"><aside>${miniPanel("الفرق النشطة", ["0 فرق نشطة","0 عضو متصل الآن","لا توجد أنشطة"])}</aside><section><div class="teams-grid">${teamsList.map((team) => `<article class="team-card ux-team"><div class="row-between"><h2>${team}</h2><span class="icon-box">${icons.teams}</span></div><p>تظهر بيانات الفريق الحقيقية بعد ربط حسابك بقاعدة البيانات.</p>${avatars(0)}<div class="row-between" style="margin-top:18px"><button class="outline-btn" type="button" data-app-action="manage-team">إدارة</button><button class="primary-btn" type="button" data-app-action="open-team">فتح</button></div></article>`).join("")}</div></section><aside>${upgradePanel()}</aside></div>`);
}

function files() {
  const folders = ["فريق المشروع", "التصميم", "التسويق", "العقود", "العروض", "التسجيلات"];
  return shell("files", listPage("الملفات", "إدارة ملفات فريقك وتنظيم المجلدات والوصول السريع إلى المستندات", [["رفع ملف", "upload-file", true], ["مجلد جديد", "new-folder", false]], `<div class="folders-grid">${folders.map((folder) => `<button class="folder-card" type="button" data-app-action="open-folder"><span class="icon-box">${icons.folder}</span><h3>${folder}</h3><p>0 ملف</p>${avatars(0)}</button>`).join("")}</div><div class="file-table">${emptyState("لا توجد ملفات", "ارفع ملفًا أو اربط التخزين الحقيقي لعرض المستندات.")}</div>`, icons.files));
}

function settings() {
  const profile = userProfile();
  const toggles = ["الوضع الليلي", "إظهار المعاينات المباشرة", "تثبيت الشريط الجانبي", "الاختصارات الذكية"];
  return shell("settings", `${appHeader("الإعدادات", "خصص حسابك، إعدادات الاجتماعات، الأمان، والتنبيهات من مكان واحد", icons.settings, `${appAction("حفظ التغييرات", "save-settings", true)}${appAction("إعادة تعيين", "reset-settings")}`)}
    <section class="settings-grid ux-settings"><article class="panel"><h3>إعدادات الحساب</h3>${[["الاسم الكامل", profile.name], ["البريد الإلكتروني", profile.email], ["الفريق", profile.team], ["اللغة", "العربية"], ["المنطقة الزمنية", "Asia/Riyadh"]].map(([label, value]) => `<div class="field"><label>${label}</label><input value="${value}"></div>`).join("")}</article><article class="panel"><h3>تفضيلات الواجهة</h3>${toggles.map((item, index) => `<button class="toggle-row" type="button" data-toggle><span>${item}</span><span class="toggle ${index === 1 || index === 2 ? "on" : ""}"></span></button>`).join("")}</article><article class="panel"><h3>الملف الشخصي</h3><div style="text-align:center"><span class="avatar" style="width:90px;height:90px;font-size:34px">${profile.name[0] || "أ"}</span><h2>${profile.name}</h2><p>مدير المشروع</p><button class="outline-btn" type="button" data-app-action="edit-profile">تعديل الملف</button></div></article><article class="panel"><h3>الإشعارات</h3>${["رسائل جديدة","تذكيرات الاجتماعات","دعوات الفريق","تعليقات على الملفات"].map((item, index) => `<button class="toggle-row" type="button" data-toggle><span>${item}</span><span class="toggle ${index !== 3 ? "on" : ""}"></span></button>`).join("")}</article><article class="panel"><h3>الخصوصية والأمان</h3><div class="ux-privacy">${["تغيير كلمة المرور","إدارة الجلسات النشطة","تنزيل بياناتك","إعدادات متقدمة"].map((item) => `<button class="outline-btn" type="button" data-app-action="settings-tool">${item}</button>`).join("")}</div></article><article class="panel"><h3>حفظ التغييرات</h3><p>لا توجد تغييرات غير محفوظة</p><button class="primary-btn" style="width:100%" type="button" data-app-action="save-settings">حفظ التغييرات</button><br><br><button class="outline-btn" style="width:100%" type="button" data-app-action="reset-settings">إعادة تعيين</button></article></section>`);
}

function billing() {
  const content = `<div class="pricing-page ux-billing"><section class="pricing-hero"><h1>ترقية الباقة</h1><p>اختر الخطة المناسبة لفريقك وفعل مزايا أكثر احترافية.</p><div class="billing-toggle"><span>شهري</span><span class="on">سنوي <small>وفر 20%</small></span></div></section><section class="cards-4">${[["الخطة الحالية", "Pro"], ["المشاركون في الفريق", "0"], ["التخزين السحابي", "0%"], ["اجتماعات هذا الشهر", "0"]].map(([a,b]) => `<article class="panel ux-stat"><span>${a}</span><h2>${b}</h2><small>${VX_APP_ZERO_NOTE}</small></article>`).join("")}</section><section class="pricing-grid">${plans.map(([name, price, desc, features, pop]) => `<article class="plan-card ${pop ? "featured" : ""}"><div class="row-between"><h2>${name}</h2><span class="icon-box">${pop ? icons.crown : "ϟ"}</span></div><p>${desc}</p><div><span class="price">${price}</span> ريال / شهريا</div><div class="check-list">${features.map((feature) => `<span>✓ ${feature}</span>`).join("")}</div><button class="${pop ? "primary-btn" : "outline-btn"}" style="width:100%" type="button" data-app-action="select-plan">${pop ? "الخطة الحالية" : "اختر " + name}</button></article>`).join("")}</section><section class="comparison">${["الميزة|Starter|Pro|Business","المشاركون لكل اجتماع|10|50|200","التسجيل السحابي|5 جيجابايت|20 جيجابايت|غير محدود","الترجمة المباشرة|أساسية|متقدمة|احترافية","Vexwyn AI|أساسي|متقدم|شامل","الدعم|بريد إلكتروني|دردشة + بريد أولوية|24/7 أولوية"].map((row) => `<div class="comparison-row">${row.split("|").map((cell) => `<div>${cell}</div>`).join("")}</div>`).join("")}</section></div>`;
  return shell("settings", content);
}

function helpCenter() {
  return shell("dashboard", `${appHeader("مركز المساعدة", "كل الأدلة والمعلومات التي تحتاجها لإدارة Vexwyn بكفاءة.", "?", appAction("إنشاء تذكرة", "new-ticket", true))}
    <section class="cards-4">${[["حالة النظام", "0"], ["الأدلة المحدثة", "0"], ["نسبة حل المشاكل", "0"], ["التذاكر المفتوحة", "0"]].map(([a,b]) => `<article class="panel ux-stat"><span>${a}</span><h2>${b}</h2><small>${VX_APP_ZERO_NOTE}</small></article>`).join("")}</section><section class="content-grid">${["قاعدة المعرفة","التذاكر والدعم","الفيديوهات التعليمية"].map((title) => `<article class="panel ux-mini"><h3>${title}</h3><p>سيتم عرض البيانات الحقيقية بعد الربط.</p><button class="outline-btn" type="button" data-app-action="view-all">استعراض</button></article>`).join("")}</section>`);
}

function contactPage() {
  return `<div class="vx-page-bg"></div>${publicHeader("contact")}<main class="vx-contact-page"><section class="mega show vx-contact-static"><aside class="mega-card"><h2 class="gradient-text">تواصل مع فريق Vexwyn ✦</h2><p>نحن هنا للإجابة على أسئلتك ومساعدتك في اختيار الخطة المناسبة.</p><button class="primary-btn" type="button" data-app-action="send-contact">أرسل رسالة</button><button class="outline-btn" type="button" data-app-action="book-call">احجز مكالمة</button></aside><div class="mega-list">${contactItems.map(([title, desc, icon]) => `<button class="mega-item" type="button" data-app-action="contact-card"><span class="icon-box">${icon}</span><div><h4>${title}</h4><p>${desc}</p></div><b>‹</b></button>`).join("")}</div></section><div id="app-modal-root"></div><div id="app-toast-root"></div></main>`;
}

function meetingRoom() {
  return `<main class="meeting-room ux-meeting-room">
    <header class="meeting-header">${brand()}<div class="row-between"><b>${icons.shield} مراجعة خطة المشروع</b><span class="status live">● مباشر الآن</span><span class="status ended">● تسجيل جار</span><b>00:00:00</b></div><div class="row-between">${appAction("دعوة", "invite-member")}${appAction("مشاركة الشاشة", "screen-share")}${appAction("السبورة الذكية", "whiteboard")}${appAction("⋮", "more")}</div></header>
    <section class="meeting-layout">
      <div><div class="room-videos"><div class="person main"><span class="pill" style="margin:18px">المتحدث الرئيسي</span><span class="name">أحمد خالد</span></div><div class="participant-grid">${["سارة محمد","ليلى منصور","عمر خالد","نورا علي","محمد سعيد","+0 أعضاء آخرون"].map((name, index) => `<div class="${index === 5 ? "more-tile" : "person"}"><span class="name">${name}</span></div>`).join("")}</div></div><div class="room-below"><article class="panel"><h3>مساعدة Vexwyn AI ✦</h3><p>لا توجد ملخصات حقيقية بعد. سيظهر الملخص بعد انتهاء الاجتماع وربط البيانات.</p><button class="outline-btn" type="button" data-app-action="meeting-summary">عرض ملخص الاجتماع الكامل</button></article><article class="panel"><h3>الترجمة المباشرة CC</h3><p><b>النظام:</b> الترجمة جاهزة عند بدء الجلسة.</p><hr><h3>الموجودون الآن (0)</h3>${avatars(0)}</article></div></div>
      <aside class="panel chat-panel"><div class="chat-tabs"><span>الشات</span><span>المشاركون 0</span></div><div class="messages">${emptyState("لا توجد رسائل", "اكتب أول رسالة في الاجتماع.")}</div><form class="chat-input" data-chat-form><input name="message" placeholder="اكتب رسالة..."><button class="primary-btn" type="submit">➤</button></form></aside>
    </section>
    <footer class="control-bar">${["الميكروفون","الكاميرا","مشاركة الشاشة","الدردشة","رفع اليد","التفاعلات","التسجيل","المزيد"].map((item) => `<button class="control" type="button" data-app-action="meeting-control"><span class="circle">${icons.video}</span><span>${item}</span></button>`).join("")}<button class="primary-btn" style="background:var(--danger)" type="button" data-app-action="leave-meeting">مغادرة الاجتماع</button></footer>
    <div id="app-modal-root"></div><div id="app-toast-root"></div>
  </main>`;
}

function showAppModal(title, body = "هذا الإجراء جاهز للربط بواجهة API حقيقية. لن يتم إنشاء بيانات وهمية.") {
  let root = document.getElementById("app-modal-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "app-modal-root";
    document.body.appendChild(root);
  }
  root.innerHTML = `<div class="admin-modal-backdrop"><section class="admin-modal ux-modal"><button class="admin-modal-close" type="button" aria-label="إغلاق">×</button><h2>${title}</h2><p>${body}</p><label>ملاحظة<input placeholder="أدخل تفاصيل الإجراء"></label><div><button class="admin-primary admin-modal-close" type="button">حفظ</button><button class="admin-outline admin-modal-close" type="button">إلغاء</button></div></section></div>`;
  root.querySelectorAll(".admin-modal-close").forEach((button) => button.addEventListener("click", () => root.innerHTML = ""));
}

function showAppToast(message) {
  let root = document.getElementById("app-toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "app-toast-root";
    document.body.appendChild(root);
  }
  root.innerHTML = `<div class="app-toast">${message}</div>`;
  setTimeout(() => {
    if (root) root.innerHTML = "";
  }, 2200);
}

function bindAppInteractions() {
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showAppModal("إجراء غير مرتبط بعد");
    });
  });

  document.querySelectorAll("[data-app-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = button.dataset.appAction;
      if (button.tagName === "BUTTON") event.preventDefault();
      if (action === "join-meeting" || action === "screen-share") location.hash = "#/app/meetings/room";
      else if (action === "open-meetings") location.hash = "#/app/meetings";
      else if (action === "new-meeting") location.hash = "#/app/meetings";
      else if (action === "schedule-meeting" || action === "add-event" || action === "calendar-day" || action === "calendar-today" || action === "calendar-next") location.hash = "#/app/calendar";
      else if (action === "new-message" || action === "open-channel") location.hash = "#/app/messages";
      else if (action === "new-team" || action === "invite-member" || action === "open-team" || action === "manage-team") showAppModal(button.textContent.trim() || "إدارة الفريق");
      else if (action === "upload-file" || action === "new-folder" || action === "open-folder") showAppModal(button.textContent.trim() || "إدارة الملفات");
      else if (action === "filter-all" || action === "filter-upcoming" || action === "filter-ended") {
        button.parentElement?.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        showAppToast("تم تطبيق التصفية محلياً. ستظهر النتائج الحقيقية بعد ربط API.");
      }
      else if (action === "details" || action === "view-all") showAppModal(button.textContent.trim() || "عرض التفاصيل", "لا توجد بيانات حقيقية كافية للعرض حتى الآن.");
      else if (action === "send-contact" || action === "book-call" || action === "contact-card") showAppModal(button.textContent.trim() || "تواصل معنا", "سيتم إرسال الطلب عند ربط نموذج التواصل الحقيقي.");
      else if (action === "edit-profile" || action === "settings-tool") showAppModal(button.textContent.trim() || "إعدادات الحساب", "تم تجهيز الواجهة وسيتم الحفظ عبر API المستخدم.");
      else if (action === "meeting-control") {
        button.classList.toggle("active");
        showAppToast("تم تحديث حالة أداة الاجتماع محلياً.");
      }
      else if (action === "meeting-summary") showAppModal("ملخص الاجتماع", "سيظهر الملخص بعد انتهاء الاجتماع وربط خدمة Vexwyn AI.");
      else if (action === "save-settings") showAppToast("تم حفظ الحالة محلياً. الربط الحقيقي ينتظر API المستخدم.");
      else if (action === "reset-settings") showAppToast("تمت إعادة تعيين الحقول محلياً.");
      else if (action === "leave-meeting") location.hash = "#/app/meetings";
      else if (action === "select-plan") showAppModal("اختيار الخطة", "سيتم تفعيل الدفع عند ربط مزود الفوترة الحقيقي.");
      else showAppModal(button.textContent.trim() || "إجراء");
    });
  });

  document.querySelectorAll("[data-toggle]").forEach((row) => {
    row.addEventListener("click", () => row.querySelector(".toggle")?.classList.toggle("on"));
  });

  document.querySelectorAll("[data-chat-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const message = input?.value.trim();
      if (!message) {
        showAppToast("اكتب رسالة أولاً.");
        return;
      }
      showAppToast("تم تجهيز الرسالة محلياً بانتظار API المحادثات.");
      input.value = "";
    });
  });
}

function login() {
  return `<div class="bg-orbit"></div><main class="login-page auth-page" dir="rtl">
    <section class="login-card">
      ${brand()}<h1>تسجيل الدخول</h1><p>سجل دخولك للوصول إلى اجتماعاتك وإدارة فريقك بسهولة</p>
      <form id="login-form" novalidate>
        <div class="field"><label>البريد الإلكتروني</label><input name="email" type="email" placeholder="name@company.com"></div>
        <div class="field"><label>كلمة المرور</label><input name="password" placeholder="••••••••••••" type="password"></div>
        <div class="row-between"><button class="auth-link gradient-text" type="button" data-auth-demo>نسيت كلمة المرور؟</button><label><input type="checkbox" checked> تذكرني</label></div>
        <button class="primary-btn" style="width:100%;margin:22px 0" type="submit">تسجيل الدخول</button>
      </form>
      <a class="outline-btn" style="width:100%" href="#/signup">إنشاء حساب جديد</a>
      <div class="row-between auth-divider"><span></span>أو<span></span></div>
      <button class="outline-btn" style="width:100%" type="button" data-auth-demo>G المتابعة بحساب العمل</button>
      <p>${icons.shield} دخول آمن ومشفر</p>
    </section>
    <section class="login-left"><h2><span class="gradient-text">اجتماعات أكثر إنتاجية.</span><br>تواصل أوضح. فرق أقوى.</h2><p>من مكالمات الفيديو إلى إدارة المهام والتقويم، كل ما تحتاجه في منصة واحدة متكاملة.</p><div class="meeting-stage">${videoMockup()}${scheduleCard()}</div></section>
  </main>`;
}

function signup() {
  return `<div class="bg-orbit"></div><main class="login-page auth-page signup-page" dir="rtl">
    <section class="login-card">
      ${brand()}<h1>إنشاء حساب جديد</h1><p>ابدأ مساحة Vexwyn لفريقك خلال لحظات.</p>
      <form id="signup-form" novalidate>
        <div class="field"><label>الاسم الكامل</label><input name="name" placeholder="أحمد خالد"></div>
        <div class="field"><label>البريد الإلكتروني</label><input name="email" type="email" placeholder="name@company.com"></div>
        <div class="field"><label>اسم الفريق أو الشركة</label><input name="team" placeholder="فريق المشروع"></div>
        <div class="field"><label>كلمة المرور</label><input name="password" placeholder="••••••••••••" type="password"></div>
        <label class="auth-check"><input type="checkbox" checked> أوافق على شروط الاستخدام وسياسة الخصوصية</label>
        <button class="primary-btn" style="width:100%;margin:20px 0 12px" type="submit">إنشاء الحساب والدخول</button>
      </form>
      <a class="outline-btn" style="width:100%" href="#/login">لدي حساب بالفعل</a>
      <p>${icons.shield} تجربة آمنة ومشفرة</p>
    </section>
    <section class="login-left"><h2><span class="gradient-text">ابدأ مجانا.</span><br>نظم اجتماعاتك وملفاتك من مكان واحد.</h2><p>سيتم إنشاء مساحة محلية مباشرة، ثم يمكن ربطها بالباكند عند توفر API التسجيل.</p><div class="meeting-stage">${videoMockup()}${scheduleCard()}</div></section>
  </main>`;
}

function bindAuth() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      localStorage.setItem("vexwyn-user-session", JSON.stringify({
        type: "login",
        email: data.get("email") || "user@vexwyn.com",
        createdAt: new Date().toISOString()
      }));
      location.hash = "#/app";
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(signupForm);
      localStorage.setItem("vexwyn-user-session", JSON.stringify({
        type: "signup",
        name: data.get("name") || "أحمد خالد",
        email: data.get("email") || "user@vexwyn.com",
        team: data.get("team") || "فريق المشروع",
        createdAt: new Date().toISOString()
      }));
      location.hash = "#/app";
    });
  }

  document.querySelectorAll("[data-auth-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("vexwyn-user-session", JSON.stringify({ type: "work-account", createdAt: new Date().toISOString() }));
      location.hash = "#/app";
    });
  });
}

function landing() {
  return `
    <div class="vx-page-bg"></div>
    ${publicHeader()}
    <main class="vx-home">
      <section class="vx-hero">
        <div class="vx-visual">
          <div class="vx-video-card">
            <div class="vx-video-bar"><b><span class="mini-v">V</span> Vexwyn Meeting</b><span>● 00:00:00 ⛶ ⋮</span></div>
            <div class="vx-video-body">
              <div class="vx-person vx-person-main"><span>أحمد خالد</span></div>
              <div class="vx-video-side">
                <div class="vx-person"><span>سارة محمد</span></div>
                <div class="vx-person"><span>أحمد خالد</span></div>
                <div class="vx-person"><span>ليلى سالم</span></div>
                <div class="vx-more">+0<br><small>أعضاء آخرون</small></div>
              </div>
            </div>
            <div class="vx-video-controls"><span>كتم الصوت</span><span>إيقاف الفيديو</span><span>المشاركة</span><span>المشاركون</span><span>التسجيل</span><b>⏻</b></div>
          </div>
          <aside class="vx-calendar-card">
            <div><span>+</span><b>جدول الاجتماعات</b><span>▣</span></div>
            ${["لا توجد اجتماعات|0:00", "اربط التقويم|0:00", "ابدأ جدولة|0:00"].map((row) => {
              const [title, time] = row.split("|");
              return `<article><h4>${title}</h4><p>${time}</p><span class="vx-dots"></span><button>▣</button></article>`;
            }).join("")}
          </aside>
        </div>
        <div class="vx-copy">
          <span class="vx-pill">◈ منصة اجتماعات آمنة وسهلة</span>
          <h1>اجتماعات أفضل.<br><strong>تواصل بلا حدود.</strong></h1>
          <p>Vexwyn تجمع فريقك في مساحة واحدة للاجتماعات المرئية، المحادثات الفورية، ومشاركة الملفات بسلاسة وأمان تام.</p>
          <div class="vx-hero-actions"><a class="primary-btn" href="#/signup">ابدأ مجاناً ←</a><a class="outline-btn" href="#/contact">احجز عرضاً توضيحياً ▣</a></div>
          <div class="vx-trust"><span>◈ أمان على مستوى المؤسسات</span><span>ϟ يعمل داخل متصفح</span><span>◌ لا يتطلب تثبيت</span></div>
        </div>
      </section>
      <section class="vx-home-grid">
        <article class="vx-panel vx-feature-list"><h3>كل ما تحتاجه في مكان واحد</h3>${["جودة عالية","مشاركة الملفات","دردشة تفاعلية","اجتماعات مسجلة"].map((item) => `<p>${item}<b>✓</b></p>`).join("")}</article>
        <article class="vx-panel vx-dashboard"><h3>لوحة التحكم ▦</h3><div>${["الاجتماعات اليوم|0","إجمالي المشاركين|0","ساعات الاجتماعات|0","مستوى المشاركة|0%"].map((row, index) => { const [title, value] = row.split("|"); return `<section><small>${title}</small><strong>${value}</strong>${index === 3 ? "<i></i>" : "<em></em>"}</section>`; }).join("")}</div></article>
        <article class="vx-panel vx-integrations"><h3>تكاملات ذكية ⚙</h3>${["Google Calendar","Microsoft 365","Slack","Zoom","Drive","المزيد"].map((item) => `<span>${item}</span>`).join("")}</article>
      </section>
      <section class="vx-benefits">${["اجتماعات آمنة|حماية متقدمة لبياناتك وخصوصيتك","مشاركة سهلة|شارك روابط الاجتماعات والملفات بكل سهولة","جدولة سريعة|أنشئ اجتماعاتك بنقرة واحدة","دعم متواصل|فريق دعم جاهز لمساعدتك في أي وقت"].map((row) => { const [title, text] = row.split("|"); return `<article><b>${title}</b><span>${text}</span></article>`; }).join("")}</section>
    </main>
  `;
}

function route() {
  const directAdminPath = adminPath();
  if (directAdminPath) {
    const app = document.getElementById("app");
    app.innerHTML = renderAdminRoute(directAdminPath);
    bindAdmin();
    return;
  }
  const hash = location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");
  if (hash === "/" || hash === "") app.innerHTML = landing();
  else if (hash === "/login") app.innerHTML = login();
  else if (hash === "/pricing") app.innerHTML = pricing(true);
  else if (hash === "/app") app.innerHTML = dashboard();
  else if (hash === "/app/meetings/room") app.innerHTML = meetingRoom();
  else if (hash === "/app/meetings") app.innerHTML = meetings();
  else if (hash === "/app/calendar") app.innerHTML = calendar();
  else if (hash === "/app/messages") app.innerHTML = messages();
  else if (hash === "/app/teams") app.innerHTML = teams();
  else if (hash === "/app/files") app.innerHTML = files();
  else if (hash === "/app/settings") app.innerHTML = settings();
  else if (hash === "/app/billing") app.innerHTML = pricing(false);
  else app.innerHTML = landing();
  bindMega();
}

function bindMega() {
  document.querySelectorAll("[data-mega]").forEach(btn => {
    btn.addEventListener("click", () => {
      const root = document.getElementById("mega-root");
      const type = btn.dataset.mega;
      root.innerHTML = root.dataset.open === type ? "" : mega(type);
      root.dataset.open = root.innerHTML ? type : "";
    });
  });
  document.addEventListener("click", (e) => {
    const root = document.getElementById("mega-root");
    if (!root || e.target.closest("[data-mega]") || e.target.closest(".mega")) return;
    root.innerHTML = "";
    root.dataset.open = "";
  }, { once: true });
}

window.addEventListener("hashchange", route);
// Initial render is executed after the Vexwyn override layer below.

const VX_ADMIN_BASE = "/advanced-pro-control";
const VX_ADMIN_EMAIL = "admin@vexwyn.com";
const VX_ADMIN_PASSWORD = localStorage.getItem("VEXWYN_DEMO_ADMIN_PASSWORD") || "";
const VX_ADMIN_MFA = localStorage.getItem("VEXWYN_DEMO_ADMIN_MFA") || "";
const VX_API_URL = ((window.VEXWYN_API_URL || localStorage.getItem("VEXWYN_API_URL") || "") + "").replace(/\/$/, "");
const VX_ENABLE_DEMO_DATA = window.VEXWYN_ENABLE_DEMO_DATA === true || localStorage.getItem("VEXWYN_ENABLE_DEMO_DATA") === "true";

function vxApiReady() {
  return Boolean(VX_API_URL);
}

async function vxApiFetch(path, options = {}) {
  if (!vxApiReady()) {
    throw new Error("VEXWYN_API_URL is not configured");
  }

  const response = await fetch(`${VX_API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || `API Error: ${response.status}`);
  }

  return response.json();
}

function vxFormatMetric(value, { money = false, percent = false } = {}) {
  const number = Number(value || 0);
  if (money) return `${number.toLocaleString("en-US")} SAR`;
  if (percent) return `${number.toLocaleString("en-US")}%`;
  return number.toLocaleString("en-US");
}

function brand() {
  return `<a class="brand" href="#/"><span class="mark" aria-hidden="true"></span><span>Vexwyn</span></a>`;
}

function publicHeader(active = "") {
  return `
    <header class="public-header vx-header">
      ${brand()}
      <nav class="public-nav">
        <button class="nav-link ${active==="products"?"active":""}" data-mega="products">المنتجات⌄</button>
        <a class="nav-link ${active==="pricing"?"active":""}" href="#/pricing">الأسعار</a>
        <button class="nav-link ${active==="resources"?"active":""}" data-mega="resources">الموارد⌄</button>
        <button class="nav-link ${active==="company"?"active":""}" data-mega="company">الشركة</button>
        <button class="nav-link ${active==="contact"?"active":""}" data-mega="contact">تواصل معنا</button>
      </nav>
      <div class="public-actions">
        <span class="ghost-btn">العربية ◌</span>
        <a class="ghost-btn" href="#/login">تسجيل الدخول</a>
        <a class="primary-btn" href="#/login">ابدأ مجاناً</a>
      </div>
    </header>
    <div id="mega-root"></div>
  `;
}

function landing() {
  return `
    <div class="vx-page-bg"></div>
    ${publicHeader()}
    <main class="vx-home">
      <section class="vx-hero">
        <div class="vx-visual">
          <div class="vx-video-card">
            <div class="vx-video-bar"><b><span class="mini-v">V</span> Vexwyn Meeting</b><span>● 00:00:00 ⛶ ⋮</span></div>
            <div class="vx-video-body">
              <div class="vx-person vx-person-main"><span>حسام الشريف</span></div>
              <div class="vx-video-side">
                <div class="vx-person"><span>سارة محمد</span></div>
                <div class="vx-person"><span>أحمد خالد</span></div>
                <div class="vx-person"><span>ليلى سالم</span></div>
                <div class="vx-more">+0<br><small>أعضاء آخرون</small></div>
              </div>
            </div>
            <div class="vx-video-controls"><span>كتم الصوت</span><span>إيقاف الفيديو</span><span>المشاركة</span><span>المشاركون</span><span>التسجيل</span><b>⏻</b></div>
          </div>
          <aside class="vx-calendar-card">
            <div><span>+</span><b>جدول الاجتماعات</b><span>▣</span></div>
            ${["لا توجد اجتماعات|0:00", "اربط التقويم|0:00", "ابدأ جدولة|0:00"].map((row) => {
              const [title, time] = row.split("|");
              return `<article><h4>${title}</h4><p>${time}</p><span class="vx-dots"></span><button>▣</button></article>`;
            }).join("")}
          </aside>
        </div>
        <div class="vx-copy">
          <span class="vx-pill">◈ منصة اجتماعات آمنة وسهلة</span>
          <h1>اجتماعات أفضل.<br><strong>تواصل بلا حدود.</strong></h1>
          <p>Vexwyn تجمع فريقك في مساحة واحدة للاجتماعات المرئية، المحادثات الفورية، ومشاركة الملفات بسلاسة وأمان تام.</p>
          <div class="vx-hero-actions"><a class="primary-btn" href="#/signup">ابدأ مجاناً ←</a><a class="outline-btn" href="#/contact">احجز عرضاً توضيحياً ▣</a></div>
          <div class="vx-trust"><span>◈ أمان على مستوى المؤسسات</span><span>⚡ يعمل داخل متصفح</span><span>◌ لا يتطلب تثبيت</span></div>
        </div>
      </section>
      <section class="vx-home-grid">
        <article class="vx-panel vx-feature-list"><h3>كل ما تحتاجه في مكان واحد</h3>${["جودة عالية","مشاركة الملفات","دردشة تفاعلية","اجتماعات مسجلة"].map((x) => `<p>${x}<b>✓</b></p>`).join("")}</article>
        <article class="vx-panel vx-dashboard"><h3>لوحة التحكم ▦</h3><div>${["الاجتماعات اليوم|0","إجمالي المشاركين|0","ساعات الاجتماعات|0","مستوى المشاركة|0%"].map((x, i) => { const [a,b]=x.split("|"); return `<section><small>${a}</small><strong>${b}</strong>${i===3?'<i></i>':'<em></em>'}</section>`; }).join("")}</div></article>
        <article class="vx-panel vx-integrations"><h3>تكاملات ذكية ⚙</h3>${["Google Calendar","Microsoft 365","Slack","Zoom","Drive","المزيد"].map((x) => `<span>${x}</span>`).join("")}</article>
      </section>
      <section class="vx-benefits">${["اجتماعات آمنة|حماية متقدمة لبياناتك وخصوصيتك","مشاركة سهلة|شارك روابط الاجتماعات والملفات بكل سهولة","جدولة سريعة|أنشئ اجتماعاتك بنقرة واحدة","دعم متواصل|فريق دعم جاهز لمساعدتك في أي وقت"].map((x) => { const [a,b]=x.split("|"); return `<article><b>${a}</b><span>${b}</span></article>`; }).join("")}</section>
    </main>
  `;
}

function adminPath() {
  const hash = location.hash.replace("#", "");
  if (hash.startsWith(VX_ADMIN_BASE) || hash.startsWith("/admin")) return hash;
  if (location.pathname.startsWith(VX_ADMIN_BASE) || location.pathname.startsWith("/admin")) return location.pathname;
  return "";
}

function adminLogo() {
  return `<a class="admin-brand" href="${VX_ADMIN_BASE}" data-admin-link><span class="mark" aria-hidden="true"></span><strong>Vexwyn</strong></a>`;
}

function isAdminSignedIn() {
  try {
    const session = JSON.parse(localStorage.getItem(ADMIN_SESSION_KEY) || "null");
    return session && ["admin", "super_admin"].includes(session.role);
  } catch {
    return false;
  }
}

const vxAdminNav = [
  ["overview", VX_ADMIN_BASE, "⌂", "نظرة عامة"],
  ["users", `${VX_ADMIN_BASE}/users`, "👥", "المستخدمون"],
  ["meetings", `${VX_ADMIN_BASE}/meetings`, "▣", "الاجتماعات"],
  ["teams", `${VX_ADMIN_BASE}/teams`, "♙", "الفرق"],
  ["subscriptions", `${VX_ADMIN_BASE}/subscriptions`, "▤", "الاشتراكات"],
  ["invoices", `${VX_ADMIN_BASE}/invoices`, "▧", "الفواتير"],
  ["support", `${VX_ADMIN_BASE}/support`, "☏", "الدعم"],
  ["security", `${VX_ADMIN_BASE}/security`, "◈", "الأمان"],
  ["analytics", `${VX_ADMIN_BASE}/analytics`, "▥", "التحليلات"],
  ["settings", `${VX_ADMIN_BASE}/settings`, "⚙", "الإعدادات"]
];

const vxPages = {
  overview: ["لوحة إدارة Vexwyn", "التحكم المركزي الكامل في منصة Vexwyn وإدارتها بكفاءة وأمان", "◈", [["إجمالي المستخدمين","58,321","👤","+12.4% عن الشهر الماضي"],["الاجتماعات النشطة الآن","1,248","▣","+8.7% عن أمس"],["الفرق النشطة","2,156","👥","+15.3% عن الشهر الماضي"],["الإيرادات الشهرية","$124,850","﷼","+18.6% عن الشهر الماضي"],["توفر المنصة","99.92%","◈","آخر 30 يوماً"],["تذاكر الدعم المفتوحة","86","☏","-5 عن أمس"]], "إضافة مستخدم"],
  users: ["إدارة المستخدمين", "إدارة حسابات المستخدمين، الأدوار، الصلاحيات، وحالة النشاط عبر المنصة", "👥", [["إجمالي المستخدمين","58,321","👥","+12.4%"],["المستخدمون النشطون","41,280","👥","+9.8%"],["مديرو الفرق","1,245","👤","+6.2%"],["المستخدمون الجدد هذا الشهر","4,285","＋","+15.3%"],["الحسابات المعلقة","86","Ⅱ","-3.1%"],["طلبات الدعوات","132","✉","+8.7%"]], "إضافة مستخدم"],
  meetings: ["إدارة الاجتماعات", "إدارة الجلسات المباشرة والمجدولة، ومراقبة الأداء والتحكم في الاجتماعات", "▣", [["إجمالي الاجتماعات","28,450","▣","+12.6%"],["الاجتماعات المباشرة الآن","1,248","▣","+8.7%"],["الاجتماعات المجدولة اليوم","86","◷","+5.2%"],["إجمالي المشاركين","58,320","👥","+14.3%"],["متوسط مدة الاجتماع","42 دقيقة","◷","+2.4%"],["جودة الاتصال","99.1%","▥","+0.6%"]], "إنشاء اجتماع"],
  teams: ["إدارة الفرق", "إدارة الفرق، الأعضاء، الصلاحيات، ومتابعة الأداء والتعاون عبر المنصة", "👥", [["إجمالي الفرق","2,156","👥","+10.4%"],["الفرق النشطة","1,842","👥","+8.9%"],["متوسط أعضاء الفريق","12 عضو","👥","+3.1%"],["المديرون النشطون","1,245","👤","+6.2%"],["المشاريع الجارية","5,320","▣","+11.7%"],["نسبة التفاعل","94.8%","▥","+1.4%"]], "إنشاء فريق"],
  subscriptions: ["إدارة الاشتراكات", "إدارة خطط العملاء، التجديدات، الإيرادات، ومتابعة دورة الاشتراك عبر المنصة", "▤", [["إجمالي الاشتراكات","28,761","▤","+12.8%"],["الاشتراكات النشطة","24,530","◈","+9.6%"],["التجديدات هذا الشهر","1,248","↻","+7.4%"],["الإيراد الشهري المتكرر","$124,850","﷼","+18.6%"],["معدل الإلغاء","3.2%","×","-0.6%"],["متوسط قيمة العميل","$182","👤","+4.9%"]], "إضافة اشتراك"],
  invoices: ["إدارة الفواتير", "إدارة الفواتير، المدفوعات، التحصيل، الضرائب، ومتابعة حالة الفوترة عبر المنصة", "▧", [["إجمالي الفواتير","18,245","▧","+12.8%"],["الفواتير المدفوعة","15,870","◈","+9.6%"],["الفواتير المعلقة","1,248","◷","+4.7%"],["الفواتير المحصلة","$186,420","﷼","+14.2%"],["المبالغ المتأخرة","$24,850","⚠","-6.8%"],["متوسط قيمة الفاتورة","$214","▥","+8.3%"]], "إنشاء فاتورة"],
  support: ["إدارة الدعم", "إدارة التذاكر، المحادثات، فرق الدعم، ومتابعة جودة الخدمة عبر المنصة", "☏", [["إجمالي التذاكر","12,845","☏","+14.2%"],["التذاكر المفتوحة","1,248","▢","+8.4%"],["المحادثات المباشرة","86","☏","+12.6%"],["متوسط وقت الاستجابة","2.4 دقيقة","◷","-18.7%"],["رضا العملاء","94.6%","☺","+2.3%"],["التذاكر المتأخرة","132","⚠","-12.8%"]], "إنشاء تذكرة"],
  security: ["إدارة الأمان", "إدارة الأمان والجلسات وسياسات الوصول والمصادقة متعددة العوامل ومراقبة التهديدات", "◈", [["الامتثال والسياسات","98.4%","◈","+1.8%"],["التنبيهات الحرجة","18","⚠","+12.5%"],["الجلسات النشطة","1,248","👥","+5.3%"],["محاولات الدخول المشبوهة","124","⚠","+34.0%"],["الحسابات المحمية MFA","5,832","◎","+8.7%"],["نقاط الأمان","96.8%","◈","+2.4%"]], "إضافة سياسة"],
  analytics: ["إدارة التحليلات", "مراقبة الأداء، المقاييس، الاتجاهات، والتقارير الذكية عبر المنصة", "▥", [["معدل الارتداد","22.8%","↗","-2.1%"],["الإيرادات المحققة","$186,420","﷼","+14.2%"],["متوسط مدة الجلسة","12.4 دقيقة","◷","+3.2%"],["معدل التحويل","4.8%","◎","+1.6%"],["المستخدمون النشطون","58,321","👥","+8.7%"],["إجمالي الزيارات","1.24M","◌","+12.4%"]], "إنشاء تقرير"],
  settings: ["إدارة الإعدادات", "إدارة إعدادات المنصة، الحسابات، التفضيلات، الصلاحيات، والإعدادات التشغيلية العامة", "⚙", [["الإعدادات النشطة","248","⚙","+12"],["التكاملات المفعلة","32","✣","+4"],["سياسات الأمان","18","◈","+2"],["التنبيهات المخصصة","64","🔔","+9"],["النسخ الاحتياطي الأخير","منذ 2 ساعة","↻","مستقر"],["حالة المنصة","99.9%","▥","مستقرة"]], "حفظ التغييرات"],
  "help-center": ["مركز المساعدة", "كل الأدلة والمعلومات التي تحتاجها لإدارة نظام Vexwyn بكفاءة وفعالية", "?", [["حالة النظام","99.32%","▥","مستقر"],["الأدلة المحدثة هذا الشهر","18","▤","+6"],["نسبة حل المشاكل","94%","◎","+3"],["متوسط وقت الرد","2.6 ساعة","◷","-0.4"],["التذاكر المفتوحة","12","▢","-3"],["المقالات الشائعة","386","▧","+22"]], "إنشاء تذكرة"]
};

function adminSidebar(active) {
  return `<aside class="admin-sidebar">${adminLogo()}<div class="admin-profile"><span class="admin-avatar">أ</span><div><strong>أحمد خالد</strong><p>مدير النظام</p><small>● متصل</small></div></div><nav>${vxAdminNav.map(([key, href, icon, label]) => `<a class="${active === key ? "active" : ""}" href="${href}" data-admin-link><span>${label}</span><b>${icon}</b></a>`).join("")}</nav><a class="admin-help ${active === "help-center" ? "active" : ""}" href="${VX_ADMIN_BASE}/help-center" data-admin-link>مركز المساعدة ؟</a><footer>Vexwyn Admin v2.4.0<br>© 2025 جميع الحقوق محفوظة</footer></aside>`;
}

function adminTopbar() {
  return `<header class="admin-topbar"><div class="admin-health"><b></b><span>النظام متصل بالبيانات</span><small>0% حتى تحميل API</small></div><button class="admin-outline" data-admin-modal="إجراءات سريعة">إجراءات سريعة ⚡</button><label class="admin-search"><kbd>⌘K</kbd><input placeholder="البحث في النظام..."></label><button class="admin-square">🔔</button><button class="admin-outline">العربية ◌</button></header>`;
}

function adminShell(active, content) {
  return `<div class="admin-shell" dir="rtl">${adminSidebar(active)}<main>${adminTopbar()}<section class="admin-content">${content}</section></main><div id="admin-modal-root"></div></div>`;
}

function adminStat(title, value, icon, note = "+0%") {
  return `<article class="admin-stat"><span class="admin-icon">${icon}</span><div><p>${title}</p><strong>${value}</strong><small>${note}</small></div></article>`;
}

function vxMiniChart() {
  return `<div class="vx-mini-chart"><i style="height:28%"></i><i style="height:44%"></i><i style="height:34%"></i><i style="height:64%"></i><i style="height:48%"></i><i style="height:78%"></i><i style="height:60%"></i><i style="height:72%"></i></div>`;
}

function vxAdminRows(kind) {
  const rows = {
    users: ["سارة أحمد|مدير فريق|نشط|منذ 5 دقائق","محمد العتيبي|مدير نظام|نشط|منذ 15 دقيقة","نورة المطيري|مستخدم|نشط|منذ 45 دقيقة","علي الحربي|مستخدم|نشط|منذ ساعة"],
    meetings: ["مراجعة خطة المشروع|مباشر الآن|24 مشارك|10:00 ص","جلسة تخطيط الربع القادم|قادم|18 مشارك|1:00 م","مناقشة التصميم النهائي|قادم|12 مشارك|3:00 م","اجتماع متابعة الأداء|منتهي|10 مشاركين|أمس"],
    teams: ["فريق المشروع|18 عضو|نشط|منذ 5 دقائق","التصميم|12 عضو|نشط|منذ 15 دقيقة","التسويق|15 عضو|نشط|منذ 30 دقيقة","الدعم الداخلي|10 أعضاء|مؤرشف|منذ يوم"],
    subscriptions: ["سارة أحمد|Pro|نشط|$99","محمد العتيبي|Business|نشط|$1,188","نورة المطيري|Starter|قيد التجديد|$29","علي الحربي|Enterprise|نشط|$4,800"],
    invoices: ["INV-2025-1048|سارة أحمد|مدفوعة|$99","INV-2025-1072|محمد العتيبي|مدفوعة|$1,188","INV-2025-1115|نورة المطيري|معلقة|$29","INV-2025-1131|علي الحربي|متأخرة|$4,800"],
    support: ["مشكلة في تسجيل الدخول|عالية|مفتوحة|اليوم 10:24","تعذر الانضمام إلى اجتماع|متوسطة|قيد المعالجة|اليوم 9:11","استفسار عن الفاتورة|عالية|قيد المعالجة|أمس"],
    security: ["تسجيل دخول فاشل متكرر|عالي|مفتوح|منذ 5 دقائق","تجميد دخول من موقع غير معتاد|عالي|قيد التحقيق|منذ 15 دقيقة","جهاز جديد بتقييم مخاطرة مرتفع|متوسط|مفتوح|منذ 32 دقيقة"],
    analytics: ["الصفحة الرئيسية|456,321|5.2%|$68,420","صفحة الأسعار|234,567|6.1%|$42,180","صفحة المنتجات|198,321|4.3%|$31,240"],
    settings: ["Slack|متصل|منذ 3 دقائق|⋮","Google Calendar|متصل|منذ 12 دقيقة|⋮","Stripe|متصل|منذ ساعة|⋮","Zoom Import|قيد التحديث|منذ 45 دقيقة|⋮"],
    "help-center": ["كيفية إعداد اجتماع جديد|الاجتماعات|12,458|مايو 15","إدارة صلاحيات المستخدمين|إدارة المستخدمين|9,876|مايو 12","ربط Google Calendar|API|7,654|مايو 10"]
  }[kind] || [];
  return rows.map((row) => `<div class="vx-admin-row">${row.split("|").map((cell) => `<span>${cell}</span>`).join("")}<button data-admin-modal="عرض التفاصيل">⋯</button></div>`).join("");
}

function vxAdminTable(key) {
  return `<section class="admin-panel vx-admin-table"><div class="admin-panel-head"><h2>${key === "overview" ? "المستخدمون الجدد" : "السجلات الأخيرة"}</h2><button class="admin-ghost" data-admin-modal="عرض الكل">عرض الكل</button></div><div class="vx-admin-filters"><button class="active">الكل</button><button>نشط</button><button>معلقة</button><input placeholder="ابحث هنا..."></div>${vxAdminRows(key || "users")}</section>`;
}

function vxAdminSidePanel(key) {
  return `<aside class="vx-admin-side">
    <section class="admin-panel"><h2>تفاصيل ${vxPages[key]?.[0]?.replace("إدارة ", "") || "النظام"}</h2><div class="vx-ring"><b>0</b><span>${vxPages[key][3][0][0]}</span></div><p class="vx-muted">مرتبط بالبيانات الحقيقية من API</p><button class="admin-primary" data-admin-modal="عرض التفاصيل">عرض التفاصيل</button><button class="admin-outline" data-admin-modal="تعديل">تعديل</button></section>
    <section class="admin-panel"><h2>نشاط آخر 30 يوماً</h2>${vxMiniChart()}<strong>${vxPages[key][3][1][1]}</strong><p class="vx-muted">${vxPages[key][3][1][0]}</p></section>
  </aside>`;
}

function adminGenericPage(key = "overview") {
  const page = vxPages[key] || vxPages.overview;
  const [title, subtitle, icon, stats, primary] = page;
  return adminShell(key, `<div class="admin-actions"><button class="admin-primary" data-admin-modal="${primary}">＋ ${primary}</button><button class="admin-outline" data-admin-modal="تصدير">تصدير ⇩</button><button class="admin-outline" data-admin-modal="تصفية">تصفية ⌕</button></div><section class="admin-hero vx-admin-hero"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="admin-hero-art"><span>${icon}</span></div></section><section class="admin-kpis">${stats.map(([a,b,c,d]) => adminStat(a,b,c,d)).join("")}</section><section class="vx-admin-layout"><div>${vxAdminTable(key)}<div class="admin-panel"><h2>نمو المنصة</h2>${vxMiniChart()}</div></div>${vxAdminSidePanel(key)}</section><section class="admin-feature-row"><article>أمان على مستوى المؤسسات<span>تشفير متقدم وسجل تدقيق شامل.</span></article><article>التحكم في الأدوار والصلاحيات<span>إدارة دقيقة للمستخدمين والفرق.</span></article><article>سجلات التدقيق والمراجعة<span>تتبع كامل لكل الأنشطة والتغييرات.</span></article></section>`);
}

function adminOverview() {
  return adminGenericPage("overview");
}

function adminLogin() {
  return `<main class="admin-login vx-admin-login" dir="rtl"><header>${adminLogo()}<nav><a href="#/">العودة إلى الموقع ←</a><span>العربية ◌</span><span>مركز المساعدة ؟</span></nav></header><section><aside class="admin-login-showcase"><div class="admin-shield">▣</div><h1><span>Vexwyn</span> بوابة إدارة</h1><h2>تسجيل دخول المسؤولين</h2><p>وصول آمن لإدارة المنصة وفرق العمليات بكفاءة ومراقبة موثوقة على كل ما يتم داخل أعمالك.</p><div class="admin-login-mini">${adminStat("حالة المنصة","99.9%","▥","تعمل بكفاءة")}${adminStat("الاجتماعات النشطة","1,248","▣","+12%")}${adminStat("تنبيهات الأمان","2","◈","يتطلب إجراء")}</div><div class="vx-admin-login-strip"><span>مراقبة الجلسات</span><span>حماية متعددة الطبقات</span><span>مشفر وآمن</span></div></aside><form class="admin-login-card" id="admin-login-form"><h1>تسجيل الدخول إلى لوحة الإدارة</h1><p>يرجى استخدام بيانات اعتماد المسؤول للوصول إلى لوحة التحكم وإدارة إعدادات المنصة بأمان.</p><label>البريد الإداري<input name="email" type="email" value="${VX_ADMIN_EMAIL}" placeholder="أدخل البريد الإداري" required></label><label>كلمة المرور<input name="password" type="password" value="${VX_ADMIN_PASSWORD}" placeholder="أدخل كلمة المرور" required></label><label>رمز التحقق الثنائي<input name="mfa" inputmode="numeric" value="${VX_ADMIN_MFA}" placeholder="أدخل رمز التحقق"></label><div class="admin-login-row"><label><input type="checkbox"> تذكر هذا الجهاز</label><a href="#">نسيت كلمة المرور؟</a></div><button class="admin-primary" type="submit">دخول آمن 🔒</button><div class="admin-divider">أو</div><button class="admin-outline" type="button" data-admin-modal="تسجيل الدخول عبر SSO">تسجيل الدخول عبر SSO ◈</button><div class="vx-temp-creds"><b>بيانات دخول مؤقتة</b><span>${VX_ADMIN_EMAIL}</span><span>${VX_ADMIN_PASSWORD}</span><span>MFA: ${VX_ADMIN_MFA}</span></div></form></section><footer>جميع الحقوق محفوظة © 2025 Vexwyn</footer><div id="admin-modal-root"></div></main>`;
}

function renderAdminRoute(path) {
  const normalized = path.replace("/admin", VX_ADMIN_BASE).replace(/\/$/, "");
  if (normalized === `${VX_ADMIN_BASE}/login`) return adminLogin();
  if (!isAdminSignedIn()) {
    history.replaceState(null, "", `${VX_ADMIN_BASE}/login`);
    return adminLogin();
  }
  const key = normalized === VX_ADMIN_BASE ? "overview" : normalized.replace(`${VX_ADMIN_BASE}/`, "");
  if (key === "overview") return adminOverview();
  if (vxPages[key]) return adminGenericPage(key);
  return adminGenericPage("overview");
}

function bindAdmin() {
  document.querySelectorAll("[data-admin-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !(href.startsWith(VX_ADMIN_BASE) || href.startsWith("/admin"))) return;
      event.preventDefault();
      history.pushState(null, "", href.replace("/admin", VX_ADMIN_BASE));
      route();
    });
  });
  const form = document.getElementById("admin-login-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = data.get("email");
      const password = data.get("password");
      const mfa = data.get("mfa");
      if (email !== VX_ADMIN_EMAIL || password !== VX_ADMIN_PASSWORD || mfa !== VX_ADMIN_MFA) {
        showAdminModal("بيانات الدخول غير صحيحة");
        return;
      }
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ role: "admin", name: "أحمد خالد", createdAt: new Date().toISOString() }));
      history.pushState(null, "", VX_ADMIN_BASE);
      route();
    });
  }
  document.querySelectorAll("[data-admin-modal]").forEach((button) => {
    button.addEventListener("click", () => showAdminModal(button.dataset.adminModal));
  });
}

function login() {
  return `<div class="bg-orbit"></div><main class="login-page auth-page" dir="rtl">
    <section class="login-card">
      ${brand()}<h1>تسجيل الدخول</h1><p>سجل دخولك للوصول إلى اجتماعاتك وإدارة فريقك بسهولة</p>
      <form id="login-form" novalidate>
        <div class="field"><label>البريد الإلكتروني</label><input name="email" type="email" placeholder="name@company.com"></div>
        <div class="field"><label>كلمة المرور</label><input name="password" placeholder="••••••••••••" type="password"></div>
        <div class="row-between"><button class="auth-link gradient-text" type="button" data-auth-demo>نسيت كلمة المرور؟</button><label><input type="checkbox" checked> تذكرني</label></div>
        <button class="primary-btn" style="width:100%;margin:22px 0" type="submit">تسجيل الدخول</button>
      </form>
      <a class="outline-btn" style="width:100%" href="#/signup">إنشاء حساب جديد</a>
      <div class="row-between auth-divider"><span></span>أو<span></span></div>
      <button class="outline-btn" style="width:100%" type="button" data-auth-demo>G المتابعة بحساب العمل</button>
      <p>${icons.shield} دخول آمن ومشفر</p>
    </section>
    <section class="login-left"><h2><span class="gradient-text">اجتماعات أكثر إنتاجية.</span><br>تواصل أوضح. فرق أقوى.</h2><p>من مكالمات الفيديو إلى إدارة المهام والتقويم، كل ما تحتاجه في منصة واحدة متكاملة.</p><div class="meeting-stage">${videoMockup()}${scheduleCard()}</div></section>
  </main>`;
}

function signup() {
  return `<div class="bg-orbit"></div><main class="login-page auth-page signup-page" dir="rtl">
    <section class="login-card">
      ${brand()}<h1>إنشاء حساب جديد</h1><p>ابدأ مساحة Vexwyn لفريقك خلال لحظات.</p>
      <form id="signup-form" novalidate>
        <div class="field"><label>الاسم الكامل</label><input name="name" placeholder="أحمد خالد"></div>
        <div class="field"><label>البريد الإلكتروني</label><input name="email" type="email" placeholder="name@company.com"></div>
        <div class="field"><label>اسم الفريق أو الشركة</label><input name="team" placeholder="فريق المشروع"></div>
        <div class="field"><label>كلمة المرور</label><input name="password" placeholder="••••••••••••" type="password"></div>
        <label class="auth-check"><input type="checkbox" checked> أوافق على شروط الاستخدام وسياسة الخصوصية</label>
        <button class="primary-btn" style="width:100%;margin:20px 0 12px" type="submit">إنشاء الحساب والدخول</button>
      </form>
      <a class="outline-btn" style="width:100%" href="#/login">لدي حساب بالفعل</a>
      <p>${icons.shield} تجربة آمنة ومشفرة</p>
    </section>
    <section class="login-left"><h2><span class="gradient-text">ابدأ مجانا.</span><br>نظم اجتماعاتك وملفاتك من مكان واحد.</h2><p>سيتم إنشاء مساحة تجريبية لك مباشرة، ويمكنك تعديل بيانات الفريق لاحقا من الإعدادات.</p><div class="meeting-stage">${videoMockup()}${scheduleCard()}</div></section>
  </main>`;
}

function bindAuth() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      localStorage.setItem("vexwyn-user-session", JSON.stringify({
        type: "login",
        email: data.get("email") || "user@vexwyn.com",
        createdAt: new Date().toISOString()
      }));
      location.hash = "#/app";
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(signupForm);
      localStorage.setItem("vexwyn-user-session", JSON.stringify({
        type: "signup",
        name: data.get("name") || "أحمد خالد",
        email: data.get("email") || "user@vexwyn.com",
        team: data.get("team") || "فريق المشروع",
        createdAt: new Date().toISOString()
      }));
      location.hash = "#/app";
    });
  }

  document.querySelectorAll("[data-auth-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("vexwyn-user-session", JSON.stringify({ type: "work-account", createdAt: new Date().toISOString() }));
      location.hash = "#/app";
    });
  });
}

function publicHeader(active = "") {
  return `
    <header class="public-header vx-header">
      ${brand()}
      <nav class="public-nav">
        <button class="nav-link ${active==="products"?"active":""}" data-mega="products">المنتجات⌄</button>
        <a class="nav-link ${active==="pricing"?"active":""}" href="#/pricing">الأسعار</a>
        <button class="nav-link ${active==="resources"?"active":""}" data-mega="resources">الموارد⌄</button>
        <button class="nav-link ${active==="company"?"active":""}" data-mega="company">الشركة</button>
        <button class="nav-link ${active==="contact"?"active":""}" data-mega="contact">تواصل معنا</button>
      </nav>
      <div class="public-actions">
        <span class="ghost-btn">العربية ◌</span>
        <a class="ghost-btn" href="#/login">تسجيل الدخول</a>
        <a class="primary-btn" href="#/signup">ابدأ مجانا</a>
      </div>
    </header>
    <div id="mega-root"></div>
  `;
}

function vxMetricCards(key) {
  const cards = {
    overview: [
      ["إجمالي المستخدمين", "users.total", "👤"],
      ["المستخدمون النشطون", "users.active", "👥"],
      ["إجمالي الفرق", "teams.total", "♙"],
      ["الاجتماعات المباشرة", "meetings.liveNow", "▣"],
      ["الإيراد هذا الشهر", "billing.revenueThisMonth", "﷼", { money: true }],
      ["تذاكر الدعم المفتوحة", "support.openTickets", "☏"]
    ],
    users: [
      ["إجمالي المستخدمين", "total", "👥"],
      ["النشطون", "active", "●"],
      ["المعلقون", "suspended", "Ⅱ"],
      ["بانتظار التفعيل", "pending", "◌"],
      ["مسؤولو النظام", "admins", "👤"],
      ["حسابات MFA", "mfaEnabled", "◈"]
    ],
    meetings: [
      ["إجمالي الاجتماعات", "total", "▣"],
      ["مباشر الآن", "liveNow", "●"],
      ["مجدولة اليوم", "scheduledToday", "◷"]
    ],
    teams: [
      ["إجمالي الفرق", "total", "♙"],
      ["الفرق النشطة", "active", "●"]
    ],
    subscriptions: [
      ["إجمالي الاشتراكات", "total", "▤"],
      ["الاشتراكات النشطة", "active", "●"]
    ],
    invoices: [
      ["إجمالي الفواتير", "total", "▧"],
      ["الفواتير المدفوعة", "paid", "●"],
      ["إيراد الشهر", "revenueThisMonth", "﷼", { money: true }]
    ],
    support: [
      ["إجمالي التذاكر", "total", "☏"],
      ["المفتوحة", "open", "●"]
    ],
    security: [
      ["إجمالي التنبيهات", "total", "◈"],
      ["المفتوحة", "open", "●"],
      ["الحرجة", "critical", "⚠"]
    ],
    analytics: [
      ["إجمالي المستخدمين", "users.total", "👤"],
      ["إجمالي الاجتماعات", "meetings.total", "▣"],
      ["إيراد الشهر", "billing.revenueThisMonth", "﷼", { money: true }]
    ],
    settings: [
      ["الإعدادات المحفوظة", "total", "⚙"]
    ],
    "help-center": [
      ["حالة النظام", "status", "●"],
      ["قاعدة البيانات", "database", "▣"]
    ]
  };

  return cards[key] || cards.overview;
}

function vxValueFromPath(source, path) {
  return path.split(".").reduce((value, part) => value && value[part], source);
}

function adminMetric(title, path, icon, options = {}) {
  return `<article class="admin-stat"><span class="admin-icon">${icon}</span><div><p>${title}</p><strong data-admin-metric="${path}" data-money="${options.money ? "true" : "false"}" data-percent="${options.percent ? "true" : "false"}">0</strong><small data-admin-note="${path}">بيانات حقيقية من PostgreSQL</small></div></article>`;
}

function adminApiBanner() {
  if (vxApiReady()) {
    return `<div class="vx-api-banner vx-api-loading" data-api-status>جاري قراءة البيانات الحقيقية من PostgreSQL...</div>`;
  }
  if (VX_ENABLE_DEMO_DATA) {
    return `<div class="vx-api-banner vx-api-demo" data-api-status>وضع demo مفعل. لا تستخدمه في الإنتاج.</div>`;
  }
  return `<div class="vx-api-banner vx-api-warning" data-api-status>لم يتم ضبط رابط الباكند. ضع رابط Render في config.js أو localStorage باسم VEXWYN_API_URL.</div>`;
}

function adminGenericPage(key = "overview") {
  const page = vxPages[key] || vxPages.overview;
  const [title, subtitle, icon, stats, primary] = page;
  const metricCards = VX_ENABLE_DEMO_DATA
    ? stats.map(([a, b, c]) => adminStat(a, "0", c, "مرتبط بالبيانات الحقيقية")).join("")
    : vxMetricCards(key).map(([titleText, metricPath, metricIcon, options]) => adminMetric(titleText, metricPath, metricIcon, options)).join("");

  return adminShell(key, `<div class="admin-actions"><button class="admin-primary" data-admin-modal="${primary}">＋ ${primary}</button><button class="admin-outline" data-admin-modal="تصدير">تصدير ⇩</button><button class="admin-outline" data-admin-modal="تصفية">تصفية ⌕</button></div>${adminApiBanner()}<section class="admin-hero vx-admin-hero"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="admin-hero-art"><span>${icon}</span></div></section><section class="admin-kpis">${metricCards}</section><section class="vx-admin-layout"><div>${vxAdminTable(key)}<div class="admin-panel"><h2>نشاط المنصة</h2>${VX_ENABLE_DEMO_DATA ? vxMiniChart() : '<p class="vx-empty-state">لا توجد بيانات كافية حتى الآن.</p>'}</div></div>${vxAdminSidePanel(key)}</section><section class="admin-feature-row"><article>أمان على مستوى المؤسسات<span>تشفير متقدم وسجل تدقيق شامل.</span></article><article>التحكم في الأدوار والصلاحيات<span>إدارة دقيقة للمستخدمين والفرق.</span></article><article>سجلات التدقيق والمراجعة<span>تتبع كامل لكل الأنشطة والتغييرات.</span></article></section>`);
}

function adminLogin() {
  const apiHint = vxApiReady()
    ? "سيتم تسجيل الدخول عبر الباكند المنشور على Render."
    : "رابط الباكند غير مضبوط بعد. ضع Render URL في config.js.";

  return `<main class="admin-login vx-admin-login" dir="rtl"><header>${adminLogo()}<nav><a href="#/">العودة إلى الموقع ←</a><span>العربية ◌</span><span>مركز المساعدة ؟</span></nav></header><section><aside class="admin-login-showcase"><div class="admin-shield">▣</div><h1><span>Vexwyn</span> بوابة إدارة</h1><h2>تسجيل دخول المسؤولين</h2><p>وصول آمن لإدارة المنصة وقراءة البيانات الحقيقية من PostgreSQL عبر Render.</p><div class="admin-login-mini">${adminStat("مصدر البيانات","PostgreSQL","▥","بدون بيانات وهمية")}${adminStat("حالة API", vxApiReady() ? "متصل" : "غير مضبوط","▣", apiHint)}${adminStat("وضع Demo", VX_ENABLE_DEMO_DATA ? "مفعل" : "مغلق","◈","الإنتاج يتطلب false")}</div></aside><form class="admin-login-card" id="admin-login-form" novalidate><h1>تسجيل الدخول إلى لوحة الإدارة</h1><p>${apiHint}</p><label>البريد الإداري<input name="email" type="email" placeholder="admin@vexwyn.com"></label><label>كلمة المرور<input name="password" type="password" placeholder="أدخل كلمة المرور"></label><button class="admin-primary" type="submit">دخول آمن 🔒</button><div class="admin-divider">أو</div><button class="admin-outline" type="button" data-admin-modal="SSO يحتاج تفعيل مزود الهوية في الباكند">تسجيل الدخول عبر SSO ◈</button></form></section><footer>جميع الحقوق محفوظة © 2025 Vexwyn</footer><div id="admin-modal-root"></div></main>`;
}

async function hydrateAdminPage(key) {
  const banner = document.querySelector("[data-api-status]");
  if (!vxApiReady() || VX_ENABLE_DEMO_DATA) return;

  try {
    const endpoint = key === "overview"
      ? "/api/admin/overview"
      : `/api/admin/${key === "help-center" ? "overview" : key}/stats`;
    const data = await vxApiFetch(endpoint);

    document.querySelectorAll("[data-admin-metric]").forEach((node) => {
      const path = node.dataset.adminMetric;
      const value = vxValueFromPath(data, path);
      node.textContent = vxFormatMetric(value, {
        money: node.dataset.money === "true",
        percent: node.dataset.percent === "true"
      });
    });

    document.querySelectorAll("[data-admin-note]").forEach((node) => {
      node.textContent = data.empty ? "لا توجد بيانات كافية حتى الآن" : "محدث من قاعدة البيانات";
    });

    if (banner) {
      banner.className = "vx-api-banner vx-api-ok";
      banner.textContent = "تم تحميل البيانات الحقيقية من PostgreSQL.";
    }
  } catch (error) {
    if (banner) {
      banner.className = "vx-api-banner vx-api-error";
      banner.textContent = `تعذر قراءة بيانات PostgreSQL: ${error.message}`;
    }
  }
}

function bindAdmin() {
  document.querySelectorAll("[data-admin-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !(href.startsWith(VX_ADMIN_BASE) || href.startsWith("/admin"))) return;
      event.preventDefault();
      history.pushState(null, "", href.replace("/admin", VX_ADMIN_BASE));
      route();
    });
  });

  const form = document.getElementById("admin-login-form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = data.get("email");
      const password = data.get("password");

      try {
        if (vxApiReady()) {
          const result = await vxApiFetch("/api/admin/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
          });
          localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
            role: result.user.role,
            name: result.user.name,
            createdAt: new Date().toISOString()
          }));
        } else if (VX_ENABLE_DEMO_DATA && email === VX_ADMIN_EMAIL && password === VX_ADMIN_PASSWORD) {
          localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ role: "admin", name: "Demo Admin", createdAt: new Date().toISOString() }));
        } else {
          showAdminModal("رابط الباكند غير مضبوط. أضف Render URL في config.js قبل تسجيل الدخول.");
          return;
        }

        history.pushState(null, "", VX_ADMIN_BASE);
        route();
      } catch (error) {
        showAdminModal(`تعذر تسجيل الدخول: ${error.message}`);
      }
    });
  }

  document.querySelectorAll("[data-admin-modal]").forEach((button) => {
    button.addEventListener("click", () => showAdminModal(button.dataset.adminModal));
  });
}

function route() {
  const directAdminPath = adminPath();
  if (directAdminPath) {
    const app = document.getElementById("app");
    app.innerHTML = renderAdminRoute(directAdminPath);
    bindAdmin();
    const normalized = directAdminPath.replace("/admin", VX_ADMIN_BASE).replace(/\/$/, "");
    const key = normalized === VX_ADMIN_BASE ? "overview" : normalized.replace(`${VX_ADMIN_BASE}/`, "");
    if (isAdminSignedIn()) hydrateAdminPage(key);
    return;
  }
  const hash = location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");
  if (hash === "/" || hash === "") app.innerHTML = landing();
  else if (hash === "/login") app.innerHTML = login();
  else if (hash === "/signup") app.innerHTML = signup();
  else if (hash === "/pricing") app.innerHTML = pricing(true);
  else if (hash === "/contact") app.innerHTML = contactPage();
  else if (hash === "/app") app.innerHTML = dashboard();
  else if (hash === "/app/meetings/room") app.innerHTML = meetingRoom();
  else if (hash === "/app/meetings") app.innerHTML = meetings();
  else if (hash === "/app/calendar") app.innerHTML = calendar();
  else if (hash === "/app/messages") app.innerHTML = messages();
  else if (hash === "/app/teams") app.innerHTML = teams();
  else if (hash === "/app/files") app.innerHTML = files();
  else if (hash === "/app/settings") app.innerHTML = settings();
  else if (hash === "/app/billing" || hash === "/app/upgrade") app.innerHTML = billing();
  else if (hash === "/app/profile") app.innerHTML = settings();
  else if (hash === "/app/help") app.innerHTML = helpCenter();
  else app.innerHTML = landing();
  bindMega();
  bindAuth();
  bindAppInteractions();
}

if (!window.__vexwynPopstateBound) {
  window.addEventListener("popstate", route);
  window.__vexwynPopstateBound = true;
}

route();
