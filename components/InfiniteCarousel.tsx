'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "./Card";

const InfiniteCarousel = ({ speed = 30 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const constraintsRef = useRef(null);

  const cards = [
    {
      title: "Fuel up with gas",
      description: "",
      videoUrl:
        "https://www.squidrouter.com/assets/240315-SQU-web_anim-fuel_up-vp9-chrome.webm",
    },
    {
      title: "Unlimited access across chains",
      description: "",
      videoUrl:
        "https://www.squidrouter.com/assets/240318-SQU-web_anim-unlimited_access-vp9-chrome.webm",
    },
    {
      title: "Get any token on any chain",
      description: "",
      videoUrl:
        "https://www.squidrouter.com/assets/SQU-web_anim-any_token-vp9-chrome.webm",
    },
    {
      title: "Buy NFTs with any token",
      description: "",
      videoUrl:
        "https://www.squidrouter.com/assets/SQU-web_anim-nfts-vp9-chrome.webm",
    },
    {
      title: "From ETH to Cosmos and back again",
      description: "",
      videoUrl:
        "https://www.squidrouter.com/assets/SQU-web_anim-eth_cosmos-vp9-chrome.webm",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    if (!isHovered) {
      controls.start({
        x: "-50%",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, speed, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: "-50%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  };

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div
      className="overflow-hidden md:my-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={constraintsRef}
    >
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        animate={controls}
        drag={isHovered ? "x" : false}
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          if (info.offset.x > 100) {
            controls.start({ x: "0%" });
          } else if (info.offset.x < -100) {
            controls.start({ x: "-50%" });
          }
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;