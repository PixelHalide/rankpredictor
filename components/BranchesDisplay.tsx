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
      <div className="mt-4 border-4 border-white bg-black p-4 text-center text-white shadow-[8px_8px_0px_white] uppercase font-bold tracking-widest">
        <p className="text-sm sm:text-base">
          No branches available at your predicted rank. Better luck next time!
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <div className="mb-6 flex items-center justify-between gap-3 border-b-4 border-white pb-2">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
          Attainable Branches
        </h2>
      </div>

      {attainableBranches.map((collegeData) => (
        <div
          key={collegeData.college}
          className="mb-8 border-4 border-white bg-black shadow-[8px_8px_0px_white]"
        >
          {collegeData.branches.length > 0 && (
            <>
              <button
                onClick={() => toggleCollege(collegeData.college)}
                aria-expanded={!hiddenColleges.has(collegeData.college)}
                aria-controls={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                className="campus-btn flex w-full touch-manipulation items-center justify-between gap-3 border-b-4 border-white bg-white px-4 py-4 text-left text-black uppercase font-bold hover:bg-black hover:text-white focus-visible:outline-none focus-visible:bg-black focus-visible:text-white sm:px-6"
              >
                <span className="text-xl sm:text-2xl tracking-tight">
                  {collegeData.college}
                </span>
                <span className="border-2 border-current px-3 py-1 text-sm font-bold sm:text-base bg-transparent">
                  {collegeData.branches.length} branches
                </span>
              </button>

              {!hiddenColleges.has(collegeData.college) && (
                <div
                  id={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                  className="campus-content p-4 sm:p-6"
                >
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {collegeData.branches.map((branch, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-3 border-2 border-white bg-black px-4 py-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_white] transition-all"
                      >
                        <span className="min-w-0 break-words text-sm font-bold uppercase text-white sm:text-base">
                          {branch.name}
                        </span>
                        <span className="shrink-0 border-2 border-white bg-white px-2 py-1 text-xs font-bold tabular-nums text-black sm:text-sm">
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
