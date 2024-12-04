import { Button } from "../shared/frontend-button";
import { ArrowRight } from "lucide-react";
import fingerprint from "@/assets/fingerprint.webp";

function FingerPrint() {
  return (
    <div className="grid lg:grid-cols-[5fr_7fr] gap-8">
      <div className="space-y-5 md:space-y-10 lg:mr-20 pt-5 md:pt-14">
        <h3 className="text-3xl md:text-[40px] font-semibold leading-tight  text-[#010609] mb-4 md:mb-8">
          Business Intelligence at Your Fingertips.
        </h3>
        <p className="text-[rgba(0,0,0,0.70)] text-lg leading-[140%] mb-10">
          Intelligence, rigorously tested marketing methodologies, refined sales
          strategies, and Adaptive Artificial Intelligence to deliver optimized
          solutions for businesses.
        </p>
        <Button variant={"default"}>
          Start your free trial <ArrowRight className="h-8 w-8 shrink-0" />
        </Button>
      </div>
      <div className="aspect-[752/480] ">
        <img
          className="size-full object-cover rounded-2xl"
          src={fingerprint}
          alt="fingerprint security ensure image"
        />
      </div>
    </div>
  );
}

export default FingerPrint;
