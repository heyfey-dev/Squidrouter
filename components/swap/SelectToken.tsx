"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const tokens = [
  { name: "BNB", color: "bg-[#f5e13b]", icon: "/bnb-icon.svg" },
  { name: "Polygon", color: "bg-[#7b3bf5]", icon: "/polygon-icon.svg" },
  { name: "ETH", color: "bg-[#3b40f5]", icon: "/eth-icon.svg" },
  // Add more tokens here as needed
];

const SelectToken = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleTokenSelect = (token: { name: string }) => {
    localStorage.setItem("selectedToken", token.name);
    router.push("/"); // Navigate back to the page with the buttons
  };

  return (
    <div className="bg-black min-h-screen p-6 text-white">
      <button className="text-gray-400" onClick={() => router.back()}>
        ← Back
      </button>

      <h2 className="text-2xl font-semibold mb-4">Select a token</h2>

      <input
        type="text"
        placeholder="Search token..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 rounded-lg bg-gray-700 text-gray-300 outline-none"
      />

      <div className="space-y-3">
        {tokens
          .filter((token) =>
            token.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((token) => (
            <div
              key={token.name}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${token.color}`}
              onClick={() => handleTokenSelect(token)}
            >
              <img src={token.icon} alt={token.name} className="w-6 h-6" />
              <span className="ml-3">{token.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectToken;
