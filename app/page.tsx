import Image from "next/image";
import dynamic from "next/dynamic";

const InfiniteCarousel = dynamic(
  () => import("../components/InfiniteCarousel"),
  {
    ssr: false,
  }
);

// ----------IMAGES
import Black_Text from "/public/Squid_Text_Black.svg";
import Background from "/public/bg-dark.png";

// ------COMPONENTS------
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import UnlimitedAccess from "../components/UnlimitedAccess";
import Footer from "../components/Footer";
import MultiDirectionCarousel from "../components/MultiDirectionCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen font-cabin bg-[#E6FA36]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen lg:pb-12">
        <Header />

        {/* Main Logo */}
        <div className="w-full flex justify-center items-center py-8">
          <Image src={Black_Text} width={1000} alt="Black Text" />
        </div>

        {/* Main Section */}
        <div className="text-center md:py-8">
          <UnlimitedAccess />
          <InfiniteCarousel speed={5} />

          <h1 className="text-5xl font-light md:font-bold mt-16">
            Boost across chains in under 20 seconds
          </h1>
          <p className="text-2xl m-4">
            Squid Boost has saved over 5 years of time so far.
          </p>

          {/* Video Section */}
          <video
            src="https://www.squidrouter.com/assets/240425-SQU-web_anim-boost_toggle-vp9-chrome.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-4xl h-auto mx-auto my-5"
          />

          <div className="my-20 space-y-14 md:space-y-24">
            <div className="space-y-3">
              <h2 className="text-5xl md:font-medium">Trusted by the best</h2>
              <p className="text-2xl text-center font-light">
                Cross-chain staking, minting, payments and more. Integrated via
                the Squid SDK
              </p>
            </div>

            {/* Multi-direction Carousel */}
            <MultiDirectionCarousel />

            <div className="block md:flex gap-8 md:gap-20 justify-center items-center my-28 md:my-0 mt-16">
              <button className="border-2 border-black text-black text-md md:text-xl font-light rounded-full p-2 px-4 md:px-8 hover:text-white hover:bg-black hover:cursor-pointer">
                Squid Ecosystem
              </button>
              <button className="border-2 border-black text-black text-md md:text-xl rounded-full p-2 px-4 md:px-8 hover:text-white hover:bg-black hover:cursor-pointer">
                Developer Docs
              </button>
            </div>
          </div>
        </div>

        <Statistics />

        {/* Final Video Section */}
        <div className="w-full px-5 my-16 flex justify-center items-center">
          {/* For larger screens */}
          <video
            src="https://www.squidrouter.com/assets/horizontal-cover.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-5xl h-auto hidden md:flex"
          />
          {/* For smaller screens */}
          <video
            src="https://www.squidrouter.com/assets/squid-vert-vp9-chrome.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-5xl h-auto md:hidden"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
