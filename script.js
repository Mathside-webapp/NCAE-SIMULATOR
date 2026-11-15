/* Original classroom-created practice items. Not official NCAE questions. */
window.NCAE_PARTV_PASSAGES = {
  coastal: {
    title: 'Community Mangrove Project',
    text: 'A coastal barangay experienced frequent flooding during strong storms. A group of students proposed planting mangroves along a suitable part of the shoreline. Before starting, they interviewed local fishers, consulted the municipal environment office, and checked whether the site could support mangrove seedlings. Volunteers then planted native seedlings and recorded how many survived every month. After six months, the group found that most seedlings in sheltered areas survived, while seedlings exposed to strong waves had lower survival rates. The students recommended protecting the young plants and continuing the monitoring program before drawing conclusions about long-term flood reduction.'
  },
  library: {
    title: 'A Better Library Schedule',
    text: 'The school library used to close immediately after the last class. Several learners wanted a quiet place to read or finish assignments, especially those waiting for transportation. The librarian conducted a short survey and found that many students preferred an extra thirty minutes of library access. A four-week trial was introduced on Tuesdays and Thursdays. Visitors signed a logbook, and teachers volunteered to help supervise. At the end of the trial, the librarian compared attendance records and collected feedback. Although attendance increased, the school decided to review staffing and safety arrangements before making the extended schedule permanent.'
  }
};
window.NCAE_PARTV_QUESTIONS = [
  {category:'Scientific Ability',stem:'A student wants to test how sunlight affects plant growth. Which variable should the student change?',options:['Type of soil','Amount of sunlight','Kind of plant','Amount of water'],answer:1},
  {category:'Scientific Ability',stem:'Which process changes liquid water into water vapor?',options:['Condensation','Freezing','Evaporation','Melting'],answer:2},
  {category:'Scientific Ability',stem:'A metal spoon becomes warm after being left in hot soup. What is the main method of heat transfer through the spoon?',options:['Radiation','Evaporation','Conduction','Reflection'],answer:2},
  {category:'Scientific Ability',stem:'Which organ pumps blood throughout the human body?',options:['Lungs','Liver','Stomach','Heart'],answer:3},
  {category:'Scientific Ability',stem:'An object travels 120 meters in 20 seconds at a constant speed. What is its speed?',options:['4 m/s','6 m/s','8 m/s','12 m/s'],answer:1},
  {category:'Mathematical Ability',stem:'What is 25% of 240?',options:['40','50','60','80'],answer:2},
  {category:'Mathematical Ability',stem:'Solve for x: 3x + 7 = 28.',options:['5','6','7','8'],answer:2},
  {category:'Mathematical Ability',stem:'A notebook costs ₱35. How much do 4 notebooks cost?',options:['₱120','₱130','₱140','₱150'],answer:2},
  {category:'Mathematical Ability',stem:'A right triangle has legs of 6 cm and 8 cm. What is the hypotenuse?',options:['9 cm','10 cm','12 cm','14 cm'],answer:1},
  {category:'Mathematical Ability',stem:'Which is the slope of the line passing through (1, 2) and (3, 8)?',options:['2','3','4','6'],answer:1},
  {category:'Reading Comprehension',passage:'coastal',stem:'What problem led the community to consider planting mangroves?',options:['Low fish prices','Frequent flooding during storms','A lack of school buildings','A shortage of drinking water'],answer:1},
  {category:'Reading Comprehension',passage:'coastal',stem:'Why did the students consult the environment office before planting?',options:['To choose a suitable site and approach','To request new textbooks','To sell the seedlings','To stop all fishing'],answer:0},
  {category:'Reading Comprehension',passage:'coastal',stem:'Where did more seedlings survive?',options:['Areas exposed to strong waves','Sheltered areas','Concrete roads','Dry hillsides'],answer:1},
  {category:'Reading Comprehension',passage:'coastal',stem:'Which conclusion is best supported by the passage?',options:['Mangroves had already eliminated flooding.','Wave exposure may affect seedling survival.','All seedlings died in six months.','Mangroves cannot grow near a shoreline.'],answer:1},
  {category:'Reading Comprehension',passage:'coastal',stem:'Why did the students recommend continued monitoring?',options:['To avoid writing any report','To support stronger conclusions over time','To remove the surviving seedlings','To replace interviews with guessing'],answer:1},
  {category:'Verbal Ability',stem:'Choose the word closest in meaning to “accurate.”',options:['Correct','Careless','Distant','Difficult'],answer:0},
  {category:'Verbal Ability',stem:'Choose the word opposite in meaning to “scarce.”',options:['Rare','Limited','Abundant','Small'],answer:2},
  {category:'Verbal Ability',stem:'Complete the analogy: Doctor is to hospital as teacher is to ___.',options:['Market','School','Airport','Farm'],answer:1},
  {category:'Verbal Ability',stem:'Choose the grammatically correct sentence.',options:['She don’t like reading.','They was at the library.','He have finished the task.','We were ready for the activity.'],answer:3},
  {category:'Verbal Ability',stem:'Select the best word to complete the sentence: “The instructions were clear, ___ everyone understood the task.”',options:['because','so','although','unless'],answer:1}
];

