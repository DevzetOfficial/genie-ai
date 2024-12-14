import { SalesDriveProp } from "@/types";
import SectionTitle from "./title";
import { motion, useInView } from "framer-motion";
import { fadeInAnimationSlowVarients } from "@/lib/utils";
import { useRef } from "react";
import { Button } from "./frontend-button";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/modal-context";
const SalesDrive = ({ salesDrive }: { salesDrive: SalesDriveProp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { openModal } = useModal();

  return (
    <section className="bg-[#00224D] section_gap">
      <div className="container">
        <div className="mb-6 text-center md:mb-10 lg:mb-20">
          <SectionTitle weight={600} color="#fff">
            {salesDrive.title}
          </SectionTitle>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
          {salesDrive.items?.map((data, index) => (
            <motion.div
              key={data.id}
              className="p-5 md:pr-0 md:py-10 md:pl-10 border border-[#E3E9F2] bg-[#FCFCFD] rounded-2xl text-black space-y-5 md:space-y-10 group"
              variants={fadeInAnimationSlowVarients}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="space-y-2 lg:pr-10 md:space-y-4 lg:space-y-8">
                <h3 className="text-2xl md:md:text-[32px] font-semibold leading-snug">
                  {data.title}
                </h3>
                <p className="opacity-70 md:text-xl">{data.details}</p>
              </div>
              <div className="aspect-[600/290]  rounded-l-2xl overflow-hidden order-first lg:order-last">
                <img
                  className="object-cover object-left-top duration-300 size-full group-hover:scale-105"
                  src={data.image}
                  alt="sales drive image"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          viewport={{ once: true }}
          className={` duration-700 delay-100 flex justify-center items-center mt-6 md:mt-10 lg:mt-14 ${
            isInView
              ? "opacity-100 translate-y-0 "
              : "translate-y-[100px] opacity-0"
          }`}
        >
          <Button onClick={() => openModal()}>
            Book a Demo <ArrowRight className="w-8 h-8 shrink-0 " />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesDrive;
