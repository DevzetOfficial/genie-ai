import Layout from "@/components/app/layout/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SectionTitle from "@/components/app/shared/title";
import Agent from "@/components/app/home/agent";
import InteligenceSlider from "@/components/app/home/InteligenceSlider";
import Statistics from "@/components/app/home/statistics";
import FingerPrint from "@/components/app/home/fingerprint";
import FAQ from "@/components/app/shared/faq";
import Testimonial from "@/components/app/shared/testimonial";
import { ComparisonTable } from "@/components/app/home/compareCard";
import Hero from "@/components/app/shared/Hero";
function HomePage() {
  return (
    <Layout>
      {/* bg-[linear-gradient(270deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.90)_100%)] */}
      <section className="bg-black">
        <div className="container pb-10 md:pb-16">
          <div className="lg:pt-[100px] pb-8 md:pb-20 lg:pb-[260px] max-w-[902px]">
            <Hero
              title={"Smart Sales,<br/>Strategic Marketing."}
              shortDesc={
                "Using Al-Driven Operations to Accelerate Business Growth"
              }
            />
          </div>
          <BrandsMarquee />
        </div>
      </section>
      <section className="section_gap">
        <div className="container flex flex-col gap-8 md:gap-16">
          <div className="max-w-[662px] flex flex-col gap-4 md:gap-8 text-center mx-auto">
            {
              <SectionTitle color={"#010609"} weight={600}>
                Meet our digital agents
              </SectionTitle>
            }
            <p className="text-lg text-[rgba(0, 0, 0, 0.70)] ">
              Repetitive administrative tasks eat up nearly a third of employee
              time, limiting their focus on strategic goals. These bottlenecks
              drain resources, stall growth, and pull your team away from
              high-impact initiatives.
            </p>
          </div>
          <Agent />
        </div>
      </section>
      <section className="section_gap bg-[#E1E9FE] px-4 lg:px-0">
        <div className="max-w-[660px] mx-auto mb-8 md:mb-16 text-center">
          <SectionTitle color={"#010609"} weight={600}>
            Business Intelligence at Your Fingertips.
          </SectionTitle>
        </div>
        <InteligenceSlider />
      </section>
      <section className="section_gap bg-[#1D2427]">
        <div className="container">
          <Statistics />
        </div>
      </section>
      <section className="pt-10 md:pt-20 bg-[#E9EAEC]">
        <div className="container">
          <FingerPrint />
        </div>
      </section>
      <section className="section_gap ">
        <div className="container">
          <ComparisonTable />
        </div>
      </section>

      <section className="section_gap bg-[rgba(32,34,35,1)]">
        <div className="container">
          <div className=" space-y-4 md:space-y-8 text-white text-center  mb-10 md:mb-20">
            <h3 className="text-3xl md:text-5xl font-semibold ">
              Testimonials
            </h3>
            <p className="text-xl md:text-2xl opacity-70">
              Our features makes AI SDRs a valuable asset for any business.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

      <section className="section_gap ">
        <div className="container">
          <div className="max-w-[864px] mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
