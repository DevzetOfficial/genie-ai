import TestimonialCard from "./testimonial-card";
import { motion } from "framer-motion";
import { TestimonialCardProp } from "@/types";
import { cn } from "@/lib/utils";

function Testimonial({
  title,
  description,
  testimonials,
  className,
}: {
  title: string;
  description: string;
  className?: string;
  testimonials: TestimonialCardProp[];
}) {
  return (
    <section className={cn("section_gap bg-[rgba(32,34,35,1)]", className)}>
      <div className="container">
        <div className="mb-10 space-y-4 text-center text-white md:space-y-8 md:mb-20">
          <motion.h3
            className="text-3xl font-semibold md:text-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-white/70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 120 },
            }}
          >
            {description}
          </motion.p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={{
                ...testimonial,
                index,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
