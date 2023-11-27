"use client";

import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="w-full flex justify-center mt-32">
      <form
        className="flex flex-col gap-5 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-medium">Register</h1>
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
        <div className="flex flex-col">
          <label>Confirm Password</label>
          <input
            type="password"
            className="h-10 rounded text-black indent-2"
            {...register("confirmPassword", {
              required: true,
              validate: (value: string) => {
                if (watch("password") != value) {
                  return "Your passwords do not match";
                }
              },
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
