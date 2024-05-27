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
  img: string,
  businessName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

const UserProfileComponent = () => {
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
        console.error("Hubo un error al obtener el perfil del usuario:", error);
      }
    };

    getProfile();
  }, []);

  if (!profile) {
    return (
      <div className="h-lvh w-100 flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  console.log(profile)

  return (
    <>
      <motion.div className="px-2 py-5 profile-header-container"
        initial={{y: -400}}
        animate={{y: 0}}
        transition={{duration: 1}}>
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
          <div className="flex flex-col">
            <h2 className="font-semibold my-10 ">Your Profile</h2>
          </div>
          <div>
            <Image src="{profile.img}" alt="image" height={100} width={100}></Image>
          </div>
        </div>

        <div className="px-10 py-5 profile-data-name">
          <h2 className="text-lg font-bold">{profile.fullName}</h2>
          <p>{profile.businessName}</p>
          <p>Member since: {profile.createdAt}</p>
          <Link href="/edit-profile">
            <p className="my-5 bg-white w-3/12 rounded p-2 text-black text-center px-4 ">Edit</p>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="p-1 px-5 profile-card m-5 rounded-2xl flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image src="./mail.svg" width={60} height={60} alt="user"></Image>
        <div className="m-5">
          <p className="font-bold text-lg">EMAIL</p>
          <p>{profile.email}</p>
        </div>
      </motion.div>

      <motion.div
        className="p-1 px-5 profile-card m-5 rounded-2xl flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="./phone.svg" width={60} height={60} alt="user"></Image>
        <div className="m-5">
          <p className="font-bold text-lg">PHONE</p>
          <p>{profile.phoneNumber}</p>
        </div>
      </motion.div>

      <motion.div
        className="p-1 px-5 profile-card m-5 rounded-2xl flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="./address.svg" width={60} height={60} alt="user"></Image>
        <div className="m-5">
          <p className="font-bold text-lg">ADDRESS</p>
          <p>{profile.address}</p>
        </div>
      </motion.div>
      <LogOutButton />
      
    </>
  );
};

export default UserProfileComponent;
