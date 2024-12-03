export interface FeatureItemProps {
    text: string;
    iconSrc: string;
    isPositive?: boolean;
  }
  
   interface ComparisonColumnProps {
    title: string;
    features: FeatureItemProps[];
    variant: 'white' | 'dark';
    className?: string;
  }
import * as React from 'react';
import FeatureItem from './FeatureItem';

 const ComparisonColumn: React.FC<ComparisonColumnProps> = ({ title, features, variant, className }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex flex-col ${isDark ? 'bg-[#00224D] text-white' : 'bg-white'} ${className}`}>
      <h4 className={`flex-1 shrink gap-1 self-stretch px-8 py-9 w-full ${isDark ? 'text-[28px] font-bold' : 'font-semibold'} text-center ${isDark ? 'bg-[#00224D] rounded-t-[20px]' : 'bg-white rounded-3xl'} min-h-[94px] max-md:px-5 max-md:max-w-full`}>
        {title}
      </h4>
      <div className={`w-full border border-solid min-h-[1px] ${isDark ? 'border-[#002D66]' : 'border-[#E9EAEC]'}`} />
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