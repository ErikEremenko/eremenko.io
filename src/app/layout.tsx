import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erik Eremenko — Software Developer",
  description:
    "Personal website of Erik Eremenko — CS student at TUM, building prediction markets, HPC simulations, and full-stack web apps.",
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
    "AI-assisted development",
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
      "CS student at TUM. Building prediction markets, HPC simulations, and full-stack web apps.",
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
      "CS student at TUM. Building prediction markets, HPC simulations, and full-stack web apps.",
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
        "Personal website of Erik Eremenko — CS student at TUM, building prediction markets, HPC simulations, and full-stack web apps.",
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
      email: "erik.eremenko@tum.de",
      jobTitle: "Software Developer",
      description:
        "Computer Science student at TU Munich (minor in Mathematics). Co-founder of PolySimulator, building prediction markets, HPC simulations, and full-stack web applications.",
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
        "AI-Assisted Development",
        "GitHub Copilot",
      ],
      knowsLanguage: ["German", "English", "Russian", "French"],
      alumniOf: {
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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
