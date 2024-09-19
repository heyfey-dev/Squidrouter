import React, { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';

const ToggleButton = ({ options, value, onChange }) => (
  <div className="flex bg-gray-800 rounded-md p-1">
    {options.map((option) => (
      <button
        key={option}
        className={`px-3 py-1 rounded ${
          value === option ? 'bg-gray-700 text-white' : 'text-gray-400'
        }`}
        onClick={() => onChange(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default function Settings({ onClose }) {
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
            <IoInformationCircleOutline className="ml-1 text-gray-400" />
          </div>
          <ToggleButton
            options={['Auto', 'Custom']}
            value={slippageMode}
            onChange={handleSlippageModeChange}
          />
        </div>
        
        {slippageMode === 'Custom' && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Between 0% and 5%</span>
            <div className="flex items-center bg-gray-800 rounded-md">
              <button
                className="px-3 py-1 text-gray-400"
                onClick={() => handleCustomSlippageChange(customSlippage - 1)}
              >
                -
              </button>
              <input
                type="number"
                value={customSlippage}
                onChange={(e) => handleCustomSlippageChange(Number(e.target.value))}
                className="w-12 text-center bg-transparent outline-none"
              />
              <span className="mr-2">%</span>
              <button
                className="px-3 py-1 text-gray-400"
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
            <IoInformationCircleOutline className="ml-1 text-gray-400" />
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
          <IoInformationCircleOutline className="ml-1 text-gray-400" />
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
}