import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/app/shared/frontend-button";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  heroImage?: string;
  title?: string;
  shortDesc?: string;
  titleClass?: string;
};

const Hero: React.FC<HeroProps> = ({
  heroImage,
  title,
  shortDesc,
  titleClass,
}) => {
  return (
    <div
      className={cn(
        heroImage ? "grid md:grid-cols-2 gap-10 lg:gap-24 items-center" : "grid"
      )}
    >
      <div className="text-white">
        <h1
          className={cn(
            `[&_br]:hidden lg:[&_br]:inline-block text-3xl md:text-5xl lg:text-6xl xl:text-[96px] font-bold  leading-none mb-5 md:mb-10`,
            titleClass
          )}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />
        <p className="text-xl md:text-2xl leading-normal opacity-80 mb-6 md:mb-[56px]">
          {shortDesc}
        </p>
        <Button variant={"default"}>
          Start your free trial today{" "}
          <ArrowRight className="h-8 w-8 shrink-0" />
        </Button>
      </div>

      {heroImage && (
        <div className="aspect-[640/600] rounded-2xl overflow-hidden order-first md:order-last">
          <img
            className=" object-cover size-full object-top"
            src={heroImage}
            alt="Hero Img"
          />
        </div>
      )}
    </div>
  );
};
export default Hero;
