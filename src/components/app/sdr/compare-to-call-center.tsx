import { compareToCallData } from "@/data";
import SectionTitle from "../shared/title";
import CompareCard from "./compare-card";

const CompareToCallCenter: React.FC = () => {
  return (
    <section className="section_gap ">
      <div className="container lg:px-20">
        <div className="max-w-[932px] mb-12 lg:mb-28 text-center mx-auto">
          <SectionTitle weight={600}>
            How Sonya Compares to Traditional SDR Teams
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-4">
          {compareToCallData?.map((data, index) => (
            <CompareCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareToCallCenter;
