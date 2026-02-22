import { useState, useEffect, type JSX } from "react";
import subjectData from "../../utils/subjects";

interface GpaTableProps {
  isOpen: boolean;
  honors: boolean;
  subjectGroup: string;
}

interface SemCourse {
  [name: string]: number;
}

const GpaTable = ({ isOpen, honors, subjectGroup }: GpaTableProps) => {
  const [gpa, setGpa] = useState<number | null>(null);
  const [obtainedCreds, setObtainedCreds] = useState<number[]>([]);
  const [creds, setCreds] = useState<number[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<{
    [key: string]: string;
  }>({});

  const subjects: SemCourse = subjectData[subjectGroup] || {};
  const subjectArray = Object.keys(subjects);

  useEffect(() => {
    setGpa(null);
    setObtainedCreds(new Array(subjectArray.length).fill(0));
    setCreds(new Array(subjectArray.length).fill(0));
    setSelectedGrades({});
  }, [subjectGroup, subjectArray.length]);

  const calculateGPA = () => {
    let totalObtainedCreds = 0;
    let totalCreds = 0;

    for (let i = 0; i < subjectArray.length; i++) {
      totalObtainedCreds += obtainedCreds[i];
      totalCreds += creds[i];
    }

    if (totalCreds === 0) {
      alert("Please select grades for at least one subject!");
      return;
    }

    const calculatedGpa = Number((totalObtainedCreds / totalCreds).toFixed(2));
    setGpa(calculatedGpa);
  };

  const getCredits = (
    e: React.ChangeEvent<HTMLSelectElement>,
    creditValue: number,
    i: number,
    subjectName: string,
  ) => {
    const gradeValue = e.target.value === "" ? 0 : Number(e.target.value);

    const newObtainedCreds = [...obtainedCreds];
    newObtainedCreds[i] = gradeValue * creditValue;
    setObtainedCreds(newObtainedCreds);

    const newCreds = [...creds];
    newCreds[i] = gradeValue === 0 && e.target.value !== "0" ? 0 : creditValue;
    setCreds(newCreds);

    const newSelectedGrades = { ...selectedGrades };
    newSelectedGrades[subjectName] = e.target.value;
    setSelectedGrades(newSelectedGrades);
  };

  const returnSubjects = (subjects: SemCourse): JSX.Element[] => {
    const returnElements: JSX.Element[] = [];

    subjectArray.forEach((subjectName, idx) => {
      const creditValue = subjects[subjectName];
      if (!honors && subjectName.includes("Honors")) return;

      const isAlternate = idx % 2 === 0;

      returnElements.push(
        <tr className={isAlternate ? "bg-zinc-900" : ""} key={subjectName}>
          <td>{subjectName}</td>
          <td id={`credits-${idx}`}>{creditValue}</td>
          <td>
            <select
              name="Grades"
              value={selectedGrades[subjectName] || ""}
              onChange={(e) => getCredits(e, creditValue, idx, subjectName)}
              className="bg-black text-white border-2 border-white p-1 cursor-pointer font-bold uppercase w-full"
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
        </tr>,
      );
    });
    return returnElements;
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className="flex shrink justify-center text-center mb-6 overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-white text-black">
              <th>Subject</th>
              <th>Credits</th>
              <th>Grade (/A+)</th>
            </tr>
          </thead>
          <tbody id="subject_table">
            {isOpen ? returnSubjects(subjects) : null}
          </tbody>
        </table>
      </div>

      <button
        onClick={calculateGPA}
        className="w-full border-4 border-white bg-white text-black py-3 px-4 font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white shadow-[4px_4px_0px_white] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] cursor-pointer mb-4"
      >
        Calculate GPA
      </button>

      {gpa !== null && isOpen && (
        <div className="border-4 border-white bg-white text-black p-6 shadow-[8px_8px_0px_white] text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
            Your Calculated GPA
          </p>
          <p className="text-5xl font-bold">{gpa}</p>
        </div>
      )}
    </div>
  );
};

export default GpaTable;
