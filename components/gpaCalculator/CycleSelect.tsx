interface CycleSelectProps {
  isOpen: boolean;
  sendCycle: (cycle: number) => void;
  selectedCycle?: number | null;
}

const CycleSelect = ({
  isOpen,
  sendCycle,
  selectedCycle,
}: CycleSelectProps) => {
  const getClasses = (cycleNum: number) =>
    `hover:bg-gray-600 cursor-pointer transition-all hover:rounded-md hover:-translate-y-1 p-1 rounded-md ${
      selectedCycle === cycleNum ? "bg-blue-600 hover:bg-blue-500" : ""
    }`;

  return (
    <div
      className={`flex justify-center gap-4 bg-gray-700 mx-auto w-full overflow-hidden rounded-2xl border border-white/40 transition-all duration-500 shadow-lg ${
        isOpen
          ? "max-h-20 opacity-100 mt-2 mb-5 p-3"
          : "max-h-0 opacity-0 mt-0 mb-0 pointer-events-none p-0"
      }`}
    >
      <div className="flex flex-row justify-evenly w-full my-auto">
        <div
          onClick={() => sendCycle(0)} // Physics Cycle = 0
          className={getClasses(0)}
        >
          Physics Cycle
        </div>
        <div
          onClick={() => sendCycle(1)} // Chem Cycle = 1
          className={getClasses(1)}
        >
          Chemistry Cycle
        </div>
      </div>
    </div>
  );
};

export default CycleSelect;
