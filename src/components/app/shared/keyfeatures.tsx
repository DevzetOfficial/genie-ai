import React from "react";
import { motion } from "framer-motion";
import { cn, fadeInAnimationVariants } from "@/lib/utils";
interface KeyFeatureProps {
  children: React.ReactNode;
  key: number;
  index: number;
  className?: string;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({
  children,
  index,
  className,
}) => {
  return (
    <motion.li
      className={cn(
        `pl-6 relative text-black font-medium  text-lg leading-snug  md:text-xl before:left-0 before:absolute before:top-2.5 before:size-2 before:bg-primary before:rounded-full`,
        className
      )}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.li>
  );
};

export default KeyFeature;
