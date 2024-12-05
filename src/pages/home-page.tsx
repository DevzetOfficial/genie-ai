import Layout from "@/components/app/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import Agent from "@/components/app/home/agent";
import Statistics from "@/components/app/home/statistics";
import FingerPrint from "@/components/app/home/finger-print";
import FAQ from "@/components/app/shared/faq";
import Testimonial from "@/components/app/shared/testimonial";
import Hero from "@/components/app/shared/Hero";
import Inteligence from "@/components/app/home/Inteligence";
import ComparisonTable from "@/components/app/shared/comparison-table";
import { homePageComparisonData } from "@/data";

function HomePage() {
  return (
    <Layout>
      <section className="bg-black ">
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

      <Agent />

      <Inteligence />

      <Statistics />

      <FingerPrint />

      <ComparisonTable data={homePageComparisonData} />

      <Testimonial />

      <FAQ />
    </Layout>
  );
}

export default HomePage;
