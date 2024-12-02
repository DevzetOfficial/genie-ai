import { Button } from "../shared/frontend-button";
import { ArrowRight } from "lucide-react";

function StatisticsTop() {
  return (
    <div className="space-y-3 flex flex-col items-center justify-center lg:space-y-10 text-white">
      <span>Did You Know?</span>
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold">
        Companies lose over 70% of potential sales leads due to delays in
        qualification and follow-up?
      </h2>
      <p className="opacity-70">
        Repetitive administrative tasks eat up nearly a third of employee time,
        limiting their focus on strategic goals. These bottlenecks drain
        resources, stall growth, and pull your team away from high-impact
        initiatives.
      </p>
      <Button variant={"default"}>
        Start your free trial today <ArrowRight className="h-8 w-8 shrink-0" />
      </Button>
    </div>
  );
}

export default StatisticsTop;
