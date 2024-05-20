"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

export default function App() {


  interface IFormInput {
      fullName: string,
      email: string,
      address: string,
      business: string,
      password: string,
      phone: number
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
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
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <>
      <form
        className="inherit flex flex-col text-center justify-center bg-white sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          {...register("password", { required: true })}
        />

        {errors.password?.type === "required" && (
          <p className="text-start mb-5 text-red-600 bg-white">
            Password is required *
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

        <button className="p-4 mb-10 text-white" type="submit">
          REGISTER
        </button>
      </form>
    </>
  );
}
