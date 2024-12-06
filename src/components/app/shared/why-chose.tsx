import { WhyChooseProp } from "@/types";
import KeyFeature from "./keyfeatures";
import SectionTitle from "./title";
import ShortDesc from "./short-details";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyChoose = ({ whyChoose }: { whyChoose: WhyChooseProp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="grid lg:grid-cols-2 items-center gap-5 md:gap-10 lg:gap-2 text-[#010609]">
      <div className="space-y-5 md:space-y-12 lg:pr-14">
        <div className="space-y-4 md:space-y-8 ">
          <SectionTitle weight={600}>{whyChoose.title}</SectionTitle>
          <ShortDesc text={whyChoose.details}></ShortDesc>
        </div>

        <div className="space-y-3 md:space-y-6">
          {!!whyChoose.features && (
            <motion.span
              ref={ref}
              className={`text-xl font-semibold duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[100px] opacity-0"
              }`}
            >
              Key Features
            </motion.span>
          )}

          {!!whyChoose.features && (
            <ul className="space-y-3 md:space-y-5">
              {whyChoose.features?.map((item, index) => (
                <KeyFeature key={item.id} index={index}>
                  {item.featureData}
                </KeyFeature>
              ))}
            </ul>
          )}
        </div>
      </div>
      <motion.div
        className={`aspect-[640/560] rounded-2xl overflow-hidden order-first lg:order-last duration-1000 delay-200  ${
          isInView
            ? "opacity-100 translate-x-0 rotate-0"
            : "translate-x-[300px] opacity-0"
        }`}
      >
        <img
          ref={ref}
          className=" object-cover size-full object-top"
          src={whyChoose.image}
          alt="why chose image"
        />
      </motion.div>
    </div>
  );
};

export default WhyChoose;
