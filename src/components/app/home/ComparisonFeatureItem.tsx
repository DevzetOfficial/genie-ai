import * as React from "react";
import { ComparisonFeatureItemProps } from "./comparisonColumn";

const ComparisonFeatureItem: React.FC<ComparisonFeatureItemProps> = ({
  text,
  iconSrc,
  isPositive = true,
}) => {
  return (
    <>
      <div
        className={`flex gap-3 items-center py-5 pr-4 pl-6 w-full min-h-[60px] border-t ${
          isPositive
            ? "bg-[#00224D] border-[#002D66]"
            : "bg-white border-[#E9EAEC] last:border-b"
        } max-md:pl-5 max-md:max-w-full`}
      >
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full ">
          {text}
        </div>
      </div>
    </>
  );
};
export default ComparisonFeatureItem;
