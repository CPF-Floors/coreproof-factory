'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Order {
  _id: string;
  status: string;
}

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [tab, setTab] = useState('all');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          credentials: "include",
        });
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error("Profile user- Bad Request", error);
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    if (!userId) return;

    let url = `http://localhost:3001/order/user/${userId}`;
    if (tab !== 'all') {
      url += `/${tab}`;
    }

    fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data: Order[]) => {setOrders(data); console.log(orders)})
      .catch((error) => console.error(error));
  }, [tab, userId, orders]);

  return (
    <div className="h-lvh w-100 bg-white pt-5">
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
        <h2 className="font-semibold my-10 ">My orders list</h2>
      </div>
      <div className="flex justify-center">
        <Link href="/new-order">
          <button className="p-4 mx-8 text-white">New Order</button>
        </Link>
      </div>
      <div className="orders-links w-100 text-center">
        <a className="mx-5" onClick={() => setTab('all')}>
          All
        </a>
        <a className="mx-5" onClick={() => setTab('pending')}>
          Pending
        </a>
        <a className="mx-5" onClick={() => setTab('in-process')}>
          In Process
        </a>
        <a className="mx-5" onClick={() => setTab('completed')}>
          Completed
        </a>
      </div>
      <div>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className='text-center'>
              {/* Renderiza la información de la orden aquí */}
            </div>
          ))
        ) : (
          <p className='text-center'>No orders yet</p>
        )}
      </div>
    </div>
  );
}

export default Orders;

