'use client';

import React from 'react';

const Card = ({ title, description, videoUrl }) => {
  return (
    <div className="flex-shrink-0 w-[22rem] h-[27rem] bg-white m-2 md:mx-5 rounded-3xl shadow-lg overflow-hidden relative">
      {/* Video fills the entire card */}
      <div className="absolute inset-0 z-0">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title displayed on top of the video */}
      <div className="absolute inset-x-0 top-0 p-4 z-1">
        <h3 className="text-2xl font-bold text-gray-700">{title}</h3>
      </div>

      {/* Optional: Description */}
      {description && (
        <div className="absolute bottom-0 left-0 p-4 py-5 bg-black bg-opacity-50 w-full z-10">
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
