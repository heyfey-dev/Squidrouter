import React from 'react';


export default function Pay() {
  return (
    <div>
      <h1>Pay</h1>
      <div className="flex overflow-hidden space-x-2">
        <div className="flex items-center justify-center text-lg w-10 h-10 p-1 rounded-full border-2 ">
          o
        </div>
        <div className="flex items-center">
          <div className="w-5 h-3 border-2 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center text-lg w-32 h-10 p-1 rounded-full border-2 ">
          {/* Add placeholder or content */}
          Content
        </div>
      </div>

      {/* Input component should be defined or imported correctly */}
      <input type="number" placeholder="0" className="border-2 rounded-md p-2 mt-4" />
    </div>
  );
}
