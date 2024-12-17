import { FeatureBoxProp } from "@/types";
import franksImg from "@/assets/frank.webp";
import FeatureBox from "../shared/feature-box";

const whyChoose: FeatureBoxProp = {
  title: "Why Frank ? - Genie AI Phone Representative",
  description: `Traditional customer service models can’t keep up with rising demands for round-the-clock availability and fast, reliable service.`,
  image: franksImg,
  shortDesc: "Key Benefits of Genie AI Phone Representative:",
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
        <FeatureBox index={0} featureData={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChoseFrank;
