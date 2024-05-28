"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import LogOutButton from "../LogOutButton";
import Products from "@/app/products/page";


interface Product {
  _id: string;
  name: string;
  productType: string;
  material: string;
  description: string;
  price: number;
  stock: number;
  quantity: number;
}

function MenuBar() {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    const Cart = async (product: Product) => {
      try {
        const response = await fetch("http://localhost:3000/cart/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item: { id: product._id, quantity: 1 } }),
          credentials: 'include'
        });
        console.log(response)
        if (!response.ok) {
          throw new Error("Error al añadir el producto al carrito");
        }
  
        alert("Producto añadido al carrito con éxito");
      } catch (error) {
        const err = error as Error;
        alert(err.message);
      }
    };
  }, [openCart]);

  return (
    <>
      <div className="menu-bar bg-white w-100 absolute bottom-0 left-0 right-0 flex justify-between items-center px-6 py-2">
        <Link href="/dashboard">
          <Image
            className="bg-white"
            src="/grid.svg"
            width={30}
            height={30}
            alt="user icon"
          ></Image>
        </Link>

        <Link href="/profile">
          <Image
            className="bg-white"
            src="/menuuser.svg"
            width={30}
            height={30}
            alt="user icon"
          ></Image>
        </Link>

        <Link href="/orders">
          <Image
            className="bg-white"
            src="/plus.svg"
            width={60}
            height={60}
            alt="user icon"
          ></Image>
        </Link>

        <Link href="#">
          <Image
            onClick={() => setOpenCart(!openCart)}
            className="bg-white"
            src="/menucart.svg"
            width={30}
            height={30}
            alt="user icon"
          ></Image>
        </Link>

        <Link href="#">
          <Image
            className="bg-white"
            src="/Group8224.svg"
            width={30}
            height={30}
            alt="user icon"
            onClick={() => setOpen(!open)}
          ></Image>
        </Link>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="open-menu"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-row items-center">
              <Link href="#">
                <Image
                  className="m-5"
                  src="/Back.svg"
                  height="40"
                  width="40"
                  alt="Back"
                  onClick={() => setOpen(!open)}
                ></Image>
              </Link>
              <h2 className="font-semibold my-10 text-white underline">Menu</h2>
            </div>

            <div className="w-100 p-2 flex justify-center my-10">
              <Image src='./Group(2).svg' height={180} width={180} alt="logo"></Image>
            </div>

            <Link href="/products">
              <div className="open-menu-card p-1 bg-white m-5 rounded-2xl flex">
                <Image
                  src="./cart.svg"
                  width={60}
                  height={60}
                  alt="user"
                ></Image>
                <div className="m-5">
                  <p>Products</p>
                </div>
              </div>
            </Link>

            <Link href="/profile">
              <div className="open-menu-card p-1 bg-white m-5 rounded-2xl flex">
                <Image
                  src="./profileUser.svg"
                  width={60}
                  height={60}
                  alt="user"
                ></Image>
                <div className="m-5">
                  <p>Profile</p>
                </div>
              </div>
            </Link>

            <Link href="/orders">
              <div className="open-menu-card p-1 bg-white m-5 rounded-2xl flex">
                <Image
                  src="./cart.svg"
                  width={60}
                  height={60}
                  alt="user"
                ></Image>
                <div className="m-5">
                  <p>Orders</p>
                </div>
              </div>
            </Link>

            <Link href="/profile">
              <div className="open-menu-card p-1 bg-white m-5 rounded-2xl flex">
                <Image
                  src="./not.svg"
                  width={60}
                  height={60}
                  alt="user"
                ></Image>
                <div className="m-5">
                  <p>Notifications</p>
                </div>
              </div>
            </Link>

            <Link href="/search">
              <div className="open-menu-card p-1 bg-white m-5 rounded-2xl flex">
                <Image className="ml-4"
                  src="./search.svg"
                  width={40}
                  height={40}
                  alt="user"
                ></Image>
                <div className="m-5">
                  <p>Search</p>
                </div>
              </div>
            </Link>

            <LogOutButton />

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {openCart && (
          <motion.div className="cart-container"
          initial={{y:900}}
          animate={{y:0}}
          exit={{y:900}}
          transition={{duration:1}}>
            <div className="top-cart-container flex justify-center p-4">
              <div className="top-cart"></div>
            </div>
            {/*RENDERIZAR CARRITO AQUÍ*/}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuBar;
