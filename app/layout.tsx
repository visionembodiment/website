import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Embodiment - Transform Your Vision Into Reality",
  description: "Professional coaching and spiritual guidance with Alina Rain. Offering Mind Games Reading, One-to-One Coaching, and Archetypal Tarot sessions.",
  keywords: "coaching, spiritual guidance, tarot reading, embodiment coaching, personal transformation",
  authors: [{ name: "Alina Rain" }],
  openGraph: {
    title: "Vision Embodiment - Transform Your Vision Into Reality",
    description: "Professional coaching and spiritual guidance with Alina Rain",
    type: "website",
    locale: "en_US",
    siteName: "Vision Embodiment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
