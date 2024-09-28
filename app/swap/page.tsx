"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "../../components/swap/Sidebar";
import Section from "../../components/swap/Section";

import { FiExternalLink } from "react-icons/fi";

const Swap: React.FC = () => {
  return (
    <div className="md:relative min-h-screen m-0 p-0 bg-[#17191C] md:bg-[#322F46]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hidden md:flex">
        <Image
          src="/swap/squidBg.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex">
        <Sidebar />
        <Section />

        {/* -------Get help button----- */}
        <button className="hidden md:flex absolute bottom-6 right-6 items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-full shadow-lg">
          <FiExternalLink className="mr-2" />
          <span>Get help</span>
        </button>
      </div>
    </div>
  );
};

export default Swap;
