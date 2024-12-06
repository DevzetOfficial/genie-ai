import { CompareToCallProp } from "@/types";
import cancelIcon from "@/assets/cancel-circle-compare.svg";
import checkMarkIcon from "@/assets/checkmark-circle-compare.svg";
import { motion } from "framer-motion";
import { fadeInAnimationSlowVarients } from "@/lib/utils";
const CompareCard = ({
  data,
  index,
}: {
  data: CompareToCallProp;
  index: number;
}) => {
  const icon = data.withGenie ? checkMarkIcon : cancelIcon;

  return (
    <div className="relative rounded-2xl bg-[rgba(227,233,242,0.20)] p-5 md:p-8 pt-14 lg:px-12 lg:pt-24 lg:pb-[70px]">
      <span
        className={`text-xl lg:text-2xl font-semibold ${
          data.withGenie ? "bg-[#8BE958] text-black" : "bg-[#EC4343] text-white"
        } py-3 md:py-4 px-5 whitespace-nowrap lg:py-3 lg:px-6  rounded-[40px] -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 absolute leading-none`}
      >
        {data.withGenie ? "With Genie" : "Before Genie"}
      </span>
      <ul className="space-y-3 md:space-y-4 lg:space-y-6">
        {data.items.map((item, i) => (
          <motion.li
            key={data.id}
            className="text-lg lg:text-xl font-medium text-[#282828] flex items-center gap-4"
            variants={fadeInAnimationSlowVarients}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img src={icon} alt="" />
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CompareCard;
