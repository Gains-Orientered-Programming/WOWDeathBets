import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="h-56 bg-zinc-950 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1136px] block">
          <section>
            <footer className="grid grid-cols-4 pb-[calc(64px * 1)] gap-y-[calc(12px * 1)] gap-x-[calc(40px * 1)] auto-cols-auto">
              <div className="text-zinc-400">
                <Link className="block no-underline outline-0 " href={"/"}>
                  <div className="inline-flex items-center">
                    <Image src={"/logo.png"} alt="logo" width={40} height={4} />
                    Deathbets
                  </div>
                </Link>
                <div>
                  <h6>
                    A project by{" "}
                    <Link
                      className="text-white"
                      href={"https://github.com/Gains-Orientered-Programming"}
                    >
                      OOP
                    </Link>
                  </h6>
                </div>
              </div>
              <div>
                <h6 className="font-bold text-lg mb-2">Products</h6>
                <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-lg mb-2">Products</h6>
                <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-lg mb-2">Products</h6>
                <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                  <ListElement href="/">make a bet</ListElement>
                </ul>
              </div>
            </footer>
          </section>
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
      <li className="hover:underline">
        <Link href={href}>{children}</Link>
      </li>
    </>
  );
};

export default Footer;
