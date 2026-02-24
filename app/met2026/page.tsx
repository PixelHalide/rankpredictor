import MET2026Client from "./MET2026Client";
import HowItWorksDropdown from "../../components/HowItWorksDropdown";

export default function MET2026Page() {
  return (
    <div className="min-h-screen bg-slate-950/90 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <HowItWorksDropdown />
        <MET2026Client />
      </div>
    </div>
  );
}
