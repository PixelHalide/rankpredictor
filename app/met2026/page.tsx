"use client";
import HowItWorksDropdown from "../../components/HowItWorksDropdown";
import Form from "./Form";

const MET2026 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 shadow-[0_20px_80px_rgba(2,6,23,0.6)] sm:p-6">
          <HowItWorksDropdown />
          <Form sendBoards={() => {}} sendMET={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MET2026;