;
(()=>{
'use strict';
const Q=window.NCAE_PARTV_QUESTIONS||[];
const PASSAGES=window.NCAE_PARTV_PASSAGES||{};
const CATEGORIES=['Scientific Ability','Mathematical Ability','Reading Comprehension','Verbal Ability'];
const STORAGE='ncae-part-v-20-practice-v2';
const TRAINING_CODE='BEWNHS@63'; // Client-side classroom practice password only; not secure authentication.
const ENROLMENT_KEY='BICOL-PRACTICE'; // Fictional REGION V classroom key only. NEVER an official enrollment key.
const CATEGORY_TITLE='Computer-Based Assessments / Computer-Based National Career Assessment Examination (CB-NCAE) SY 2026-2027';
const REGIONS=[
 ['NCR','NATIONAL CAPITAL REGION (NCR)','NCR','#65a0da','#253a7a'],
 ['CAR','CORDILLERA ADMINISTRATIVE REGION (CAR)','CAR','#eec65b','#693236'],
 ['R1','REGION I - ILOCOS','R1','#0aa2c3','#204a36'],
 ['R2','REGION II - CAGAYAN VALLEY','R2','#1c4bc2','#253884'],
 ['R3','REGION III - CENTRAL LUZON','R3','#7652e7','#6a264a'],
 ['R4A','REGION IV-A - CALABARZON','R4A','#eb4d61','#d02d28'],
 ['MIMAROPA','MIMAROPA REGION','MIMAROPA','#32859d','#245a49'],
 ['R5','REGION V - BICOL','R5','#9ca2ad','#292a2e'],
 ['R6','REGION VI - WESTERN VISAYAS','R6','#65b8ec','#7836a1'],
 ['NIR','NEGROS ISLAND REGION (NIR)','NIR','#44b07d','#244b32'],
 ['R7','REGION VII - CENTRAL VISAYAS','R7','#22619d','#162f53'],
 ['R8','REGION VIII - EASTERN VISAYAS','R8','#b5da17','#3b7852'],
 ['R9','REGION IX - ZAMBOANGA PENINSULA','R9','#ed7c52','#df5228'],
 ['R10','REGION X - NORTHERN MINDANAO','R10','#98653c','#442c34'],
 ['R11','REGION XI - DAVAO','R11','#6c7983','#45484e'],
 ['R12','REGION XII - SOCCSKSARGEN','R12','#8f6ba4','#34294f'],
 ['CARAGA','CARAGA REGION','CARAGA','#bfa340','#493d33'],
 ['BARMM','BANGSAMORO AUTONOMOUS REGION IN MUSLIM MINDANAO (BARMM)','BARMM','#42763e','#283e22']
];
let catalogSearch='';
const LOADING_MS=3000;
const $=id=>document.getElementById(id);
const app=$('app');const modalRoot=$('modal-root');const toastNode=$('toast');
const fresh=()=>({version:1,enrolled:false,mode:'guided',minutes:60,startedAt:null,deadline:null,submittedAt:null,timeExpired:false,answers:{},flags:[]});
function load(){try{const data=JSON.parse(localStorage.getItem(STORAGE)||'null');return data?.version===1?{...fresh(),...data,answers:data.answers||{},flags:Array.isArray(data.flags)?data.flags:[]}:fresh();}catch{return fresh();}}
let p=load(),screen='login',identifier='',displayName='Practice Learner',msIdentifier='',questionIndex=0,previousScreen='login',modal=null,loadTimer=null,loadingDeadline=0,loadingTarget=null,toastTimer=null;
// A triple login challenge uses ephemeral data only: no password or typed username goes into localStorage.
let msRound=1,msReference='',msCompleted=[],msHardMode=false;
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(p));}catch{notify('Browser storage unavailable; answers may not survive a refresh.');}}
function notify(text){toastNode.textContent=text;toastNode.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastNode.hidden=true,3200);}
function signedIn(){return !!identifier;}
function answered(){return Q.filter((_,i)=>Object.hasOwn(p.answers,i)).length;}
function finished(){return Boolean(p.submittedAt);}
function attemptLive(){return Boolean(p.startedAt&&!finished());}
function remaining(){return p.deadline?Math.max(0,p.deadline-Date.now()):p.minutes*60000;}
function clockText(ms){let sec=Math.ceil(Math.max(0,ms)/1000);return `${String(Math.floor(sec/3600)).padStart(2,'0')}:${String(Math.floor(sec%3600/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;}
function checkExpiry(){if(attemptLive()&&Date.now()>=p.deadline){p.submittedAt=p.deadline;p.timeExpired=true;save();if(['quiz','review','intro'].includes(screen)){screen='done';modal=null;modalRoot.innerHTML='';notify('Time is up. Your practice attempt was submitted.');return true;}}return false;}
function banner(){return `<div class="notice-strip">NCAE PRACTICE — UNOFFICIAL TRAINING SIMULATION · ORIGINAL PRACTICE QUESTIONS ONLY</div>`;}
function brand(){return `<div class="brand"><span class="brand-logo" aria-hidden="true">N</span><div><div class="brand-main">NCAE Practice</div><div class="brand-sub">Learning Management System · Training</div></div></div>`;}
function microsoftLogo(){return `<span class="ms-logo"><span class="ms-tiles" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Microsoft</span>`;}
function footer(){return `<footer class="footer"><span>Unofficial classroom training only · Not affiliated with DepEd or Microsoft</span><span>Practice-only data stays in this browser</span></footer>`;}
function button(action,text,cls='btn-outline',extras=''){return `<button type="button" class="btn ${cls}" data-action="${action}" ${extras}>${text}</button>`;}
function fakeLink(action,text){return `<button type="button" class="btn-link" data-action="${action}">${text}</button>`;}
function header(){return `<header class="surface-header"><div class="surface-header-inner">${brand()}<div class="header-links">${button('dashboard','Dashboard','btn-outline btn-small')}${button('catalog','Courses','btn-outline btn-small')}${p.enrolled?button('open-region','Region V','btn-outline btn-small'):''}${button('teacher','Teacher practice tools','btn-outline btn-small')}${button('logout','Sign out','btn-navy btn-small','title="Clears this student’s practice session and returns to login"')}</div></div></header>`;}
function fullPage(body,{withHeader=true}={}){return `<div class="screen-shell">${banner()}${withHeader?header():''}${body}${footer()}</div>`;}
function loginScreen(){return `<div class="screen-shell">${banner()}<div class="login-background"><main class="login-main"><section class="login-card" aria-label="NCAE Practice login"><div class="login-left"><div class="login-brand">${brand()}</div><form id="basic-login" class="login-form"><label class="sr-only" for="login-id" style="position:absolute;clip:rect(0,0,0,0)">Username</label><input id="login-id" class="input-regular" name="username" placeholder="Username" autocomplete="off" required><label class="sr-only" for="login-pass" style="position:absolute;clip:rect(0,0,0,0)">Password</label><input id="login-pass" type="password" class="input-regular" name="password" placeholder="Password" autocomplete="off" required><button type="submit" class="btn btn-navy login-submit">Log in</button><button type="button" class="btn login-recover btn-link" data-action="forgot">Lost password?</button></form></div><div class="login-right"><div>Sign in with</div><button type="button" class="ms-button" data-action="ms-start" aria-label="Start three-round Microsoft-style login practice">${microsoftLogo()}</button><button type="button" class="cookie-link" data-action="cookies"><span class="cookie-question">?</span> Cookies notice</button></div></section></main><div class="login-footer-tools"><span>Do not enter real school credentials.</span><button data-action="teacher">Teacher practice tools</button></div>${footer()}</div></div>`;}
function authFrame(content,extra=''){return fullPage(`<main class="auth-background">${['ms-email','ms-password'].includes(screen)?hardModeSwitch():''}<div class="auth-stack"><section class="auth-card">${content}</section>${extra}<p class="auth-note center">Unofficial classroom practice · Not connected to Microsoft. Never enter real account passwords.</p></div></main>`,{withHeader:false});}
function authLoading(){return authFrame(`<div class="ms-loading-card">${microsoftLogo()}<h1>Trying to sign you in</h1><div class="ms-loading-dots" role="status" aria-label="Loading for three seconds"><i></i><i></i></div></div>`);}
function tripleProgress(){
 const steps=[1,2,3].map(n=>`<div class="triple-step ${n<msRound?'complete':n===msRound?'current':''}" ${n===msRound?'aria-current="step"':''}><span class="step-number">${n<msRound?'✓':n}</span><span>Login ${n}</span></div>`);
 return `<section class="triple-progress" aria-label="Login practice progress"><div class="triple-steps">${steps[0]}<span class="triple-track ${msRound>1?'complete':''}"></span>${steps[1]}<span class="triple-track ${msRound>2?'complete':''}"></span>${steps[2]}</div></section>`;
}
function tripleHeader(kind){
 const instruction=kind==='username'
 ? (msHardMode
    ? (msRound===1?'Hard Mode: Your account name is hidden as you type. Use the same name in all three logins.':'Hard Mode: Your account name is hidden. Type exactly the same name as Login 1.')
    : (msRound===1?'Enter your practice account name. You will use the same name three times.':'Enter exactly the same account name as your first login.'))
 : 'Enter the classroom practice password. It stays hidden while you type.';
 return `<div class="triple-card-top">${tripleProgress()}<p class="triple-guide" id="ms-step-guide">${instruction}</p></div>`;
}
function hardModeSwitch(){
 return `<div class="ms-hard-mode-bar"><button type="button" class="ms-hard-toggle ${msHardMode?'enabled':''}" data-action="toggle-ms-hard-mode" aria-pressed="${msHardMode}" title="${msHardMode?'Show account name while typing':'Hide account name while typing'}"><span aria-hidden="true" class="ms-hard-lock">${msHardMode?'●':'○'}</span> Hard Mode <span class="ms-hard-state">${msHardMode?'ON':'OFF'}</span></button></div>`;
}
function authEmail(){return authFrame(`${tripleHeader('username')}${microsoftLogo()}<h1>Sign in</h1><form id="ms-email-form" novalidate><label class="sr-only" for="ms-email">Practice account name</label><input id="ms-email" type="${msHardMode?'password':'text'}" class="ms-input" name="email" placeholder="Email, phone, or Skype" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" data-lpignore="true" value="${escapeHTML(msIdentifier)}" aria-describedby="ms-email-error"><div id="ms-email-error" class="auth-inline-error" role="alert" aria-live="polite" hidden></div><div class="ms-actions"><button type="button" class="ms-action" data-action="ms-back-login">${msRound>1?'Previous login':'Back'}</button><button type="submit" class="ms-action main" data-action="ms-email-next">Next</button></div></form>`);}
function authPassword(){return authFrame(`${tripleHeader('password')}${microsoftLogo()}<h1>Enter password</h1><form id="ms-password-form" novalidate><label class="sr-only" for="ms-password">Practice password</label><input id="ms-password" type="password" class="ms-input" name="password" placeholder="Password" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="ms-password-error"><div id="ms-password-error" class="auth-inline-error" role="alert" aria-live="polite" hidden></div><div class="ms-actions"><button type="button" class="ms-action" data-action="ms-back-email">Back</button><button type="submit" class="ms-action main" data-action="ms-password-next">Sign in</button></div></form>`);}
function toggleMsHardMode(){
 msHardMode=!msHardMode;
 const field=$('ms-email');
 // Changing the type directly preserves the user's unsent value and caret, even on Back.
 if(field)field.type=msHardMode?'password':'text';
 const toggle=document.querySelector('.ms-hard-toggle');
 if(toggle){
   toggle.classList.toggle('enabled',msHardMode);
   toggle.setAttribute('aria-pressed',String(msHardMode));
   toggle.title=msHardMode?'Show account name while typing':'Hide account name while typing';
   const icon=toggle.querySelector('.ms-hard-lock'),state=toggle.querySelector('.ms-hard-state');
   if(icon)icon.textContent=msHardMode?'●':'○';
   if(state)state.textContent=msHardMode?'ON':'OFF';
 }
 const guide=$('ms-step-guide');
 if(guide){
   if(screen==='ms-email')guide.textContent=msHardMode
     ? (msRound===1?'Hard Mode: Your account name is hidden as you type. Use the same name in all three logins.':'Hard Mode: Your account name is hidden. Type exactly the same name as Login 1.')
     : (msRound===1?'Enter your practice account name. You will use the same name three times.':'Enter exactly the same account name as your first login.');
 }
 // The floating physical-key monitor must not highlight masked account characters.
 document.dispatchEvent(new Event('ncae:input-privacy-changed'));
}
function loadingTo(target){clearTimeout(loadTimer);loadingTarget=target;loadingDeadline=Date.now()+LOADING_MS;screen='ms-loading';render();loadTimer=setTimeout(()=>{if(screen!=='ms-loading'||loadingTarget!==target)return;screen=target;loadingTarget=null;render();},LOADING_MS);}
function enterCourse(alias){identifier='simulated';displayName=alias&&alias.trim()?alias.trim().slice(0,40):'Practice Learner';msIdentifier='';screen='dashboard';render();}
function sidebar(){return `<aside class="stack"><section class="side-panel"><h3>Navigation</h3><div class="side-inner"><button type="button" class="side-link active" data-action="course">Practice course <span>›</span></button>${[1,2,3,4].map(n=>`<div class="side-link" style="cursor:default;color:#71879c">Part ${toRoman(n)} <small>✓</small></div>`).join('')}<button type="button" class="side-link" data-action="intro">Part V — GSA <small>${finished()?'✓':'›'}</small></button><button type="button" class="side-link" data-action="teacher">Teacher tools <small>›</small></button></div></section><section class="side-panel"><h3>Practice progress</h3><div class="side-progress"><div class="strong">${finished()?'5':'4'} of 5 Parts</div><div class="bar" aria-label="${finished()?'100':'80'} percent finished"><span style="width:${finished()?'100':'80'}%"></span></div><div class="progress-note">Parts I–IV are marked complete for this scenario.</div></div></section></aside>`;}
function work(body,crumb='Part V — General Scholastic Aptitude'){return fullPage(`<main class="workspace"><div class="crumbs"><button data-action="course">Home</button><span>›</span><span>${escapeHTML(crumb)}</span></div><div class="content-layout">${sidebar()}<div class="stack">${body}</div></div></main>`);}
function card(content,{title='',subtitle='',foot=''}={}){return `<section class="card">${title?`<div class="card-head"><h2>${title}</h2>${subtitle?`<p class="small muted mt8">${subtitle}</p>`:''}</div>`:''}<div class="card-content">${content}</div>${foot?`<div class="card-foot">${foot}</div>`:''}</section>`;}
function toRoman(n){return ['','I','II','III','IV','V'][n]||String(n);}
function subjects(){return `<div class="subject-grid">${CATEGORIES.map((c,i)=>`<div class="subject"><div class="subject-num">SECTION ${String(i+1).padStart(2,'0')} · QUESTIONS ${i*5+1}–${i*5+5}</div><h3>${escapeHTML(c)}</h3><p>5 original multiple-choice practice questions</p></div>`).join('')}</div>`;}
function dashboardScreen(){
 const body=card(`<div class="upper">Learning Management System · Practice dashboard</div><h1 class="mt8">Welcome to NCAE Practice</h1><p class="lead mt14">You have signed in to an unofficial classroom simulation. Browse the regional courses to find your assigned Region V course.</p><div class="notice info mt20"><b>Training scenario:</b> Parts I–IV are already marked completed. Select Region V and enter the classroom enrolment key before opening Part V and beginning the 20-item practice examination.</div>`,{title:'Dashboard'});
 const course=card(`<div class="upper">My courses</div><h2 class="mt8">Computer-Based National Career Assessment Examination (CB-NCAE)</h2><p class="muted mt14">SY 2026–2027 · Region V — Bicol · Part V General Scholastic Aptitude</p><div class="mt20">${button('catalog','Browse regional courses →','btn-primary')}${p.enrolled?' '+button('course','Open enrolled Region V course','btn-outline'):''}</div>`,{title:'Computer-Based Assessments'});
 const profile=card(`<p><b>Student:</b> Fictional practice learner</p><p class="muted mt8">No real identity or school account information is collected.</p><div class="mt14">${button('profile','View practice profile','btn-outline')}</div>`,{title:'Practice learner profile'});
 return fullPage(`<main class="workspace"><div class="crumbs"><span>Home</span><span>›</span><span>Dashboard</span></div><div class="stack">${body}${course}${profile}</div></main>`);
}
function regionCover(region){
 const [code,name,abbr,light,dark]=region;
 return `<div class="region-cover" style="--region-light:${light};--region-dark:${dark}" aria-hidden="true"><div class="region-seal"><span>CB NCAE</span><strong>${escapeHTML(abbr)}</strong><span>TRAINING</span></div><div class="region-title-art ${name.length>48?'long-title':''}">${escapeHTML(name)}</div><div class="region-cover-bottom">NCAE PRACTICE · SIMULATION</div></div>`;
}
function regionCard(region){
 const [code,name]=region,active=code==='R5';
 const contents=`<div class="region-thumbnail"><div class="region-overlay">Computer-Based National Career Assessment Examination (CB-NCAE) SY 2026-2027</div>${regionCover(region)}</div><div class="region-card-caption">${escapeHTML(code)} - Computer-Based National Career Assessment Examination (CB-NCAE)${active?'<span class="region-allowed">Available for practice</span>':''}</div>`;
 return `<article class="regional-card ${active?'region-open':'region-closed'}" data-region="${escapeHTML(code)}" data-search="${escapeHTML((code+' '+name+' Computer-Based National Career Assessment Examination CB-NCAE').toLowerCase())}">${active?`<button class="regional-card-link" type="button" data-action="open-region" aria-label="Open Region V - Bicol practice course">${contents}</button>`:`<div class="regional-card-disabled" aria-label="${escapeHTML(name)} — not available for this classroom simulation">${contents}</div>`}</article>`;
}
function catalogScreen(){return fullPage(`<main class="catalog-workspace"><div class="catalog-crumb"><button data-action="dashboard">Dashboard</button> › Computer-Based Assessments › CB-NCAE SY 2026-2027</div><section class="catalog-panel"><h1 class="catalog-heading">Computer-Based National Career Assessment Examination (CB-NCAE) SY 2026-2027</h1><div class="category-select-wrap"><label class="sr-only" for="catalog-category">Course categories</label><select id="catalog-category" class="catalog-category"><option>${CATEGORY_TITLE}</option></select></div><div class="catalog-search-wrap"><label class="sr-only" for="catalog-search">Search courses</label><input type="search" id="catalog-search" placeholder="Search courses" value="${escapeHTML(catalogSearch)}"><button type="button" aria-label="Search courses" data-action="search-courses"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"><circle cx="10.7" cy="10.7" r="6.8"/><path d="m16 16 5 5"/></svg></button></div><p class="catalog-availability">Only <strong>R5 — Region V (Bicol)</strong> is enabled in this classroom training simulation. Other course cards are displayed for LMS navigation practice but cannot be opened.</p><div class="region-grid" id="region-grid">${REGIONS.map(regionCard).join('')}</div><p class="catalog-empty" id="catalog-empty" hidden>No courses match your search.</p></section></main>`);}
function filterRegionCards(){const term=(document.getElementById('catalog-search')?.value||'').trim().toLowerCase();catalogSearch=term;let count=0;document.querySelectorAll('.regional-card').forEach(card=>{const show=card.dataset.search.includes(term);card.hidden=!show;if(show)count++;});const empty=document.getElementById('catalog-empty');if(empty)empty.hidden=count!==0;}
function enrollScreen(){return fullPage(`<main class="workspace" style="max-width:1000px"><div class="crumbs"><button data-action="catalog">Courses</button><span>›</span><span>R5 — Region V (Bicol)</span></div><div class="enroll-layout"><div class="enroll-course">${regionCover(REGIONS[7])}<div class="card-content"><div class="upper">Computer-Based Assessments</div><h1 class="mt8">R5 - Computer-Based National Career Assessment Examination (CB-NCAE)</h1><p class="muted mt14">SY 2026–2027 · Region V — Bicol</p><p class="mt20">This is a fictional training course. Parts I–IV are simulated as completed, with Part V available for practice.</p></div></div><div class="enroll-card"><div class="upper">Practice course access</div><h2 class="mt8">Enrolment options</h2><p class="muted mt14">To access the Region V practice course, enter the fictional classroom enrolment key provided by your teacher.</p><div class="notice info mt20"><b>Unofficial training:</b> Do not enter an actual DepEd enrolment key or school account password.</div><form id="enrollment-form" novalidate><label class="enroll-label" for="enroll-key">Enrolment key</label><input id="enroll-key" type="password" name="key" autocomplete="off" placeholder="Enter practice enrolment key" aria-describedby="enroll-error"><div id="enroll-error" class="enroll-error" role="alert" hidden></div><div class="enroll-actions">${button('catalog','Back to courses','btn-outline')}<button type="submit" class="btn btn-primary">Enrol me</button></div></form></div></div></main>`);}
function profileScreen(){return fullPage(`<main class="workspace"><div class="crumbs"><button data-action="dashboard">Dashboard</button><span>›</span>Practice profile</div>${card(`<h1>Practice profile</h1><p class="lead mt14">This fictional profile has already been prepared for the Part V training scenario.</p><div class="notice info mt20">In the actual LMS, first-time users may be required to update their profile before accessing their course. This simulation does not request real personal information.</div><div class="mt20">${button('dashboard','Return to dashboard','btn-primary')}</div>`)}</main>`);}
function courseScreen(){
 if(!p.enrolled)return enrollScreen();
 const done=finished();
 const intro=card(`<div class="upper">Assigned classroom training course</div><h1 class="mt8">CB-NCAE Practice — Part V</h1><p class="lead mt14">The practice scenario begins after Parts I, II, III, and IV have already been completed. Your next activity is the 20-item General Scholastic Aptitude practice assessment.</p><div class="notice info mt20"><b>Training scenario:</b> Parts I–IV are displayed as completed for practice. This does not represent an official examination record or result. The four chosen subject areas follow the teacher’s requested practice outline, not the current CB-NCAE test blueprint.</div>`);
 const rows=[1,2,3,4].map(n=>`<div class="section-row"><div class="section-icon">✓</div><div class="section-row-body"><div class="section-meta"><h3>Part ${toRoman(n)}</h3><span class="pill done">Completed — simulated</span></div><p>Already finished before starting this training module.</p></div></div>`).join('');
 const fifth=`<div class="section-row"><div class="section-icon five">V</div><div class="section-row-body"><div class="section-meta"><h3>Part V — General Scholastic Aptitude (GSA)</h3><span class="pill ${done?'done':'current'}">${done?'Completed':attemptLive()?'In progress':'Ready to start'}</span></div><p>Scientific, Mathematical, Reading Comprehension, and Verbal Ability · 20 items · ${p.minutes}-minute classroom time limit</p><div class="mt14">${button(done?'done':'intro',done?'View completion':'Open Part V →','btn-primary')}</div></div></div>`;
 const overview=card(`<div class="section-grid">${rows}${fifth}</div>`,{title:'Course content and completion'});
 return work(intro+overview,'Course overview');
}
function introScreen(){
 if(finished())return doneScreen();
 const guidance=p.mode==='guided'?`<div class="guide"><strong>Guided practice</strong>Look for hints beside the question navigation and submission controls. Independent Mode removes these hints.</div>`:'';
 const content=`<div class="upper">Part V · Examination overview</div><h1 class="mt8">General Scholastic Aptitude (GSA)</h1><div class="stat-grid mt20"><div class="stat"><strong>20</strong><small>Questions</small></div><div class="stat"><strong>${p.minutes} min</strong><small>Practice time limit</small></div><div class="stat"><strong>4</strong><small>Subject areas</small></div></div><div class="text-divider"></div><p>Read each question and choose one answer. You may move between questions and return to unanswered items until you submit or the practice time expires.</p><ul class="intro-points"><li>The timer starts only when you confirm <b>Start attempt</b>.</li><li>Your answers and countdown survive a browser refresh on this device. <b>Signing out clears this student’s progress</b> so the next learner can begin fresh.</li><li>Submission is final. Your answers are locked after confirmation.</li><li>These questions and time limits are <b>classroom practice settings</b>, not official NCAE specifications.</li></ul>${guidance}`;
 const foot=button('course','Back to course')+button(attemptLive()?'resume':'attempt-modal',attemptLive()?'Resume attempt →':'Attempt quiz now →','btn-primary');
 return work(card(content,{title:'Attempt information',foot})+card(subjects(),{title:'Assessment coverage',subtitle:'5 questions in each area — 20 items total'}));
}
function timerBox(){const left=remaining();return `<div class="timer ${left<300000?'urgent':''}" aria-live="off">◷ <span>Time remaining<br><strong data-timer>${clockText(left)}</strong></span></div>`;}
function navGrid(){return `<div class="qgrid" aria-label="Question navigation">${Q.map((q,i)=>`<button type="button" class="qnumber ${Object.hasOwn(p.answers,i)?'answered':''} ${questionIndex===i?'current':''} ${p.flags.includes(i)?'flagged':''}" aria-label="Question ${i+1}${Object.hasOwn(p.answers,i)?', answered':', unanswered'}" data-action="goto-question" data-index="${i}">${i+1}</button>`).join('')}</div>`;}
function quizScreen(){if(finished())return doneScreen();if(!attemptLive())return introScreen();const q=Q[questionIndex];const categoryNumber=questionIndex%5+1;const passage=q.passage?PASSAGES[q.passage]:null;const choice=String.fromCharCode(65+Number(p.answers[questionIndex]??0));const rightPanel=`<aside class="stack"><section class="card"><div class="card-head"><h3>Question navigation</h3></div><div class="card-content"><div class="small muted">${answered()} of ${Q.length} answered</div>${navGrid()}<div class="legend"><span><i class="green"></i>Answered</span><span><i class="blue"></i>Current</span><span>⚑ Flagged</span></div>${button('review','Finish attempt','btn-primary')} ${p.mode==='guided'?`<p class="guide mt14"><strong>Navigation tip</strong>Click any numbered box to revisit a question. Green boxes contain saved answers.</p>`:''}</div></section><section class="card"><div class="card-content"><div class="small muted">Part V · 20-item practice</div><div class="mt8">${timerBox()}</div><div class="progress-note">Time keeps running while navigating or after refreshing.</div></div></section></aside>`;
const main=`<section class="card"><div class="card-head exam-header"><div><div class="upper">Part V — General Scholastic Aptitude</div><h2 class="mt8">${escapeHTML(q.category)}</h2><p class="small muted mt8">Question ${questionIndex+1} of ${Q.length} · ${categoryNumber} of 5 in this area</p></div>${timerBox()}</div></section><section class="card question-card"><div class="card-head"><div class="strong">Question ${questionIndex+1}</div><div class="small muted">${Object.hasOwn(p.answers,questionIndex)?'Answer saved':'Not yet answered'}</div></div><div class="card-content">${passage?`<div class="passage"><strong>Read the passage: ${escapeHTML(passage.title)}</strong>${escapeHTML(passage.text)}</div>`:''}<h3>${escapeHTML(q.stem)}</h3><fieldset style="border:0;margin:0;padding:0"><legend style="position:absolute;clip:rect(0,0,0,0)">Answer choices</legend>${q.options.map((option,i)=>`<label class="choice"><input type="radio" name="answer-${questionIndex}" value="${i}" data-index="${questionIndex}" ${Number(p.answers[questionIndex])===i&&Object.hasOwn(p.answers,questionIndex)?'checked':''}><span class="choice-key">${'ABCD'[i]}.</span><span>${escapeHTML(option)}</span></label>`).join('')}</fieldset><div class="btn-row mt20">${button('flag',p.flags.includes(questionIndex)?'⚑ Remove flag':'⚑ Flag question','btn-quiet btn-small')}${Object.hasOwn(p.answers,questionIndex)?`<span class="pill done">✓ Answer saved</span>`:''}</div>${p.mode==='guided'?`<div class="guide mt20"><strong>Practice tip</strong>Select one answer. Your choice saves automatically. Use “Next page,” the previous button, or question numbers to move around the test.</div>`:''}</div><div class="card-foot" style="justify-content:space-between">${button('prev','← Previous page','btn-outline',questionIndex===0?'disabled':'')}<div class="btn-row">${button('review','Finish attempt','btn-outline')}${button(questionIndex===Q.length-1?'review':'next',questionIndex===Q.length-1?'Review answers →':'Next page →','btn-primary')}</div></div></section>`;
return fullPage(`<main class="workspace"><div class="crumbs"><button data-action="course">Practice course</button><span>›</span><span>Part V</span><span>›</span><span>Question ${questionIndex+1}</span></div><div class="exam-layout"><div class="stack">${main}</div>${rightPanel}</div></main>`);
}
function reviewScreen(){
 if(finished())return doneScreen();if(!attemptLive())return introScreen();
 const guide=p.mode==='guided'?`<div class="guide mt20"><strong>Review tip</strong>Check the “Not yet answered” items. Click a question number to return to it. When finished, press “Submit all and finish.”</div>`:'';
 const summary=`<div class="upper">Part V — Review your work</div><h1 class="mt8">Summary of attempt</h1><div class="stat-grid mt20"><div class="stat"><strong>${answered()}</strong><small>Answered</small></div><div class="stat"><strong>${Q.length-answered()}</strong><small>Not yet answered</small></div><div class="stat"><strong>${p.flags.length}</strong><small>Flagged</small></div></div><p class="lead mt20">You may return to your attempt and change answers while time remains. You cannot make changes once you submit all and finish.</p>${guide}`;
 const actions=button('return-attempt','Return to attempt')+button('submit-modal','Submit all and finish','btn-primary');
 const items=Q.map((q,i)=>`<div class="summary-item"><div><b>Question ${i+1}</b><div class="small muted">${escapeHTML(q.category)}</div></div><div style="text-align:right"><span class="${Object.hasOwn(p.answers,i)?'yes':''}">${Object.hasOwn(p.answers,i)?'Answered':'Not yet answered'}</span><div><button data-action="goto-question" data-index="${i}">Return to question</button></div></div></div>`).join('');
 const left=card(summary,{foot:actions})+card(`<div class="summary-list">${items}</div>`,{title:'Question status',subtitle:'Select a question to return to your attempt'});
 const right=`<aside class="stack"><section class="card"><div class="card-content"><h3>Remaining time</h3><div class="mt14">${timerBox()}</div><p class="small muted mt14">Your attempt continues while you review this page.</p></div></section></aside>`;
 return fullPage(`<main class="workspace"><div class="crumbs"><button data-action="course">Practice course</button><span>›</span><span>Part V</span><span>›</span><span>Summary of attempt</span></div><div class="exam-layout"><div class="stack">${left}</div>${right}</div></main>`);
}
function doneScreen(){
 const content=`<div class="finish-icon">✓</div><div class="upper">Part V · ${p.timeExpired?'Time limit reached':'Submitted successfully'}</div><h1 class="mt8">Your practice attempt is complete.</h1><p class="lead mt14">All ${Q.length} items are now locked. Your answers are saved on this browser until you sign out. Signing out clears the attempt for the next student.</p><div class="stat-grid mt20"><div class="stat"><strong>${Q.length}</strong><small>Total items</small></div><div class="stat"><strong>${answered()}</strong><small>Answered</small></div><div class="stat"><strong>${Q.length-answered()}</strong><small>Unanswered</small></div></div><div class="notice good mt20"><b>Parts I–V complete in the training scenario.</b> Parts I–IV were pre-marked completed; Part V has been submitted.</div><p class="small muted mt20">The student view does not reveal correct answers. A practice-only teacher summary is available separately.</p>`;
 return work(card(content,{title:'Submission complete',foot:button('course','Back to course')+button('logout','Sign out','btn-primary')}),'Part V complete');
}
function signedOutScreen(){return fullPage(`<main class="workspace" style="max-width:700px"><section class="card"><div class="card-content" style="padding:42px 36px"><div class="finish-icon">✓</div><h1>${finished()?'Training completed':'You are signed out'}</h1><p class="lead mt14">${finished()?'Your 20-item Part V attempt has been submitted.':'Your training session has ended. This student’s answers and timer have been cleared.'}</p><p class="muted mt14">During an actual examination, follow your proctor’s instructions. This website is not the official DepEd LMS.</p><div class="btn-row mt28">${button('login','Return to login','btn-primary')}${button('teacher','Teacher tools','btn-outline')}</div></div></section></main>`,{withHeader:false});}
function scoreStats(){let correct=0;const items=CATEGORIES.map(name=>{const list=Q.map((q,i)=>({q,i})).filter(a=>a.q.category===name);const hit=list.filter(({q,i})=>Number(p.answers[i])===q.answer&&Object.hasOwn(p.answers,i)).length;correct+=hit;return {name,hit,total:list.length};});return {correct,items};}
function teacherScreen(){
 const stats=scoreStats();
 const settings=`<div class="upper">Local training settings</div><h1 class="mt8">Teacher practice tools</h1><div class="notice info mt20"><b>Practice control panel:</b> This page is not password-protected and does not monitor other learners or devices. It is intended for supervised demonstration on this browser only.</div><div class="fields2 mt20"><div class="field"><label for="teacher-mode">Training mode</label><select id="teacher-mode"><option value="guided" ${p.mode==='guided'?'selected':''}>Guided (show navigation hints)</option><option value="independent" ${p.mode==='independent'?'selected':''}>Independent (hide hints)</option></select></div><div class="field"><label for="teacher-minutes">Practice time limit</label><select id="teacher-minutes" ${p.startedAt?'disabled title="Cannot change once attempt starts"':''}>${[30,45,60,90].map(m=>`<option value="${m}" ${p.minutes===m?'selected':''}>${m} minutes</option>`).join('')}</select></div></div><div class="btn-row mt20">${button('save-settings','Save settings','btn-primary')}${button('teacher-reset','Reset Part V practice','btn-danger')}${button(signedIn()?(p.enrolled?'course':'catalog'):'login',signedIn()?(p.enrolled?'Back to course':'Back to courses'):'Back to login','btn-outline')}</div><p class="fine mt14">Changing the practice time limit is disabled after an attempt begins. Resetting creates a new attempt.</p>`;
 const perSubject=finished()?`<h3 class="mt20">Results by subject</h3><div class="section-grid mt14">${stats.items.map(x=>`<div class="section-row" style="justify-content:space-between;align-items:center"><b>${escapeHTML(x.name)}</b><span class="pill">${x.hit} / ${x.total}</span></div>`).join('')}</div>`:'<p class="small muted mt20">Scores appear here after the practice attempt is submitted. They are not shown on the student screen.</p>';
 const report=`<div class="stat-grid"><div class="stat"><strong>${answered()}/${Q.length}</strong><small>Answers saved</small></div><div class="stat"><strong>${finished()?'Submitted':attemptLive()?'In progress':'Not started'}</strong><small>Attempt status</small></div><div class="stat"><strong>${finished()?`${stats.correct}/${Q.length}`:'—'}</strong><small>Teacher-only score after submission</small></div></div>${perSubject}<div class="notice mt20"><b>Privacy:</b> Practice answers are saved locally. Account identifiers and passwords are not saved, transmitted, or shown in this teacher view.</div>`;
 return fullPage(`<main class="workspace"><div class="crumbs"><button data-action="${signedIn()?'course':'login'}">${signedIn()?'Practice course':'Login'}</button><span>›</span>Teacher practice tools</div><div class="stack">${card(settings,{title:'Practice administration'})}${card(report,{title:'This browser’s practice attempt'})}</div></main>`);
}
function openModal(title,body,actions){modal={title,body,actions};modalRoot.innerHTML=`<div class="modal-backdrop" data-action="dismiss-overlay"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><h2 id="modal-title">${escapeHTML(title)}</h2><div class="modal-content">${body}</div><div class="modal-actions">${actions}</div></section></div>`;setTimeout(()=>modalRoot.querySelector('button')?.focus(),0);}
function closeModal(){modal=null;modalRoot.innerHTML='';}
function displayScreen(){if(screen==='login')return loginScreen();if(screen==='ms-loading')return authLoading();if(screen==='ms-email')return authEmail();if(screen==='ms-password')return authPassword();if(screen==='signed-out')return signedOutScreen();if(screen==='teacher')return teacherScreen();if(!signedIn())return loginScreen();if(screen==='dashboard')return dashboardScreen();if(screen==='profile')return profileScreen();if(screen==='catalog')return catalogScreen();if(screen==='enroll')return enrollScreen();if(screen==='course')return courseScreen();if(screen==='intro')return introScreen();if(screen==='quiz')return quizScreen();if(screen==='review')return reviewScreen();if(screen==='done')return doneScreen();return courseScreen();}
function render(){checkExpiry();document.title=`${({login:'LMS Login','ms-loading':'Sign-in Practice Loading','ms-email':'Sign-in Practice','ms-password':'Practice Password',dashboard:'Dashboard',profile:'Practice Profile',catalog:'CB-NCAE Courses',enroll:'Region V Enrolment',course:'Course Overview',intro:'Part V Overview',quiz:'Part V Practice Test',review:'Summary of Attempt',done:'Part V Complete',teacher:'Teacher Practice Tools','signed-out':'Signed Out'})[screen]||'NCAE Practice'} | NCAE Practice — Unofficial`;app.innerHTML=displayScreen();updateClocks();}
function navigate(target){if(['dashboard','profile','catalog','enroll','course','intro','quiz','review','done'].includes(target)&&!signedIn()){screen='login';render();return;}if(['course','intro','quiz','review','done'].includes(target)&&!p.enrolled)target='enroll';if(target==='intro'&&finished())target='done';if(target==='quiz'&&!attemptLive())target=finished()?'done':'intro';screen=target;render();window.scrollTo({top:0,behavior:'instant'});}
function beginAttempt(){if(p.startedAt||finished())return navigate(finished()?'done':'quiz');p.startedAt=Date.now();p.deadline=p.startedAt+p.minutes*60000;p.submittedAt=null;p.timeExpired=false;p.answers={};p.flags=[];questionIndex=0;save();closeModal();navigate('quiz');notify('Practice attempt started. The timer is running.');}
function doSubmit(isTimeout=false){if(finished())return;closeModal();p.submittedAt=isTimeout?p.deadline:Date.now();p.timeExpired=isTimeout;save();navigate('done');notify(isTimeout?'Time limit reached. Attempt submitted.':'Practice attempt submitted and locked.');}
function updateClocks(){if(checkExpiry()){render();return;}document.querySelectorAll('[data-timer]').forEach(node=>{node.textContent=clockText(remaining());node.closest('.timer')?.classList.toggle('urgent',remaining()<300000);});}
function showAuthError(id,inputId,message){
 const error=$(id),input=$(inputId);
 if(error){error.hidden=false;error.textContent=message;}
 if(input){input.setAttribute('aria-invalid','true');input.focus();}
}
function resetMsChallenge(){
 msRound=1;msReference='';msCompleted=[];msIdentifier='';msHardMode=false;
}
function previousMsRound(){
 if(msRound===1){resetMsChallenge();return navigate('login');}
 const earlierUsername=msCompleted[msRound-2]||'';
 msRound--;
 // Going back to a completed login invalidates its success and all later rounds.
 msCompleted=msCompleted.slice(0,msRound-1);
 if(msRound===1)msReference='';
 // Back navigation preserves the earlier account name so the learner can correct it.
 msIdentifier=earlierUsername;
 navigate('ms-email');
 notify('Returned to Login '+msRound+'. Complete this round again.');
}
function advanceEmail(){
 const field=$('ms-email');if(!field)return;
 const email=String(field.value||'');
 if(!email.trim()){showAuthError('ms-email-error','ms-email','Enter an account name to continue.');return;}
 // Preserve exact character case and spacing for a genuine consistency test.
 if(email.length>120){showAuthError('ms-email-error','ms-email','Enter an account name of at most 120 characters.');return;}
 msIdentifier=email;
 navigate('ms-password');
}
function advancePassword(){
 const field=$('ms-password');if(!field)return;
 const password=String(field.value||'');
 if(!password){showAuthError('ms-password-error','ms-password','Enter the classroom practice password.');return;}
 if(password!==TRAINING_CODE){showAuthError('ms-password-error','ms-password','Password does not match the classroom practice password. Check Caps Lock, Shift, and symbols, then try again.');return;}
 if(msRound>1&&msIdentifier!==msReference){
   showAuthError('ms-password-error','ms-password','This account name differs from Login 1. Select Back to username and correct it.');return;
 }
 if(msRound===1){msReference=msIdentifier;}
 msCompleted[msRound-1]=msIdentifier;
 // The next round starts with an empty account field, so students must retype it.
 if(msRound<3){msRound++;msIdentifier='';navigate('ms-email');notify('Login '+(msRound-1)+' verified. Type the same account and password again.');return;}
 if(msCompleted.length!==3||!msCompleted.every(name=>name===msReference)){
   showAuthError('ms-password-error','ms-password','The three logins do not match. Return to the previous login to check your typing.');return;
 }
 // Keep neither the account reference nor its practice history once challenge finishes.
 resetMsChallenge();
 identifier='simulated';displayName='Practice Learner';
 loadingTo('dashboard');
}

function actionClick(action,el){switch(action){
 case 'ms-start':resetMsChallenge();return loadingTo('ms-email');
 case 'toggle-ms-hard-mode':return toggleMsHardMode();
 case 'ms-email-next':return advanceEmail();
 case 'ms-password-next':return advancePassword();
 case 'ms-back-login':return previousMsRound();
 case 'ms-back-email':return navigate('ms-email');
 case 'create-account':return openModal('Practice simulation only','<p>This exercise does not create or verify Microsoft accounts. Enter any account name for typing practice, then repeat it exactly in the next two rounds.</p>',button('close-modal','Understood','btn-primary'));
 case 'sign-options':return openModal('Sign-in options','<p>This site provides a three-round Microsoft-style typing exercise only. No connection to Microsoft or actual examination accounts takes place.</p>',button('close-modal','Close','btn-primary'));
 case 'forgot':return openModal('Training code assistance',`<p>There is no real password recovery here. Ask your teacher for the <b>classroom practice password</b>. Never enter your actual DepEd or Microsoft password.</p>`,button('close-modal','Close','btn-primary'));
 case 'cookies':return openModal('Cookies notice','<p>This practice site uses browser local storage for question selections, flags, timer deadline, and submission status. It does not send information to Microsoft or DepEd. No typed credentials are stored.</p>',button('close-modal','Close','btn-primary'));
 case 'login':identifier='';resetMsChallenge();clearTimeout(loadTimer);return navigate('login');
 case 'teacher':previousScreen=screen;return navigate('teacher');
 case 'dashboard':return navigate('dashboard');
 case 'profile':return navigate('profile');
 case 'catalog':return navigate('catalog');
 case 'search-courses':return filterRegionCards();
 case 'open-region':{p.enrolled=false;save();return navigate('enroll');}
 case 'course':return navigate('course');
 case 'intro':return navigate('intro');
 case 'done':return navigate('done');
 case 'attempt-modal':return openModal('Start practice attempt?',`<p>You are starting <b>Part V — General Scholastic Aptitude</b>.</p><p>Questions: <b>${Q.length}</b> (5 in each subject)<br>Classroom time limit: <b>${p.minutes} minutes</b></p><div class="notice mt14">The timer starts only when you choose <b>Start attempt</b> and continues if you refresh or navigate away.</div>`,`${button('close-modal','Cancel')}${button('start-attempt','Start attempt','btn-primary')}`);
 case 'start-attempt':return beginAttempt();
 case 'resume':return navigate('quiz');
 case 'goto-question':if(!attemptLive())return;questionIndex=Math.min(Q.length-1,Math.max(0,Number(el.dataset.index)||0));return navigate('quiz');
 case 'next':questionIndex=Math.min(Q.length-1,questionIndex+1);return navigate('quiz');
 case 'prev':questionIndex=Math.max(0,questionIndex-1);return navigate('quiz');
 case 'flag':if(!attemptLive())return;{const index=p.flags.indexOf(questionIndex);if(index>=0)p.flags.splice(index,1);else p.flags.push(questionIndex);save();render();return;}
 case 'review':if(!attemptLive())return navigate(finished()?'done':'intro');return navigate('review');
 case 'return-attempt':return navigate('quiz');
 case 'submit-modal':return openModal('Submit all and finish?',`<p>You answered <b>${answered()} of ${Q.length}</b> questions. <b>${Q.length-answered()}</b> remain unanswered.</p><div class="notice mt14">Are you sure? Your attempt will be locked and you cannot edit answers after submission.</div>`,`${button('close-modal','Cancel')}${button('submit-final','Submit all and finish','btn-primary')}`);
 case 'submit-final':return doSubmit(false);
 case 'close-modal':return closeModal();
 case 'save-settings':{const mode=$('teacher-mode')?.value,minutes=Number($('teacher-minutes')?.value);if(['guided','independent'].includes(mode))p.mode=mode;if(!p.startedAt&&[30,45,60,90].includes(minutes))p.minutes=minutes;save();render();notify('Practice settings saved.');return;}
 case 'teacher-reset':return openModal('Reset the practice attempt?',`<p>This will clear saved answers, flags, the timer, and the Part V completion state <b>on this browser only</b>.</p><p>Parts I–IV will continue to appear as pre-completed in the training scenario.</p>`,`${button('close-modal','Cancel')}${button('teacher-reset-confirm','Reset attempt','btn-danger')}`);
 case 'teacher-reset-confirm':{const mode=p.mode,minutes=p.minutes;p={...fresh(),mode,minutes,enrolled:p.enrolled};save();closeModal();render();notify('Practice attempt reset.');return;}
 case 'logout':return finishLogout();
 case 'dismiss-overlay':if(el===modalRoot.querySelector('.modal-backdrop'))closeModal();return;
 default:return;
}}
function finishLogout(){
  // Each workstation is shared by successive students. Do not carry the previous
  // student's answers, flags, results, enrollment or timer into a new session.
  closeModal();
  clearTimeout(loadTimer);loadTimer=null;loadingDeadline=0;loadingTarget=null;
  try{localStorage.removeItem(STORAGE);}catch{}
  p=fresh();
  identifier='';resetMsChallenge();displayName='Practice Learner';
  questionIndex=0;previousScreen='login';catalogSearch='';
  screen='login';
  document.dispatchEvent(new Event('ncae:practice-reset'));
  render();
  window.scrollTo({top:0,behavior:'instant'});
  notify('Signed out. Practice data cleared — ready for the next student.');
}
app.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;e.preventDefault();actionClick(b.dataset.action,b);});
modalRoot.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;if(b.dataset.action==='dismiss-overlay'&&e.target!==b)return;e.preventDefault();actionClick(b.dataset.action,b);});
app.addEventListener('submit',e=>{const f=e.target;if(!f.id)return;e.preventDefault();const data=new FormData(f);
 if(f.id==='basic-login'){const username=String(data.get('username')||'').trim(),password=String(data.get('password')||'');if(!username){notify('Enter a fictional practice username.');return;}if(password!==TRAINING_CODE){notify('That is not the practice code. Do not use real school passwords.');return;}enterCourse('Practice Learner');notify('Signed in to local training simulation.');}
 if(f.id==='ms-email-form')return advanceEmail();
 if(f.id==='ms-password-form')return advancePassword();
 if(f.id==='enrollment-form'){const key=String(data.get('key')||'').trim();if(key!==ENROLMENT_KEY){const msg=$('enroll-error');if(msg){msg.hidden=false;msg.textContent=key?'That practice enrolment key is incorrect. Ask your teacher for the fictional Region V key.':'Please enter the classroom practice enrolment key.';}$('enroll-key')?.focus();return;}p.enrolled=true;save();notify('Region V training course opened.');return navigate('course');}
});
app.addEventListener('input',e=>{const el=e.target;if(el.id==='catalog-search'){filterRegionCards();return;}if(el.id==='enroll-key'){$('enroll-error').hidden=true;}if(el.id==='ms-email'||el.id==='ms-password'){el.removeAttribute('aria-invalid');const error=$(el.id+'-error');if(error){error.hidden=true;error.textContent='';}}});
app.addEventListener('change',e=>{const t=e.target;if(t.matches('input[type="radio"][name^="answer-"]')){if(!attemptLive()||checkExpiry()){render();return;}const i=Number(t.dataset.index);if(Number.isInteger(i)&&i>=0&&i<Q.length){p.answers[i]=Number(t.value);save();render();}return;}if(t.name==='mode'&&['guided','independent'].includes(t.value)){p.mode=t.value;save();render();notify(`${t.value==='guided'?'Guided':'Independent'} practice mode selected.`);}});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal)closeModal();});
window.addEventListener('storage',e=>{if(e.key===STORAGE){p=load();render();}});
setInterval(()=>{if(['quiz','review','intro','course'].includes(screen))updateClocks();},1000);
if(Q.length!==20||CATEGORIES.some(name=>Q.filter(q=>q.category===name).length!==5)){console.error('Practice bank must contain exactly 20 items and 5 per area.');}
render();
})();

