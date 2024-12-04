import cancelIcon from "@/assets/cancel-circle-compare.svg";
import checkMarkIcon from "@/assets/checkmark-circle-compare.svg";

interface CompareData {
  data: string[];
  withGenie: boolean;
}

const CompairCard: React.FC<CompareData> = ({ data, withGenie }) => {
  const icon=withGenie?checkMarkIcon:cancelIcon;
  return (
    <div className="relative rounded-2xl bg-[rgba(227,233,242,0.20)] p-5 md:p-8 pt-14 lg:px-12 lg:pt-24 lg:pb-[70px]">
      <span className={`text-xl lg:text-2xl font-semibold ${withGenie?'bg-[#8BE958] text-black':'bg-[#EC4343] text-white'} py-3 md:py-4 px-5 whitespace-nowrap lg:py-[18px] lg:px-6  rounded-[40px] -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 absolute leading-none`}>{
withGenie?'With Genie':'Before Genie'
}</span>
      <ul className="space-y-3 md:space-y-4 lg:space-y-6">
        {
          data.map((d) => (
            <li className="text-lg lg:text-xl font-medium text-[#282828] flex items-center gap-4">  <img src={icon} alt="" />{d} </li>
          ))
        }
      </ul>
    </div>
  );
};

export default CompairCard;
