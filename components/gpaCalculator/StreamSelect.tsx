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
  const getClasses = (streamType: string) =>
    `hover:bg-gray-600 cursor-pointer transition-all hover:rounded-md hover:-translate-y-1 p-1 rounded-md ${
      selectedStream === streamType ? "bg-blue-600 hover:bg-blue-500" : ""
    }`;

  return (
    <div
      className={`flex justify-center gap-4 bg-gray-700 mx-auto w-full overflow-hidden rounded-2xl border border-white/40 transition-all duration-500 shadow-lg ${
        !isOpen
          ? "max-h-0 mt-0 mb-0 opacity-0 pointer-events-none p-0"
          : "max-h-20 mt-2 mb-5 opacity-100 p-3"
      }`}
    >
      <div className="flex flex-row justify-evenly w-full my-auto">
        <div onClick={() => sendStream("CS")} className={getClasses("CS")}>
          CS Stream
        </div>
        <div
          onClick={() => sendStream("NONCS")}
          className={getClasses("NONCS")}
        >
          Non-CS Stream
        </div>
      </div>
    </div>
  );
};

export default StreamSelect;
