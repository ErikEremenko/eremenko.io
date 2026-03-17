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
    "Personal website of Erik Eremenko — CS student at TUM, building prediction markets, simulations, and full-stack web apps.",
  openGraph: {
    title: "Erik Eremenko — Software Developer",
    description:
      "CS student at TUM. Building prediction markets, simulations, and full-stack web apps.",
    url: "https://eremenko.io",
    siteName: "Erik Eremenko",
    type: "website",
  },
  metadataBase: new URL("https://eremenko.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
