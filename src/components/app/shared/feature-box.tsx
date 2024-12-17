import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FeatureBoxProp } from "@/types";
import { Button } from "./frontend-button";
import { motion, useInView } from "framer-motion";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const FeatureBox = ({
  featureData,
  index,
}: {
  featureData: FeatureBoxProp;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid group lg:grid-cols-2 items-center gap-10 text-[#010609]">
      <div className="grid gap-8 md:gap-10 lg:group-even:order-2">
        <div>
          <motion.div
            ref={ref}
            className={`duration-700  ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <h2
              className={cn(
                `text-3xl md:text-5xl xl:text-6xl font-semibold  `,
                featureData.titleClass
              )}
            >
              {featureData.title}
            </h2>

            {featureData.highlight && (
              <AnimatedGradientText className="mt-4 ml-0 mr-auto">
                <span
                  className={cn(
                    `inline animate-gradient  bg-gradient-to-r from-[#0475ff] via-[#d103c0] to-[#0475ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  {featureData.highlight}
                </span>
              </AnimatedGradientText>
            )}
          </motion.div>

          <motion.p
            ref={ref}
            className={`md:text-lg mt-6 md:mt-8 text-[#010609B2] duration-700  ${
              isInView
                ? "opacity-100 translate-y-0 rotate-0"
                : "translate-y-[100px] opacity-0"
            }`}
            dangerouslySetInnerHTML={{ __html: featureData.description }}
          />

          {featureData.shortDesc && (
            <h4
              className={`font-semibold mt-8 md:mt-10 text-[#010609] leading-normal duration-1000   ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[100px] opacity-0"
              }`}
            >
              {featureData.shortDesc}
            </h4>
          )}

          {featureData.button && (
            <motion.div
              ref={ref}
              viewport={{ once: true }}
              className={` duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 "
                  : "translate-y-[150px] opacity-0"
              }`}
            >
              <Link
                to={featureData.button?.url}
                className="inline-block mt-8 md:mt-10"
              >
                <Button>
                  {featureData.button?.label}
                  <ArrowRight className="w-8 h-8 shrink-0 " />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>

        <div className="space-y-3 md:space-y-6">
          {!!featureData.capabilities && (
            <motion.span
              ref={ref}
              className={`text-xl opacity-50 font-semibold duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "translate-y-[100px] opacity-0"
              }`}
            >
              Key Capabilities:
            </motion.span>
          )}

          {!!featureData.capabilities && (
            <ul className="space-y-3 md:space-y-5">
              {featureData.capabilities?.map((item, index) => (
                <li
                  key={index}
                  className="pl-6 relative text-black font-medium  text-lg leading-snug  md:text-xl before:left-0 before:absolute before:top-2.5 before:size-2 before:bg-primary before:rounded-full"
                >
                  <h4>{item.title}</h4>
                  {item.description && (
                    <p
                      className="text-sm opacity-80"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <motion.div
        className={cn(
          `aspect-[640/560] rounded-2xl overflow-hidden duration-1000 delay-200 lg:group-even:order-1  ${
            isInView
              ? "opacity-100 translate-x-0 rotate-0"
              : index == 0
              ? "translate-x-[300px] opacity-0"
              : "translate-x-[-300px]"
          }
          }`,
          featureData?.imageClass
        )}
      >
        <img
          ref={ref}
          className="object-cover object-top size-full"
          src={featureData.image}
          alt="why chose image"
        />
      </motion.div>
    </div>
  );
};

export default FeatureBox;
