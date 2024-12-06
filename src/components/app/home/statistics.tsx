import statisticsImage from "@/assets/statistics.webp";
import { Button } from "@/components/app/shared/frontend-button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <section className="section_gap bg-[#1D2427]">
        <div className="container">
          <div className="max-w-[882px] mx-auto mb-[60px] text-center">
            <div className="space-y-3 flex flex-col items-center justify-center lg:space-y-10 text-white">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, translateY: 0 },
                  hidden: { opacity: 0, translateY: 100 },
                }}
              >
                Did You Know?
              </motion.span>
              <motion.h2
                className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-semibold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, translateY: 0 },
                  hidden: { opacity: 0, translateY: 100 },
                }}
              >
                Companies lose over 70% of potential sales leads due to delays
                in qualification and follow-up?
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { opacity: 1, translateY: 0 },
                  hidden: { opacity: 0, translateY: 100 },
                }}
                className=" text-white/70"
              >
                Repetitive administrative tasks eat up nearly a third of
                employee time, limiting their focus on strategic goals. These
                bottlenecks drain resources, stall growth, and pull your team
                away from high-impact initiatives.
              </motion.p>
              {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  visible: { opacity: 1, translateY: 0 },
                  hidden: { opacity: 0, translateY: 200 },
                }}
                className="opacity-70"
              >
                <Button>
                  Start your free trial today{" "}
                  <ArrowRight className="h-8 w-8 shrink-0" />
                </Button>
              </motion.div> */}
              <motion.div
                ref={ref}
                viewport={{ once: true }}
                className={` duration-700 delay-100 ${
                  isInView
                    ? "opacity-100 translate-y-0 "
                    : "translate-y-[100px] opacity-0"
                }`}
              >
                <Button variant={"default"}>
                  Start your free trial today{" "}
                  <ArrowRight className="h-8 w-8 shrink-0 " />
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="aspect-[1312/625] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            variants={{
              hidden: { opacity: 0.5, scale: 0.7 }, // Start squashed horizontally
              visible: { opacity: 1, scale: 1 }, // Expand to full height
            }}
          >
            <img
              className="size-full object-cover rounded-2xl"
              src={statisticsImage}
              alt="statistics details image"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Statistics;
