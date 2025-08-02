import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MET 2025 Rank Predictor",
  description: "Eager to know where you stand in the MET 2025 rankings? Our advanced MET 2025 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
  alternates: {
    canonical: "/met2025",
  },
  openGraph: {
    title: "MET 2025 Rank Predictor",
    description: "Eager to know where you stand in the MET 2025 rankings? Our advanced MET 2025 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    url: "https://rankpredictor.in/met2025",
    images: [
      {
        url: "/rankpredictor.png",
        width: 1200,
        height: 630,
        alt: "MET 2025 Rank Predictor",
      },
    ],
  },
  twitter: {
    title: "MET 2025 Rank Predictor",
    description: "Eager to know where you stand in the MET 2025 rankings? Our advanced MET 2025 Rank Predictor allows you to effortlessly estimate your rank using your MET score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    images: ["/rankpredictor.png"],
  },
};

export default function MET2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
