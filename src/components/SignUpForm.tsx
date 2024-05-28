"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function App() {

  const router = useRouter();
  const { toast } = useToast();
  
  interface IFormInput {
    fullName: string;
    email: string;
    address: string;
    business: string;
    password: string;
    confirmPassword: string;
    phone: number;
    img: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();

  const password = watch("password", "");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          title: "Already registered",
        });
        throw new Error("Error en la petición");
      }

      const responseData = await response.json();
      toast({
        title: "You've been registered successfully!",
      });
      router.push("/log-in");
    } catch (error) {
      toast({
        title: "Connection Error",
      });
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col text-center justify-center bg-white sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-100 flex justify-center items-center bg-white">
          <Image
            src="/logoblue.svg"
            alt="Coreproof Logo"
            height={80}
            width={80}
          ></Image>
        </div>
        <p className="font-bold underline bg-white my-5">
          Fill the required fields to complete your registry
        </p>
        <label className="bg-white text-start my-2" htmlFor="">
          FULL NAME
        </label>
        <input
          className="p-5 mb-5"
          placeholder=""
          {...register("fullName", {
            required: "This field is required",
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
          ADDRESS
        </label>
        <input
          className="p-5 mb-5"
          placeholder=""
          {...register("address", {
            required: "This field is required",
          })}
        />

        <label className="bg-white text-start my-2" htmlFor="">
          BUSSINESS NAME
        </label>
        <input
          className="p-5 mb-5"
          placeholder=""
          {...register("business", {
            required: "This field is required",
          })}
        />

        <label className="bg-white text-start my-2" htmlFor="">
          PASSWORD
        </label>
        <input
          type="password"
          className="p-5 mb-5"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Password must contain at least one letter, one number, and be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-start mb-5 text-red-600 bg-white">
            {errors.password.message}
          </p>
        )}

        <label className="bg-white text-start my-2" htmlFor="">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          className="p-5 mb-5"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-start mb-5 text-red-600 bg-white">
            {errors.confirmPassword.message}
          </p>
        )}

        <label className="bg-white text-start my-2" htmlFor="">
          PHONE NUMBER
        </label>
        <input
          type="number"
          className="p-5 mb-5"
          placeholder=""
          {...register("phone", {
            required: "This field is required",
          })}
        />

        <label className="bg-white text-start my-2" htmlFor="">
          URL IMAGE
        </label>
        <input
          type="text"
          className="p-5 mb-5"
          placeholder=""
          {...register("img", {
            required: "This field is required",
          })}
        />

        <button className="p-4 mb-10 text-white" type="submit">
          REGISTER
        </button>
      </form>
    </>
  );
}
