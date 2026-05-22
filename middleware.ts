import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";
import { incrementCounter } from "@/lib/countApi";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (
    request.nextUrl.pathname === "/met2026" &&
    request.nextUrl.searchParams.has("met") &&
    request.nextUrl.searchParams.has("boards")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/met2026";
    return NextResponse.rewrite(url);
  }

  if (
    request.nextUrl.pathname === "/" &&
    request.nextUrl.searchParams.get("ref") === "jeepredictor"
  ) {
    event.waitUntil(incrementCounter("jee_ref_inbound"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/met2026"],
};
