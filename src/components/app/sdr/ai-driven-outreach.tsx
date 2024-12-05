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
          <p className="text-lg text-[#010609B2]">
            Outbound Lead Management: Convert Connections into Opportunities
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {aiDrivenData.map((data) => (
            <OutReach key={data.id} outreach={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiDrivenOutreach;
