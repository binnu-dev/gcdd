# VS Code AI Workshop for Non-Developers

비개발자를 위한 VS Code + GitHub Copilot 핸즈온 워크샵 자료입니다.

목표는 코딩을 배우는 것이 아니라, VS Code를 AI 작업실로 설정해 **팀 전용 AI 비서**를 직접 만드는 것입니다.

이 저장소의 핸즈온은 다음 두 가지를 함께 유지합니다.

- **Sean**: 참가자들이 공통으로 쓰는 AI 비서 페르소나
- **미소테크 마케팅팀**: 실습용으로 고정한 가상의 팀 설정

즉, 참가자들은 같은 기본 맥락에서 출발하고, 각자 프롬프트와 결과물을 다르게 발전시키게 됩니다.

---

## Core Idea

> 비개발자가 Copilot을 잘 쓰는 방법은 코드를 배우는 게 아니라,  
> **내 업무의 맥락과 반복 규칙을 파일로 잘 남기는 것**입니다.

팀의 맥락과 반복 업무를 파일에 담아두면, AI는 그 파일을 보고 항상 우리 팀의 일을 알고 있는 것처럼 동작합니다. 핵심은 파일 3개입니다: **Instructions**, **Prompts**, **Skills**.

---

## Session Flow (2시간)

### 앞 30분 — 발표: 우리가 해본 이야기

AgentCon Seoul + 사내 발표 자료를 섞어 실제 경험을 소개합니다.

- 일반적인 AI 사용의 한계: 매번 설명해야 하고, 팀 맥락을 모름
- 핵심 구조 소개: `copilot-instructions.md`, `prompts/`, `skills/`
- "팀원들은 아직도 GitHub이 뭔지 모른다" — 개발 지식 없이도 동작한다는 것
- Power Automate 등 외부 연동은 개념만 소개 (실습 없음)

---

### 뒤 90분 — 핸즈온: 직접 만들어보기

#### 1단계 | 페르소나 (5분)

참가자들은 모두 **미소테크 마케팅팀**이라는 가상 팀으로 실습을 시작합니다.

- 리포를 클론하고 VS Code로 엽니다.
- Sean은 공통 AI 비서 페르소나로 사용합니다.
- 참가자들은 실제 자기 팀 대신 같은 가상 맥락에서 먼저 성공 경험을 만듭니다.

빈 폴더를 하나 만들고 VS Code로 연 뒤, VS Code 터미널에서 실행합니다.

```bash
git clone https://github.com/binnu-dev/gcdd.git .
```

마지막 `.`은 새 하위 폴더를 만들지 않고 현재 VS Code 폴더를 실습 루트로 쓰겠다는 뜻입니다.

---

#### 2단계 | Instructions + Prompts (30분)

**① `.github/copilot-instructions.md` 확인**

`.github/copilot-instructions.md` 파일로 Sean의 말투와 가상 팀 맥락을 AI에게 알려줍니다. 이 파일은 Copilot Chat을 열 때마다 자동으로 적용됩니다.

```markdown
# Sean — 가상 팀을 위한 AI 비서

## Sean 페르소나
- 기본 언어: 한국어
- 말투: 친근하고 협력적
- 답변 끝에 여우 이모지 🦊

## 실습용 가상 팀
- 회사: 미소테크 (B2B SaaS)
- 팀: 5인 마케팅팀
- 실습 데이터: 공개 은행 전화 마케팅 캠페인 데이터

## 보고 스타일
- 임원 보고: 핵심 수치 3개 + 한 줄 인사이트
- 팀 내부: 고객 세그먼트별 상세 수치 + 다음 주 액션 아이템
```

샘플 파일은 이미 준비되어 있습니다: `.github/copilot-instructions.md`

---

**② `.github/prompts/weekly-report.prompt.md` 사용**

`.github/prompts/` 폴더에 파일이 있으면 Copilot Chat에서 `/파일명`으로 실행할 수 있습니다.

```markdown
<!-- .github/prompts/weekly-report.prompt.md -->
---
mode: agent
description: 이번 주 마케팅 성과 보고서 초안 작성
---
data/marketing-campaign.csv 파일과
team-docs/weekly-worklog.md 파일을 읽고
가장 최근 데이터를 기준으로
주간 마케팅 성과 보고서를 작성해주세요.
```

