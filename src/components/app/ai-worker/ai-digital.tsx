import { WhyChooseProp } from "@/types";
import WhyChoose from "@/components/app/shared/why-chose";
import whyChoseCover from "@/assets/whychose.webp";

const whyChoose: WhyChooseProp = {
  title: "Ai Digital Workers: Expanding the Labor Market of Tomorrow",
  details: `The rise of Ai digital workers lke Genie repreents a transformation in how labor and software merge. No longer limited to task-based automation, Genie AI Workers act as digital colleagues, capable of learning, adapting, and enhancing complex workflows. This evolution is creating a future where software and labor unite, expanding capacity, reducing operational strain, and opening new doors for buiness growth.`,
  image: whyChoseCover,
};

const AiDigital: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <WhyChoose whyChoose={whyChoose} />
      </div>
    </section>
  );
};

export default AiDigital;
