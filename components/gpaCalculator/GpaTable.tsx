import { useState } from "react";
import subjectData from "../../utils/subjects";
import { calculateGpa, getVisibleCourses } from "../../utils/gpaCalculation";

interface GpaTableProps {
  isOpen: boolean;
  honors: boolean;
  minors: boolean;
  subjectGroup: string;
}

const GpaTable = ({ isOpen, honors, minors, subjectGroup }: GpaTableProps) => {
  const [hasCalculated, setHasCalculated] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>(
    {},
  );

  const visibleCourses = getVisibleCourses(subjectData[subjectGroup] ?? {}, {
    honors,
    minors,
  });
  const gpa = calculateGpa(visibleCourses, selectedGrades);

  const handleCalculate = () => {
    if (gpa === null) {
      alert("Please select grades for at least one subject!");
      return;
    }
    setHasCalculated(true);
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className="flex shrink justify-center text-center mb-6 overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-emerald-400 text-slate-950">
              <th>Subject</th>
              <th>Credits</th>
              <th>Grade (/A+)</th>
            </tr>
          </thead>
          <tbody id="subject_table">
            {visibleCourses.map(([subjectName, creditValue], idx) => (
              <tr
                className={idx % 2 === 0 ? "bg-slate-900/70" : "bg-slate-950"}
                key={subjectName}
              >
                <td>{subjectName}</td>
                <td id={`credits-${idx}`}>{creditValue}</td>
                <td>
                  <select
                    name="Grades"
                    value={selectedGrades[subjectName] ?? ""}
                    onChange={(e) => {
                      const grade = e.target.value;
                      setSelectedGrades((grades) => ({
                        ...grades,
                        [subjectName]: grade,
                      }));
                      setHasCalculated(false);
                    }}
                    className="bg-slate-950 text-white border-2 border-slate-600 p-1 cursor-pointer font-bold uppercase w-full"
                  >
                    <option value="" disabled>
                      Grade
                    </option>
                    <option value={10}>A+</option>
                    <option value={9}>A</option>
                    <option value={8}>B</option>
                    <option value={7}>C</option>
                    <option value={6}>D</option>
                    <option value={5}>E</option>
                    <option value={0}>F</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full border-4 border-slate-600 bg-emerald-400 text-slate-950 py-3 px-4 font-bold uppercase tracking-widest transition-all hover:bg-emerald-300 hover:border-emerald-500 shadow-[4px_4px_0px_#64748b] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] cursor-pointer mb-4"
      >
        Calculate GPA
      </button>

      {hasCalculated && gpa !== null && (
        <div className="border-4 border-emerald-500 bg-slate-900 text-white p-6 shadow-[8px_8px_0px_#059669] text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
            Your Calculated GPA
          </p>
          <p className="text-5xl font-bold">{gpa}</p>
        </div>
      )}
    </div>
  );
};

export default GpaTable;
