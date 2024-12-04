import lighting from "@/assets/lighting.svg";
import graph from "@/assets/graph.svg";
import mail from "@/assets/mail.svg";
import SuccessCard from "../shared/SuccessCard";

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
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
      {successSteps.map((step) => (
        <SuccessCard
          bgColor={step.bgColor}
          title={step.title}
          shortDetails={step.shortDetails}
          icon={step.icon}
          className={step.id > 3 ? "lg:col-span-3" : "lg:col-span-2"}
        />
      ))}
    </div>
  );
}

export default SuccessSteps;
