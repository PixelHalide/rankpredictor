interface SemSelector {
  isOpen: boolean;
  sendSemester: (sem: number) => void;
  selectedSemester?: number | null;
}

const SemPicker = ({ isOpen, sendSemester, selectedSemester }: SemSelector) => {
  const getClasses = (semNum: number) =>
    `p-3 hover:-translate-y-1 hover:bg-gray-600 cursor-pointer transition-all rounded-md ${
      selectedSemester === semNum ? "bg-blue-600 hover:bg-blue-500" : ""
    }`;

  return (
    <div
      id="semester"
      className={`${
        isOpen
          ? "max-h-96 opacity-100 mt-2 mb-4"
          : "pointer-events-none mt-0 mb-0 max-h-0 opacity-0"
      } overflow-hidden flex justify-center items-center w-72 bg-gray-700 mx-auto border border-white/40 rounded-xl p-3 transition-all duration-500 shadow-lg`}
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-3 text-center w-full">
        <span onClick={() => sendSemester(1)} className={getClasses(1)}>
          I
        </span>
        <div onClick={() => sendSemester(2)} className={getClasses(2)}>
          II
        </div>
        <div onClick={() => sendSemester(3)} className={getClasses(3)}>
          III
        </div>
        <div onClick={() => sendSemester(4)} className={getClasses(4)}>
          IV
        </div>
        <div onClick={() => sendSemester(5)} className={getClasses(5)}>
          V
        </div>
        <div onClick={() => sendSemester(6)} className={getClasses(6)}>
          VI
        </div>
        <div onClick={() => sendSemester(7)} className={getClasses(7)}>
          VII
        </div>
        <div onClick={() => sendSemester(8)} className={getClasses(8)}>
          VIII
        </div>
      </div>
    </div>
  );
};

export default SemPicker;
