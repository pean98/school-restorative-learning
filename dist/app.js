const courses = {
  short: {
    title: "2시간 핵심 과정",
    minutes: 120,
    description: "사실 확인부터 재발 방지 계획까지 핵심 활동을 완성합니다.",
    modules: [
      {
        title: "시작하기: 안전한 참여 약속", minutes: 10,
        intro: "이 과정은 벌을 주기 위한 글쓰기 시간이 아니라, 내가 한 선택을 살펴보고 다음 선택을 바꾸는 시간입니다. 피해학생이나 관련 학생의 이름은 쓰지 마세요.",
        safety: "교육 중에도 피해학생에게 연락하거나, 다른 사람을 통해 말을 전하거나, 온라인에서 언급하면 안 됩니다. 보복이나 압박으로 느껴질 행동도 하지 않습니다.",
        questions: [
          {id:"promise", type:"checks", prompt:"아래 약속을 모두 확인하세요.", options:["사람의 실명과 개인정보를 쓰지 않겠습니다.","다른 사람의 행동과 별개로 내가 한 행동을 살펴보겠습니다.","피해학생에게 직접 연락하거나 사과를 전달하지 않겠습니다.","힘든 내용이 떠오르면 교사나 상담교사에게 도움을 요청하겠습니다."]},
          {id:"goal", type:"text", prompt:"오늘 교육을 마친 뒤 달라지고 싶은 행동 한 가지를 쓰세요.", hint:"예: 화가 났을 때 단체대화방에 바로 글을 쓰지 않기", min:15}
        ]
      },
      {
        title: "학교폭력 바로 알기", minutes: 20,
        intro: "장난인지 아닌지는 한 사람의 의도만으로 결정되지 않습니다. 행동의 내용, 반복 여부, 힘의 차이, 상대방이 겪은 피해를 함께 봐야 합니다.",
        questions: [
          {id:"quiz1", type:"quiz", prompt:"친구가 싫다고 했지만 별명을 계속 부른 경우 가장 적절한 판단은?", options:["웃으며 한 말이므로 항상 장난이다.","싫다는 의사를 무시해 반복했다면 언어폭력이 될 수 있다.","친한 친구 사이에서는 문제가 되지 않는다."], answer:1, explain:"상대방이 원하지 않는 표현을 반복하면 친밀도나 말한 사람의 의도와 관계없이 피해가 생길 수 있습니다."},
          {id:"quiz2", type:"quiz", prompt:"단체대화방에서 한 학생의 사진을 허락 없이 올리고 놀린 경우는?", options:["온라인에서만 일어났으므로 학교폭력이 아니다.","직접 때리지 않았으므로 문제가 없다.","사이버폭력에 해당할 수 있고 공유한 사람도 책임이 생길 수 있다."], answer:2, explain:"온라인 게시·전달·댓글도 피해를 키울 수 있습니다. 최초 작성뿐 아니라 재전송과 동조도 멈춰야 합니다."},
          {id:"boundary", type:"text", prompt:"내가 예전에는 장난이라고 생각했지만, 상대방에게는 불편하거나 두려울 수 있는 행동의 예를 한 가지 쓰세요.", min:20}
        ]
      },
      {
        title: "사실과 해석 구분하기", minutes: 25,
        intro: "사실은 녹화된 영상처럼 확인할 수 있는 행동입니다. ‘걔가 나를 무시했다’는 해석이고, ‘내 말에 대답하지 않았다’는 관찰한 사실입니다.",
        questions: [
          {id:"facts", type:"text", prompt:"사람의 이름을 쓰지 말고, 내가 실제로 한 말과 행동을 시간 순서대로 적으세요.", hint:"‘상대가 먼저’라는 설명보다 내가 말한 표현, 보낸 메시지, 한 행동을 구체적으로 적습니다.", min:80},
          {id:"interpretation", type:"text", prompt:"당시 내가 사실이라고 확신했지만 실제로는 내 생각이나 추측이었던 것은 무엇인가요?", hint:"예: 나를 일부러 무시한다고 생각했다.", min:30},
          {id:"responsibility", type:"text", prompt:"다른 사람의 행동과 관계없이 내가 책임져야 할 행동은 무엇인가요?", min:35}
        ]
      },
      {
        title: "행동이 만든 영향", minutes: 25,
        intro: "같은 행동도 사람마다 다르게 느낄 수 있습니다. 영향은 눈에 보이는 상처뿐 아니라 불안, 등교 부담, 관계 단절, 학급 분위기 변화로도 나타납니다.",
        questions: [
          {id:"impactVictim", type:"text", prompt:"상대방이 겪었을 수 있는 감정·생활의 변화·두려움을 세 가지 이상 생각해 쓰세요.", min:60},
          {id:"impactOthers", type:"text", prompt:"그 행동이 목격한 학생, 학급, 선생님, 가족에게 어떤 영향을 줄 수 있었나요?", min:50},
          {id:"impactMe", type:"text", prompt:"그 선택이 나의 생활과 신뢰에 가져온 결과는 무엇인가요?", min:35}
        ]
      },
      {
        title: "다른 선택 연습", minutes: 20,
        intro: "좋은 대안은 ‘참는다’로 끝나지 않습니다. 멈추기, 장소를 벗어나기, 온라인 접속을 끊기, 믿을 수 있는 어른에게 알리기처럼 실제로 할 수 있어야 합니다.",
        questions: [
          {id:"trigger", type:"text", prompt:"내가 말이나 행동을 거칠게 하기 전에 나타나는 신호를 적으세요.", hint:"몸의 신호, 머릿속 생각, 자주 생기는 상황으로 나누어 생각해 보세요.", min:45},
          {id:"threeChoices", type:"text", prompt:"같은 상황이 다시 생기면 할 수 있는 다른 행동을 세 가지 쓰세요.", min:60},
          {id:"helpWords", type:"text", prompt:"도움이 필요할 때 교사나 보호자에게 실제로 말할 문장을 완성하세요: ‘지금 저는 …’", min:30}
        ]
      },
      {
        title: "나의 재발 방지 계획", minutes: 20,
        intro: "마지막 계획은 구체적이고 확인 가능해야 합니다. ‘잘하겠다’보다 언제, 어디서, 무엇을 할지 씁니다.",
        questions: [
          {id:"stop", type:"text", prompt:"앞으로 반드시 멈출 행동 두 가지를 쓰세요.", min:40},
          {id:"start", type:"text", prompt:"대신 시작할 행동 두 가지를 쓰세요.", min:40},
          {id:"support", type:"text", prompt:"도움을 요청할 어른 두 명과 도움을 요청할 시점을 쓰세요.", min:40},
          {id:"contact", type:"quiz", prompt:"피해학생에게 사과하고 싶을 때 가장 먼저 해야 할 일은?", options:["직접 메시지를 보낸다.","친구에게 대신 전해 달라고 한다.","담당 교사에게 말하고, 허용된 절차가 있는지 확인한다."], answer:2, explain:"사과의 의도가 있어도 직접 접촉은 상대방에게 부담이나 압박이 될 수 있고, 접촉 금지 조치에 어긋날 수 있습니다."},
          {id:"final", type:"text", prompt:"일주일 안에 내가 실천할 가장 구체적인 행동 한 가지를 ‘언제–상황–행동’ 순서로 쓰세요.", min:45}
        ]
      }
    ]
  },
  long: {
    title: "4시간 심화 과정",
    minutes: 240,
    description: "디지털 행동, 감정·충동, 관계와 공동체 영향까지 깊이 살펴봅니다.",
    modules: []
  }
};

