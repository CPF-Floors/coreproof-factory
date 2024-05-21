import React from "react";
import Image from "next/image";
import Link from "next/link";

function MenuBar() {
  return (
    
    <div className="menu-bar bg-white w-100 absolute bottom-0 left-0 right-0 flex justify-between items-center px-6 py-4">
      <Link href="/profile">
        <Image
          className="bg-white"
          src="/user-regular.svg"
          width={30}
          height={30}
          alt="user icon"
        ></Image>
      </Link>

      <Link href="/dashboard">
        <Image
          className="bg-white"
          src="/house-solid.svg"
          width={30}
          height={30}
          alt="user icon"
        ></Image>
      </Link>
    </div>
  );
}

export default MenuBar;
