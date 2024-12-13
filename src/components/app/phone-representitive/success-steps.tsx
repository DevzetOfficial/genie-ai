import mail from "@/assets/mail.svg";
import graph from "@/assets/graph.svg";
import lighting from "@/assets/lighting.svg";
import SuccessCard from "@/components/app/shared/success-card";
import { motion } from "framer-motion";

const successSteps = [
  {
    id: 1,
    icon: lighting,
    title: "Unified Customer Profiles",
    bgColor: "#EDE6C4",
    shortDetails: `All Interactions And Data Are Consolidated For A Full View Of Each Customer's History.`,
  },
  {
    id: 2,
    icon: graph,
    title: "Seamless Handoffs",
    bgColor: "#CBCFE6",
    shortDetails: `Genie Transfers Complex Calls To Human Agents With Full Context, Ensuring Efficient, Informed Resolutions.`,
  },
  {
    id: 3,
    icon: mail,
    title: "Real-Time Data Flow",
    bgColor: "#CBE6E6",
    shortDetails: `With Complete CRM Integration, Genie Enhances Every Touchpoint With Rich Customer Data, Creating A Seamless Experience.`,
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
            Features Built for the Modern Business
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
                "Genie AI Phone Representative integrates smoothly with your existing CRM, customer support, and communication platforms. If you’re using HubSpot, Salesforce, Zendesk, or other systems, Genie syncs data instantly, providing full customer insights to agents and maintaining consistent service",
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
