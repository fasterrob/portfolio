// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";
import MotionWrapper from "@/components/MotionWrapper"; // Client-side animation wrapper
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ธัชนิน มูลผล | Full-Stack Developer",
  description:
    "Hi, I&apos;m ธัชนิน มูลผล (ตีตี้) — an IT student passionate about full-stack development.",
  authors: [{ name: "Tatchanin Moonphon" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-gradient-to-br from-[#1a1a2e] to-[#16213e] min-h-screen text-white`}
      >
        <MotionWrapper>{children}</MotionWrapper>
        <Sidebar />
        <SpeedInsights />
      </body>
    </html>
  );
}
