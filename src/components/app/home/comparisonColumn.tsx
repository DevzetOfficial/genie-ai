export interface ComparisonFeatureItemProps {
  text: string;
  iconSrc: string;
  isPositive?: boolean;
}

interface ComparisonColumnProps {
  title: string;
  features: ComparisonFeatureItemProps[];
  variant: "white" | "dark";
  className?: string;
}
import * as React from "react";
import FeatureItem from "./ComparisonFeatureItem";
import { cn } from "@/lib/utils";

const ComparisonColumn: React.FC<ComparisonColumnProps> = ({
  title,
  features,
  variant,
  className,
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        `flex flex-col ${isDark ? "bg-[#00224D] text-white" : "bg-white"} `,
        className
      )}
    >
      <h4
        className={`px-8 py-8 w-full   ${
          isDark
            ? "text-[28px] font-bold bg-[#00224D]"
            : "font-semibold !leading-none bg-white"
        } text-center  max-md:max-w-full`}
      >
        {title}
      </h4>

      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          text={feature.text}
          iconSrc={feature.iconSrc}
          isPositive={isDark}
        />
      ))}
    </div>
  );
};

export default ComparisonColumn;
