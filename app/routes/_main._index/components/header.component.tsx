import { Button } from "~/components/ui/button";

const HeaderSectionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-3 py-10">
      <img src="/images/tiri.png" alt="logo" className="h-80" />
      <h1 className="text-3xl font-bold text-red-600">
        Support Meaningful Projects with Crypto
      </h1>
      <span className="text-lg text-gray-600 text-center w-1/2">
        Your allocated fund will be pooled and distributed to impactful
        programs.
      </span>
      <Button variant={"destructive"} size={"lg"} className="mt-2">
        Contribute
      </Button>
    </div>
  );
};

export default HeaderSectionComponent;
