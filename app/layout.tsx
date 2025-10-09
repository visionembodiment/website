import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
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
      <head>
        {/* Disable scroll restoration to prevent conflicts with animated sticky header.
            The header's translateY state would not match restored scroll position,
            causing visual inconsistencies. Users will start at top on refresh. */}
        <script dangerouslySetInnerHTML={{
          __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }`
        }} />
        <link
          rel="preload"
          as="image"
          href="/images/hero-background-poster-mobile.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-background-poster.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
