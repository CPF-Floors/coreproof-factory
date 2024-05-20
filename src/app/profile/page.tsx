"use client";

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';


function Profile() {

  const [profileData, setProfileData] = useState(null);
  const token = Cookies.get('token')

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

  if (!profileData) {
    return (
      <div className="w-100 h-lvh flex justify-center items-center text-white">
        Loading your profile...
      </div>
    );
  }

  return <div className="text-white"></div>;
}

export default Profile;
