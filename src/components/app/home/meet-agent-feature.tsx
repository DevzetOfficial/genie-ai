import { FeatureBoxProp } from "@/types";
import sonyaImg from "@/assets/sonya.webp";
import frankImg from "@/assets/frank.webp";
import { motion } from "framer-motion";
import FeatureBox from "../shared/feature-box";

const meetAgentFeatures: FeatureBoxProp[] = [
  {
    title: "Meet Sonya",
    titleClass: "xl:text-5xl",
    highlight: "AI SDR",
    imageClass: "aspect-[640/700]",
    description:
      "Sonya provides a responsive, professional touchpoint for customers, 24/7. Designed to answer inquiries, handle transactions, and address concerns in real-time, Creating a seamless support experience that boosts customer satisfaction while lightening the load on your human agents.",
    image: sonyaImg,
    shortDesc:
      "With Sonya, customers receive a consistent, high-quality experience that fosters loyalty while reducing operational strain.",
    button: {
      label: "Learn more",
      url: "/ai-sdr",
    },
    capabilities: [
      "Instant Inquiry Responses",
      "Efficient Transaction Handling",
      "Effortless Escalation",
      "Multi-Language Support",
    ],
  },
  {
    title: "Meet Frank",
    titleClass: "xl:text-5xl",
    highlight: "Al Phone Representative",
    imageClass: "aspect-[640/700]",
    description:
      "Frank optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients. By identifying high-potential leads, nurturing relationships, and creating meaningful touch-points.",
    image: frankImg,
    shortDesc:
      "Frank handles the groundwork, allowing your sales team to focus on what they do best - securing deals with high-potential clients.",
    button: {
      label: "Learn more",
      url: "/ai-phone-representative",
    },
    capabilities: [
      "Targeted Outreach",
      "Lead Qualification",
      "Smart Personalization",
      "Automated Follow-Ups",
    ],
  },
];

const MeetAgentFeature = () => {
  return (
    <section className="section_gap bg-white">
      <div className="container">
        <div className="mb-[60px] ">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] text-center font-semibold [&_br]:hidden [&_br]:md:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            How Intelligent Are Your Sales and <br /> Marketing Efforts?
          </motion.h2>
        </div>

        <div className="grid gap-14 md:gap-16 lg:gap-20 xl:gap-[100px]">
          {meetAgentFeatures.map((feature, index) => (
            <FeatureBox key={index} featureData={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetAgentFeature;
