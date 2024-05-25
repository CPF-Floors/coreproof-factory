"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Hubo un problema al cerrar la sesión");
      }
      const data = await response.json();
      if (typeof window !== "undefined") {
        router.push("/log-in");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-end text-white m-5 rounded-2xl logout-button">
      <p className="underline" onClick={() => logout()}>
        Logout
      </p>
      <Image className="m-5" src="./logout.svg" width={30} height={30} alt="user"></Image>
    </div>
  );
}

export default LogOutButton;
