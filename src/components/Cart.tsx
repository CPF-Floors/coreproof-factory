"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { color, motion } from "framer-motion";

interface Product {
  _id: string;
  name: string;
  productType: string;
  material: string;
  description: string;
  price: number;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  _id: string;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function Cart() {

  const [cart, setCart] = useState<Cart | null>(null);
  const { toast } = useToast();

  useEffect(() => {
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

  console.log(cart);

  return (
    <>
      <div className="cart-container">
        <div className="p-4 py-8 border-spacing-4 border">
          <h2 className="font-bold">Your Items</h2>
        </div>
        {cart &&
          cart.items.map((item, index) => (
            <>
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="cart-card text-white p-4 py-6 my-5 mx-4"
                key={item._id}
              >
                <h1 className="text-lg font-bold">{item.product.name}</h1>
                <p>Quantity: {item.quantity}</p>
              </motion.div>
            </>
          ))}
      </div>
    </>
  );
}

export default Cart;
