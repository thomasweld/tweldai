import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Weld | AI Automation & Fractional CTO",
  description: "Senior Software Engineer and AI Consultant helping you grow your revenue with AI automations for sales, marketing, and customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col pt-[72px] selection:bg-neutral-800 selection:text-white`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
