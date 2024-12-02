import StatisticsTop from "./statisticsTop";
import statisticsImage from "@/assets/statistics.webp";

function Statistics() {
  return (
    <>
      <div className="max-w-[882px] mx-auto mb-[60px] text-center">
        <StatisticsTop />
      </div>
      <div className="aspect-[1312/726] ">
        <img
          className="size-full object-cover rounded-2xl"
          src={statisticsImage}
          alt="statistics details image"
        />
      </div>
    </>
  );
}

export default Statistics;
