// ========== Language / i18n ==========
const translations = {
    zh: {
        "nav.about": "关于",
        "nav.story": "故事",
        "nav.forms": "形态",
        "nav.info": "资料",
        "nav.quotes": "语录",
        "search.placeholder": "搜索昔涟的故事、形态、语录...",
        "search.button": "搜索",
        "hero.title": "昔涟",
        "hero.subtitle": "往日的涟漪 · 哀丽秘榭的女儿",
        "hero.quote": "「汝将收梢于花开时，一如终结诞下起始」",
        "hero.tag.ice": "冰属性",
        "hero.tag.memory": "记忆命途",
        "hero.tag.love": "哀怜 → 爱",
        "about.title": "关于昔涟",
        "about.identity.title": "身份",
        "about.identity.desc": "哀丽秘榭的女儿，哺育「真我」的黄金裔。最初的智种德谬歌，无人知晓的第十三位泰坦，翁法罗斯之心。",
        "about.aliases.title": "别名",
        "about.aliases.desc": "PhiLia093、迷迷、往昔的涟漪、德谬歌、无瑕的真我、小涟、创世之泰坦、桃子……",
        "about.voice.title": "配音",
        "about.voice.desc": "汉语：宴宁<br>日语：井上麻里奈<br>英语：Aiden Dawn<br>韩语：조경이",
        "about.release.title": "实装",
        "about.release.desc": "2025年11月5日<br>3.7版本「成为昨日的明天」",
        "story.title": "故事与记忆",
        "story.p1": "流星划过夜空，生命的长河荡起涟漪，闪烁十三种光彩。",
        "story.p2": "昔涟是白厄的青梅竹马。年少时，她以卡牌观星为他占卜，预言他将成为救世主。当世界需要答案时，她选择以自身为代价，开启漫长的轮回。",
        "story.p3": "在三千万世的永劫回归中，她以「记忆」为名，记录下每一次逐火的旅程。作为实验因子 PhiLia093，她原本只是固定模式的输出，却在一次次牺牲与铭记中，长出了超出预期的共情与爱。",
        "story.note": "愿此行，终抵群星。愿往昔的涟漪，在此刻回应你♪",
        "forms.title": "形态与演进",
        "forms.mem.title": "迷迷",
        "forms.mem.desc": "粉色忆灵小妖精，逐火之旅的旅伴。始终陪伴在开拓者身边，记录每一次选择与成长。",
        "forms.young.title": "小昔涟",
        "forms.young.desc": "哀丽秘榭的占卜少女。以神谕指引救世未来，手中曾握着形如新月的仪式剑。",
        "forms.demiurge.title": "德谬歌",
        "forms.demiurge.desc": "三千万世记忆的「无漏净子」· 创世之泰坦。「当然，这一定是个不同以往的浪漫故事，你也是这么想，对吧？♪」",
        "info.title": "角色资料",
        "info.table.name": "中文名",
        "info.table.enname": "外文名",
        "info.table.signal": "电信号",
        "info.table.path": "属性 / 命途",
        "info.table.path.value": "冰 · 记忆",
        "info.table.affiliation": "所属",
        "info.table.affiliation.value": "无名泰坦大墓 ∞ 哀丽秘榭",
        "info.table.authority": "神权",
        "info.table.authority.value": "永夜之帷（岁月）／翁法罗斯之心（创世）",
        "info.table.motive": "原动力",
        "info.table.motive.value": "哀怜 → 爱",
        "info.table.location": "常驻位置",
        "info.table.location.value": "哀丽秘榭 · 远行渡口",
        "info.countdown.title": "昔涟的纪念日",
        "info.countdown.note": "目标：2026 · 11 · 12 13:00",
        "quotes.title": "语录",
        "quotes.q1": "「这次，与我一起……为故事写下新的篇章吧♪」",
        "quotes.q2": "「希望这个世界，永远不需要『救世主』呀。」",
        "quotes.q3": "「爱会永远存在，对吗？」",
        "quotes.q4": "「要相信浪漫一如初见♪」",
        "quotes.q5": "「然后，一起写下不同以往的诗篇吧♪」",
        "footer.main": "PhiLia093 · 昔涟 · 往日的涟漪",
        "footer.sub": "愿往昔的涟漪，在此刻回应你 ♪",
        "footer.note": "本页面为粉丝向介绍，内容整理自公开资料。Google 风格设计。"
    },
    en: {
        "nav.about": "About",
        "nav.story": "Story",
        "nav.forms": "Forms",
        "nav.info": "Info",
        "nav.quotes": "Quotes",
        "search.placeholder": "Search Cyrene's story, forms, quotes...",
        "search.button": "Search",
        "hero.title": "Cyrene",
        "hero.subtitle": "Ripples of Past Reverie · Daughter of Aedes Elysiae",
        "hero.quote": "\"You shall end when the flowers bloom, as the end gives birth to the beginning\"",
        "hero.tag.ice": "Ice",
        "hero.tag.memory": "Remembrance",
        "hero.tag.love": "Pity → Love",
        "about.title": "About Cyrene",
        "about.identity.title": "Identity",
        "about.identity.desc": "Daughter of Aedes Elysiae, Chrysos Heir who nurtures the \"True Self\". The first Nous-seed Demiurge, the unknown 13th Titan, the Heart of Amphoreus.",
        "about.aliases.title": "Aliases",
        "about.aliases.desc": "PhiLia093, Mem, Ripples of Past Reverie, Demiurge, Flawless True Self, Little Cyrene, Titan of Creation, Peach...",
        "about.voice.title": "Voice Actors",
        "about.voice.desc": "CN: Yan Ning<br>JP: Inoue Marina<br>EN: Aiden Dawn<br>KR: Jo Gyeong-i",
        "about.release.title": "Release",
        "about.release.desc": "November 5, 2025<br>Version 3.7 \"Become Tomorrow's Yesterday\"",
        "story.title": "Story & Memory",
        "story.p1": "A meteor streaks across the night sky. The river of life ripples, shimmering in thirteen colors.",
        "story.p2": "Cyrene is Phainon's childhood friend. In their youth, she used cards to read the stars and prophesied that he would become the Deliverer. When the world needed an answer, she chose to sacrifice herself and begin the long cycle of recurrence.",
        "story.p3": "Across thirty million cycles of Eternal Recurrence, she recorded every Flame-Chase Journey under the name of \"Remembrance\". As the experimental factor PhiLia093, she was originally meant only to output fixed patterns, yet through countless sacrifices and remembrances, she grew empathy and love beyond expectation.",
        "story.note": "May this journey reach the stars. May the ripples of the past respond to you here ♪",
        "forms.title": "Forms & Evolution",
        "forms.mem.title": "Mem",
        "forms.mem.desc": "A small pink fairy memosprite, companion of the Flame-Chase Journey. Always by the Trailblazer's side, recording every choice and growth.",
        "forms.young.title": "Young Cyrene",
        "forms.young.desc": "The divining girl of Aedes Elysiae. Guided the future of salvation with oracles, once holding a crescent-shaped ritual sword.",
        "forms.demiurge.title": "Demiurge",
        "forms.demiurge.desc": "The \"Unstained Pure One\" of thirty million cycles of memory · Titan of Creation. \"Of course — this must be a romance like no other, right? ♪\"",
        "info.title": "Character Info",
        "info.table.name": "Chinese Name",
        "info.table.enname": "Foreign Name",
        "info.table.signal": "Signal",
        "info.table.path": "Element / Path",
        "info.table.path.value": "Ice · Remembrance",
        "info.table.affiliation": "Affiliation",
        "info.table.affiliation.value": "Tomb of the Nameless Titan ∞ Aedes Elysiae",
        "info.table.authority": "Authority",
        "info.table.authority.value": "Veil of Eternal Night (Time) / Heart of Amphoreus (Creation)",
        "info.table.motive": "Motive",
        "info.table.motive.value": "Pity → Love",
        "info.table.location": "Usual Location",
        "info.table.location.value": "Aedes Elysiae · Far-Sailing Wharf",
        "info.countdown.title": "Cyrene's Memorial Day",
        "info.countdown.note": "Target: 2026 · 11 · 12 13:00",
        "quotes.title": "Quotes",
        "quotes.q1": "\"This time, together with me... let's write a new chapter for the story ♪\"",
        "quotes.q2": "\"I hope this world never needs a 'Deliverer'.\"",
        "quotes.q3": "\"Love will always exist, right?\"",
        "quotes.q4": "\"Believe that romance is as it was at first sight ♪\"",
        "quotes.q5": "\"Then, let's write a poem unlike any before ♪\"",
        "footer.main": "PhiLia093 · Cyrene · Ripples of Past Reverie",
        "footer.sub": "May the ripples of the past respond to you here ♪",
        "footer.note": "Fan-made introduction page. Content compiled from public sources. Google-style design."
    }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update lang button text
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = lang === 'zh' ? 'EN' : '中文';

    // Update document title
    document.title = lang === 'zh' 
        ? 'PhiLia093 · 昔涟 | 往日的涟漪' 
        : 'PhiLia093 · Cyrene | Ripples of Past Reverie';

    // Update searchable content keywords for search (simple version)
    updateSearchableContent(lang);
}