courses.long.modules = [
  ...courses.short.modules.slice(0, 2).map((m, i) => ({...m, minutes: i === 0 ? 15 : 30})),
  {
    title:"온라인에서는 더 빨리 멈추기", minutes:25,
    intro:"온라인 글과 사진은 짧은 시간에 복제되고, 지워도 다른 사람의 기기에 남을 수 있습니다. ‘직접 만들지 않았다’는 이유로 전달의 책임이 사라지지 않습니다.",
    questions:[
      {id:"digitalQuiz1", type:"quiz", prompt:"누군가를 놀리는 게시물을 친구가 보내왔을 때 가장 안전한 행동은?", options:["재미있으면 친한 친구에게만 보낸다.","저장하거나 전달하지 않고, 필요하면 믿을 수 있는 어른에게 알린다.","좋아요만 누르고 댓글은 쓰지 않는다."], answer:1, explain:"저장·전달·반응은 게시물의 확산과 피해를 키울 수 있습니다. 먼저 확산을 멈추는 것이 중요합니다."},
      {id:"digitalRisk", type:"text", prompt:"내가 자주 사용하는 온라인 공간에서 갈등이 커지는 순간과 그때 멈출 방법을 각각 쓰세요.", min:60},
      {id:"digitalRules", type:"text", prompt:"게시·댓글·전달 전에 확인할 나만의 세 가지 규칙을 만드세요.", min:65}
    ]
  },
  {...courses.short.modules[2], minutes:35},
  {
    title:"멈출 수 있었던 선택 지점", minutes:25,
    intro:"사건은 한 번의 선택으로만 이루어지지 않습니다. 처음 불편함을 느낀 순간, 친구가 부추긴 순간, 메시지를 보내기 전처럼 방향을 바꿀 지점이 있습니다.",
    questions:[
      {id:"turningPoints", type:"text", prompt:"상황이 커지기 전 멈추거나 도움을 요청할 수 있었던 순간을 세 곳 찾으세요.", min:80},
      {id:"pressure", type:"text", prompt:"친구의 분위기나 단체의 압력이 내 선택에 영향을 주었다면, 다음에는 어떻게 거절할 수 있을까요? 실제 문장으로 쓰세요.", min:50}
    ]
  },
  {...courses.short.modules[3], minutes:35},
  {
    title:"감정과 충동 다루기", minutes:25,
    intro:"감정은 잘못이 아니지만 감정 때문에 한 행동에는 책임이 따릅니다. 감정을 알아차리고 행동 사이에 시간을 만드는 연습을 합니다.",
    questions:[
      {id:"emotionChain", type:"text", prompt:"최근 갈등 상황을 ‘상황 → 생각 → 몸의 신호 → 감정 → 행동’ 순서로 나누어 쓰세요.", min:80},
      {id:"pausePlan", type:"text", prompt:"감정이 7점 이상 올라갔을 때 실행할 3단계 멈춤 계획을 쓰세요.", hint:"예: 휴대전화 내려놓기 → 복도나 상담실로 이동하기 → 교사에게 말하기", min:60}
    ]
  },
  {...courses.short.modules[4], minutes:25},
  {
    title:"책임 있는 회복", minutes:15,
    intro:"회복은 상대방에게 용서를 요구하는 일이 아닙니다. 상대방의 안전과 선택을 존중하면서 내가 해야 할 책임을 지속하는 것입니다.",
    questions:[
      {id:"repair", type:"text", prompt:"상대방에게 직접 접촉하지 않고 지금부터 할 수 있는 책임 있는 행동을 세 가지 쓰세요.", min:60},
      {id:"respect", type:"text", prompt:"상대방이 사과나 만남을 원하지 않더라도 내가 지켜야 할 행동은 무엇인가요?", min:40}
    ]
  },
  {...courses.short.modules[5], minutes:30}
];

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let state = { route:"home", course:null, step:0, startedAt:null };
let ticker;

