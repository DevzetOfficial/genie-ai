import React from "react";
import { cn } from "@/lib/utils";
import HeroContent from "./hero-content";

type HeroProps = {
  heroImage?: string;
  title?: string;
  shortDesc?: string;
};

const Hero: React.FC<HeroProps> = ({ heroImage, title, shortDesc }) => {
  return (
    <div
      className={cn(
        heroImage ? "grid md:grid-cols-2 gap-10 lg:gap-24" : "grid"
      )}
    >
      <HeroContent title={title} shortDesc={shortDesc} />
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
