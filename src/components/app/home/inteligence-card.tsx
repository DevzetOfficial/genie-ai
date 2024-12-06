import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InteligenceCard({
  img,
  title,
  shortDesc,
}: {
  img: string;
  title: string;
  shortDesc: string;
}) {
  return (
    <Link to="">
      <div className="rounded-2xl aspect-[416/320] overflow-hidden mb-4 md:mb-8">
        <img className="size-full object-cover" src={img} alt="" />
      </div>
      <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-semibold mb-2 md:mb-4 text-black"
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: -50 },
        }}
      >
        {title}
      </motion.h4>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: -50 },
        }}
        className={"text-black/70"}
      >
        {shortDesc}
      </motion.p>
    </Link>
  );
}

export default InteligenceCard;
