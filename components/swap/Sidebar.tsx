"use client";

import "@fontsource/geist-sans";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/swap/squid-icon-white.svg";
import BlackLogo from "/public/swap/Squid_Icon_Logo_Black.svg";

// -------SVGs---------
import Smile from "/public/swap/smillie.svg";
import Swap from "/public/swap/swap.svg";
import Nft from "/public/swap/nft.svg";
import SwapClassic from "/public/swap/swapClassic.svg";
import Ecosystem from "/public/swap/ecosystem.svg";
import Developer from "/public/swap/developer.svg";
import Mirror from "/public/swap/mirror.svg";
import Widget from "/public/swap/widget.svg";
import Light from "/public/swap/light.svg";
import Direction from "/public/swap/updown.svg";

// -----Icons-----
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";


export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MenuItem = ({ href, icon, text, target, rel }) => {
    const isActive = pathname === href;

    return (
      <Link href={href} passHref>
        <a
          target={target}
          rel={rel}
          className={`flex items-center gap-3 p-2 px-3 text-sm font-geistSans rounded-xl cursor-pointer transition-colors
                      ${
                        isActive
                          ? "bg-[#6B45A1] text-white"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
        >
          <span className={isActive ? "text-white" : "text-gray-700"}>
            {icon}
          </span>
          {text}
        </a>
      </Link>
    );
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-white bg-opacity-20 z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div className="relative z-20 min-h-screen">
        <div
          ref={sidebarRef}
          className={`fixed top-2 left-3 px-2 bg-white p-1 font-geistSans rounded-3xl shadow-gray-300 shadow-md transition-all duration-300 ease-in-out overflow-hidden
                      ${isExpanded ? "w-60 h-[95%]" : "w-20 h-10 pt-1 px-2"}`}
        >
          <div className="flex items-center justify-between z-20 rounded-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">
                <Image src={BlackLogo} alt="Logo" width={25} height={25} />
              </div>
              {isExpanded && (
                <span className="text-gray-500 text-sm font-semibold">
                  Squid
                </span>
              )}
            </div>
            {isExpanded ? (
              <HiX
                className="ml-2 text-xl text-gray-700 cursor-pointer"
                onClick={toggleExpand}
              />
            ) : (
              <HiOutlineMenuAlt4
                className="text-2xl text-gray-700 cursor-pointer"
                onClick={toggleExpand}
              />
            )}
          </div>

          {isExpanded && (
            <div className="h-[calc(100%-50px)] overflow-y-auto scrollbar-hide text-white">
              <nav>
                <MenuItem
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Image src={Smile} alt="Home" width={20} height={20} />}
                  text="Home"
                />

                <h1 className="text-gray-400 text-xs m-2 ml-3">Products</h1>
                <ul>
                  <MenuItem
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Image src={Swap} alt="Swap" width={20} height={20} />}
                    text="Swap"
                  />
                  <MenuItem
                    href="https://checkout.squidrouter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image
                        src={Nft}
                        alt="NFT Collection"
                        width={18}
                        height={18}
                      />
                    }
                    text="NFT Checkout"
                  />
                  <MenuItem
                    href="https://classic.squidrouter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image
                        src={SwapClassic}
                        alt="Swap Classic Legacy"
                        width={20}
                        height={20}
                      />
                    }
                    text="Swap Classic Legacy"
                  />
                </ul>

                <h1 className="text-gray-400 text-xs m-2 ml-3">Learn</h1>
                <ul>
                  <MenuItem
                    href="https://www.squidrouter.com/ecosystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image
                        src={Ecosystem}
                        alt="Squid Ecosystem"
                        width={21}
                        height={21}
                      />
                    }
                    text="Squid Ecosystem"
                  />
                  <MenuItem
                    href="https://www.squidrouter.com/squid-school"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<HiOutlineBookOpen className="text-xl" />}
                    text="Squid School"
                  />
                </ul>

                <h1 className="text-gray-400 text-xs m-2 ml-3">Social</h1>
                <ul>
                  <MenuItem
                    href="https://discord.com/invite/squidrouter"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaDiscord className="text-xl" />}
                    text="Discord"
                  />
                  <MenuItem
                    href="https://x.com/squidrouter"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaXTwitter className="text-xl" />}
                    text="x.com"
                  />
                  <MenuItem
                    href="https://squid.mirror.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image src={Mirror} alt="Mirror" width={20} height={20} />
                    }
                    text="Mirror"
                  />
                </ul>

                <h1 className="text-gray-400 text-xs my-2 ml-3">Developers</h1>
                <ul>
                  <MenuItem
                    href="https://github.com/0xsquid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaGithub className="text-xl" />}
                    text="Github"
                  />
                  <MenuItem
                    href="https://docs.squidrouter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image
                        src={Developer}
                        alt="Developer Docs"
                        width={20}
                        height={20}
                      />
                    }
                    text="Developer Docs"
                  />
                  <MenuItem
                    href="https://v2.widget.squidrouter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <Image
                        src={Widget}
                        alt="Widget Studio"
                        width={20}
                        height={20}
                      />
                    }
                    text="Widget Studio"
                  />
                </ul>

                <div className="text-xs text-gray-500 flex justify-between my-10">
                <div className="flex gap-3">
                  <Link href="/terms" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-500">
                      Terms
                    </a>
                  </Link>
                  <p>|</p>
                  <Link href="/privacy" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-500">
                      Privacy
                    </a>
                  </Link>
                </div>

                  <div className="flex gap-3">
                    <MdLightMode />

                    <Image
                      src={Direction}
                      alt="Direction"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
