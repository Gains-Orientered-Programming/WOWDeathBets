import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getServers } from "src/api/services/servers";
import NavbarInput from "./Input";

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
          <ul className="flex flex-row gap-7 h-full items-center">
            <div className="flex flex-row items-center gap-2">
              <ListElement href={"/"}>Make a bet</ListElement>
              <ListElement
                href={
                  "https://eu.battle.net/oauth/authorize?response_type=code&client_id=5f16fcf010554bd28b61f5614babd0d3&redirect_uri=http://127.0.0.1:3000/&scope=wow.profile"
                }
              >
                Login
              </ListElement>
            </div>
            <NavbarInput realms={allServers} />
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
    <>
      <li className="hover:bg-neutral-800 hover:text-white rounded-md py-1 px-2 text-sm duration-100 cursor-pointer">
        <Link href={href}>{children}</Link>
      </li>
    </>
  );
};

export default Navbar;
