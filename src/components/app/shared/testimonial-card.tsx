import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { TestimonialCardProp } from "@/types";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardProp;
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl p-4 md:p-6 lg:p-8 min-h-64",

        testimonial.className
      )}
      style={{
        backgroundColor: testimonial.bgColor,
      }}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={testimonial.index}
    >
      <div className="size-full flex flex-col justify-between gap-12">
        {testimonial.reviewTitle && (
          <h4 className="text-xl md:text-2xl font-semibold text-black">
            {testimonial.reviewTitle}
          </h4>
        )}

        {testimonial.review && (
          <p className="text-lg md:text-xl font-semibold text-[rgba(0,0,0,0.70)]">
            “{testimonial.review}”
          </p>
        )}
        <div className="flex items-center gap-2.5">
          {testimonial.profileImg && (
            <div className="size-12 rounded-full bg-white flex items-center justify-center">
              <Image className="text-gray-500 h-5 w-5" />
            </div>
          )}
          <div>
            {testimonial.reviewerName && (
              <span className="font-medium text-black block">
                {testimonial.reviewerName}
              </span>
            )}
            {testimonial.designation && (
              <span className="text-[rgba(0,0,0,0.7)] block">
                {testimonial.designation}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
