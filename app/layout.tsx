import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const cormorantGaramondItalic = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Search your favorite traditional snacks | KlikRasa",
  description: "Made by KlikRasa Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${cormorantGaramondItalic.variable} antialiased relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