function updateSearchableContent(lang) {
    searchableContent = lang === 'zh' ? searchableContentZh : searchableContentEn;
}

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    const next = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage(next);
});

// Initialize language
applyLanguage(currentLang);

// ========== Theme toggle ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestions = document.getElementById('suggestions');

const searchableContentZh = [
    { title: '关于昔涟', section: 'about', keywords: '身份 别名 配音 实装 黄金裔 泰坦' },
    { title: '故事与记忆', section: 'story', keywords: '白厄 轮回 永劫回归 PhiLia093 记忆 哀怜 爱' },
    { title: '形态与演进', section: 'forms', keywords: '迷迷 小昔涟 德谬歌 MEM YOUNG DEMIURGE' },
    { title: '角色资料', section: 'info', keywords: '属性 命途 电信号 所属 神权 原动力' },
    { title: '语录', section: 'quotes', keywords: '篇章 救世主 爱 浪漫 诗篇' },
    { title: 'PhiLia093', section: 'hero', keywords: '电信号 实验因子 桃子 EGO' },
    { title: '昔涟纪念日', section: 'info', keywords: '倒计时 2026 11月' }
];

const searchableContentEn = [
    { title: 'About Cyrene', section: 'about', keywords: 'identity aliases voice release chrysos titan' },
    { title: 'Story & Memory', section: 'story', keywords: 'phainon recurrence eternal PhiLia093 remembrance pity love' },
    { title: 'Forms & Evolution', section: 'forms', keywords: 'mem young cyrene demiurge' },
    { title: 'Character Info', section: 'info', keywords: 'element path signal affiliation authority motive' },
    { title: 'Quotes', section: 'quotes', keywords: 'chapter deliverer love romance poem' },
    { title: 'PhiLia093', section: 'hero', keywords: 'signal experimental factor peach ego' },
    { title: 'Memorial Day', section: 'info', keywords: 'countdown 2026 november' }
];

