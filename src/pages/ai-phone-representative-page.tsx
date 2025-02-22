import {
  aiPhonePageComparisonData,
  aiPhoneRepresentativeTestimonials,
  PhoneRepresentativeSalesDrive,
} from "@/data";
import franksImg from "@/assets/frank.webp";
import Hero from "@/components/app/shared/Hero";
import Layout from "@/components/app/layout";
import SalesDrive from "@/components/app/shared/sales-drive";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/phone-representitive/success-steps";
import WhyChooseFrank from "@/components/app/sdr/why-chose-frank";
import AiPageVideo from "@/assets/videos/ai-page-video.mp4";
import Testimonial from "@/components/app/shared/testimonial";
// import GetStartedVideo from "@/components/app/shared/get-started-video";
// import FrankGetStartedVideoThumb from "@/assets/frank.webp";
import FeatureHighlight from "@/components/app/shared/feature-highlight";
import RealWorldApp from "@/components/app/phone-representitive/real-world-app";
import ComparisonTable from "@/components/app/shared/comparison-table";

function AIPhoneRepresentativePage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)]">
        <div className="container pt-16 pb-10 md:pb-16 lg:pt-28 ">
          <div className="py-10 md:pb-14 lg:pb-36">
            <Hero
              heroImage={franksImg}
              title={"Frank - AI Phone Representative"}
              titleClass={"xl:text-[80px]"}
              shortDesc={
                "The ultimate 24/7 AI-powered phone representative, Frank eliminates the busywork and complexities of calling so you can focus on building meaningful connections and driving business growth."
              }
            />
          </div>
          <BrandsMarquee />
        </div>
        <video
          className="z-[-2] absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none 2xl:w-[110%] 2xl:h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={AiPageVideo} type="video/mp4" />
        </video>
      </section>

      <FeatureHighlight title="Simplify Calling. Amplify Results. <br/> Let Frank handle the tedious work while you focus on what matters: connecting with prospects and driving growth." />

      <SuccessSteps />

      {/* <GetStartedVideo
        videoWrapClass="[background-position:center_10%]"
        className="pt-0 md:pt-0 lg:pt-0"
        shortDesc="Frank combines Al-powered responsiveness, personalized interaction, and real-time adaptability to keep customers engaged, even as you grow."
        title="Get Started With Frank Today."
        videoUrl="https://www.youtube.com/embed/Oa0ZHfcalCM?si=u3DXwGf1_8N16I8I?autoplay=1"
        thumbnail={FrankGetStartedVideoThumb}
      /> */}

      <WhyChooseFrank />

      <SalesDrive salesDrive={PhoneRepresentativeSalesDrive} />

      <RealWorldApp />

      <ComparisonTable
        className="md:pt-0 lg:pt-0"
        data={aiPhonePageComparisonData}
      />

      <Testimonial
        className="mb-16 md:mb-20 lg:mb-24"
        title=" Client Testimonials "
        description="Proven Success with Genie AI Phone Representative"
        testimonials={aiPhoneRepresentativeTestimonials}
      />
    </Layout>
  );
}

export default AIPhoneRepresentativePage;
