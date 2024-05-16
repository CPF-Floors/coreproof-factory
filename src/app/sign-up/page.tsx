import SignUpForm from "../components/SignUpForm";
import Image from "next/image";

function SignUp() {
  return (

      <div className="h-lvh w-100 flex flex-col justify-start items-start">
        <div className="flex flex-col justify-centerabsolute right-0 left-0 top-20 text-center items-center justify-center w-100">
        <Image  src="/Group.svg" alt="Coreproof Logo" height={60} width={60}></Image>
        <h1 className="text-white text-center form-title">Sign Up</h1>
        </div>
        <SignUpForm />
      </div>

  );
}

export default SignUp;