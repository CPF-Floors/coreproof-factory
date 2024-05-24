"use client"

import Image from "next/image";

function LogOutButton({ token }: { token: React.ReactNode }) {

    const LogOut = async () => {
        try {
          const response = await fetch("http://localhost:3000/auth/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error("Error Login out");
          }
          const data = await response.json();
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