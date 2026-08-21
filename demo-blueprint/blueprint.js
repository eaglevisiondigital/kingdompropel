(() => {
  const sections = [...document.querySelectorAll('.bp-slide')];
  const links = [...document.querySelectorAll('.bp-nav a')];
  const progress = document.getElementById('progressBar');
  const sidebar = document.querySelector('#sidebar,.bp-sidebar,.blueprint-sidebar');
  const menu = document.querySelector('#menuToggle,.bp-menu');

  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: .12 });
    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        const active = links.find(a => a.classList.contains('active'));
        active?.scrollIntoView({block:'nearest'});
      });
    }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });
    sections.forEach(s => sectionObserver.observe(s));
  }

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  addEventListener('scroll', updateProgress, {passive:true});
  addEventListener('resize', updateProgress);
  updateProgress();

  const closeMenu = () => {
    sidebar?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    if (menu) menu.textContent = '☰';
  };
  if (menu && sidebar) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '×' : '☰';
    });
  }
  links.forEach(a => a.addEventListener('click', closeMenu));

  addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }
    if (!['ArrowDown','ArrowRight','PageDown','ArrowUp','ArrowLeft','PageUp'].includes(e.key)) return;
    const current = sections.reduce((best, s, i) => Math.abs(s.getBoundingClientRect().top) < Math.abs(sections[best].getBoundingClientRect().top) ? i : best, 0);
    const forward = ['ArrowDown','ArrowRight','PageDown'].includes(e.key);
    const next = Math.max(0, Math.min(sections.length - 1, current + (forward ? 1 : -1)));
    if (next !== current) { e.preventDefault(); sections[next].scrollIntoView({behavior:'smooth'}); }
  });
})();
