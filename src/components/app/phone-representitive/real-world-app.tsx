import lighting from "@/assets/lighting.svg";
import graph from "@/assets/graph.svg";
import mail from "@/assets/mail.svg";
import SuccessCard from "@/components/app/shared/success-card";
import SectionTitle from "@/components/app/shared/title";
import ShortDesc from "../shared/short-details";

interface realWorldAppInfo {
  id: number;
  title: string;
  details: string;
  features: string[];
}

const realWorldAppInfo = [
  {
    id: 1,
    icon: lighting,
    title: "E-commerce and Retail",
    bgColor: "#EDE6C4",
    shortDetails: `In industries where order status updates, return processing, and product inquiries make up a significant volume of calls, Genie Al Phone Representative streamlines these interactions, answers questions instantly, and frees up human agents to focus on specific upselling or handling complex cases.`,
  },
  {
    id: 2,
    icon: graph,
    title: "Healthcare and Patient Services",
    bgColor: "#CBE6E6",
    shortDetails: `Healthcare providers can leverage Genie to handle appointment scheduling, prescription refills, and routine questions, alleviating the burden on medical staff. Genie keeps patient inquiries organized and allows healthcare teams to spend more time on care rather than administration.`,
  },
  {
    id: 3,
    icon: mail,
    title: "Financial Services and Account Management",
    bgColor: "#EFCFC2",
    shortDetails: `For banks and financial service providers, Genie provides accurate, secure support for account-related inquiries, transactions, and guidance. With a robust compliance framework, Genie ensures that customer information is handled with care and security, adding a layer of trust to every interaction.`,
  },
];
function RealWorldApp() {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="mb-6 md:mb-10 text-center lg:mb-14 space-y-2 md:space-y-8 max-w-3xl mx-auto">
          <SectionTitle weight={600}>Real-World Applications</SectionTitle>
          <ShortDesc text="From E-commerce to Financial Services" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {realWorldAppInfo.map((step, index) => (
            <SuccessCard
              index={index}
              bgColor={step.bgColor}
              title={step.title}
              shortDetails={step.shortDetails}
              icon={step.icon}
              className={`p-8 md:p-10 ${
                step.id > 3 ? "lg:col-span-3" : "lg:col-span-2"
              } `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RealWorldApp;
