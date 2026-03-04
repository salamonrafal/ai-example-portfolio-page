/* Rafal Salamon – Terminal Portfolio */

const i18n = {
  pl: {
    nav_home: "Start",
    nav_about: "O mnie",
    nav_projects: "Moje projekty",
    nav_tools: "Moje narzędzia",
    nav_contact: "Kontakt",
    chip_lang: "Język",
    chip_theme: "Motyw",
    chip_color: "Kolor",
    chip_prefs: "Preferencje",
    home_title: "Senior PHP Developer / Fullstack Developer",
    home_tip: "Wskazówka: użyj przełączników w prawym górnym rogu lub skrótu",
    home_links_about: "O mnie",
    home_links_projects: "Projekty",
    home_links_tools: "Narzędzia",
    home_links_contact: "Kontakt",
    home_links_github: "GitHub",
    home_links_linkedin: "LinkedIn",
    home_links_mail: "E‑mail",
    home_recent: "Szybki skrót",

    term_lines: [
      {t:"info", v:"$ whoami"},
      {t:"out",  v:"Rafał Salamon"},
      {t:"info", v:"$ cat profile.txt"},
      {t:"out",  v:"Senior PHP Developer • Fullstack • Software Engineer"},
      {t:"out",  v:"Buduję i rozwijam aplikacje webowe, dbając o jakość, refactoring i komunikację z biznesem."},
      {t:"info", v:"$ ls experience/"},
      {t:"out",  v:"Rubix (2022–now)  StepStone (2008–2022)  SBG (2007–2008)"},
      {t:"info", v:"$ open projects"},
      {t:"out",  v:"➡ Przejdź do /projects i zobacz publiczne repozytoria + projekty komercyjne (opisowe)."}
    ],

    about_h2: "O mnie",
    about_p1: "Jestem programistą z wieloletnim doświadczeniem w tworzeniu i utrzymaniu aplikacji webowych. Najczęściej działam po stronie backendu (PHP), ale dobrze czuję się także w obszarze frontendu i integracji.",
    about_p2: "W pracy stawiam na analizę biznesową i techniczną, czytelny kod, refactoring, testowalność oraz sprawną komunikację między zespołem a interesariuszami.",
    about_special: "Obszary specjalizacji",
    about_skills: "Technologie (wybrane)",
    about_exp: "Doświadczenie",
    about_edu: "Wykształcenie",
    about_train: "Szkolenia / certyfikaty",
    about_lang: "Języki",
    about_interests: "Zainteresowania",

    projects_h2: "Moje projekty",
    projects_public: "Publiczne (GitHub)",
    projects_commercial: "Komercyjne (opisowe)",
    projects_note: "Część projektów realizowałem w środowisku komercyjnym — z oczywistych powodów bez linków do kodu. Poniżej podaję zakres i mój wkład.",

    tools_h2: "Moje narzędzia",
    tools_p: "Stos technologiczny, z którym pracuję na co dzień — od backendu, przez CI/CD, po organizację pracy.",

    contact_h2: "Kontakt",
    contact_p: "Chcesz porozmawiać o współpracy lub projekcie? Napisz, chętnie omówię szczegóły i możliwe kierunki działania.",
    contact_name: "Imię i nazwisko",
    contact_email: "E‑mail",
    contact_msg: "Wiadomość",
    contact_send: "Utwórz e‑mail",
    contact_copy: "Kopiuj adres",
    contact_copy_hint: "Kopiuj adres e‑mail",
    contact_copied: "Skopiowano!",

    footer: "© Rafał Salamon • Zbudowane w HTML/CSS/JS (bez frameworków)"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_tools: "Tools",
    nav_contact: "Contact",
    chip_lang: "Language",
    chip_theme: "Theme",
    chip_color: "Color",
    chip_prefs: "Preferences",
    home_title: "Senior PHP Developer / Fullstack Developer",
    home_tip: "Tip: use the switches in the top-right corner or shortcuts",
    home_links_about: "About",
    home_links_projects: "Projects",
    home_links_tools: "Tools",
    home_links_contact: "Contact",
    home_links_github: "GitHub",
    home_links_linkedin: "LinkedIn",
    home_links_mail: "E‑mail",
    home_recent: "Quick jump",

    term_lines: [
      {t:"info", v:"$ whoami"},
      {t:"out",  v:"Rafal Salamon"},
      {t:"info", v:"$ cat profile.txt"},
      {t:"out",  v:"Senior PHP Developer • Fullstack • Software Engineer"},
      {t:"out",  v:"I build and maintain web applications, focusing on quality, refactoring and strong business communication."},
      {t:"info", v:"$ ls experience/"},
      {t:"out",  v:"Rubix (2022–now)  StepStone (2008–2022)  SBG (2007–2008)"},
      {t:"info", v:"$ open projects"},
      {t:"out",  v:"➡ Go to /projects to see public repositories + described commercial work."}
    ],

    about_h2: "About",
    about_p1: "I am a developer with many years of experience building and maintaining web applications. I often work backend-first (PHP), but I'm also comfortable with frontend and integrations.",
    about_p2: "I value business & technical analysis, clean code, refactoring, testability, and smooth communication between the technical team and stakeholders.",
    about_special: "Focus areas",
    about_skills: "Technologies (selected)",
    about_exp: "Experience",
    about_edu: "Education",
    about_train: "Training / certificates",
    about_lang: "Languages",
    about_interests: "Interests",

    projects_h2: "Projects",
    projects_public: "Public (GitHub)",
    projects_commercial: "Commercial (described)",
    projects_note: "Some work was delivered in commercial environments — understandably without code links. Below is scope and my contribution.",

    tools_h2: "Tools",
    tools_p: "My day-to-day stack — from backend and CI/CD to work organization.",

    contact_h2: "Contact",
    contact_p: "Want to discuss a role or a project? Send a message — I’ll get back as soon as possible.",
    contact_name: "Full name",
    contact_email: "E‑mail",
    contact_msg: "Message",
    contact_send: "Compose e‑mail",
    contact_copy: "Copy address",
    contact_copy_hint: "Copy e-mail address",
    contact_copied: "Copied!",

    footer: "© Rafal Salamon • Built with HTML/CSS/JS (no frameworks)"
  }
};

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }
let terminalRenderId = 0;

