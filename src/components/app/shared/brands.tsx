import logo1 from "@/assets/brand-logo-1.png";
import logo2 from "@/assets/brand-logo-2.png";
import logo3 from "@/assets/brand-logo-3.png";
import logo4 from "@/assets/brand-logo-4.png";
import logo5 from "@/assets/brand-logo-5.png";
import logo6 from "@/assets/brand-logo-6.png";
import logo7 from "@/assets/brand-logo-7.png";

import Marquee from "@/components/ui/marquee";

const brands = [
  {
    id: 0,
    img: logo1,
  },
  {
    id: 1,
    img: logo2,
  },
  {
    id: 2,
    img: logo3,
  },
  {
    id: 3,
    img: logo4,
  },
  {
    id: 4,
    img: logo5,
  },
  {
    id: 6,
    img: logo6,
  },
  {
    id: 7,
    img: logo7,
  },
];

const firstRow = brands.slice(0, brands.length / 2);

const Brand = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-10 lg:gap-[90px]">
      <img className="rounded-full" height="28" alt="brand-logo" src={img} />
      <div className="flex flex-col"></div>
    </div>
  );
};

export function BrandsMarquee() {
  return (
    <div className="">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((brand) => (
          <Brand key={brand.id} {...brand} />
        ))}
      </Marquee>
    </div>
  );
}
