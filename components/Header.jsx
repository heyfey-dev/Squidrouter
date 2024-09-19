"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ------IMAGES---------
import Black_Logo from "/public/Squid_Icon_Logo_Black.svg";
import DevIcon from "/public/DevIcon.svg";
import App from "/public/squid_icons/squid_app.svg";
import Nft from "/public/squid_icons/nft.svg";
import Developer from "/public/squid_icons/devDocs.svg";
import Ecosystem from "/public/squid_icons/ecosystem.svg";
import Speaker from "/public/squid_icons/speaker.svg";

// icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { GiAtom } from "react-icons/gi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Image
            src={Black_Logo}
            width={60}
            alt="Squid Logo"
            className="transition-all duration-300 hover:filter hover:invert"
          />
          <RiMenuFill
            className="hidden lg:block text-3xl text-black font-semibold hover:text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex items-center space-x-4">
          {isOpen && isMobile ? (
            <RiCloseLine
              className="lg:hidden text-3xl text-black font-semibold hover:text-white cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <RiMenuFill
              className="lg:hidden text-3xl text-black font-semibold hover:text-white cursor-pointer"
              onClick={toggleMenu}
            />
          )}
          <Link href="/swap" className="hidden lg:block">
            <button className="border-2 border-black text-black font-medium text-3xl rounded-full p-1 px-5 hover:text-white hover:bg-black hover:cursor-pointer">
              Swap
            </button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className={`w-full md:w-[35%] absolute top-0 left-0 text-black bg-white md:rounded-3xl p-7 shadow-lg z-50 ${
            isMobile ? "h-screen overflow-y-auto" : "md:top-20 md:left-20"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-black hover:text-gray-600 lg:hidden"
          >
            <RiCloseLine />
          </button>
          <div className="md:grid grid-cols-2 gap-x-8 gap-y-14 md:gap-y-10 mt-5 md:mt-4">
            <div className="mb-4 space-y-2">
              <h3 className="lg:text-xl mb-2">Products</h3>
              <ul className="space-y-2">
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="mr-2">
                    <Image
                      src={App}
                      alt="Squid App"
                      width={30}
                      height={24}
                      className="text-black"
                    />
                  </span>{" "}
                  Squid App
                </li>
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="mr-2">
                    <Image
                      src={Nft}
                      alt="Nft"
                      width={30}
                      height={24}
                      className="text-black"
                    />
                  </span>{" "}
                  Squid NFT Checkout
                </li>
              </ul>
            </div>
            <div className="mb-4 spacey-2">
              <h3 className="md:text-xl mb-2">Social</h3>
              <ul className="space-y-2">
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <FaDiscord className="ml-1 mr-2 text-xl" /> Discord
                </li>
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <FaXTwitter className="ml-1 mr-2 text-xl" /> X (Twitter)
                </li>
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="mr-2">
                    <Image
                      src={Speaker}
                      alt="Nft"
                      width={30}
                      height={24}
                      className="text-black"
                    />
                  </span>{" "}
                  Mirror Blog
                </li>
              </ul>
            </div>
            <div className="mb-4 space-y-2">
              <h3 className="md:text-xl mb-2">Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="mr-1">
                    <Image
                      src={Ecosystem}
                      alt="Ecosystem"
                      width={30}
                      height={24}
                      className="text-black"
                    />
                  </span>{" "}
                  Squid Ecosystem
                </li>
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="ml-1 mr-2">
                    <HiOutlineBookOpen className="text-xl" />
                  </span>{" "}
                  Squid School
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="md:text-xl mb-2">Developers</h3>
              <ul className="space-y-2">
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <FaGithub className="ml-1 mr-3 text-xl" /> Github
                </li>
                <li className="flex items-center cursor-pointer hover:text-gray-400">
                  <span className="mr-2">
                    <Image
                      src={Developer}
                      alt="Developer Documents"
                      width={30}
                      className="text-black"
                    />
                  </span>{" "}
                  Developer Docs
                </li>
                <li className="flex items-cent cursor-pointer hover:text-gray-400">
                  <span className="mr-2">
                    <Image
                      src={Developer}
                      alt="widgets"
                      width={30}
                      height={24}
                      className="text-black"
                    />
                  </span>{" "}
                  Squid Widgets
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-2 pt-4">
            <ul className="space-y-1">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Terms</li>
              <li className="cursor-pointer">Privacy</li>
            </ul>
          </div>
          <Link href="/swap">
            <button className="border border-black text-black text-lg rounded-full p-2 px-6 hover:text-white hover:bg-black hover:cursor-pointer lg:hidden mt-4">
              Swap
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
