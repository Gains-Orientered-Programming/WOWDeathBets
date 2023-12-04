import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "src/components/main-footer";
import Script from "next/script";
import Navbar from "src/components/main-nav-tsx/main-nav";
import { Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const raleway = Raleway({ subsets: ["latin"] });

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
        <Script strategy="afterInteractive">
          {`const whTooltips = {colorLinks: true};`}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://wow.zamimg.com/js/tooltips.js"
        ></Script>
      </head>
      <body className=" bg-backgrond text-white">
        <NextTopLoader color="#f0e9c2" showSpinner={false} />
        <main className={raleway.className}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="relative flex flex-grow">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
