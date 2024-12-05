import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { genieFAQ } from "@/data";
import SectionTitle from "./title";

function FAQ() {
  return (
    <section className="section_gap">
      <div className="container">
        <SectionTitle className="xl:text-5xl text-center font-bold mb-12 md:mb-16 xl:mb-20">
          Frequently Asked Questions
        </SectionTitle>

        <div className="max-w-[864px] mx-auto">
          <Accordion type="single" collapsible>
            {genieFAQ?.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
