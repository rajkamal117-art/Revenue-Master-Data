/* =====================================================================
   REVENUE HUB — client app
   ===================================================================== */

/* ---------- Clay icon set (matches the reference theme) ---------- */
const C = { blue:'#5B8CFF', blueD:'#3F6FF0', blueL:'#8FB0FF', lav:'#9B7BFF', lavL:'#C2B0FF', lavD:'#7F5CF0', mint:'#2FD27E', mintD:'#1FBF6E',
            pink:'#FF5DA8', pinkD:'#EF3F92', yellow:'#FFB84A', cream:'#FFFFFF', cream2:'#2A2E3F', red:'#FF5A45', teal:'#1FBF6E' };
const F = 'filter="url(#clay)"';
const ICONS = {
  dashboard: `<rect x="7" y="12" width="50" height="40" rx="8" fill="none" stroke="#fff" stroke-width="5"/><path d="M7 25h50" stroke="#fff" stroke-width="5"/><circle cx="22" cy="39" r="7" fill="#fff"/><path d="M35 35h14M35 43h10" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`,
  calendar: `<rect x="8" y="12" width="48" height="44" rx="9" fill="none" stroke="#fff" stroke-width="5"/><path d="M8 26h48M22 6v12M42 6v12" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="24" cy="40" r="3.4" fill="#fff"/><circle cx="40" cy="40" r="3.4" fill="#fff"/>`,
  folder: `<path d="M8 20a6 6 0 0 1 6-6h13l6 7h17a6 6 0 0 1 6 6v21a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z" fill="#fff"/>`,
  chat: `<path d="M14 10h26a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H26l-10 8v-8h-2a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z" fill="#fff"/><circle cx="20" cy="24" r="3" fill="rgba(70,40,160,.55)"/><circle cx="28" cy="24" r="3" fill="rgba(70,40,160,.55)"/><circle cx="36" cy="24" r="3" fill="rgba(70,40,160,.55)"/><path d="M52 28a8 8 0 0 1 4 7v8a8 8 0 0 1-8 8h-2l-8 6v-6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>`,
  doc: `<path d="M16 6h22l14 14v32a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6z" fill="#fff"/><path d="M20 31h24M20 40h24M20 49h14" stroke="rgba(0,0,0,.3)" stroke-width="4" stroke-linecap="round"/>`,
  check: `<path d="M14 33l13 13 24-26" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
  bell: `<path d="M32 8c-10 0-17 7.5-17 18v10l-5 8h44l-5-8V26C49 15.5 42 8 32 8z" fill="#fff"/><circle cx="32" cy="54" r="5" fill="#fff"/>`,
  cloud: `<path d="M18 48a11 11 0 0 1-1-22 16 16 0 0 1 31 3 10 10 0 0 1 0 19z" fill="#fff"/><path d="M32 44V28m-7 7l7-7 7 7" stroke="rgba(40,70,200,.75)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  search: `<circle cx="27" cy="27" r="14" fill="none" stroke="#fff" stroke-width="7"/><path d="M38 38l15 15" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,
  sliders: `<path d="M8 16h48M8 32h48M8 48h48" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".55"/><circle cx="42" cy="16" r="7" fill="#fff"/><circle cx="22" cy="32" r="7" fill="#fff"/><circle cx="38" cy="48" r="7" fill="#fff"/>`,
  chart: `<rect x="9" y="30" width="13" height="24" rx="4" fill="#fff" opacity=".7"/><rect x="25" y="10" width="13" height="44" rx="4" fill="#fff"/><rect x="41" y="22" width="13" height="32" rx="4" fill="#fff" opacity=".85"/>`,
  gear: `<path fill="#fff" fill-rule="evenodd" d="${gearPath()}"/>`,
  lock: `<path d="M21 30v-7a11 11 0 0 1 22 0v7" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/><rect x="12" y="28" width="40" height="28" rx="8" fill="#fff"/><circle cx="32" cy="41" r="4" fill="rgba(0,90,50,.55)"/>`,
  send: `<path d="M8 30L58 8 44 56 31 40z" fill="#fff"/><path d="M31 40L58 8 26 34z" fill="rgba(0,0,0,.2)"/>`,
  user: `<circle cx="32" cy="22" r="11" fill="#fff"/><path d="M10 57c0-12 10-19 22-19s22 7 22 19z" fill="#fff"/>`
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
function hydrateIcons(root){ (root||document).querySelectorAll('[data-icon]').forEach(el=>{ el.classList.add('ic-'+el.dataset.icon); if(!el.firstChild) el.innerHTML=icon(el.dataset.icon); }); }
function ico(name,size){ return `<span class="clay-ico ${size||'sm'} ic-${name}">${icon(name)}</span>`; }

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
  if(out.auth){ S.hadToken=!!TOKEN; signOut(true); throw new Error(out.error); }
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
const PALETTE = ['#5B8CFF','#9B7BFF','#2FD27E','#FF5DA8','#FFB84A','#3CD4E8','#FF7A5C','#C77DFF','#7BD88F','#8D96AA'];
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
  startApp();   // the server decides whether a sign-in is needed
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
  closeDrawer(); showLogin(expired && S.hadToken ? 'Your session expired. Please sign in again.' : '');
}

