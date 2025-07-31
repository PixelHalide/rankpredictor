interface CourseListProps {
  isOpen: boolean;
  sendCourse: (course: string) => void;
  selectedCourse?: string | null;
}

const CourseList = ({ isOpen, sendCourse, selectedCourse }: CourseListProps) => {
  const getClasses = (courseCode: string) =>
    `p-2 hover:-translate-y-1 hover:bg-gray-600 cursor-pointer transition-all rounded-md text-sm ${
      selectedCourse === courseCode ? 'bg-blue-600 hover:bg-blue-500' : ''
    }`;

  return (
    <div
      className={`overflow-hidden flex justify-center items-center w-full bg-gray-700 mx-auto border border-white/40 rounded-xl transition-all duration-500 shadow-lg ${
        !isOpen
          ? "pointer-events-none max-h-0 opacity-0 p-0"
          : "max-h-96 opacity-100 mb-5 p-4"
      }`}
    >
      <div className="grid grid-cols-3 grid-rows-7 gap-3 text-center w-full">
        <span onClick={() => sendCourse('CS')} className={getClasses('CS')}>CSE</span>
        <span onClick={() => sendCourse('AIML')} className={getClasses('AIML')}>AIML</span>
        <span onClick={() => sendCourse('CCE')} className={getClasses('CCE')}>CCE</span>
        <span onClick={() => sendCourse('IT')} className={getClasses('IT')}>IT</span>
        <span onClick={() => sendCourse('DSE')} className={getClasses('DSE')}>DSE</span>
        <span onClick={() => sendCourse('MNC')} className={getClasses('MNC')}>MNC</span>
        <span onClick={() => sendCourse('CSFT')} className={getClasses('CSFT')}>CSFT</span>
        <span onClick={() => sendCourse('ECE')} className={getClasses('ECE')}>ECE</span>
        <span onClick={() => sendCourse('VLSI')} className={getClasses('VLSI')}>VLSI</span>
        <span onClick={() => sendCourse('ENI')} className={getClasses('ENI')}>ENI</span>
        <span onClick={() => sendCourse('EEE')} className={getClasses('EEE')}>EEE</span>
        <span onClick={() => sendCourse('CPS')} className={getClasses('CPS')}>CPS</span>
        <span onClick={() => sendCourse('BioMed')} className={getClasses('BioMed')}>BioMed</span>
        <span onClick={() => sendCourse('MechX')} className={getClasses('MechX')}>MechX</span>
        <span onClick={() => sendCourse('Mech')} className={getClasses('Mech')}>Mech</span>
        <span onClick={() => sendCourse('Aero')} className={getClasses('Aero')}>Aero</span>
        <span onClick={() => sendCourse('Auto')} className={getClasses('Auto')}>Auto</span>
        <span onClick={() => sendCourse('Industrial')} className={getClasses('Industrial')}>Industrial</span>
        <span onClick={() => sendCourse('Civil')} className={getClasses('Civil')}>Civil</span>
        <span onClick={() => sendCourse('BioTech')} className={getClasses('BioTech')}>BioTech</span>
        <span onClick={() => sendCourse('Chem')} className={getClasses('Chem')}>Chem</span>
      </div>
    </div>
  )
}

export default CourseList
