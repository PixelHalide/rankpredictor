import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import METChart from "./METChart";

const HowItWorksDropdown = () => {
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
        How does this work? {isOpen ? "V" : ">"}
      </p>

      {isOpen && (
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="mb-4">
            In MET 2025, both entrance exam scores and board exam results are
            considered. To account for varying difficulty levels across
            different boards, board percentages are normalized into band scores
            from 0 to 10. This creates a &ldquo;fair&rdquo; system where your
            final score combines your MET performance with your standardized
            board exam band. Here&rsquo;s how board percentages are converted to
            bands:
          </p>

          <ul className="list-disc list-inside text-left mb-4 space-y-1">
            <li>95-100%: Band 10</li>
            <li>90-94.99%: Band 9</li>
            <li>85-89.99%: Band 8</li>
            <li>80-84.99%: Band 7</li>
            <li>75-79.99%: Band 6</li>
            <li>70-74.99%: Band 5</li>
            <li>65-69.99%: Band 4</li>
            <li>60-64.99%: Band 3</li>
            <li>55-59.99%: Band 2</li>
            <li>50-54.99%: Band 1</li>
            <li>Below 50%: Not qualified for MET</li>
          </ul>

          <p className="mb-4">
            Your final band score is calculated using the following formula:
          </p>

          <div className="text-center mb-4 bg-gray-800 p-4 rounded">
            <BlockMath math="\frac{\left( \frac{M}{240} \times 100 \right) + \left( \frac{B}{10} \times 100 \right)}{2}" />
          </div>

          <p className="mb-4">
            Where M is your MET score (out of 240), and B is your board band
            (0-10).
            <br />
            The data used in this predictor has been compiled by polling
            students across various MET campuses, with careful verification to
            ensure accuracy.
          </p>

          <p className="mb-4">
            Using a mathematical concept called{" "}
            <a
              href="https://www.youtube.com/watch?v=MnEa_xHm1j8"
              className="underline hover:text-yellow-500 text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              polynomial regression
            </a>
            , we can find the ranks for values of various band scores.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              FAQs for the Rank Predictor
            </h3>
            <div className="space-y-6 text-base leading-relaxed">
              <div>
                <p className="font-semibold text-lg mb-2">
                  Q: How accurate is it?
                </p>
                <p className="mb-2">
                  <span className="font-semibold">A:</span> The predictions are
                  based on last year&rsquo;s data. So, if someone got the same
                  MET marks and board percentage as you last year, they
                  would&rsquo;ve received the same predicted rank.
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 mb-2 text-gray-300 space-y-1">
                  <li>
                    For the MET 2024 Rank Predictor, I used just 10 data points
                    from the 2020 results. After the actual results were out,
                    the average error was{" "}
                    <span className="font-semibold text-yellow-300">+1.5k</span>{" "}
                    (meaning the predictor showed a lower rank than people
                    actually got).
                  </li>
                </ul>
                <p className="font-semibold mt-2 mb-2">
                  Possible sources of inaccuracy:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
                  <li>
                    If the difficulty of the MET paper changes significantly
                    compared to last year.
                  </li>
                  <li>
                    If the number of students writing MET increases or decreases
                    a lot this year.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <METChart />
        </div>
      )}
    </div>
  );
};

export default HowItWorksDropdown;
