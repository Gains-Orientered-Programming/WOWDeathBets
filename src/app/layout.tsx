import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "src/components/main-nav";
import Footer from "src/components/main-footer";
import Head from "next/head";

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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other meta tags and links as needed */}
      </Head>
      <body className="bg-zinc-900 text-white">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="relative flex flex-grow">{children}</div>
        </div>
        <Footer />
        {/* You can include your JavaScript here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true };
              // Add other JavaScript code here
            `,
          }}
        />
        <script src="https://wow.zamimg.com/js/tooltips.js"></script>
      </body>
    </html>
  );
}
