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
  return (
    <div
      className={`overflow-hidden w-full transition-all duration-300 ${
        !isOpen
          ? "max-h-0 opacity-0 pointer-events-none"
          : "max-h-24 opacity-100 mb-4"
      }`}
    >
      <div className="grid grid-cols-2 gap-px bg-white border-4 border-white">
        {[
          { label: "Physics Cycle", value: 0 },
          { label: "Chemistry Cycle", value: 1 },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => sendCycle(value)}
            className={`p-3 font-bold uppercase tracking-wide cursor-pointer transition-all text-sm ${
              selectedCycle === value
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

export default CycleSelect;
