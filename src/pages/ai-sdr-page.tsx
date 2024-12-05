import { SDRSalesDrive } from "@/data";
import heroImg from "@/assets/sdrimg.webp";
import Hero from "@/components/app/shared/Hero";
import Layout from "@/components/app/layout";
import SalesDrive from "@/components/app/shared/sales-drive";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/sdr/success-steps";
import WhyChooseFrank from "@/components/app/sdr/why-chose-frank";
import AiDrivenOutreach from "@/components/app/sdr/ai-driven-outreach";
import RevenueOportunities from "@/components/app/sdr/revenue-oportunities";
import CompareToCallCenter from "@/components/app/sdr/compare-to-call-center";

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

      <SuccessSteps />

      <WhyChooseFrank />

      <SalesDrive salesDrive={SDRSalesDrive} />

      <AiDrivenOutreach />

      <RevenueOportunities />

      <CompareToCallCenter />
    </Layout>
  );
}

export default AISDRPage;
