"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createBetting } from "src/api/betting-services";
import { useRouter } from "next/navigation";
import { useUserStore } from "src/store/user.store";
type Inputs = {
  characterName: string;
  region: string;
  realm: string;
  amount: number;
};

const Form = ({
  characterData,
  payout,
}: {
  characterData: { characterName: string; realm: string; region: string };
  payout: number;
}) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      characterName: characterData.characterName,
      realm: characterData.realm,
      region: characterData.region,
    },
  });
  const user = useUserStore((state) => state.user);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await createBetting({ userId: user?.userId ?? "0", ...data });
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <form
        className="flex flex-col gap-5 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-medium">Make a bet</h1>
        <div className="flex flex-col">
          <label>Character Name</label>
          <input
            readOnly
            className="h-10 rounded text-black indent-2 bg-neutral-200"
            {...register("characterName")}
          />
        </div>
        <div className="flex flex-col">
          <label>Region</label>
          <input
            readOnly
            className="h-10 indent-2 rounded text-black bg-neutral-200"
            {...register("region")}
          />
        </div>
        <div className="flex flex-col">
          <label>Realm</label>
          <input
            readOnly
            className="h-10 rounded text-black indent-2 bg-neutral-200"
            {...register("realm")}
          />
        </div>
        <div className="flex flex-col">
          <label>Amount</label>
          <input
            type="number"
            className="h-10 rounded text-black indent-2"
            {...register("amount")}
          />
        </div>
        <div>
          <div>
            <span className="font-medium">Payout</span>: {payout}
          </div>
          <div>
            <span className="font-medium">Winning Amount</span>:{" "}
            {(watch("amount") * payout).toFixed(2)}
          </div>
        </div>
        <div>
          <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
            {loading ? "Loading..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
