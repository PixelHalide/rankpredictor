"use client";
import { useState } from "react";
import { predictMETRank, PredictionResult } from "../../utils/metPrediction";
import BranchesDisplay from "../../components/BranchesDisplay";

interface FormProp {
  sendBoards: (marks: number | null) => void;
  sendMET: (marks: number | null) => void;
}

const Form = ({ sendBoards, sendMET }: FormProp) => {
  const [boardPercentage, setBoardPercentage] = useState<number | null>(null);
  const [metMarks, setMetMarks] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBoardChange = (value: number | null) => {
    setBoardPercentage(value);
    sendBoards(value);
    if (prediction) setPrediction(null);
    if (error) setError("");
  };

  const handleMetChange = (value: number | null) => {
    setMetMarks(value);
    sendMET(value);
    if (prediction) setPrediction(null);
    if (error) setError("");
  };

  const handlePredict = async () => {
    if (boardPercentage === null || metMarks === null) {
      setError("Please enter both board percentage and MET marks.");
      return;
    }

    if (boardPercentage < 0 || boardPercentage > 100) {
      setError("Board percentage must be between 0 and 100.");
      return;
    }

    // technically people can score negative marks in MET so ...
    if (metMarks < 0 || metMarks > 240) {
      setError("MET marks must be between 0 and 240.");
      return;
    }

    if (metMarks === 0 && boardPercentage === 50) {
      setError("😭😭😭😭son😭😭😭😭😭😭😭😭😭😭I'm crine😭😭😭😭😭😭");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = predictMETRank(boardPercentage, metMarks);
      setPrediction(result);

      // Non-blocking concurrent call to log user input
      fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boardPercentage,
          metMarks,
        }),
      }).catch((err) => {
        console.error("Submission failed:", err);
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during prediction.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full border-4 border-slate-600 bg-slate-950 p-6 sm:p-8 shadow-[8px_8px_0px_#64748b]">
      <div className="mb-8 border-b-4 border-slate-600 pb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl">
          <span className="bg-indigo-400 text-slate-950 px-2 py-1">MET 2026</span>{" "}
          Rank Predictor
        </h1>
        <p className="mt-3 text-sm font-bold uppercase tracking-widest text-slate-300">
          Enter your scores to estimate your rank and view likely branches.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="boardPercentage"
            className="block text-sm font-bold uppercase tracking-widest text-white"
          >
            Board Percentage
          </label>
          <input
            type="number"
            id="boardPercentage"
            name="boardPercentage"
            autoComplete="off"
            inputMode="decimal"
            min="0"
            max="100"
            step="0.01"
            value={boardPercentage ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              handleBoardChange(val === "" ? null : Number(val));
            }}
            className="w-full border-4 border-slate-600 bg-slate-900 px-4 py-3 text-xl font-bold text-white transition-all focus-visible:bg-indigo-400 focus-visible:text-slate-950 focus-visible:outline-none placeholder:text-slate-500 focus-visible:placeholder:text-gray-100"
            placeholder="e.g. 95.5"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="metMarks"
            className="block text-sm font-bold uppercase tracking-widest text-white"
          >
            MET Marks (out of 240)
          </label>
          <input
            type="number"
            id="metMarks"
            name="metMarks"
            autoComplete="off"
            inputMode="numeric"
            min="0"
            max="240"
            value={metMarks ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              handleMetChange(val === "" ? null : Number(val));
            }}
            className="w-full border-4 border-slate-600 bg-slate-900 px-4 py-3 text-xl font-bold text-white transition-all focus-visible:bg-indigo-400 focus-visible:text-slate-950 focus-visible:outline-none placeholder:text-slate-500 focus-visible:placeholder:text-gray-100"
            placeholder="e.g. 180"
          />
        </div>
      </div>

      <button
        onClick={handlePredict}
        disabled={isLoading || boardPercentage === null || metMarks === null}
        className="mt-8 w-full touch-manipulation border-4 border-slate-600 bg-indigo-400 px-4 py-4 text-xl font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-rose-400 hover:border-rose-400 hover:translate-x-0.5 hover:translate-y-0.5 shadow-[8px_8px_0px_#64748b] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[8px_8px_0px_#64748b]"
      >
        {isLoading ? "Predicting..." : "Predict Rank"}
      </button>

      {error && (
        <div className="mt-6 border-4 border-red-400 bg-red-950/40 p-4 text-center font-bold uppercase tracking-widest text-red-100">
          ERROR: {error}
        </div>
      )}

      {prediction && (
        <div className="mt-10 space-y-8">
          <div className="border-4 border-rose-400 bg-slate-900 text-white p-6 shadow-[8px_8px_0px_#fb7185]">
            <p className="text-center text-xl font-bold uppercase tracking-wider sm:text-2xl">
              Your rank according to last year:
              <span className="ml-4 text-4xl bg-slate-950 text-yellow-400 px-4 py-2 border-2 border-slate-600 inline-block mt-4 md:mt-0">
                {prediction.predictedRank}
              </span>
            </p>
            <p className="mt-6 text-center text-sm font-bold uppercase text-slate-300">
              Note: CPS, Biomedical, VLSI will be merged into EEE for 2026.
            </p>
          </div>

          <BranchesDisplay attainableBranches={prediction.attainableBranches} />
        </div>
      )}

      <p className="font-bold text-sm uppercase tracking-widest mt-12 mb-0 text-center text-white p-4 border-4 border-dashed border-slate-500/70 bg-slate-900/50">
        Special thanks to{" "}
        <a
          href="https://pranavu.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-slate-950 px-2 py-1 mx-1 hover:bg-rose-400 transition-colors"
        >
          Pranav U
        </a>{" "}
        for processing and cleaning the data, and for their help in building the
        predictor!
      </p>
    </div>
  );
};

export default Form;
