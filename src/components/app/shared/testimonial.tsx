import TestimonialCard from "./testimonialCard";
import profile from "@/assets/profile.png";
import testimonialBrandLogo from "@/assets/testimonial-brand.png";
import testimonialBrandLogoTwo from "@/assets/testimonial-brand2.png";

const testimonials = [
  {
    id: 1,
    logo: false,
    review:
      "AI SDRs automate repetitive tasks, freeing up sales teams to focus",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#EECBBD",
  },
  {
    id: 2,
    logo: true,
    testimonialLogo: testimonialBrandLogo,
    bgColor: "#E1DAE6",
  },
  {
    id: 3,
    logo: false,
    review:
      "“AI SDRs automate repetitive tasks, freeing up sales teams to focus on high-value activities, boosting overall productivity.”",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#DAE6E3",
  },

  {
    id: 4,
    logo: true,
    testimonialLogo: testimonialBrandLogoTwo,
    bgColor: "#B6DCDC",
  },
  {
    id: 5,
    logo: false,
    review:
      "I SDRs automate repetitive tasks, freeing up sales teams to focus on high-value activities, boosting overall productivity.",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#B6BBDC",
  },
  {
    id: 6,
    logo: false,
    review:
      "AI SDRs automate repetitive tasks, freeing up sales teams to focus",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#E7BCD6",
  },
];

function Testimonial() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <TestimonialCard
        logo={testimonials[0].logo}
        testimonialLogo={testimonials[0].testimonialLogo}
        review={testimonials[0].review}
        profileImg={testimonials[0].profileImg}
        reviewerName={testimonials[0].reviewerName}
        designation={testimonials[0].designation}
        bgColor={testimonials[0].bgColor}
      />
      <TestimonialCard
        logo={testimonials[1].logo}
        testimonialLogo={testimonials[1].testimonialLogo}
        review={testimonials[1].review}
        profileImg={testimonials[1].profileImg}
        reviewerName={testimonials[1].reviewerName}
        designation={testimonials[1].designation}
        bgColor={testimonials[1].bgColor}
      />
      <TestimonialCard
        logo={testimonials[2].logo}
        testimonialLogo={testimonials[2].testimonialLogo}
        review={testimonials[2].review}
        profileImg={testimonials[2].profileImg}
        reviewerName={testimonials[2].reviewerName}
        designation={testimonials[2].designation}
        bgColor={testimonials[2].bgColor}
        className="md:col-span-2"
      />
      <TestimonialCard
        logo={testimonials[3].logo}
        testimonialLogo={testimonials[3].testimonialLogo}
        review={testimonials[3].review}
        profileImg={testimonials[3].profileImg}
        reviewerName={testimonials[3].reviewerName}
        designation={testimonials[3].designation}
        bgColor={testimonials[3].bgColor}
      />

      <TestimonialCard
        logo={testimonials[4].logo}
        testimonialLogo={testimonials[4].testimonialLogo}
        review={testimonials[4].review}
        profileImg={testimonials[4].profileImg}
        reviewerName={testimonials[4].reviewerName}
        designation={testimonials[4].designation}
        bgColor={testimonials[4].bgColor}
        className="order-last md:col-span-2 lg:order-none"
      />

      <TestimonialCard
        logo={testimonials[5].logo}
        testimonialLogo={testimonials[5].testimonialLogo}
        review={testimonials[5].review}
        profileImg={testimonials[5].profileImg}
        reviewerName={testimonials[5].reviewerName}
        designation={testimonials[5].designation}
        bgColor={testimonials[5].bgColor}
      />
    </div>
  );
}

export default Testimonial;
