"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

function LogOutButton() {

  const router = useRouter()

    const LogOut = async () => {
        try {
          const response = await fetch("http://localhost:3000/auth/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error("Error Login out");
          }
          const data = await response.json();
          if (typeof window !== 'undefined') {
        
            router.push('/log-in');

          }
        } catch (error) {
          console.error(error);
        }
      };

    return ( 
        <div className="flex items-center justify-end">
        <p className="underline" onClick={() => LogOut()}>Logout</p>
        <Image src="./logout.svg" width={60} height={60} alt="user"></Image>
      </div>
     );
}

export default LogOutButton;