import sonyasImg from "@/assets/sonya.webp";
import FeatureBox from "../shared/feature-box";
import { FeatureBoxProp } from "@/types";

const whyChoose: FeatureBoxProp = {
  title: "Why Choose Sonya?",
  description:
    "Sonya’s AI SDR suite combines advanced personalization, 24/7 operation, and multi-channel engagement, making it the go-to choice for automating sales development pipelines.",
  image: sonyasImg,
  shortDesc: "Ramp Up Growth Without Growing Headcount",
  capabilities: [
    "Instant Inquiry Responses",
    "Efficient Transaction Handling",
    "Effortless Escalation",
    "Multi-Language Support",
  ],
};

const WhyChooseSonya: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <FeatureBox index={0} featureData={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChooseSonya;
