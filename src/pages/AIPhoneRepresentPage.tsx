import Layout from "@/components/app/layout/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import Hero from "@/components/app/shared/Hero";
import heroImg from "@/assets/phone_representitive.webp";
import SectionTitle from "@/components/app/shared/title";
import SuccessSteps from "@/components/app/phone_representitive_page/SuccessSteps";
import WhyChooseSonya from "@/components/app/phone_representitive_page/WhyChooseSonya";
import SalesDrive from "@/components/app/phone_representitive_page/SalesDrive";
import RealWorldApp from "@/components/app/phone_representitive_page/RealWorldApp";
import AiDrivenCustomerSupport from "@/components/app/phone_representitive_page/CustomerSupport";
import AiWorkforceRevulation from "@/components/app/ai-worker-page/AiWorkforceRevulation";

function AIPhoneRepresentPage() {
  return (
    <Layout>
      <section className="bg-black">
        <div className="container pb-10 md:pb-16">
          <div className="py-10 md:py-14">
            <Hero
              heroImage={heroImg}
              title={"Sonya - <br/>Genie Al Phone Representative"}
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
          <div className="max-w-[964px] mx-auto text-center mb-20">
            <SectionTitle weight={600}>
              Simplify, Scale, and Succeed
            </SectionTitle>
          </div>
          <SuccessSteps />
        </div>
      </section>
      <section className="section_gap bg-[#E1E9FE]">
        <div className="container">
          <WhyChooseSonya />
        </div>
      </section>
      <section className="bg-[#00224D] section_gap">
        <div className="container">
          <SalesDrive />
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <RealWorldApp />
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <RealWorldApp />
        </div>
      </section>

      <section className="section_gap bg-[#E1E9FE]">
        <div className="container">
          <AiDrivenCustomerSupport />
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <AiWorkforceRevulation />
        </div>
      </section>
    </Layout>
  );
}
export default AIPhoneRepresentPage;