function getLang(){
  const stored = localStorage.getItem('lang');
  if(stored) return stored;
  const n = (navigator.language || 'pl').toLowerCase();
  return n.startsWith('pl') ? 'pl' : 'en';
}

function setLang(lang){ localStorage.setItem('lang', lang); applyI18n(lang); }

function applyLangVisibility(lang){
  qsa('[data-lang]').forEach(el=>{
    const l = el.getAttribute('data-lang');
    el.style.display = (l === lang) ? '' : 'none';
  });
}

function getTheme(){ return localStorage.getItem('theme') || 'dark'; }
function getAccent(){ return localStorage.getItem('accent') || '#39ff14'; }

function normalizeHexColor(value){
  if(typeof value !== 'string') return null;
  const v = value.trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(v) ? v : null;
}

function hexToRgb(hex){
  const norm = normalizeHexColor(hex);
  if(!norm) return null;
  return {
    r: parseInt(norm.slice(1, 3), 16),
    g: parseInt(norm.slice(3, 5), 16),
    b: parseInt(norm.slice(5, 7), 16)
  };
}

function setTheme(theme){
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  qsa('[data-action="toggle-theme"]').forEach(btn=>{
    btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  });
}

function setAccent(color){
  const accent = normalizeHexColor(color) || '#39ff14';
  const rgb = hexToRgb(accent);
  localStorage.setItem('accent', accent);
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--link', accent);
  if(rgb){
    document.documentElement.style.setProperty('--link-bg', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .12)`);
    document.documentElement.style.setProperty('--scan', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .06)`);
  }
  qsa('[data-action="accent-color"]').forEach(colorInput=>{
    colorInput.value = accent;
  });
}