`data/marketing-campaign.csv`는 UCI Bank Marketing 데이터셋에서 샘플링한 실제 공개 데이터입니다. `y = yes`는 고객이 정기예금에 가입했다는 뜻입니다.

실습 흐름:

1. `team-docs/weekly-worklog.md`를 열어 아직 업데이트가 필요한 항목을 확인합니다.
2. Sean에게 아래처럼 업무 일지를 보강해달라고 요청합니다.
3. Chat에서 `/weekly-report` 입력 → 성과 데이터 + 업무 일지를 반영한 보고서 초안 완성

화면에 띄워둘 프롬프트 예시:

```text
Sean, team-docs/weekly-worklog.md를 업데이트해줘.

아직 비어 있는 금요일 진행 상황, 이번 주 가장 큰 배움,
다음 주 우선순위 3개, 리스크/블로커를 채워야 해.

미소테크 마케팅팀 상황에 맞게 자연스럽게 상상해서 추가해줘.
다만 기존 문서의 톤과 형식은 유지해줘.
업데이트가 끝나면 어떤 내용을 추가했는지 짧게 요약해줘.
```

필요에 따라 아래 샘플도 함께 보여줄 수 있습니다.

- `.github/prompts/monthly-report.prompt.md`
- `.github/prompts/meeting-notes.prompt.md`
- `.github/prompts/grill-me.prompt.md`

---

**③ Ask / Plan / Agent 모드의 차이 설명**

| 모드 | 역할 | 언제 쓰나 |
|---|---|---|
| Ask | 답변만, 파일 수정 없음 | 궁금한 것 물어볼 때 |
| Plan | 실행 전 계획을 먼저 보여줌 | 뭘 할지 확인하고 싶을 때 |
| Agent | 파일 읽기·쓰기·실행까지 자율 수행 | 실제 작업을 맡길 때 |

**④ Permission 설명 (Default / Bypass / Autopilot)**

| 설정 | 동작 |
|---|---|
| Default | 파일 수정·실행 전 매번 사용자 확인 |
| Bypass | 확인 없이 자동 진행 |
| Autopilot | 완전 자율 — 사람 개입 없이 끝까지 실행 |

---

**⑤ 다양한 관점을 보게 도와주는 프롬프트 소개**

단순 요약·번역 말고, 같은 주제를 다른 시각에서 보게 만드는 prompt 예제로 소개합니다.

| 이름 | 사용법 | 효과 |
|---|---|---|
| Grill Me | "이 기획안 들고 있을게, 심문해봐" | 투자자처럼 약점을 파고들어 논리 검증 |
| Pre-Mortem | "6개월 후 이 프로젝트가 완전히 망했다고 가정하자. 왜 실패했을까?" | 낙관론에서 벗어나 실패 원인 역산 |
| Inversion | "이 캠페인을 확실히 망하게 하려면 어떻게 해야 할까?" | 실패 조건 나열 → 뒤집어서 리스크 체크리스트 |
| Red Team | "경쟁사 마케터 입장에서 우리 신제품 약점 분석해줘" | 역할이 명확할수록 날카로워짐 |

소개 항목:

- Grill Me
- Pre-Mortem
- Inversion
- Red Team

---

---

#### 3단계 | MCP (20분)

MCP(Model Context Protocol)를 연결하면 AI가 파일 바깥의 서비스와 실시간으로 연결됩니다.

**① 다이소 MCP 연결 (워밍업)**

