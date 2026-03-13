import { NextResponse } from "next/server";
import { incrementCounter } from "@/lib/countApi";

const JEE_TARGET_URL = "https://jeepredictor.in/percentile-predictor";

export async function GET() {
  await incrementCounter("jee_predictor_clicks");
  return NextResponse.redirect(JEE_TARGET_URL);
}
