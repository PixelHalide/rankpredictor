interface StreamSelectProps {
  isOpen: boolean;
  sendStream: (stream: string) => void;
  selectedStream?: string | null;
}

const StreamSelect = ({
  isOpen,
  sendStream,
  selectedStream,
}: StreamSelectProps) => {
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
          { label: "CS Stream", value: "CS" },
          { label: "Non-CS Stream", value: "NONCS" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => sendStream(value)}
            className={`p-3 font-bold uppercase tracking-wide cursor-pointer transition-all text-sm ${
              selectedStream === value
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

export default StreamSelect;
