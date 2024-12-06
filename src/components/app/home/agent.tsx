import { agentData } from "@/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../shared/title";
import { motion } from "framer-motion";
import ShortDesc from "../shared/short-details";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

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

function Agent() {
  return (
    <section className="section_gap">
      <div className="container flex flex-col gap-8 md:gap-16">
        <div className="max-w-[662px] flex flex-col gap-4 md:gap-8 text-center mx-auto">
          <SectionTitle color={"#010609"} weight={600}>
            Meet our digital agents
          </SectionTitle>
          <ShortDesc
            text={
              "Repetitive administrative tasks eat up nearly a third of employee time, limiting their focus on strategic goals. These bottlenecks  drain resources, stall growth, and pull your team away from high-impact initiatives."
            }
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentData.map((agent, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              key={agent.id}
              className="flex flex-col group rounded-none"
            >
              <div className="bg-[#EDF0F9] overflow-hidden aspect-[416/520] rounded-2xl md:rounded-[32px] duration-500">
                <img
                  loading="lazy"
                  src={agent.agentImg}
                  className="object-contain w-full duration-300 group-hover:scale-105 group-hover:rotate-2"
                  alt={`${agent.name}, ${agent.designation}`}
                />
              </div>
              <div className="flex flex-col mt-3 md:mt-6 w-full">
                <div className="flex gap-2 items-center w-full font-semibold">
                  <h2 className="self-stretch my-auto text-[32px] text-zinc-950">
                    {agent.name}
                  </h2>
                  {/* <div className="px-3 py-2 border border-black rounded-[32px] flex items-center">
                    <span className="text-gradient leading-none text-xl font-medium"></span>
                  </div> */}
                  <AnimatedGradientText className="mr-auto ml-0">
                    <span
                      className={cn(
                        `inline animate-gradient  bg-gradient-to-r from-[#0475ff] via-[#d103c0] to-[#0475ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                      )}
                    >
                      {agent.designation}
                    </span>
                  </AnimatedGradientText>
                </div>
                <p className="mt-4 md:mt-6 w-full text-base leading-6 text-[rgba(1,6,9,0.70)] pb-4 md:pb-8 border-b border-black border-opacity-20">
                  {agent.about}
                </p>
              </div>

              <Link to={`${agent.route}`}>
                <button
                  type="button"
                  className="group-hover:text-primary transition-all duration-300 hover:pl-2 flex gap-4 justify-center items-center self-start mt-3 md:mt-6 text-xl font-medium leading-snug text-black"
                >
                  Learn more
                  <ArrowRight />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agent;
