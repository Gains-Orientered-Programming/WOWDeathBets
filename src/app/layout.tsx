import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "src/components/main-nav";
import Footer from "src/components/main-footer";

export const metadata: Metadata = {
  title: "DeathBets",
  description: "DeathBets go gamle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-neutral-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
