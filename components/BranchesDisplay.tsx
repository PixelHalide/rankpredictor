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
      <div className="mt-4 p-4 bg-red-800 rounded text-center">
        <p>
          No branches available at your predicted rank. Better luck next time!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {attainableBranches.map((collegeData) => (
        <div key={collegeData.college}>
          {collegeData.branches.length > 0 && (
            <>
              <button
                onClick={() => toggleCollege(collegeData.college)}
                className="campus-btn cursor-pointer w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-500 transition-colors mb-4"
              >
                {collegeData.college}
              </button>
              <div
                className={`campus-content text-center bg-gray-600/50 mb-4 rounded-xl py-2 ${hiddenColleges.has(collegeData.college) ? "hidden" : ""}`}
              >
                <ul className="list-disc list-inside">
                  {collegeData.branches.map((branch, index) => (
                    <li key={index}>
                      {branch.name} - {branch.cutoff}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BranchesDisplay;
