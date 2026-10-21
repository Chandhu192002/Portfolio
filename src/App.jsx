import React,{useState,useEffect,useRef} from 'react'
import IMG_ID from './assets/portrait.jpg'
import IMG_NIGHT from './assets/hero.jpg'
import IMG_HERO from './assets/lion.jpg'

const h=React.createElement
const EMAIL="chandhu192002@gmail.com";
const LI="https://linkedin.com/in/chandrasekar-a-551049310/",GH="https://github.com/Chandhu192002";
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const T=t=>h('span',{className:'tag',key:t},t);
function Rv({children,className='',...p}){const r=useRef();useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){r.current.classList.add('in');o.disconnect()}},{threshold:.1});o.observe(r.current);return()=>o.disconnect()},[]);return h(p.tag||'div',{ref:r,className:'rv '+className,...p},children)}
const Sec=({id,title,hi,children})=>h('section',{id},h('div',{className:'in'},h(Rv,{tag:'h2'},title+' ',h('em',null,hi)),children));

function Typed(){const W=['Python Full-Stack Developer','AI Application Developer'],[s,setS]=useState(reduce?W[0]:'');
 useEffect(()=>{if(reduce)return;let w=0,c=0,d=1,t;const f=()=>{const x=W[w];c+=d;setS(x.slice(0,c));let n=d>0?85:40;if(d>0&&c===x.length){d=-1;n=1600}else if(d<0&&c===0){d=1;w=(w+1)%W.length;n=300}t=setTimeout(f,n)};f();return()=>clearTimeout(t)},[]);
 return h('div',{className:'role'},'And I\u2019m a ',h('span',null,s),h('i'))}

function Home(){const [m,setM]=useState({x:0,y:0}),sec=useRef(),rI=useRef(),rT=useRef();
 useEffect(()=>{if(reduce)return;const s=sec.current,coarse=matchMedia('(pointer:coarse)').matches;let mx=-999,my=-999,cx=0,cy=0,r=0,tr=0,raf;
  const mv=e=>{mx=e.clientX;my=e.clientY;tr=130},lv=()=>{tr=0};
  s.addEventListener('pointermove',mv);s.addEventListener('pointerleave',lv);
  const tick=t=>{if(coarse){mx=innerWidth*(.5+.3*Math.sin(t/1700));my=innerHeight*(.5+.25*Math.cos(t/1300));tr=110}
   cx+=(mx-cx)*.12;cy+=(my-cy)*.12;r+=(tr-r)*.12;
   [[rI.current,1],[rT.current,1.5]].forEach(([el,k])=>{if(!el)return;const b=el.getBoundingClientRect();el.style.setProperty('--x',(cx-b.left)+'px');el.style.setProperty('--y',(cy-b.top)+'px');el.style.setProperty('--r',(r*k)+'px')});
   raf=requestAnimationFrame(tick)};
  raf=requestAnimationFrame(tick);return()=>{cancelAnimationFrame(raf);s.removeEventListener('pointermove',mv);s.removeEventListener('pointerleave',lv)}},[]);
 const st={transform:`translate(${m.x*-14}px,${m.y*-10}px) scale(1.12)`};
 return h('section',{id:'home',ref:sec,onMouseMove:e=>{if(!reduce)setM({x:e.clientX/innerWidth-.5,y:e.clientY/innerHeight-.5})}},h('div',{className:'bw','aria-hidden':true},'BUILD'),h('div',{className:'bw bwr',ref:rT,'aria-hidden':true},'BUILD'),h('div',{className:'in hero',style:{width:'100%'}},
  h('div',null,h('h3',null,'Hello, I\u2019m'),h('h1',null,'Chandrasekar A'),h(Typed),
   h('p',null,'I build full-stack applications and AI-powered solutions with Python, FastAPI and React. Based in Bengaluru, India.'),
   h('div',{className:'row'},h('a',{className:'btn',href:'#projects'},'Explore Projects'),h('a',{className:'btn o',href:'#contact'},'Contact Me')),
   h('div',{className:'soc'},h('a',{href:LI,target:'_blank',rel:'noopener','aria-label':'LinkedIn'},'in'),h('a',{href:GH,target:'_blank',rel:'noopener','aria-label':'GitHub'},'GH'),h('a',{href:'mailto:'+EMAIL,'aria-label':'Email'},'@')),
   h('div',{className:'tags'},['Python','React.js','FastAPI','AI Agents'].map(T))),
  h('div',{className:'ring'},h('div',null,h('img',{src:IMG_NIGHT,alt:'Chandrasekar A',style:st}),h('img',{className:'rvl',ref:rI,src:IMG_HERO,alt:'','aria-hidden':true,style:st})))))}

