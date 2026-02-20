import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "@/components/Navbar";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: {
    default: "RankPredictor - Exam Rank Predictors",
    template: "%s | RankPredictor",
  },
  description:
    "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
  keywords: [
    "rank predictor",
    "MET 2026",
    "MIT GPA calculator",
    "exam rank",
    "engineering admission",
    "CSE",
    "ECE",
    "MIT",
    "MET",
  ],
  authors: [
    { name: "druwn", url: "https://github.com/druwn" },
    { name: "Pixel", url: "https://github.com/PixelHalide" },
  ],
  creator: "RankPredictor Team",
  publisher: "RankPredictor",
  metadataBase: new URL("https://rankpredictor.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankpredictor.in",
    title: "2026 Exam Rank Predictors",
    description:
      "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    siteName: "RankPredictor",
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
    card: "summary_large_image",
    title: "2026 Exam Rank Predictors",
    description:
      "Eager to know where you stand in your 2026 exam rankings? Our advanced Rank Predictor allows you to effortlessly estimate your rank using your score. Discover which branches you qualify for, including sought-after fields like CSE, ECE, and many more. Get a head start on your future by understanding your potential academic opportunities today!",
    images: ["/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-NQYHBHJ3MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#06070a] text-white font-mono">
        <GoogleAnalytics gaId="G-NQYHBHJ3MX" />
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
