import SectionTitle from "../shared/title";
import { workForceRevulationDatas } from "@/data/workforceRevulation";

function AiWorkforceRevulation() {
  return (
    <>
      <div className="max-w-screen-md mx-auto mb-10 md:mb-20">
        <SectionTitle weight={600}>
          Why Genie is Leading the Al Workforce Revolution
        </SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {workForceRevulationDatas.map((data) => (
          <div className="space-y-2 md:space-y-4 lg:space-y-8">
            <h4 className="text-2xl text-[#010609] font-semibold">
              {data.title}
            </h4>
            <p className="text-[#010609B2]/70 text-xl">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AiWorkforceRevulation;
