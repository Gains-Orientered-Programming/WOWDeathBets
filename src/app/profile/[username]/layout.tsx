import type { Metadata } from "next";

import Nav from "./Nav";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeathBets",
  description: "DeathBets go gamble",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {username:string}
}) {
  return (
            <div className="flex justify-center w-full">
                <div className="flex flex-row gap-24 mt-24">
                    <div>
                        <Nav username = {params.username}/>
                    </div>
                    <div>
                        {children}

                    </div>
                </div>
            </div>
  );
}
