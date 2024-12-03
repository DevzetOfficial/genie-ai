import WhyChoose from "../shared/whychose";
import whyChoseCover from "@/assets/whychose.webp";

// Define the type for the data structure
interface FeatureData {
  id: number;
  featureData: string;
}

interface WhyChoseFrankData {
  title: string;
  details: string;
  image: string;
  feature: boolean;
  featureDatas: FeatureData[];
}

// Data for the component
const whyChoseFrankData: WhyChoseFrankData = {
  title: "Why Choose Frank?",
  details: `Genie handles your prospecting, outreach, and lead engagement so your sales team can focus on closing deals. It seamlessly automates your sales processes, identifies hot leads, and provides hyper-personalized outreach at a scale humans can't achieve.`,
  image: whyChoseCover,
  feature: true,
  featureDatas: [
    {
      id: 1,
      featureData: "24/7 Operation: Reach leads anytime, without delays.",
    },
    {
      id: 2,
      featureData: "Cost Efficiency: Save on SDR hiring and training costs.",
    },
    {
      id: 3,
      featureData:
        "Consistent Engagement: No fatigue, maximizing outreach volume and quality.",
    },
  ],
};

// Functional component
const WhyChoseFrank: React.FC = () => {
  return (
    <WhyChoose
      title={whyChoseFrankData.title}
      details={whyChoseFrankData.details}
      image={whyChoseFrankData.image}
      feature={whyChoseFrankData.feature}
      featureDatas={whyChoseFrankData.featureDatas}
    />
  );
};

export default WhyChoseFrank;
