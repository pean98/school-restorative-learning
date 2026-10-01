const courses = {
  short: {
    title: "2차시 핵심 과정",
    minutes: 90,
    breakAfter: [2],
    description: "사실 확인부터 재발 방지 계획까지 핵심 활동을 완성합니다.",
    modules: [
      {
        title: "시작하기: 안전한 참여 약속", minutes: 10,
        intro: "이 과정은 벌을 주기 위한 글쓰기 시간이 아니라, 내가 한 선택을 살펴보고 다음 선택을 바꾸는 시간입니다. 피해학생이나 관련 학생의 이름은 쓰지 마세요.",
        safety: "교육 중에도 피해학생에게 연락하거나, 다른 사람을 통해 말을 전하거나, 온라인에서 언급하면 안 됩니다. 보복이나 압박으로 느껴질 행동도 하지 않습니다.",
        questions: [
          {id:"promise", type:"checks", prompt:"아래 약속을 모두 확인하세요.", options:["사람의 실명과 개인정보를 쓰지 않겠습니다.","다른 사람의 행동과 별개로 내가 한 행동을 살펴보겠습니다.","피해학생에게 직접 연락하거나 사과를 전달하지 않겠습니다.","힘든 내용이 떠오르면 교사나 상담교사에게 도움을 요청하겠습니다."]},
          {id:"primaryType", type:"primaryType", prompt:"이번 일과 가장 직접적으로 관련된 주요 유형을 하나 선택하세요."},
          {id:"additionalTypes", type:"additionalTypes", prompt:"함께 관련된 추가 유형이 있다면 최대 2개까지 선택하세요.", optional:true},
          {id:"goal", type:"text", prompt:"오늘 교육을 마친 뒤 달라지고 싶은 행동 한 가지를 쓰세요.", hint:"예: 화가 났을 때 단체대화방에 바로 글을 쓰지 않기", min:15}
        ]
      },
      {
        title: "학교폭력 바로 알기", minutes: 20,
        intro: "먼저 모든 유형에 공통으로 적용되는 원칙을 확인한 뒤, 내가 선택한 유형별 사례와 판단 문제를 풉니다.",
        questions: [
          {id:"commonQuiz", type:"quiz", prompt:"모든 학교폭력 유형에 공통으로 적용되는 설명은 무엇인가요?", options:["장난이었다면 상대방이 피해를 느껴도 문제가 되지 않는다.","다른 학생이 먼저 시작했다면 내 행동에는 책임이 없다.","의도뿐 아니라 실제 행동, 반복·힘의 차이, 상대방에게 생긴 피해를 함께 살펴야 한다."], answer:2, explain:"학교폭력은 말한 사람의 의도만으로 판단하지 않습니다. 실제 행동과 피해, 반복성, 관계의 힘의 차이 등을 함께 살펴야 합니다."},
          {id:"adaptiveLearning", type:"adaptive", prompt:"선택한 유형별 사례를 읽고 판단 문제를 푸세요."},
          {id:"boundary", type:"text", prompt:"내가 예전에는 장난이라고 생각했지만, 상대방에게는 불편하거나 두려울 수 있는 행동의 예를 한 가지 쓰세요.", min:20}
        ]
      },
      {
        title: "사실과 해석 구분하기", minutes: 15,
        intro: "사실은 녹화된 영상처럼 확인할 수 있는 행동입니다. ‘걔가 나를 무시했다’는 해석이고, ‘내 말에 대답하지 않았다’는 관찰한 사실입니다.",
        questions: [
          {id:"facts", type:"text", prompt:"사람의 이름을 쓰지 말고, 내가 실제로 한 말과 행동을 시간 순서대로 적으세요.", hint:"‘상대가 먼저’라는 설명보다 내가 말한 표현, 보낸 메시지, 한 행동을 구체적으로 적습니다.", min:80},
          {id:"interpretation", type:"text", prompt:"당시 내가 사실이라고 확신했지만 실제로는 내 생각이나 추측이었던 것은 무엇인가요?", hint:"예: 나를 일부러 무시한다고 생각했다.", min:30},
          {id:"responsibility", type:"text", prompt:"다른 사람의 행동과 관계없이 내가 책임져야 할 행동은 무엇인가요?", min:35}
          ,{id:"typeReflection", type:"text", prompt:"내가 선택한 유형의 확인 질문을 읽고, 특히 돌아봐야 할 점을 구체적으로 쓰세요.", min:55}
        ]
      },
      {
        title: "행동이 만든 영향", minutes: 18,
        intro: "같은 행동도 사람마다 다르게 느낄 수 있습니다. 영향은 눈에 보이는 상처뿐 아니라 불안, 등교 부담, 관계 단절, 학급 분위기 변화로도 나타납니다.",
        questions: [
          {id:"impactVictim", type:"text", prompt:"상대방이 겪었을 수 있는 감정·생활의 변화·두려움을 세 가지 이상 생각해 쓰세요.", min:60},
          {id:"impactOthers", type:"text", prompt:"그 행동이 목격한 학생, 학급, 선생님, 가족에게 어떤 영향을 줄 수 있었나요?", min:50},
          {id:"impactMe", type:"text", prompt:"그 선택이 나의 생활과 신뢰에 가져온 결과는 무엇인가요?", min:35}
        ]
      },
      {
        title: "다른 선택 연습", minutes: 13,
        intro: "좋은 대안은 ‘참는다’로 끝나지 않습니다. 멈추기, 장소를 벗어나기, 온라인 접속을 끊기, 믿을 수 있는 어른에게 알리기처럼 실제로 할 수 있어야 합니다.",
        questions: [
          {id:"trigger", type:"text", prompt:"내가 말이나 행동을 거칠게 하기 전에 나타나는 신호를 적으세요.", hint:"몸의 신호, 머릿속 생각, 자주 생기는 상황으로 나누어 생각해 보세요.", min:45},
          {id:"threeChoices", type:"text", prompt:"같은 상황이 다시 생기면 할 수 있는 다른 행동을 세 가지 쓰세요.", min:60},
          {id:"helpWords", type:"text", prompt:"도움이 필요할 때 교사나 보호자에게 실제로 말할 문장을 완성하세요: ‘지금 저는 …’", min:30}
        ]
      },
      {
        title: "나의 재발 방지 계획", minutes: 14,
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
    title: "4차시 심화 과정",
    minutes: 180,
    breakAfter: [2, 4, 6],
    description: "디지털 행동, 감정·충동, 관계와 공동체 영향까지 깊이 살펴봅니다.",
    modules: []
  }
};

courses.long.modules = [
  ...courses.short.modules.slice(0, 2).map((m, i) => ({...m, minutes: i === 0 ? 10 : 20})),
  {
    title:"온라인에서는 더 빨리 멈추기", minutes:15,
    intro:"온라인 글과 사진은 짧은 시간에 복제되고, 지워도 다른 사람의 기기에 남을 수 있습니다. ‘직접 만들지 않았다’는 이유로 전달의 책임이 사라지지 않습니다.",
    questions:[
      {id:"digitalQuiz1", type:"quiz", prompt:"누군가를 놀리는 게시물을 친구가 보내왔을 때 가장 안전한 행동은?", options:["재미있으면 친한 친구에게만 보낸다.","저장하거나 전달하지 않고, 필요하면 믿을 수 있는 어른에게 알린다.","좋아요만 누르고 댓글은 쓰지 않는다."], answer:1, explain:"저장·전달·반응은 게시물의 확산과 피해를 키울 수 있습니다. 먼저 확산을 멈추는 것이 중요합니다."},
      {id:"digitalRisk", type:"text", prompt:"내가 자주 사용하는 온라인 공간에서 갈등이 커지는 순간과 그때 멈출 방법을 각각 쓰세요.", min:60},
      {id:"digitalRules", type:"text", prompt:"게시·댓글·전달 전에 확인할 나만의 세 가지 규칙을 만드세요.", min:65}
    ]
  },
  {...courses.short.modules[2], minutes:25},
  {
    title:"멈출 수 있었던 선택 지점", minutes:20,
    intro:"사건은 한 번의 선택으로만 이루어지지 않습니다. 처음 불편함을 느낀 순간, 친구가 부추긴 순간, 메시지를 보내기 전처럼 방향을 바꿀 지점이 있습니다.",
    questions:[
      {id:"turningPoints", type:"text", prompt:"상황이 커지기 전 멈추거나 도움을 요청할 수 있었던 순간을 세 곳 찾으세요.", min:80},
      {id:"pressure", type:"text", prompt:"친구의 분위기나 단체의 압력이 내 선택에 영향을 주었다면, 다음에는 어떻게 거절할 수 있을까요? 실제 문장으로 쓰세요.", min:50}
    ]
  },
  {...courses.short.modules[3], minutes:23},
  {
    title:"감정과 충동 다루기", minutes:22,
    intro:"감정은 잘못이 아니지만 감정 때문에 한 행동에는 책임이 따릅니다. 감정을 알아차리고 행동 사이에 시간을 만드는 연습을 합니다.",
    questions:[
      {id:"emotionChain", type:"text", prompt:"최근 갈등 상황을 ‘상황 → 생각 → 몸의 신호 → 감정 → 행동’ 순서로 나누어 쓰세요.", min:80},
      {id:"pausePlan", type:"text", prompt:"감정이 7점 이상 올라갔을 때 실행할 3단계 멈춤 계획을 쓰세요.", hint:"예: 휴대전화 내려놓기 → 복도나 상담실로 이동하기 → 교사에게 말하기", min:60}
    ]
  },
  {...courses.short.modules[4], minutes:18},
  {
    title:"책임 있는 회복", minutes:12,
    intro:"회복은 상대방에게 용서를 요구하는 일이 아닙니다. 상대방의 안전과 선택을 존중하면서 내가 해야 할 책임을 지속하는 것입니다.",
    questions:[
      {id:"repair", type:"text", prompt:"상대방에게 직접 접촉하지 않고 지금부터 할 수 있는 책임 있는 행동을 세 가지 쓰세요.", min:60},
      {id:"respect", type:"text", prompt:"상대방이 사과나 만남을 원하지 않더라도 내가 지켜야 할 행동은 무엇인가요?", min:40}
    ]
  },
  {...courses.short.modules[5], minutes:15}
];

const typeData = [
  {name:"신체폭력", desc:"때리기, 밀기, 발로 차기, 물건으로 다치게 하기 등", ask:"상대방의 신체 안전을 해친 행동, 멈추라는 신호, 다칠 가능성을 살펴보세요."},
  {name:"언어폭력", desc:"욕설, 모욕, 비하, 소문 퍼뜨리기 등", ask:"실제로 사용한 표현, 들은 사람, 반복 여부와 그 말이 남길 영향을 살펴보세요."},
  {name:"금품갈취", desc:"돈이나 물건을 빼앗거나 억지로 빌리고 돌려주지 않는 행동", ask:"상대방이 자유롭게 거절할 수 있었는지, 돈·물건·반환 약속을 살펴보세요."},
  {name:"협박", desc:"겁을 주거나 해를 끼칠 듯 말하고 행동하는 것", ask:"상대방이 어떤 위협을 느꼈을지, 말·메시지·행동이 만든 두려움을 살펴보세요."},
  {name:"강요", desc:"하기 싫은 행동을 시키거나 대신하게 하는 것", ask:"상대방에게 거절할 선택권이 있었는지, 거절했을 때 불이익을 암시했는지 살펴보세요."},
  {name:"괴롭힘", desc:"장난을 내세워 반복적으로 불편함이나 고통을 주는 행동", ask:"장난이라는 말 뒤에 반복, 힘의 차이, 싫다는 표현의 무시가 있었는지 살펴보세요."},
  {name:"따돌림", desc:"집단에서 의도적으로 빼거나 함께 피하고 소외시키는 행동", ask:"누가 배제되었는지, 온라인·교실에서 얼마나 이어졌는지, 동조한 행동을 살펴보세요."},
  {name:"사이버폭력", desc:"온라인에서 모욕·따돌림·사진이나 영상 공유 등으로 피해를 주는 행동", ask:"게시·댓글·재전송·단체대화방 배제처럼 피해를 만들거나 확산한 행동을 살펴보세요."},
  {name:"성폭력", desc:"성적인 말·접촉·사진·영상 등으로 불쾌감이나 피해를 주는 행동", ask:"구체적인 장면을 자세히 쓰지 않아도 됩니다. 동의가 없었던 말·접촉·공유가 있었는지 확인하고 반드시 교사와 상담하세요."}
];

const typeLessons = [
  {scenario:"쉬는 시간에 친구를 밀었고, 친구가 그만하라고 했지만 다시 밀었습니다.", question:"이 사례에서 가장 먼저 확인해야 할 점은?", options:["서로 친한 사이인지", "신체 안전을 해쳤고 멈추라는 의사를 무시했는지", "주변 학생이 웃었는지"], answer:1, explain:"친밀함이나 장난 의도보다 신체 안전, 반복, 상대방의 거부 의사를 먼저 살펴야 합니다."},
  {scenario:"여러 친구 앞에서 싫어하는 별명을 반복해서 불렀습니다.", question:"가장 적절한 판단은?", options:["웃으며 말했다면 문제없다.", "친한 사이에서는 어떤 표현도 괜찮다.", "싫다는 의사를 무시하고 반복했다면 언어폭력이 될 수 있다."], answer:2, explain:"실제로 사용한 표현, 공개된 장소, 반복 여부와 상대방에게 생긴 영향을 함께 봅니다."},
  {scenario:"돈을 빌려 달라고 반복해서 요구했고, 거절하면 친구들에게 말하겠다고 했습니다.", question:"이 사례의 핵심 문제는?", options:["돈의 액수가 적다는 점", "상대방이 자유롭게 거절하기 어려웠다는 점", "나중에 돌려줄 생각이었다는 점"], answer:1, explain:"금액보다 강요와 위협이 있었는지, 상대방에게 실질적인 거절 선택권이 있었는지가 중요합니다."},
  {scenario:"말을 듣지 않으면 다음에 가만두지 않겠다는 메시지를 보냈습니다.", question:"이 행동을 판단할 때 중요한 것은?", options:["실제로 때리지 않았으므로 문제없다.", "메시지를 삭제했는지만 본다.", "상대방에게 두려움과 위협을 느끼게 했는지 본다."], answer:2, explain:"직접적인 신체행동이 없어도 말과 메시지로 두려움을 주면 협박이 될 수 있습니다."},
  {scenario:"거절하는 친구에게 숙제를 대신 하라고 시키고, 하지 않으면 모임에서 빼겠다고 했습니다.", question:"가장 큰 문제는?", options:["숙제의 양", "상대방의 선택권을 빼앗고 불이익을 암시한 점", "같은 반 친구끼리 부탁한 점"], answer:1, explain:"부탁과 강요의 차이는 상대방이 불이익 없이 자유롭게 거절할 수 있었는지에 있습니다."},
  {scenario:"싫다고 여러 번 말한 친구의 물건을 숨기는 장난을 계속했습니다.", question:"가장 적절한 판단은?", options:["물건을 돌려주면 항상 괜찮다.", "장난이라는 이름이어도 반복하고 거부 의사를 무시했다면 괴롭힘이 될 수 있다.", "여럿이 함께하면 개인 책임은 없다."], answer:1, explain:"반복성, 힘의 차이, 싫다는 표현을 무시했는지를 살펴야 합니다."},
  {scenario:"여러 학생이 한 학생만 모임과 단체대화방에서 계속 제외했습니다.", question:"참여하지 않고 보기만 한 학생도 생각해야 할 점은?", options:["직접 제외하지 않았으므로 아무 책임도 없다.", "집단 배제에 동조하거나 확산을 막지 않은 행동을 돌아봐야 한다.", "온라인에서 일어났으므로 학교와 관계없다."], answer:1, explain:"따돌림은 집단의 동조로 커질 수 있습니다. 적극적으로 가담하지 않았더라도 자신의 반응과 선택을 돌아볼 필요가 있습니다."},
  {scenario:"친구의 사진을 허락 없이 단체대화방에 올리고 놀리는 댓글을 달았습니다.", question:"사진을 다시 전달한 사람의 행동은?", options:["처음 올린 사람이 아니므로 관계없다.", "댓글을 달지 않았다면 항상 괜찮다.", "재전송으로 피해를 확산할 수 있으므로 멈춰야 한다."], answer:2, explain:"온라인에서는 게시뿐 아니라 저장, 재전송, 댓글과 동조 반응도 피해를 키울 수 있습니다."},
  {scenario:"상대방이 불편하다고 했는데도 성적인 표현을 반복했습니다.", question:"이 상황에서 우선해야 할 것은?", options:["농담이었다고 설명하는 것", "구체적인 내용을 여러 번 다시 말하게 하는 것", "행동을 즉시 멈추고 안전한 어른과 전문적인 도움을 연결하는 것"], answer:2, explain:"동의 없는 성적인 말·접촉·촬영·공유는 즉시 멈춰야 합니다. 구체적인 장면을 반복 서술하도록 강요하지 않고 교사와 전문상담 체계로 연결합니다."}
];

const examples = {
  goal:"예: 화가 나면 바로 메시지를 보내지 않고 10분 동안 휴대전화를 내려놓겠습니다.",
  boundary:"예: 친하다는 이유로 싫어하는 별명을 여러 사람 앞에서 부른 행동입니다.",
  facts:"예: 점심시간에 단체대화방에 사진을 올렸고, 두 번의 놀리는 댓글을 썼습니다. 이후 다른 친구가 공유했을 때 말리지 않았습니다.",
  interpretation:"예: 대답하지 않는 것을 보고 나를 일부러 무시한다고 단정했지만, 실제 이유는 확인하지 않았습니다.",
  responsibility:"예: 다른 친구가 먼저 말했더라도, 그 표현을 따라 쓰고 공유한 행동은 내 책임입니다.",
  typeReflection:"예: 여러 사람이 보는 곳에서 같은 표현을 반복했고, 상대방이 싫다고 한 뒤에도 멈추지 않은 점을 돌아봐야 합니다.",
  impactVictim:"예: 학교에 오기 싫었을 수 있고, 또 같은 일이 생길까 불안했을 수 있으며, 친구들을 믿기 어려워졌을 수 있습니다.",
  impactOthers:"예: 목격한 친구들이 다음에는 자신도 대상이 될까 걱정하고, 학급에서 자유롭게 말하기 어려워졌을 수 있습니다.",
  impactMe:"예: 친구와 교사의 신뢰가 낮아졌고, 내 행동을 설명하고 책임져야 하는 상황이 생겼습니다.",
  trigger:"예: 얼굴이 뜨거워지고 ‘나를 무시한다’는 생각이 들 때 말이 거칠어집니다.",
  threeChoices:"예: 그 자리를 벗어나기, 메시지를 보내기 전 교사에게 보여주기, 감정이 가라앉은 뒤 사실만 말하기.",
  helpWords:"예: 지금 저는 화가 많이 나서 혼자 해결하면 말이 거칠어질 것 같습니다. 잠시 분리해 주세요.",
  stop:"예: 단체대화방에서 친구를 언급하는 글을 쓰지 않겠습니다. 싫다고 한 별명을 다시 부르지 않겠습니다.",
  start:"예: 갈등이 생기면 메시지를 보내기 전에 담당 교사에게 먼저 알리겠습니다.",
  support:"예: 담임교사에게 감정이 7점 이상 올라가거나 온라인에서 다툼이 시작될 때 도움을 요청하겠습니다.",
  final:"예: 이번 주 점심시간에 화가 나는 일이 생기면 복도로 나가 담임교사에게 먼저 상황을 말하겠습니다.",
  digitalRisk:"예: 밤에 단체대화방에서 여러 명이 한 친구를 놀릴 때 갈등이 커집니다. 그때 대화방을 닫고 화면을 저장하지 않은 채 보호자에게 알리겠습니다.",
  digitalRules:"예: 당사자의 허락이 있는가, 다른 사람이 보아도 안전한가, 내일 다시 읽어도 책임질 수 있는가를 확인합니다.",
  turningPoints:"예: 처음 놀리는 말이 나왔을 때, 사진을 올리기 전, 친구가 그만하라고 했을 때 멈출 수 있었습니다.",
  pressure:"예: ‘나는 그 일에 참여하지 않을 거야. 그만하고 다른 얘기하자.’라고 말하겠습니다.",
  emotionChain:"예: 답장을 받지 못함 → 무시당했다고 생각함 → 심장이 빨리 뜀 → 화남 → 단체방에 공격적인 글을 씀.",
  pausePlan:"예: 휴대전화 내려놓기 → 교실 밖 지정 장소로 이동하기 → 담당 교사에게 현재 감정을 말하기.",
  repair:"예: 접촉 금지 지키기, 관련 게시물 확산 막기, 정해진 교육과 상담에 성실히 참여하기.",
  respect:"예: 답이나 용서를 요구하지 않고, 마주치지 않도록 정해진 동선과 학교의 안내를 지키겠습니다."
};

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
      <div class="course-meta"><span class="tag ${id === "long" ? "cool" : ""}">${id === "short" ? "45분 × 2차시" : "45분 × 4차시"}</span><span class="tag ${id === "long" ? "cool" : ""}">총 ${c.minutes}분</span><span class="tag ${id === "long" ? "cool" : ""}">${c.modules.length}단계</span>${saved?'<span class="tag">작성 중</span>':''}</div>
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
  if(q.type === "primaryType") return value !== "";
  if(q.type === "additionalTypes") return true;
  if(q.type === "adaptive") return selectedTypeIndices(courseId).every(i=>getValue(courseId,mi,`adaptive_${i}`) !== "");
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
      <p class="eyebrow">45분 수업 기준 · 총 ${c.minutes}분</p><h2>${c.title}</h2>
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
  if(q.type === "text") return `<div class="question"><label class="prompt" for="${q.id}">${num}. ${q.prompt} <span class="required">필수</span></label>${q.id === "typeReflection" ? renderSelectedTypeGuide() : ""}<textarea id="${q.id}" data-q="${q.id}" data-type="text" data-min="${q.min||1}" placeholder="여기에 직접 작성하세요.">${escapeHtml(value)}</textarea>${q.hint?`<p class="hint">도움말: ${q.hint}</p>`:""}${examples[q.id]?`<details class="example"><summary>예시 답안 보기</summary><p><strong>그대로 옮기지 말고 자신의 상황과 말로 작성하세요.</strong></p><p>${examples[q.id]}</p></details>`:""}<div class="char-count"><span>${value.length}</span>자 · 충실한 답변 권장</div></div>`;
  if(q.type === "primaryType") {
    return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend><p class="hint">이 선택은 공식적인 법적 판단이 아니라 학습 내용을 맞추기 위한 것입니다.</p><div class="type-grid">${typeData.map((t,i)=>`<label class="type-choice"><input type="radio" name="${q.id}" data-q="${q.id}" data-type="primaryType" value="${i}" ${value===String(i)?'checked':''}><span><strong>${t.name}</strong><small>${t.desc}</small></span></label>`).join("")}<label class="type-choice"><input type="radio" name="${q.id}" data-q="${q.id}" data-type="primaryType" value="unsure" ${value==='unsure'?'checked':''}><span><strong>교사와 확인 필요</strong><small>어떤 유형인지 스스로 판단하기 어려운 경우</small></span></label></div></fieldset>`;
  }
  if(q.type === "additionalTypes") {
    const selected = value.split("|").filter(Boolean);
    const primary = getValue(state.course,0,"primaryType");
    return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="hint">선택 사항</span></legend><div class="type-grid compact">${typeData.map((t,i)=>String(i)===primary?"":`<label class="type-choice"><input type="checkbox" data-q="${q.id}" data-type="additionalTypes" value="${i}" ${selected.includes(String(i))?'checked':''}><span><strong>${t.name}</strong><small>${t.desc}</small></span></label>`).join("")}</div><p class="hint">추가 유형을 선택하지 않아도 다음 단계로 진행할 수 있습니다.</p></fieldset>`;
  }
  if(q.type === "adaptive") {
    return renderAdaptiveLearning(q, num);
  }
  if(q.type === "checks") {
    const selected = value.split("|");
    return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend><div class="choice-list">${q.options.map((o,i)=>`<label class="choice"><input type="checkbox" data-q="${q.id}" data-type="checks" value="${i}" ${selected.includes(String(i))?'checked':''}><span>${o}</span></label>`).join("")}</div></fieldset>`;
  }
  return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend><div class="choice-list">${q.options.map((o,i)=>`<label class="choice"><input type="radio" name="${q.id}" data-q="${q.id}" data-type="quiz" value="${i}" ${value===String(i)?'checked':''}><span>${o}</span></label>`).join("")}</div><div class="feedback ${value!==''?'show':''}" id="feedback-${q.id}">${value!=='' ? `<strong>${Number(value)===q.answer?'확인했습니다.':'다시 생각해 보세요.'}</strong><br>${q.explain}` : ''}</div></fieldset>`;
}

function selectedTypeIndices(courseId=state.course) {
  const primary = getValue(courseId,0,"primaryType");
  const additional = getValue(courseId,0,"additionalTypes").split("|").filter(Boolean);
  return [primary, ...additional].filter(v=>/^\d+$/.test(v)).map(Number).filter((v,i,a)=>a.indexOf(v)===i);
}

function renderAdaptiveLearning(q, num) {
  const selected = selectedTypeIndices();
  const unsure = getValue(state.course,0,"primaryType") === "unsure";
  const common = `<div class="common-core"><strong>모든 유형에 공통으로 적용되는 네 가지</strong><ol><li>장난이라는 의도만으로 피해가 없어지지 않습니다.</li><li>다른 사람이 먼저 시작했어도 내가 한 행동에는 책임이 있습니다.</li><li>동조·전달·방관도 피해를 키울 수 있습니다.</li><li>피해학생 접촉과 보복은 하지 않고 교사에게 먼저 도움을 요청합니다.</li></ol></div>`;
  if(unsure || !selected.length) return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">교사 확인</span></legend>${common}<div class="notice">유형을 ‘교사와 확인 필요’로 선택했습니다. 담당 교사와 확인한 뒤 1단계에서 주요 유형을 선택하면 맞춤 사례가 나타납니다.</div></fieldset>`;
  return `<fieldset class="question"><legend>${num}. ${q.prompt} <span class="required">필수</span></legend>${common}<div class="adaptive-stack">${selected.map((i,pos)=>{
    const t=typeData[i], l=typeLessons[i], answer=getValue(state.course,state.step,`adaptive_${i}`);
    return `<article class="lesson-card"><div class="lesson-label"><span class="tag">${pos===0?'주요 유형':'추가 유형'}</span><strong>${t.name}</strong></div><p class="scenario"><strong>사례</strong><br>${l.scenario}</p><p><strong>${l.question}</strong></p><div class="choice-list">${l.options.map((o,oi)=>`<label class="choice"><input type="radio" name="adaptive_${i}" data-q="adaptive_${i}" data-type="adaptive" value="${oi}" ${answer===String(oi)?'checked':''}><span>${o}</span></label>`).join("")}</div><div class="feedback ${answer!==''?'show':''}">${answer!==''?`<strong>${Number(answer)===l.answer?'확인했습니다.':'다시 생각해 보세요.'}</strong><br>${l.explain}`:""}</div></article>`;
  }).join("")}</div></fieldset>`;
}

function renderSelectedTypeGuide() {
  const selected = selectedTypeIndices();
  if(!selected.length) return `<div class="notice">먼저 1단계에서 주요 유형을 선택하거나 담당 교사와 확인하세요.</div>`;
  return `<div class="selected-types"><p><strong>선택한 유형별 확인 질문</strong></p>${selected.map(i=>typeData[i]).filter(Boolean).map(t=>`<div><span class="tag">${t.name}</span><p>${t.ask}</p></div>`).join("")}</div>`;
}

function bindCourse() {
  document.querySelectorAll("[data-step]").forEach(b=>b.addEventListener("click",()=>{ saveVisible(); state.step=Number(b.dataset.step); renderCourse(); window.scrollTo({top:0}); }));
  document.querySelectorAll("textarea").forEach(t=>t.addEventListener("input",()=>{ setValue(state.course,state.step,t.dataset.q,t.value); t.parentElement.querySelector(".char-count span").textContent=t.value.length; }));
  document.querySelectorAll("input").forEach(i=>i.addEventListener("change",()=>{
    const qid=i.dataset.q, type=i.dataset.type;
    if(type === "checks") { const vals=[...document.querySelectorAll(`input[data-q="${qid}"]:checked`)].map(x=>x.value); setValue(state.course,state.step,qid,vals.join("|")); }
    else if(type === "additionalTypes") {
      const checked=[...document.querySelectorAll(`input[data-q="${qid}"]:checked`)];
      if(checked.length>2){ i.checked=false; showToast("추가 유형은 최대 2개까지 선택할 수 있습니다."); return; }
      setValue(state.course,state.step,qid,checked.map(x=>x.value).join("|"));
    }
    else {
      setValue(state.course,state.step,qid,i.value);
      if(type === "primaryType") {
        const remaining=getValue(state.course,0,"additionalTypes").split("|").filter(v=>v && v!==i.value);
        setValue(state.course,0,"additionalTypes",remaining.join("|"));
      }
      renderCourse();
    }
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
  if(state.step < courses[state.course].modules.length-1){
    if((courses[state.course].breakAfter || []).includes(state.step)) renderPeriodBreak();
    else { state.step++; renderCourse(); window.scrollTo({top:0,behavior:"smooth"}); }
  }
  else renderFinish();
}

function renderPeriodBreak() {
  clearInterval(ticker);
  const c = courses[state.course];
  const period = (c.breakAfter || []).indexOf(state.step) + 1;
  const nextPeriod = period + 1;
  app.innerHTML = `<section class="period-break"><p class="eyebrow">${period}차시 마침</p><h1>여기서 잠시 멈추고<br>작성 내용을 확인하세요.</h1><p class="lead">지금까지 작성한 답이 구체적인지 살펴보세요. 학교 시간표에 따라 쉬는 시간을 가진 뒤 다음 차시를 시작합니다.</p><div class="period-check"><strong>마침 점검</strong><ul><li>사람의 실명이나 개인정보를 쓰지 않았나요?</li><li>다른 사람의 행동보다 내가 한 행동을 구체적으로 썼나요?</li><li>예시를 그대로 복사하지 않고 자신의 말로 작성했나요?</li></ul></div><div class="button-row"><button class="primary" id="continue-period" type="button">${nextPeriod}차시 시작</button><button class="secondary" id="review-period" type="button">이전 내용 다시 보기</button></div></section>${renderPrintSummary()}`;
  document.querySelector("#continue-period").addEventListener("click",()=>{state.step++;renderCourse();window.scrollTo({top:0});});
  document.querySelector("#review-period").addEventListener("click",()=>renderCourse());
}

function renderFinish() {
  clearInterval(ticker);
  const c=courses[state.course];
  app.innerHTML=`<section class="module-card"><p class="eyebrow">모든 단계 작성 완료</p><h1>${c.title}을 끝까지 작성했습니다.</h1><p class="lead">완료 화면은 자동 이수증이 아닙니다. 작성 내용을 인쇄하거나 PDF로 저장한 뒤 담당 교사의 확인을 받으세요.</p><div class="notice"><strong>마지막 안전 확인</strong><br>피해학생에게 직접 연락하거나, 다른 사람을 통해 말을 전하거나, 온라인에서 언급하지 않습니다. 도움이 필요하면 담당 교사에게 먼저 말합니다.</div><div class="button-row"><button class="primary" id="finish-print" type="button">작성 내용 인쇄·PDF 저장</button><button class="secondary" id="finish-review" type="button">작성 내용 다시 보기</button><button class="secondary" data-route="home" type="button">처음 화면</button></div></section>${renderPrintSummary()}`;
  document.querySelector("#finish-print").addEventListener("click",()=>window.print());
  document.querySelector("#finish-review").addEventListener("click",()=>{state.step=0;renderCourse();});
}

function answerLabel(q, value, mi) {
  if(q.type === "adaptive") return selectedTypeIndices().map(i=>{
    const selectedAnswer=getValue(state.course,mi,`adaptive_${i}`), lesson=typeLessons[i];
    return `• ${typeData[i].name}: ${lesson.options[Number(selectedAnswer)] || "(응답 없음)"}`;
  }).join("\n") || "(교사와 유형 확인 필요)";
  if(q.type === "additionalTypes") return value ? value.split("|").map(v=>`• ${typeData[Number(v)]?.name || v}`).join("\n") : "(추가 유형 없음)";
  if(!value) return "(작성하지 않음)";
  if(q.type === "quiz") return q.options[Number(value)] || value;
  if(q.type === "checks") return value.split("|").map(v=>`• ${q.options[Number(v)]}`).join("\n");
  if(q.type === "primaryType") return value === "unsure" ? "교사와 확인 필요" : typeData[Number(value)]?.name || value;
  return value;
}

function renderPrintSummary() {
  const c=courses[state.course];
  return `<section class="print-summary"><p>학교폭력 조치 이행 특별교육 학생 작성 자료</p><h1>${c.title}</h1><p>학생 확인: ____________________　교육일: ____________________　교사 확인: ____________________</p>${c.modules.map((m,mi)=>`<section><h2>${mi+1}. ${m.title}</h2>${m.questions.map(q=>`<div class="print-item"><strong>${q.prompt}</strong><div class="print-answer">${escapeHtml(answerLabel(q,getValue(state.course,mi,q.id),mi))}</div></div>`).join("")}</section>`).join("")}<section><h2>교사 확인</h2><p>□ 완료　□ 보완 필요　□ 상담 필요</p><p>확인 의견:</p><br><br></section></section>`;
}

function resetCourse() {
  if(!confirm("이 과정에서 작성한 내용을 모두 지울까요? 삭제 후에는 복구할 수 없습니다.")) return;
  const c=courses[state.course];
  c.modules.forEach((m,mi)=>m.questions.forEach(q=>localStorage.removeItem(key(state.course,mi,q.id))));
  c.modules.forEach((_,mi)=>typeData.forEach((_,i)=>localStorage.removeItem(key(state.course,mi,`adaptive_${i}`))));
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
    <article class="info-card"><h2>시작 전 5분</h2><ul class="checklist"><li>2차시 과정은 90분, 4차시 과정은 180분으로 운영</li><li>조치 결정문의 이수 시간과 기관 기준 확인</li><li>조용한 개별 좌석과 인터넷 기기 준비</li><li>피해학생 이름·개인정보를 입력하지 않도록 안내</li><li>직접 접촉·대리 전달·온라인 언급 금지 확인</li><li>힘들 때 도움을 요청할 담당 교사 안내</li></ul></article>
    <article class="info-card"><h2>진행 중</h2><ul class="checklist"><li>교사는 지속적으로 옆에 있지 않아도 됨</li><li>정답이나 반성 표현을 대신 말해주지 않음</li><li>각 45분 차시 종료 화면에서 작성 상태 확인</li><li>주요 유형 1개와 추가 유형 최대 2개가 적절한지 확인</li><li>‘교사와 확인 필요’를 선택한 학생은 맞춤 학습 전 유형 확인</li><li>예시 답안을 그대로 옮기지 않았는지 확인</li><li>위협·보복·자해·타해 표현 발견 시 즉시 개입</li></ul></article>
    <article class="info-card full"><h2>종료 후 3단계 검토</h2><table class="rubric"><thead><tr><th>판정</th><th>확인 기준</th><th>교사의 다음 행동</th></tr></thead><tbody><tr><td><strong>완료</strong></td><td>필수 항목이 작성되었고, 책임 행동과 재발 방지 계획이 구체적임</td><td>학생과 핵심 계획 1가지를 구두로 확인하고 기록 보관</td></tr><tr><td><strong>보완 필요</strong></td><td>다른 사람 탓만 하거나, 답이 지나치게 짧고 실행 계획이 모호함</td><td>부족한 문항만 표시하여 학생이 스스로 다시 작성</td></tr><tr><td><strong>상담 필요</strong></td><td>보복 의도, 위협, 자해·타해 암시, 심한 불안이나 피해 호소가 있음</td><td>혼자 돌려보내지 말고 학교의 상담·위기 대응 절차에 따라 조치</td></tr></tbody></table></article>
    <article class="info-card"><h2>검토할 핵심 6가지</h2><ul class="checklist"><li>필수 단계가 모두 작성되었는가</li><li>자신의 행동을 사실 중심으로 적었는가</li><li>다른 사람과 별개로 자신의 책임을 구분했는가</li><li>상대방과 공동체의 영향을 이해했는가</li><li>접촉·보복 금지 원칙을 이해했는가</li><li>도움을 요청할 어른과 시점이 정해졌는가</li></ul></article>
    <article class="info-card"><h2>보관과 개인정보</h2><p>답변은 브라우저의 해당 기기에만 임시 저장됩니다. 공용 기기에서는 인쇄 또는 PDF 저장 후 반드시 ‘이 과정 초기화’를 눌러 삭제하세요.</p><p>학생과 관련 학생의 실명, 학번, 연락처 등은 웹페이지에 입력하지 않습니다. 결과물의 보관 기간과 장소는 학교의 기록 관리 기준을 따릅니다.</p></article>
    <article class="info-card full"><h2>행정적 유의사항</h2><p>이 웹자료의 완료 화면만으로 공식 이수가 자동 인정되는 것은 아닙니다. 학교폭력예방법 제17조에 따른 특별교육은 조치 유형에 따라 교육감이 정한 기관, 심의위원회가 정한 기간 등의 요건이 적용될 수 있으므로 조치 결정문과 관할 교육지원청 지침을 먼저 확인하세요.</p><p>피해학생에게 전달할 사과문이나 만남을 학생에게 요구하지 않습니다. 회복적 절차가 필요한 경우에도 피해학생의 안전과 자발성을 우선하고, 학교가 허용한 절차 안에서 진행합니다.</p><p>성폭력 등 민감한 사안은 학생에게 구체적인 장면을 반복해서 서술하도록 요구하지 않습니다. 학교의 성폭력 대응 절차와 전문상담 체계에 따라 별도 지원하고, 웹자료는 보조 활동으로만 사용합니다.</p></article>
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
