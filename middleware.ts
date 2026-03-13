import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";
import { incrementCounter } from "@/lib/countApi";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (
    request.nextUrl.pathname === "/" &&
    request.nextUrl.searchParams.get("ref") === "jeepredictor"
  ) {
    event.waitUntil(incrementCounter("jee_ref_inbound"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
