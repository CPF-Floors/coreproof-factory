'use client'

import LogInForm from "../../components/LogInForm";
import Image from "next/image";
import { motion } from "framer-motion";

function LogInPage() {
  return (
    <>
      <motion.div className="login-image-container flex flex-col h-screen justify-center items-center"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}>
        <div className="absolute top-10 text-white text-center flex justify-center items-center flex-col">
        <Image src="/logoblue.svg" alt="Coreproof Logo" height={80} width={80}></Image>
        <h1 className="text-white text-center form-title">Log In</h1>
        <p>Please sign in to your existing account </p>
        </div>
        <LogInForm />
      </motion.div>
    </>
  );
}

export default LogInPage;
