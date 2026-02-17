import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MET 2026 Rank Predictor",
  description:
    "Eager to know where you stand in the MET 2026 rankings? Our advanced MET 2026 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
  metadataBase: new URL("https://rankpredictor.in"),
  alternates: {
    canonical: "/met2026",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MET 2026 Rank Predictor",
    description:
      "Eager to know where you stand in the MET 2026 rankings? Our advanced MET 2026 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    url: "https://rankpredictor.in/met2026",
    siteName: "RankPredictor",
    images: [
      {
        url: "/rankPredictor.png",
        width: 1200,
        height: 630,
        alt: "MET 2026 Rank Predictor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MET 2026 Rank Predictor",
    description:
      "Eager to know where you stand in the MET 2026 rankings? Our advanced MET 2026 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    images: ["/rankPredictor.png"],
  },
};

export default function MET2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
