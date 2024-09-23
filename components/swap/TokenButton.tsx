import Image from 'next/image';

export default function EthButton() {
  return (
    <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
      <Image 
        src="/eth-icon.png" 
        alt="ETH Icon" 
        width={20} 
        height={20} 
        className="mr-2"
      />
      <span className="mr-1">ETH</span>
      <span>&#x25B6;</span> {/* Right Arrow */}
    </button>
  );
}