function applyI18n(lang){
  const t = i18n[lang] || i18n.pl;
  document.documentElement.lang = lang;
  applyLangVisibility(lang);

  qsa('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key] !== undefined) el.textContent = t[key];
  });
  qsa('[data-i18n-title]').forEach(el=>{
    const key = el.getAttribute('data-i18n-title');
    if(t[key] !== undefined){
      el.setAttribute('title', t[key]);
      el.setAttribute('aria-label', t[key]);
    }
  });
  qsa('[data-i18n-aria]').forEach(el=>{
    const key = el.getAttribute('data-i18n-aria');
    if(t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  qsa('[data-i18n-tooltip]').forEach(el=>{
    const key = el.getAttribute('data-i18n-tooltip');
    if(t[key] !== undefined) el.setAttribute('data-tooltip', t[key]);
  });
  qsa('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  const term = qs('#terminal');
  if(term){
    term.innerHTML = '';
    terminalRenderId += 1;
    typeTerminal(term, t.term_lines, terminalRenderId);
  }

  qsa('[data-action="toggle-lang"]').forEach(langBtn=>{
    langBtn.textContent = lang === 'pl' ? 'PL' : 'EN';
  });

  const footer = qs('footer .footer-text');
  if(footer) footer.textContent = t.footer;
}

function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function typeTerminal(root, lines, renderId){
  for(const line of lines){
    if(renderId !== terminalRenderId) return;
    const row = document.createElement('div');
    row.className = 'line';
    const p = document.createElement('span');
    p.className = 'prompt';
    p.textContent = line.t === 'info' ? '> ' : '  ';
    const text = document.createElement('span');
    text.className = line.t === 'info' ? 'cmd' : 'out';
    row.appendChild(p);
    row.appendChild(text);
    root.appendChild(row);

    const str = line.v;
    for(let i=0;i<str.length;i++){
      if(renderId !== terminalRenderId) return;
      text.textContent += str[i];
      await sleep(12 + Math.random()*18);
    }
    if(renderId !== terminalRenderId) return;
    await sleep(180);
  }
  if(renderId !== terminalRenderId) return;
  const c = document.createElement('span');
  c.className='cursor';
  root.appendChild(c);
}

function setupNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  qsa('.nav a, .mobile-drawer a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  const burger = qs('[data-action="toggle-menu"]');
  const drawer = qs('.mobile-drawer');
  if(burger && drawer){
    burger.addEventListener('click', ()=> drawer.classList.toggle('open'));
    qsa('a', drawer).forEach(a=> a.addEventListener('click', ()=> drawer.classList.remove('open')));
    document.addEventListener('click', (e)=>{
      if(!drawer.contains(e.target) && e.target !== burger) drawer.classList.remove('open');
    });
  }
}

function setupActions(){
  qsa('[data-action="toggle-lang"]').forEach(langBtn=>{
    langBtn.addEventListener('click', ()=>{
      const next = (getLang() === 'pl') ? 'en' : 'pl';
      setLang(next);
    });
  });

  qsa('[data-action="toggle-theme"]').forEach(themeBtn=>{
    themeBtn.addEventListener('click', ()=>{
      const next = (getTheme() === 'dark') ? 'light' : 'dark';
      setTheme(next);
    });
  });

  document.addEventListener('keydown', (e)=>{
    if(e.target && ['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
    if(e.key.toLowerCase() === 'l') setLang(getLang() === 'pl' ? 'en' : 'pl');
    if(e.key.toLowerCase() === 't') setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });

  const copyBtn = qs('[data-action="copy-email"]');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const email = copyBtn.getAttribute('data-email');
      try{
        await navigator.clipboard.writeText(email);
        const lang = getLang();
        copyBtn.setAttribute('data-tooltip', i18n[lang].contact_copied);
        setTimeout(()=>{
          const hint = i18n[getLang()].contact_copy_hint;
          copyBtn.setAttribute('data-tooltip', hint);
        }, 1200);
      }catch(err){
        window.location.href = `mailto:${email}`;
      }
    });
  }

  qsa('[data-action="accent-color"]').forEach(colorInput=>{
    colorInput.addEventListener('input', (e)=> setAccent(e.target.value));
  });

  const mailForm = qs('#contact-form');
  if(mailForm){
    mailForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = qs('#c_name').value.trim();
      const email = qs('#c_email').value.trim();
      const msg = qs('#c_msg').value.trim();
      const to = mailForm.getAttribute('data-to');
      const subject = encodeURIComponent(`[Portfolio] Message from ${name || 'visitor'}`);
      const body = encodeURIComponent(`${msg}\n\n---\nFrom: ${name}\nReply-to: ${email}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
}

function init(){
  setupNav();
  setTheme(getTheme());
  setAccent(getAccent());
  const lang = getLang();
  applyI18n(lang);
  setupActions();
}

document.addEventListener('DOMContentLoaded', init);
