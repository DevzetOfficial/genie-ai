import { Button } from "./frontend-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/context/modal-context";

const ShowcaseCard = ({
  title,
  image,
  shortDesc,
  button,
}: {
  title: string;
  image: string;
  shortDesc?: string;
  button?: {
    label: string;
  };
}) => {
  const { openModal } = useModal();

  return (
    <motion.div
      className="grid bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[32px] group md:grid-cols-[5fr_7fr] even:md:grid-cols-[7fr_5fr] gap-10 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0.5, scale: 0.7 }, // Start squashed horizontally
        visible: { opacity: 1, scale: 1 }, // Expand to full height
      }}
    >
      <div className="group-even:order-2">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold lg:leading-tight text-[#010609]">
          {title}
        </h2>
        {shortDesc && (
          <p className="text-[#010609B2] text-xl mt-6 mb-10 md:mt-8 md:mb-12">
            {shortDesc}
          </p>
        )}
        {button && (
          <Button onClick={() => openModal()}>
            {button.label}
            <ArrowRight className="w-8 h-8 shrink-0 " />
          </Button>
        )}
      </div>
      <img
        src={image}
        className="aspect-[824/469] object-cover w-full rounded-2xl group-even:order-1"
        alt={title}
      />
    </motion.div>
  );
};

export default ShowcaseCard;
