import KeyFeature from "./keyfeatures";
import SectionTitle from "./title";

interface WhyChooseProps {
  title: string;
  details: string;
  image: string;
  feature: boolean;
  featureDatas: { id: number; featureData: string }[];
}

const WhyChoose: React.FC<WhyChooseProps> = ({
  title,
  details,
  image,
  feature,
  featureDatas,
}) => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-5 md:gap-10 lg:gap-2 text-[#010609]">
      <div className="space-y-5 md:space-y-12 lg:pr-14">
        <div className="space-y-4 md:space-y-8 ">
          <SectionTitle weight={600}>{title}</SectionTitle>
          <p className="text-lg opacity-70">{details}</p>
        </div>

        <div className="space-y-3 md:space-y-6">
          {feature && (
            <span className="text-xl font-semibold ">Key Features</span>
          )}
          <ul className="space-y-6">
            {featureDatas.map((featureItem) => (
              <KeyFeature key={featureItem.id}>
                {featureItem.featureData}
              </KeyFeature>
            ))}
          </ul>
        </div>
      </div>
      <div className="aspect-[640/560] rounded-2xl overflow-hidden order-first lg:order-last">
        <img
          className=" object-cover size-full object-top"
          src={image}
          alt="Hero Img"
        />
      </div>
    </div>
  );
};

export default WhyChoose;
