import React from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";

interface CurrencySelectProps {
  currency: string;
  icon: React.ReactNode;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ currency, icon }) => (
  <div className="flex items-center bg-[#272d36] text-[#B1B6BF] rounded-full px-3 py-1 cursor-pointer hover:bg-gray-700">
    {icon}
    <span className="ml-2 font-semibold">{currency}</span>
    <IoIosArrowRoundDown size={16} className="ml-1" />
  </div>
);

export default CurrencySelect;
