"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


function GetProfileInfo({ token }: { token: React.ReactNode }) {

  const [newProfile, setNewProfile] = useState([]);

  type newProfile = {
    
    _id: string,
    fullName: string,
    address: string,
    businessName: string,
    phoneNumber: string,
    purchaseHistory: [],
    email: string,
    password: string,
    role: string,
    createdAt: string,
    updatedAt: string,
    __v: 0
  
  }

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
  }, [token]);
  console.log(newProfile);

  return (
    <>
      <div className="profile-header-container">
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
          <h2 className="font-semibold my-10 ">Personal Profile</h2>
        </div>

        <div className="px-10">
          <h1 className="font-semibold text-lg">
            Welcome, {newProfile.fullName}
          </h1>
          <p>{newProfile.businessName}</p>
          <p>{newProfile.role}</p>
        </div>
      </div>

      <div className="p-5 bg-gray-100 m-5 rounded-2xl flex">
        <Image
          src="./profileUser.svg"
          width={60}
          height={60}
          alt="user"
        ></Image>
        <div className="m-5">
          <h2 className="font-semibold">FULL NAME</h2>
          <p>{newProfile.fullName}</p>
        </div>
      </div>

      <div className="p-5 bg-gray-100 m-5 rounded-2xl flex">
        <Image src="./mail.svg" width={60} height={60} alt="user"></Image>
        <div className="m-5">
          <h2 className="font-semibold">EMAIL</h2>
          <p>{newProfile.email}</p>
        </div>
      </div>

      <div className="p-5 bg-gray-100 m-5 rounded-2xl flex">
        <Image src="./phone.svg" width={60} height={60} alt="user"></Image>
        <div className="m-5">
          <h2 className="font-semibold">PHONE NUMBER</h2>
          <p>{newProfile.phoneNumber}</p>
        </div>
      </div>

    </>
  );
}

export default GetProfileInfo;
