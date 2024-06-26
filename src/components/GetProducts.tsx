import React, { useState, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";



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

function GetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    (product: Product) =>
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
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error al añadir el producto al carrito");
      }

      toast({
        title: "Product successfully added!",
      });
    } catch (error) {
      const err = error as Error;
      toast({
        title: "Error",
        description: err.message,
      });
    }
  };

  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const scrollPrev = () => {
    if (embla) embla.scrollPrev();
  };

  const scrollNext = () => {
    if (embla) embla.scrollNext();
  };

  return (
    <>
      <div className="w-100 flex justify-center p-4">
        <input
          className="search-input p-4"
          type="text"
          placeholder="Search Products..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="h-lvh w-100 flex justify-center items-center">
          <span className="loader mb-80"></span>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="embla" ref={viewportRef}>
          <div className="embla__container flex">
            {filteredProducts.map((product, index) => (
              <div className="embla__slide" key={index}>
                <div className="product-card m-5 p-4 flex flex-col">
                  <div className="flex justify-center p-5">
                    <Image
                      src="/PROPOSITION.webp"
                      alt="product-image"
                      width={200}
                      height={200}
                    ></Image>
                  </div>
                  <h3 className="font-bold text-lg mb-5 text-center">
                    {product.name}
                  </h3>
                  <p className="mb-5">{product.description}</p>
                  <p className="font-bold">Price: ${product.price}</p>
                  <p className="font-bold">Stock: {product.stock}</p>
                  <button
                    className="text-white p-4 my-10 add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="embla__prev" onClick={scrollPrev}>
            <Image src="./prev.svg" alt="prev" width={20} height={20}>
            </Image>
            </button>
          <button className="embla__next" onClick={scrollNext}>
          <Image src="./next.svg" alt="prev" width={20} height={20}>
            </Image>
          </button>
        </div>
      ) : (
        <p>No results</p>
      )}
    </>
  );
}

export default GetProducts;
