import LogInForm from "../../components/LogInForm";
import Image from "next/image";

function LogInPage() {
  return (
    <>
      <div className="login-image-container flex flex-col h-screen justify-center items-center">
        <div className="absolute top-20 text-white text-center flex justify-center items-center flex-col">
        <Image className="mb-5"  src="/logoblue.svg" alt="Coreproof Logo" height={80} width={80}></Image>
        <h1 className="text-white text-center form-title">Log In</h1>
        <p>Please sign in to your existing account </p>
        </div>
        <LogInForm />
      </div>
    </>
  );
}

export default LogInPage;
