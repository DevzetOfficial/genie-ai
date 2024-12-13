import { AiDrivenProp } from "@/types";
import KeyFeature from "../shared/keyfeatures";

const OutReachCard = ({ outreach }: { outreach: AiDrivenProp }) => {
  return (
    <div className="p-6 lg:p-10 bg-[rgba(227,233,242,0.20)] border border-black/10 rounded-2xl">
      <div className="space-y-5 md:space-y-10  ">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#010609]">
          {outreach.title}
        </h3>
        <ul className="space-y-2 md:space-y-5">
          {outreach.features.map((text, index) => (
            <KeyFeature
              className="text-base md:text-lg"
              key={index}
              index={index}
            >
              {text}
            </KeyFeature>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutReachCard;
