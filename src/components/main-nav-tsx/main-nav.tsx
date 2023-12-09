import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getServers } from "src/api/blizzard-service/servers";
import NavbarButton from "./Button";
import SearchBar from "../ui/Combobox";

const Navbar = async () => {
  const euServers = await getServers({ region: "eu" });
  const usServers = await getServers({ region: "us" });

  const allServers = {
    eu: euServers,
    us: usServers,
  };

  return (
    <div className="sticky top-0 h-14 bg-zinc-950 shadow-[0_1px_rgba(211,237,248,0.11)] z-50 text-zinc-400">
      <div className="flex justify-between px-4 items-center h-full">
        <Link href={"/"}>
          <div className="flex flex-row items-center">
            <Image src={"/logo.png"} alt="logo" width={48} height={4} />
            <h1 className="text-lg font-bold text-white">DeathBets</h1>
          </div>
        </Link>
        <div className="h-full">
          <ul className="flex flex-row gap-5 h-full items-center">
            <NavbarButton />
            <SearchBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

const ListElement = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="hover:bg-neutral-800 hover:text-white rounded-md py-2 px-4 text-sm duration-100 cursor-pointer">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default Navbar;
