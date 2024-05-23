"use client"

import React, { useEffect, useState } from "react";

function Profile() {

  const [profileData, setProfileData] = useState(null);

  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))

  const token = cookie ? cookie.split('=')[1] : null;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          method: "GET",
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error getting the profile");
        }
        const data = await response.json();
        setProfileData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!profileData) {
    return (
      <div className="w-100 h-lvh flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return <div className="text-white"></div>;
}

export default Profile;
