"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  characterName: string;
};

const Navbar = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/characters/eu/nekrosh/${data.characterName}`);
    reset();
  };

  return (
    <>
      <div className="sticky top-0 h-12 bg-zinc-950 shadow-[0_1px_rgba(211,237,248,0.11)] z-50 text-zinc-400">
        <div className="flex justify-between px-4 items-center h-full">
          <div>
            <Link href={"/"}>
              <h1 className="text-lg font-bold text-white">DeathBet</h1>
            </Link>
          </div>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row bg-neutral-800 rounded-md">
                  <input
                    {...register("characterName", { required: true })}
                    className="rounded-md outline-none bg-neutral-800 h-9 text-white indent-2 text-sm"
                    placeholder="Search Characters"
                  />
                  <button
                    type={"submit"}
                    className="flex items-center p-2 hover:bg-zinc-700 cursor-pointer rounded-r-md"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
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
