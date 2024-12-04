import WhyChoose from "../shared/whychose";
import whyChoseCover from "@/assets/whychose.webp";
interface CustomerSupport {
  title: string;
  details: string;
  image: string;
  feature: boolean;
}

// Data for the component
const CustomerSupport: CustomerSupport = {
  title: "Experience the Power of Al-Driven Customer Support",
  details: `Join the ranks of innovative companies that trust Genie to transform their customer service. Contact us today to see how Genie Al Phone Representative can be your next step in creating exceptional customer experiences.`,
  image: whyChoseCover,
  feature: false,
};

// Functional component
const AiDrivenCustomerSupport: React.FC = () => {
  return (
    <WhyChoose
      title={CustomerSupport.title}
      details={CustomerSupport.details}
      image={CustomerSupport.image}
      feature={CustomerSupport.feature}
    />
  );
};

export default AiDrivenCustomerSupport;
