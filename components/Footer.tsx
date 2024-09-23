import Image from "next/image";
import Black_Text from "../public/Squid_Text_Black.svg";
import Axelar from "../public/Axelar.png";

export default function Footer() {
  return (
    <div className="md:mx-14 my-10 mt-28 py-14 space-y-8 text-black md:rounded-[2rem] bg-gray-100">
      
      {/* -----Form for smaller screens------- */}
      <div className="mx-7 rounded-3xl shadow-sm md:hidden bg-white">
        <form className="p-5 space-y-14">
          <h1 className="text-3xl">Sign up to Squid's newsletter</h1>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-3xl text-3xl font-light focus:outline-none"
            />
            <button className="border-2 border-black text-black text-xl rounded-full p-3 px-9 hover:text-white hover:bg-black hover:cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <Image
            src={Black_Text}
            width={400}
            height={100}
            alt="Squid Text Logo"
            className="hidden md:flex"
          />
          <Image
            src={Black_Text}
            width={500}
            height={100}
            alt="Squid Text Logo"
            className="flex justify-center items-center md:hidden"
          />
        </div>
        <div className="md:grid grid-cols-1 md:grid-cols-3 space-x-10 hidden">
          <div className="space-y-4">
            <h1 className="text-5xl font-medium">Resources</h1>
            <div className="text-2xl">
              <p>Developer Docs</p>
              <p className="">Help Center</p>
              <p className="">Squid School</p>
              <p className="">Terms</p>
              <p className="">Privacy</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-medium">Products</h1>
            <div className="text-2xl">
              <p>Squid App</p>
              <p>Buy Button</p>
              <p>NFT Checkout</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-medium text-5xl">Join</h1>
            <div className="text-2xl">
              <p>X(Twitter)</p>
              <p>Discord</p>
              <p>Mirror</p>
            </div>
          </div>
        </div>
      </div>

      {/* --Axelar for smaller screen------ */}
      <div className="space-y-4 md:hidden border text-center">
        <p className="text-lg text-gray-800 font-thin">Secured by Axelar</p> {/* Fixed typo */}
        <div className="flex justify-center">
          <Image src={Axelar} width={300} height={100} alt="Axelar Logo" /> {/* Add height */}
        </div>
      </div>

      <div className="hidden md:flex ">
        <div className="w-1/2 p-6 space-y-4">
          <p className="text-lg">Secured by Axelar</p>
          <Image src={Axelar} width={300} height={100} alt="Axelar Logo" />
        </div>
        <div className="w-2/3 rounded-3xl shadow-lg hidden md:block">
          <form className="p-5 space-y-8">
            <h1 className="text-3xl">Sign up to Squid's newsletter</h1>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-3xl text-3xl focus:outline-none"
              />
              <button className="border-2 border-black text-black text-xl rounded-full px-8 hover:text-white hover:bg-black hover:cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
