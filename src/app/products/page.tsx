"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

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

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { toast } = useToast()

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
  );

  const addToCart = async (product: Product) => {
    try {
      const response = await fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: { id: product._id, quantity: 1 } }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error("Error al añadir el producto al carrito");
      }

      if (response.ok){
        toast({
            title: "Product successfully added!",
          });
      }
    } catch (error) {
      const err = error as Error;
      alert(err.message);
    }
  };

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
          <h2 className="font-semibold my-10 ">Products</h2>
        </div>
      </div>

      <div className="w-100 flex justify-center p-4">
        <input
          className="search-input p-4"
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div className="product-card m-5 p-4 flex flex-col" key={index}>
            <div className="flex justify-center p-5">
              <Image
                src="/PROPOSITION.webp"
                alt="product-image"
                width={150}
                height={150}
              ></Image>
            </div>
            <h3 className="font-bold text-lg mb-5 text-center">
              {product.name}
            </h3>
            <p className="mb-5">{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
            <p className="font-bold">Stock: {product.stock}</p>
            <button
              className="text-white p-4 my-10"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
