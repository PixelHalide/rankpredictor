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
          <h2 className="text-xl font-bold text-left mb-4">Grading System Overview</h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Grade Point Scale</h3>
            <p className="text-gray-300 mb-2">
              The grading system uses a 10-point scale where each letter grade corresponds to specific grade points:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
              <li>A+: 10 points</li>
              <li>A: 9 points</li>
              <li>B: 8 points</li>
              <li>C: 7 points</li>
              <li>D: 6 points</li>
              <li>E: 5 points</li>
              <li>F: 0 points</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">GPA Calculation</h3>
            <p className="text-gray-300 mb-2">
              Your Grade Point Average (GPA) is calculated using the following formula:
            </p>
            <div className="bg-gray-800 p-4 rounded text-center mb-2">
              <span className="font-mono">GPA = Σ(Grade Points × Credits) / Σ(Credits)</span>
            </div>
            <p className="text-gray-300">
              Each subject&rsquo;s grade points are multiplied by its credit value, then all are summed and divided by the total credits.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Grade Determination</h3>
            <p className="text-gray-300 mb-2">
              Professors assign grades based on class average and standard deviation. The cutoffs are as follows:
            </p>
            <div className="text-gray-300 mb-2">
              <strong>Maximum Cutoffs (when average/std dev is high):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>A+: 90 marks, A: 82, B: 74, C: 66, D: 58, E: 50</li>
              </ul>
            </div>
            <div className="text-gray-300 mb-2">
              <strong>Minimum Cutoffs (when scores are low):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>A+: 75 marks, A: 67, B: 59, C: 51, D: 43, E: 35</li>
              </ul>
            </div>
            <div className="text-gray-300 mb-2">
              <strong>Lab Subjects (always absolute):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>A+: 90, A: 80, B: 70, C: 60, D: 50, E: 40</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Assessment Breakdown</h3>
            <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
              <li>End-semester exam: 50 marks</li>
              <li>Mid-semester exam: 30 marks</li>
              <li>Internals: 20 marks</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Grade Cutoff Calculator</h3>
            <p className="text-gray-300">
              Use this tool to see grade cutoffs based on average marks and standard deviation:
              <a
                href="https://www.desmos.com/calculator/g6mijvx4ct"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline ml-1"
              >
                Grade Calculator
              </a> (credit: u/Super382946)
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default GradingInfoDropdown;
