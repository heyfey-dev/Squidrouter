// components/SettingsContent.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';
import { CiDollar } from 'react-icons/ci';
import { FiExternalLink } from 'react-icons/fi';
import Slippage from '/public/swap/slippage.svg';
import Star from '/public/swap/star.svg';

interface SettingsContentProps {
  onClose: () => void;
}

const SettingsContent: React.FC<SettingsContentProps> = ({ onClose }) => {
  const [slippageMode, setSlippageMode] = useState<'Auto' | 'Custom'>('Auto');
  const [customSlippage, setCustomSlippage] = useState<number>(0);
  const [degenMode, setDegenMode] = useState<boolean>(false);
  const [showSlippageModal, setShowSlippageModal] = useState(false);
  const [showDegenModal, setShowDegenModal] = useState(false);

  const handleSlippageModeChange = (mode: 'Auto' | 'Custom') => {
    setSlippageMode(mode);
  };

  const handleCustomSlippageChange = (value: number) => {
    setCustomSlippage(Math.max(0, Math.min(5, value)));
  };

  return (
    <div className="bg-opacity-90 backdrop-blur-lg text-white absolute bottom-0 m-4 left-0 right-0">
      <div className="shadow shadow-gray-400 bg-opacity-45 outline-2 space-y-2 p-4 bg-gray-600 rounded-3xl">
        {/* Slippage Section */}
        <div className="flex items-center justify-between text-sm">
          <div className="gap-2 flex items-center relative">
            <Image src={Slippage} alt="Crypto Swap" width={20} height={20} />
            <span className="text-sm text-gray-300">Slippage</span>
            <AiFillQuestionCircle
              className="ml-1 text-lg text-gray-500 hover:text-gray-400 cursor-pointer"
              onMouseEnter={() => setShowSlippageModal(true)}
              onMouseLeave={() => setShowSlippageModal(false)}
            />
            {showSlippageModal && (
              <div className="absolute -top-32 -left-5 z-20 w-64 p-3 bg-opacity-40 outline-2 text-xs text-gray-300 bg-gray-600 rounded-3xl shadow-lg">
                Slippage is the price variation you are willing to accept...
              </div>
            )}
          </div>

          <div className="border border-gray-700 rounded-lg flex">
            <button
              className={`border border-purple-500 px-2 py-1 text-xs rounded-lg ${slippageMode === 'Auto' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleSlippageModeChange('Auto')}
            >
              Auto
            </button>
            <button
              className={`px-3 text-xs rounded-lg hover:bg-gray-600 ${slippageMode === 'Custom' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleSlippageModeChange('Custom')}
            >
              Custom
            </button>
          </div>
        </div>

        {slippageMode === 'Custom' && (
          <div className="flex text-sm text-gray-500 items-center justify-between">
            <div className="gap-2 flex items-center">
              <BsArrowReturnRight />
              <span>Between 0% and 5%</span>
            </div>
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

        {/* Degen Mode Section */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center relative">
            <Image src={Star} alt="Degen Mode" width={20} height={20} />
            <span className="text-sm text-gray-300">Degen mode</span>
            <AiFillQuestionCircle
              className="ml-1 text-lg text-gray-500 hover:text-gray-400 cursor-pointer"
              onMouseEnter={() => setShowDegenModal(true)}
              onMouseLeave={() => setShowDegenModal(false)}
            />
            {showDegenModal && (
              <div className="absolute -top-24 -left-4 z-20 w-72 p-3 bg-opacity-75 outline-2 text-xs text-gray-300 bg-gray-600 rounded-3xl shadow-lg">
                Enable at your own risk! Degen mode allows trades with a price impact over 5%...
              </div>
            )}
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

        {/* Buy Crypto Section */}
        <div className="border-t border-b border-gray-700 py-1">
          <div className="py-2 flex justify-between items-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-35 hover:rounded-xl">
            <div className="flex gap-2 items-center">
              <CiDollar className="text-[#9356e2] text-lg" />
              <span>Buy crypto</span>
              <AiFillQuestionCircle className="ml-1 text-lg text-gray-500 hover:text-gray-400" />
            </div>
            <FiExternalLink className="text-sm text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-400 text-center">v3.0.2</div>
      </div>

      <button
        className="w-full mt-1 py-3 bg-white text-black rounded-full shadow-md shadow-purple-400"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default SettingsContent;
