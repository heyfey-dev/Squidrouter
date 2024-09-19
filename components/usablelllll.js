"use client"


import React, { useState } from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";

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

const SwapContent = () => (
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

const HistoryContent = () => (
  <div className="text-white">
    <h3 className="text-xl font-bold mb-4">Transaction History</h3>
    <ul className="space-y-2">
      <li className="bg-gray-800 p-2 rounded">Swap: 0.1 BNB to 10 POL</li>
      <li className="bg-gray-800 p-2 rounded">Swap: 0.2 BNB to 20 POL</li>
      <li className="bg-gray-800 p-2 rounded">Swap: 0.05 BNB to 5 POL</li>
    </ul>
  </div>
);

const SettingsContent = () => (
  <div className="text-white">
    <h3 className="text-xl font-bold mb-4">Settings</h3>
    <div className="space-y-4">
      <div>
        <label className="block mb-2">Slippage Tolerance</label>
        <input type="text" className="bg-gray-800 p-2 rounded w-full" placeholder="0.5%" />
      </div>
      <div>
        <label className="block mb-2">Transaction Deadline</label>
        <input type="text" className="bg-gray-800 p-2 rounded w-full" placeholder="30 minutes" />
      </div>
    </div>
  </div>
);

export default function EnhancedSwap() {
  const [currentView, setCurrentView] = useState('swap');

  const renderContent = () => {
    switch (currentView) {
      case 'history':
        return <HistoryContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <SwapContent />;
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[40%] h-[90%] bg-gray-900 text-white p-4 rounded-3xl max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          {currentView !== 'swap' ? (
            <button onClick={() => setCurrentView('swap')} className="text-gray-400">
              <IoMdArrowBack size={24} />
            </button>
          ) : (
            <h2 className="text-xl font-bold">Swap</h2>
          )}
          <div className="flex space-x-2">
            <button onClick={() => setCurrentView('history')} className="text-gray-400">
              <AiOutlineClockCircle size={20} />
            </button>
            <button onClick={() => setCurrentView('settings')} className="text-gray-400">
              <TbSettings2 size={20} />
            </button>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
}