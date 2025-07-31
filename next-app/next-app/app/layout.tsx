import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "Rank Predictor - MET & KCET Rank Prediction",
  description: "Predict your MET 2025 and KCET ranks based on your exam scores. Calculate GPA for MIT courses.",
  keywords: "MET rank predictor, KCET rank predictor, MIT GPA calculator, engineering entrance exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body className="bg-black text-white font-mono">
        {children}
      </body>
    </html>
  );
}
