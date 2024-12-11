import logo1 from "@/assets/brandHrtech.svg";
import logo2 from "@/assets/brand-amplication.svg";
import logo3 from "@/assets/brand-nityo.svg";

import Marquee from "@/components/ui/marquee";

const brands = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo1,
  },
  {
    id: 5,
    img: logo2,
  },
  {
    id: 6,
    img: logo3,
  },
];

const firstRow = brands.slice(0, brands.length);

const Brand = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-10 lg:gap-[90px]">
      <img
        className="rounded-full h-7"
        height="28"
        alt="brand-logo"
        src={img}
      />
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
