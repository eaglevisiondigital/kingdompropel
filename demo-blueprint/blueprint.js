const blueprintSidebar=document.querySelector('#sidebar,.bp-sidebar,.blueprint-sidebar');
const blueprintToggle=document.querySelector('#menuToggle,.bp-menu');
const blueprintLinks=document.querySelectorAll('.bp-nav a,.blueprint-sidebar nav a');
const closeBlueprintMenu=()=>{
  blueprintSidebar?.classList.remove('open');
  blueprintToggle?.setAttribute('aria-expanded','false');
  if(blueprintToggle) blueprintToggle.textContent='☰';
};
blueprintLinks.forEach(a=>a.addEventListener('click',()=>{
  blueprintLinks.forEach(x=>x.classList.remove('active'));
  a.classList.add('active');
  closeBlueprintMenu();
}));
if(blueprintToggle&&blueprintSidebar){
  blueprintToggle.setAttribute('aria-expanded','false');
  blueprintToggle.addEventListener('click',()=>{
    const open=blueprintSidebar.classList.toggle('open');
    blueprintToggle.setAttribute('aria-expanded',String(open));
    blueprintToggle.textContent=open?'×':'☰';
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape') closeBlueprintMenu()});
}
