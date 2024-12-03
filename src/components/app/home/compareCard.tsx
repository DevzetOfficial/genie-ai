import * as React from 'react';
import ComparisonColumn from './comparisonColumn';
import checkIcon from '@/assets/check-circle.svg'
import xIcon from '@/assets/x-circle.svg'

const categories = [
  "Sales Impact",
  "Marketing Precision",
  "Growth Focus",
  "Technology",
  "Management Efficiency",
  "Customer Experience",
  "Data Security",
  "Scalability",
  "ROl Tracking"
];

const genieFeatures = [
  { text: "Engages, Qualifies, & Nurtures Leads", iconSrc:checkIcon },
  { text: "Business intelligence with real-time optimization.", iconSrc:checkIcon },
  { text: "Streamlines pipelines & enhances customer satisfaction", iconSrc:checkIcon },
  { text: "Integrates seamlessly with CRM, ERP, & analytics tools.", iconSrc:checkIcon },
  { text: "Automates across departments, reducing workload", iconSrc:checkIcon },
  { text: "Provides 24/7 support with seamless escalation", iconSrc:checkIcon },
  { text: "Industry-standard encryption & compliance", iconSrc:checkIcon },
  { text: "Grows with your business", iconSrc:checkIcon },
  { text: "Built-in analytics for clear insights", iconSrc: checkIcon}
];

const otherAIFeatures = [
  { text: "Basic lead capture, no advanced qualification", iconSrc: xIcon },
  { text: "Limited automation, lacks real-time adaptation.", iconSrc: xIcon },
  { text: "Lacks growth-oriented strategy.", iconSrc:xIcon },
  { text: "Requires extensive customization to fit workflows.", iconSrc:xIcon },
  { text: "Single-purpose tools that require manual", iconSrc:xIcon },
  { text: "Lacking real-time assistance & escalation.", iconSrc:xIcon },
  { text: "Lack security measures & compliance standards.", iconSrc:xIcon },
  { text: "Often requires additional resources", iconSrc:xIcon },
  { text: "Limited performance metrics & ROI tracking", iconSrc: xIcon }
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-end text-base font-medium leading-snug">
      <div className="flex overflow-hidden flex-col bg-white rounded-[20px] border-l border-[#E9EAEC] min-w-[240px]  w-[252px]">
        {categories.map((category, index) => (
            <React.Fragment key={index}>
            <div
              className={`flex gap-3 items-center py-5 pr-4 pl-6 w-full min-h-[60px] bg-white'
              } max-md:pl-5 max-md:max-w-full`}
            >
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                {category}
              </div>
            </div>
            <div
              className={`w-full border border-solid min-h-[1px] border-[#E9EAEC] max-md:max-w-full`}
            />
          </React.Fragment>
          
        ))}
        <div className="w-full border border-[#E9EAEC] border-solid min-h-[1px]" />
      </div>

      <ComparisonColumn
        title="Genie AI"
        features={genieFeatures}
        variant="dark"
        className="rounded-3xl min-w-[240px]  w-[505px] font-medium"
      />

      <ComparisonColumn
        title="Other Al"
        features={otherAIFeatures}
        variant="white"
        className="rounded-none border-t border-r border-b border-[#E9EAEC] min-w-[240px] font-medium text-black text-opacity-70 w-[440px]"
      />
    </div>
  );
};


