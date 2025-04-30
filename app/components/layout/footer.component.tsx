const FooterComponent = () => {
  return (
    <div className="bg-red-600 min-h-48 text-white px-6 py-8 flex flex-col gap-6">
      <div className="flex justify-around items-start">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Danantiri</span>
          <span>Blockchain-Based Government Fund Tracking</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Supported Cryptocurrencies</span>
          <span>💎 IDRX Lisk Sepolia Testnet</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Connect With Us</span>
          <span>🐦 Discord Monokuro</span>
        </div>
      </div>
      <div className="h-[1px] bg-white"></div>
      <div className="flex justify-center items-center">
        © 2025 Danantiri. All rights reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
