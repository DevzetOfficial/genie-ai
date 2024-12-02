import { ArrowRight } from "lucide-react";
import { Button } from "./frontend-button";

export const HeroContent = () => {
  return (
    <div className="text-white">
      <h1 className=" text-3xl md:text-4xl lg:text-6xl xl:text-[96px] font-bold  leading-none mb-10">
        Smart Sales, Strategic Marketing.
      </h1>
      <p className="text-2xl leading-normal opacity-80 mb-[56px]">
        Using Al-Driven Operations to Accelerate Business Growth
      </p>
      <Button variant={"default"}>
        Start your free trial today <ArrowRight className="h-8 w-8 shrink-0" />
      </Button>
    </div>
  );
};
