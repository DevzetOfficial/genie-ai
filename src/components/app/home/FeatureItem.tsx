import * as React from 'react';
import { FeatureItemProps } from '../shared/comparisonColumn';

 const FeatureItem: React.FC<FeatureItemProps> = ({ text, iconSrc, isPositive = true }) => {
  return (
    <>
      <div className={`flex gap-3 items-center py-5 pr-4 pl-6 w-full min-h-[60px] ${isPositive ? 'bg-[#00224D]' : 'bg-white'} max-md:pl-5 max-md:max-w-full`}>
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
      <div className={`w-full border border-solid min-h-[1px] ${isPositive ? 'border-[#002D66]' : 'border-[#E9EAEC]'} max-md:max-w-full`} />
    </>
  );
};
export default FeatureItem