import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Ahmed Nawar Portfolio",
  description: "Ahmed Nawar's Portfolio",
  icons: {
    icon: "/images/ahmed.jpg",
  },
  openGraph: {
    title: "Ahmed Nawar Portfolio",
    description: "Welcome to my personal portfolio website.",
    images: [
      {
        url: "/images/ahmed.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Nawar Portfolio",
      },
    ],
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
        className={`${poppins.className} antialiased bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden relative`}
      >
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
