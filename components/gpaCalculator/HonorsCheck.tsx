interface HonorsCheckBoxProps {
  isOpen: boolean;
  honors: boolean;
  onHonorsChange: (checked: boolean) => void;
}

const HonorsCheck = ({
  isOpen,
  honors,
  onHonorsChange,
}: HonorsCheckBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center gap-3 mb-4 p-4 border-4 border-slate-600 bg-slate-900">
      <input
        id="honors-checkbox"
        type="checkbox"
        checked={honors}
        onChange={(e) => onHonorsChange(e.target.checked)}
        className="w-5 h-5 cursor-pointer accent-emerald-400 bg-slate-950 border-2 border-slate-600"
      />
      <label
        htmlFor="honors-checkbox"
        className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer select-none"
      >
        B.Tech Honors Program
      </label>
    </div>
  );
};
export default HonorsCheck;
