import LogInForm from "./components/LogInForm";
import Image from "next/image";

function LogInPage() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <Image
        className="mb-8"
          alt="Coreproof Factory Login Logo"
          width={220}
          height={220}
          src="/Load.svg"
        ></Image>
        <LogInForm />
      </div>
    </>
  );
}

export default LogInPage;
