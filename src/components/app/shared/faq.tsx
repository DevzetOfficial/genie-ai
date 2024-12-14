import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionTitle from "./title";
import { motion } from "framer-motion";
function FAQArea({
  faqs,
}: {
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section className="section_gap">
      <div className="container">
        <SectionTitle className="xl:text-5xl text-center font-bold mb-12 md:mb-16 xl:mb-20">
          Frequently Asked Questions
        </SectionTitle>

        <motion.div
          className="max-w-[864px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 200 },
          }}
        >
          <Accordion type="single" collapsible>
            {faqs?.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQArea;
