import Image from 'next/image';

interface SemButtonProps {
  isOpen: boolean;
  selectedSemester?: number | null;
  onClick?: () => void;
}

const SemButton = ({ isOpen, selectedSemester, onClick }: SemButtonProps) => {
  return (
      <button
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 border border-gray-700 rounded-lg transition-all cursor-pointer mb-4 shadow-md hover:shadow-lg"
        onClick={onClick}
      >
        <span>
          {selectedSemester ? `Semester ${selectedSemester}` : 'Select Semester'}
        </span>
        <span
          id="dropdown-arrow"
          className={`inline-block ml-2 transform transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <Image src="/down-arrow-svgrepo-com.svg" width="12" height="12" alt="dropdown arrow" />
        </span>
      </button>
  )
}

export default SemButton
