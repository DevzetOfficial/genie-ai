import { ArrowRight } from "lucide-react";
import { Button } from "./frontend-button";
type HeroContentProps = {
  title?: string;
  shortDesc?: string;
};

const HeroContent: React.FC<HeroContentProps> = ({ title, shortDesc }) => {
  return (
    <div className="text-white">
      <h1
        className="[&_br]:hidden lg:[&_br]:inline-block text-3xl md:text-4xl lg:text-6xl xl:text-[96px] font-bold  leading-none mb-5 md:mb-10"
        dangerouslySetInnerHTML={{ __html: title || "" }}
      />
      <p className="text-xl md:text-2xl leading-normal opacity-80 mb-6 md:mb-[56px]">
        {shortDesc}
      </p>
      <Button variant={"default"}>
        Start your free trial today <ArrowRight className="h-8 w-8 shrink-0" />
      </Button>
    </div>
  );
};

export default HeroContent;
