import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function ShortDesc({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.p
      ref={ref}
      className={`text-lg text-black/70 duration-1000  ${
        isInView
          ? "opacity-100 translate-y-0 rotate-0"
          : "translate-y-[100px] opacity-0"
      }`}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}

export default ShortDesc;
