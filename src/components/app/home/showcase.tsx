import { ArrowRight } from "lucide-react";
import { Button } from "@/components/app/shared/frontend-button";
import HomeShowcaseOneImg from "@/assets/home-showcase-1.png";
import HomeShowcaseTwoImg from "@/assets/home-showcase-2.png";
import ShowcaseCard from "../shared/showcase-card";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <section className="section_gap bg-[#00224D]">
      <div className="container">
        <div className="grid gap-8 mb-10 md:mb-[60px]">
          {[
            {
              title: "Break into Emerging Markets with Intelligence",
              image: HomeShowcaseOneImg,
            },
            {
              title: "Break into Emerging Markets with Intelligence",
              image: HomeShowcaseTwoImg,
            },
          ].map(({ title, image }, index) => (
            <ShowcaseCard key={index} title={title} image={image} />
          ))}
        </div>

        <Link to="/">
          <Button variant={"default"} className="mx-auto">
            Start your free trial today
            <ArrowRight className="h-8 w-8 shrink-0 " />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Showcase;
