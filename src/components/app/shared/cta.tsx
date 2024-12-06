import { FC, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./frontend-button";
import CtaVideo from "@/assets/videos/cta-video.mp4";
import { motion, useInView } from "framer-motion";
const CTA: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="container relative -bottom-10 md:-bottom-20 -mt-10 md:-mt-20">
      <div className="bg-primary grid lg:grid-cols-2 items-center gap-4 md:gap-8 p-4 md:p-6 rounded-3xl">
        <div className=" lg:px-20" ref={ref}>
          <motion.h3
            className={`text-3xl md:text-[40px] font-semibold text-white mb-4 md:mb-8 duration-700 ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[200px] opacity-0"
            }
              `}
          >
            Revolutionize Your <br className="md:block hidden" /> Sales Process?
          </motion.h3>

          <motion.p
            className={`text-[#F5F7F9] text-lg leading-[140%] mb-6 md:mb-10 duration-700 ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[200px] opacity-0"
            }`}
          >
            Start your free trial today and experience the power of AI-driven
            sales development. Unlock your team's potential and boost your
            revenue!
          </motion.p>

          <motion.div
            className={` duration-1000  ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[200px] opacity-0"
            }`}
          >
            <Button variant="footer">
              Start your free trial <ArrowRight className="h-8 w-8 shrink-0" />
            </Button>
          </motion.div>
        </div>

        <div>
          <div className="aspect-[616/402] lg:ml-auto max-w-[616px] relative overflow-hidden rounded-3xl">
            <video
              id="ctaVideo"
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              autoPlay
              loop
              muted
            >
              <source src={CtaVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
