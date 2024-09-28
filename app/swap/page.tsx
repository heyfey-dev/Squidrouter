"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "../../components/swap/Sidebar";
import Section from "../../components/swap/Section";

import { FiExternalLink } from "react-icons/fi";

const Swap: React.FC = () => {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading effect for 2 seconds before showing the Section
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="md:relative min-h-screen m-0 p-0 bg-[#17191C] md:bg-[#322F46]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hidden md:flex">
        <Image
          src="/swap/squidBg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex">
        <Sidebar />

        {/* Conditional rendering for spinner */}
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            {/* Beautiful spinner */}
            <div className="relative w-24 h-24">
              <div className="absolute border-4 border-t-4 border-t-transparent border-b-[#4F46E5] rounded-full w-full h-full animate-spin"></div>
              <div className="absolute border-4 border-l-4 border-l-transparent border-r-[#4F46E5] rounded-full w-3/4 h-3/4 animate-spin-reverse"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#4F46E5] rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <Section />
        )}

        {/* Get help button positioned at the bottom-right corner */}
        <button className="hidden md:flex absolute bottom-6 right-6  items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-full shadow-lg">
          <FiExternalLink className="mr-2" />
          <span>Get help</span>
        </button>
      </div>
    </div>
  );
};

export default Swap;
