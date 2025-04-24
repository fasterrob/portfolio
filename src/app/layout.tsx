import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from '@/components/Sidebar'
import "../styles/globals.css";

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
  description: "Hi, I\'m ธัชนิน มูลผล (ตีตี้) — an IT student passionate about full-stack development.",
  authors: [{ name: 'Tatchanin Moonphon' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <main className="flex-1 p-6 mr-50">{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
