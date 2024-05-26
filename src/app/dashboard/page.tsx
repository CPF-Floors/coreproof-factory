"use client";

import { useEffect, useState } from "react";
import LogOutButton from "@/components/LogOutButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <motion.div className="px-2 py-5 profile-header-container"
      initial={{y: -400}}
      animate={{y: 0}}
      transition={{duration:1}}>
        <div className="px-10 py-5">
          <h2 className="text-lg font-bold">Welcome, {" " + profile.fullName}!</h2>
          <p>{profile.businessName}</p>
        </div>
      </motion.div>
      <LogOutButton />
      
    </>
  );
};

export default DashboadScreen;
