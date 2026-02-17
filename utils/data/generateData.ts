import * as fs from "fs";

/* this is just to better handle the dataset files for ease of better exporting.
 just change the content inside readFileSync each year for new csv-file for better handling. */

const csvContent = fs.readFileSync("./met-responses-2025.csv", "utf-8");
const rows = csvContent.trim().split("\n").slice(1);
const parsedData: { score: number; rank: number }[] = [];

for (const row of rows) {
  const [scoreStr, rankStr] = row.split(",");

  if (scoreStr && rankStr) {
    parsedData.push({
      score: parseFloat(scoreStr.trim()),
      rank: parseInt(rankStr.trim(), 10),
    });
  }
}

parsedData.sort((a, b) => a.score - b.score);

const xValues = parsedData.map((d) => d.score);
const yValues = parsedData.map((d) => d.rank);

const outputTS = `// MET Data Generated from CSV
export const MET_X_VALUES = [
  ${xValues.join(", ")}
];

export const MET_Y_VALUES = [
  ${yValues.join(", ")}
];
`;

fs.writeFileSync("./generated-met-data.ts", outputTS);
