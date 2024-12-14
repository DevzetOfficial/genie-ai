import { Button } from "../shared/frontend-button";
import { ArrowRight } from "lucide-react";
import fingerprint from "@/assets/fingerprint.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useModal } from "@/context/modal-context";

function FingerPrint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { openModal } = useModal();

  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8">
          <div className="pt-5 space-y-5 md:space-y-10 lg:mr-20 md:pt-14">
            <motion.h3
              className={`text-3xl md:text-[40px] font-semibold leading-tight  text-[#010609] mb-4 md:mb-8 duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }
              `}
            >
              Smarter Decisions, Better Outcomes.
            </motion.h3>

            <motion.p
              className={`text-black/70 text-lg leading-[140%] mb-10 duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }`}
            >
              Genie integrates advanced Business Intelligence, rigorously tested
              marketing methodologies, refined sales strategies, and Adaptive
              Artificial Intelligence to deliver optimized solutions for
              businesses.
            </motion.p>
            <motion.div
              className={` duration-1000  ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[200px] opacity-0"
              }`}
            >
              <Button onClick={() => openModal()}>
                Book a Demo
                <ArrowRight className="w-8 h-8 shrink-0 " />
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
              className="object-cover size-full rounded-2xl"
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
