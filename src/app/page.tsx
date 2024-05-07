'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"


export default function App() {

  interface IFormInput {
    email: string
    password: string
  }
  
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


  return (
    <form className="flex h-lvh flex-col p-5 text-center justify-center" onSubmit={handleSubmit(onSubmit)}>

      <input className="rounded p-2" placeholder="Enter your e-mail" {...register("email", { required: true})} />
      {errors.email?.type === "required" && (
        <p className="text-start mb-5 text-red-600">This field  is required</p>
      )}

      <input type="password" className="rounded p-2" placeholder="Password" {...register("password", { required: true})} />
      {errors.password?.type === "required" && (
        <p className="text-start mb-5 text-red-600">Password is required</p>
      )}


      <input className="mb-5 rounded p-2" type="submit" value="Log in" />


      <p>Not registered yet? Click to <Link className="text-violet-800 font-bold" href="/sign-up">Sign Up</Link></p>
    </form>
  )
}