import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import METChart from "./METChart";

const HowItWorksDropdown = () => {
  return (
    <div className="mb-8">
      <details className="group">
        <summary className="flex w-full cursor-pointer items-center justify-between border-4 border-slate-600 bg-slate-950 px-6 py-4 text-left font-bold uppercase tracking-widest text-white transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-indigo-400 hover:text-slate-950 hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] shadow-[4px_4px_0px_#64748b]">
          <span>How does this work?</span>
          <span className="text-sm transition-transform duration-400 group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-800 ease-out group-open:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="space-y-6 border-4 border-t-0 border-slate-600 bg-slate-950 p-6 text-white opacity-0 transition-opacity duration-800 ease-out group-open:opacity-100">
              <p className="text-slate-200 font-bold leading-relaxed">
                In MET 2025, both entrance exam scores and board exam results
                are considered. To account for varying difficulty levels across
                different boards, board percentages are normalized into band
                scores from 0 to 10. This creates a &ldquo;fair&rdquo; system
                where your final score combines your MET performance with your
                standardized board exam band. Here&rsquo;s how board
                percentages are converted to bands:
              </p>

              <ul className="space-y-1 border-2 border-slate-600 bg-slate-900/60 p-4 text-sm font-bold text-slate-200">
                <li>95–100%: Band 10</li>
                <li>90–94.99%: Band 9</li>
                <li>85–89.99%: Band 8</li>
                <li>80–84.99%: Band 7</li>
                <li>...</li>
                <li>50–54.99%: Band 1</li>
                <li className="text-white">Below 50%: Not qualified for MET</li>
              </ul>

              <p className="text-slate-200 font-bold leading-relaxed">
                Your final band score is calculated using the following formula:
              </p>

              <div className="border-2 border-slate-600 bg-slate-900 p-4 text-center">
                <BlockMath math="\frac{\left( \frac{M}{240} \times 100 \right) + \left( \frac{B}{10} \times 100 \right)}{2}" />
              </div>

              <p className="text-slate-200 font-bold leading-relaxed">
                Where M is your MET score (out of 240), and B is your board
                band (0–10). The data used in this predictor has been compiled
                by polling students across various MET campuses, with careful
                verification to ensure accuracy.
              </p>

              <p className="text-slate-200 font-bold leading-relaxed">
                Using a mathematical concept called{" "}
                <a
                  href="https://www.youtube.com/watch?v=MnEa_xHm1j8"
                  className="px-1 underline transition-all hover:bg-indigo-400 hover:text-slate-950"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  polynomial regression
                </a>
                , we can find the ranks for values of various band scores.
              </p>

              <div className="space-y-4 border-t-4 border-rose-400 pt-6">
                <h3 className="text-xl font-bold uppercase tracking-wider">
                  <span className="bg-rose-400 px-2 py-1 text-slate-950">
                    FAQs
                  </span>{" "}
                  for the Rank Predictor
                </h3>

                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Q: How accurate is it?
                  </p>
                  <p className="font-bold leading-relaxed text-slate-200">
                    The predictions are based on last year&rsquo;s data. So, if
                    someone got the same MET marks and board percentage as you
                    last year, they would&rsquo;ve received the same predicted
                    rank.
                  </p>
                  <div className="border-2 border-dashed border-rose-400/70 bg-slate-900/50 p-4">
                    <p className="text-sm font-bold text-slate-200">
                      For the MET 2025 Rank Predictor, due to merging of the CS
                      branches and other factors, the average error was{" "}
                      <span className="bg-rose-400 px-1 font-bold text-slate-950">
                        +25%
                      </span>{" "}
                      (meaning the predictor showed a lower rank than people
                      actually got).
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest">
                    Possible sources of inaccuracy:
                  </p>
                  <ul className="space-y-1 border-2 border-slate-600 bg-slate-900/60 p-4 text-sm font-bold text-slate-200">
                    <li>
                      — If the difficulty of the MET paper changes significantly
                      compared to last year.
                    </li>
                    <li>
                      — If the number of students writing MET increases or
                      decreases a lot this year.
                    </li>
                  </ul>
                </div>
              </div>

              <METChart />
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default HowItWorksDropdown;
