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
  role: string
}

export interface Cart {
  items: CartItem[];
}

interface CartItem {
  quantity: number;
}

const DashboadScreen = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);

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

    fetch("http://localhost:3000/cart", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, []);

  if (!profile) {
    return (
      <div className="h-lvh w-100 flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="px-2 py-5 profile-header-container flex justify-center items-center shadow-2xl"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="px-10 py-5 dashboard-data-name">
          <h2 className="text-lg font-extrabold ">Dashboard</h2>
          <p className="mt-2 mb-6">In this panel you can access to your account details</p>
          <h2 className="text-lg font-bold">
            Welcome, {" " + profile.fullName}!
          </h2>
          <p>{profile.businessName}</p>
        </div>
      </motion.div>

      <div className="p-5 border-b-2">
        <h1 className="text-lg font-bold">Dashboard</h1>

      </div>

      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{duration: 2}}
      className="order-cart-container p-5 flex items-center justify-evenly">
        <div className="total-cart-items m-5 text-center">
          <h2>{cart?.items.length}</h2>
          <p>Total Items</p>
          <Link className="underline" href="/cart">See Details</Link>
        </div>

        <div className="total-cart-items m-5 text-center">
          <h2>0</h2>
          <p>Total Orders</p>
          <Link className="underline" href="/orders">See Details</Link>
        </div>
      </motion.div>
      <LogOutButton />
    </>
  );
};

export default DashboadScreen;
