# VS Code AI Workshop for Non-Developers

비개발자를 위한 VS Code + GitHub Copilot 핸즈온 워크샵 자료입니다.

목표는 코딩을 배우는 것이 아니라, VS Code를 AI 작업실로 설정해 **팀 전용 AI 비서**를 직접 만드는 것입니다.

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

---

#### 1단계 | 가상 페르소나 (5분)

모두 동일한 가상 회사·팀으로 실습합니다. 같은 조건에서 시작해 서로 결과를 비교하는 재미가 있습니다.

> **미소테크 마케팅팀**
> B2B SaaS 스타트업의 5인 마케팅팀.
> SNS·이메일 캠페인을 운영하며 매주 채널별 성과 보고서를 작성합니다.
> 샘플 데이터: `data/marketing-campaign.csv`

---

#### 2단계 | Instructions + Prompts 만들기 (30분)

**① copilot-instructions.md 작성**

`.github/copilot-instructions.md` 파일을 만들어 팀 맥락을 AI에게 알려줍니다.
이 파일은 Copilot Chat을 열 때마다 자동으로 적용됩니다.

```markdown
## 우리 팀 소개
- 팀명: 마케팅팀 (5명)
- 회사: 미소테크 (B2B SaaS)
- 주요 채널: Instagram, LinkedIn, 이메일

## 자주 쓰는 용어
- MQL: Marketing Qualified Lead
- CTR: 클릭률

## 보고 스타일
- 항상 한국어로 작성
- 임원 보고: 핵심 수치 + 한 줄 인사이트
```

샘플 파일: `.github/copilot-instructions.md`

---

**② prompts 파일 만들기**

`.github/prompts/` 폴더에 파일을 만들면 Copilot Chat에서 `/파일명`으로 실행할 수 있습니다.

```markdown
<!-- .github/prompts/weekly-report.prompt.md -->
---
mode: agent
---
data/marketing-campaign.csv를 읽고 이번 주 성과 보고서를 작성해주세요.
채널별 CTR, 전환수, 전주 대비 증감, 다음 주 제안 액션을 포함해주세요.
```

Chat에서 `/weekly-report` 입력 → 보고서 초안 완성

샘플 파일: `.github/prompts/weekly-report.prompt.md`, `meeting-notes.prompt.md`, `grill-me.prompt.md`

---

**③ Ask / Plan / Agent 모드의 차이**

| 모드 | 역할 | 언제 쓰나 |
|---|---|---|
| Ask | 답변만, 파일 수정 없음 | 궁금한 것 물어볼 때 |
| Plan | 실행 전 계획을 먼저 보여줌 | 뭘 할지 확인하고 싶을 때 |
| Agent | 파일 읽기·쓰기·실행까지 자율 수행 | 실제 작업을 맡길 때 |

**Agent 모드 권한 설정 (Permission)**

| 설정 | 동작 |
|---|---|
| Default | 파일 수정·실행 전 매번 사용자 확인 |
| Bypass | 확인 없이 자동 진행 |
| Autopilot | 완전 자율 — 사람 개입 없이 끝까지 실행 |

---

**④ 이렇게도 쓸 수 있다 — 적대적 프롬프트**

단순 요약·번역 말고, AI에게 날카로운 역할을 맡기면 훨씬 강력합니다.

| 이름 | 사용법 | 효과 |
|---|---|---|
| Grill Me | "이 기획안 들고 있을게, 심문해봐" | 투자자처럼 약점을 파고들어 논리 검증 |
| Pre-Mortem | "6개월 후 이 프로젝트가 완전히 망했다고 가정하자. 왜 실패했을까?" | 낙관론에서 벗어나 실패 원인 역산 |
| Inversion | "이 캠페인을 확실히 망하게 하려면 어떻게 해야 할까?" | 실패 조건 나열 → 뒤집어서 리스크 체크리스트 |
| Red Team | "경쟁사 마케터 입장에서 우리 신제품 약점 분석해줘" | 역할이 명확할수록 날카로워짐 |

샘플 파일: `.github/prompts/grill-me.prompt.md`

---

**⑤ Instructions / Prompts / Skills — 뭐가 다를까?**

| | Instructions | Prompts | Skills |
|---|---|---|---|
| 파일 위치 | `copilot-instructions.md` | `prompts/*.prompt.md` | `skills/*.skill.md` |
| 언제 작동 | 항상 자동 적용 | 내가 부를 때 (`/slash`) | 내가 장착할 때 |
| 역할 | "넌 이런 팀에서 일해" | "이 작업 지금 해줘" | "이 전문성을 갖춰" |
| 비유 | 팀 온보딩 문서 | 업무 요청 양식 | 외부 전문가 소환 |

