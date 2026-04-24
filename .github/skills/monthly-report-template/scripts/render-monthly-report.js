import fs from "node:fs";
import path from "node:path";

const templatePath = path.resolve("skills/monthly-report-template/references/monthly-report-template.html");
const outputPath = path.resolve("skills/monthly-report-template/output/monthly-report.html");

function fillTemplate(template, values) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    return acc.replaceAll(`{{${key}}}`, String(value ?? ""));
  }, template);
}

const template = fs.readFileSync(templatePath, "utf8");

const sampleValues = {
  month: "2026-04",
  summary: "이메일과 Instagram이 전체 성과를 견인했고, 블로그는 효율 개선이 필요한 상태입니다.",
  kpi_1_label: "최고 CTR 채널",
  kpi_1_value: "이메일 11.0%",
  kpi_2_label: "최고 전환수 채널",
  kpi_2_value: "Instagram 248",
  kpi_3_label: "주요 해석",
  kpi_3_value: "이메일 효율 우세",
  channel_1: "Instagram",
  channel_1_summary: "전환수 248로 규모가 가장 컸고, CTR도 3.9%로 상승했습니다.",
  channel_2: "LinkedIn",
  channel_2_summary: "CTR 3.5%, 전환수 91로 완만한 개선 흐름을 보였습니다.",
  channel_3: "블로그",
  channel_3_summary: "CTR은 3.6%까지 올랐지만 전환율이 낮아 효율 개선이 필요합니다.",
  channel_4: "이메일",
  channel_4_summary: "CTR 11.0%, 전환수 217로 가장 효율적인 채널이었습니다.",
  insight: "이메일은 적은 비용으로 높은 반응과 전환을 만들고 있어 유지·확대 가치가 큽니다. 반면 블로그는 유입 대비 전환 설계 점검이 필요합니다.",
  action_1: "이메일 캠페인 타이틀과 세그먼트를 확장해 고효율 포맷을 재사용합니다.",
  action_2: "Instagram 전환 기여 소재를 추려 다음 달 광고 실험군으로 재편합니다.",
  action_3: "블로그 유입 이후 전환 경로를 점검하고 CTA 구성을 다시 설계합니다."
};

const html = fillTemplate(template, sampleValues);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, "utf8");

console.log(`Wrote ${outputPath}`);
