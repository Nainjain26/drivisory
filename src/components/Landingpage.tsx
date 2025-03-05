"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Landingpage() {
  const [showQR, setShowQR] = useState(false);

  const handleInstallClick = () => {
    setShowQR(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/Frame.png" 
            alt="Drivisory Logo" 
            width={200} 
            height={200} 
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
        <p className="text-gray-600 mb-6">Click the button below to install the app!</p>
        <button
          onClick={handleInstallClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          Install
        </button>
        {showQR && (
          <div className="mt-6">
            <img
              src="/Qr.png"
              alt="QR Code"
              className="w-48 h-48 mx-auto"
            />
            <p className="text-gray-600 mt-2">Scan the QR code to install the app!</p>
          </div>
        )}
      </div>
    </div>
  );
}
