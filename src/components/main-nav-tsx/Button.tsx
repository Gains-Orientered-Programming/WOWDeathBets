"use client";

import Link from "next/link";
import { useUserStore } from "src/store/user.store";

const NavbarButton = () => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      {!user?.username ? (
        <ListElement href={"/login"}>Login</ListElement>
      ) : (
        <ListElement href={"/profile"}>{user.username}</ListElement>
      )}
    </>
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
    <Link href={href}>
      <li className="hover:bg-neutral-800 hover:text-white rounded-md py-2 px-4 text-sm duration-100 cursor-pointer">
        {children}
      </li>
    </Link>
  );
};

export default NavbarButton;
