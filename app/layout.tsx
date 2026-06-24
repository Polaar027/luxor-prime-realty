import type { Metadata } from "next";
import "./globals.css";

// NOTE: next/font/google fetches from fonts.googleapis.com at build time,
// which is blocked in this sandbox's network allowlist. On your own machine
// (with normal internet access) swap back to:
//
//   import { Geist, Geist_Mono } from "next/font/google";
//   const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
//
// For now we use system fonts so the build/dev server runs without any
// external network dependency.

export const metadata: Metadata = {
  title: "Luxor Prime Realty | Premium Luxury Real Estate",
  description:
    "Luxor Prime Realty — exclusive luxury developments, curated for discerning investors and homeowners worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
