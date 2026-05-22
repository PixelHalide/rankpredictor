import { NextResponse } from "next/server";
import { predictMETRank } from "@/utils/metPrediction";

const AI_USAGE =
  "Use /met2026?met=MARKS&boards=PERCENTAGE where met is MET marks out of 240 and boards is board percentage.";

function parseNumericParam(value: string | null) {
  if (value === null || value.trim() === "") {
    return null;
  }

  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function textResponse(body: string, status = 200) {
  return new NextResponse(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const metMarks = parseNumericParam(searchParams.get("met"));
  const boardPercentage = parseNumericParam(searchParams.get("boards"));

  if (metMarks === null || boardPercentage === null) {
    return textResponse(`Invalid request.\n${AI_USAGE}\n`, 400);
  }

  if (metMarks < 0 || metMarks > 240) {
    return textResponse("Invalid MET marks. met must be between 0 and 240.\n", 400);
  }

  if (boardPercentage < 0 || boardPercentage > 100) {
    return textResponse(
      "Invalid board percentage. boards must be between 0 and 100.\n",
      400,
    );
  }

  try {
    const prediction = predictMETRank(boardPercentage, metMarks);
    const predictedRank = Math.round(prediction.predictedRank * 1.25);
    const rankDisplay =
      predictedRank < 100
        ? "<100"
        : predictedRank > 50000
          ? ">50000"
          : String(predictedRank);

    const lines = [
      "MET 2026 Rank Prediction",
      `MET marks: ${metMarks}`,
      `Board percentage: ${boardPercentage}`,
      `Predicted rank: ${rankDisplay}`,
      "",
      "Available branches based on MET 2025 Round 4 cutoffs:",
    ];

    const collegesWithBranches = prediction.attainableBranches.filter(
      (college) => college.branches.length > 0,
    );

    if (collegesWithBranches.length === 0) {
      lines.push("No branches available at this predicted rank.");
    } else {
      for (const college of collegesWithBranches) {
        lines.push("", `${college.college}:`);
        for (const branch of college.branches) {
          lines.push(`- ${branch.name} (cutoff rank ${branch.cutoff})`);
        }
      }
    }

    lines.push(
      "",
      "Notes:",
      "- This is an estimate based on previous data and trends.",
      "- CPS, Biomedical, VLSI, and ENI will be merged into EE for 2026.",
      "- 20% of seats will be allocated for JEE Main candidates from 2026 onwards.",
    );

    return textResponse(`${lines.join("\n")}\n`);
  } catch (error) {
    return textResponse(
      `${error instanceof Error ? error.message : "Prediction failed."}\n`,
      400,
    );
  }
}
