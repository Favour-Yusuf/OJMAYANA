import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/static/Header";
import Footer from "@/components/static/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const hev = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-hev",
});

export const metadata: Metadata = {
  title: "OJMAYANA STUDIOS",
  description: "Photography & Visual Narratives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hev.variable}  antialiased`}
      >
        <Header />
        {children}
        <SpeedInsights/>
        <Footer />
      </body>
    </html>
  );
}
