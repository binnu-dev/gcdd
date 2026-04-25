---
name: monthly-report-template
---

# Monthly Report Template Skill

이 skill은 핸즈온에서 `prompt`와 `skill`의 차이를 보여주기 위한 예제입니다.

중요:
- 이 파일은 일부러 frontmatter에 `description`이 빠져 있습니다.
- 실습에서는 이 상태로 한번 써보고, 왜 자동 발동이 안 되는지 확인합니다.
- 그 다음 `description`을 추가해서 다시 시도합니다.

추천 description 예시:

```md
description: Use when asked to create a monthly marketing report in HTML from bank direct marketing campaign data using the provided brief, template, and helper script.
```

## 이 skill이 보여주려는 것

`prompt`로도 "이런 스타일로 만들어줘"라고 요청할 수는 있습니다.
하지만 `skill`은 그보다 더 강하게 결과를 고정할 수 있습니다.

예를 들면:
- 어떤 섹션 순서를 반드시 지키게 하기
- 어떤 문장 톤을 유지하게 하기
- 어떤 CSS 스타일과 HTML 구조를 그대로 쓰게 하기
- 데이터 중 어떤 값만 채워 넣게 하기
- 보고서에 어떤 데이터 분석을 반드시 포함할지 미리 적어두기

## 사용 시 기대 동작

월간 보고서 HTML을 만들라는 요청을 받으면 다음을 따릅니다.

1. `references/monthly-report-brief.md` 파일을 먼저 읽습니다.
2. `references/monthly-report-template.html` 파일을 읽습니다.
3. 필요하면 `scripts/render-monthly-report.js` 를 참고해 어떤 값을 채워 넣을지 확인합니다.
4. 템플릿의 레이아웃과 CSS class 구조를 유지합니다.
5. 아래 값만 데이터에 맞게 채웁니다.
   - 보고 월
   - 핵심 수치 3개
   - 고객 세그먼트별 요약
   - 인사이트
   - 다음 달 액션 3개
6. 인사이트에는 반드시 데이터 분석 내용을 포함합니다.
7. 필요하지 않은 장식은 추가하지 않습니다.
8. 결과는 단일 HTML 파일로 반환합니다.

## 출력 규칙

- 한국어로 작성합니다.
- 제목은 한 줄로 짧게 씁니다.
- 수치는 구체적으로 적습니다.
- 핵심 인사이트는 1~2문장으로 압축합니다.
- 액션은 실행 가능한 문장으로 씁니다.
- 데이터 분석 없는 요약문으로 끝내지 않습니다.

## 비교 포인트

핸즈온에서는 아래 순서로 비교합니다.

1. `/monthly-report` prompt만 사용해 결과를 만듭니다.
2. 이 skill을 내려받은 상태에서 `description` 없이 시도합니다.
3. `description`을 추가한 뒤 다시 HTML 보고서를 만듭니다.
4. prompt 결과와 skill 결과의 일관성 차이를 비교합니다.
5. 특히 "데이터 분석이 포함되는가", "스타일과 구조가 안정적으로 유지되는가"를 봅니다.
