"use client"

import React from "react";

function CreateOrderButton() {

  const createOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/order/add", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al crear la orden");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-100 p-5 flex justify-center">
      <button className="px-5 py-3 text-white" onClick={createOrder}>Create Order</button>
    </div>
  );
}

export default CreateOrderButton;
