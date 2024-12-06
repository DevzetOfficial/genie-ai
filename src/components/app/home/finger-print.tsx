import { Button } from "../shared/frontend-button";
import { ArrowRight } from "lucide-react";
import fingerprint from "@/assets/fingerprint.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FingerPrint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="pt-10 md:pt-20 bg-[#E9EAEC]">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8">
          <div className="space-y-5 md:space-y-10 lg:mr-20 pt-5 md:pt-14">
            <motion.h3
              className={`text-3xl md:text-[40px] font-semibold leading-tight  text-[#010609] mb-4 md:mb-8 duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }
              `}
            >
              Business Intelligence at Your Fingertips.
            </motion.h3>

            <motion.p
              className={`text-black/70 text-lg leading-[140%] mb-10 duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }`}
            >
              Intelligence, rigorously tested marketing methodologies, refined
              sales strategies, and Adaptive Artificial Intelligence to deliver
              optimized solutions for businesses.
            </motion.p>
            <motion.div
              className={` duration-1000  ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }`}
            >
              <Button variant={"default"}>
                Start your free trial today{" "}
                <ArrowRight className="h-8 w-8 shrink-0 " />
              </Button>
            </motion.div>
          </div>
          <motion.div
            className={`aspect-[752/480]  duration-1000 delay-200  ${
              isInView
                ? "opacity-100 translate-x-0 rotate-0"
                : "translate-x-[300px] opacity-0"
            }`}
          >
            <img
              className="size-full object-cover rounded-t-2xl"
              src={fingerprint}
              alt="fingerprint security ensure image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FingerPrint;
