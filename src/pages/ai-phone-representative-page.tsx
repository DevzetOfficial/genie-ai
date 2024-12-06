import { PhoneRepresentativeSalesDrive } from "@/data";
import franksImg from "@/assets/frank.webp";
import Hero from "@/components/app/shared/Hero";
import Layout from "@/components/app/layout";
import SalesDrive from "@/components/app/shared/sales-drive";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/sdr/success-steps";
import WhyChooseFrank from "@/components/app/sdr/why-chose-frank";
import AiDrivenOutreach from "@/components/app/sdr/ai-driven-outreach";
import RevenueOportunities from "@/components/app/sdr/revenue-oportunities";
import CompareToCallCenter from "@/components/app/sdr/compare-to-call-center";
import AiPageVideo from "@/assets/videos/ai-page-video.mp4";
import Testimonial from "@/components/app/shared/testimonial";
import FAQ from "@/components/app/shared/faq";

function AIPhoneRepresentativePage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)]">
        <div className="container pb-10 md:pb-16 pt-16 lg:pt-28 ">
          <div className="py-10 md:pb-14 lg:pb-56 ">
            <Hero
              heroImage={franksImg}
              title={"Frank - AI Phone <br/> Representative"}
              titleClass={"xl:text-[80px]"}
              shortDesc={
                "Put Your Sales on Autopilot. Boost Engagement, Reach More Leads, and Close Deals- All with Genie."
              }
            />
          </div>
          <BrandsMarquee />
        </div>
        <video
          id="heroVideo"
          className="z-[-2] max-sm:hidden absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={AiPageVideo} type="video/mp4" />
        </video>
      </section>
      <SuccessSteps />
      <WhyChooseFrank />
      <SalesDrive salesDrive={PhoneRepresentativeSalesDrive} />
      <AiDrivenOutreach />
      <RevenueOportunities />
      <CompareToCallCenter />
      <Testimonial />
      <FAQ />
    </Layout>
  );
}

export default AIPhoneRepresentativePage;
