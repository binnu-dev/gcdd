# VS Code AI Workshop for Non-Developers

비개발자를 위한 VS Code + GitHub Copilot 핸즈온 자료입니다.

목표는 코딩을 배우는 것이 아니라, VS Code를 AI 작업실로 사용해 내 업무 폴더를 팀 전용 AI 비서처럼 구성하는 것입니다.

## Core Idea

비개발자도 VS Code + GitHub Copilot을 활용해 **우리 팀만의 AI 비서**를 직접 만들 수 있다.
핵심은 코드가 아니라 **파일**이다. 팀의 맥락과 반복 업무를 파일로 잘 정리하면, AI는 그 파일을 보고 항상 우리 팀 일을 알고 있는 것처럼 동작한다.

## Suggested Session Flow

2시간 세션 기준.

---

### 앞 30분 — 발표: 우리가 해본 이야기

AgentCon Seoul 발표 + 사내 발표 자료를 섞어서 실제 경험을 소개한다.

- 일반적인 AI 사용의 한계: 매번 설명해야 하고, 팀 맥락을 모름
- 핵심 구조 소개: `copilot-instructions.md`, `prompts/`, `skills/`
- "팀원들은 아직도 GitHub이 뭔지 모른다" — 개발 지식 없이도 동작한다는 것
- Power Automate 등 외부 연동은 개념만 소개, 실습 없음

---

### 뒤 90분 — 핸즈온: 직접 만들어보기

#### 1단계: 가상 페르소나로 시작하기

모두 **동일한 가상 회사·팀 페르소나**로 실습한다. 본인 실제 업무가 아니기 때문에 부담이 없고, 같은 조건에서 시작해 서로 결과를 비교하는 재미가 있다.

> **미소테크 마케팅팀** — B2B SaaS 스타트업의 5인 마케팅팀.  
> SNS·이메일 캠페인을 운영하며 매주 채널별 성과 보고서를 작성한다.  
> 샘플 데이터: `data/marketing-campaign.csv` (채널별 클릭·전환율)

#### 2단계: 팀 AI 비서 기본 세팅

- `copilot-instructions.md` 작성: 팀 소개, 자주 쓰는 용어, 원하는 말투
- `.github/prompts/` 작성: 반복 업무용 프롬프트 파일 만들고 슬래시 커맨드로 실행
- Agent 모드로 샘플 데이터 분석 요청해보기

**Copilot 모드의 차이 — Ask / Plan / Agent**

| 모드 | 역할 | 언제 쓰나 |
|---|---|---|
| Ask | 질문에 답하기만 함, 파일 수정 없음 | 궁금한 것 물어볼 때 |
| Plan | 실행 전 계획을 먼저 보여줌 | 뭘 할지 확인하고 싶을 때 |
| Agent | 파일 읽기·쓰기·실행까지 자율 수행 | 실제 작업을 맡길 때 |

**Agent 모드 실행 권한 (Permission)**

| 설정 | 동작 |
|---|---|
| Default | 파일 수정·실행 전 매번 사용자 확인 |
| Bypass | 확인 없이 자동 진행 (빠르지만 주의 필요) |
| Autopilot | 완전 자율 — 사람 개입 없이 끝까지 실행 |

**프롬프트 예제 — "이렇게도 쓸 수 있구나" 싶은 것들**

단순 요약이나 번역 말고, AI에게 적대적 역할을 맡기는 방식이 의외로 강력하다.

| 이름 | 사용법 | 효과 |
|---|---|---|
| Grill Me | "이 기획안 들고 있을게, 심문해봐" | 투자자/임원처럼 약점을 집요하게 파고들어 논리 검증 |
| Pre-Mortem | "6개월 후 이 프로젝트가 완전히 망했다고 가정하자. 왜 실패했을까?" | 낙관론에서 벗어나 실패 원인을 역산 |
| Inversion | "이 캠페인을 확실히 망하게 하려면 어떻게 해야 할까?" | 실패 조건 나열 → 뒤집어서 리스크 체크리스트로 |
| Red Team | "경쟁사 마케터 입장에서 우리 신제품 약점 분석해줘" | 역할을 명확히 줄수록 날카로워짐 |

---

**잠깐 — Instructions / Prompts / Skills 뭐가 다를까?**

| | Instructions | Prompts | Skills |
|---|---|---|---|
| 파일 | `copilot-instructions.md` | `prompts/*.prompt.md` | `skills/*.skill.md` |
| 언제 | 항상 자동 적용 | 내가 부를 때 (`/slash`) | 내가 장착할 때 |
| 역할 | "넌 이런 팀에서 일해" | "이 작업 지금 해줘" | "이 전문성을 갖춰" |
| 비유 | 팀 온보딩 문서 | 업무 요청 양식 | 외부 전문가 소환 |

#### 3단계: Skills 써보기 — AI에게 새 능력을 장착한다

`skill.md`는 AI에게 특정 역할이나 행동 방식을 부여하는 파일이다. Copilot뿐 아니라 Claude Code, Cursor, Codex 등 어떤 AI 에디터에서도 공용으로 쓸 수 있다.

