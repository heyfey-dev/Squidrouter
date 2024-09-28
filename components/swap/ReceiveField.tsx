import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';
import Modal from './Modal';
import Image from 'next/image';
import CryptoSwap from '/public/swap/cryptoSwap.svg';

const ReceiveField: React.FC = () => {
  const [receiveValue, setReceiveValue] = useState<string>('');
  const [receiveCurrency, setReceiveCurrency] = useState<string>('POL');
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState<boolean>(false);

  return (
    <div className="relative border-t border-gray-700 w-full p-3 px-4">
      <div
        className="relative flex justify-between items-center mb-2 py-1"
        onMouseEnter={() => setIsReceiveModalOpen(true)}
        onMouseLeave={() => setIsReceiveModalOpen(false)}
      >
        <span className="text-xs text-gray-500 font-medium">Receive</span>
        {isReceiveModalOpen && <Modal message="Select recipient" />}
      </div>

      <CurrencySelect currency={receiveCurrency} icon={<span className="text-purple-300">∞</span>} />

      <input
        type="text"
        value={receiveValue}
        onChange={(e) => setReceiveValue(e.target.value)}
        className="w-full bg-transparent text-3xl text-purple-300 outline-none mt-2"
        placeholder="0"
      />

      <div className="flex justify-between text-[#767B8F] text-sm mt-2">
        <div className="flex items-center gap-1">
          <Image src={CryptoSwap} alt="Crypto Swap" width={15} height={15} />
          <span>$0</span>
        </div>
        <p className="flex gap-2 items-center text-lg">
          Balance: 0<span className="bg-gray-500 p-1 px-3 text-sm md:text-xs text-gray-900 rounded-full">Max</span>
        </p>
      </div>
    </div>
  );
};

export default ReceiveField;
