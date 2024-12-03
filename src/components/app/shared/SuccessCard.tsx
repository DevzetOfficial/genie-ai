import { cn } from "@/lib/utils";
import React from "react";

interface SuccessCardProps {
  bgColor: string; // Background color (CSS color string)
  icon: string; // URL or path to the icon image
  title: string; // Card title
  shortDetails: string; // Brief details or description
  className?: string;
}
const SuccessCard: React.FC<SuccessCardProps> = ({
  bgColor,
  icon,
  title,
  shortDetails,
  className,
}) => {
  return (
    <div
      className={cn(
        `overflow-hidden flex-col p-4 lg:px-8 lg:pt-8 lg:pb-10 rounded-2xl border border-white/20 group`,
        className
      )}
      aria-label="Email targeting features"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div
        className=" bg-white group-hover:bg-secondary transition-all duration-300  p-4 rounded-full inline-flex border-8 ring-1 ring-white items-center justify-center shrink-0"
        style={{
          borderColor: bgColor,
        }}
      >
        <img className="size-6" src={icon} />
      </div>
      <div className="flex flex-col gap-5 mt-7 w-full">
        <h2 className="text-3xl font-semibold leading-tight text-[#010609]">
          {title}
        </h2>
        <p className="text-xl leading-normal text-[#010609B2] text-opacity-70">
          {shortDetails}
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
