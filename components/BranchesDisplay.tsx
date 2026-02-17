import { useState } from "react";

interface Branch {
  name: string;
  cutoff: number;
}

interface AttainableBranch {
  college: string;
  branches: Branch[];
}

interface BranchesDisplayProps {
  attainableBranches: AttainableBranch[];
}

const BranchesDisplay = ({ attainableBranches }: BranchesDisplayProps) => {
  const [hiddenColleges, setHiddenColleges] = useState<Set<string>>(new Set());

  const toggleCollege = (college: string) => {
    const newHiddenColleges = new Set(hiddenColleges);
    if (newHiddenColleges.has(college)) {
      newHiddenColleges.delete(college);
    } else {
      newHiddenColleges.add(college);
    }
    setHiddenColleges(newHiddenColleges);
  };

  if (attainableBranches.length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-red-500/40 bg-red-950/70 p-4 text-center text-red-100">
        <p className="text-sm sm:text-base">
          No branches available at your predicted rank. Better luck next time!
        </p>
      </div>
    );
  }

  return (
    <section className="mt-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
          Attainable Branches
        </h2>
      </div>

      {attainableBranches.map((collegeData) => (
        <div
          key={collegeData.college}
          className="mb-4 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/70"
        >
          {collegeData.branches.length > 0 && (
            <>
              <button
                onClick={() => toggleCollege(collegeData.college)}
                aria-expanded={!hiddenColleges.has(collegeData.college)}
                aria-controls={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                className="campus-btn flex w-full touch-manipulation items-center justify-between gap-3 border-b border-slate-700 bg-emerald-600/90 px-4 py-3 text-left text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-inset sm:px-5"
              >
                <span className="text-base font-semibold sm:text-lg">
                  {collegeData.college}
                </span>
                <span className="rounded-full bg-black/20 px-2 py-1 text-xs font-medium sm:text-sm">
                  {collegeData.branches.length} branches
                </span>
              </button>

              {!hiddenColleges.has(collegeData.college) && (
                <div
                  id={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                  className="campus-content p-3 sm:p-4"
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {collegeData.branches.map((branch, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2"
                      >
                        <span className="min-w-0 break-words text-sm text-slate-100 sm:text-base">
                          {branch.name}
                        </span>
                        <span className="shrink-0 rounded-md bg-slate-700 px-2 py-1 text-xs font-semibold tabular-nums text-amber-300 sm:text-sm">
                          {branch.cutoff}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default BranchesDisplay;
