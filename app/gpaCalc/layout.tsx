import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIT GPA Calculator",
  description: "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
  alternates: {
    canonical: "/gpaCalc",
  },
  openGraph: {
    title: "MIT GPA Calculator",
    description: "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
    url: "https://rankpredictor.in/gpaCalc",
    images: [
      {
        url: "/gpa.png",
        width: 1200,
        height: 630,
        alt: "MIT GPA Calculator",
      },
    ],
  },
  twitter: {
    title: "MIT GPA Calculator",
    description: "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
    images: ["/gpa.png"],
  },
};

export default function GPACalcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
