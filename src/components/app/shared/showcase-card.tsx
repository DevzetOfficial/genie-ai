import { Link } from "react-router-dom";
import { Button } from "./frontend-button";
import { ArrowRight } from "lucide-react";

const ShowcaseCard = ({
  title,
  image,
  shortDesc,
  button,
}: {
  title: string;
  image: string;
  shortDesc?: string;
  button?: {
    label: string;
    url: string;
  };
}) => {
  return (
    <div className="grid bg-white p-10 rounded-[32px] group md:grid-cols-[4fr_8fr] even:md:grid-cols-[8fr_4fr] gap-10 ">
      <div className="group-even:order-2">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold lg:leading-tight text-[#010609]">
          {title}
        </h2>
        {shortDesc && (
          <p className="text-[#010609B2] text-xl mt-6 mb-10 md:mt-8 md:mb-12">
            {shortDesc}
          </p>
        )}
        {button && (
          <Link to={button.url}>
            <Button>
              {button.label}
              <ArrowRight className="h-8 w-8 shrink-0 " />
            </Button>
          </Link>
        )}
      </div>
      <img
        src={image}
        className="aspect-[824/469] object-cover w-full rounded-2xl group-even:order-1"
        alt={title}
      />
    </div>
  );
};

export default ShowcaseCard;
