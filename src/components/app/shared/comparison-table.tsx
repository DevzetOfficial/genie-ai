import { ComparisonDataProp } from "@/types";
import checkIcon from "@/assets/check-circle.svg";
import cancelIcon from "@/assets/x-circle.svg";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "./frontend-button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useModal } from "@/context/modal-context";
const ComparisonTable = ({
  data,
  className,
}: {
  data: ComparisonDataProp;
  className?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { pathname } = useLocation();
  const { openModal } = useModal();

  const isHomePage = pathname === "/";

  return (
    <section className={cn("section_gap", className)}>
      <div className="container lg:px-14">
        <div className="max-w-4xl mx-auto mb-10 space-y-4 text-center md:space-y-8 md:mb-20">
          <motion.h3
            className="text-3xl font-semibold md:text-5xl [&_br]:hidden md:[&_br]:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
            dangerouslySetInnerHTML={{ __html: data.title || "" }}
          />
        </div>
        <motion.div
          className="border rounded-2xl max-lg:overflow-hidden lg:border-none"
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
              <div
                className={`bg-gray-200 group-first:hidden lg:group-first:block  group-first:border-b-0 group-first:bg-transparent ${
                  isHomePage ? "lg:bg-white" : "lg:bg-transparent"
                } text-center lg:text-start lg:border-l lg:group-[:nth-child(2)]:rounded-tl-3xl lg:group-[:nth-child(2)]:border-t group-first:border-l-0 items-center p-3 md:p-5 lg:p-6  border-b border-[#E9EAEC]`}
              >
                {item.category}
              </div>
              <div className="grid group-first:hidden lg:group-first:grid lg:grid-cols-[1.15fr_1fr]">
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
                <div
                  className={`table-feature-block group-first:rounded-tr-3xl lg:border-r ${
                    isHomePage && "bg-white"
                  } group-first:border-b-0 border-b border-[#E9EAEC]`}
                >
                  <div className="text-black table-mobile-label">Other AI</div>
                  <div className="relative">
                    <img
                      className="table-feature-icon "
                      src={cancelIcon}
                      alt=" cancel icon"
                    />
                    <div className="text-black/70 table-content">
                      {item.otherAIFeature}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {isHomePage && (
          <motion.div
            ref={ref}
            viewport={{ once: true }}
            className={` duration-700 delay-100 flex justify-center items-center mt-6 md:mt-10 lg:mt-14 ${
              isInView
                ? "opacity-100 translate-y-0 "
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <Button onClick={() => openModal()}>
              Book a Demo <ArrowRight className="w-8 h-8 shrink-0 " />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
export default ComparisonTable;
