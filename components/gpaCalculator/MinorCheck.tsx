interface MinorCheckBoxProps {
  isOpen: boolean;
  minors: boolean;
  onMinorsChange: (checked: boolean) => void;
}

const MinorCheck = ({
  isOpen,
  minors,
  onMinorsChange,
}: MinorCheckBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center gap-3 mb-4 p-4 border-4 border-slate-600 bg-slate-900">
      <input
        id="minors-checkbox"
        type="checkbox"
        checked={minors}
        onChange={(e) => onMinorsChange(e.target.checked)}
        className="w-5 h-5 cursor-pointer accent-emerald-400 bg-slate-950 border-2 border-slate-600"
      />
      <label
        htmlFor="minors-checkbox"
        className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer select-none"
      >
        Include Minor Course
      </label>
    </div>
  );
};
export default MinorCheck;