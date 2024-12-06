import { BlogProp } from "@/types";
import { getImgUrl } from "@/utils/helper";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationSlowVarients } from "@/lib/utils";
import { motion } from "framer-motion";
const BlogCard = ({ blog, index }: { blog: BlogProp; index: number }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <motion.div
      className="cursor-pointer"
      variants={fadeInAnimationSlowVarients}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      onClick={handleNavigation}
    >
      <div
        className={` ${
          blog.type === "featured"
            ? "aspect-[640/420] mb-5 rounded-3xl"
            : "aspect-[416/180] mb-3 rounded-2xl"
        }   overflow-hidden`}
      >
        <img
          className="w-full h-full object-cover"
          src={getImgUrl(blog.coverImage)}
          alt={`${blog.title} cover`}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        {blog.category.map((cat, index) => (
          <span
            key={index}
            className="px-3 py-1 border text-[#010609] border-[#9EA3AE] text-xs rounded-[40px]"
          >
            {cat}
          </span>
        ))}
      </div>
      <h3
        className={`${
          blog.type === "featured" ? "titleTwo" : "titleThree"
        } mb-2 hover:text-primary`}
      >
        {blog.title}
      </h3>
      <p
        className={`${
          blog.type === "featured" ? "text-base" : "text-sm"
        } mb-3 text-[#010609B2] `}
      >
        {blog.description}
      </p>
      <div className="flex items-center gap-2 text-base text-[#9FA4AD]">
        <span>{blog.readingTime}</span>
        <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
          {blog.time}
        </span>
        <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
          {blog.author}
        </span>
      </div>
    </motion.div>
  );
};

export default BlogCard;
