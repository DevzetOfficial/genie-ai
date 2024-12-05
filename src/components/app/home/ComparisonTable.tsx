import * as React from "react";
import ComparisonColumn from "../shared/comparisonColumn";
import checkIcon from "@/assets/check-circle.svg";
import { comparisonDataType } from "@/types";
import ComparisonTableColumn from "../shared/ComparisonTableColumn";



const comparisonDatas: comparisonDataType[] = [
  {
    id: 1,
    category: "",
    genieFeature: "GenieAI",
    otherAIFeature: "Other AI"},
  {
    id: 2,
    category: "Marketing Precision",
    genieFeature: "Business intelligence with real-time optimization.",
    otherAIFeature: "Limited automation, lacks real-time adaptation.",
  },
  {
    id: 3,
    category: "Growth Focus",
    genieFeature: "Streamlines pipelines & enhances customer satisfaction",
    otherAIFeature: "Lacks growth-oriented strategy.",
  },
  {
    id: 4,
    category: "Technology",
    genieFeature: "Integrates seamlessly with CRM, ERP, & analytics tools.",
    otherAIFeature: "Requires extensive customization to fit workflows.",
  },
  {
    id: 5,
    category: "Management Efficiency",
    genieFeature: "Automates across departments, reducing workload",
    otherAIFeature: "Single-purpose tools that require manual",
  },
  {
    id: 6,
    category: "Customer Experience",
    genieFeature: "Provides 24/7 support with seamless escalation",
    otherAIFeature: "Lacking real-time assistance & escalation.",
  },
  {
    id: 7,
    category: "Data Security",
    genieFeature: "Industry-standard encryption & compliance",
    otherAIFeature: "Lack security measures & compliance standards.",
  },
  {
    id: 8,
    category: "Scalability",
    genieFeature: "Grows with your business",
    otherAIFeature: "Often requires additional resources",
  },
  {
    id: 9,
    category: "ROI Tracking",
    genieFeature: "Built-in analytics for clear insights",
    otherAIFeature: "Limited performance metrics & ROI tracking",
  },
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className=" rounded-lg">
      {
        comparisonDatas.map((dataRow) => (
          <ComparisonTableColumn key={dataRow.id} category={dataRow.category} genieFeature={dataRow.genieFeature} otherAIFeature={dataRow.otherAIFeature} />
        ))
      }
    </div>
  );
};
