"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Cookie, ShieldCheck, ShieldOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_STORAGE_KEY = "rankpredictor-cookie-consent";
const CONSENT_COOKIE = "rankpredictor_cookie_consent";

type ConsentChoice = "accepted" | "rejected";

type CookieConsentProps = {
  adsenseClientId?: string;
};

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  const stored =
    window.localStorage.getItem(CONSENT_STORAGE_KEY) ||
    document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
      ?.split("=")[1];

  if (stored === "accepted" || stored === "rejected") {
    return stored;
  }

  return null;
}

function applyConsent(choice: ConsentChoice) {
  const granted = choice === "accepted";

  window.gtag?.("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });

  window.gtag?.("set", "ads_data_redaction", !granted);
}

export default function CookieConsent({
  adsenseClientId,
}: CookieConsentProps) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    const stored = readStoredConsent();

    if (stored) {
      setChoice(stored);
      applyConsent(stored);
      return;
    }

    setOpen(true);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);
    setCookie(CONSENT_COOKIE, nextChoice, 60 * 60 * 24 * 365);
    setChoice(nextChoice);
    applyConsent(nextChoice);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={(nextOpen) => nextOpen && setOpen(true)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-xl border-slate-500 bg-slate-950 text-white shadow-[12px_12px_0px_#64748b]"
        >
          <DialogHeader className="text-left">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center border-2 border-slate-600 bg-cyan-300 text-slate-950">
                <Cookie className="size-5" aria-hidden="true" />
              </div>
              <div>
                <DialogTitle className="text-2xl uppercase tracking-wider">
                  Cookie Preferences
                </DialogTitle>
                <DialogDescription className="text-slate-300">
                  Choose whether RankPredictor may use optional analytics and
                  advertising cookies.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-3 text-sm font-bold leading-relaxed text-slate-200">
            <p>
              Essential storage keeps the site working. Optional cookies help
              us measure traffic and support the project with ads.
            </p>
            <p>
              You can change this choice later from the cookie preferences
              control.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                onClick={() => saveChoice("accepted")}
              >
                <ShieldCheck className="size-4" aria-hidden="true" />
                Accept All
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => saveChoice("rejected")}
              >
                <ShieldOff className="size-4" aria-hidden="true" />
                Reject Optional
              </Button>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Read the{" "}
              <Link href="/privacy-policy" className="underline">
                privacy policy
              </Link>{" "}
              for the full details.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {choice === "accepted" && adsenseClientId ? (
        <Script
          id="google-adsense-consented"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      ) : null}

      <footer className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 pb-10 pt-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:text-left">
        <a href="/privacy-policy" className="underline decoration-slate-500 hover:text-cyan-200">
          Privacy Policy
        </a>
        <button
          type="button"
          className="border-2 border-slate-600 bg-slate-950/95 px-3 py-2 text-xs font-bold uppercase text-white shadow-[4px_4px_0px_#64748b] transition-all hover:bg-cyan-300 hover:text-slate-950"
          onClick={() => setOpen(true)}
        >
          Cookie Settings
        </button>
      </footer>
    </>
  );
}
