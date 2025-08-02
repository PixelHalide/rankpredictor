
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RankPredictor - Exam Rank Predictors",
  description: "Eager to know where you stand in your 2025 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "2025 Exam Rank Predictors",
    description: "Eager to know where you stand in your 2025 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
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
    title: "2025 Exam Rank Predictors",
    description: "Eager to know where you stand in your 2025 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    images: ["/home.png"],
  },
};

export default function Home() {
  return (
    <div>
        <div className="max-w px-10 md:px-30 text-justify space-y-8">
            <section className="space-y-2">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-gray-300">After encountering numerous &ldquo;rank predictors&rdquo; on the internet that ask for your marks along with personal data like your phone number and name—only to farm and sell this information, as well as &ldquo;coaches&rdquo; and &ldquo;bhaiyas&rdquo; on Youtube spreading misinformation - we felt frustrated. Students lacked a legitimate way to predict and calculate their ranks. This frustration led to the creation of RankPredictor, a website that allows you to predict your rank for various exams with no nonsense.</p>
            </section>

            <section className="space-y-2">
            <h2 className="text-2xl font-bold">Our Methodology</h2>
            <p className="text-gray-300">We gather verified and accurate data from past exam results to ensure our predictions are reliable. Using various mathematical methods, such as polynomial regression, we aim to provide the most accurate rank predictions possible. Detailed explanations of our rank prediction process for each exam are available in the &ldquo;How does this work?&rdquo; section within each exam&rsquo;s predictor, complete with graphs and datasets for transparency and scrutiny.</p>
            </section>

            <section className="space-y-2">
            <h2 className="text-2xl font-bold">Contact and License</h2>
            <p className="text-gray-300">You can reach out to us on Discord for any further queries. You can DM <a href="https://discord.com/users/180399116327714816" target="_blank" className="text-white hover:text-yellow-500 transition-all">@pixelhalide</a> for queries regarding MIT, MET, or the website.</p>
            <p className="text-gray-300">All our code and data are open-source under the GPL-3 license, allowing you to freely use, modify, and share them - provided that derivative works are also shared under the same license terms.</p>
            </section>
        </div>
    </div>
  );
}
