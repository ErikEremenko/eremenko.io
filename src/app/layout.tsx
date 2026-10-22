import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const head = Schibsted_Grotesk({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Erik Eremenko",
  description:
    "Erik Eremenko builds and runs software with AI coding agents: co-founder of PolySimulator, working student in applied AI at ING Deutschland, student at TU Munich.",
  keywords: [
    "Erik Eremenko",
    "software developer",
    "TU Munich",
    "prediction markets",
    "PolySimulator",
    "full-stack developer",
    "C++",
    "TypeScript",
    "Python",
    "molecular dynamics",
    "AI coding agents",
    "Claude Code",
    "computer science",
  ],
  authors: [{ name: "Erik Eremenko", url: "https://eremenko.io" }],
  creator: "Erik Eremenko",
  metadataBase: new URL("https://eremenko.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Erik Eremenko — Software Developer",
    description:
      "Building and running software with AI coding agents. Co-founder of PolySimulator, student at TU Munich.",
    url: "https://eremenko.io",
    siteName: "Erik Eremenko",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Erik Eremenko — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Eremenko — Software Developer",
    description:
      "Building and running software with AI coding agents. Co-founder of PolySimulator, student at TU Munich.",
    images: ["/og.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://eremenko.io/#website",
      url: "https://eremenko.io",
      name: "Erik Eremenko",
      description:
        "Erik Eremenko builds and runs software with AI coding agents: co-founder of PolySimulator, working student in applied AI at ING Deutschland, student at TU Munich.",
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://eremenko.io/#profilepage",
      url: "https://eremenko.io",
      name: "Erik Eremenko — Software Developer",
      isPartOf: { "@id": "https://eremenko.io/#website" },
      mainEntity: { "@id": "https://eremenko.io/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://eremenko.io/#person",
      name: "Erik Eremenko",
      url: "https://eremenko.io",
      image: "https://eremenko.io/img/erik.jpg",
      email: "erik@eremenko.io",
      jobTitle: "Software Developer",
      description:
        "Information Systems student at TU Munich and co-founder of PolySimulator, a paper-trading simulator for Polymarket built and run with AI coding agents.",
      knowsAbout: [
        "Python",
        "C++",
        "TypeScript",
        "Next.js",
        "React",
        "FastAPI",
        "Docker",
        "AWS",
        "Prediction Markets",
        "Molecular Dynamics",
        "AI Coding Agents",
        "Claude Code",
        "Codex",
      ],
      knowsLanguage: ["German", "English", "Russian", "French"],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Technical University of Munich",
        url: "https://www.tum.de",
      },
      sameAs: [
        "https://github.com/ErikEremenko",
        "https://www.linkedin.com/in/erik-eremenko-a225a625a/",
        "https://www.kaggle.com/erikeremenko",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
