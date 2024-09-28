import React from "react";
import dynamic from "next/dynamic";

const SquidWidget = dynamic(() => import("@0xsquid/widget").then(module => module.SquidWidget), { ssr: false });

const Section: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
        <SquidWidget
          config={{
            integratorId: "kurokeme-cb998bbb-5acb-4493-9765-2899a30b0c38",
            apiUrl: "https://apiplus.squidrouter.com",
            slippage: 1.5,
            enableExpress: true,
            // style: {
            //   neutralContent: "#9DA7B1",
            //   baseContent: "#FFFDFD",
            //   base100: "#434565",
            //   base200: "#202230",
            //   base300: "#161522",
            //   error: "#ED6A5E",
            //   warning: "#FFB155",
            //   success: "#2EAEB0",
            //   primary: "#AB67CB",
            //   secondary: "#37394C",
            //   secondaryContent: "#B2BCD3",
            //   neutral: "#383A4C",
            //   roundedBtn: "12px",
            //   roundedCornerBtn: "12px",
            //   roundedBox: "16px",
            //   roundedDropDown: "12px",
            //   width: 200,
            //   height: 300,
            // },
          }}
        />
    </div>
  );
};

export default Section;
