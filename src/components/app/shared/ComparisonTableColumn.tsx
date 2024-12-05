import { comparisonDataType } from "@/types";

// Declare the component using TypeScript
const ComparisonTableColumn = ({ category, genieFeature, otherAIFeature }:comparisonDataType) => {
  return (
    <div className="grid group lg:grid-cols-[2fr_10fr] border-b border-black font-medium">
      <div className="border-l 2 group-first:border-l-0 items-center p-8">
        {category}
      </div>
      <div className="grid lg:grid-cols-2 ">
        <div className="bg-slate-600 group-first:py-12 group-first:rounded-t-3xl py-8 px-4 relative group-first:border-t">
          <div>
            <div className="block md:hidden text-red-700">With Genie</div>
            {genieFeature}
          </div>
        </div>
        <div className="py-8 px-4 group-first:rounded-t-3xl group-first:border-t border-r">
          <div className="block md:hidden text-red-700">OtherAI Genie</div>
          {otherAIFeature}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTableColumn;