async function startApp(){
  $('#login').hidden=true; $('#app').hidden=false;
  try{
    S.boot = await api('getBootstrap');
    $('#brandName').textContent = S.boot.app.name;
    $('#brandSub').textContent = S.boot.app.company;
    $('#sheetLink').href = S.boot.app.url;
    $('#avatar').title = S.boot.user.email + ' · ' + S.boot.user.role;
    $('#logoutBtn').hidden = !S.boot.requireLogin;
    const hr=new Date().getHours();
    $('#greetHi').textContent = (hr<12?'Good morning':hr<17?'Good afternoon':'Good evening') + ', ' + S.boot.user.name.split(' ')[0] + ' 👋';
    renderNav();
    go({name:'dashboard'});
  }catch(e){
    if($('#login').hidden) $('#view').innerHTML = emptyState('Could not load the app. Check API_URL in config.js and the sheet names in Code.gs.','lock');
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
    <div id="rvBox" class="rv"></div>
    <div class="rv-h">Overall snapshot</div>
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
  loadRevenueView();
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

const alertKey=x=>x.module+':'+x.row+':'+x.type;
const alertsLive=()=>{ const gone=new Set(store.get('alertsGone',[])); return (S.dash&&S.dash.alerts||[]).filter(x=>!gone.has(alertKey(x))); };
const alertImportant=x=>x.days===null||x.days<=7;
function updateBell(){
  const n=alertsLive().length, b=$('#bellBadge');
  b.hidden=!n; b.textContent=n>99?'99+':n;
}
function drawAlerts(tab){
  const pop=$('#alertPop'), all=alertsLive(), imp=all.filter(alertImportant), up=all.filter(x=>!alertImportant(x));
  const list=tab==='important'?imp:tab==='upcoming'?up:all;
  pop.innerHTML=`<div class="ap-head"><h4>Alerts</h4><button class="btn btn-coral" id="apClear">Clear all</button></div>
    <div class="ap-tabs">${[['all','All',all.length],['important','Important',imp.length],['upcoming','Upcoming',up.length]].map(t=>`<button data-tab="${t[0]}" class="${tab===t[0]?'on':''}">${t[1]}<span>${t[2]}</span></button>`).join('')}</div>
    <div class="ap-body">${alertList(list)}</div>
    <div class="ap-foot"><button class="btn btn-coral" id="apExit">Exit</button></div>`;
  pop.querySelectorAll('[data-tab]').forEach(b=> b.onclick=e=>{ e.stopPropagation(); drawAlerts(b.dataset.tab); });
  $('#apClear').onclick=e=>{ e.stopPropagation(); store.set('alertsGone',(S.dash.alerts||[]).map(alertKey)); updateBell(); drawAlerts(tab); };
  $('#apExit').onclick=e=>{ e.stopPropagation(); pop.hidden=true; };
  bindOpeners(pop, ()=>pop.hidden=true);
}
async function toggleAlerts(){
  const pop=$('#alertPop');
  if(!pop.hidden){ pop.hidden=true; return; }
  if(!S.dash) S.dash=await api('getDashboard');
  drawAlerts('all'); pop.hidden=false;
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

/* =====================================================================
   REVENUE EXPLORER  (collapsible Filters panel + revenue | margin switch)
   Data comes from the Apps Script function getRevenueView (Code.gs)
   ===================================================================== */
S.rv = Object.assign({ client:'All', year:'', month:'All', metric:'revenue', ex:{}, open:true, data:null }, store.get('rvf', {}));
function rvSave(){ const f=S.rv; store.set('rvf',{client:f.client,year:f.year,month:f.month,metric:f.metric,ex:f.ex,open:f.open}); }

async function loadRevenueView(){
  const box=$('#rvBox'); if(!box) return;
  const f=S.rv;
  if(f.data) box.style.opacity='.55'; else box.innerHTML='<div class="loader"><div class="blob"></div><div class="blob"></div><div class="blob"></div></div>';
  try{ f.data = await api('getRevenueView', f.client, f.year, f.month==='All' ? '' : f.month, f.ex||{}); }
  catch(e){ box.style.opacity=''; box.innerHTML = emptyState('Could not load the revenue view. Update Code.gs, then redeploy a new version.','chart'); return; }
  const s=f.data.sel; f.client=s.client; f.year=s.year; f.month=s.month; f.ex=s.ex||{};
  rvSave(); box.style.opacity='';
  renderRevenueView();
}

function rvOptions(list, selected){
  return list.map(v=>`<option value="${esc(v)}"${String(v)===String(selected)?' selected':''}>${esc(v)}</option>`).join('');
}

function rvBars(list, metric){
  if(!list || !list.length) return emptyState('No data for this selection','chart');
  const top=[...list].sort((a,b)=>b[metric]-a[metric]).slice(0,8);
  const max=Math.max(...top.map(x=>Math.abs(x[metric])),1);
  return `<div class="hbars">${top.map((x,i)=>`
    <div class="hbar"><span class="nm" title="${esc(x.name)}">${esc(x.name)}${x.headcount?` <span class="chip t-gray">${x.headcount}</span>`:''}</span>
      <div class="track"><div class="fill" style="background:${x[metric]<0?C.pink:PALETTE[i%PALETTE.length]}" data-w="${(Math.abs(x[metric])/max*100).toFixed(1)}%"></div></div>
      <span class="val">${compact(x[metric])}</span></div>`).join('')}</div>`;
}

function renderRevenueView(){
  const box=$('#rvBox'), f=S.rv, d=f.data; if(!box||!d) return;
  const m=f.metric, mLabel=m==='margin'?'margin':'revenue', k=d.kpi, s=d.sel, defs=d.opts.filters||[], ex=s.ex||{};
  const who=s.client==='All'?'All clients':s.client;
  const period=`${who} · ${s.month==='All'?'Full year':s.month} ${s.year==='All'?'(all years)':s.year}`;

  const active=[];
  if(s.client!=='All') active.push({k:'client',l:'Client',v:s.client});
  if(s.month!=='All') active.push({k:'month',l:'Month',v:s.month});
  if(String(s.year)!==String(d.opts.years[0])) active.push({k:'year',l:'Year',v:s.year==='All'?'All years':s.year});
  defs.forEach(x=>{ if(ex[x.key]) active.push({k:'ex:'+x.key,l:x.label,v:ex[x.key]}); });

  const field=(label,key,list,sel)=>`<label class="rv-f"><span>${esc(label)}</span><select class="input" data-rv="${esc(key)}">${rvOptions(['All'].concat(list),sel)}</select></label>`;
  const kpi=(label,icn,value,foot,on)=>`
    <div class="clay kpi fade-in${on?' sel':''}"><div class="kpi-top"><span class="kpi-label">${label}</span>${ico(icn,'lg')}</div>
      <div class="kpi-value">${value}</div><div class="kpi-foot">${foot}</div></div>`;
  const hasSBU = d.bySBU.some(x=>x.name!=='Unassigned');
  const card=(span,icn,title,sub,body)=>`<div class="clay card span-${span} fade-in"><div class="card-h">${ico(icn,'md')}<div class="grow"><h3>${title}</h3><div class="sub">${sub}</div></div></div>${body}</div>`;
  const tr=d.trend.map(x=>({label:x.label, po:x.revenue, margin:x.margin, heads:x.heads}));

  box.innerHTML = `
    <div class="clay rv-filters fade-in">
      <div class="rv-fh" data-toggle>
        ${ico('sliders','md')}
        <div class="grow"><b>Filters</b><div class="sub">${active.length?active.length+' active':'Client, year, month and '+defs.length+' more'}</div></div>
        <span class="rv-chev${f.open?' up':''}"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </div>
      <div class="rv-fp${f.open?' open':''}"><div class="rv-fpi">
        <div class="rv-fgrid">
          ${field('Client','client',d.opts.clients,s.client)}
          ${field('Year','year',d.opts.years,s.year)}
          ${field('Month','month',d.opts.months,s.month)}
          ${defs.map(x=>field(x.label,'ex:'+x.key,x.values,ex[x.key]||'All')).join('')}
        </div>
        <div class="rv-fa"><button class="btn btn-ghost" data-reset>Reset all filters</button></div>
      </div></div>
      ${active.length?`<div class="rv-chips">${active.map(a=>`<button class="chip t-lavender" data-clear="${esc(a.k)}">${esc(a.l)}: ${esc(a.v)} ✕</button>`).join('')}</div>`:''}
    </div>
    <div class="rv-top"><div><div class="rv-h">${esc(period)}</div>${d.note?`<div class="rv-note">${esc(d.note)}</div>`:''}</div>
      <div class="seg" role="group" aria-label="Metric"><button data-metric="revenue" class="${m==='revenue'?'on':''}">Revenue</button><button data-metric="margin" class="${m==='margin'?'on':''}">Margin</button></div></div>
    <div class="kpis">
      ${kpi('Revenue','chart',compact(k.revenue),inr(k.revenue),m==='revenue')}
      ${kpi('Margin','check',compact(k.margin),inr(k.margin),m==='margin')}
      ${kpi('Margin %','dashboard',k.pct+'%','of revenue',false)}
      ${kpi('Consultants','user',k.heads,'billing in period',false)}
    </div>
    <div class="grid rv-grid">
      ${card(12,'chart','Monthly trend',`${esc(who)} · ${s.year==='All'?'all years':s.year}`,trendChart(tr))}
      ${card(6,'dashboard',`BU-wise ${mLabel}`,'Business unit',rvBars(d.byBU,m))}
      ${card(6,'cloud',`Location-wise ${mLabel}`,'Resource location',rvBars(d.byLoc,m))}
      ${s.client==='All'?card(6,'folder',`Client-wise ${mLabel}`,'All clients',rvBars(d.byClient,m)):''}
      ${hasSBU?card(6,'sliders',`Sub BU-wise ${mLabel}`,'Sub business unit',rvBars(d.bySBU,m)):''}
      ${card(6,'user',`Top consultants by ${mLabel}`,'Top 8',rvBars(d.people,m))}
    </div>`;

  box.querySelector('[data-toggle]').onclick=()=>{
    f.open=!f.open; rvSave();
    box.querySelector('.rv-fp').classList.toggle('open',f.open);
    box.querySelector('.rv-chev').classList.toggle('up',f.open);
  };
  box.querySelectorAll('[data-rv]').forEach(sel=> sel.onchange=()=>{
    const key=sel.dataset.rv, v=sel.value;
    if(key.startsWith('ex:')){ f.ex=Object.assign({},f.ex); if(v==='All') delete f.ex[key.slice(3)]; else f.ex[key.slice(3)]=v; }
    else f[key]= key==='year' && v!=='All' ? Number(v) : v;
    loadRevenueView();
  });
  box.querySelectorAll('[data-clear]').forEach(b=> b.onclick=()=>{
    const key=b.dataset.clear;
    if(key.startsWith('ex:')){ f.ex=Object.assign({},f.ex); delete f.ex[key.slice(3)]; }
    else if(key==='client') f.client='All'; else if(key==='month') f.month='All'; else if(key==='year') f.year='';
    loadRevenueView();
  });
  box.querySelector('[data-reset]').onclick=()=>{ f.client='All'; f.year=''; f.month='All'; f.ex={}; loadRevenueView(); };
  box.querySelectorAll('[data-metric]').forEach(b=> b.onclick=()=>{ f.metric=b.dataset.metric; rvSave(); renderRevenueView(); });
  requestAnimationFrame(()=>{
    box.querySelectorAll('[data-h]').forEach(el=>{ el.style.height=el.dataset.h; });
    box.querySelectorAll('[data-w]').forEach(el=>{ el.style.width=el.dataset.w; });
  });
}
