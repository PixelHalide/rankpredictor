"use client";
import { useEffect, useState } from "react";
import HowItWorksDropdown from "../../components/HowItWorksDropdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "./Form";

const MET2026 = () => {
  const DISCLAIMER_COOKIE = "met2026-disclaimer-seen";
  const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7;
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
          className="border-slate-700 bg-slate-900 text-slate-100 data-[state=closed]:slide-out-to-bottom-8 data-[state=open]:slide-in-from-bottom-8 sm:max-w-xl"
        >
          <DialogHeader>
            <DialogTitle className="text-xl text-amber-300">
              Prediction Disclaimer
            </DialogTitle>
            <DialogDescription className="space-y-3 text-sm leading-relaxed text-slate-300">
              <span className="block">
                This tool provides an estimated rank based on previous data and
                trends. It is only a prediction and cannot be 100% accurate.
              </span>
              <span className="block">
                Final outcomes can differ due to changes in exam difficulty,
                normalization, cutoffs, and counseling decisions.
              </span>
              <span className="block font-medium text-slate-200">
                By continuing, you acknowledge this is informational only, and
                I am not liable for decisions made based on this prediction.
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={handleDisclaimerClose}
              className="w-full bg-emerald-600 text-white hover:bg-emerald-500 sm:w-auto"
            >
              I Understand, Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen overflow-x-hidden bg-[#06070a] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <Card className="rounded-3xl border-slate-700/60 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 shadow-[0_20px_80px_rgba(2,6,23,0.6)]">
            <CardContent className="p-4 sm:p-6">
              <HowItWorksDropdown />
              <Form sendBoards={() => {}} sendMET={() => {}} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MET2026;