const About=()=>h('section',{id:'about'},h('div',{className:'in'},h(Rv,{tag:'h2'},'About ',h('em',null,'Me')),h(Rv,{className:'ab'},h('img',{src:IMG_ID,alt:'Portrait of Chandrasekar A',loading:'lazy'}),
 h('div',null,h('h3',null,'Python Full-Stack Developer'),
 h('p',null,'I\u2019m a Computer Science graduate based in Bengaluru, with hands-on experience in Python, FastAPI, Flask, React.js, SQL databases and REST APIs.'),
 h('p',null,'I also integrate LLMs into real products. My latest work is an AI-first CRM that turns natural-language notes into structured interaction records.'),
 h('a',{className:'btn',href:'#contact'},'Contact Me')))));

const K={Programming:['Python','JavaScript','SQL','HTML5','CSS3'],Frontend:['React.js','Redux Toolkit','Vite','Bootstrap'],Backend:['Flask','FastAPI','REST APIs','SQLAlchemy ORM'],Databases:['MySQL','PostgreSQL'],'AI / LLM':['LangGraph','Groq LLM','AI-agent development'],Tools:['Git','GitHub','Postman','VS Code','Netlify']};
const Skills=()=>h(Sec,{id:'skills',title:'My',hi:'Skills'},h('div',{className:'grid'},Object.entries(K).map(([k,v])=>h(Rv,{className:'card',key:k},h('h3',null,k),h('div',{className:'tags'},v.map(T))))));

const SV=[['</>','Full-Stack Web Apps','React, Redux Toolkit and Vite frontends with Flask or FastAPI backends.'],['API','REST APIs & Databases','Authentication, API integration and database design with SQLAlchemy, MySQL and PostgreSQL.'],['AI','AI Agents & LLM Apps','LangGraph agents with Groq LLM that read natural language and take actions.']];
const Services=()=>h(Sec,{id:'services',title:'What I',hi:'Build'},h('div',{className:'grid'},SV.map(s=>h(Rv,{className:'card',key:s[1]},h('div',{className:'ic'},s[0]),h('h3',null,s[1]),h('p',null,s[2])))));

const P=[
 {t:'AI-First CRM \u2014 HCP Interaction Logging',v:'CRM',u:'https://github.com/Chandhu192002/AIVOA.AI',tags:['React.js','Redux Toolkit','Vite','FastAPI','SQLAlchemy','PostgreSQL / MySQL','LangGraph','Groq LLM'],l:['Natural-language input fills the interaction form automatically.','Five AI-agent tools: log, edit, history, follow-ups, task scheduling.']},
 {t:'Signature Matching Application',v:'SSIM',u:'https://github.com/Chandhu192002/Signatureverification',tags:['Python','OpenCV','SciPy','scikit-image'],l:['Compares two signature images, captured or uploaded.','Shows the structural similarity percentage in a popup.']},
 {t:'Smart Agriculture System',v:'IoT',u:'https://github.com/Chandhu192002/soil_monitoring_dashboard',tags:['HTML','CSS','JavaScript','React.js','IoT'],l:['Farming-support interface for web and IoT features.','Soil-monitoring concept with an AI-based query system.']}];
const Projects=()=>h(Sec,{id:'projects',title:'Latest',hi:'Projects'},h('div',{className:'grid'},P.map(p=>h(Rv,{tag:'a',className:'card',key:p.t,href:p.u,target:'_blank',rel:'noopener','aria-label':p.t+' on GitHub'},h('div',{className:'pv'},p.v),h('h3',null,p.t),h('ul',null,p.l.map(x=>h('li',{key:x},x))),h('div',{className:'tags'},p.tags.map(T)),h('span',{className:'gh'},'View on GitHub \u2197')))));

const Exp=()=>h(Sec,{id:'experience',title:'Experience &',hi:'Education'},h('div',{className:'tl'},[
 ['Python Full-Stack Developer','Bdreamz Global Solutions Private Limited \u00b7 Dec 2025 \u2013 May 2026','Built the AI-first CRM with LangGraph and Groq LLM, a React and Redux Toolkit frontend, and a FastAPI and SQLAlchemy backend.'],
 ['DevOps Engineering Intern','Rooman Technologies \u00b7 Nov 2024 \u2013 Mar 2025','Practical exposure to CI/CD workflows, Git, Linux command line, basic deployments and SDLC practices.'],
 ['IoT Edge Node & Gateway Intern','Cranes Varsity \u00b7 Aug \u2013 Oct 2023','IoT device setup, configuration, monitoring and troubleshooting.'],
 ['B.E. Computer Science','K.S. Institute of Technology, Bengaluru \u00b7 2025 \u00b7 CGPA 7.6',''],
 ['Diploma in Computer Science','Sri Krishna Polytechnic College \u00b7 88%','']
].map(e=>h(Rv,{key:e[0]},h('h3',null,e[0]),h('small',null,e[1]),e[2]&&h('p',null,e[2])))));

