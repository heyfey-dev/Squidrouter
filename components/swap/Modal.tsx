import React from 'react';

const Modal = ({ message }: { message: string }) => (
  <div className="absolute top-[-27px] -left-1 bg-[#2C2F36] rounded-2xl w-fit p-1 px-3 text-gray-400 z-10 shadow-xl">
    <h2 className="text-xs font-semibold">{message}</h2>
  </div>
);

export default Modal;
