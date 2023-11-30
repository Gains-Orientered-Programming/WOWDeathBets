"use client";

import Link from "next/link";
import { useUserStore } from "src/store/user.store";

const NavbarButton = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-row items-center gap-2">
      {!user?.username ? (
        <ListElement href={"/login"}>Login</ListElement>
      ) : (
        <ListElement href={"/profile"}>{user.username}</ListElement>
      )}
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

export default NavbarButton;
