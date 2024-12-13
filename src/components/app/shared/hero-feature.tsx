import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/utils";

const HeroFeature = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`flex  mt-14 md:mt-16 lg:mt-20 xl:mt-[100px]  flex-wrap ${
        pathname === "/" ? "flex-row items-center gap-8" : "flex-col gap-4"
      }`}
    >
      {[
        "Increased Revenue & Growth",
        "Improved Customer Loyality",
        "Optimized Business Efficiency",
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="url(#paint0_linear_320_2320)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_320_2320"
                x1="2"
                y1="2"
                x2="22.7521"
                y2="21.1865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0475FF" />
                <stop offset="0.450792" stopColor="#D103C0" />
                <stop offset="1" stopColor="#0475FF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-medium text-white">{item}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroFeature;
