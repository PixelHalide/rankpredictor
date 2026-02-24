interface SemButtonProps {
  isOpen: boolean;
  selectedSemester?: number | null;
  onClick?: () => void;
}

const SemButton = ({ isOpen, selectedSemester, onClick }: SemButtonProps) => {
  return (
    <button
      className="w-full border-4 border-slate-600 bg-emerald-400 text-slate-950 px-6 py-3 font-bold uppercase tracking-widest cursor-pointer transition-all flex items-center justify-between hover:bg-emerald-300 hover:border-emerald-500 shadow-[4px_4px_0px_#64748b] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
      onClick={onClick}
    >
      <span>
        {selectedSemester ? `Semester ${selectedSemester}` : "Select Semester"}
      </span>
      <span
        className={`transition-transform duration-300 text-sm ${isOpen ? "rotate-180" : "rotate-0"}`}
      >
        ▼
      </span>
    </button>
  );
};

export default SemButton;
