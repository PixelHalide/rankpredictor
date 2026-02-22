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
          className="border-4 border-white bg-black text-white p-6 shadow-[12px_12px_0px_white]"
        >
          <DialogHeader className="border-b-4 border-white pb-4 mb-4">
            <DialogTitle className="text-2xl font-bold uppercase tracking-wider">
              Prediction Disclaimer
            </DialogTitle>
            <DialogDescription className="space-y-4 font-bold text-sm text-gray-300">
              <span className="block">
                This tool provides an estimated rank based on previous data and
                trends. It is only a prediction and cannot be 100% accurate.
              </span>
              <span className="block">
                Final outcomes can differ due to changes in exam difficulty,
                normalization, cutoffs, and counseling decisions.
              </span>
              <span className="block font-bold text-white uppercase text-xs mt-4">
                By continuing, you acknowledge this is informational only, and
                I am not liable for decisions made based on this prediction.
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button
              onClick={handleDisclaimerClose}
              className="w-full sm:w-auto uppercase font-bold text-lg border-2 border-white hover:bg-white hover:text-black shadow-[4px_4px_0px_white] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              I Understand, Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-black px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <HowItWorksDropdown />
          <Form sendBoards={() => {}} sendMET={() => {}} />

        </div>
      </div>
    </>
  );
};

export default MET2026;
