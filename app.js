/* =====================================================================
   REVENUE HUB — client app
   ===================================================================== */

/* ---------- Clay icon set (matches the reference theme) ---------- */
const C = { blue:'#8C9EE6', blueD:'#7A8FE0', blueL:'#A9BCF0', lav:'#B7A4E6', lavL:'#CBBEF0', lavD:'#9C86DA', mint:'#7FD0BD', mintD:'#62BFA8',
            pink:'#F29AAE', pinkD:'#EC8AA0', yellow:'#F6D88C', cream:'#FBF7F1', cream2:'#EFE8DF', red:'#EE7C8F', teal:'#3E9C88' };
const F = 'filter="url(#clay)"';
const ICONS = {
  dashboard: `<rect x="4" y="10" width="56" height="44" rx="10" fill="${C.blue}" ${F}/>
    <rect x="4" y="10" width="56" height="12" rx="8" fill="${C.blueD}" ${F}/>
    <circle cx="12" cy="16" r="2.2" fill="${C.pink}"/><circle cx="18.5" cy="16" r="2.2" fill="${C.yellow}"/><circle cx="25" cy="16" r="2.2" fill="${C.mint}"/>
    <circle cx="21" cy="38" r="10" fill="${C.pink}" ${F}/>
    <path d="M21 38V28a10 10 0 0 1 10 10z" fill="${C.yellow}" ${F}/>
    <path d="M21 38h10a10 10 0 0 1-6 9.2z" fill="${C.blueL}" ${F}/>
    <rect x="36" y="30" width="17" height="3.4" rx="1.7" fill="${C.cream}"/><rect x="36" y="37" width="17" height="3.4" rx="1.7" fill="${C.cream}"/><rect x="36" y="44" width="12" height="3.4" rx="1.7" fill="${C.cream}"/>`,
  user: `<circle cx="32" cy="32" r="28" fill="${C.blue}" ${F}/>
    <circle cx="32" cy="24" r="9.5" fill="${C.cream}" ${F}/>
    <path d="M14.5 49c2.5-9 9-13.5 17.5-13.5S47 40 49.5 49C45 54 39 56.5 32 56.5S19 54 14.5 49z" fill="${C.cream}" ${F}/>`,
  calendar: `<rect x="17" y="4" width="6" height="14" rx="3" fill="${C.cream}" ${F}/><rect x="41" y="4" width="6" height="14" rx="3" fill="${C.cream}" ${F}/>
    <rect x="6" y="11" width="52" height="47" rx="10" fill="${C.cream}" ${F}/>
    <path d="M6 21a10 10 0 0 1 10-10h32a10 10 0 0 1 10 10v4H6z" fill="${C.pink}" ${F}/>
    ${[0,1,2,3].map(c=>[0,1,2].map(r=>`<rect x="${13+c*10.5}" y="${30+r*8.5}" width="6.5" height="6" rx="2" fill="${c===2&&r===2?C.red:'#CBC4EF'}"/>`).join('')).join('')}`,
  folder: `<path d="M6 18a6 6 0 0 1 6-6h13l6 6h21a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6z" fill="${C.mintD}" ${F}/>
    <rect x="14" y="19" width="34" height="22" rx="3" fill="${C.cream}" ${F}/>
    <rect x="19" y="24" width="22" height="2.6" rx="1.3" fill="${C.lavL}"/><rect x="19" y="30" width="18" height="2.6" rx="1.3" fill="${C.lavL}"/>
    <path d="M4 31a5 5 0 0 1 5-5h46a5 5 0 0 1 5 5l-2 19a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6z" fill="${C.mint}" ${F}/>`,
  chat: `<path d="M16 6h18a12 12 0 0 1 12 12v4a12 12 0 0 1-12 12H18l-10 8 2-9A12 12 0 0 1 4 22v-4A12 12 0 0 1 16 6z" fill="${C.lav}" ${F}/>
    <path d="M32 22h16a12 12 0 0 1 12 12v2a12 12 0 0 1-8 11.3l2 8.7-10-8H32a12 12 0 0 1-12-12v-2a12 12 0 0 1 12-12z" fill="${C.cream}" ${F}/>
    <circle cx="32" cy="35" r="2.6" fill="${C.blueD}"/><circle cx="40" cy="35" r="2.6" fill="${C.blueD}"/><circle cx="48" cy="35" r="2.6" fill="${C.blueD}"/>`,
  doc: `<path d="M15 5h25l15 15v33a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6V11a6 6 0 0 1 6-6z" fill="${C.cream}" ${F}/>
    <path d="M40 5l15 15H44a4 4 0 0 1-4-4z" fill="${C.lav}" ${F}/>
    <rect x="17" y="28" width="28" height="3" rx="1.5" fill="${C.lavL}"/><rect x="17" y="35" width="28" height="3" rx="1.5" fill="${C.lavL}"/>
    <rect x="17" y="42" width="28" height="3" rx="1.5" fill="${C.lavL}"/><rect x="17" y="49" width="16" height="3" rx="1.5" fill="${C.lavL}"/>`,
  check: `<circle cx="32" cy="32" r="27" fill="${C.mint}" ${F}/>
    <path d="M19 33l9 9 17-18" fill="none" stroke="${C.cream}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" ${F}/>`,
  bell: `<circle cx="32" cy="8" r="3.5" fill="${C.pinkD}" ${F}/>
    <path d="M32 9c-10 0-16.5 7.5-16.5 18v11L11 44h42l-4.5-6V27C48.5 16.5 42 9 32 9z" fill="${C.pink}" ${F}/>
    <rect x="9" y="42" width="46" height="8" rx="4" fill="${C.pinkD}" ${F}/>
    <circle cx="32" cy="54.5" r="5" fill="#F7C9A8" ${F}/>`,
  cloud: `<path d="M17 50a12 12 0 0 1-1.5-23.9A17 17 0 0 1 48 22a13 13 0 0 1 1 28z" fill="${C.cream}" ${F}/>
    <path d="M32 54V31M23.5 39l8.5-8.5 8.5 8.5" fill="none" stroke="${C.blueD}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" ${F}/>`,
  search: `<circle cx="27" cy="27" r="14" fill="none" stroke="#7C74D9" stroke-width="7.5" ${F}/>
    <path d="M38 38l14 14" stroke="#7C74D9" stroke-width="8.5" stroke-linecap="round" ${F}/>`,
  sliders: `<path d="M7 16h50M7 32h50M7 48h50" stroke="${C.cream2}" stroke-width="5" stroke-linecap="round" ${F}/>
    <circle cx="41" cy="16" r="7" fill="${C.pink}" ${F}/><circle cx="21" cy="32" r="7" fill="${C.blue}" ${F}/><circle cx="38" cy="48" r="7" fill="${C.mint}" ${F}/>`,
  chart: `<rect x="7" y="26" width="14" height="26" rx="3.5" fill="${C.lav}" ${F}/>
    <rect x="25" y="8" width="14" height="44" rx="3.5" fill="${C.blueD}" ${F}/>
    <rect x="43" y="19" width="14" height="33" rx="3.5" fill="${C.mint}" ${F}/>
    <rect x="3" y="51" width="58" height="7" rx="3.5" fill="${C.cream}" ${F}/>`,
  gear: `<g ${F}><path fill="${C.lav}" fill-rule="evenodd" d="${gearPath()}"/></g>`,
  lock: `<path d="M21 30v-8a11 11 0 0 1 22 0v8" fill="none" stroke="${C.cream2}" stroke-width="6.5" stroke-linecap="round" ${F}/>
    <rect x="11" y="27" width="42" height="32" rx="9" fill="${C.mint}" ${F}/>
    <circle cx="32" cy="40" r="4.2" fill="${C.teal}"/><rect x="30.2" y="40" width="3.6" height="9" rx="1.8" fill="${C.teal}"/>`,
  send: `<path d="M5 30L59 7 45 56 31 39z" fill="${C.lavL}" ${F}/>
    <path d="M31 39L59 7 26 33z" fill="${C.lav}" ${F}/>
    <path d="M31 39l-4 14 9-9z" fill="${C.lavD}" ${F}/>
    <path d="M6 50l9-7M10 57l9-7" stroke="${C.cream}" stroke-width="3" stroke-linecap="round"/>`
};
function gearPath(){
  const cx=32, cy=32, R=26, r=19.5, n=8, hole=9.5; let d='';
  for(let i=0;i<n;i++){
    const a=i/n*Math.PI*2, w=Math.PI/n*0.55;
    const pts=[[r,a-w*1.6],[R,a-w],[R,a+w],[r,a+w*1.6]];
    pts.forEach((p,j)=>{ const x=cx+p[0]*Math.cos(p[1]), y=cy+p[0]*Math.sin(p[1]); d+=(i===0&&j===0?'M':'L')+x.toFixed(2)+' '+y.toFixed(2)+' '; });
    const a2=(i+1)/n*Math.PI*2 - w*1.6, x2=cx+r*Math.cos(a2), y2=cy+r*Math.sin(a2);
    d+=`A${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} `;
  }
  return d+`Z M${cx+hole} ${cy} A${hole} ${hole} 0 1 0 ${cx-hole} ${cy} A${hole} ${hole} 0 1 0 ${cx+hole} ${cy} Z`;
}
function icon(name){ return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">${ICONS[name]||ICONS.doc}</svg>`; }
function hydrateIcons(root){ (root||document).querySelectorAll('[data-icon]').forEach(el=>{ if(!el.firstChild) el.innerHTML=icon(el.dataset.icon); }); }
function ico(name,size){ return `<span class="clay-ico ${size||'sm'}">${icon(name)}</span>`; }

/* ---------- Server bridge (Apps Script JSON API) ---------- */
const API_URL = (window.REVENUE_HUB_CONFIG || {}).API_URL || '';
const session = {
  get(){ try{ return JSON.parse(sessionStorage.getItem('rh.session')||'null'); }catch(e){ return null; } },
  set(v){ try{ v ? sessionStorage.setItem('rh.session',JSON.stringify(v)) : sessionStorage.removeItem('rh.session'); }catch(e){} }
};
let TOKEN = (session.get()||{}).token || '';

/** POST as text/plain so the browser skips the CORS pre-flight Apps Script can't answer. */
async function call(body){
  if(!API_URL || /PASTE_YOUR/.test(API_URL)) throw new Error('Set API_URL in config.js to your Apps Script web app URL.');
  const res = await fetch(API_URL, { method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body: JSON.stringify(body), redirect:'follow' });
  if(!res.ok) throw new Error('Server error ('+res.status+')');
  return res.json();
}
async function api(fn, ...args){
  let out;
  try{ out = await call({ action:fn, token:TOKEN, args }); }
  catch(e){ toast(e.message||'Network error','pink'); throw e; }
  if(out.auth){ signOut(true); throw new Error(out.error); }
  if(!out.ok){ toast(out.error||'Something went wrong','pink'); throw new Error(out.error); }
  return out.data;
}
const canEdit   = ()=> S.boot && ['editor','admin'].includes(S.boot.user.role);
const canDelete = ()=> S.boot && S.boot.user.role==='admin';

/* ---------- State ---------- */
const S = { boot:null, dash:null, data:{}, route:{name:'dashboard'}, ui:{} };
const $ = (s,r)=> (r||document).querySelector(s);
const esc = s => String(s==null?'':s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const store = {
  get(k,d){ try{ const v=localStorage.getItem('rh.'+k); return v?JSON.parse(v):d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem('rh.'+k,JSON.stringify(v)); }catch(e){} }
};

/* ---------- Formatting ---------- */
const nfIN = new Intl.NumberFormat('en-IN',{maximumFractionDigits:0});
const inr = n => '₹' + nfIN.format(Math.round(n||0));
function compact(n){
  const a=Math.abs(n||0);
  if(a>=1e7) return '₹'+(n/1e7).toFixed(2)+' Cr';
  if(a>=1e5) return '₹'+(n/1e5).toFixed(1)+' L';
  if(a>=1e3) return '₹'+(n/1e3).toFixed(1)+' K';
  return '₹'+Math.round(n||0);
}
const PALETTE = ['#8C9EE6','#B7A4E6','#7FD0BD','#F29AAE','#F6D88C','#A9C1F0','#D7B6EA','#9ED9E3','#F5B99A','#C5CAD9'];
function toneFor(s){
  s=String(s||'').toLowerCase();
  if(!s) return 'gray';
  if(/inactive|z_|no show|closed|expired/.test(s)) return 'gray';
  if(/not revised|relieving|^np$|notice|pending|moving/.test(s)) return 'pink';
  if(/active|working|revised|done|confirm|yes/.test(s)) return 'mint';
  if(/ext|extension|renew/.test(s)) return 'blue';
  if(/follow|hold|wait/.test(s)) return 'yellow';
  return 'lavender';
}
function initials(n){ return String(n||'?').replace(/\(.*?\)|-/g,' ').trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase(); }
function hashColor(s){ let h=0; for(const ch of String(s)) h=(h*31+ch.charCodeAt(0))>>>0; return PALETTE[h%6]; }

/* ---------- Toasts ---------- */
function toast(msg,tone){
  const el=document.createElement('div'); el.className='toast';
  el.innerHTML=`${ico(tone==='pink'?'bell':'check','sm')}<span>${esc(msg)}</span>`;
  $('#toasts').appendChild(el); setTimeout(()=>el.remove(),3600);
}

/* =====================================================================
   BOOT
   ===================================================================== */
document.addEventListener('DOMContentLoaded', ()=>{
  hydrateIcons();
  bindChrome();
  $('#loginForm').addEventListener('submit', doLogin);
  $('#logoutBtn').onclick = ()=> signOut(false);
  if(TOKEN) startApp(); else showLogin();
});

function showLogin(msg){
  $('#login').hidden=false; $('#app').hidden=true;
  $('#loginErr').textContent = msg||'';
  setTimeout(()=>$('#loginEmail').focus(),50);
}

async function doLogin(e){
  e.preventDefault();
  const btn=$('#loginBtn'); btn.disabled=true; btn.textContent='Signing in…'; $('#loginErr').textContent='';
  try{
    const out = await call({ action:'login', email:$('#loginEmail').value, password:$('#loginPass').value });
    if(!out.ok) throw new Error(out.error);
    TOKEN = out.data.token; session.set(out.data);
    $('#loginPass').value='';
    await startApp();
  }catch(err){ $('#loginErr').textContent = err.message || 'Sign-in failed'; }
  finally{ btn.disabled=false; btn.textContent='Sign in'; }
}

function signOut(expired){
  if(TOKEN && !expired) call({ action:'logout', token:TOKEN }).catch(()=>{});
  TOKEN=''; session.set(null); S.boot=null; S.dash=null; S.data={};
  closeDrawer(); showLogin(expired ? 'Your session expired. Please sign in again.' : '');
}

async function startApp(){
  $('#login').hidden=true; $('#app').hidden=false;
  try{
    S.boot = await api('getBootstrap');
    $('#brandName').textContent = S.boot.app.name;
    $('#brandSub').textContent = S.boot.app.company;
    $('#sheetLink').href = S.boot.app.url;
    $('#avatar').title = S.boot.user.email + ' · ' + S.boot.user.role;
    const hr=new Date().getHours();
    $('#greetHi').textContent = (hr<12?'Good morning':hr<17?'Good afternoon':'Good evening') + ', ' + S.boot.user.name.split(' ')[0] + ' 👋';
    renderNav();
    go({name:'dashboard'});
  }catch(e){
    if(TOKEN) $('#view').innerHTML = emptyState('Could not load the app. Check API_URL in config.js and the sheet names in Code.gs.','lock');
  }
}

function bindChrome(){
  $('#menuBtn').onclick = ()=> $('#sidebar').classList.toggle('open');
  $('#bellBtn').onclick = toggleAlerts;
  $('#scrim').onclick = closeDrawer;
  document.querySelectorAll('.side-foot [data-route]').forEach(b=> b.onclick = ()=> go({name:b.dataset.route}));
  let t; $('#globalSearch').addEventListener('input', e=>{
    clearTimeout(t); t=setTimeout(()=>{
      const q=e.target.value;
      if(S.route.name==='module'){ S.ui.q=q; S.ui.page=0; renderTable(); }
      else if(q.trim().length>1){ go({name:'module', key:'employees', q}); }
    },220);
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeDrawer(); $('#alertPop').hidden=true; } });
  document.addEventListener('click', e=>{
    const pop=$('#alertPop'); if(!pop.hidden && !pop.contains(e.target) && !$('#bellBtn').contains(e.target)) pop.hidden=true;
    const cp=$('.colpicker'); if(cp && !cp.contains(e.target) && !e.target.closest('#colBtn')) cp.remove();
  });
}

function renderNav(){
  const mods=S.boot.modules.filter(m=>m.available);
  $('#nav').innerHTML = `
    <button class="nav-item" data-nav="dashboard">${ico('dashboard','sm')}<span>Dashboard</span></button>
    <div class="nav-label">Workspace</div>
    ${mods.map(m=>`<button class="nav-item" data-nav="${m.key}">${ico(m.icon,'sm')}<span>${esc(m.title)}</span><span class="count">${m.count}</span></button>`).join('')}`;
  $('#nav').querySelectorAll('[data-nav]').forEach(b=> b.onclick=()=>{
    const k=b.dataset.nav; go(k==='dashboard'?{name:'dashboard'}:{name:'module',key:k});
  });
}

function setActiveNav(){
  document.querySelectorAll('.nav-item').forEach(b=>{
    const k=b.dataset.nav||b.dataset.route;
    b.classList.toggle('active', (S.route.name==='module'&&k===S.route.key)||(S.route.name!=='module'&&k===S.route.name));
  });
}

function go(route){
  S.route=route; setActiveNav(); $('#sidebar').classList.remove('open');
  if(route.name!=='module') $('#globalSearch').value='';
  if(route.name==='dashboard') return showDashboard();
  if(route.name==='module') return showModule(route.key, route.q, route.openRow);
  if(route.name==='audit') return showAudit();
}
function loading(){ $('#view').innerHTML='<div class="loader"><div class="blob"></div><div class="blob"></div><div class="blob"></div></div>'; }
function emptyState(msg,icn){ return `<div class="empty">${ico(icn||'doc','xl')}<div>${esc(msg)}</div></div>`; }

/* =====================================================================
   DASHBOARD
   ===================================================================== */
async function showDashboard(force){
  $('#pageTitle').textContent='Dashboard';
  if(!S.dash || force){ loading(); S.dash = await api('getDashboard'); }
  const d=S.dash, k=d.kpis||{};
  updateBell();

  const kpi=(label,icn,value,foot,chipTone,chipTxt)=>`
    <div class="clay kpi fade-in">
      <div class="kpi-top"><span class="kpi-label">${label}</span>${ico(icn,'lg')}</div>
      <div class="kpi-value">${value}</div>
      <div class="kpi-foot">${chipTxt?`<span class="chip t-${chipTone}">${chipTxt}</span> `:''}${foot}</div>
    </div>`;

  $('#view').innerHTML = `
    <div class="kpis">
      ${kpi('Active consultants','user', k.active||0, `${k.notice||0} on notice`, 'mint', `${k.clients||0} clients`)}
      ${kpi('Monthly revenue','chart', compact(k.revenue), 'billing run-rate', 'blue', inr(k.revenue))}
      ${kpi('Monthly margin','check', compact(k.margin), 'after cost to IF', k.marginPct>=20?'mint':'pink', (k.marginPct||0)+'%')}
      ${kpi('Monthly cost','folder', compact(k.cost), 'L&H, TDS, laptop', 'lavender', inr(k.cost))}
    </div>

    <div class="grid">
      <div class="clay card span-8 fade-in">
        <div class="card-h">${ico('chart','md')}<div class="grow"><h3>Revenue trend</h3><div class="sub">From Revenue Ledger · last ${d.trend.length} months</div></div>
          <div class="legend"><span><i style="background:${C.blue}"></i>PO billing</span><span><i style="background:${C.mint}"></i>Margin</span></div></div>
        ${trendChart(d.trend)}
      </div>

      <div class="clay card span-4 fade-in">
        <div class="card-h">${ico('dashboard','md')}<div class="grow"><h3>Headcount by BU</h3><div class="sub">Active + notice period</div></div></div>
        ${donut(d.byBU)}
      </div>

      <div class="clay card span-7 fade-in">
        <div class="card-h">${ico('folder','md')}<div class="grow"><h3>Revenue by client</h3><div class="sub">Monthly run-rate · headcount</div></div></div>
        ${clientBars(d.byClient)}
      </div>

      <div class="clay card span-5 fade-in">
        <div class="card-h">${ico('bell','md')}<div class="grow"><h3>Needs attention</h3><div class="sub">Next ${45} days</div></div>
          <span class="chip t-pink">${d.alerts.length}</span></div>
        ${alertList(d.alerts.slice(0,6))}
      </div>

      <div class="clay card span-6 fade-in">
        <div class="card-h">${ico('check','md')}<div class="grow"><h3>Billing vs target</h3><div class="sub">${esc(d.fyLabel||'')} · INR Crores</div></div></div>
        ${targetBars(d.targets)}
      </div>

      <div class="clay card span-6 fade-in">
        <div class="card-h">${ico('send','md')}<div class="grow"><h3>Recent joiners</h3><div class="sub">Latest client start dates</div></div></div>
        <div class="list">${(d.recent||[]).map(r=>`
          <div class="li" data-open="employees:${r.row}">
            <span class="ini" style="background:${hashColor(r.name)}">${esc(initials(r.name))}</span>
            <div class="grow"><div class="t">${esc(r.name)}</div><div class="s">${esc(r.client)} · ${esc(r.skill)}</div></div>
            <span class="chip t-blue">${esc(r.date)}</span></div>`).join('') || emptyState('No recent joiners','user')}
        </div>
      </div>
    </div>`;

  requestAnimationFrame(()=> document.querySelectorAll('[data-h]').forEach(el=>{ el.style.height=el.dataset.h; }));
  requestAnimationFrame(()=> document.querySelectorAll('[data-w]').forEach(el=>{ el.style.width=el.dataset.w; }));
  bindOpeners($('#view'));
}

function trendChart(t){
  if(!t || !t.length) return emptyState('No monthly data yet','chart');
  const max=Math.max(...t.map(x=>x.po),1);
  return `<div class="cols">${t.map(x=>`
    <div class="col">
      <div class="tip">${esc(x.label)} · PO ${compact(x.po)} · Margin ${compact(x.margin)} · ${x.heads} people</div>
      <div class="col-bars">
        <div class="bar po" style="height:0" data-h="${(x.po/max*100).toFixed(1)}%"></div>
        <div class="bar mg" style="height:0" data-h="${(Math.max(0,x.margin)/max*100).toFixed(1)}%"></div>
      </div>
      <div class="col-lbl">${esc(x.label)}</div>
    </div>`).join('')}</div>`;
}

function donut(list){
  if(!list || !list.length) return emptyState('No data','dashboard');
  const top=list.slice(0,6), rest=list.slice(6).reduce((a,x)=>a+x.headcount,0);
  if(rest) top.push({name:'Others',headcount:rest});
  const total=top.reduce((a,x)=>a+x.headcount,0); let acc=0;
  const stops=top.map((x,i)=>{ const s=acc/total*360; acc+=x.headcount; return `${PALETTE[i]} ${s}deg ${acc/total*360}deg`; }).join(',');
  return `<div class="donut-wrap">
    <div class="donut" style="background:conic-gradient(${stops})"><div class="donut-c"><div>${total}<small>people</small></div></div></div>
    <div class="dl">${top.map((x,i)=>`<div><i style="background:${PALETTE[i]}"></i><span>${esc(x.name)}</span><b>${x.headcount}</b></div>`).join('')}</div>
  </div>`;
}

function clientBars(list){
  if(!list || !list.length) return emptyState('No active billing','folder');
  const top=list.slice(0,8), max=Math.max(...top.map(x=>x.revenue),1);
  return `<div class="hbars">${top.map((x,i)=>`
    <div class="hbar"><span class="nm" title="${esc(x.name)}">${esc(x.name)} <span class="chip t-gray">${x.headcount}</span></span>
      <div class="track"><div class="fill" style="background:${PALETTE[i%PALETTE.length]}" data-w="${(x.revenue/max*100).toFixed(1)}%"></div></div>
      <span class="val">${compact(x.revenue)}</span></div>`).join('')}</div>`;
}

function targetBars(list){
  if(!list || !list.length) return emptyState('No targets found','check');
  return `<div class="prog">${list.map((x,i)=>`
    <div class="prog-row">
      <div class="top">${esc(x.client)} <span>₹${x.actual} / ${x.target} Cr · ${x.pct}%</span></div>
      <div class="track"><div class="fill" style="background:${x.pct>=100?C.mint:x.pct>=60?C.blue:C.pink}" data-w="${Math.min(100,x.pct)}%"></div></div>
    </div>`).join('')}</div>`;
}

function alertList(list){
  if(!list.length) return emptyState('All clear — nothing due soon','check');
  return `<div class="list">${list.map(a=>`
    <div class="li" data-open="${a.module}:${a.row}">
      ${ico(a.icon,'md')}
      <div class="grow"><div class="t">${esc(a.title)}</div><div class="s">${esc(a.type)} · ${esc(a.sub)}</div></div>
      ${a.days===null?'<span class="chip t-yellow">Low</span>':`<span class="chip t-${a.days<0?'gray':a.days<=7?'pink':a.tone}">${a.days<0?Math.abs(a.days)+'d ago':a.days===0?'Today':'in '+a.days+'d'}</span>`}
    </div>`).join('')}</div>`;
}

function updateBell(){
  const n=(S.dash&&S.dash.alerts||[]).length, b=$('#bellBadge');
  b.hidden=!n; b.textContent=n>99?'99+':n;
}
async function toggleAlerts(){
  const pop=$('#alertPop');
  if(!pop.hidden){ pop.hidden=true; return; }
  if(!S.dash) S.dash=await api('getDashboard');
  pop.innerHTML=`<h4>Alerts</h4>${alertList(S.dash.alerts)}`;
  pop.hidden=false; bindOpeners(pop, ()=>pop.hidden=true);
}
function bindOpeners(root, after){
  root.querySelectorAll('[data-open]').forEach(el=> el.onclick=()=>{
    const [key,row]=el.dataset.open.split(':'); if(after) after();
    go({name:'module', key, openRow:Number(row)});
  });
}

/* =====================================================================
   MODULE (table) VIEW
   ===================================================================== */
async function showModule(key, q, openRow){
  const meta=S.boot.modules.find(m=>m.key===key);
  $('#pageTitle').textContent=meta?meta.title:key;
  if(!S.data[key]){ loading(); S.data[key]=prep(await api('getModuleData', key)); }
  const m=S.data[key];
  S.ui={ key, q:q||'', page:0, size:25, sort:null, filters:{}, cols: store.get('cols.'+key, m.defaultCols.length?m.defaultCols:m.columns.slice(0,9).map(c=>c.i)) };
  if(q) $('#globalSearch').value=q;

  $('#view').innerHTML = `
    <div class="mod-head fade-in">
      ${ico(m.icon,'xl')}
      <div class="grow"><h2>${esc(m.title)}</h2><p>${esc(m.desc||'')} · sheet “${esc(m.sheet)}”</p></div>
      <button class="btn btn-ghost" id="refreshBtn">${ico('cloud','xs')} Refresh</button>
      ${canEdit()?'<button class="btn btn-mint" id="addBtn">＋ New record</button>':'<span class="chip t-lavender">View only</span>'}
    </div>
    <div class="toolbar fade-in">
      <label class="search-pill">${ico('search','xs')}<input id="modSearch" placeholder="Search ${esc(m.title.toLowerCase())}…" value="${esc(S.ui.q)}"></label>
      ${m.filterCols.map(i=>{ const c=m.columns[i]; const opts=[...new Set(m.rows.map(r=>r.d[i]).filter(Boolean))].sort();
        return `<select class="select" data-filter="${i}"><option value="">${esc(c.name)}: All</option>${opts.map(o=>`<option>${esc(o)}</option>`).join('')}</select>`; }).join('')}
      <span style="flex:1"></span>
      <div style="position:relative"><button class="btn btn-ghost" id="colBtn">${ico('sliders','xs')} Columns</button></div>
      <button class="btn btn-ghost" id="csvBtn">${ico('doc','xs')} Export</button>
    </div>
    <div class="clay table-card fade-in"><div class="table-scroll" id="tableScroll"></div><div class="pager" id="pager"></div></div>`;

  $('#modSearch').oninput=e=>{ S.ui.q=e.target.value; S.ui.page=0; renderTable(); };
  document.querySelectorAll('[data-filter]').forEach(s=> s.onchange=()=>{ S.ui.filters[s.dataset.filter]=s.value; S.ui.page=0; renderTable(); });
  if($('#addBtn')) $('#addBtn').onclick=()=>openRecord(key,null);
  $('#refreshBtn').onclick=async()=>{ delete S.data[key]; await showModule(key, S.ui.q); toast('Refreshed from sheet'); };
  $('#colBtn').onclick=e=>{ e.stopPropagation(); colPicker(); };
  $('#csvBtn').onclick=exportCSV;
  renderTable();
  if(openRow){ openRecord(key, openRow); }
}

function prep(m){
  m.rows.forEach(r=> r._s = r.d.join(' \u0001 ').toLowerCase());
  return m;
}

function filteredRows(){
  const m=S.data[S.ui.key], q=S.ui.q.trim().toLowerCase();
  let rows=m.rows.filter(r=>{
    if(q && !q.split(/\s+/).every(t=>r._s.includes(t))) return false;
    for(const [i,v] of Object.entries(S.ui.filters)) if(v && r.d[i]!==v) return false;
    return true;
  });
  if(S.ui.sort){
    const {i,dir}=S.ui.sort, col=m.columns[i];
    rows=rows.slice().sort((a,b)=>{
      let x=a.v[i], y=b.v[i];
      if(col.type==='number'){ x=+x||0; y=+y||0; return (x-y)*dir; }
      return String(x).localeCompare(String(y),undefined,{numeric:true})*dir;
    });
  }
  return rows;
}

function renderTable(){
  const m=S.data[S.ui.key]; if(!m || !$('#tableScroll')) return;
  const rows=filteredRows(), cols=S.ui.cols.filter(i=>m.columns[i]);
  const pages=Math.max(1,Math.ceil(rows.length/S.ui.size));
  S.ui.page=Math.min(S.ui.page,pages-1);
  const slice=rows.slice(S.ui.page*S.ui.size,(S.ui.page+1)*S.ui.size);

  $('#tableScroll').innerHTML = rows.length ? `<table>
    <thead><tr>${cols.map(i=>`<th data-sort="${i}">${esc(m.columns[i].name)}${m.columns[i].computed?' <span title="Formula">ƒ</span>':''}<span class="arrow">${S.ui.sort&&S.ui.sort.i===i?(S.ui.sort.dir>0?'▲':'▼'):'↕'}</span></th>`).join('')}</tr></thead>
    <tbody>${slice.map(r=>`<tr data-row="${r.r}">${cols.map(i=>cell(m,r,i)).join('')}</tr>`).join('')}</tbody></table>`
    : emptyState('No records match your search or filters','search');

  $('#pager').innerHTML = `<span>Showing ${rows.length?S.ui.page*S.ui.size+1:0}–${Math.min(rows.length,(S.ui.page+1)*S.ui.size)} of ${rows.length}</span>
    <span class="btns"><button id="pgPrev" ${S.ui.page===0?'disabled':''}>‹</button><button disabled style="width:auto;padding:0 12px">${S.ui.page+1} / ${pages}</button><button id="pgNext" ${S.ui.page>=pages-1?'disabled':''}>›</button></span>`;
  if($('#pgPrev')) $('#pgPrev').onclick=()=>{ S.ui.page--; renderTable(); };
  if($('#pgNext')) $('#pgNext').onclick=()=>{ S.ui.page++; renderTable(); };
  document.querySelectorAll('th[data-sort]').forEach(th=> th.onclick=()=>{
    const i=+th.dataset.sort; S.ui.sort = S.ui.sort&&S.ui.sort.i===i ? (S.ui.sort.dir>0?{i,dir:-1}:null) : {i,dir:1}; renderTable();
  });
  document.querySelectorAll('tbody tr[data-row]').forEach(tr=> tr.onclick=()=>openRecord(S.ui.key, +tr.dataset.row));
}

function cell(m,r,i){
  const col=m.columns[i], d=r.d[i];
  if(i===m.titleCol) return `<td><div class="name-cell"><span class="ini" style="background:${hashColor(d)}">${esc(initials(d))}</span>${esc(d)}</div></td>`;
  if(i===m.statusCol) return `<td>${d?`<span class="chip t-${toneFor(d)}">${esc(d)}</span>`:''}</td>`;
  const cls=[col.type==='number'?'num':'', r.fx.includes(i)?'fx':''].join(' ');
  return `<td class="${cls}" title="${esc(d)}">${esc(d)}</td>`;
}

function colPicker(){
  const old=$('.colpicker'); if(old){ old.remove(); return; }
  const m=S.data[S.ui.key], el=document.createElement('div');
  el.className='clay colpicker'; el.style.right='0'; el.style.top='48px';
  el.innerHTML=`<div style="display:flex;gap:6px;margin-bottom:8px"><button class="btn btn-ghost" data-all="1" style="padding:6px 10px">All</button><button class="btn btn-ghost" data-all="0" style="padding:6px 10px">Reset</button></div>`+
    m.columns.map(c=>`<label><input type="checkbox" value="${c.i}" ${S.ui.cols.includes(c.i)?'checked':''}> ${esc(c.name)} <span style="color:var(--ink-3);margin-left:auto">${c.letter}</span></label>`).join('');
  $('#colBtn').parentElement.appendChild(el);
  const apply=()=>{ store.set('cols.'+S.ui.key,S.ui.cols); renderTable(); };
  el.querySelectorAll('input').forEach(cb=> cb.onchange=()=>{
    S.ui.cols = [...el.querySelectorAll('input:checked')].map(x=>+x.value); apply();
  });
  el.querySelectorAll('[data-all]').forEach(b=> b.onclick=()=>{
    S.ui.cols = b.dataset.all==='1' ? m.columns.map(c=>c.i) : (m.defaultCols.length?m.defaultCols:m.columns.slice(0,9).map(c=>c.i));
    el.querySelectorAll('input').forEach(cb=> cb.checked=S.ui.cols.includes(+cb.value)); apply();
  });
}

function exportCSV(){
  const m=S.data[S.ui.key], cols=S.ui.cols, rows=filteredRows();
  const q=v=>`"${String(v==null?'':v).replace(/"/g,'""')}"`;
  const csv=[cols.map(i=>q(m.columns[i].name)).join(','), ...rows.map(r=>cols.map(i=>q(r.d[i])).join(','))].join('\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob(['﻿'+csv],{type:'text/csv'}));
  a.download=`${m.title.replace(/\s+/g,'_')}_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  toast(`Exported ${rows.length} rows`);
}

/* =====================================================================
   RECORD DRAWER (view / create / edit / delete)
   ===================================================================== */
function openRecord(key,rowNum){
  const m=S.data[key]; const rec=rowNum?m.rows.find(r=>r.r===rowNum):null;
  if(rowNum && !rec){ toast('Record not found — try Refresh','pink'); return; }
  const isNew=!rec;
  const title=isNew?`New ${m.title.replace(/s$/,'').toLowerCase()}`:(rec.d[m.titleCol]||`Row ${rec.r}`);
  const sub=isNew?`Adds a row to “${m.sheet}” · formulas fill automatically`:`${rec.d[m.subCol]||''} · row ${rec.r} in “${m.sheet}”`;

  const fieldHtml=m.columns.map(c=>{
    const locked = rec ? rec.fx.includes(c.i) : c.computed;
    const ro = canEdit() ? '' : ' readonly disabled';
    const id='f_'+c.i, wide=c.type==='longtext'?' wide':'';
    const raw = rec ? rec.v[c.i] : '';
    const disp = rec ? rec.d[c.i] : '';
    let input;
    if(locked) input=`<input class="input" readonly value="${esc(isNew?'Auto-calculated':disp)}">`;
    else if(c.type==='date') input=`<input class="input" type="date" id="${id}" value="${esc(raw)}"${ro}>`;
    else if(c.type==='number') input=`<input class="input" inputmode="decimal" id="${id}" value="${esc(raw)}"${ro}>`;
    else if(c.type==='longtext') input=`<textarea class="input" id="${id}"${ro}>${esc(raw)}</textarea>`;
    else input=`<input class="input" id="${id}" value="${esc(raw)}" ${c.options.length?`list="dl_${c.i}"`:''}${ro}>${c.options.length?`<datalist id="dl_${c.i}">${c.options.map(o=>`<option value="${esc(o)}">`).join('')}</datalist>`:''}`;
    return `<div class="field${wide}"><label>${esc(c.name)} ${locked?'<span class="lk">ƒ formula</span>':''}</label>${input}</div>`;
  }).join('');

  $('#drawer').innerHTML=`
    <div class="dr-head">
      ${rec&&m.titleCol>-1?`<span class="ini" style="width:52px;height:52px;border-radius:18px;font-size:16px;background:${hashColor(title)}">${esc(initials(title))}</span>`:ico(m.icon,'lg')}
      <div style="min-width:0"><h3>${esc(title)}</h3><p>${esc(sub)}</p></div>
      <button class="close-x" id="drClose" aria-label="Close">×</button>
    </div>
    ${rec&&m.statusCol>-1&&rec.d[m.statusCol]?`<div style="padding:0 22px 10px"><span class="chip t-${toneFor(rec.d[m.statusCol])}">${esc(rec.d[m.statusCol])}</span></div>`:''}
    <div class="dr-body"><div class="fields">${fieldHtml}</div></div>
    <div class="dr-foot">
      ${rec&&canDelete()?`<button class="btn btn-pink" id="drDel">Delete</button>`:''}
      <span class="grow"></span>
      <button class="btn btn-ghost" id="drCancel">Cancel</button>
      ${canEdit()?`<button class="btn btn-primary" id="drSave">${isNew?'Create':'Save changes'}</button>`:''}
    </div>`;
  $('#scrim').hidden=false; requestAnimationFrame(()=>$('#drawer').classList.add('open'));
  $('#drClose').onclick=$('#drCancel').onclick=closeDrawer;

  if($('#drSave')) $('#drSave').onclick=async()=>{
    const values={};
    m.columns.forEach(c=>{
      const el=document.getElementById('f_'+c.i); if(!el) return;
      const orig = rec ? String(rec.v[c.i]??'') : '';
      if(el.value!==orig) values[c.i]=el.value;
    });
    if(!Object.keys(values).length){ toast('No changes to save'); return; }
    const btn=$('#drSave'); btn.disabled=true; btn.textContent='Saving…';
    try{
      await api('saveRecord', key, { row: rec?rec.r:null, values });
      toast(isNew?'Record created':'Changes saved');
      closeDrawer(); delete S.data[key]; S.dash=null;
      await showModule(key, S.ui.q);
    }catch(e){ btn.disabled=false; btn.textContent=isNew?'Create':'Save changes'; }
  };

  if($('#drDel')) $('#drDel').onclick=async(e)=>{
    const b=e.currentTarget;
    if(!b.dataset.arm){ b.dataset.arm=1; b.textContent='Tap again to delete'; setTimeout(()=>{ if(b.isConnected){ delete b.dataset.arm; b.textContent='Delete'; } },3500); return; }
    b.disabled=true; b.textContent='Deleting…';
    try{
      await api('deleteRecord', key, rec.r);
      toast('Record deleted · logged in audit sheet');
      closeDrawer(); delete S.data[key]; S.dash=null;
      await showModule(key, S.ui.q);
    }catch(err){ b.disabled=false; b.textContent='Delete'; }
  };
}

function closeDrawer(){
  $('#drawer').classList.remove('open'); $('#scrim').hidden=true;
}

/* =====================================================================
   ACTIVITY LOG
   ===================================================================== */
async function showAudit(){
  $('#pageTitle').textContent='Activity log'; loading();
  const log=await api('getAuditLog');
  $('#view').innerHTML=`
    <div class="mod-head fade-in">${ico('gear','xl')}<div class="grow"><h2>Activity log</h2><p>Every create, update and delete made through the app</p></div></div>
    <div class="clay card fade-in">${log.length?`<div class="list">${log.map(l=>`
      <div class="li" style="cursor:default">${ico(l.action==='DELETE'?'bell':l.action==='CREATE'?'check':'sliders','md')}
        <div class="grow"><div class="t">${esc(l.action)} · ${esc(l.sheet)} row ${esc(l.row)}</div><div class="s" title="${esc(l.details)}">${esc(l.user)} · ${esc(l.details)}</div></div>
        <span class="chip t-lavender">${esc(l.ts)}</span></div>`).join('')}</div>`:emptyState('No activity yet','chat')}</div>`;
}
