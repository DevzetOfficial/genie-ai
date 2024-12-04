import SectionTitle from "../shared/title";
import CompairCard from "./CompareCard";

interface CompareDatas {
  id: number;
  withGenie: boolean;
  data: string[]

}
const compareDatas: CompareDatas[] = [

  {
    id: 1,
    withGenie: false,
    data: [
      "Time-Consuming, Manual Prospecting",
      "Missed Engagement Opportunities",
      "Generic Messaging",
      "Disjointed Sales Stack Requiring Multiple Tools",
    ]
  },
  {
    id: 2,
    withGenie: true,
    data: [
      "Automated Lead Generation And Qualification",
      "Consistent Multi-Channel Outreach",
      "Hyper-Personalized Interactions At Scale",
      "Simplified Sales Stack, With Genie As The Core",
    ]
  },
]
const CompareToCallCenter: React.FC = () => {
  return (
    <>
      <div className="max-w-[932px] mb-12 lg:mb-28 text-center mx-auto">
        <SectionTitle weight={600}>
          How Genie Al SDR Compares To Traditional Call Centers
        </SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-12 md:gap-4">
        {
          <CompairCard data={compareDatas[0].data} withGenie={compareDatas[0].withGenie} />
        }
        {
          <CompairCard data={compareDatas[1].data} withGenie={compareDatas[1].withGenie} />
        }
      </div>

    </>
  );
};

export default CompareToCallCenter;
