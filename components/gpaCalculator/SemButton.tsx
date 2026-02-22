interface SemButtonProps {
  isOpen: boolean;
  selectedSemester?: number | null;
  onClick?: () => void;
}

const SemButton = ({ isOpen, selectedSemester, onClick }: SemButtonProps) => {
  return (
    <button
      className="w-full border-4 border-white bg-white text-black px-6 py-3 font-bold uppercase tracking-widest cursor-pointer transition-all flex items-center justify-between hover:bg-black hover:text-white shadow-[4px_4px_0px_white] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
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
