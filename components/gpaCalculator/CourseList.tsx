interface CourseListProps {
  isOpen: boolean;
  sendCourse: (course: string) => void;
  selectedCourse?: string | null;
}

const COURSES = [
  { label: "CSE", value: "CS" },
  { label: "AIML", value: "AIML" },
  { label: "CCE", value: "CCE" },
  { label: "IT", value: "IT" },
  { label: "DSE", value: "DSE" },
  { label: "MNC", value: "MNC" },
  { label: "CSFT", value: "CSFT" },
  { label: "ECE", value: "ECE" },
  { label: "VLSI", value: "VLSI" },
  { label: "ENI", value: "ENI" },
  { label: "EEE", value: "EEE" },
  { label: "CPS", value: "CPS" },
  { label: "BioMed", value: "BioMed" },
  { label: "MechX", value: "MechX" },
  { label: "Mech", value: "Mech" },
  { label: "Aero", value: "Aero" },
  { label: "Auto", value: "Auto" },
  { label: "Industrial", value: "Industrial" },
  { label: "Civil", value: "Civil" },
  { label: "BioTech", value: "BioTech" },
  { label: "Chem", value: "Chem" },
];

const CourseList = ({
  isOpen,
  sendCourse,
  selectedCourse,
}: CourseListProps) => {
  return (
    <div
      className={`overflow-hidden w-full transition-all duration-500 ${
        !isOpen
          ? "pointer-events-none max-h-0 opacity-0"
          : "max-h-[500px] opacity-100 mb-4"
      }`}
    >
      <div className="grid grid-cols-3 gap-px bg-white border-4 border-white">
        {COURSES.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => sendCourse(value)}
            className={`p-3 font-bold uppercase tracking-wide cursor-pointer transition-all text-sm ${
              selectedCourse === value
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-white hover:text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
