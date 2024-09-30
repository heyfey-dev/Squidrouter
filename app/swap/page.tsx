"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Sidebar from "../../components/swap/Sidebar";
import Section from "../../components/swap/Section";

import { FiExternalLink } from "react-icons/fi";

const Swap: React.FC = () => {
  return (
    <div className="md:relative min-h-screen m-0 p-0 bg-[#17191C] md:bg-white">
      {/* Background Image */}
      <div className="absolute opacity-45 inset-0 z-0 hidden md:flex">
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
        <Link href="https://support.squidrouter.com/" passHref className="hidden md:flex absolute bottom-6 right-6 items-center justify-center px-4 py-2 bg-white text-gray-600 rounded-full shadow-lg" target="_blank" rel="noopener noreferrer">
          <span className="font-medium">Get help</span>
          <FiExternalLink className="ml-2 text-gray-700" />
        </Link>

      </div>
    </div>
  );
};

export default Swap;
