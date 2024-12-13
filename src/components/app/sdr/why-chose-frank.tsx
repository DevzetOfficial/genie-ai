import { FeatureBoxProp } from "@/types";
import franksImg from "@/assets/frank.webp";
import FeatureBox from "../shared/feature-box";

const whyChoose: FeatureBoxProp = {
  title: "Why Choose Frank?",
  description: `Genie handles your prospecting, outreach, and lead engagement so your sales team can focus on closing deals. It seamlessly automates your sales processes, identifies hot leads, and provides hyper-personalized outreach at a scale humans can't achieve.`,
  image: franksImg,
  shortDesc: "Experience the Power of Al-Driven Customer Support",
  capabilities: [
    "Always on Service",
    "Reduced Costs",
    "Smart Call Routing",
    "Enhanced Personalization",
    "Multi-Language Support",
  ],
};

const WhyChoseFrank: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <FeatureBox featureData={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChoseFrank;
