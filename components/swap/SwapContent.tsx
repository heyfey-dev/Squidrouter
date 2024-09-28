import React from 'react';
import PayField from './PayField';
import ReceiveField from './ReceiveField';
import { IoIosArrowRoundDown } from "react-icons/io";

const SwapContent: React.FC = () => (
  <div className="border">
    <PayField />
    <div className="flex justify-center my-2">
      <IoIosArrowRoundDown size={24} className="hidden lg:flex text-gray-200" />
      <IoIosArrowRoundDown size={36} className="lg:hidden text-gray-200" />
    </div>
    <ReceiveField />
    <div className="px-4">
      <button className="w-full bg-[#a07fd0] text-xl lg:text-sm text-white py-4 md:py-3 rounded-full hover:bg-[#b793ed]">
        Connect
      </button>
    </div>
  </div>
);

export default SwapContent;
