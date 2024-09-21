"use client"

import React, { useState } from 'react';
import Image from "next/image";



import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import { IoMdArrowBack } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiDollar } from "react-icons/ci";


import Slippage from "/public/swap/slippage.svg";
import Star from "/public/swap/star.svg";
import CryptoSwap from "/public/swap/cryptoSwap.svg"


// Define types
type Currency = 'BNB' | 'POL';
type ViewType = 'swap' | 'history' | 'settings';

interface CurrencySelectProps {
  currency: Currency;
  icon: React.ReactNode;
}

interface SwapFieldProps {
  label: string;
  currency: Currency;
  icon: React.ReactNode;
}

interface SettingsContentProps {
  onClose: () => void;
}

// CurrencySelect Component
const CurrencySelect: React.FC<CurrencySelectProps> = ({ currency, icon }) => (
  <div className="flex items-center bg-yellow-500 rounded-full px-2 py-1">
    {icon}
    <span className="ml-1 font-bold">{currency}</span>
    <IoIosArrowRoundDown size={16} className="ml-1" />
  </div>
);

// SwapField Component
const SwapField: React.FC<SwapFieldProps> = ({ label, currency, icon }) => {
  const [value, setValue] = useState<string>('');

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
        className="w-full bg-transparent text-3xl text-purple-500 outline-none"
        placeholder="0"
      />
      <div className="flex justify-between text-[#767B8F] text-sm mt-2">
        <div className="flex items-center gap-1">
          <Image
           src={CryptoSwap}
           alt="Crypto Swap"
           width={15}
           height={15}
          />
          <span>$0</span>
        </div>
        <span>Balance: 0 Max</span>
      </div>
    </div>
  );
};

// SwapContent Component
const SwapContent: React.FC = () => (
  <>
    <SwapField label="Pay" currency="BNB" icon={<span className="text-yellow-500">▣</span>} />
    <div className="flex justify-center my-2">
      <IoIosArrowRoundDown size={24} className="text-gray-400" />
    </div>
    <SwapField label="Receive" currency="POL" icon={<span className="text-purple-300">∞</span>} />
    <button className="w-full bg-[#a07fd0] text-white py-3 rounded-full mt-4 hover:bg-[#b793ed]">
      Connect
    </button>
  </>
);

// HistoryContent Component
const HistoryContent: React.FC = () => (
  <div className="text-white">
    <h3 className="text-xl font-bold mb-4">Transaction History</h3>
    <ul className="space-y-2">
      <li className="bg-gray-800 p-2 rounded">Swap: 0.1 BNB to 10 POL</li>
      <li className="bg-gray-800 p-2 rounded">Swap: 0.2 BNB to 20 POL</li>
      <li className="bg-gray-800 p-2 rounded">Swap: 0.05 BNB to 5 POL</li>
    </ul>
  </div>
);

// SettingsContent Component
const SettingsContent: React.FC<SettingsContentProps> = ({ onClose }) => {
  const [slippageMode, setSlippageMode] = useState<'Auto' | 'Custom'>('Auto');
  const [customSlippage, setCustomSlippage] = useState<number>(0);
  const [degenMode, setDegenMode] = useState<boolean>(false);

  const handleSlippageModeChange = (mode: 'Auto' | 'Custom') => {
    setSlippageMode(mode);
  };

  const handleCustomSlippageChange = (value: number) => {
    setCustomSlippage(Math.max(0, Math.min(5, value)));
  };

  return (
    <div className=" bg-opacity-90 backdrop-blur-lg text-white absolute bottom-0 m-4 left-0 right-0">
      <div className="bg-opacity-40 outline-2 space-y-2 p-4 bg-gray-600 rounded-3xl">
        <div className="flex items-center justify-between text-sm">
          <div className="gap-2 flex items-center">
          <Image
           src={Slippage}
           alt="Crypto Swap"
           width={20}
           height={20}
          />
            <span>Slippage</span>
            <AiFillQuestionCircle className="ml-1 text-gray-400" />
          </div>
          <div className="border border-gray-700 pr-1 rounded-lg flex space-x-2">
            <button
              className={`border border-purple-500 px-2 py-1 text-xs rounded-sm ${slippageMode === 'Auto' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleSlippageModeChange('Auto')}
            >
              Auto
            </button>
            <button
              className={`px-1 text-xs rounded ${slippageMode === 'Custom' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleSlippageModeChange('Custom')}
            >
              Custom
            </button>
          </div>
        </div>
        
        {slippageMode === 'Custom' && (
          <div className="flex items-center justify-between">
            <span>Between 0% and 5%</span>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-800 rounded-l"
                onClick={() => handleCustomSlippageChange(customSlippage - 1)}
              >
                -
              </button>
              <input
                type="number"
                value={customSlippage}
                onChange={(e) => handleCustomSlippageChange(Number(e.target.value))}
                className="w-12 text-center bg-gray-800 outline-none"
              />
              <button
                className="px-2 py-1 bg-gray-800 rounded-r"
                onClick={() => handleCustomSlippageChange(customSlippage + 1)}
              >
                +
              </button>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
          <Image
           src={Star}
           alt="Crypto Swap"
           width={20}
           height={20}
          />
            <span>Degen mode</span>
            <AiFillQuestionCircle className="ml-1 text-gray-400" />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={degenMode}
              onChange={() => setDegenMode(!degenMode)}
            />
            <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#75DE6B]"></div>
          </label>
        </div>
        
        <div className=" border-t border-b border-gray-700 py-3 flex gap-2 items-center">
          <CiDollar className="text-[#9271C0]"/>
          <span>Buy crypto</span>
          <AiFillQuestionCircle className="ml-1 text-gray-400" />
        </div>
      <div className="mt-4 text-xs text-gray-400 text-center">v3.0.2</div>
      </div>
      
      
      <button
        className="w-full mt-4 py-3 bg-white text-black rounded-full shadow-md shadow-purple-400"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

// Main EnhancedSwap Component
const Section: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('swap');

  const handleClose = () => {
    setCurrentView('swap');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'history':
        return <HistoryContent />;
      case 'settings':
        return <SettingsContent onClose={handleClose} />;
      default:
        return <SwapContent />;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center border">
      <div className="w-full max-w-sm h-[85%] bg-[#17191C] text-white p-4 rounded-3xl mx-auto relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          {currentView !== 'swap' ? (
            <button onClick={handleClose} className="text-gray-400">
              <IoMdArrowBack size={24} />
            </button>
          ) : (
            <h2 className="text-3xl font-medium border">Swap</h2>
          )}
          <div className="flex space-x-1">
            <button onClick={() => setCurrentView('history')} className="text-[#B1B6BF] w-14 h-8 flex justify-center items-center rounded-2xl bg-[#272d36]">
              <AiOutlineClockCircle size={18} />
            </button>
            <button onClick={() => setCurrentView('settings')} className="text-[#B1B6BF] w-14 h-8 flex justify-center items-center rounded-2xl bg-[#272d36]">
              <TbSettings2 size={18} />
            </button>
          </div>
        </div>
        
        {currentView !== 'settings' && renderContent()}
        {currentView === 'settings' && (
          <>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            {renderContent()}
          </>
        )}
      </div>
    </div>
  );
};

export default Section;