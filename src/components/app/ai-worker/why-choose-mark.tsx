import whyChoseCover from "@/assets/whychose.webp";
import { FeatureBoxProp } from "@/types";
import FeatureBox from "../shared/feature-box";

const whyChoose: FeatureBoxProp = {
  title: "Why Choose Mark?",
  description: `Genie handles your prospecting, outreach, and lead engagement so your sales team can focus on closing deals. It seamlessly automates your sales processes, identifies hot leads, and provides hyper-personalized outreach at a scale humans can't achieve.`,
  shortDesc: "",
  image: whyChoseCover,
  capabilities: [
    {
      title: "24/7 Operation: Reach leads anytime, without delays.",
    },
    {
      title: "Cost Efficiency: Save on SDR hiring and training costs.",
    },
    {
      title:
        "Consistent Engagement: No fatigue, maximizing outreach volume and quality.",
    },
  ],
};

const WhyChooseMark: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <FeatureBox index={1} featureData={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChooseMark;
