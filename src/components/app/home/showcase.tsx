import { ArrowRight } from "lucide-react";
import { Button } from "@/components/app/shared/frontend-button";
import HomeShowcaseOneImg from "@/assets/home-showcase-1.png";
import HomeShowcaseTwoImg from "@/assets/home-showcase-2.png";
import ShowcaseCard from "../shared/showcase-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useModal } from "@/context/modal-context";

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { openModal } = useModal();

  return (
    <section className="section_gap bg-[#00224D]">
      <div className="container">
        <div className="grid gap-8 mb-10 md:mb-[60px]">
          {[
            {
              title: "Break into Emerging Markets with Intelligence",
              image: HomeShowcaseOneImg,
              shortDesc:
                "Entering new markets can be complex, with shifting dynamics and unfamiliar business markets. Genie simplifies this by delivering real-time market intelligence, helping you understand local demands, identify opportunities, and engage effectively. With Genie, your market entry becomes a confident, data-backed strategy, not a gamble.",
            },
            {
              title:
                "Connecting Startups, SMEs & Enterprises to Growth Opportunities",
              image: HomeShowcaseTwoImg,
              shortDesc:
                "Genie connects you to high-potential opportunities in new marketplaces, perfect for startups or established enterprises. With AI-powered insights and targeted lead generation, Genie removes the guesswork, enabling you to enter emerging markets strategically and successfully",
            },
          ].map(({ title, image, shortDesc }, index) => (
            <ShowcaseCard
              key={index}
              title={title}
              shortDesc={shortDesc}
              image={image}
            />
          ))}
        </div>

        <motion.div
          ref={ref}
          viewport={{ once: true }}
          className={` duration-700 delay-100 flex justify-center items-center ${
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

export default Showcase;
