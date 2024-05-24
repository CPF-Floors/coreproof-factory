"use client"

import { useState } from "react";


function GetProfileInfo({ token } : {token: React.ReactNode}) {

  const [newProfile, setNewProfile] = useState([])


    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        });
  
        if (!response.ok) {
          throw new Error("Error getting the profile");
        }
  
        const data = await response.json();
        setNewProfile(data)
  
  
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile()
    console.log(newProfile)



  return (
    <>
        <h1>{token ? "Profile" : "Loading..."}</h1>
        <h2>Welcome, {newProfile.fullName}</h2>
    </>
  );
}

export default GetProfileInfo;
