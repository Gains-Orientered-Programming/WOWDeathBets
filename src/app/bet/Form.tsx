"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  characterName: string;
  region: string;
  realm: string;
  amount: number;
};

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            className="h-10 rounded text-black indent-2"
            {...register("characterName")}
          />
        </div>
        <div className="flex flex-col">
          <label>Region</label>
          <input
            className="h-10 indent-2 rounded text-black"
            {...register("region")}
          />
        </div>
        <div className="flex flex-col">
          <label>Realm</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("realm")}
          />
        </div>
        <div className="flex flex-col">
          <label>Amount</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("amount")}
          />
        </div>
        <div>
          <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
