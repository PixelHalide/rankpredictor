'use client'
import { useState } from 'react';
import { predictMETRank, PredictionResult } from '../../utils/metPrediction';
import BranchesDisplay from '../../components/BranchesDisplay';

interface FormProp {
  sendBoards: (marks: number) => void;
  sendMET: (marks: number) => void;
}

const Form = ({ sendBoards, sendMET }: FormProp) => {
  const [boardPercentage, setBoardPercentage] = useState<number | null>(null);
  const [metMarks, setMetMarks] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBoardChange = (value: number) => {
    setBoardPercentage(value);
    sendBoards(value);
    // Clear previous prediction when inputs change
    if (prediction) setPrediction(null);
    if (error) setError('');
  };

  const handleMetChange = (value: number) => {
    setMetMarks(value);
    sendMET(value);
    // Clear previous prediction when inputs change
    if (prediction) setPrediction(null);
    if (error) setError('');
  };

  const handlePredict = async () => {
    if (boardPercentage === null || metMarks === null) {
      setError('Please enter both board percentage and MET marks.');
      return;
    }

    if (boardPercentage < 0 || boardPercentage > 100) {
      setError('Board percentage must be between 0 and 100.');
      return;
    }

    if (metMarks < 0 || metMarks > 240) {
      setError('MET marks must be between 0 and 240.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = predictMETRank(boardPercentage, metMarks);
      setPrediction(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during prediction.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full text-center">
        <label htmlFor="boardPercentage" className="block mb-2 text-white">
          Enter your Board Percentage:
        </label>
        <input
          type="number"
          id="boardPercentage"
          min="0"
          max="100"
          step="0.01"
          value={boardPercentage || ''}
          onChange={(e) => handleBoardChange(Number(e.target.value))}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded text-center border border-gray-600 focus:border-green-500 focus:outline-none"
        />

        <label htmlFor="metMarks" className="block mb-2 text-white">
          Enter your MET Marks (out of 240):
        </label>
        <input
          type="number"
          id="metMarks"
          min="0"
          max="240"
          value={metMarks || ''}
          onChange={(e) => handleMetChange(Number(e.target.value))}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded text-center border border-gray-600 focus:border-green-500 focus:outline-none"
        />

        <button
          onClick={handlePredict}
          disabled={isLoading || boardPercentage === null || metMarks === null}
          className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-500 active:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed cursor-pointer transition-colors mb-4"
        >
          {isLoading ? 'Predicting...' : 'Predict Rank'}
        </button>

        {error && (
          <div className="mb-4 p-3 bg-red-800 text-white rounded">
            {error}
          </div>
        )}

        {prediction && (
          <div className="text-left">
            <div className="mb-4 p-4 bg-gray-600/50 rounded">
              <p className="text-white text-center">
                Your rank according to last year would be: <strong className="text-yellow-400">{prediction.predictedRank}</strong>
              </p>
              <p className="text-sm text-gray-300 text-center mt-2">
                (Note: All CS related branches (Except Fintech & MnC) are to be merged for 2025 for BLR and Manipal)
              </p>
            </div>

            <BranchesDisplay attainableBranches={prediction.attainableBranches} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
