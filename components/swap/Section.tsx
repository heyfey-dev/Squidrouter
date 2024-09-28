"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the SquidWidget to avoid SSR issues
const SquidWidget = dynamic(
  () => import("@0xsquid/widget").then((module) => module.SquidWidget),
  { ssr: false }
);

const Section: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect for 2 seconds before showing the Section
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full md:h-screen flex justify-center items-center bg-transparent">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          {/* Spinner */}
          <div className="relative w-16 h-16 border-4 border-[#322F46] border-t-transparent rounded-full animate-spin">
            {/* Inner Circle */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#322F46] rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <SquidWidget
            config={{
              integratorId: "kurokeme-cb998bbb-5acb-4493-9765-2899a30b0c38",
              apiUrl: "https://apiplus.squidrouter.com",
              slippage: 1.5,
              enableExpress: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Section;
