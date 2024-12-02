import agentOne from "@/assets/agent-one.png";
import agentTwo from "@/assets/agent-two.png";
import agentThree from "@/assets/agent-three.png";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    id: 0,
    name: "Frank",
    agentImg: agentOne,
    designation: "AI SDR",
    about: `Frank optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    link: "#",
  },
  {
    id: 1,
    name: "Sonya",
    agentImg: agentTwo,
    designation: "Al Phone Representative",
    about: `Frank optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    link: "#",
  },
  {
    id: 2,
    name: "Mark",
    agentImg: agentThree,
    designation: "Al Worker",
    about: `Frank optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    link: "#",
  },
];

function Agent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="flex flex-col rounded-none max-w-[416px]"
          role="article"
        >
          <div className="bg-[#EDF0F9] overflow-hidden  aspect-[416/520] rounded-[32px]">
            <img
              loading="lazy"
              src={agent.agentImg}
              className="object-contain w-full "
              alt="Frank, AI Sales Development Representative"
            />
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex gap-2 items-center w-full font-semibold">
              <h2 className="self-stretch my-auto  text-[32px] text-zinc-950">
                {agent.name}
              </h2>

              <div className="px-3 py-2 border border-black rounded-[32px] flex items-center">
                <span className="text-gradient leading-none text-xl font-medium">
                  {" "}
                  {agent.designation}
                </span>
              </div>
            </div>
            <p className="mt-6 w-full text-base leading-6 text-[rgba(1,6,9,0.70] pb-8  border-b border-black border-opacity-20">
              {agent.about}
            </p>
          </div>

          <a
            href="#learn-more"
            className="hover:text-primary transition-all duration-300 hover:translate-x-2 flex gap-4 justify-center items-center self-start mt-6 text-xl font-medium leading-snug text-black "
            role="button"
          >
            <span className="self-stretch my-auto">Learn more</span>
            <ArrowRight />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Agent;
