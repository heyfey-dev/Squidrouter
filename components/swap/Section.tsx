// Import necessary modules
"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import SquidWidget to avoid SSR issues
const SquidWidget = dynamic(
  () => import("@0xsquid/widget").then((module) => module.SquidWidget),
  { ssr: false }
);

const Section: React.FC = () => {
  return (
    <div className="w-full md:h-screen md:flex md:justify-center items-center">
      <div className="w-full md:max-w-sm mt-5 md:mt-0 h-full md:h-fit md:my-10 mx-auto relative overflow-hidden">
        
        {/* Place the SquidWidget here with your custom configuration */}
        <SquidWidget
          config={{
            integratorId: "squid-swap-widget",
            companyName: "Custom",
            style: {
              neutralContent: "#9DA7B1",
              baseContent: "#FFFDFD",
              base100: "#434565",
              base200: "#202230",
              base300: "#161522",
              error: "#ED6A5E",
              warning: "#FFB155",
              success: "#2EAEB0",
              primary: "#AB67CB",
              secondary: "#37394C",
              secondaryContent: "#B2BCD3",
              neutral: "#383A4C",
              roundedBtn: "24px",
              roundedCornerBtn: "999px",
              roundedBox: "20px",
              roundedDropDown: "0px",
            },
            slippage: 1.5,
            infiniteApproval: false,
            enableExpress: true,
            apiUrl: "https://api.squidrouter.com",
            comingSoonChainIds: [],
            titles: {
              swap: "Swap",
              settings: "Settings",
              wallets: "Wallets",
              tokens: "Select Token",
              chains: "Select Chain",
              history: "History",
              transaction: "Transaction",
              allTokens: "Select Token",
              destination: "Destination address",
              depositAddress: "Deposit address",
              seimetamask: "Important message!",
            },
            priceImpactWarnings: {
              warning: 3,
              critical: 5,
            },
            environment: "mainnet",
            showOnRampLink: true,
            defaultTokens: [],
          }}
        />
      </div>
    </div>
  );
};

export default Section;
