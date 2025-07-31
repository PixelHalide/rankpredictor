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
    const [selectedGrades, setSelectedGrades] = useState<{[key: string]: string}>({});

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

    const getCredits = (e: React.ChangeEvent<HTMLSelectElement>, creditValue: number, i: number, subjectName: string) => {
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

    const resetGrades = () => {
        setGpa(null);
        setObtainedCreds(new Array(subjectArray.length).fill(0));
        setCreds(new Array(subjectArray.length).fill(0));
        setSelectedGrades({});
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
                        >
                            <option value="" disabled>Grade</option>
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
            );
        });
        return returnElements;
    };

    if (!isOpen) return null;

    return (
        <div>
            <div className={`flex shrink justify-center text-center drop-shadow-xl transition-all duration-500 mb-6 ${!isOpen ? "opacity-0" : "opacity-100"} `}>
                <table className={`table-auto border-collapse drop-shadow-xl transition-all duration-500 ${!isOpen ? 'opacity-0' : "opacity-100"}`}>
                    <thead>
                        <tr className="bg-zinc-900 py-10">
                        <th>Subject</th>
                        <th>Credits</th>
                        <th>Grade(/A+)</th>
                        </tr>
                    </thead>
                    <tbody id="subject_table" className="opacity-100">
                        {isOpen ? returnSubjects(subjects) : null}
                    </tbody>
                </table>
            </div>
            <div className={`transition-all duration-500 ${!isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <button onClick={calculateGPA} className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 active:bg-green-700 cursor-pointer transition-colors mb-4">Submit Grades</button>
            </div>
            <div className={`${((gpa === null) || (!isOpen)) ? "hidden" : ""}`}>
                Your GPA is Calculated to be: {gpa}
            </div>
        </div>
    );
};

export default GpaTable
