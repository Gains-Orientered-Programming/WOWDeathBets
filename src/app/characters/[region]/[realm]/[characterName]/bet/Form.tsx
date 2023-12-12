"use client";

import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createBetting } from "src/api/betting-services";
import { useToast } from "src/components/ui/Toast/use-toast";
import { useUserStore } from "src/store/user.store";
import { MutationFunctionOptions, gql, useMutation } from "@apollo/client";

type Inputs = {
  characterName: string;
  region: string;
  realm: string;
  amount: number;
};

interface CreateBettingInput extends Inputs {
  userId: string;
}

interface CreateBettingResponse {
  createBetting: {
    id: string;
    userId: string;
    characterName: string;
    realm: string;
    region: string;
    amount: number;
  };
}

const CREATE_BETTING_MUTATION = gql`
  mutation CreateBetting(
    $userId: String
    $characterName: String
    $realm: String
    $region: String
    $amount: Int
  ) {
    createBetting(
      userId: $userId
      characterName: $characterName
      realm: $realm
      region: $region
      amount: $amount
    ) {
      id
      characterName
      realm
      region
      amount
    }
  }
`;

const Form = ({
  characterData,
  payout,
}: {
  characterData: { characterName: string; realm: string; region: string };
  payout: number;
}) => {
  const { toast } = useToast();
  const user = useUserStore((state) => state.user);
  const [createBetting, { data, loading, error }] = useMutation<
    CreateBettingResponse,
    CreateBettingInput
  >(CREATE_BETTING_MUTATION);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const bettingInput: MutationFunctionOptions<
        CreateBettingResponse,
        CreateBettingInput
      > = {
        variables: {
          userId: user?._id ?? "null",
          characterName: data.characterName,
          realm: data.realm,
          region: data.region,
          amount: Math.floor(data.amount),
        },
      };
      await createBetting(bettingInput);
      toast({
        title: "Success",
        description: "Bet created",
      });
    } catch (error) {
      console.log("Error creating betting", error);
      toast({
        title: "Error",
        description: "Error creating betting",
      });
    }
  };

  return (
    <>
      {data ? (
        <SuccessPage submittedBet={data} />
      ) : (
        <BetPage
          characterData={characterData}
          payout={payout}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

const SuccessPage = ({
  submittedBet,
}: {
  submittedBet: CreateBettingResponse;
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div>
        <h1 className="text-3xl">Success!</h1>
      </div>
      <div>
        <span className="font-medium text-lg">Recipt</span>
        <div className="bg-neutral-800 rounded w-96 h-96 p-10 flex flex-col gap-5">
          <div>
            <span>ID: </span>
            <span>{submittedBet.createBetting.id}</span>
          </div>
          <div>
            <span>Character Name: </span>
            <span>{submittedBet.createBetting.characterName}</span>
          </div>
          <div>
            <span>Realm: </span>
            <span>{submittedBet.createBetting.realm}</span>
          </div>
          <div>
            <span>Region: </span>
            <span>{submittedBet.createBetting.region}</span>
          </div>
          <div>
            <span>Amount: </span>
            <span>{submittedBet.createBetting.amount}</span>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link href={"/"}>
            <button className="bg-zinc-950 w-28 h-10 rounded-sm text-zinc-400 hover:text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BetPage = ({
  characterData,
  payout,
  onSubmit,
}: {
  characterData: { characterName: string; realm: string; region: string };
  payout: number;
  onSubmit: SubmitHandler<Inputs>;
}) => {
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      characterName: characterData.characterName,
      realm: characterData.realm,
      region: characterData.region,
    },
  });

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
        <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