const Contact=()=>h(Sec,{id:'contact',title:'Let\u2019s build something',hi:'great.'},h('div',{className:'grid'},[['Email',EMAIL,'mailto:'+EMAIL,'@'],['LinkedIn','chandrasekar-a-551049310',LI,'in'],['GitHub','Chandhu192002',GH,'GH']].map(([a,b,u,i])=>h(Rv,{tag:'a',className:'card',key:a,href:u,target:a==='Email'?undefined:'_blank',rel:'noopener','aria-label':a},h('div',{className:'ic'},i),h('h3',null,a),h('p',null,b)))));

function Stars(){const r=useRef();useEffect(()=>{const c=r.current,x=c.getContext('2d');let W,H,S=[],sh=[],raf;
 const init=()=>{W=c.width=innerWidth;H=c.height=innerHeight;S=Array.from({length:Math.min(240,Math.floor(W*H/8000))},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,p:Math.random()*6.28,s:Math.random()*.02+.005}))};
 const draw=()=>{x.clearRect(0,0,W,H);
  for(const s of S){s.p+=s.s;x.beginPath();x.arc(s.x,s.y,s.r,0,6.283);x.fillStyle=`rgba(255,255,255,${reduce?.6:.3+.7*Math.abs(Math.sin(s.p))})`;x.shadowColor='#fff';x.shadowBlur=s.r*5;x.fill()}
  x.shadowBlur=0;
  if(!reduce&&Math.random()<.004&&sh.length<2)sh.push({x:Math.random()*W*.8,y:Math.random()*H*.5,v:7+Math.random()*4});
  for(const t of sh){t.x+=t.v;t.y+=t.v*.5;const g=x.createLinearGradient(t.x,t.y,t.x-80,t.y-40);g.addColorStop(0,'rgba(255,255,255,.9)');g.addColorStop(1,'rgba(255,255,255,0)');x.strokeStyle=g;x.lineWidth=1.5;x.beginPath();x.moveTo(t.x,t.y);x.lineTo(t.x-80,t.y-40);x.stroke()}
  sh=sh.filter(t=>t.x<W+100&&t.y<H+100);if(!reduce)raf=requestAnimationFrame(draw)};
 const rs=()=>{init();if(reduce)draw()};init();draw();addEventListener('resize',rs);return()=>{cancelAnimationFrame(raf);removeEventListener('resize',rs)}},[]);
 return h('canvas',{ref:r,'aria-hidden':true,style:{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}})}

function App(){
 useEffect(()=>{const f=e=>{const a=e.target.closest&&e.target.closest('a');if(!a)return;const hr=a.getAttribute('href')||'';
  if(hr.startsWith('#')){const t=document.getElementById(hr.slice(1));if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth'})}}
  else if(hr.startsWith('mailto:')){e.preventDefault();try{navigator.clipboard.writeText(EMAIL).catch(()=>{})}catch(_){}window.open(hr,'_blank');const p=a.querySelector('p');if(p){const o=p.textContent;p.textContent='Email address copied';setTimeout(()=>{p.textContent=o},2000)}}};
  document.addEventListener('click',f);return()=>document.removeEventListener('click',f)},[]);
const L=['home','about','skills','services','projects','experience','contact'];
 return h(React.Fragment,null,h(Stars),h('header',null,h('a',{className:'logo',href:'#home'},'Chandra',h('b',null,'sekar')),
  h('nav',{'aria-label':'Main'},L.slice(0,6).map(s=>h('a',{key:s,href:'#'+s},s[0].toUpperCase()+s.slice(1)))),h('a',{className:'btn hide',href:'#contact'},'Hire Me')),
  h('main',null,h(Home),h(About),h(Skills),h(Services),h(Projects),h(Exp),h(Contact)),h('footer',null,'\u00a9 2026 Chandrasekar A \u00b7 ',h('a',{href:LI,target:'_blank',rel:'noopener'},'LinkedIn'),' \u00b7 ',h('a',{href:GH,target:'_blank',rel:'noopener'},'GitHub')))}

export default App