;
/* Persistent teacher keyboard: entirely local. No keystroke history or credentials are stored. */
  (() => {
    'use strict';
    const launcher = document.getElementById('kb-launcher');
    const panel = document.getElementById('kb-popover');
    const head = document.getElementById('kb-titlebar');
    const keyboard = document.getElementById('kb-board');
    const status = document.getElementById('kb-status');
    const codeMap = new Map();
    let lastEditable = null, shiftHeld = false, capsOn = false, virtualShift = false;
    let dragging = null;
    const key = (code, label, flex=1, opts={}) => ({code,label,flex,...opts});
    const row = (...keys) => keys;
    const rows = [
      row(key('Escape','Esc',1.2),...Array.from({length:12},(_,i)=>key('F'+(i+1),'F'+(i+1))),key('PrintScreen','PrtSc',1.25),key('Delete','Del',1.2)),
      row(key('Backquote','`',1,{upper:'~'}),...['1','2','3','4','5','6','7','8','9','0'].map((n,i)=>key('Digit'+n,n,1,{upper:['!','@','#','$','%','^','&','*','(',')'][i]})),key('Minus','-',1,{upper:'_'}),key('Equal','=',1,{upper:'+'}),key('Backspace','Backspace',2.4,{special:true})),
      row(key('Tab','Tab',1.65,{special:true}),...'QWERTYUIOP'.split('').map(v=>key('Key'+v,v)),key('BracketLeft','[',1,{upper:'{'}),key('BracketRight',']',1,{upper:'}'}),key('Backslash','\\',1.35,{upper:'|'})),
      row(key('CapsLock','Caps Lock',2.05,{special:true}),...'ASDFGHJKL'.split('').map(v=>key('Key'+v,v)),key('Semicolon',';',1,{upper:':'}),key('Quote',"'",1,{upper:'"'}),key('Enter','Enter',2.4,{special:true})),
      row(key('ShiftLeft','Shift',2.55,{special:true}),...'ZXCVBNM'.split('').map(v=>key('Key'+v,v)),key('Comma',',',1,{upper:'<'}),key('Period','.',1,{upper:'>'}),key('Slash','/',1,{upper:'?'}),key('ShiftRight','Shift',2.75,{special:true})),
      row(key('ControlLeft','Ctrl',1.25,{special:true}),key('MetaLeft','Win',1.1,{special:true}),key('AltLeft','Alt',1.15,{special:true}),key('Space','Space',7.6,{space:true}),key('AltRight','Alt',1.15,{special:true}),key('ControlRight','Ctrl',1.25,{special:true}),key('ArrowLeft','←',1),key('ArrowUp','↑',1),key('ArrowDown','↓',1),key('ArrowRight','→',1))
    ];
    const primary=document.createElement('div');primary.className='kb-primary';
    rows.forEach((keys,index)=>{
      const line=document.createElement('div');line.className='kb-row';line.setAttribute('aria-label','Keyboard row '+(index+1));
      keys.forEach(k=>{
        const b=document.createElement('button');b.type='button';
        b.className='kb-key'+(k.special?' kb-special':'')+(k.space?' kb-space':'');
        b.dataset.code=k.code;b.dataset.base=k.label;
        b.style.flex=String(k.flex)+' 1 0px';
        if(k.upper) b.innerHTML='<span class="kb-legends"><span class="kb-top"></span><span class="kb-bottom"></span></span>';
        else b.textContent=k.label;
        b.setAttribute('aria-label',k.upper?k.label+' or '+k.upper:k.label);
        b.title=k.upper?k.label+' / '+k.upper:k.label;
        b.addEventListener('pointerdown',e=>e.preventDefault());
        b.addEventListener('click',()=>virtualPress(k,b));
        line.append(b);codeMap.set(k.code,{button:b,key:k});
      });
      primary.append(line);
    });
    keyboard.append(primary);
    const numpad=document.createElement('div');numpad.className='kb-numpad';numpad.setAttribute('aria-label','Number keypad');
    const padKeys=[['NumLock','Num'],['NumpadDivide','/'],['NumpadMultiply','*'],['NumpadSubtract','−'],['Numpad7','7'],['Numpad8','8'],['Numpad9','9'],['NumpadAdd','+'],['Numpad4','4'],['Numpad5','5'],['Numpad6','6'],['Numpad1','1'],['Numpad2','2'],['Numpad3','3'],['NumpadEnter','Enter'],['Numpad0','0'],['NumpadDecimal','.']];
    padKeys.forEach(([code,label])=>{const b=document.createElement('button');b.type='button';b.className='kb-key'+(code==='NumLock'?' kb-special':'');b.dataset.code=code;b.textContent=label;b.title='Number keypad '+label;b.setAttribute('aria-label','Number keypad '+label);b.addEventListener('pointerdown',e=>e.preventDefault());const k=key(code,label);b.addEventListener('click',()=>virtualPress(k,b));numpad.append(b);codeMap.set(code,{button:b,key:k});});
    keyboard.append(numpad);
    function mobileTouchMode(){return matchMedia('(pointer:coarse) and (max-width:1199px)').matches;}
    function appleTouchBrowser(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||(/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1);}
    const mobileTextSelector='input:not([type]),input[type=text],input[type=password],input[type=email],input[type=search],input[type=tel],input[type=number],textarea';
    function prepareTouchInputs(){
      if(!mobileTouchMode())return;
      document.querySelectorAll('#app '+mobileTextSelector.replaceAll(',',',#app ')).forEach(el=>{
        el.setAttribute('inputmode','none'); // Android and recent iOS: suppress the device keyboard.
        el.setAttribute('autocapitalize','off');el.setAttribute('autocorrect','off');
        el.setAttribute('spellcheck','false');
        // Safari versions that ignore inputmode=none: readonly stops its system keyboard.
        // Programmatic site-keyboard edits are still permitted through setRangeText/value.
        if(appleTouchBrowser()){el.dataset.kbVirtualonly='1';el.readOnly=true;}
      });
    }
    const appNode=document.getElementById('app');
    if(appNode)new MutationObserver(prepareTouchInputs).observe(appNode,{childList:true,subtree:true});
    prepareTouchInputs();
    function isEditable(el){return el&&el.isConnected&&!el.disabled&&(!el.readOnly||el.dataset.kbVirtualonly==='1')&&
      ((el.matches&&el.matches('input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"]),textarea'))||el.isContentEditable);}
    document.addEventListener('focusin',e=>{
      if(isEditable(e.target)){
        lastEditable=e.target;describeTarget();
        if(mobileTouchMode()){
          show(true);
          requestAnimationFrame(()=>{
            const field=lastEditable;
            if(!isEditable(field))return;
            const rect=field.getBoundingClientRect(),dock=panel.getBoundingClientRect();
            if(rect.bottom>dock.top-14)window.scrollBy({top:rect.bottom-dock.top+28,behavior:'instant'});
          });
        }
      }
    },true);
    function describeTarget(){const el=isEditable(lastEditable)?lastEditable:null;if(!el){status.textContent='Select a username or password box, then practice.';return;}
      const name=el.getAttribute('placeholder')||el.getAttribute('aria-label')||el.name||'text field';
      status.textContent=el.type==='password'?'Hidden text selected — key highlights are paused for privacy.':'Typing in: '+name+' • Keys light up as you type';}
    function isPassword(){return isEditable(lastEditable)&&lastEditable.type==='password';}
    function show(open){
      panel.hidden=!open;document.body.classList.toggle('kb-mobile-open',open&&mobileTouchMode());
      launcher.setAttribute('aria-expanded',String(open));
      launcher.setAttribute('aria-label',open?'Hide keyboard trainer':'Open keyboard trainer');
      document.getElementById('kb-hint').textContent=mobileTouchMode()
        ? 'Tap the keys to type. For @, tap Shift then 2. Passwords remain hidden.'
        : 'Press physical keys to highlight them, or click this keyboard to type. Password keys do not highlight.';
      if(open){
        if(!isEditable(lastEditable)){
          const available=Array.from(document.querySelectorAll('#app '+mobileTextSelector.replaceAll(',',',#app '))).find(x=>isEditable(x)&&x.offsetParent!==null);
          if(available){lastEditable=available;available.focus({preventScroll:true});}
        }
        placeInside();describeTarget();
      }
    }
    document.addEventListener('ncae:input-privacy-changed',()=>{describeTarget();codeMap.forEach(({button})=>button.classList.remove('kb-active'));});
    launcher.addEventListener('click',()=>show(panel.hidden));
    document.getElementById('kb-close').addEventListener('click',()=>show(false));
    function updateLegends(){
      panel.classList.toggle('kb-desktop-mode',!mobileTouchMode());
      for(const {button,key:k} of codeMap.values()){
        // Key legends stay fixed. Only DESKTOP shows the Caps Lock key's LED.
        if(k.upper){button.querySelector('.kb-top').textContent=k.upper;button.querySelector('.kb-bottom').textContent=k.label;}
        else if(/^Key[A-Z]$/.test(k.code))button.textContent=k.label;
        button.classList.toggle('kb-toggled',(k.code==='ShiftLeft'||k.code==='ShiftRight')&&virtualShift);
        if(k.code==='CapsLock'){
          button.classList.toggle('kb-caps-on',capsOn);
          button.setAttribute('aria-pressed',String(capsOn));
        }
      }
    }
    function flash(code){const item=codeMap.get(code);if(!item)return;
      item.button.classList.add('kb-active');clearTimeout(item.button._flashTimer);
      item.button._flashTimer=setTimeout(()=>item.button.classList.remove('kb-active'),250);}
    function virtualPress(k,b){if(!isPassword())flash(k.code);
      if(k.code==='CapsLock'){capsOn=!capsOn;updateLegends();return;}
      if(k.code==='NumLock'){status.textContent='Num Lock selected — the number keypad is on the right.';return;}
      if(k.code==='ShiftLeft'||k.code==='ShiftRight'){virtualShift=!virtualShift;updateLegends();return;}
      if(k.code.startsWith('F')&&/^F\d+$/.test(k.code)){status.textContent=k.label+' selected — a function key';return;}
      if(['ControlLeft','ControlRight','AltLeft','AltRight','MetaLeft','Escape','PrintScreen'].includes(k.code)){
        status.textContent=k.label+' selected — use your physical keyboard for shortcuts';return;
      }
      const target=isEditable(lastEditable)?lastEditable:null;
      if(!target){status.textContent='First select a text field on the page.';return;}
      if(k.code==='Tab'){
        const inputs=Array.from(document.querySelectorAll('input:not([type="hidden"]):not([disabled]), textarea:not([disabled])')).filter(e=>e.offsetParent!==null);
        const ix=inputs.indexOf(target);if(ix>=0)inputs[(ix+1)%inputs.length]?.focus();return;
      }
      if(k.code==='Enter'||k.code==='NumpadEnter'){
        if(target.tagName==='TEXTAREA'){target.focus();target.setRangeText('\n',target.selectionStart,target.selectionEnd,'end');target.dispatchEvent(new Event('input',{bubbles:true}));return;}
        const form=target.closest('form');
        if(form){if(form.requestSubmit)form.requestSubmit();else form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));}
        return;
      }
      if(target.isContentEditable){
        target.focus();document.execCommand(k.code==='Backspace'?'delete':'insertText',false,k.code==='Backspace'?null:(k.code==='Space'?' ':k.label));return;
      }
      target.focus({preventScroll:true});
      let start=0,end=0;
      try{start=target.selectionStart??target.value.length;end=target.selectionEnd??start;}
      catch{start=end=target.value.length;}
      if(k.code==='ArrowLeft'||k.code==='ArrowRight'||k.code==='ArrowUp'||k.code==='ArrowDown'){
        const pos=Math.max(0,Math.min(target.value.length,start+(k.code==='ArrowLeft'?-1:k.code==='ArrowRight'?1:0)));
        try{target.setSelectionRange(pos,pos);}catch{}return;
      }
      let value='';
      if(k.code==='Backspace'){
        if(start===end&&start>0)start--;
      }else if(k.code==='Delete'){
        if(start===end&&end<target.value.length)end++;
      }else if(k.code==='Space')value=' ';
      else if(/^Key[A-Z]$/.test(k.code))value=(capsOn!==virtualShift)?k.label:k.label.toLowerCase();
      else if(k.upper)value=virtualShift?k.upper:k.label;
      else value=k.code==='NumpadSubtract'?'-':k.label;
      const max=target.maxLength;
      if(max>=0&&target.value.length-(end-start)+value.length>max){status.textContent='This field has reached its character limit.';return;}
      const old=target.value;
      const wasVirtualReadonly=target.dataset.kbVirtualonly==='1'&&target.readOnly;
      if(wasVirtualReadonly)target.readOnly=false;
      try{target.setRangeText(value,start,end,'end');}catch{target.value=old.slice(0,start)+value+old.slice(end);}
      if(wasVirtualReadonly)target.readOnly=true;
      if(target.value!==old){target.dispatchEvent(new Event('input',{bubbles:true}));target.dispatchEvent(new Event('change',{bubbles:true}));}
      if(virtualShift){virtualShift=false;updateLegends();}
      describeTarget();
    }
    document.addEventListener('keydown',e=>{
      if(panel.hidden)return;
      if(e.code==='ShiftLeft'||e.code==='ShiftRight')shiftHeld=true;
      if(e.getModifierState) capsOn=e.getModifierState('CapsLock');
      else if(e.code==='CapsLock')capsOn=!capsOn;
      if(!isPassword())flash(e.code);
      updateLegends();
      // Important: never preventDefault; physical typing and sign-in keep working.
    },true);
    document.addEventListener('keyup',e=>{if(panel.hidden)return;
      if(e.code==='ShiftLeft'||e.code==='ShiftRight')shiftHeld=false;
      if(e.getModifierState)capsOn=e.getModifierState('CapsLock');
      codeMap.get(e.code)?.button.classList.remove('kb-active');updateLegends();
    },true);
    head.addEventListener('pointerdown',e=>{
      if(e.target.closest('button')||panel.hidden||mobileTouchMode())return;
      const rect=panel.getBoundingClientRect();
      panel.style.left=rect.left+'px';panel.style.top=rect.top+'px';panel.style.bottom='auto';
      dragging={id:e.pointerId,dx:e.clientX-rect.left,dy:e.clientY-rect.top};
      head.classList.add('dragging');head.setPointerCapture(e.pointerId);e.preventDefault();
    });
    head.addEventListener('pointermove',e=>{
      if(!dragging||dragging.id!==e.pointerId)return;
      const x=Math.max(0,Math.min(window.innerWidth-panel.offsetWidth,e.clientX-dragging.dx));
      const y=Math.max(0,Math.min(window.innerHeight-panel.offsetHeight,e.clientY-dragging.dy));
      panel.style.left=x+'px';panel.style.top=y+'px';
    });
    function endDrag(e){if(!dragging||e.pointerId!==dragging.id)return;dragging=null;head.classList.remove('dragging');}
    head.addEventListener('pointerup',endDrag);head.addEventListener('pointercancel',endDrag);head.addEventListener('lostpointercapture',()=>{dragging=null;head.classList.remove('dragging');});
    function placeInside(){
      if(mobileTouchMode())return; // Dock at screen bottom on phones and tablets.
      const rect=panel.getBoundingClientRect();
      if(rect.width>window.innerWidth-14)panel.style.width=Math.max(275,window.innerWidth-14)+'px';
      if(rect.height>window.innerHeight-15)panel.style.height=Math.max(210,window.innerHeight-15)+'px';
      const newRect=panel.getBoundingClientRect();
      if(newRect.left<0||newRect.right>window.innerWidth||newRect.top<0||newRect.bottom>window.innerHeight){
        panel.style.left=Math.max(0,Math.min(newRect.left,window.innerWidth-newRect.width))+'px';
        panel.style.top=Math.max(0,Math.min(newRect.top,window.innerHeight-newRect.height))+'px';
        panel.style.bottom='auto';
      }
    }
    window.addEventListener('resize',()=>{prepareTouchInputs();document.body.classList.toggle('kb-mobile-open',!panel.hidden&&mobileTouchMode());updateLegends();if(!panel.hidden)placeInside();});
    document.addEventListener('ncae:practice-reset',()=>{
      lastEditable=null;shiftHeld=false;virtualShift=false;capsOn=false;
      show(false);updateLegends();
      status.textContent='Select a username or password box, then practice.';
    });
    document.getElementById('kb-reset').addEventListener('click',()=>{
      panel.style.left='14px';panel.style.top='auto';panel.style.bottom='74px';
      panel.style.width='min(965px,calc(100vw - 28px))';panel.style.height='405px';placeInside();
    });
    updateLegends();
  })();
