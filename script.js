const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});observer.unobserve(entry.target)}
  })
},{threshold:.12});
document.querySelectorAll('.card,.step,.section-head,.pastor-panel,.cta').forEach(el=>{el.style.opacity='0';observer.observe(el)});

const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.nav-links');
if(toggle && nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'×':'☰';
  });
}

/* V59 — Propel Giving + Payments Savings Calculator System */
(() => {
  const calculators = [...document.querySelectorAll('[data-propel-calculator]')];
  if (!calculators.length) return;

  const anchors = [
    {p:0,v:3000},{p:10,v:5000},{p:22,v:10000},{p:38,v:25000},{p:50,v:40000},
    {p:60,v:60000},{p:70,v:100000},{p:79,v:200000},{p:90,v:500000},{p:100,v:1000000}
  ];
  const money = n => '$' + Math.round(n).toLocaleString('en-US');

  function positionToVolume(pos){
    pos = Math.max(0, Math.min(100, Number(pos)));
    for(let i=0;i<anchors.length-1;i++){
      const a=anchors[i], b=anchors[i+1];
      if(pos<=b.p){
        const t=(pos-a.p)/(b.p-a.p);
        return Math.round(a.v + (b.v-a.v)*t);
      }
    }
    return 1000000;
  }
  function volumeToPosition(volume){
    volume=Math.max(3000,Math.min(1000000,Number(volume)||25000));
    for(let i=0;i<anchors.length-1;i++){
      const a=anchors[i], b=anchors[i+1];
      if(volume<=b.v){
        const t=(volume-a.v)/(b.v-a.v);
        return Math.round(a.p+(b.p-a.p)*t);
      }
    }
    return 100;
  }
  function discount(volume){
    if(volume<10000) return {upfront:250, monthly:10, custom:false};
    if(volume<20000) return {upfront:500, monthly:25, custom:false};
    if(volume<40000) return {upfront:1000, monthly:50, custom:false};
    if(volume<75000) return {upfront:1500, monthly:75, custom:false};
    if(volume<=100000) return {upfront:2000, monthly:100, custom:false};
    return {upfront:null,monthly:null,custom:true};
  }
  function setText(root, selector, text){ root.querySelectorAll(selector).forEach(el=>el.textContent=text); }
  function update(root, pos){
    const volume=positionToVolume(pos);
    const processing=volume*.04;
    const monthly=processing*.99;
    const annual=monthly*12;
    const d=discount(volume);
    setText(root,'[data-volume-display]',money(volume));
    setText(root,'[data-processing-cost]',money(processing));
    setText(root,'[data-monthly-savings]',money(monthly));
    setText(root,'[data-annual-savings]',money(annual));
    if(d.custom){
      setText(root,'[data-upfront-discount]','Custom');
      setText(root,'[data-monthly-discount]','Custom');
      setText(root,'[data-firstyear-savings]','Custom Quote');
      setText(root,'[data-firstyear-formula]','Built around your processing profile');
    } else {
      const first=d.upfront+d.monthly*12;
      setText(root,'[data-upfront-discount]',money(d.upfront));
      setText(root,'[data-monthly-discount]',money(d.monthly)+'/MO');
      setText(root,'[data-firstyear-savings]',money(first));
      setText(root,'[data-firstyear-formula]',`${money(d.upfront)} + (${money(d.monthly)} × 12)`);
    }
    root.querySelectorAll('.volume-link').forEach(a=>{
      const target=a.dataset.target||'';
      a.href=`/giving/?volume=${volume}${target}`;
    });
    const slider=root.querySelector('.propel-volume-slider');
    if(slider){
      const pct=Number(slider.value);
      slider.style.background=`linear-gradient(90deg,#21c55d 0%,#5be487 ${pct}%,rgba(255,255,255,.13) ${pct}%,rgba(255,255,255,.13) 100%)`;
      slider.setAttribute('aria-valuetext', `${money(volume)} per month`);
    }
  }

  const params=new URLSearchParams(location.search);
  const requested=Number(params.get('volume'));
  const initialPos=requested?volumeToPosition(requested):38;
  calculators.forEach(root=>{
    const slider=root.querySelector('.propel-volume-slider');
    if(!slider) return;
    slider.value=initialPos;
    update(root,initialPos);
    slider.addEventListener('input',()=>update(root,slider.value));
  });
})();


/* V83 — hard rule: external websites always open separately */
(() => {
  const applyExternalLinkRule = (scope=document) => {
    scope.querySelectorAll('a[href]').forEach(a => {
      const raw=(a.getAttribute('href')||'').trim();
      if(!raw || raw.startsWith('#') || raw.startsWith('/') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return;
      try{
        const url=new URL(raw,window.location.href);
        if(/^https?:$/.test(url.protocol) && url.hostname !== window.location.hostname){
          a.target='_blank';
          const rel=new Set((a.getAttribute('rel')||'').split(/\s+/).filter(Boolean));
          rel.add('noopener'); rel.add('noreferrer');
          a.setAttribute('rel',[...rel].join(' '));
        }
      }catch(e){}
    });
  };
  applyExternalLinkRule();
  const observer=new MutationObserver(mutations=>{
    mutations.forEach(m=>m.addedNodes.forEach(node=>{
      if(node.nodeType===1){
        if(node.matches?.('a[href]')) applyExternalLinkRule(node.parentElement||document);
        else applyExternalLinkRule(node);
      }
    }));
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();


/* V91 — universal persistent header menu behavior */
(() => {
  const header=document.querySelector('body > header, .site-header, header');
  const toggle=header?.querySelector('.mobile-toggle');
  const nav=header?.querySelector('.nav-links');
  if(!toggle||!nav) return;
  const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';document.documentElement.classList.remove('nav-open')};
  const open=()=>{nav.classList.add('open');toggle.setAttribute('aria-expanded','true');toggle.textContent='×';document.documentElement.classList.add('nav-open')};
  // Replace any prior click handler by cloning the button.
  const cleanToggle=toggle.cloneNode(true);
  toggle.replaceWith(cleanToggle);
  cleanToggle.addEventListener('click',e=>{e.preventDefault();nav.classList.contains('open')?close():open()});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close()});
  window.addEventListener('resize',()=>{if(window.innerWidth>980) close()});
})();