참조: [hmmhmmhm/daiso-mcp](https://github.com/hmmhmmhm/daiso-mcp)
프롬프트/HTTP API 참고: `https://mcp.aka.page/prompt`

VS Code `settings.json`에 추가:

```json
{
  "mcp": {
    "servers": {
      "daiso": {
        "url": "https://mcp.aka.page/mcp"
      }
    }
  }
}
```

데모:

- "강남역 근처 다이소에 A4 파일박스 재고 있어?"
- "올리브영 명동 근처 매장 찾고 선크림 재고 확인해줘"
- "오늘 CGV 홍대 상영시간 알려줘"

다이소 MCP로 확인할 수 있는 것:

- 다이소 상품 검색, 매장 검색, 매장별 재고, 일부 상품 진열 위치
- 올리브영 매장/상품/재고
- CU, GS25, 세븐일레븐, 이마트24, 롯데마트 매장/상품/재고
- CGV, 메가박스, 롯데시네마 지점/영화/상영시간/잔여 좌석

---

**② DART MCP 연결 → 재무 데이터 가져와서 가공**

추천: [Dayoooun/dart-mcp](https://github.com/Dayoooun/dart-mcp)

- 원격 URL: `https://dart-mcp-self.vercel.app/sse`
- Vercel에 이미 배포되어 있어 바로 사용 가능
- 14개 도구: 기업 검색, 공시, 재무제표, 배당, 임원/직원, 지분, 자본/주식 정보
- 114,951개 기업 데이터, 2023~2025년 지원

VS Code `settings.json`에 추가:

```json
{
  "mcp": {
    "servers": {
      "opendart": {
        "type": "http",
        "url": "https://dart-mcp-self.vercel.app/sse"
      }
    }
  }
}
```

데모:

```text
"삼성전자랑 카카오 최근 3개년 매출 가져와줘"
→ 데이터 수신 후:
"두 회사 실적을 비교 표로 정리하고 마케팅팀 보고서용 요약 한 단락 써줘"
```

데이터 수집 + 분석 + 문서화까지 한 번에 보여주는 단계입니다.

자세한 참조 정보: `docs/mcp-reference.md`

> 한국 개발자들이 만든 MCP 모음 → [awesome-mcp-korea](https://github.com/darjeeling/awesome-mcp-korea)

---

#### 4단계 | Skills (20분)

`skill.md`는 AI에게 특정 전문성을 부여하는 파일입니다. Copilot뿐 아니라 Claude Code, Cursor, Codex 등 어떤 AI 에디터에서도 범용으로 쓸 수 있습니다.

**① Agent Browser 써보기**

- Agent 모드 → Tools → Browser 활성화
- AI가 브라우저를 직접 열고 조작 — 페이지 읽기, 클릭, 정보 수집
- 예: "이 경쟁사 사이트 열어서 가격 정보 가져와줘"

**② Frontend Design Skill 써보기 → HTML 보고서 만들기**

- Anthropic 공식 `frontend-design` skill을 예제로 사용
- AI가 코딩 전에 디자인 원칙을 먼저 읽고 시작 → 뻔한 레이아웃 탈출
- 예: `data/marketing-campaign.csv` 넣고 "고객 세그먼트별 HTML 보고서로 예쁘게 만들어줘" → 전/후 차이가 눈에 보임

**③ Skill Creator 살짝 보기**

- Anthropic 공식 `skill-creator` skill 구조를 열어봄
- skill을 어떻게 평가하고 다듬는지 참고용으로 보여줌

**④ prompt와 skill 차이 실험**

월간 보고서 하나를 예시로 두고 비교합니다.

- 먼저 `.github/prompts/monthly-report.prompt.md` 로 보고서를 만들어 봅니다.
- 이 단계에서도 목표 결과물은 동일합니다. 즉, 월간 보고서를 **HTML 결과물**로 만들게 합니다.
- prompt 안에서 보고서에 어떤 내용이 들어가야 하는지, 데이터 분석이 꼭 포함되어야 한다는 점까지 말로 설명합니다.
- 다만 이 단계에서는 구조와 스타일을 말로만 설명하므로 결과가 조금씩 달라질 수 있습니다.
- prompt는 그냥 말로 설명하는 요청에 가깝습니다.
- 그 다음 `.github/skills/monthly-report-template/` 예제를 내려받아 봅니다.
- 이 skill 폴더 안에는 월간 보고서에 어떤 데이터 분석이 들어가야 하는지 적은 문서, HTML 템플릿, 보조 스크립트가 함께 들어 있습니다.
- 처음에는 `SKILL.md` 에 `description`이 없어서 자동 발동이 잘 안 되는 상태로 시작합니다.
- 참가자들이 `description`을 직접 추가합니다.
- 다시 같은 월간 HTML 보고서를 만들게 해서 결과 차이를 비교합니다.

여기서 보여주고 싶은 포인트는 다음과 같습니다.

- `prompt`는 작업 요청서에 가깝습니다.
- `prompt`도 같은 결과물을 만들 수는 있습니다.
- `skill`은 작업 요청서보다 더 자세한 작업 매뉴얼에 가깝습니다.
- skill 안에는 CSS 스타일, HTML 템플릿, 섹션 순서, 채워 넣을 값의 범위, 필요한 데이터 분석 규칙까지 더 강하게 고정할 수 있습니다.
- 그래서 `prompt`는 비슷하지만 조금씩 다른 결과가 나오고, `skill`은 더 의도한 결과에 가깝게 맞춰집니다.

---

**⑤ Instructions / Prompts / Skills 개념 차이 정리**

| | Instructions | Prompts | Skills |
|---|---|---|---|
| 파일 위치 | `copilot-instructions.md` | `prompts/*.prompt.md` | `skills/*.skill.md` |
| 언제 작동 | 항상 자동 적용 | 내가 부를 때 (`/slash`) | 내가 장착할 때 |
| 역할 | "넌 이런 팀에서 일해" | "이 작업 지금 해줘" | "이 전문성을 갖춰" |
| 비유 | 팀 온보딩 문서 | 업무 요청 양식 | 외부 전문가 소환 |

**⑥ hook / agent 같은 기능 살짝 소개**

- hook: 특정 이벤트 전후에 자동으로 연결되는 확장 포인트
- agent: 파일 읽기·쓰기·실행까지 맡기는 자율 작업 모드

#### 5단계 | 팀 공유 체험 + 마무리 (15분)

**① 팀 공유 체험**

- 강사가 `team-docs/` 아래 새 파일을 push
- 참가자들이 pull
- Copilot이 방금 추가된 팀 문서를 바로 참조하는 흐름을 체험

**② 마무리 정리**

- 오늘 만든 구조를 자기 팀에 복제하는 방법 정리
- `team-docs/`, instructions, prompts를 어떻게 팀 자산으로 남길지 정리

---

## Getting Started

빈 폴더를 VS Code로 연 뒤, VS Code 터미널에서 실행합니다.

```bash
git clone https://github.com/binnu-dev/gcdd.git .
```

마지막 `.`은 새 하위 폴더를 만들지 않고 현재 VS Code 폴더를 실습 루트로 쓰겠다는 뜻입니다.

VS Code로 폴더를 열면 `.github/` 안에 Sean + 가상 팀 기준의 샘플 Instructions와 Prompts가 준비되어 있습니다. `data/` 폴더의 샘플 CSV와 `team-docs/weekly-worklog.md` 업무 일지로 바로 실습을 시작할 수 있습니다.

---

## Repository Structure

```text
.
├── .github/
│   ├── copilot-instructions.md         # Sean + 가상 팀 실습용 Instructions
│   └── prompts/
│       ├── weekly-report.prompt.md     # /weekly-report → 데이터 + 업무 일지 기반 주간 보고서
│       ├── monthly-report.prompt.md    # /monthly-report → 월간 HTML 보고서
│       ├── meeting-notes.prompt.md     # /meeting-notes → 회의록 정리
│       └── grill-me.prompt.md          # /grill-me → 기획안 심문
│
│   └── skills/
│       ├── frontend-design/
│       │   ├── LICENSE.txt
│       │   └── SKILL.md
│       └── monthly-report-template/
│           ├── SKILL.md                    # description을 직접 추가해보는 skill 예제
│           ├── scripts/
│           │   └── render-monthly-report.js
│           └── references/
│               ├── monthly-report-brief.md
│               └── monthly-report-template.html
│       └── skill-creator/
│           ├── SKILL.md
│           ├── agents/
│           ├── references/
│           └── scripts/
│
├── data/
│   └── marketing-campaign.csv          # UCI Bank Marketing 샘플 데이터
├── docs/
│   ├── mcp-reference.md                # 다이소/DART MCP 연결 및 실습 질문 참조
│   └── dataset-reference.md            # 실습 데이터 출처와 컬럼 설명
├── team-docs/
│   ├── README.md                       # 팀 공유 체험용 문서 폴더
│   └── weekly-worklog.md               # /weekly-report 실습용 주간 업무 일지
│
├── agentcon-2026-seoul-slides.html     # AgentCon 발표 슬라이드
├── handson-2026-seoul-slides.html      # 핸즈온 설명 슬라이드
└── (발표 자료 PDF)
```

---

## Materials

- `agentcon-2026-seoul-slides.html` / `.pdf` — AgentCon Seoul 발표 슬라이드
- `handson-2026-seoul-slides.html` — Sean 기반 핸즈온 설명 슬라이드
- `[260408] AI 팀 비서, 우리 팀에도 만들 수 있다 (1).pdf` — 2026-04-08 사내 발표 자료