---

#### 3단계 | Skills 써보기 (20분)

`skill.md`는 AI에게 특정 전문성을 부여하는 파일입니다. Copilot뿐 아니라 Claude Code, Cursor, Codex 등 어떤 AI 에디터에서도 범용으로 쓸 수 있습니다.

**Agent Browser** (VS Code 내장)
- Agent 모드 → Tools → Browser 활성화
- AI가 브라우저를 직접 열고 조작 — 페이지 읽기, 클릭, 정보 수집
- 예: "이 경쟁사 사이트 열어서 가격 정보 가져와줘"

**Frontend Design Skill** ([awesome-copilot](https://github.com/github/awesome-copilot) 다운로드)
- AI가 코딩 전에 디자인 원칙을 먼저 읽고 시작 → 뻔한 레이아웃 탈출
- 예: `data/marketing-campaign.csv` 넣고 "HTML 보고서로 예쁘게 만들어줘" → 전/후 차이가 눈에 보임

**Documentation Writer Skill** ([awesome-copilot](https://github.com/github/awesome-copilot) 다운로드)
- 업무 메모를 Diátaxis 프레임워크 기반 구조화 문서로 자동 정리
- 예: "우리 팀 주간 보고 프로세스를 온보딩 문서로 만들어줘"

---

#### 4단계 | MCP 연결 — AI의 눈이 바깥으로 열린다 (20분)

MCP(Model Context Protocol)를 연결하면 AI가 외부 서비스와 실시간으로 연결됩니다.

**다이소 MCP** (API 키 불필요 — 워밍업)

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
- "오늘 CGV 홍대 상영시간 알려줘"

---

**DART MCP** (금융감독원 공시 데이터 — 메인 데모)

GitHub: [keonho-kim/OpenDart-mcp](https://github.com/keonho-kim/OpenDart-mcp)

데모:
```
"삼성전자랑 카카오 최근 3개년 매출 가져와줘"
→ 데이터 수신 후:
"두 회사 실적을 비교 표로 정리하고 마케팅팀 보고서용 요약 한 단락 써줘"
```

데이터 수집 + 분석 + 문서화까지 한 번에 — 이게 핵심 임팩트입니다.

> 한국 개발자들이 만든 MCP 모음 → [awesome-mcp-korea](https://github.com/darjeeling/awesome-mcp-korea)

---

#### 5단계 | 커뮤니티엔 이미 이런 것도 있다 (10분)

VS Code 확장 `TimHeuer.awesome-copilot` 설치 → 208개+ skills 브라우징 & 1클릭 다운로드

오늘 직접 만든 것과 같은 구조인데, 커뮤니티가 이미 만들어둔 것들:

| 이름 | 설명 |
|---|---|
| Meeting Minutes | 회의록·녹취를 넣으면 결정사항·액션아이템 포함 회의록으로 자동 정리 |
| Email Drafter | 내 말투·톤을 학습해서 이메일 초안 생성 |
| Daily Prep | Outlook 캘린더 읽어서 일정 분류 + 집중 시간 탐지 + 미팅 사전 준비 |
| LinkedIn Post Formatter | 아이디어를 LinkedIn 최적화 포맷으로 변환 (Unicode 볼드 포함) |

> [github/awesome-copilot](https://github.com/github/awesome-copilot)

---

## Getting Started

```bash
git clone https://github.com/binnu-dev/vscode-ai-workshop-for-non-devs.git
cd vscode-ai-workshop-for-non-devs
```

VS Code로 폴더를 열면 `.github/` 안에 샘플 Instructions와 Prompts가 준비되어 있습니다.
`data/` 폴더의 샘플 CSV로 바로 실습을 시작할 수 있습니다.

## Repository Structure

```
.
├── .github/
│   ├── copilot-instructions.md       # 샘플 팀 Instructions (미소테크 마케팅팀)
│   └── prompts/
│       ├── weekly-report.prompt.md   # /weekly-report → 주간 보고서 초안
│       ├── meeting-notes.prompt.md   # /meeting-notes → 회의록 정리
│       └── grill-me.prompt.md        # /grill-me → 기획안 심문
│
├── data/
│   └── marketing-campaign.csv        # 채널별 캠페인 성과 샘플 데이터
│
├── workshop-slides.html              # 발표용 슬라이드 (브라우저에서 바로 실행)
└── (AgentCon + 사내 발표 자료 PDF)
```

## Materials

- `agentcon-2026-seoul-slides.html` / `.pdf` — AgentCon Seoul 발표 슬라이드
- `[260408] AI 팀 비서, 우리 팀에도 만들 수 있다 (1).pdf` — 2026-04-08 사내 발표 자료
