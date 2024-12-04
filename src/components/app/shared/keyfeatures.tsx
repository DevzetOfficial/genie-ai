import React from "react";

interface KeyFeatureProps {
  children: React.ReactNode;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ children }) => {
  return (
    <li className="pl-6 relative text-black font-medium before:top-1 text-lg md:text-xl before:left-0 leading-snug before:absolute before:h-2 before:w-2 before:bg-primary before:rounded-full">
      {children}
    </li>
  );
};

export default KeyFeature;
