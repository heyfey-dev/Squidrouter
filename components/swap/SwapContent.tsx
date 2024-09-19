import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

const CurrencySelect = ({ currency, icon }) => (
  <div className="flex items-center bg-yellow-500 rounded-full px-2 py-1">
    {icon}
    <span className="ml-1 font-bold">{currency}</span>
    <FaChevronDown size={16} className="ml-1" />
  </div>
);

const SwapField = ({ label, currency, icon }) => {
  const [value, setValue] = useState('');

  return (
    <div className="bg-gray-800 rounded-lg p-3 mb-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">{label}</span>
        <CurrencySelect currency={currency} icon={icon} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent text-2xl text-purple-500 outline-none"
        placeholder="0"
      />
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>$0</span>
        <span>Balance: 0 Max</span>
      </div>
    </div>
  );
};

export default function SwapContent() {
  return (
    <>
      <SwapField label="Pay" currency="BNB" icon={<span className="text-yellow-500">▣</span>} />
      <div className="flex justify-center my-2">
        <FaChevronDown size={24} className="text-gray-400" />
      </div>
      <SwapField label="Receive" currency="POL" icon={<span className="text-purple-500">∞</span>} />
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 font-semibold">
        Connect
      </button>
    </>
  );
}