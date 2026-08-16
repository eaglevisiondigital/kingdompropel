(() => {
  const sections = [...document.querySelectorAll('.bp-slide')];
  const links = [...document.querySelectorAll('.bp-nav a')];
  const progress = document.getElementById('progressBar');
  const sidebar = document.getElementById('sidebar');
  const menu = document.getElementById('menuToggle');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  addEventListener('scroll', updateProgress, {passive:true});
  addEventListener('resize', updateProgress);
  updateProgress();

  menu?.addEventListener('click', () => sidebar.classList.toggle('open'));
  links.forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));

  addEventListener('keydown', e => {
    if (!['ArrowDown','ArrowRight','PageDown','ArrowUp','ArrowLeft','PageUp'].includes(e.key)) return;
    const current = sections.reduce((best, s, i) => Math.abs(s.getBoundingClientRect().top) < Math.abs(sections[best].getBoundingClientRect().top) ? i : best, 0);
    const forward = ['ArrowDown','ArrowRight','PageDown'].includes(e.key);
    const next = Math.max(0, Math.min(sections.length - 1, current + (forward ? 1 : -1)));
    if (next !== current) { e.preventDefault(); sections[next].scrollIntoView({behavior:'smooth'}); }
  });
})();

// V57 deployment marker — makes it easy to verify the catch-up package is live.
window.PROPEL_BLUEPRINT_VERSION = '57-catch-up';
