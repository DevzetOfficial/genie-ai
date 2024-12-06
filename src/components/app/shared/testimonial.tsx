import { testimonials } from "@/data";
import TestimonialCard from "./testimonial-card";
import { motion } from "framer-motion";

function Testimonial() {
  return (
    <section className="section_gap bg-[rgba(32,34,35,1)]">
      <div className="container">
        <div className=" space-y-4 md:space-y-8 text-white text-center  mb-10 md:mb-20">
          <motion.h3
            className="text-3xl md:text-5xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            Testimonials
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl opacity-70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 120 },
            }}
          >
            Our features makes AI SDRs a valuable asset for any business.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
