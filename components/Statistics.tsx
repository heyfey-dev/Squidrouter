


export default function Statistics() {
    return (
<div className="py-8 space-y-16">
<h2 className="text-center text-6xl font-medium">350k people have used Squid</h2>
<div className="grid grid-cols-1 md:grid-cols-3 px-36 mb-24">
  <div className="flex flex-col items-center p-6">
    <video
      src="https://www.squidrouter.com/assets/SQU-web_anim-icon-currency-vp9-chrome.webm"
      autoPlay
      loop
      muted
      playsInline
      className="w-48"
    />
    <div className="space-y-4 text-center mt-4">
      <h1 className="text-7xl text-black font-poppins">$1.5b</h1>
      <p className="text-lg text black">safely routed</p>
    </div>
  </div>
  <div className="flex flex-col items-center p-6 ">
    <video
      src="https://www.squidrouter.com/assets/SQU-web_anim-icon-users-vp9-chrome.webm"
      autoPlay
      loop
      muted
      playsInline
      className="w-48"
    />
    <div className="space-y-4 text-center mt-4">
      <h1 className="text-7xl text-black font-bold">900k</h1>
      <p className="text-xl text black">transactions</p>
    </div>
  </div>
  <div className="flex flex-col items-center p-6">
    <video
      src="https://www.squidrouter.com/assets/SQU-web_anim-icon-audits-vp9-chrome.webm"
      autoPlay
      loop
      muted
      playsInline
      className="w-48"
    />
    <div className="space-y-4 text-center mt-4">
      <h1 className="text-7xl text-black font-sans font-bold">7</h1>
      <p className="text-lg text black">smart contract audits</p>
    </div>
  </div>
</div>
</div>
  );
}
