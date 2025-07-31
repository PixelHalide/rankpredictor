interface HonorsCheckBoxProps {
    isOpen: boolean;
    honors: boolean;
    onHonorsChange: (checked: boolean) => void;
}

const HonorsCheck = ({ isOpen, honors, onHonorsChange }: HonorsCheckBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className="flex justify-center mx-auto mb-4 p-3 bg-gray-700 rounded-lg border border-white/40 shadow-lg transition-all duration-500">
      <div className="flex items-center">
        <input
          id="honors-checkbox"
          type="checkbox"
          checked={honors}
          onChange={(e) => onHonorsChange(e.target.checked)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 dark:focus:ring-blue-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        />
        <label htmlFor="honors-checkbox" className="ml-3 text-sm font-medium text-gray-300 cursor-pointer select-none">
          B.Tech Honors Program
        </label>
      </div>
    </div>
  )
}
export default HonorsCheck
