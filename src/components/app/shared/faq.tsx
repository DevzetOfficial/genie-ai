import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const genieFAQ = [
  {
    id: 1,
    question: "What makes Genie different from other Al tools on the market?",
    answer:
      "Genie is a comprehensive Al suite that combines sales, marketing, customer support, and operational efficiency in one platform, optimized for measurable business growth. Its adaptive intelligence goes beyond automation, actively learning and enhancing processes based on real-time data.",
  },
  {
    id: 2,
    question:
      "Will Genie replace my existing sales and customer service teams?",
    answer:
      "No, Genie is designed to empower your teams, not replace them. It automates repetitive tasks and provides insights to help your team focus on strategic and customer-centric activities.",
  },
  {
    id: 3,
    question: "Can Genie scale as my business grows?",
    answer:
      "Absolutely. Genie is built to adapt to businesses of all sizes, offering flexible configurations that grow with your needs, ensuring scalability without compromising performance.",
  },
  {
    id: 4,
    question: "Does Genie support multiple languages and global operations?",
    answer:
      "Yes, Genie is equipped with multilingual capabilities and supports global operations, making it a reliable tool for businesses with an international presence.",
  },
  {
    id: 5,
    question: "Can I control which tasks Genie automates?",
    answer:
      "Yes, Genie gives you full control over automation settings, allowing you to choose which tasks to automate while keeping oversight on crucial processes.",
  },
];

function FAQ() {
  return (
    <Accordion type="single" collapsible>
      {genieFAQ?.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;
