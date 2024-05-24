"use client";

import { useEffect, useState } from "react";

function GetProfileInfo({ token }: { token: React.ReactNode }) {
  const [newProfile, setNewProfile] = useState([]);

  useEffect(() => {
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
        setNewProfile(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [token])
  console.log(newProfile);

  return (
    <>

      <h2>Welcome, {newProfile.fullName}</h2>
      <p>Address: {newProfile.address}</p>
      <p>Company: {newProfile.businessName}</p>
      <p>Your email: {newProfile.email}</p>

    </>
  );
}

export default GetProfileInfo;
