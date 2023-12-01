"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "src/api/user-service/register";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    const result = await registerUser(data);
    setLoading(false);
    console.log(result);
    router.push("/login"); //Todo Maybe you should just get logged in when you register and get pushed to the profile page
  };

  return (
    <div className="w-full flex justify-center mt-32">
      <form
        className="flex flex-col gap-5 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-medium">Register</h1>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("username", {
              required: true,
            })}
          />
        </div>
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
            type="password"
            className="h-10 rounded text-black indent-2"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div>
          <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
