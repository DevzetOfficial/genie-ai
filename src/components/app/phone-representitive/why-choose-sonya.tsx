import sonyasImg from "@/assets/sonya.webp";
import FeatureBox from "../shared/feature-box";
import { FeatureBoxProp } from "@/types";

const whyChoose: FeatureBoxProp = {
  title: "Why Choose Sonya?",
  description:
    "Sonya’s handles your prospecting, outreach, and lead engagement so your sales team can focus on closing deals.",
  image: sonyasImg,
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
