import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import YoutubePlayIcon from "@/assets/youtube-play-icon.svg";

const GetStartedVideo = ({
  title,
  shortDesc,
  videoUrl,
  thumbnail,
  videoWrapClass,
  className,
}: {
  title: string;
  shortDesc: string;
  videoUrl: string;
  className?: string;
  videoWrapClass?: string;
  thumbnail: string;
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className={cn("section_gap", className)}>
      <div className="container">
        <div className="max-w-[784px] mx-auto mb-[60px] text-center grid gap-6 lg:gap-7">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
            className="text-[#010609]/70 [&_br]:hidden [&_br]:lg:block lg:text-xl"
            dangerouslySetInnerHTML={{ __html: shortDesc }}
          />
        </div>

        <motion.div
          className={cn(
            "relative rounded-2xl z-[1] md:rounded-3xl lg:rounded-[32px] overflow-hidden w-full h-72 sm:h-80 md:h-[400px] lg:h-[560px] bg-cover bg-center",
            isVideoVisible
              ? "bg-black"
              : "after:absolute after:inset-0 after:bg-black/40 after:z-[-1]",
            videoWrapClass
          )}
          style={{
            backgroundImage: isVideoVisible ? "none" : `url('${thumbnail}')`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 100 },
          }}
        >
          {isVideoVisible ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${videoUrl}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <button
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              onClick={handlePlayVideo}
            >
              <img src={YoutubePlayIcon} alt="Youtube play icon" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedVideo;
