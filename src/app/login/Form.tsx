"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center mt-20">
      <form
        className="flex flex-col gap-5 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-medium">Login</h1>
        <div className="flex flex-col">
          <label>E-mail</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("password")}
          />
        </div>
        <div>
          <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
            Login
          </button>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <hr className="w-full bg-white" />
            <span className="px-2">or</span>
            <hr className="w-full bg-white" />
          </div>
          <div className="mt-5">
            <Link href={"/register"}>
              <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
                Register
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
