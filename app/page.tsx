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
    <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12 pb-12">
      <div className="border-4 border-white p-6 md:p-10 shadow-[8px_8px_0px_white] bg-black text-white space-y-12">
        <section className="space-y-4 border-b-4 border-white pb-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider bg-white text-black inline-block px-2 py-1 mb-2">About</h2>
          <p className="text-gray-300 font-bold leading-relaxed">
            After encountering numerous &ldquo;rank predictors&rdquo; on the
            internet that ask for your marks along with personal data like your
            phone number and name—only to farm and sell this information, as
            well as &ldquo;coaches&rdquo; and &ldquo;bhaiyas&rdquo; on Youtube
            spreading misinformation - we felt frustrated. Students lacked a
            legitimate way to predict and calculate their ranks. This
            frustration led to the creation of RankPredictor, a website that
            allows you to predict your rank for various exams with no nonsense.
          </p>
        </section>

        <section className="space-y-4 border-b-4 border-white pb-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider bg-white text-black inline-block px-2 py-1 mb-2">Our Track Record</h2>
          <p className="text-gray-300 font-bold leading-relaxed">
            We have a proven history of providing reliable predictions. To date,
            we have delivered rank predictors for:
          </p>
          <ul className="font-bold text-gray-300 space-y-1 border-2 border-white p-4">
            <li>— KCET 2024</li>
            <li>— MET 2024</li>
            <li>— MET 2025</li>
          </ul>
        </section>

        <section className="space-y-4 border-b-4 border-white pb-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider bg-white text-black inline-block px-2 py-1 mb-2">Our Methodology</h2>
          <p className="text-gray-300 font-bold leading-relaxed">
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

        <section className="space-y-4">
          <h2 className="text-3xl font-bold uppercase tracking-wider bg-white text-black inline-block px-2 py-1 mb-2">Contact & License</h2>
          <div className="text-gray-300 font-bold leading-relaxed space-y-4">
            <p>
              You can reach out to us on Discord for any further queries. You can
              DM{" "}
              <a
                href="https://discord.com/users/180399116327714816"
                target="_blank"
                className="underline hover:bg-white hover:text-black px-1"
              >
                @pixelhalide
              </a>{" "}
              for queries regarding MIT, MET, or the website. Do make sure to join
              the{" "}
              <a
                href="https://discord.gg/2mYN8aDPur"
                target="_blank"
                className="underline hover:bg-white hover:text-black px-1 text-yellow-400 hover:text-black"
              >
                MIT Manipal & MET Discord
              </a>
            </p>
            <p className="border-2 border-dashed border-gray-500 p-4 mt-4">
              All our code and data are open-source under the GPL-3 license,
              allowing you to freely use, modify, and share them, provided that
              derivative works are also shared under the same license terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
