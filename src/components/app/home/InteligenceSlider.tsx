import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import inteligenceOne from "@/assets/inteligence-1.png";
import inteligenceTwo from "@/assets/inteligence-2.png";
import inteligenceThree from "@/assets/inteligence-3.png";
import IntelligenceCard from "./InteligenceCard";

const inteligences = [
  {
    id: 0,
    img: inteligenceOne,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
  {
    id: 1,
    img: inteligenceTwo,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
  {
    id: 2,
    img: inteligenceThree,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
  {
    id: 3,
    img: inteligenceOne,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
  {
    id: 4,
    img: inteligenceOne,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
  {
    id: 5,
    img: inteligenceOne,
    title: "Markets with Intelligence",
    shortDesc: `Entering new markets can be complex, with shifting dynamics and unfamiliar business markets.`,
  },
];

function InteligenceSlider() {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1028: {
          slidesPerView: 3,
        },
        1224: {
          spaceBetween: 32,
          slidesPerView: 3.75,
        },
      }}
    >
      {inteligences.map((inteligent) => (
        <SwiperSlide key={inteligent.id}>
          <IntelligenceCard
            img={inteligent.img}
            title={inteligent.title}
            shortDesc={inteligent.shortDesc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default InteligenceSlider;
