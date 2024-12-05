import mail from "@/assets/mail.svg";
import graph from "@/assets/graph.svg";
import lighting from "@/assets/lighting.svg";
import SectionTitle from "@/components/app/shared/title";
import SuccessCard from "@/components/app/shared/success-card";

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
        <div className="max-w-[964px] mx-auto text-center mb-20">
          <SectionTitle weight={600}>Simplify, Scale, and Succeed</SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {successSteps.map((step) => (
            <SuccessCard
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
