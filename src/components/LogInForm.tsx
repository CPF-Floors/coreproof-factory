"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  
  const router = useRouter();
  const { toast } = useToast()

  interface IFormInput {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      const responseData = await response.json();
      console.log(responseData)

      document.cookie = `token=${responseData.token}; path=/`;

      if (typeof window !== 'undefined') {
        
        router.push('/dashboard');
        toast({
          title: "Login succesfull" ,
        })
      }
    } catch (error) {
      console.error(error);

    }
  };
  
  return (
    <form
      className="flex flex-col text-center justify-center absolute bg-white bottom-0 right-0 left-0 log-in-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="bg-white text-start my-2" htmlFor="">EMAIL</label>
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
        <p className="text-start mb-5 text-red-600 bg-white">{errors.email.message}</p>
      )}
      <label className="bg-white text-start my-2" htmlFor="">PASSWORD</label>
      <input
        type="password"
        className="p-5 mb-5"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password?.type === "required" && (
        <p className="text-start mb-5 text-red-600 bg-white">Password is required *</p>
      )}

      <button
        className="p-4 mb-10 text-white"
        type="submit"
      >
        LOG IN
      </button>

      <p className="bg-white">
      Don’t have an account?{" "}
        <Link
          className="underline font-semibold bg-white sign-up-link"
          href="/sign-up"
        >
          SIGN UP
        </Link>
      </p>
    </form>
  );
}
