import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIT GPA Calculator",
  description:
    "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
  metadataBase: new URL("https://rankpredictor.in"),
  alternates: {
    canonical: "/gpaCalc",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MIT GPA Calculator",
    description:
      "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
    url: "https://rankpredictor.in/gpaCalc",
    siteName: "RankPredictor",
    images: [
      {
        url: "/gpa.png",
        width: 1628,
        height: 1472,
        alt: "MIT GPA Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT GPA Calculator",
    description:
      "Eager to know your MIT GPA? Our GPA calculator allows you to effortlessly predict your GPA, whichever semester it may be.",
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
