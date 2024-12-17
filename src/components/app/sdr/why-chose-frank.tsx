import { FeatureBoxProp } from "@/types";
import franksImg from "@/assets/frank.webp";
import FeatureBox from "../shared/feature-box";

const whyChoose: FeatureBoxProp = {
  title: "Why Frank? - Your AI Dialing Assistant for Sales Teams",
  description: `Traditional prospecting methods can’t keep up with the demands of modern sales teams who need fast, efficient, and always-on solutions to build pipelines and close deals.`,
  image: franksImg,
  shortDesc: "Key Benefits of Frank - The AI Dialing Assistant:",
  capabilities: [
    {
      title: "Always on Service",
      description:
        "Frank can work 24/7, reaching prospects and keeping your sales pipeline moving whenever you want.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Automate tedious tasks like dialing, leaving voicemails, and logging calls, saving time and resources while boosting productivity.",
    },
    {
      title: "Smart Call Routing",
      description:
        "Focus on live conversations with the right prospects as Frank skips answering machines and non-productive calls.",
    },
    {
      title: "Enhanced Personalization",
      description:
        "Leverage real-time insights to tailor every call, delivering targeted outreach that resonates with prospects.",
    },
    {
      title: "Multi-Language Support",
      description:
        "Connect with prospects across regions, breaking language barriers to expand your reach.",
    },
  ],
};

const WhyChoseFrank: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <FeatureBox index={0} featureData={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChoseFrank;
