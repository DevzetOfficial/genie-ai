import React from "react";

type SectionTitleProps = {
  color: string; // The color prop expects a string
  weight: number; // The weight prop expects a number
  children: string; // The children prop expects a string
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  color,
  weight,
  children,
}) => {
  return (
    <h1
      className="text-3xl md:text-5xl lg:text-[64px]"
      style={{ color, fontWeight: weight }}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
