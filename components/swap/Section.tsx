"use client"





import React, { useState } from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import { IoMdArrowBack} from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { FaChevronDown } from "react-icons/fa6";

// CurrencySelect Component
const CurrencySelect = ({ currency, icon }) => (
  <div className="flex items-center bg-yellow-500 rounded-full px-2 py-1">
    {icon}
    <span className="ml-1 font-bold">{currency}</span>
    <FaChevronDown size={16} className="ml-1" />
  </div>
);

// SwapField Component
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

// SwapContent Component
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

// HistoryContent Component
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

// SettingsContent Component
const SettingsContent = ({ onClose }) => {
  const [slippageMode, setSlippageMode] = useState('Auto');
  const [customSlippage, setCustomSlippage] = useState(0);
  const [degenMode, setDegenMode] = useState(false);

  const handleSlippageModeChange = (mode) => {
    setSlippageMode(mode);
  };

  const handleCustomSlippageChange = (value) => {
    setCustomSlippage(Math.max(0, Math.min(5, value)));
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span>Slippage</span>
            <IoMdInformationCircleOutline className="ml-1 text-gray-400" />
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded ${slippageMode === 'Auto' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleSlippageModeChange('Auto')}
            >
              Auto
            </button>
            <button
              className={`px-3 py-1 rounded ${slippageMode === 'Custom' ? 'bg-gray-700' : 'bg-gray-800'}`}
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
          <div className="flex items-center">
            <span>Degen mode</span>
            <IoMdInformationCircleOutline className="ml-1 text-gray-400" />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={degenMode}
              onChange={() => setDegenMode(!degenMode)}
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center">
          <span>Buy crypto</span>
          <IoMdInformationCircleOutline className="ml-1 text-gray-400" />
          <svg className="ml-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-400 text-center">v3.0.0</div>
      
      <button
        className="w-full mt-4 py-3 bg-white text-black rounded-lg font-semibold"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

// Main EnhancedSwap Component
export default function EnhancedSwap() {
  const [currentView, setCurrentView] = useState('swap');

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
    <div className="w-full flex justify-center items-center">
      <div className="w-[40%] h-[90%] bg-gray-900 text-white p-4 rounded-3xl max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          {currentView !== 'swap' ? (
            <button onClick={handleClose} className="text-gray-400">
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