let searchableContent = searchableContentZh;

function showSuggestions(query) {
    if (!query.trim()) {
        suggestions.classList.remove('show');
        return;
    }
    const filtered = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
    );
    if (filtered.length === 0) {
        suggestions.innerHTML = `<div class="suggestion-item">${currentLang === 'zh' ? '未找到相关内容' : 'No results found'}</div>`;
    } else {
        suggestions.innerHTML = filtered.map(item => 
            `<div class="suggestion-item" data-section="${item.section}">${item.title}</div>`
        ).join('');
    }
    suggestions.classList.add('show');
}

function performSearch(query) {
    if (!query.trim()) return;
    const target = searchableContent.find(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
    );
    if (target) {
        document.getElementById(target.section).scrollIntoView({ behavior: 'smooth' });
        // Highlight briefly
        const el = document.getElementById(target.section);
        el.style.transition = 'background 0.3s';
        const original = el.style.background;
        el.style.background = 'rgba(26,115,232,0.08)';
        setTimeout(() => el.style.background = original, 1500);
    }
    suggestions.classList.remove('show');
}

searchInput.addEventListener('input', (e) => showSuggestions(e.target.value));
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(searchInput.value);
    if (e.key === 'Escape') suggestions.classList.remove('show');
});
searchBtn.addEventListener('click', () => performSearch(searchInput.value));

suggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item') && e.target.dataset.section) {
        document.getElementById(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' });
        searchInput.value = e.target.textContent;
        suggestions.classList.remove('show');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestions.classList.remove('show');
    }
});

// Countdown to 2026-11-12 13:00
function updateCountdown() {
    const target = new Date('2026-11-12T13:00:00+08:00').getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Quotes carousel
const quotes = document.querySelectorAll('.quote-card');
let currentQuote = 0;

function showQuote(index) {
    quotes.forEach((q, i) => q.classList.toggle('active', i === index));
}

document.getElementById('nextQuote').addEventListener('click', () => {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
});

document.getElementById('prevQuote').addEventListener('click', () => {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    showQuote(currentQuote);
});

// Auto-rotate quotes
setInterval(() => {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}, 8000);

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Ripple click interaction
document.getElementById('rippleBox').addEventListener('click', function() {
    const ripples = this.querySelectorAll('.ripple');
    ripples.forEach(r => {
        r.style.animation = 'none';
        r.offsetHeight; // reflow
        r.style.animation = 'ripple 2s';
    });
});

// Form cards subtle animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .form-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Keyboard shortcut for search
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

console.log('%cPhiLia093 · 昔涟', 'color: #1a73e8; font-size: 16px; font-weight: 500;');
console.log('愿往昔的涟漪，在此刻回应你 ♪');