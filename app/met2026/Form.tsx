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
    // Clear previous prediction when inputs change
    if (prediction) setPrediction(null);
    if (error) setError("");
  };

  const handleMetChange = (value: number | null) => {
    setMetMarks(value);
    sendMET(value);
    // Clear previous prediction when inputs change
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
        // Log locally if it fails, but don't show the user.
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
    <div className="mt-6">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-xl backdrop-blur-sm sm:p-6">
        <h1 className="mb-2 text-center text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          MET 2026 Rank Predictor
        </h1>
        <p className="mb-6 text-center text-sm text-slate-400 sm:text-base">
          Enter your scores to estimate your rank and view likely branches.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="boardPercentage"
              className="mb-2 block text-sm font-medium text-slate-200"
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
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-lg text-slate-100 shadow-inner transition-colors focus-visible:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
            />
          </div>

          <div>
            <label
              htmlFor="metMarks"
              className="mb-2 block text-sm font-medium text-slate-200"
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
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-lg text-slate-100 shadow-inner transition-colors focus-visible:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
            />
          </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={isLoading || boardPercentage === null || metMarks === null}
          className="mt-5 w-full touch-manipulation rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-600 sm:text-lg"
        >
          {isLoading ? "Predicting..." : "Predict Rank"}
        </button>

        <p className="mt-3 text-center text-[10px] text-slate-500 sm:text-xs">
          Your inputs are stored anonymously to help improve future prediction accuracy.
        </p>

        {error && (
          <div className="mt-4 rounded-lg border border-red-500/40 bg-red-950/60 p-3 text-sm text-red-100">
            {error}
          </div>
        )}

        {prediction && (
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4 sm:p-5">
              <p className="text-center text-lg text-slate-100 sm:text-xl">
                Your rank according to last year:
                <span className="ml-2 font-bold tabular-nums text-amber-300">
                  {prediction.predictedRank}
                </span>
              </p>
              <p className="mt-2 text-center text-xs text-slate-400 sm:text-sm">
                Note: Core branches are expected to be merged for 2026. (Industrial, Auto, Aero will be merged into Mechanical; And the Circuital branches will be merged into EEE & ECE)
              </p>
            </div>

            <BranchesDisplay
              attainableBranches={prediction.attainableBranches}
            />
          </div>
        )}
      </div>
                <p className="font-semibold text-s mt-10 mb-2 text-center text-white">
                  Special thanks to <a href="www.pranavu.dev" className="text-yellow-400 hover:text-yellow-300 transition-all">Pranav U</a> for processing and cleaning the data, and for their help in building the predictor!
                </p>
    </div>
  );
};

export default Form;
