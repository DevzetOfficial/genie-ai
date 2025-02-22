import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/app/shared/frontend-button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import HeroFeature from "./hero-feature";
import { useModal } from "@/context/modal-context";

type HeroProps = {
  heroImage?: string;
  title?: string;
  shortDesc?: string;
  titleClass?: string;
};

const Hero: React.FC<HeroProps> = ({
  heroImage,
  title,
  shortDesc,
  titleClass,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { openModal } = useModal();

  return (
    <div
      ref={ref}
      className={cn(
        heroImage ? "grid md:grid-cols-2 gap-10 lg:gap-24 items-center" : "grid"
      )}
    >
      <div className={`text-white `}>
        <motion.h1
          className={cn(
            `[&_br]:hidden lg:[&_br]:inline-block text-3xl md:text-5xl lg:text-6xl lg:leading-[1.2] xl:text-[64px] font-bold   mb-5 md:mb-10 duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[200px] opacity-0"
            }`,
            titleClass
          )}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />
        <motion.p
          ref={ref}
          className={`text-lg sm:text-xl md:text-2xl leading-normal opacity-80 mb-6 md:mb-[56px] duration-1000 delay-200 ${
            isInView
              ? "opacity-100 translate-y-0 rotate-0"
              : "translate-y-[200px] opacity-0"
          }`}
          dangerouslySetInnerHTML={{ __html: shortDesc || "" }}
        />

        <motion.div
          className={` duration-1000 delay-300 ${
            isInView
              ? "opacity-100 translate-y-0 rotate-0"
              : "translate-y-[200px] opacity-0"
          }`}
        >
          <Button onClick={() => openModal()}>
            Book a Demo
            <ArrowRight className="h-8 w-8 shrink-0 " />
          </Button>
        </motion.div>

        <HeroFeature />
      </div>

      {heroImage && (
        <motion.div
          className={`aspect-[640/600] rounded-2xl overflow-hidden order-first md:order-last duration-1000  ${
            isInView
              ? "opacity-100 translate-x-0 rotate-0"
              : "translate-x-[300px] opacity-0"
          }`}
        >
          <img
            className=" object-cover size-full object-top"
            src={heroImage}
            alt="Hero Img"
          />
        </motion.div>
      )}
    </div>
  );
};
export default Hero;
