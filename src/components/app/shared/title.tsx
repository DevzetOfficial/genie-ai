import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.h2
      ref={ref}
      className={cn(
        `text-3xl md:text-5xl xl:text-[64px] duration-700  ${
          isInView
            ? "opacity-100 translate-y-0 rotate-0"
            : "translate-y-[100px] opacity-0"
        }`,
        className
      )}
      style={{ color, fontWeight: weight }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
