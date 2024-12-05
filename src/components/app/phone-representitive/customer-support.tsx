import { WhyChooseProp } from "@/types";
import WhyChoose from "@/components/app/shared/why-chose";
import whyChoseCover from "@/assets/whychose.webp";

const whyChoose: WhyChooseProp = {
  title: "Experience the Power of Al-Driven Customer Support",
  details: `Join the ranks of innovative companies that trust Genie to transform their customer service. Contact us today to see how Genie Al Phone Representative can be your next step in creating exceptional customer experiences.`,
  image: whyChoseCover,
};

const CustomerSupport: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <WhyChoose whyChoose={whyChoose} />
      </div>
    </section>
  );
};

export default CustomerSupport;
