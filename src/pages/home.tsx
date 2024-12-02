import { HeroContent } from "@/components/app/shared/hero-content";
import Layout from "@/components/app/layout/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SectionTitle from "@/components/app/shared/title";
import Agent from "@/components/app/home/agent";
import InteligenceSlider from "@/components/app/home/InteligenceSlider";
import StatisticsTop from "@/components/app/home/statisticsTop";
import Statistics from "@/components/app/home/statistics";
import FingerPrint from "@/components/app/home/fingerprint";
import FAQ from "@/components/app/shared/faq";

function HomePage() {
  return (
    <Layout>
      {/* bg-[linear-gradient(270deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.90)_100%)] */}
      <section className="bg-black">
        <div className="container pb-16">
          <div className="lg:pt-[100px] lg:pb-[260px] max-w-[902px]">
            <HeroContent />
          </div>
          <BrandsMarquee />
        </div>
      </section>
      {/* agents section  */}
      <section className="section_gap">
        <div className="container flex flex-col gap-16">
          <div className="max-w-[662px] flex flex-col gap-8 text-center mx-auto">
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
      {/* business Intelligence setion  */}
      <section className="section_gap bg-[#E1E9FE] px-4 md:px-0">
        <div className="max-w-[660px] mx-auto mb-16 text-center">
          <SectionTitle color={"#010609"} weight={600}>
            Business Intelligence at Your Fingertips.
          </SectionTitle>
        </div>
        <InteligenceSlider />
      </section>
      {/* statistics  */}
      <section className="section_gap bg-[#1D2427]">
        <div className="container">
          <Statistics />
        </div>
      </section>
      {/* fingerprint section  */}
      <section className="pt-20 bg-[#E9EAEC]">
        <div className="container">
          <FingerPrint />
        </div>
      </section>
      {/* faq  */}
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
