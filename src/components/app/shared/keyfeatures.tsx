import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/utils";
interface KeyFeatureProps {
  children: React.ReactNode;
  key: number;
  index: number;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ children, index }) => {
  return (
    <motion.li
      className="pl-6 relative text-black font-medium before:top-1 text-lg md:text-xl before:left-0 leading-snug before:absolute before:h-2 before:w-2 before:bg-primary before:rounded-full"
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
