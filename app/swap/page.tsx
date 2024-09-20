import React from "react";
import Image from "next/image";
import Sidebar from "../../components/swap/Sidebar";
import Section from "../../components/swap/Section";

const Swap: React.FC = () => {
  return (
    <div className="relative min-h-screen m-0 p-0 bg-[#322F46]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
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
        <Section />
      </div>
    </div>
  );
};

export default Swap;
