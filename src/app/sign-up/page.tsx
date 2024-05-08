"use client";


import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

export default function RegisterForm() {
  const { toast } = useToast();

  interface RegisterForm {
    name: string;
    company: string;
    phone: number;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitSuccessful },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data)

    reset();
    toast({
      description: "Your registry has been successful",
    });
  };
  const password = watch("password", "");

  return (
    <>
      <form
        className="flex h-lvh flex-col p-5 text-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="rounded p-2 mb-5"
          placeholder="Name"
          {...register("name", {
            required: "This field is required *",
          })}
        />
        {errors.name && (
          <p className="text-start mb-5 text-red-600">{errors.name.message}</p>
        )}

        <input
          className="rounded p-2 mb-5"
          placeholder="Company Name"
          {...register("company", {
            required: "This field is required *",
          })}
        />
        {errors.company && (
          <p className="text-start mb-5 text-red-600">
            {errors.company.message}
          </p>
        )}

        <input
          type="tel"
          className="rounded p-2 mb-5"
          placeholder="Your Phone Number"
          {...register("phone", {
            required: "This field is required *",
          })}
        />
        {errors.phone && (
          <p className="text-start mb-5 text-red-600">{errors.phone.message}</p>
        )}

        <input
          className="rounded p-2 mb-5"
          placeholder="Enter your e-mail"
          {...register("email", {
            required: "This field is required *",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid e-mail",
            },
          })}
        />
        {errors.email && (
          <p className="text-start mb-5 text-red-600">{errors.email.message}</p>
        )}

        <input
          type="password"
          className="rounded p-2 mb-5"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <p className="text-start mb-5 text-red-600">Password is required *</p>
        )}

        <input
          type="password"
          className="rounded p-2 mb-5"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-start mb-5 text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}

        <button className="p-2 mb-3 rounded text-white" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}
