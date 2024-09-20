"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Logo {
  src: string;
  alt: string;
}

interface CarouselRowProps {
  logos: Logo[];
  direction: "left" | "right";
  speed: number;
}

const CarouselRow: React.FC<CarouselRowProps> = ({
  logos,
  direction,
  speed,
}) => {
  const controls = useAnimation();
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      if (rowRef.current) {
        const rowWidth = rowRef.current.offsetWidth;
        await controls.start({
          x: direction === "left" ? -rowWidth : rowWidth,
          transition: {
            duration: rowWidth / speed,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };
    animate();
  }, [controls, direction, speed]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () => {
    if (rowRef.current) {
      const rowWidth = rowRef.current.offsetWidth;
      controls.start({
        x: direction === "left" ? -rowWidth : rowWidth,
        transition: {
          duration: rowWidth / speed,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        ref={rowRef}
        className="inline-flex"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto mx-4"
          />
        ))}
      </motion.div>
    </div>
  );
};

const MultiDirectionCarousel: React.FC = () => {
  const logos: Logo[] = [
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/3ecbacdc7466e54718257a310e56e61a2a9e614b-394x66.svg", alt: "ChainFlip" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/6e1221d0cc4ec4d1196263c2ed601a489dd76b14-323x66.svg", alt: "Exodus" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/a3cab6e224f0b2a3b67efecefed0954808d67182-343x66.svg", alt: "Vertex" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/19a69eed74e348d82667afe05641583c702d564d-215x66.svg", alt: "Safe" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/eb564c17da29f86e9c310ba75e5b4b1654715e4f-285x66.svg", alt: "Lido" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/a96f1772c2e8660d17440d2d3ecd6bda6566b4b2-258x66.svg", alt: "Circle" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/37bdb7a40c20b10e05ab10285d2b30141ecd5dd7-551x60.png", alt: "Blockchain" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/44d2673ebe631d81552bd8ad1a26dc1dee8427dc-244x66.svg", alt: "Trust" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/5d003f986075fdcb81360a87c61366824622cfbc-202x66.svg", alt: "Ondo" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/fce633ff6ab36642b14f1b50a9e364828cd43cc0-426x66.svg", alt: "Pancake Swap" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/99093a966bc9b32db41930536f337c287c78d975-234x66.svg", alt: "Kado" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/1c1a05088102051e9e4262c31258addba3fe30d5-245x66.svg", alt: "Sushi" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/a7fe0df059d4c7572e82b2a4f095f585a1932506-213x66.svg", alt: "dydx" },
    { src: "https://cdn.sanity.io/images/qbdchj8q/production/e86f85f12e41dde953946d2ba7c95b7e5af1cf38-400x66.svg", alt: "Hyperliquid" },
  ];

  return (
    <div className="space-y-6">
      <CarouselRow logos={logos} direction="left" speed={50} />
      <CarouselRow logos={logos} direction="left" speed={70} />
      <CarouselRow logos={logos} direction="left" speed={60} />
    </div>
  );
};

export default MultiDirectionCarousel;
