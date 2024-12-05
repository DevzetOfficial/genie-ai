import { SalesDriveProp } from "@/types";
import SectionTitle from "./title";

const SalesDrive = ({ salesDrive }: { salesDrive: SalesDriveProp }) => {
  return (
    <section className="bg-[#00224D] section_gap">
      <div className="container">
        <div className="mb-6 md:mb-10 text-center lg:mb-20">
          <SectionTitle weight={600} color="#fff">
            {salesDrive.title}
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
          {salesDrive.items?.map((data) => (
            <div
              key={data.id}
              className="p-5 md:py-10 md:pl-10 border border-[#E3E9F2] bg-[#FCFCFD] rounded-2xl text-black space-y-5 md:space-y-10"
            >
              <div className="lg:pr-10 space-y-2 md:space-y-4 lg:space-y-8">
                <h3 className="text-2xl md:md:text-[32px] font-semibold leading-snug">
                  {data.title}
                </h3>
                <p className="opacity-70  md:text-xl">{data.details}</p>
              </div>
              <div className="aspect-[600/290]  rounded-2xl overflow-hidden order-first lg:order-last">
                <img
                  className=" object-cover size-full object-left-top"
                  src={data.image}
                  alt="sales drive image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesDrive;
