import { Button } from "../ui/button";

const HeaderComponent = () => {
  return (
    <div className="bg-white h-20 border border-b-black flex justify-between px-4 items-center">
      <img src="/images/tiri.png" alt="logo" className="w-48" />
      <Button variant={"destructive"}>Connect Wallet</Button>
    </div>
  );
};

export default HeaderComponent;
