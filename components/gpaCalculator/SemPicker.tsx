interface SemSelector {
  isOpen: boolean;
  sendSemester: (sem: number) => void;
  selectedSemester?: number | null;
}

const LABELS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const SemPicker = ({ isOpen, sendSemester, selectedSemester }: SemSelector) => {
  return (
    <div
      id="semester"
      className={`overflow-hidden w-full transition-all duration-300 ${
        isOpen
          ? "max-h-40 opacity-100 mb-4"
          : "pointer-events-none max-h-0 opacity-0"
      }`}
    >
      <div className="grid grid-cols-4 gap-px bg-emerald-400 border-4 border-t-0 border-slate-600">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem, i) => (
          <button
            key={sem}
            onClick={() => sendSemester(sem)}
            className={`p-4 font-bold text-center uppercase cursor-pointer transition-all tracking-widest ${
              selectedSemester === sem
                ? "bg-emerald-400 text-slate-950"
                : "bg-slate-900 text-white hover:bg-emerald-300 hover:text-slate-950"
            }`}
          >
            {LABELS[i]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SemPicker;
