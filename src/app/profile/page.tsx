
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

function Profile() {

  // const [profileData, setProfileData] = useState(null);

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  console.log(token)

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error getting the profile");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchProfile();
  // }, [])

  // if (!profileData) {
  //   return (
  //     <div className="w-100 h-lvh flex justify-center items-center">
  //       <span className="loader"></span>
  //     </div>
  //   );
  // }

  return <div className="h-lvh w-100 ">
          <div className="flex flex-row items-center">
        <Link href="/dashboard">
          <Image
            className="m-5"
            src="/Back.svg"
            height="40"
            width="40"
            alt="Back"
          ></Image>
        </Link>
        <h2 className="font-semibold my-10 ">Your Profile</h2>
      </div>


  </div>;
}

export default Profile;
