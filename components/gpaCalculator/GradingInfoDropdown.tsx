'use client'
import { useState } from 'react';

const GradingInfoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="content mb-8 max-w-4xl mx-auto">
      <p
        className="underline cursor-pointer text-center mb-4 hover:text-yellow-500 transition-all"
        onClick={toggleContent}
      >
        How does grading work? {isOpen ? 'V' : '>'}
      </p>

      {isOpen && (
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-xl font-bold text-left mb-4">Understanding the Grading System</p>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">Grade Point Scale</h3>
              <p className="text-gray-300 mb-2">
                The grading system uses a 10-point scale where each letter grade corresponds to specific grade points:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
                <li>S (Outstanding): 10 points</li>
                <li>A (Excellent): 9 points</li>
                <li>B (Very Good): 8 points</li>
                <li>C (Good): 7 points</li>
                <li>D (Satisfactory): 6 points</li>
                <li>E (Pass): 5 points</li>
                <li>F (Fail): 0 points</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">GPA Calculation</h3>
              <p className="text-gray-300 mb-2">
                Your Grade Point Average (GPA) is calculated using the following formula:
              </p>
              <div className="bg-gray-800 p-4 rounded text-center mb-2">
                <span className="font-mono">GPA = Σ(Grade Points × Credits) / Σ(Credits)</span>
              </div>
              <p className="text-gray-300">
                This means each subject's grade points are multiplied by its credit value, then all are summed and divided by the total credits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Honors Program</h3>
              <p className="text-gray-300">
                Students in the Honors program may have additional requirements or modified grading criteria.
                Check with your academic advisor for specific details about Honors grading policies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Important Notes</h3>
              <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
                <li>All subjects must be passed (grade E or above) to progress</li>
                <li>Failed subjects (grade F) will need to be retaken</li>
                <li>GPA affects academic standing and scholarship eligibility</li>
                <li>Different streams may have varying credit distributions</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradingInfoDropdown;
