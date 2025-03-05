"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [showQR] = useState(true); // QR code is visible by default

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/Frame.png" alt="gr Logo" width={150} height={150} />
        </div>

        {/* Title & Description */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
        <p className="text-gray-600 mb-6">Click the button below to install the app!</p>

        {/* Install Button */}
        <Link href="https://drive.google.com/file/d/1KKaVgkU1S37CbQ7V_vlEJRUIxhFDMtrc/view?usp=sharing" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
          Install
        </Link>

        {/* QR Code Section */}
        {showQR && (
          <div className="mt-6">
            <Image
              src="/Qr.png" // Replace with actual QR code image
              alt="QR Code"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-gray-600 mt-2">Scan the QR code to install the app!</p>
          </div>
        )}

       
       
      </div>
    </div>
  );
}
