const fs = require("node:fs");
const path = require("node:path");

const skillDir = path.resolve(__dirname, "..");
const templatePath = path.join(skillDir, "references", "monthly-report-template.html");
const outputPath = path.join(skillDir, "output", "monthly-report.html");

function fillTemplate(template, values) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    return acc.replaceAll(`{{${key}}}`, String(value ?? ""));
  }, template);
}

const template = fs.readFileSync(templatePath, "utf8");

const sampleValues = {
  month: "Bank Marketing Sample",
  summary: "정기예금 가입 여부를 기준으로 고객 세그먼트별 반응 차이를 분석합니다.",
  kpi_1_label: "분석 고객 수",
  kpi_1_value: "4,521명",
  kpi_2_label: "핵심 전환 지표",
  kpi_2_value: "y = yes",
  kpi_3_label: "주요 분석 축",
  kpi_3_value: "직업군·연락 방식",
  channel_1: "직업군",
  channel_1_summary: "retired, student, management 등 직업군별 가입률 차이를 확인합니다.",
  channel_2: "연락 방식",
  channel_2_summary: "cellular, telephone, unknown 연락 방식별 반응 차이를 비교합니다.",
  channel_3: "대출 여부",
  channel_3_summary: "housing, loan 여부에 따라 가입 전환이 어떻게 달라지는지 분석합니다.",
  channel_4: "이전 캠페인 결과",
  channel_4_summary: "poutcome이 success였던 고객의 재접촉 가치가 있는지 확인합니다.",
  insight: "가입률은 단순 접촉 수보다 고객 세그먼트와 이전 접촉 이력에 더 민감할 가능성이 큽니다. 전환 가능성이 높은 세그먼트부터 우선순위를 정하는 것이 효율적입니다.",
  action_1: "가입률이 높은 직업군과 연락 방식을 조합해 다음 캠페인 우선 타깃을 정의합니다.",
  action_2: "이전 캠페인 성공 이력이 있는 고객을 별도 리마케팅 그룹으로 분리합니다.",
  action_3: "통화 시간이 긴 고객군의 상담 스크립트를 분석해 고전환 메시지를 재사용합니다."
};

const html = fillTemplate(template, sampleValues);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, "utf8");

console.log(`Wrote ${outputPath}`);
