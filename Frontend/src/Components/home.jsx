import React from 'react';
import { useSession } from '../hooks/userSession';

export function Home() {
  const { session, logout } = useSession();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 text-gray-800">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg mb-6">Hello, {session?.username}!</p>
        <button
          onClick={handleLogout}
          className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-200"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
