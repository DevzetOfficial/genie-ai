import OutReach from "../shared/OutReach";
import SectionTitle from "../shared/title";

interface aiDrivenData {
  id: number;
  title: string;
  details: string;
  features: string[];
}

const aiDrivenData: aiDrivenData[] = [
  {
    id: 1,
    title: "Book More Meetings with Al",
    details:
      "Genie tailors each message based on the lead's recent LinkedIn activity and bio, ensuring your outreach feels personal and relevant, helping you stand out from the noise.",
    features: [
      "Respond in 10 Minutes or Less: Engage leads in real time.",
      "Manage Responses: Handle auto-replies, negative responses, and follow-ups.",
    ],
  },
  {
    id: 2,
    title: "Generate Leads from Our Extensive Database",
    details:
      "Genie provides access to over 700 million leads across 30 million companies, letting you filter for your ideal customer with precision to keep your campaigns running smoothly.",
    features: [
      "Enrich Data: Add value to existing leads with additional data points.",
      "ABM Outreach: Target specific accounts for a focused approach.",
    ],
  },
  {
    id: 3,
    title: "Manage Your Sales Pipeline",
    details:
      "Convert trial users to paying clients with Genie's Al-powered nurturing that highlights your product's value, resolves questions, and encourages subscription upgrades.",
    features: [
      "Automated Scheduling: Sync with Calendly or HubSpot to streamline meetings.",
      "Re-Engagement Campaigns: Keep your pipeline active and moving.",
    ],
  },
  {
    id: 4,
    title: "Empower Sales Engagement",
    details:
      "Convert trial users to paying clients with Genie's Al-powered nurturing that highlights your product's value, resolves questions, and encourages subscription upgrades.",
    features: [
      "Upsell and Cross-Sell: Increase lifetime value through targeted offers.",
      "Stay Top of Mind: Use multi-channel outreach to keep users engaged.",
    ],
  },
];
function AiDrivenOutreach() {
  return (
    <>
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
          <OutReach
            key={data.id}
            title={data.title}
            details={data.details}
            featureDatas={data.features}
          />
        ))}
      </div>
    </>
  );
}

export default AiDrivenOutreach;
