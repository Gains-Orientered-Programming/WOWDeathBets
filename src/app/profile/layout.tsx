import type { Metadata } from "next";

import Nav from "./Nav";
import { Raleway } from "next/font/google";

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
            <div className="flex flex-row">
            <div>
               <Nav></Nav> 
            </div>
            <div>{children}</div>
            </div>
  );
}
