"use client";
import { useState } from "react";

const GradingInfoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-4 border-slate-600 bg-slate-950 px-6 py-4 text-left font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-400 hover:text-slate-950 shadow-[4px_4px_0px_#64748b] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-between"
      >
        <span>How does grading work?</span>
        <span
          className={`transition-transform duration-300 text-sm ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="border-4 border-t-0 border-slate-600 bg-slate-950 p-6 text-white space-y-6">
          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-3">
              <span className="bg-emerald-400 text-slate-950 px-2 py-1">
                Grade Point Scale
              </span>
            </h3>
            <ul className="space-y-1 font-bold text-sm text-slate-200 border-2 border-slate-600 bg-slate-900/60 p-4">
              <li>A+: 10 points</li>
              <li>A: 9 points</li>
              <li>B: 8 points</li>
              <li>C: 7 points</li>
              <li>D: 6 points</li>
              <li>E: 5 points</li>
              <li>F: 0 points</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-3">
              <span className="bg-rose-400 text-slate-950 px-2 py-1">
                GPA Calculation
              </span>
            </h3>
            <p className="text-slate-200 font-bold leading-relaxed mb-3">
              Your Grade Point Average (GPA) is calculated using the following
              formula:
            </p>
            <div className="border-2 border-emerald-500 bg-slate-900 p-4 text-center font-mono font-bold text-lg">
              GPA = Σ(Grade Points × Credits) / Σ(Credits)
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-3">
              <span className="bg-yellow-300 text-slate-950 px-2 py-1">
                Grade Determination
              </span>
            </h3>
            <p className="text-slate-200 font-bold leading-relaxed mb-3">
              Professors assign grades based on class average and standard
              deviation.
            </p>
            <div className="space-y-3 text-sm font-bold text-slate-200">
              <div className="border-2 border-yellow-300/70 bg-slate-900/50 p-3">
                <p className="text-white mb-1">
                  Maximum Cutoffs (when average/std dev is high):
                </p>
                <p>
                  A+: 90 &nbsp; A: 82 &nbsp; B: 74 &nbsp; C: 66 &nbsp; D: 58
                  &nbsp; E: 50
                </p>
              </div>
              <div className="border-2 border-yellow-300/70 bg-slate-900/50 p-3">
                <p className="text-white mb-1">
                  Minimum Cutoffs (when scores are low):
                </p>
                <p>
                  A+: 75 &nbsp; A: 67 &nbsp; B: 59 &nbsp; C: 51 &nbsp; D: 43
                  &nbsp; E: 35
                </p>
              </div>
              <div className="border-2 border-yellow-300/70 bg-slate-900/50 p-3">
                <p className="text-white mb-1">
                  Lab Subjects (always absolute):
                </p>
                <p>
                  A+: 90 &nbsp; A: 80 &nbsp; B: 70 &nbsp; C: 60 &nbsp; D: 50
                  &nbsp; E: 40
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-3">
              <span className="bg-emerald-300 text-slate-950 px-2 py-1">
                Assessment Breakdown
              </span>
            </h3>
            <ul className="space-y-1 font-bold text-sm text-slate-200 border-2 border-emerald-300 bg-slate-900/60 p-4">
              <li>End-semester exam: 50 marks</li>
              <li>Mid-semester exam: 30 marks</li>
              <li>Internals: 20 marks</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-3">
              <span className="bg-emerald-400 text-slate-950 px-2 py-1">
                Grade Cutoff Calculator
              </span>
            </h3>
            <p className="text-slate-200 font-bold leading-relaxed">
              Use this tool to see grade cutoffs based on average marks and
              standard deviation:{" "}
              <a
                href="https://www.desmos.com/calculator/g6mijvx4ct"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:bg-emerald-400 hover:text-slate-950 px-1 transition-all"
              >
                Grade Calculator
              </a>{" "}
              (credit: u/Super382946)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradingInfoDropdown;
