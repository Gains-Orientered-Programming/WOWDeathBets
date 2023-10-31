"use client";

import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Dropdown from "../Dropdown";
import { SelectGroup, SelectItem } from "../Dropdown/Dropdown";
import { Realm } from "src/types/blizzard/server.t";

type Inputs = {
  characterName: string;
  region: string;
  realm: string;
};

type Props = {
  eu: Realm[];
  us: Realm[];
};

const NavbarInput = ({ realms }: { realms: Props }) => {
  const router = useRouter();
  const { register, handleSubmit, reset, control } = useForm<Inputs>({
    defaultValues: {
      region: "eu",
      realm: "nekrosh",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/characters/${data.region}/nekrosh/${data.characterName}`);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row bg-neutral-800 rounded-md">
          <Controller
            control={control}
            name="region"
            render={({ field }) => {
              return (
                <Dropdown {...field}>
                  <SelectItem value="eu">eu</SelectItem>
                  <SelectItem value="us">us</SelectItem>
                  <SelectItem value="kr">kr</SelectItem>
                  <SelectItem value="tw">tw</SelectItem>
                  <SelectItem value="cn">cn</SelectItem>
                </Dropdown>
              );
            }}
          ></Controller>
          <Controller
            control={control}
            name="realm"
            render={({ field }) => {
              return (
                <Dropdown {...field}>
                  <SelectGroup content={"eu"}>
                    {realms.eu.map((realm) => (
                      <SelectItem key={realm.slug} value={realm.slug}>
                        {realm.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup content={"us"}>
                    {realms.us.map((realm) => (
                      <SelectItem key={realm.slug} value={realm.slug}>
                        {realm.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </Dropdown>
              );
            }}
          ></Controller>
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
    </>
  );
};

export default NavbarInput;
