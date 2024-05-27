"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface User {
  id: string,
  fullName: string;
  email: string
  businessName: string;
  phoneNumber: string
}

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!query) return;

    fetch(`http://localhost:3000/user/query?query=${query}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: { users: User[] }) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, [query]);
  return (
    <>
      <motion.div
        className="px-2 py-5 profile-header-container"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
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
            <h2 className="font-semibold my-10 ">Search</h2>
          </div>
        </div>
      </motion.div>

      <div className="w-100 flex flex-col p-5 ">
        <input
          className="w-100 p-4"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users by Name, Company Name..."
        />

        <div>
          {users.length > 0 ? (
            users.map((user) => (
              <div className="user-search-card p-3 my-5" key={user.id}>
                <p className="m-2 text-lg font-bold">{user.fullName}</p>
                <p className="m-2">{user.email}</p>
                <p className="m-2">{user.businessName}</p>
                <p className="m-2">{user.phoneNumber}</p>
              </div>
            ))
          ) : (
            <p className="text-center my-10">No users found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;

