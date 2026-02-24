"use client";

import { useEffect, useState } from "react";
import HowItWorksDropdown from "../../components/HowItWorksDropdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "./Form";

const DISCLAIMER_COOKIE = "met2026-disclaimer-seen";
const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7;

export default function MET2026Client() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const hasSeenDisclaimer = () =>
    document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith(`${DISCLAIMER_COOKIE}=true`));

  const setDisclaimerCookie = () => {
    document.cookie = `${DISCLAIMER_COOKIE}=true; Max-Age=${ONE_WEEK_SECONDS}; Path=/; SameSite=Lax`;
  };

  useEffect(() => {
    if (!hasSeenDisclaimer()) {
      setIsDisclaimerOpen(true);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setDisclaimerCookie();
    setIsDisclaimerOpen(false);
  };

  return (
    <>
      <Dialog
        open={isDisclaimerOpen}
        onOpenChange={(open) => {
          if (!open) {
            setDisclaimerCookie();
          }
          setIsDisclaimerOpen(open);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="border-4 border-slate-600 bg-slate-950 p-6 text-white shadow-[12px_12px_0px_#64748b]"
        >
          <DialogHeader className="mb-4 border-b-4 border-slate-600 pb-4">
            <DialogTitle className="text-2xl font-bold uppercase tracking-wider text-yellow-400">
              Prediction Disclaimer
            </DialogTitle>
            <DialogDescription className="space-y-4 text-lg font-bold text-slate-200">
              <span className="block">
                This tool provides an estimated rank based on previous data and
                trends. It is only a prediction and cannot be 100% accurate.
              </span>
              <span className="block">
                Final outcomes can differ due to changes in exam difficulty,
                normalization, cutoffs, and counseling decisions.
              </span>
              <span className="mt-4 block text-xs font-bold uppercase text-white">
                By continuing, you acknowledge this is informational only, and I
                am not liable for decisions made based on this prediction.
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button
              onClick={handleDisclaimerClose}
              className="w-full border-2 border-emerald-500 bg-emerald-400 text-lg font-bold uppercase text-slate-950 shadow-[4px_4px_0px_#059669] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-emerald-300 hover:text-slate-950 hover:shadow-none sm:w-auto"
            >
              I Understand, Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-slate-950/90 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <HowItWorksDropdown />
          <Form sendBoards={() => {}} sendMET={() => {}} />
        </div>
      </div>
    </>
  );
}
