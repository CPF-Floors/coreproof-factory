import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/components/Cart";


function CartDisplay() {
  return (
    <>
      <div className="products-header-container flex flex-row items-center">
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
          <h2 className="font-semibold my-10 ">Your Cart</h2>
        </div>
        
      </div>
      <Cart />
      
    </>
  );
}

export default CartDisplay;
