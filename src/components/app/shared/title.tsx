import { cn } from "@/lib/utils";
import React from "react";

type SectionTitleProps = {
  color?: string;
  weight?: number;
  children: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  color,
  weight,
  children,
  className,
}) => {
  return (
    <h1
      className={cn(`text-3xl md:text-5xl xl:text-[64px]`, className)}
      style={{ color, fontWeight: weight }}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
