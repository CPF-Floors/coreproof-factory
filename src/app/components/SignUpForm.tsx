"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

export default function App() {
  interface IFormInput {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-lvh w-100">
      <form
        className="flex flex-col text-center justify-center bg-white sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="bg-white text-start my-2" htmlFor="">
          NAME
        </label>
        <input
          className="p-5 mb-5"
          placeholder=""
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid e-mail",
            },
          })}
        />
        <label className="bg-white text-start my-2" htmlFor="">
          EMAIL
        </label>
        <input
          className="p-5 mb-5"
          placeholder="example@mail.com"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid e-mail",
            },
          })}
        />
        {errors.email && (
          <p className="text-start mb-5 text-red-600 bg-white">
            {errors.email.message}
          </p>
        )}
        <label className="bg-white text-start my-2" htmlFor="">
          PASSWORD
        </label>
        <input
          type="password"
          className="p-5 mb-5"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <p className="text-start mb-5 text-red-600 bg-white">
            Password is required *
          </p>
        )}

        <label className="bg-white text-start my-2" htmlFor="">
          REPEAT PASSWORD
        </label>
        <input
          type="password"
          className="p-5 mb-5"
          placeholder="Repeat the Password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <p className="text-start mb-5 text-red-600 bg-white">
            Password is required *
          </p>
        )}

        <button className="p-4 mb-10 text-white" type="submit">
          LOG IN
        </button>

        <p className="bg-white">
          Don’t have an account?{" "}
          <Link className="font-semibold bg-white sign-up-link" href="/sign-up">
            SIGN UP
          </Link>
        </p>
      </form>
    </div>
  );
}
