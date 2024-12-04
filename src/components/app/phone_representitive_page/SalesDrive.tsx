import SectionTitle from "../shared/title";
import salesDriveImageOne from "@/assets/sales-driveone.webp";
import salesDriveImageTwo from "@/assets/sales-drivetwo.webp";
import salesDriveImageThree from "@/assets/sales-drivethree.webp";
import salesDriveImageFour from "@/assets/sales-drivefour.webp";
import SingleSaleDrive from "../shared/SingleSaleDrive";

interface SalesDriveData {
  id: number;
  title: string;
  details: string;
  image: string;
}

const salesDriveData: SalesDriveData[] = [
  {
    id: 1,
    title: "1. Instant Responses That Keep Customers Engaged",
    details:
      "With Genie, create an Ideal Customer Profile and reach high-value buyers globally. Genie connects with potential leads across industries, pinpointing those who match your target profile and positioning your brand to make the best impression.",
    image: salesDriveImageOne,
  },
  {
    id: 2,
    title: "2. Personalized, Data-Driven Interactions",
    details:
      "Engage consistently through email, Linkedin, and other platforms, ensuring a unified approach to every prospect. Genie automates follow-ups, keeping leads warm and engaged across channels without extra manual input.",
    image: salesDriveImageTwo,
  },
  {
    id: 3,
    title: "3. Real-Time Call Routing and Escalation",
    details:
      "Genie's Al-driven insights allow for targeted outreach with precision that goes beyond human capabilities. Each email and message is customized based on the prospect's role, industry, and specific pain points, resulting in higher engagement and conversion rates.",
    image: salesDriveImageThree,
  },
  {
    id: 4,
    title: "4. Multi-Language Capabilities for Global Reach",
    details:
      "Operate your sales function 24/7 with Genie's autonomous capabilities. Genie SDR runs continuously, engaging leads, qualifying interest, and setting up appointments while your team focuses on strategic growth initiatives.",
    image: salesDriveImageFour,
  },
];

const SalesDrive: React.FC = () => {
  return (
    <>
      <div className="mb-6 md:mb-10 text-center lg:mb-20">
        <SectionTitle weight={600} color="#fff">
          How Genie Drives Your Sales
        </SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
        {salesDriveData.map((data) => (
          <SingleSaleDrive
            key={data.id}
            image={data.image}
            title={data.title}
            details={data.details}
          />
        ))}
      </div>
    </>
  );
};

export default SalesDrive;
