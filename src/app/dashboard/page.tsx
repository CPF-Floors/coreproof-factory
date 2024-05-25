"use client";

import { useEffect, useState } from "react";
import LogOutButton from "@/components/LogOutButton";
import Image from "next/image";
import Link from "next/link";

interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName: string;
  address: string;
  businessName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

const DashboadScreen = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          credentials: "include",
        });
        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("User Profile / Bad Request", error);
      }
    };

    getProfile();
  }, []);

  if (!profile) {
    return <div className="h-lvh w-100 flex justify-center items-center">
      <span className="loader"></span>
    </div>;
  }

  return (
    <>
      <div className="px-2 py-5 profile-header-container">
        <div className="px-10 py-5">
          <h2 className="text-lg font-bold">Welcome, {" " + profile.fullName}!</h2>
          <p>{profile.businessName}</p>
        </div>
      </div>
      <LogOutButton />
      
    </>
  );
};

export default DashboadScreen;
