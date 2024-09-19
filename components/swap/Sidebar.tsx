"use client";

import "@fontsource/geist-sans";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/swap/squid-icon-white.svg";

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

  const MenuItem = ({ href, icon, text }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <li
          className={`flex items-center gap-3 p-2 px-3 text-sm font-geistSans rounded-xl cursor-pointer transition-colors
                        ${
                          isActive
                            ? "bg-[#6B45A1] text-white"
                            : "text-gray-300 hover:bg-[#1f2124]"
                        }`}
        >
          <span className={isActive ? "text-white" : "text-gray-300"}>
            {icon}
          </span>
          {text}
        </li>
      </Link>
    );
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div className="relative z-20 min-h-screen">
        <div
          ref={sidebarRef}
          className={`fixed top-2 left-2 bg-[#17191C] p-1 font-geistSans rounded-3xl transition-all duration-300 ease-in-out overflow-hidden
                      ${isExpanded ? "w-60 h-[95%]" : "w-20 h-10"}`}
        >
          <div className="flex items-center justify-between pt-2 px-3 w-full z-20 bg-[#17191C] rounded-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">
                <Image src={Logo} alt="Logo" width={25} height={25} />
              </div>
              {isExpanded && (
                <span className="text-white text-sm font-medium">Squid</span>
              )}
            </div>
            {isExpanded ? (
              <HiX
                className="text-xl text-white cursor-pointer"
                onClick={toggleExpand}
              />
            ) : (
              <HiOutlineMenuAlt4
                className="text-xl text-white cursor-pointer"
                onClick={toggleExpand}
              />
            )}
          </div>

          {isExpanded && (
            <div className="h-[calc(100%-50px)] overflow-y-auto scrollbar-hide text-white">
              <nav>
                <MenuItem
                  href="/"
                  icon={<Image src={Smile} alt="Home" width={20} height={20} />}
                  text="Home"
                />

                <h1 className="text-gray-600 text-xs m-2 ml-3">Products</h1>
                <ul>
                  <MenuItem
                    href="/"
                    icon={
                      <Image src={Swap} alt="Swap" width={20} height={20} />
                    }
                    text="Swap"
                  />
                  <MenuItem
                    href="/"
                    icon={
                      <Image
                        src={Nft}
                        alt="NFT Collection"
                        width={18}
                        height={18}
                      />
                    }
                    text="NFT Collection"
                  />
                  <MenuItem
                    href="/"
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

                <h1 className="text-gray-600 text-xs m-2 ml-3">Learn</h1>
                <ul>
                  <MenuItem
                    href="/"
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
                    href="/"
                    icon={<HiOutlineBookOpen className="text-xl" />}
                    text="Squid School"
                  />
                </ul>

                <h1 className="text-gray-600 text-xs m-2 ml-3">Social</h1>
                <ul>
                  <MenuItem
                    href="/discord"
                    icon={<FaDiscord className="text-xl" />}
                    text="Discord"
                  />
                  <MenuItem
                    href="/twitter"
                    icon={<FaXTwitter className="text-xl" />}
                    text="x.com"
                  />
                  <MenuItem
                    href="/mirror"
                    icon={
                      <Image src={Mirror} alt="Mirror" width={20} height={20} />
                    }
                    text="Mirror"
                  />
                </ul>

                <h1 className="text-gray-600 text-xs my-2 ml-3">Developers</h1>
                <ul>
                  <MenuItem
                    href="/github"
                    icon={<FaGithub className="text-xl" />}
                    text="Github"
                  />
                  <MenuItem
                    href="/"
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
                    href="/"
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

                <div className="text-xs text-gray-300 flex justify-between my-10">
                  <div className="flex gap-3">
                    <h1>Terms</h1>
                    <p>|</p>
                    <p>Privacy</p>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src={Light}
                      alt="Light mode"
                      width={20}
                      height={20}
                    />
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
