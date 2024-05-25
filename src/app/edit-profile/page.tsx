'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from "@/components/ui/use-toast";

function UpdateProfileForm() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/profile', { credentials: 'include' });
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error('Profile user- Bad Request', error);
      }
    };

    getProfile();
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el perfil');
      }

      const responseData = await response.json();
      console.log(responseData);

      // Mostrar notificación de éxito
      toast({
        title: "Profile updated successfully",
      });

      // Redirigir al usuario a la página de perfil
      router.push('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <div className="flex flex-row items-center">
          <Link href="/profile">
            <Image
              className="m-5"
              src="/Back.svg"
              height="40"
              width="40"
              alt="Back"
            ></Image>
          </Link>
          <h2 className="font-semibold my-10 ">Your Profile</h2>
        </div>


        <form className='flex flex-col p-5' onSubmit={handleSubmit(onSubmit)}>
      
        
        <input className='p-4 my-4' placeholder='Enter New Name' {...register("fullName")} />
      
      
        
        <input className='p-4 my-4' placeholder='Enter New Address' {...register("address")} />
      
      
        
        <input className='p-4 my-4' placeholder='Enter New Business Name' {...register("businessName")} />
      
      
   
        <input className='p-4 my-4' placeholder='Enter New Phone Number' {...register("phoneNumber")} />
      
      
 
        <input className='p-4 my-4' placeholder='Enter New Email (Or Current)' {...register("email", {
          required: "* This field is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please, enter a valid e-mail"
          }
        })} />
        {errors.email && <p>{errors.email.message}</p>}

      

        <input className='p-4 my-4' placeholder='Your New Password (Or Current)' type="password" {...register("password", {
          required: "* This field is required",
          minLength: {
            value: 8,
            message: "Password must have 8 characters"
          }
        })} />
        {errors.password && <p>{errors.password.message}</p>}

      <button className='p-4 text-white mt-5' type="submit">Update Profile</button>
    </form>
    </>
   
  );
}

export default UpdateProfileForm;

