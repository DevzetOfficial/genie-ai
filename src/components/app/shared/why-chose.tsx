import { WhyChooseProp } from "@/types";
import KeyFeature from "./keyfeatures";
import SectionTitle from "./title";

const WhyChoose = ({ whyChoose }: { whyChoose: WhyChooseProp }) => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-5 md:gap-10 lg:gap-2 text-[#010609]">
      <div className="space-y-5 md:space-y-12 lg:pr-14">
        <div className="space-y-4 md:space-y-8 ">
          <SectionTitle weight={600}>{whyChoose.title}</SectionTitle>
          <p className="text-lg opacity-70">{whyChoose.details}</p>
        </div>

        <div className="space-y-3 md:space-y-6">
          {!!whyChoose.features && (
            <span className="text-xl font-semibold ">Key Features</span>
          )}

          {!!whyChoose.features && (
            <ul className="space-y-3 md:space-y-5">
              {whyChoose.features?.map((item) => (
                <KeyFeature key={item.id}>{item.featureData}</KeyFeature>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="aspect-[640/560] rounded-2xl overflow-hidden order-first lg:order-last">
        <img
          className=" object-cover size-full object-top"
          src={whyChoose.image}
          alt="Hero Img"
        />
      </div>
    </div>
  );
};

export default WhyChoose;
