import Layout from "@/components/app/layout/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import Hero from "@/components/app/shared/Hero";
import heroImg from "@/assets/sdrimg.webp";
import SectionTitle from "@/components/app/shared/title";
import SuccessSteps from "@/components/app/sdr_page/SuccessSteps";
import WhyChooseFrank from "@/components/app/sdr_page/WhyChoseFrank";
import SalesDrive from "@/components/app/sdr_page/SalesDrive";
import AiDrivenOutreach from "@/components/app/sdr_page/AiDrivenOutreach";
import RevenueOportunities from "@/components/app/sdr_page/RevenueOportunities";
import CompareToCallCenter from "@/components/app/sdr_page/CompareToCallCenter";

function AISDRPage() {
  return (
    <Layout>
      <section className="bg-black">
        <div className="container pb-10 md:pb-16">
          <div className="py-5 md:py-14">
            <Hero
              heroImage={heroImg}
              title={"Frank - <br/> Genie  Al SDR"}
              titleClass={"xl:text-[80px]"}
              shortDesc={
                "Put Your Sales on Autopilot. Boost Engagement, Reach More Leads, and Close Deals- All with Genie."
              }
            />
          </div>
          <BrandsMarquee />
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <div className="max-w-[964px] mx-auto text-center mb-6 md:mb-20">
            <SectionTitle weight={600}>
              Simplify, Scale, and Succeed
            </SectionTitle>
          </div>
          <SuccessSteps />
        </div>
      </section>
      <section className="section_gap bg-[#E1E9FE]">
        <div className="container">
          <WhyChooseFrank />
        </div>
      </section>
      <section className="bg-[#00224D] section_gap">
        <div className="container">
          <SalesDrive />
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <AiDrivenOutreach />
        </div>
      </section>
      <section className="section_gap bg-[#E1E9FE]">
        <div className="container">
          <RevenueOportunities />
        </div>
      </section>
      <section className="section_gap ">
        <div className="container lg:px-20">
          <CompareToCallCenter />
        </div>
      </section>
    </Layout>
  );
}

export default AISDRPage;
