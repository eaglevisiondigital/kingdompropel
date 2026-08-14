(() => {
  const progress = document.querySelector('.blueprint-progress span');
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => io.observe(el));

  const updateProgress = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - innerHeight;
    const pct = max > 0 ? (scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const panel = document.getElementById('websitePanel');
  const tabs = document.querySelectorAll('[data-site]');
  const pages = {
    home: ['WELCOME TO FOUNDATIONS','Faith for real life.<br>People for the journey.','Come as you are. Discover a community where faith becomes real life.','PLAN YOUR VISIT','WATCH ONLINE'],
    visit: ['YOUR FIRST SUNDAY','You can walk in<br>knowing what to expect.','Service times, parking, kids check-in and everything you need before you arrive.','PLAN MY VISIT','GET DIRECTIONS'],
    watch: ['WATCH + LISTEN','Messages that keep<br>working after Sunday.','Livestream, current series, archives, notes and supporting resources in one place.','WATCH LIVE','BROWSE SERIES'],
    groups: ['FIND COMMUNITY','Life is better<br>together.','Search groups by life stage, day, location and ministry need—then take the next step.','FIND A GROUP','MY GROUPS'],
    steps: ['YOUR NEXT STEP','Turn attendance into<br>intentional discipleship.','Growth Track, courses, serving pathways and clear progress toward what comes next.','START GROWTH TRACK','VIEW MY PROGRESS'],
    kids: ['FOUNDATIONS KIDS','Safe. Clear.<br>Family friendly.','What parents need to know about kids ministry, secure check-in and the Sunday experience.','PLAN KIDS CHECK-IN','LEARN MORE'],
    serve: ['MAKE A DIFFERENCE','Find your place<br>on the team.','Discover opportunities, complete onboarding and stay connected to your serving schedule.','EXPLORE TEAMS','MY SCHEDULE'],
    give: ['GENEROSITY','Give with clarity.<br>See the impact.','One-time and recurring giving, funds, projects, history and statements in a connected experience.','GIVE NOW','MY GIVING']
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const v = pages[tab.dataset.site];
    if (!panel || !v) return;
    const copy = panel.querySelector('.browser-copy');
    copy.innerHTML = `<small>${v[0]}</small><h3>${v[1]}</h3><p>${v[2]}</p><div><button>${v[3]}</button><button class="outline">${v[4]}</button></div>`;
  }));
})();
