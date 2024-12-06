import { ComparisonDataProp } from "@/types";
import checkIcon from "@/assets/check-circle.svg";
import cancelIcon from "@/assets/x-circle.svg";
import { motion } from "framer-motion";
const ComparisonTable = ({ data }: { data: ComparisonDataProp }) => {
  return (
    <section className="section_gap ">
      <div className="container lg:px-14">
        <div className=" space-y-4 md:space-y-8   max-w-4xl text-center mx-auto mb-10 md:mb-20">
          <motion.h3
            className="text-3xl md:text-5xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            {data.title}
          </motion.h3>
        </div>
        <motion.div
          className=" rounded-2xl max-lg:overflow-hidden border lg:border-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 200 },
          }}
        >
          {data?.items.map((item) => (
            <div
              key={item.id}
              className="grid group lg:grid-cols-[1fr_3.75fr] font-medium"
            >
              <div className="bg-gray-200 group-first:hidden lg:group-first:block  group-first:border-b-0 group-first:bg-transparent lg:bg-transparent text-center lg:text-start lg:border-l lg:group-[:nth-child(2)]:rounded-tl-3xl lg:group-[:nth-child(2)]:border-t group-first:border-l-0 items-center p-3 md:p-5 lg:p-6  border-b border-[#E9EAEC]">
                {item.category}
              </div>
              <div className="grid group-first:hidden lg:group-first:grid lg:grid-cols-[1.15fr_1fr] lg:items-baseline">
                <div className="table-feature-block lg:bg-[#00224D] border-b group-first:border-b-0 group-last:border-b-0  lg:border-[#002D66]  h-full lg:text-white group-first:rounded-tl-3xl lg:group-first:rounded-t-3xl group-first:text-xl md:group-first:text-[28px] group-first:font-bold group-first:border-t">
                  <div className="table-mobile-label">With Genie</div>
                  <div className="relative">
                    <img
                      className="table-feature-icon"
                      src={checkIcon}
                      alt=" check icon"
                    />
                    <div className="table-content">{item.genieFeature}</div>
                  </div>
                </div>
                <div className="table-feature-block group-first:rounded-tr-3xl lg:border-r  group-first:border-b-0 border-b border-[#E9EAEC]">
                  <div className="table-mobile-label text-black">Other AI</div>
                  <div className="relative">
                    <img
                      className="table-feature-icon "
                      src={cancelIcon}
                      alt=" cancel icon"
                    />
                    <div className="table-content">{item.otherAIFeature}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ComparisonTable;
