import mail from "@/assets/mail.svg";
import graph from "@/assets/graph.svg";
import lighting from "@/assets/lighting.svg";
import SuccessCard from "@/components/app/shared/success-card";
import { motion } from "framer-motion";

const successSteps = [
  {
    id: 1,
    icon: lighting,
    title: "Unified Prospect Profiles",
    bgColor: "#EDE6C4",
    shortDetails: `Bring all interactions and data together for a complete view of each prospect’s history. Frank enables personalized, meaningful conversations that move deals forward.`,
  },
  {
    id: 2,
    icon: graph,
    title: "Seamless Handoffs",
    bgColor: "#CBCFE6",
    shortDetails: `When prospects require a deeper touch, Frank passes them to your team with full context, ensuring smooth and informed transitions.`,
  },
  {
    id: 3,
    icon: mail,
    title: "Real-Time Data Integration",
    bgColor: "#CBE6E6",
    shortDetails: `Frank syncs with your CRM to enrich every call with fresh, actionable data, so you can focus on building pipeline and closing deals.`,
  },
];

function SuccessSteps() {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="max-w-[784px] mx-auto mb-[60px] text-center grid gap-6 lg:gap-7">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            Frank - Your AI Prospecting Assistant: Built for the Modern Sales
            Team
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
            className="text-[#010609]/70 [&_br]:hidden [&_br]:lg:block lg:text-xl"
            dangerouslySetInnerHTML={{
              __html:
                "Frank integrates seamlessly with your CRM, sales tools, and communication platforms, streamlining your prospecting efforts. Whether you’re using Salesforce, HubSpot, or other systems, Frank ensures real-time data flow, delivering insights that empower your team to connect and close with confidence.",
            }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 md:gap-6 lg:gap-8">
          {successSteps.map((step, index) => (
            <SuccessCard
              index={index}
              key={step.id}
              bgColor={step.bgColor}
              title={step.title}
              shortDetails={step.shortDetails}
              icon={step.icon}
              className={step.id > 3 ? "lg:col-span-3" : "lg:col-span-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessSteps;
