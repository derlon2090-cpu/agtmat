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
      <section class="panel"><h3>لوحة التحكم ▦</h3><div class="stats-grid">${["الاجتماعات اليوم|6","إجمالي المشاركين|128","ساعات الاجتماعات|24.5","مستوى المشاركة|85%"].map((s,i)=>{const [a,b]=s.split("|");return `<div class="stat-box"><span>${a}</span><b>${b}</b>${i<3?`<div class="spark"></div>`:`<div class="ring"></div>`}</div>`}).join("")}</div></section>
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
        <div class="cards-4">${["اجتماعات اليوم|6","إجمالي الساعات|48.5","المشاركون النشطون|128","معدل الحضور|92%"].map(card).join("")}</div>
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
  return `${miniPanel("جدول اليوم", ["10:00 مراجعة خطة المشروع","12:00 جلسة تخطيط الربع القادم","15:00 مناقشة التصميم النهائي"])}<br>${miniPanel("إحصائيات", ["12 اجتماعات هذا الأسبوع","18.4 إجمالي ساعات الاجتماعات","92% متوسط الحضور"])}`;
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
  return shell("files", listPage("الملفات", "إدارة ملفات فريقك وتنظيم المجلدات والوصول السريع إلى المستندات", ["رفع ملف", "مجلد جديد"], `<div class="folders-grid">${["فريق المشروع","التصميم","التسويق","العقود","العروض","التسجيلات"].map(f=>`<article class="folder-card"><span class="icon-box">${icons.folder}</span><h3>${f}</h3><p>${Math.floor(Math.random()*30)+9} ملف</p>${avatars(4)}</article>`).join("")}</div><div class="file-table">${rows.map(r=>`<div class="file-row"><b>${r[0]}</b><span>${r[1]}</span><span>${r[2]}</span><span>منذ 15 دقيقة</span><span class="status ${r[3]==="خاص"?"upcoming":"live"}">${r[3]}</span></div>`).join("")}</div>`));
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
route();
