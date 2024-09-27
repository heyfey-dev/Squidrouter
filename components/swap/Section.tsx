import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the SquidWidget to avoid SSR issues
const SquidWidget = dynamic(() => import("@0xsquid/widget").then(module => module.SquidWidget), { ssr: false });

const Section: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-4 border-red-600 w-full md:max-w-sm mt-5 h-full md:h-fit mx-auto relative">
        <SquidWidget
          config={{
            integratorId: "kurokeme-cb998bbb-5acb-4493-9765-2899a30b0c38", // Your integrator ID
            apiUrl: "https://apiplus.squidrouter.com",
            slippage: 1.5,
            infiniteApproval: false,
            enableExpress: true,
            environment: "mainnet",
            // Adding style properties conditionally
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
              w: 96,
              height: "500px",
            },
          } as any}
        />
      </div>
    </div>
  );
};

export default Section;
