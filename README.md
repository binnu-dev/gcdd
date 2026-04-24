# VS Code AI Workshop for Non-Developers

비개발자를 위한 VS Code + GitHub Copilot 핸즈온 자료입니다.

목표는 코딩을 배우는 것이 아니라, VS Code를 AI 작업실로 사용해 내 업무 폴더를 팀 전용 AI 비서처럼 구성하는 것입니다.

## Core Idea

비개발자도 VS Code + GitHub Copilot을 활용해 **우리 팀만의 AI 비서**를 직접 만들 수 있다.
핵심은 코드가 아니라 **파일**이다. 팀의 맥락과 반복 업무를 파일로 잘 정리하면, AI는 그 파일을 보고 항상 우리 팀 일을 알고 있는 것처럼 동작한다.

## Suggested Session Flow

2시간 세션 기준으로 구성한다.

**앞 30분 — 발표: 우리가 해본 이야기**
- AgentCon Seoul 발표 내용을 기반으로, 실제로 팀 AI 비서를 만들어본 경험 소개
- 핵심 구조 (`copilot-instructions.md`, `prompts/`, `skills/`) 개념 설명
- Power Automate 등 외부 연동은 개념 소개에 그침 (실습 없음)

**뒤 90분 — 핸즈온: 직접 만들어보기**
- 참가자에게 **가상 회사 + 팀 페르소나** 배정 (마케팅, 영업, HR, 기획 등)
- 팀별 샘플 데이터 포함 — 실제 데이터 분석 스킬까지 체험 가능
- GitHub Copilot VS Code 확장 기능 소개 및 활용 실습
- 최근 Copilot 주요 기능을 하나씩 직접 써보는 방식으로 진행
  - 팀 지시사항 파일 (`copilot-instructions.md`) 작성
  - 반복 업무용 프롬프트 파일 (`prompts/`) 작성 및 슬래시 커맨드 실행
  - Agent 모드로 데이터 파일 분석 요청해보기
- 개발자 중심이 아닌 **일반 사무직 업무 시나리오** 기반으로 설계

## Materials

- `agentcon-2026-seoul-slides.html`: AgentCon Seoul 발표 슬라이드 HTML
- `agentcon-2026-seoul-slides.pdf`: AgentCon Seoul 발표 슬라이드 PDF
- `[260408] AI 팀 비서, 우리 팀에도 만들 수 있다 (1).pdf`: 2026-04-08 내부 발표 자료

## Workshop Message

비개발자가 Copilot을 잘 쓰는 방법은 코드를 배우는 것이 아니라, 내 업무의 맥락과 반복 규칙을 파일로 잘 남기는 것입니다.
