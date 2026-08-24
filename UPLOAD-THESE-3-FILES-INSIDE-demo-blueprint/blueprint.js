(() => {
  const sections = [...document.querySelectorAll('.bp-slide, .bp-next-step')];
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
window.PROPEL_BLUEPRINT_VERSION = '96-closing-and-cta-corrective-pass';

// V60 — Blueprint closing savings calculator. Same approved math/tiering as the Propel giving calculators.
(() => {
  const root = document.querySelector('[data-blueprint-calculator]');
  if (!root) return;
  const slider = root.querySelector('.bp-volume-slider');
  const volumeOut = root.querySelector('[data-bp-volume]');
  const processingOut = root.querySelector('[data-bp-processing]');
  const propelOut = root.querySelector('[data-bp-propel]');
  const totalOut = root.querySelector('[data-bp-total]');
  const link = root.querySelector('[data-bp-link]');
  const milestones = [3000,5000,10000,25000,40000,60000,100000,200000,500000,1000000];
  const positions = [0,8,18,38,52,63,74,84,93,100];
  const money = n => '$' + Math.round(n).toLocaleString('en-US');
  function volumeFromPosition(p){
    p=Number(p); let i=positions.findIndex(x=>x>=p); if(i<=0) return milestones[0];
    const p0=positions[i-1],p1=positions[i],v0=milestones[i-1],v1=milestones[i];
    const t=(p-p0)/(p1-p0); return Math.round((v0+(v1-v0)*t)/100)*100;
  }
  function propelDiscount(v){if(v<10000)return[250,10];if(v<20000)return[500,25];if(v<40000)return[1000,50];if(v<75000)return[1500,75];if(v<=100000)return[2000,100];return[0,0]}
  function render(){const v=volumeFromPosition(slider.value);const annual=v*.04*.99*12;const [up,mo]=propelDiscount(v);const propel=up+mo*12;volumeOut.textContent=money(v);processingOut.textContent=money(annual);propelOut.textContent=v>100000?'Custom':money(propel);totalOut.textContent=v>100000?money(annual)+' + custom':money(annual+propel);link.href='/giving/?volume='+v+'#propel-advantage'}
  slider.addEventListener('input',render); render();
})();

// V95 — carry the selected closing action into the Blueprint next-step form.
(() => {
  const intent = document.getElementById('nextStepIntent');
  if (!intent) return;
  document.querySelectorAll('[data-next-step-intent]').forEach(link => {
    link.addEventListener('click', () => {
      const selected = link.getAttribute('data-next-step-intent');
      if ([...intent.options].some(option => option.value === selected)) intent.value = selected;
    });
  });
})();
