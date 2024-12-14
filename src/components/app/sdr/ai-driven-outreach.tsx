import { aiDrivenData } from "@/data";
import OutReach from "@/components/app/sdr/out-reach-card";
import SectionTitle from "@/components/app/shared/title";

function AiDrivenOutreach() {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="mb-6 md:mb-10 text-center lg:mb-20 space-y-2 md:space-y-8 max-w-[638px] mx-auto">
          <SectionTitle weight={600}>
            Humanly Awesome AI-Driven Outreach
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
          <div className="grid gap-6">
            <h4 className="text-xl font-semibold md:text-2xl text-[#010609]">
              Outbound Lead Management
            </h4>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-[40px]">
              Convert Connections into Opportunities
            </h2>
          </div>

          {aiDrivenData.map((data) => (
            <OutReach key={data.id} outreach={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiDrivenOutreach;
