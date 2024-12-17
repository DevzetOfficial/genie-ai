/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore: Unreachable code error */
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import IntelligenceCard from "./inteligence-card";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../shared/title";
import { inteligences } from "@/data";
import ShortDesc from "../shared/short-details";

function Inteligence() {
  return (
    <section className="section_gap bg-[#E1E9FE] px-4 lg:px-0">
      <div className="max-w-4xl grid gap-4 mx-auto mb-8 md:mb-16 text-center">
        <SectionTitle color={"#010609"} weight={600}>
          Get Started With Genie Today.
        </SectionTitle>
        <ShortDesc text="Experience the power of Genie, your 24/7 Al Sales Development Representative, </br> at a fraction of the cost of a human SDR." />
      </div>

      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          575: {
            slidesPerView: 2,
          },
          768: {
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
    </section>
  );
}

export default Inteligence;
