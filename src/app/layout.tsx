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
      path: "./fonts/NeueMachina-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.otf",
      weight: "900",
      style: "normal",
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
