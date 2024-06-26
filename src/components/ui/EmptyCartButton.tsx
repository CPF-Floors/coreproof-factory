'use client'
import React from 'react';
import { Toaster } from "./toaster"
import { useToast } from './use-toast';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function RemoveItemsButton() {

  const { toast } = useToast()
  const router = useRouter()

  const removeItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart/new', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      window.location.reload()
      toast({
        title: "Your Cart is now empty!",
      })

      if (!response.ok) {
        throw new Error('Error al eliminar los items del carrito');
      }



      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className='text-white p-5 m-5 bg-red-500' onClick={removeItems}>
                  <Image src="./trash.svg" alt="trash" height={25} width={25}>
            </Image>
    </button>
  );
}

export default RemoveItemsButton;
