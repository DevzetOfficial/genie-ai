import { testimonials } from "@/data";
import TestimonialCard from "./testimonial-card";

function Testimonial() {
  return (
    <section className="section_gap bg-[rgba(32,34,35,1)]">
      <div className="container">
        <div className=" space-y-4 md:space-y-8 text-white text-center  mb-10 md:mb-20">
          <h3 className="text-3xl md:text-5xl font-semibold ">Testimonials</h3>
          <p className="text-xl md:text-2xl opacity-70">
            Our features makes AI SDRs a valuable asset for any business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
