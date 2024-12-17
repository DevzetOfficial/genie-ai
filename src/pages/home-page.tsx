import Layout from "@/components/app/layout";
import Hero from "@/components/app/shared/Hero";
import { homeFaq, homePageComparisonData, homeTestimonials } from "@/data";
import Agent from "@/components/app/home/agent";
import Showcase from "@/components/app/home/showcase";
import HeroVideo from "@/assets/videos/hero-video.mp4";
import Statistics from "@/components/app/home/statistics";
import FingerPrint from "@/components/app/home/finger-print";
import Testimonial from "@/components/app/shared/testimonial";
import Inteligence from "@/components/app/home/Inteligence";
import { BrandsMarquee } from "@/components/app/shared/brands";
import NotRegularAi from "@/components/app/home/not-regular-ai";
import ComparisonTable from "@/components/app/shared/comparison-table";
// import GetStartedVideo from "@/components/app/shared/get-started-video";
// import HomeGetStartedVideoThumb from "@/assets/home-video-thumbnail.webp";
import MeetAgentFeature from "@/components/app/home/meet-agent-feature";
import FAQArea from "@/components/app/shared/faq";

function HomePage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-black/60">
        <div className="container pt-16 pb-10 md:pb-16 lg:pt-32">
          <div className="py-10 md:pb-14 lg:pb-40">
            <Hero
              title={"More Meetings, Zero Stress."}
              shortDesc={
                "AI-Powered Conversations That Convert. <br/> For Sales, RevOps, and Go-to-Market Teams Ready to Scale Smarter."
              }
            />
          </div>
          <BrandsMarquee />
        </div>

        <video
          className="z-[-2] absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none 2xl:w-full 2xl:h-auto"
          autoPlay
          loop
          muted
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </section>

      <Agent />

      {/* <GetStartedVideo
        className="pt-0 md:pt-0 lg:pt-0"
        shortDesc="Experience the power of Genie, your 24/7 Al Sales Development <br/> Representative, at a fraction of the cost of a human SDR."
        title="Get Started With Genie Today."
        videoUrl="https://www.youtube.com/embed/Oa0ZHfcalCM?si=u3DXwGf1_8N16I8I?autoplay=1"
        thumbnail={HomeGetStartedVideoThumb}
      /> */}

      <Inteligence />

      <Statistics />

      <FingerPrint />

      <NotRegularAi />

      <Showcase />

      <MeetAgentFeature />

      <ComparisonTable className="bg-[#F0F6FF]" data={homePageComparisonData} />

      <Testimonial
        title="Client Testimonials"
        description=" Why Companies Choose Genie AI"
        testimonials={homeTestimonials}
      />

      <FAQArea faqs={homeFaq} />
    </Layout>
  );
}

export default HomePage;
