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

참가자에게 **가상 회사 + 팀 역할**을 배정한다. 본인 실제 업무가 아니라 주어진 페르소나로 실습하기 때문에 부담이 없고, 서로 결과를 비교하는 재미가 있다.

| 팀 | 핵심 업무 | 샘플 데이터 |
|---|---|---|
| 마케팅팀 | 캠페인 성과 보고 | 월별 채널별 클릭/전환율 CSV |
| 영업팀 | 고객 미팅 메모, 파이프라인 | 딜 현황 CSV |
| HR팀 | 채용 진행, 온보딩 | 채용 깔때기 데이터 |
| 기획팀 | 스프린트 정리, 기능 기획 | 태스크 현황 CSV |

#### 2단계: 팀 AI 비서 기본 세팅

- `copilot-instructions.md` 작성: 팀 소개, 자주 쓰는 용어, 원하는 말투
- `.github/prompts/` 작성: 반복 업무용 프롬프트 파일 만들고 슬래시 커맨드로 실행
- Agent 모드로 샘플 데이터 분석 요청해보기

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

#### 4단계: 마무리 — 커뮤니티에는 이미 이런 것도 있다

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

## Materials

- `agentcon-2026-seoul-slides.html`: AgentCon Seoul 발표 슬라이드 HTML
- `agentcon-2026-seoul-slides.pdf`: AgentCon Seoul 발표 슬라이드 PDF
- `[260408] AI 팀 비서, 우리 팀에도 만들 수 있다 (1).pdf`: 2026-04-08 내부 발표 자료

## Workshop Message

비개발자가 Copilot을 잘 쓰는 방법은 코드를 배우는 것이 아니라, 내 업무의 맥락과 반복 규칙을 파일로 잘 남기는 것입니다.
