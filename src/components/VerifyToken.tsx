'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const VerifyToken = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      router.push('http://localhost:3001/log-in');
    } else {
      router.push('http://localhost:3001/dashboard');
    }
  }, [router]);

  return (
    <div>
      {/* El resto de tu aplicación va aquí */}
    </div>
  );
};

export default VerifyToken;
