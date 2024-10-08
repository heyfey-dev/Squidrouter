"use client";

import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { AiFillQuestionCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundDown, IoMdArrowBack } from "react-icons/io";
import { TbSettings2 } from "react-icons/tb";

// Dynamically import SquidWidget to avoid SSR issues
const SquidWidget = dynamic(
  () => import("@0xsquid/widget").then((module) => module.SquidWidget),
  { ssr: false }
);

import CryptoSwap from "/public/swap/cryptoSwap.svg";
import Slippage from "/public/swap/slippage.svg";
import Star from "/public/swap/star.svg";

// Define types
type Currency = "BNB" | "POL";
type ViewType = "swap" | "history" | "settings";

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

// Modal Component (Smaller and positioned above labels)
const Modal = ({ message }: { message: string }) => (
  <div className="absolute top-[-27px] -left-1 bg-[#2C2F36] rounded-2xl w-fit p-1 px-3 text-gray-400 z-10 shadow-xl">
    <h2 className="text-xs font-semibold">{message}</h2>
  </div>
);

// CurrencySelect Component
const CurrencySelect = ({
  currency,
  icon,
}: {
  currency: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center bg-[#272d36] text-[#B1B6BF] rounded-full px-3 py-1 cursor-pointer hover:bg-gray-700">
    {icon}
    <span className="ml-2 font-semibold">{currency}</span>
    <IoIosArrowRoundDown size={16} className="ml-1" />
  </div>
);

// PayField Component
const PayField: React.FC = () => {
  const [payValue, setPayValue] = useState<string>("");
  const [payCurrency, setPayCurrency] = useState<string>("BNB"); // Default currency
  const [isPayModalOpen, setIsPayModalOpen] = useState<boolean>(false); // Modal state

  return (
    <div className="relative border-t border-b border-gray-700 w-full px-4 py-2">
      {/* Label with Modal */}
      <div
        className="relative flex justify-between items-center mb-2 cursor-pointer"
        onMouseEnter={() => setIsPayModalOpen(true)}
        onMouseLeave={() => setIsPayModalOpen(false)}
      >
        <span className="w-fit hover:bg-[#2C2F36] p-1 rounded-2xl md:text-xs text-gray-400">
          Pay
        </span>
        {isPayModalOpen && <Modal message="Select payment method" />}
      </div>

      {/* Currency Button */}
      <CurrencySelect
        currency={payCurrency}
        icon={<span className="text-yellow-500">▣</span>}
      />

      <SquidWidget
        config={{
          integratorId: "kurokeme-cb998bbb-5acb-4493-9765-2899a30b0c38",
          apiUrl: "https://apiplus.squidrouter.com",
        }}
      />

      {/* Input Field */}
      <input
        type="text"
        value={payValue}
        onChange={(e) => setPayValue(e.target.value)}
        className="w-full bg-transparent text-3xl text-yellow-400 outline-none mt-2"
        placeholder="0"
      />

      {/* Balance and Crypto Swap Icon */}
      <div className="flex justify-between text-[#767B8F] text-sm mt-2">
        <div className="flex items-center gap-1 hover:bg-[#2C2F36] px-2 rounded-2xl cursor-pointer">
          <Image src={CryptoSwap} alt="Crypto Swap" width={17} height={17} />
          <span>$0</span>
        </div>
        <p className="flex gap-2 items-center text-lg">
          Balance: 0
          <span className="bg-gray-400 p-1 px-3 text-sm md:text-xs text-gray-800 rounded-full">
            Max
          </span>
        </p>
      </div>
    </div>
  );
};

// ReceiveField Component
const ReceiveField: React.FC = () => {
  const [receiveValue, setReceiveValue] = useState<string>("");
  const [receiveCurrency, setReceiveCurrency] = useState<string>("POL"); // Default currency
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState<boolean>(false); // Modal state

  return (
    <div className="relative border-t border-gray-700 w-full p-3 px-4">
      {/* Label with Modal */}
      <div
        className="relative flex justify-between items-center mb-2 py-1"
        onMouseEnter={() => setIsReceiveModalOpen(true)}
        onMouseLeave={() => setIsReceiveModalOpen(false)}
      >
        <span className="text-xs text-gray-500 font-medium">Receive</span>
        {isReceiveModalOpen && <Modal message="Select recipient" />}
      </div>

      {/* Currency Button */}
      <CurrencySelect
        currency={receiveCurrency}
        icon={<span className="text-purple-300">∞</span>}
      />

      {/* Input Field */}
      <input
        type="text"
        value={receiveValue}
        onChange={(e) => setReceiveValue(e.target.value)}
        className="w-full bg-transparent text-3xl text-purple-300 outline-none mt-2"
        placeholder="0"
      />

      {/* Balance and Crypto Swap Icon */}
      <div className="flex justify-between text-[#767B8F] text-sm mt-2">
        <div className="flex items-center gap-1">
          <Image src={CryptoSwap} alt="Crypto Swap" width={15} height={15} />
          <span>$0</span>
        </div>
        <p className="flex gap-2 items-center text-lg">
          Balance: 0
          <span className="bg-gray-500 p-1 px-3 text-sm md:text-xs text-gray-900 rounded-full">
            Max
          </span>
        </p>
      </div>
    </div>
  );
};

// Main Swap Component
const SwapContent: React.FC = () => (
  <div className="">
    {/* Pay Section */}
    <PayField />

    {/* Arrow Divider */}
    <div className="flex justify-center my-2">
      <IoIosArrowRoundDown size={24} className="hidden lg:flex text-gray-200" />
      <IoIosArrowRoundDown size={36} className="lg:hidden text-gray-200" />
    </div>

    {/* Receive Section */}
    <ReceiveField />

    {/* Connect Button */}
    <div className="px-4">
      <button className="w-full bg-[#a07fd0] text-xl lg:text-sm text-white py-4 md:py-3 rounded-full hover:bg-[#b793ed]">
        Connect
      </button>
    </div>
  </div>
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
  const [slippageMode, setSlippageMode] = useState<"Auto" | "Custom">("Auto");
  const [customSlippage, setCustomSlippage] = useState<number>(0);
  const [degenMode, setDegenMode] = useState<boolean>(false);
  const [showSlippageModal, setShowSlippageModal] = useState(false);
  const [showDegenModal, setShowDegenModal] = useState(false);

  const handleSlippageModeChange = (mode: "Auto" | "Custom") => {
    setSlippageMode(mode);
  };

  const handleCustomSlippageChange = (value: number) => {
    setCustomSlippage(Math.max(0, Math.min(5, value)));
  };

  return (
    <div className=" bg-opacity-90 backdrop-blur-lg text-white absolute bottom-0 m-4 left-0 right-0">
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
            {/* Slippage Modal */}
            {showSlippageModal && (
              <div className="absolute -top-32 -left-5 z-20 w-64 p-3 bg-opacity-40 outline-2 text-xs text-gray-300 bg-gray-600 rounded-3xl shadow-lg">
                Slippage is the price variation you are willing to accept in the
                event that the price of the trade changes while it is
                processing. If the trade fails due to too-low slippage, you will
                receive axlUSDC on the destination chain.
              </div>
            )}
          </div>

          <div className="border border-gray-700 rounded-lg flex">
            <button
              className={`border border-purple-500 px-2 py-1 text-xs rounded-lg ${
                slippageMode === "Auto" ? "bg-gray-700" : "bg-gray-800"
              }`}
              onClick={() => handleSlippageModeChange("Auto")}
            >
              Auto
            </button>
            <button
              className={`px-3 text-xs rounded-lg hover:bg-gray-600 ${
                slippageMode === "Custom" ? "bg-gray-700" : "bg-gray-800"
              }`}
              onClick={() => handleSlippageModeChange("Custom")}
            >
              Custom
            </button>
          </div>
        </div>

        {/* Custom Slippage */}
        {slippageMode === "Custom" && (
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
                onChange={(e) =>
                  handleCustomSlippageChange(Number(e.target.value))
                }
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
            {/* Degen Mode Modal */}
            {showDegenModal && (
              <div className="absolute -top-24 -left-4 z-20 w-72 p-3 bg-opacity-75 outline-2 text-xs text-gray-300 bg-gray-600 rounded-3xl shadow-lg">
                Enable at your own risk! Degen mode allows trades with a price
                impact over 5%, meaning you risk losing funds if prices shift
                unfavorably.
                <a
                  href="https://your-link-here.com" // Add your link URL here
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
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

// Main EnhancedSwap Component
const Section: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>("swap");

  const handleClose = () => {
    setCurrentView("swap");
  };

  const renderContent = () => {
    switch (currentView) {
      case "history":
        return <HistoryContent />;
      case "settings":
        return <SettingsContent onClose={handleClose} />;
      default:
        return <SwapContent />;
    }
  };

  return (
    <div className="w-full md:h-screen md:flex md:justify-center items-center">
      <div className="border-4 border-red-600 w-full md:max-w-sm mt-5 md:mt-0 h-full md:h-[88%] bg-[#17191C] text-white rounded-3xl mx-auto md:pt-5 relative overflow-hidden">
        {/* Settings and Clock Buttons */}
        <div className="flex justify-end space-x-1 mx-5 md:mx-0 my-3 md:my-0">
          <button
            onClick={() => setCurrentView("history")}
            className="text-[#B1B6BF] w-16 md:w-14 h-10 md:h-8 flex justify-center items-center rounded-3xl md:rounded-2xl bg-[#272d36] hover:bg-gray-700"
          >
            <AiOutlineClockCircle size={18} className="hidden md:flex" />
            <AiOutlineClockCircle size={22} className="md:hidden" />
          </button>
          <button
            onClick={() => setCurrentView("settings")}
            className="text-[#B1B6BF] w-16 md:w-14 h-10 md:h-8 flex justify-center items-center rounded-3xl md:rounded-2xl bg-[#272d36] hover:bg-gray-500"
          >
            <TbSettings2 size={18} className="hidden md:flex" />
            <TbSettings2 size={22} className="md:hidden" />
          </button>
        </div>

        {/* Swap Heading */}
        {currentView !== "swap" ? (
          <button onClick={handleClose} className="text-gray-400">
            <IoMdArrowBack size={24} />
          </button>
        ) : (
          <h2 className="text-4xl md:text-2xl text-gray-300 font-medium px-5 pt-2 py-2 md:py-0 mb-2 md:mb-4">
            Swap
          </h2>
        )}

        {/* Render content based on currentView */}
        {currentView !== "settings" && renderContent()}
        {currentView === "settings" && (
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