function key(course, module, question) { return `specialedu:${course}:${module}:${question}`; }
function getValue(course, module, question, fallback="") { return localStorage.getItem(key(course,module,question)) ?? fallback; }
function setValue(course, module, question, value) { localStorage.setItem(key(course,module,question), value); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 1800); }
function escapeHtml(value="") { return value.replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

function route(name) {
  state.route = name;
  if(name !== "course") state.course = null;
  clearInterval(ticker);
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderHome() {
  app.innerHTML = `
    <section class="home-intro">
      <div>
        <p class="eyebrow">중학생 자기주도 특별교육</p>
        <h1>지나간 행동을 확인하고,<br>다음 선택을 바꾸는 시간</h1>
        <p class="lead">화면의 안내를 읽고 자신의 속도로 작성하세요. 사람의 이름이나 개인정보는 입력하지 않습니다. 답변은 이 기기에만 임시 저장됩니다.</p>
      </div>
      <aside class="promise-card"><strong>가장 중요한 원칙</strong>피해학생에게 직접 연락하거나, 다른 사람을 통해 말을 전하거나, 온라인에서 언급하지 않습니다.</aside>
    </section>
    <section class="course-grid" aria-label="과정 선택">
      ${courseCard("short", "핵심", ["학교폭력과 책임 이해", "사실·영향 돌아보기", "재발 방지 계획 작성"])}
      ${courseCard("long", "심화", ["온라인 행동과 방관자 책임", "감정·충동 조절 연습", "책임 있는 회복과 안전계획"])}
    </section>`;
}

function courseCard(id, label, items) {
  const c = courses[id];
  const saved = c.modules.some((m, mi)=>m.questions.some(q=>getValue(id,mi,q.id)));
  return `<article class="course-card ${id === "long" ? "long" : ""}">
    <p class="eyebrow">${label} 과정</p><h2>${c.title}</h2><p>${c.description}</p>
    <div class="course-meta"><span class="tag ${id === "long" ? "cool" : ""}">총 ${c.minutes}분</span><span class="tag ${id === "long" ? "cool" : ""}">${c.modules.length}단계</span>${saved?'<span class="tag">작성 중</span>':''}</div>
    <ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul>
    <button class="primary start-course" data-course="${id}" type="button">${saved ? "이어서 하기" : "과정 시작"}</button>
  </article>`;
}

function startCourse(id) {
  state = {route:"course", course:id, step:0, startedAt:Date.now()};
  renderCourse();
  window.scrollTo({top:0});
}

function isQuestionDone(courseId, mi, q) {
  const value = getValue(courseId, mi, q.id);
  if(q.type === "checks") return value.split("|").filter(Boolean).length === q.options.length;
  if(q.type === "quiz") return value !== "";
  return value.trim().length >= (q.min || 1);
}
function isModuleDone(courseId, mi) { return courses[courseId].modules[mi].questions.every(q=>isQuestionDone(courseId,mi,q)); }

function renderCourse() {
  const c = courses[state.course];
  const m = c.modules[state.step];
  const completed = c.modules.filter((_,i)=>isModuleDone(state.course,i)).length;
  const pct = Math.round((completed/c.modules.length)*100);
  app.innerHTML = `<div class="course-shell">
    <aside class="course-sidebar">
      <p class="eyebrow">${c.minutes}분 과정</p><h2>${c.title}</h2>
      <div class="progress-track" aria-label="완료율 ${pct}%"><div class="progress-bar" style="width:${pct}%"></div></div>
      <p><strong>${completed}/${c.modules.length}</strong>단계 완료</p>
      <div class="step-list">${c.modules.map((x,i)=>`<button class="step-button ${i===state.step?'active':''} ${isModuleDone(state.course,i)?'done':''}" data-step="${i}" type="button">${i+1}. ${x.title}</button>`).join("")}</div>
      <div class="timer">현재 접속 시간 <strong id="elapsed">00:00</strong><br><span>시간보다 충실한 작성이 중요합니다.</span></div>
      <div class="button-row"><button class="secondary no-print" id="print" type="button">작성 내용 인쇄</button><button class="danger-button no-print" id="reset" type="button">이 과정 초기화</button></div>
    </aside>
    <section>
      <article class="module-card">
        <div class="module-head"><div><p class="eyebrow">${state.step+1}단계</p><h1>${m.title}</h1></div><span class="time-badge">권장 ${m.minutes}분</span></div>
        <p class="lead">${m.intro}</p>
        ${m.safety?`<div class="safety"><strong>꼭 지켜야 할 안전 원칙</strong><br>${m.safety}</div>`:""}
        <form id="module-form">${m.questions.map((q,qi)=>renderQuestion(q,qi)).join("")}</form>
        <div class="module-actions"><button class="secondary" id="prev" type="button" ${state.step===0?'disabled':''}>이전 단계</button><button class="primary" id="next" type="button">${state.step===c.modules.length-1?'과정 마무리':'저장하고 다음 단계'}</button></div>
      </article>
      ${renderPrintSummary()}
    </section>
  </div>`;
  bindCourse();
  startTicker();
}

function renderQuestion(q, qi) {
  const value = getValue(state.course,state.step,q.id);
  const num = qi+1;
  if(q.type === "text") return `<div class="question"><label class="prompt" for="${q.id}">${num}. ${q.prompt} <span class="required">필수</span></label><textarea id="${q.id}" data-q="${q.id}" data-type="text" data-min="${q.min||1}" placeholder="여기에 직접 작성하세요.">${escapeHtml(value)}</textarea>${q.hint?`<p class="hint">도움말: ${q.hint}</p>`:""}<div class="char-count"><span>${value.length}</span>자 · 충실한 답변 권장</div></div>`;
  if(q.type === "checks") {
    const selected = value.split("|");
    return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend><div class="choice-list">${q.options.map((o,i)=>`<label class="choice"><input type="checkbox" data-q="${q.id}" data-type="checks" value="${i}" ${selected.includes(String(i))?'checked':''}><span>${o}</span></label>`).join("")}</div></fieldset>`;
  }
  return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend><div class="choice-list">${q.options.map((o,i)=>`<label class="choice"><input type="radio" name="${q.id}" data-q="${q.id}" data-type="quiz" value="${i}" ${value===String(i)?'checked':''}><span>${o}</span></label>`).join("")}</div><div class="feedback ${value!==''?'show':''}" id="feedback-${q.id}">${value!=='' ? `<strong>${Number(value)===q.answer?'확인했습니다.':'다시 생각해 보세요.'}</strong><br>${q.explain}` : ''}</div></fieldset>`;
}

function bindCourse() {
  document.querySelectorAll("[data-step]").forEach(b=>b.addEventListener("click",()=>{ saveVisible(); state.step=Number(b.dataset.step); renderCourse(); window.scrollTo({top:0}); }));
  document.querySelectorAll("textarea").forEach(t=>t.addEventListener("input",()=>{ setValue(state.course,state.step,t.dataset.q,t.value); t.parentElement.querySelector(".char-count span").textContent=t.value.length; }));
  document.querySelectorAll("input").forEach(i=>i.addEventListener("change",()=>{
    const qid=i.dataset.q, type=i.dataset.type;
    if(type === "checks") { const vals=[...document.querySelectorAll(`input[data-q="${qid}"]:checked`)].map(x=>x.value); setValue(state.course,state.step,qid,vals.join("|")); }
    else { setValue(state.course,state.step,qid,i.value); renderCourse(); }
  }));
  document.querySelector("#prev").addEventListener("click",()=>{ if(state.step>0){saveVisible(); state.step--; renderCourse(); window.scrollTo({top:0});} });
  document.querySelector("#next").addEventListener("click", nextStep);
  document.querySelector("#print").addEventListener("click",()=>window.print());
  document.querySelector("#reset").addEventListener("click", resetCourse);
}

function saveVisible() {
  document.querySelectorAll("textarea[data-q]").forEach(t=>setValue(state.course,state.step,t.dataset.q,t.value));
}

function nextStep() {
  saveVisible();
  const m = courses[state.course].modules[state.step];
  const missing = m.questions.find(q=>!isQuestionDone(state.course,state.step,q));
  if(missing){
    showToast(missing.type === "text" ? "필수 질문을 조금 더 구체적으로 작성해 주세요." : "모든 필수 항목을 확인해 주세요.");
    document.querySelector(`[data-q="${missing.id}"]`)?.focus();
    return;
  }
  if(state.step < courses[state.course].modules.length-1){ state.step++; renderCourse(); window.scrollTo({top:0,behavior:"smooth"}); }
  else renderFinish();
}

function renderFinish() {
  clearInterval(ticker);
  const c=courses[state.course];
  app.innerHTML=`<section class="module-card"><p class="eyebrow">모든 단계 작성 완료</p><h1>${c.title}을 끝까지 작성했습니다.</h1><p class="lead">완료 화면은 자동 이수증이 아닙니다. 작성 내용을 인쇄하거나 PDF로 저장한 뒤 담당 교사의 확인을 받으세요.</p><div class="notice"><strong>마지막 안전 확인</strong><br>피해학생에게 직접 연락하거나, 다른 사람을 통해 말을 전하거나, 온라인에서 언급하지 않습니다. 도움이 필요하면 담당 교사에게 먼저 말합니다.</div><div class="button-row"><button class="primary" id="finish-print" type="button">작성 내용 인쇄·PDF 저장</button><button class="secondary" id="finish-review" type="button">작성 내용 다시 보기</button><button class="secondary" data-route="home" type="button">처음 화면</button></div></section>${renderPrintSummary()}`;
  document.querySelector("#finish-print").addEventListener("click",()=>window.print());
  document.querySelector("#finish-review").addEventListener("click",()=>{state.step=0;renderCourse();});
}

function answerLabel(q, value) {
  if(!value) return "(작성하지 않음)";
  if(q.type === "quiz") return q.options[Number(value)] || value;
  if(q.type === "checks") return value.split("|").map(v=>`• ${q.options[Number(v)]}`).join("\n");
  return value;
}

function renderPrintSummary() {
  const c=courses[state.course];
  return `<section class="print-summary"><p>학교폭력 조치 이행 특별교육 학생 작성 자료</p><h1>${c.title}</h1><p>학생 확인: ____________________　교육일: ____________________　교사 확인: ____________________</p>${c.modules.map((m,mi)=>`<section><h2>${mi+1}. ${m.title}</h2>${m.questions.map(q=>`<div class="print-item"><strong>${q.prompt}</strong><div class="print-answer">${escapeHtml(answerLabel(q,getValue(state.course,mi,q.id)))}</div></div>`).join("")}</section>`).join("")}<section><h2>교사 확인</h2><p>□ 완료　□ 보완 필요　□ 상담 필요</p><p>확인 의견:</p><br><br></section></section>`;
}

function resetCourse() {
  if(!confirm("이 과정에서 작성한 내용을 모두 지울까요? 삭제 후에는 복구할 수 없습니다.")) return;
  const c=courses[state.course];
  c.modules.forEach((m,mi)=>m.questions.forEach(q=>localStorage.removeItem(key(state.course,mi,q.id))));
  state.step=0; renderCourse(); showToast("과정 작성 내용이 삭제되었습니다.");
}

function startTicker() {
  clearInterval(ticker);
  const update=()=>{ const sec=Math.floor((Date.now()-state.startedAt)/1000); const el=document.querySelector("#elapsed"); if(el) el.textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`; };
  update(); ticker=setInterval(update,1000);
}

function renderTeacher() {
  app.innerHTML=`<section class="teacher-hero"><p class="eyebrow">교사용 운영 안내</p><h1>설명은 줄이고,<br>확인은 정확하게</h1><p class="lead">학생이 화면의 안내에 따라 혼자 작성하되, 교사는 시작 전 안전 원칙을 확인하고 종료 후 결과물을 짧게 검토합니다.</p><div class="button-row"><button class="primary" onclick="window.print()" type="button">운영 안내 인쇄</button></div></section>
  <section class="teacher-grid">
    <article class="info-card"><h2>시작 전 5분</h2><ul class="checklist"><li>조치 결정문의 이수 시간과 기관 기준 확인</li><li>조용한 개별 좌석과 인터넷 기기 준비</li><li>피해학생 이름·개인정보를 입력하지 않도록 안내</li><li>직접 접촉·대리 전달·온라인 언급 금지 확인</li><li>힘들 때 도움을 요청할 담당 교사 안내</li></ul></article>
    <article class="info-card"><h2>진행 중</h2><ul class="checklist"><li>교사는 지속적으로 옆에 있지 않아도 됨</li><li>정답이나 반성 표현을 대신 말해주지 않음</li><li>화면만 켜둔 경우 단계별 결과물로 확인</li><li>휴식은 학교 일정에 맞춰 별도 제공</li><li>위협·보복·자해·타해 표현 발견 시 즉시 개입</li></ul></article>
    <article class="info-card full"><h2>종료 후 3단계 검토</h2><table class="rubric"><thead><tr><th>판정</th><th>확인 기준</th><th>교사의 다음 행동</th></tr></thead><tbody><tr><td><strong>완료</strong></td><td>필수 항목이 작성되었고, 책임 행동과 재발 방지 계획이 구체적임</td><td>학생과 핵심 계획 1가지를 구두로 확인하고 기록 보관</td></tr><tr><td><strong>보완 필요</strong></td><td>다른 사람 탓만 하거나, 답이 지나치게 짧고 실행 계획이 모호함</td><td>부족한 문항만 표시하여 학생이 스스로 다시 작성</td></tr><tr><td><strong>상담 필요</strong></td><td>보복 의도, 위협, 자해·타해 암시, 심한 불안이나 피해 호소가 있음</td><td>혼자 돌려보내지 말고 학교의 상담·위기 대응 절차에 따라 조치</td></tr></tbody></table></article>
    <article class="info-card"><h2>검토할 핵심 6가지</h2><ul class="checklist"><li>필수 단계가 모두 작성되었는가</li><li>자신의 행동을 사실 중심으로 적었는가</li><li>다른 사람과 별개로 자신의 책임을 구분했는가</li><li>상대방과 공동체의 영향을 이해했는가</li><li>접촉·보복 금지 원칙을 이해했는가</li><li>도움을 요청할 어른과 시점이 정해졌는가</li></ul></article>
    <article class="info-card"><h2>보관과 개인정보</h2><p>답변은 브라우저의 해당 기기에만 임시 저장됩니다. 공용 기기에서는 인쇄 또는 PDF 저장 후 반드시 ‘이 과정 초기화’를 눌러 삭제하세요.</p><p>학생과 관련 학생의 실명, 학번, 연락처 등은 웹페이지에 입력하지 않습니다. 결과물의 보관 기간과 장소는 학교의 기록 관리 기준을 따릅니다.</p></article>
    <article class="info-card full"><h2>행정적 유의사항</h2><p>이 웹자료의 완료 화면만으로 공식 이수가 자동 인정되는 것은 아닙니다. 학교폭력예방법 제17조에 따른 특별교육은 조치 유형에 따라 교육감이 정한 기관, 심의위원회가 정한 기간 등의 요건이 적용될 수 있으므로 조치 결정문과 관할 교육지원청 지침을 먼저 확인하세요.</p><p>피해학생에게 전달할 사과문이나 만남을 학생에게 요구하지 않습니다. 회복적 절차가 필요한 경우에도 피해학생의 안전과 자발성을 우선하고, 학교가 허용한 절차 안에서 진행합니다.</p></article>
  </section>`;
}

function render() {
  if(state.route === "teacher") renderTeacher(); else if(state.route === "course") renderCourse(); else renderHome();
}

document.addEventListener("click", e=>{
  const routeButton=e.target.closest("[data-route]"); if(routeButton) route(routeButton.dataset.route);
  const start=e.target.closest(".start-course"); if(start) startCourse(start.dataset.course);
});
render();
