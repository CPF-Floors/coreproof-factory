"use client";

import { useEffect, useState } from "react";
import LogOutButton from "@/components/LogOutButton";

interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName: string;
  address: string;
  businessName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

const UserProfileComponent = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/profile", {
          credentials: "include",
        });
        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Hubo un error al obtener el perfil del usuario:", error);
      }
    };

    getProfile();
  }, []);

  if (!profile) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <>
      <div>
        <h2>Perfil de Usuario</h2>
        <p>ID: {profile.id}</p>
        <p>Email: {profile.email}</p>
        <p>Nombre de usuario: {profile.username}</p>
        <p>Nombre completo: {profile.fullName}</p>
        <p>Dirección: {profile.address}</p>
        <p>Nombre del negocio: {profile.businessName}</p>
        <p>Número de teléfono: {profile.phoneNumber}</p>
        <p>Creado en: {new Date(profile.createdAt).toLocaleDateString()}</p>
        <p>
          Actualizado en: {new Date(profile.updatedAt).toLocaleDateString()}
        </p>
      </div>
      <LogOutButton />
    </>
  );
};

export default UserProfileComponent;
