import { AiDrivenProp } from "@/types";
import KeyFeature from "../shared/keyfeatures";

const OutReachCard = ({ outreach }: { outreach: AiDrivenProp }) => {
  return (
    <div className="p-6 lg:px-10 lg:pt-10 lg:pb-12 bg-[rgba(227,233,242,0.20)] border border-black/10 rounded-2xl">
      <div className="space-y-5 md:space-y-10  ">
        <div className="space-y-4 md:space-y-6 ">
          <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-[#010609]">
            {outreach.title}
          </h3>
          <p className="text-black/70 font-medium">{outreach.details}</p>
        </div>

        <ul className="space-y-2 md:space-y-5">
          {outreach.features.map((text, index) => (
            <KeyFeature key={index}>{text}</KeyFeature>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutReachCard;
