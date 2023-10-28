import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 h-12 bg-zinc-950 shadow-[0_1px_rgba(211,237,248,0.11)] z-50 text-zinc-400">
        <div className="flex justify-between px-4 items-center h-full">
          <div>
            <Link href={"/"}>
              <h1 className="text-lg font-bold text-white">DeathBet</h1>
            </Link>
          </div>
          <div>
            <ul className="flex flex-row gap-5">
              <ListElement href={"/"}>Make a bet</ListElement>
              <ListElement href={"/"}>Login</ListElement>
            </ul>
          </div>
        </div>
      </div>
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
    <>
      <li className="hover:bg-neutral-800 hover:text-white rounded-md py-1 px-2 text-sm duration-100 cursor-pointer">
        <Link href={href}>{children}</Link>
      </li>
    </>
  );
};

export default Navbar;
