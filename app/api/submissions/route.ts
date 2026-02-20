import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { boardPercentage, metMarks } = await req.json();

    if (boardPercentage === undefined || metMarks === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "rankpredictor");
    const collection = db.collection("submissions");

    // Client's IP and metadata
    const heads = await headers();
    const forwarded = heads.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : heads.get("x-real-ip") || "unknown";
    const userAgent = heads.get("user-agent") || "unknown";

    const submission = {
      boardPercentage,
      metMarks,
      timestamp: new Date(),
      ip,
      userAgent,
      metadata: {
        method: heads.get("host"),
        referer: heads.get("referer"),
      }
    };

    const result = await collection.insertOne(submission);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Failed to store submission" },
      { status: 500 }
    );
  }
}
