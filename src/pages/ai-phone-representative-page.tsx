import FAQ from "@/components/app/shared/faq";
import Hero from "@/components/app/shared/Hero";
import Layout from "@/components/app/layout";
import {
  aiPhonePageComparisonData,
  PhoneRepresentativeSalesDrive,
} from "@/data";
import heroImg from "@/assets/phone_representitive.webp";
import SalesDrive from "@/components/app/shared/sales-drive";
import Testimonial from "@/components/app/shared/testimonial";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/phone-representitive/success-steps";
import WhyChooseSonya from "@/components/app/phone-representitive/why-choose-sonya";
import RealWorldApp from "@/components/app/phone-representitive/real-world-app";
import CustomerSupport from "@/components/app/phone-representitive/customer-support";
import ComparisonTable from "@/components/app/shared/comparison-table";

function AIPhoneRepresentivePage() {
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

      <SuccessSteps />

      <WhyChooseSonya />

      <SalesDrive salesDrive={PhoneRepresentativeSalesDrive} />

      <RealWorldApp />

      <CustomerSupport />

      <ComparisonTable data={aiPhonePageComparisonData} />

      <Testimonial />

      <FAQ />
    </Layout>
  );
}
export default AIPhoneRepresentivePage;
