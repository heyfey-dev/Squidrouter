import React from "react";
import Image from "next/image";
// import Bg_image from "/public/swap/squidBg.svg";
import Sidebar from "../../components/swap/Sidebar"
import Section from "../../components/swap/Section"



export default function Swap() {
  return (
    <div className=" relative min-h-screen m-0 p-0 bg-[#322F46]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/public/swap/squidBg.svg"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          alt="Background"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex">
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}
