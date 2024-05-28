"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  name: string;
  productType: string;
  material: string;
  description: string;
  price: number;
  stock: number;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return (
      <div className="h-lvh w-100 flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
  );

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

      <div className="w-100 p-4">
        <input
          className="p-4 search-input"
          type="text"
          placeholder="Search Products..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div className="product-card m-8 p-4 flex" key={index}>
            <div>
            <div className="flex justify-center p-5">
              <Image
                className="rounded mb-10"
                src="/PROPOSITION.webp"
                alt="product-image"
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="font-bold">Price: ${product.price}</p>
              <p className="font-bold">Stock: {product.stock}</p>
            </div>
            <div className="text-white w-100 flex justify-center my-5">
                <button className="p-4">ADD TO CART</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