**Agent Browser** (VS Code 내장)
- Agent 모드 → Tools → Browser 활성화
- AI가 브라우저를 직접 열고 조작 — 페이지 읽기, 클릭, 정보 수집
- "이 경쟁사 사이트 열어서 가격 정보 가져와줘"

**Frontend Design Skill** (awesome-copilot, 커뮤니티 다운로드)
- AI가 코딩 전에 디자인 원칙을 읽고 시작 → 뻔한 레이아웃 탈출
- 샘플 데이터를 넣고 "HTML 보고서로 예쁘게 만들어줘" 하면 결과물 차이가 눈에 보임

**Documentation Writer Skill** (awesome-copilot, 커뮤니티 다운로드)
- 업무 메모나 회의 내용을 넣으면 잘 구조화된 문서로 자동 정리
- 페르소나 실습과 바로 연결: 내 팀 업무 → 팀 온보딩 문서화

#### 4단계: MCP 연결 — AI의 눈이 바깥으로 열린다

MCP(Model Context Protocol)를 연결하면 AI가 외부 서비스와 실시간으로 연결된다.

**다이소 MCP** (API 키 불필요, 워밍업용)
- "강남역 근처 다이소에 파일박스 재고 있어?"
- "오늘 CGV 홍대 상영시간 알려줘"
- 설정 없이 바로 동작, 분위기 환기용

**DART MCP** (금융감독원 공시 데이터, 메인 데모)
- "삼성전자 최근 3개년 매출 가져와줘"
- "카카오랑 네이버 영업이익 비교해줘"
- 데이터 가져온 뒤 → 비교 표 정리 + 보고서용 요약까지 한 번에

> 참고: 한국 개발자들이 만든 MCP 모음 → [awesome-mcp-korea](https://github.com/darjeeling/awesome-mcp-korea)

#### 5단계: 마무리 — 커뮤니티에는 이미 이런 것도 있다

**Awesome Copilot** VS Code 확장 설치 (`TimHeuer.awesome-copilot`)

전 세계 사람들이 만들어 공유한 instructions, prompts, skills를 브라우징하고 바로 다운받아 쓸 수 있다.

오늘 직접 만든 것과 같은 구조이지만, 커뮤니티가 이미 만들어둔 것들을 소개:

| 이름 | 설명 |
|---|---|
| Meeting Minutes | 회의록/녹취를 넣으면 결정사항·액션아이템 포함한 회의록으로 자동 정리 |
| Email Drafter | 내 말투·톤을 학습해서 이메일 초안 생성 |
| Daily Prep | Outlook 캘린더 읽어서 오늘 일정 분류 + 집중 시간 탐지 + 미팅 사전 준비 |
| LinkedIn Post Formatter | 아이디어를 LinkedIn 최적화 포맷으로 변환 |

> 참고: [github/awesome-copilot](https://github.com/github/awesome-copilot)

---

## Getting Started

```bash
git clone https://github.com/binnu-dev/vscode-ai-workshop-for-non-devs.git
cd vscode-ai-workshop-for-non-devs
```

VS Code로 폴더를 열면 `.github/` 안에 샘플 Instructions와 Prompts가 준비되어 있습니다.  
`personas/` 폴더에서 본인 팀 카드를 확인하고, `data/` 폴더의 샘플 CSV로 바로 실습을 시작할 수 있습니다.

## Repository Structure

```
.
├── workshop-slides.html          # 워크샵 발표용 슬라이드 (브라우저에서 바로 실행)
│
├── .github/
│   ├── copilot-instructions.md   # 샘플 팀 Instructions (마케팅팀 예시)
│   └── prompts/
│       ├── weekly-report.prompt.md   # 주간 보고서 초안 생성
│       ├── meeting-notes.prompt.md   # 회의록 정리
│       └── grill-me.prompt.md        # 기획안 심문 (Grill Me)
│
├── personas/                     # 가상 회사 팀 페르소나 카드
│   ├── marketing-team.md
│   ├── sales-team.md
│   ├── hr-team.md
│   └── planning-team.md
│
├── data/                         # 핸즈온용 샘플 데이터
│   ├── marketing-campaign.csv    # 채널별 캠페인 성과
│   ├── sales-pipeline.csv        # 영업 파이프라인 현황
│   ├── hr-recruiting.csv         # 채용 진행 현황
│   └── planning-tasks.csv        # 스프린트 태스크 현황
│
└── (발표 자료 PDF/HTML)

```

## Materials

- `agentcon-2026-seoul-slides.html`: AgentCon Seoul 발표 슬라이드 HTML
- `agentcon-2026-seoul-slides.pdf`: AgentCon Seoul 발표 슬라이드 PDF
- `[260408] AI 팀 비서, 우리 팀에도 만들 수 있다 (1).pdf`: 2026-04-08 내부 발표 자료

## Workshop Message

비개발자가 Copilot을 잘 쓰는 방법은 코드를 배우는 것이 아니라, 내 업무의 맥락과 반복 규칙을 파일로 잘 남기는 것입니다.
