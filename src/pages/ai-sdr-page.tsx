import sonyasImg from "@/assets/sonya.webp";
import Layout from "@/components/app/layout";
import Hero from "@/components/app/shared/Hero";
import FAQArea from "@/components/app/shared/faq";
import Showcase from "@/components/app/sdr/showcase";
// import SoniaGetStartedVideoThumb from "@/assets/sonya.webp";
import AiPageVideo from "@/assets/videos/ai-page-video.mp4";
import SalesDrive from "@/components/app/shared/sales-drive";
import Testimonial from "@/components/app/shared/testimonial";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/sdr/success-steps";
import { aiSalesDrive, aiSdrFaq, aiSdrTestimonials } from "@/data";
import AiDrivenOutreach from "@/components/app/sdr/ai-driven-outreach";
// import GetStartedVideo from "@/components/app/shared/get-started-video";
import FeatureHighlight from "@/components/app/shared/feature-highlight";
// import RevenueOportunities from "@/components/app/sdr/revenue-oportunities";
import CompareToCallCenter from "@/components/app/sdr/compare-to-call-center";
import WhyChooseSonya from "@/components/app/phone-representitive/why-choose-sonya";

function AISDRPage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)]">
        <div className="container pt-16 pb-10 md:pb-16 lg:pt-28 ">
          <div className="py-10 md:pb-14 lg:pb-56 ">
            <Hero
              heroImage={sonyasImg}
              title={"Sonya - AI SDR"}
              titleClass={"xl:text-[80px]"}
              shortDesc={
                "Put Your Sales on Autopilot. Boost Engagement, Reach More Leads, and Close Deals- All with Genie.  Using AI-Driven Operations to Accelerate Business Growth."
              }
            />
          </div>
          <BrandsMarquee />
        </div>

        <video
          id="heroVideo"
          className="max-sm:hidden z-[-2] absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={AiPageVideo} type="video/mp4" />
        </video>
      </section>

      <FeatureHighlight
        title="Experience the power of Sonya, your 24/7 <br/>
Al Sales Development Representative, at a fraction of <br/> the cost of a human SDR."
      />

      <SuccessSteps />

      {/* <GetStartedVideo
        videoWrapClass="[background-position:center_30%]"
        className="pt-0 md:pt-0 lg:pt-0"
        shortDesc="Experience the power of Sonya, your 24/7 Al Sales Development Representative, at a fraction of the cost of a human SDR."
        title="Get Started With Sonya Today."
        videoUrl="https://www.youtube.com/embed/Oa0ZHfcalCM?si=u3DXwGf1_8N16I8I?autoplay=1"
        thumbnail={SoniaGetStartedVideoThumb}
      /> */}

      <WhyChooseSonya />

      <SalesDrive salesDrive={aiSalesDrive} />

      <AiDrivenOutreach />

      {/* <RevenueOportunities /> */}

      <CompareToCallCenter />

      <Showcase />

      <Testimonial
        title=" Success Stories"
        description=" Why Companies Choose Genie AI SDR"
        testimonials={aiSdrTestimonials}
      />

      <FAQArea faqs={aiSdrFaq} />
    </Layout>
  );
}
export default AISDRPage;
