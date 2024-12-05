import { useInView } from "framer-motion";
import { useRef } from "react";
function FadeDown({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="-translate-x-20 opacity-0"
        style={{
          transform: isInView ? "none" : "translateY(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export { FadeDown };
