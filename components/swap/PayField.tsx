import React, { useState } from 'react';
import Image from 'next/image';
import CurrencySelect from './CurrencySelect';
import Modal from './Modal';

import CryptoSwap from '/public/swap/cryptoSwap.svg';

const PayField: React.FC = () => {
  const [payValue, setPayValue] = useState<string>('');
  const [payCurrency, setPayCurrency] = useState<string>('BNB'); 
  const [isPayModalOpen, setIsPayModalOpen] = useState<boolean>(false);

  return (
    <div className="relative border-t border-b border-gray-700 w-full px-4 py-2">
      <div
        className="relative flex justify-between items-center mb-2 cursor-pointer"
        onMouseEnter={() => setIsPayModalOpen(true)}
        onMouseLeave={() => setIsPayModalOpen(false)}
      >
        <span className="w-fit hover:bg-[#2C2F36] p-1 rounded-2xl md:text-xs text-gray-400">Pay</span>
        {isPayModalOpen && <Modal message="Select payment method" />}
      </div>

      <CurrencySelect currency={payCurrency} icon={<span className="text-yellow-500">▣</span>} />

      <input
        type="text"
        value={payValue}
        onChange={(e) => setPayValue(e.target.value)}
        className="w-full bg-transparent text-3xl text-yellow-400 outline-none mt-2"
        placeholder="0"
      />

      <div className="flex justify-between text-[#767B8F] text-sm mt-2">
        <div className="flex items-center gap-1 hover:bg-[#2C2F36] px-2 rounded-2xl cursor-pointer">
          <Image src={CryptoSwap} alt="Crypto Swap" width={17} height={17} />
          <span>$0</span>
        </div>
        <p className="flex gap-2 items-center text-lg">
          Balance: 0<span className="bg-gray-400 p-1 px-3 text-sm md:text-xs text-gray-800 rounded-full">Max</span>
        </p>
      </div>
    </div>
  );
};

export default PayField;
