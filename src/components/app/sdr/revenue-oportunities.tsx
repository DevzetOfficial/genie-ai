import BlurIn from "@/components/ui/blur-in";
import NumberTicker from "@/components/ui/number-ticker";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function RevenueOportunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div ref={ref} className="container">
        <div className="max-w-[962px] mx-auto text-center mb-12 md:mb-16 lg:mb-24">
          <div className="space-y-3 md:space-y-6 mb-5 md:mb-10 lg:mb-20">
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 100 },
              }}
            >
              How Many Revenue Opportunities Can Genie Create For You?
            </motion.h3>
            <motion.p
              className="text-xl text-[#010609B2]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 100 },
              }}
            >
              Curious About Genie's Potential ROI? Here's A Snapshot:
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[120px] font-bold text-gradient">
              $1,800,000
            </h1>

            <span className="text-lg font-semibold text-[#010609]">
              Per Year
            </span>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 text-center lg:divide-x-2 divide-[#B0C5FC]">
          <div className="space-y-3 md:space-y-6 mb-5 md:mb-10 lg:mb-20">
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              <NumberTicker value={36000} />
            </h3>
            <p className="text-xl text-[#010609B2]">
              Prospects Reached By Genie
            </p>
          </div>
          <div className="space-y-3 md:space-y-6 mb-5 md:mb-10 lg:mb-20">
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              <NumberTicker value={65.0} />%
            </h3>
            <p className="text-xl text-[#010609B2]">Conversion Rate</p>
          </div>
          <div className="space-y-3 md:space-y-6 mb-5 md:mb-10 lg:mb-20">
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              $ <NumberTicker value={5000} />
            </h3>
            <p className="text-xl text-[#010609B2]">
              Average Contract Value (ACV)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RevenueOportunities;
