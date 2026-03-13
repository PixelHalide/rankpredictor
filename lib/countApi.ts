const COUNTAPI_BASE_URL = "https://api.countapi.xyz";
const COUNTAPI_NAMESPACE = "rankpredictor-in";

export async function incrementCounter(key: string): Promise<number | null> {
  try {
    const response = await fetch(
      `${COUNTAPI_BASE_URL}/hit/${COUNTAPI_NAMESPACE}/${encodeURIComponent(key)}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}
