import hrtechLogo from "@/assets/brands/hrtech.svg";
import amplicationLogo from "@/assets/brands/amplication.svg";
import nityoLogo from "@/assets/brands/nityo.svg";
import decinstituteLogo from "@/assets/brands/decinstitute.webp";
import teachingkrowLogo from "@/assets/brands/teachingkrow.png";
import Marquee from "@/components/ui/marquee";

const brands = [
  {
    id: 1,
    img: hrtechLogo,
  },
  {
    id: 2,
    img: amplicationLogo,
  },
  {
    id: 3,
    img: nityoLogo,
  },
  {
    id: 4,
    img: decinstituteLogo,
  },
  {
    id: 5,
    img: teachingkrowLogo,
  },
];

const firstRow = brands.slice(0, brands.length);

const Brand = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-10 lg:gap-[90px]">
      <img className="h-7 w-auto" height="28" alt="brand-logo" src={img} />
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
