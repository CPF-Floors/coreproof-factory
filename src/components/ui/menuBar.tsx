import React from "react";
import Image from "next/image";
import Link from "next/link";

function MenuBar() {
  return (
    
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
          src="/Group8222.svg"
          width={30}
          height={30}
          alt="user icon"
        ></Image>
      </Link>

      <Link href="/orders">
        <Image
          className="bg-white"
          src="/Group1322.svg"
          width={60}
          height={60}
          alt="user icon"
        ></Image>
      </Link>

      <Link href="/dashboard">
        <Image
          className="bg-white"
          src="/Group8223.svg"
          width={30}
          height={30}
          alt="user icon"
        ></Image>
      </Link>


      <Link href="/dashboard">
        <Image
          className="bg-white"
          src="/Group8224.svg"
          width={30}
          height={30}
          alt="user icon"
        ></Image>
      </Link>
    </div>
  );
}

export default MenuBar;
