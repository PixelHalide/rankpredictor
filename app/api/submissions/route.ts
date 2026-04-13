export const dynamic = "force-dynamic";

const runtimeEnv = globalThis as typeof globalThis & {
  process?: {
    env?: Record<string, string | undefined>;
  };
};

const runtimeProcessEnv = runtimeEnv.process?.env ?? {};

const backendBaseUrl =
  runtimeProcessEnv.BACKEND_API_URL ??
  runtimeProcessEnv.BACKEND_URL ??
  "http://localhost:8000";

export async function POST(req: Request) {
  try {
    const backendHeaders = new Headers();
    const contentType = req.headers.get("content-type");

    if (contentType) {
      backendHeaders.set("content-type", contentType);
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    if (forwardedFor) {
      backendHeaders.set("x-forwarded-for", forwardedFor);
    }

    const realIp = req.headers.get("x-real-ip");
    if (realIp) {
      backendHeaders.set("x-real-ip", realIp);
    }

    const userAgent = req.headers.get("user-agent");
    if (userAgent) {
      backendHeaders.set("user-agent", userAgent);
    }

    const referer = req.headers.get("referer");
    if (referer) {
      backendHeaders.set("referer", referer);
    }

    const host = req.headers.get("host");
    if (host) {
      backendHeaders.set("x-original-host", host);
    }

    const backendResponse = await fetch(new URL("/submissions", backendBaseUrl), {
      method: "POST",
      headers: backendHeaders,
      body: await req.text(),
    });

    return new Response(backendResponse.body, {
      status: backendResponse.status,
      headers: backendResponse.headers,
    });
  } catch (error) {
    console.error("Submission proxy error:", error);
    return Response.json(
      { error: "Failed to forward submission" },
      { status: 502 }
    );
  }
}
