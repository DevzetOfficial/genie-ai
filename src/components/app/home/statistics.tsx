import statisticsImage from "@/assets/statistics.webp";
import { Button } from "@/components/app/shared/frontend-button";
import { ArrowRight } from "lucide-react";

function Statistics() {
  return (
    <>
      <section className="section_gap bg-[#1D2427]">
        <div className="container">
          <div className="max-w-[882px] mx-auto mb-[60px] text-center">
            <div className="space-y-3 flex flex-col items-center justify-center lg:space-y-10 text-white">
              <span>Did You Know?</span>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-semibold">
                Companies lose over 70% of potential sales leads due to delays
                in qualification and follow-up?
              </h2>
              <p className="opacity-70">
                Repetitive administrative tasks eat up nearly a third of
                employee time, limiting their focus on strategic goals. These
                bottlenecks drain resources, stall growth, and pull your team
                away from high-impact initiatives.
              </p>
              <Button>
                Start your free trial today{" "}
                <ArrowRight className="h-8 w-8 shrink-0" />
              </Button>
            </div>
          </div>

          <div className="aspect-[1312/726] ">
            <img
              className="size-full object-cover rounded-2xl"
              src={statisticsImage}
              alt="statistics details image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Statistics;
