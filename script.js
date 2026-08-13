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
