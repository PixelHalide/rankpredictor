import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RankPredictor - Exam Rank Predictors",
  description:
    "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "2026 Exam Rank Predictors",
    description:
      "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    url: "https://rankpredictor.in",
    images: [
      {
        url: "/home.png",
        width: 1424,
        height: 452,
        alt: "RankPredictor - Exam Rank Predictors",
      },
    ],
  },
  twitter: {
    title: "2026 Exam Rank Predictors",
    description:
      "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    images: ["/home.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950/90">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12 pb-12">
        <div className="border-4 border-slate-600 p-6 md:p-10 shadow-[8px_8px_0px_#64748b] bg-slate-950/90 text-white space-y-12">
          <section className="space-y-4 border-b-4 border-slate-600 pb-8">
            <h2 className="text-3xl font-bold uppercase tracking-wider bg-indigo-400 text-slate-950 inline-block px-2 py-1 mb-2">
              About
            </h2>
            <p className="text-slate-200 font-bold leading-relaxed">
              After encountering numerous &ldquo;rank predictors&rdquo; on the
              internet that ask for your marks along with personal data like
              your phone number and name—only to farm and sell this information,
              as well as &ldquo;coaches&rdquo; and &ldquo;bhaiyas&rdquo; on
              Youtube spreading misinformation - we felt frustrated. Students
              lacked a legitimate way to predict and calculate their ranks. This
              frustration led to the creation of RankPredictor, a website that
              allows you to predict your rank for various exams with no
              nonsense.
            </p>
          </section>

          <section className="space-y-4 border-b-4 border-rose-400 pb-8">
            <h2 className="text-3xl font-bold uppercase tracking-wider bg-rose-400 text-slate-950 inline-block px-2 py-1 mb-2">
              Our Track Record
            </h2>
            <p className="text-slate-200 font-bold leading-relaxed">
              We have a proven history of providing reliable predictions. To
              date, we have delivered rank predictors for:
            </p>
            <ul className="font-bold text-slate-200 space-y-1 border-2 border-rose-400 bg-slate-900/70 p-4">
              <li>— KCET 2024</li>
              <li>— MET 2024</li>
              <li>— MET 2025</li>
            </ul>
          </section>

          <section className="space-y-4 border-b-4 border-yellow-300 pb-8">
            <h2 className="text-3xl font-bold uppercase tracking-wider bg-yellow-300 text-slate-950 inline-block px-2 py-1 mb-2">
              Our Methodology
            </h2>
            <p className="text-slate-200 font-bold leading-relaxed">
              We gather verified and accurate data from past exam results to
              ensure our predictions are reliable. Using various mathematical
              methods, such as polynomial regression, we aim to provide the most
              accurate rank predictions possible. Detailed explanations of our
              rank prediction process for each exam are available in the
              &ldquo;How does this work?&rdquo; section within each exam&rsquo;s
              predictor, complete with graphs and datasets for transparency and
              scrutiny.
            </p>
          </section>

          <section className="space-y-3 border-b-4 border-slate-600 pb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider bg-slate-300 text-slate-950 inline-block px-2 py-1">
              Credits
            </h2>
            <ul className="font-bold text-slate-200 space-y-2 border-2 border-slate-600 bg-slate-900/70 p-4">
              <li>
                MET rank predictor support:{" "}
                <a
                  href="https://pranavu.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-slate-950 px-1 py-1 mx-1 hover:bg-rose-400 transition-colors"
                >
                  Pranav U
                </a>
              </li>
              <li>
                Site design support:{" "}
                <a
                  href="https://aadit.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-slate-950 px-1 py-1 mx-1 hover:bg-rose-400 transition-colors"
                >
                  Sherlock (Aadit Agrawal)
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-wider bg-emerald-300 text-slate-950 inline-block px-2 py-1 mb-2">
              Contact & License
            </h2>
            <div className="text-slate-200 font-bold leading-relaxed space-y-4">
              <p>
                You can reach out to us on Discord for any further queries. You
                can DM{" "}
                <a
                  href="https://discord.com/users/180399116327714816"
                  target="_blank"
                  className="underline hover:bg-indigo-400 hover:text-slate-950 px-1"
                >
                  @pixelhalide
                </a>{" "}
                for queries regarding MIT, MET, or the website. Do make sure to
                join the{" "}
                <a
                  href="https://discord.gg/2mYN8aDPur"
                  target="_blank"
                  className="underline hover:bg-yellow-300 hover:text-slate-950 px-1 text-yellow-300 transition-all"
                >
                  MIT Manipal & MET Discord
                </a>
              </p>
              <p className="border-2 border-dashed border-slate-500/70 p-4 mt-4 bg-slate-900/60">
                All our code and data are open-source under the GPL-3 license,
                allowing you to freely use, modify, and share them, provided
                that derivative works are also shared under the same license
                terms.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
