/* nav.js — Navegación compartida HDM Web Design */
(function() {

const NAV_HTML = `
<nav id="main-nav">
  <a href="/" class="logo">
    <div class="logo-icon">HDM</div>
    <div>
      <span class="logo-name">HDM Web Design</span>
      <span class="logo-sub">Diseño web · Madrid</span>
    </div>
  </a>
  <div class="nav-center">
    <a href="/contacto" class="nav-pill">¿Digitalizamos tu negocio? Empieza ahora →</a>
  </div>
  <div class="nav-right">
    <a href="/demos" class="nl">Demos</a>
    <a href="/proceso" class="nl">Proceso</a>
    <a href="/precios" class="nl">Precios</a>
    <a href="/blog" class="nl">Blog</a>
    <a href="/sobre-mi" class="nl">Sobre mí</a>
    <button class="nav-menu-btn" id="hbg" aria-label="Abrir menú">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="2" rx="1" fill="white"/>
        <rect x="2" y="8" width="14" height="2" rx="1" fill="white"/>
        <rect x="2" y="13" width="14" height="2" rx="1" fill="white"/>
      </svg>
    </button>
  </div>
  <button class="hamburger" id="hbg2" aria-label="Abrir menú">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="fullmenu" id="fullmenu">
  <button class="fm-close" id="fmclose" aria-label="Cerrar menú">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
      <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
    </svg>
  </button>
  <div class="fullmenu-inner">
    <div class="fm-main">
      <span class="fm-link has-sub">Servicios</span>
      <div class="fm-sub">
        <a href="/servicios/diseno-web">Diseño web</a>
        <a href="/servicios/seo-on-page">SEO on-page</a>
        <a href="/servicios/landings-nicho">Landings de nicho</a>
        <a href="/servicios/analytics">Analytics</a>
        <a href="/servicios/blog-contenidos">Blog y contenidos</a>
        <a href="/servicios/proyectos-medida">Proyectos a medida</a>
      </div>
      <a href="/demos" class="fm-link">Demos</a>
      <a href="/proceso" class="fm-link">Proceso</a>
      <a href="/precios" class="fm-link">Precios</a>
      <a href="/blog" class="fm-link">Blog</a>
      <a href="/sobre-mi" class="fm-link">Sobre mí</a>
    </div>
    <div class="fm-footer">
      <div class="fm-contact">
        <a href="https://wa.me/34657388893">+34 657 388 893</a>
        <a href="mailto:hdmdisenoweb@gmail.com">hdmdisenoweb@gmail.com</a>
      </div>
      <a href="/contacto" class="fm-cta">Solicitar presupuesto →</a>
    </div>
  </div>
</div>
`;

const NAV_CSS = `
#main-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(247,247,250,0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid #E2E2EC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 68px;
}
#main-nav .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
#main-nav .logo-icon {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg,#4F46E5,#7C3AED,#DB2777);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 0.75rem;
  color: #fff;
  flex-shrink: 0;
}
#main-nav .logo-name {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  color: #0B1020;
  display: block;
}
#main-nav .logo-sub {
  font-size: 0.6rem;
  color: #8a8a9a;
  font-weight: 500;
  display: block;
  margin-top: 1px;
}
#main-nav .nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}
#main-nav .nav-pill {
  background: linear-gradient(135deg,#4F46E5,#7C3AED,#DB2777);
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 0.55rem 1.6rem;
  border-radius: 30px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.15s;
}
#main-nav .nav-pill:hover { opacity: 0.88; }
#main-nav .nav-right {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
#main-nav .nl {
  color: #8a8a9a;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  text-decoration: none;
  transition: color 0.15s;
  font-family: 'Manrope', sans-serif;
}
#main-nav .nl:hover { color: #0B1020; }
#main-nav .nav-menu-btn {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg,#4F46E5,#7C3AED,#DB2777);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  margin-left: 0.25rem;
  transition: opacity 0.15s;
}
#main-nav .nav-menu-btn:hover { opacity: 0.85; }
#main-nav .hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
  z-index: 201;
}
#main-nav .hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #0B1020;
  border-radius: 2px;
  transition: all 0.3s;
}
#main-nav .hamburger.open span { background: #fff; }
#main-nav .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
#main-nav .hamburger.open span:nth-child(2) { opacity: 0; }
#main-nav .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* FULLMENU */
.fullmenu {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: linear-gradient(135deg,#4F46E5 0%,#7C3AED 45%,#DB2777 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3rem 3rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1);
  overflow-y: auto;
}
.fullmenu.open { opacity: 1; pointer-events: all; }
.fm-close {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  backdrop-filter: blur(4px);
}
.fm-close:hover { background: rgba(255,255,255,0.28); }
.fullmenu-inner { max-width: 800px; margin: 0 auto; width: 100%; }
.fm-main { display: flex; flex-direction: column; gap: 0; margin-bottom: 3rem; }
.fm-link {
  font-size: clamp(2.5rem,6vw,4.5rem);
  font-weight: 800;
  color: rgba(255,255,255,0.85);
  line-height: 1.1;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  transition: color 0.15s, padding-left 0.2s;
  display: block;
  letter-spacing: -0.03em;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
}
.fm-link:hover { color: #fff; padding-left: 0.5rem; }
.fm-link.has-sub { cursor: default; color: #fff; }
.fm-sub {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  padding: 0.875rem 0 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.fm-sub a {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
  transition: color 0.15s;
  white-space: nowrap;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
}
.fm-sub a:hover { color: #fff; }
.fm-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.fm-contact { display: flex; flex-direction: column; gap: 0.35rem; }
.fm-contact a {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  transition: color 0.15s;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
}
.fm-contact a:hover { color: #fff; }
.fm-cta {
  background: #fff;
  color: #4F46E5;
  padding: 0.75rem 1.75rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: opacity 0.15s;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  font-family: 'Manrope', sans-serif;
}
.fm-cta:hover { opacity: 0.9; }

@media(max-width:1024px) { #main-nav .nav-center { display: none; } }
@media(max-width:900px) {
  #main-nav { padding: 0 1.5rem; }
  #main-nav .nav-right .nl { display: none; }
  #main-nav .nav-menu-btn { display: none; }
  #main-nav .hamburger { display: flex; }
}
@media(max-width:600px) {
  .fullmenu { padding: 5rem 1.5rem 2rem; }
  .fm-footer { flex-direction: column; align-items: flex-start; }
}
`;

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

  // Add padding to body for fixed nav
  document.body.style.paddingTop = '68px';

  // Inject HTML at top of body
  const wrapper = document.createElement('div');
  wrapper.innerHTML = NAV_HTML;
  document.body.insertBefore(wrapper, document.body.firstChild);

  // Highlight active link
  const path = window.location.pathname;
  document.querySelectorAll('#main-nav .nl, .fm-link, .fm-sub a').forEach(link => {
    if (link.getAttribute('href') === path || 
        (path !== '/' && link.getAttribute('href') && path.startsWith(link.getAttribute('href')))) {
      link.style.color = '#4F46E5';
    }
  });

  // Menu logic
  const btn = document.getElementById('hbg2');
  const hbg = document.getElementById('hbg');
  const menu = document.getElementById('fullmenu');
  const closeBtn = document.getElementById('fmclose');

  function openMenu() {
    menu.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function() {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });
  if (hbg) hbg.addEventListener('click', function() {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });

})();
