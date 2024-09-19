import React from 'react';

export default function History() {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Transaction History</h3>
      <ul className="space-y-2">
        <li className="bg-gray-800 p-2 rounded">Swap: 0.1 BNB to 10 POL</li>
        <li className="bg-gray-800 p-2 rounded">Swap: 0.2 BNB to 20 POL</li>
        <li className="bg-gray-800 p-2 rounded">Swap: 0.05 BNB to 5 POL</li>
      </ul>
    </div>
  );
}