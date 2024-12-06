import BlogCard from "@/components/app/blog/blog-card";
import { blogs } from "@/data";

const ReadNext = () => {
  return (
    <div>
      <h2 className="titleTwo pb-3 md:pb-6 border-b border-[#E9EAEC] mb-6 md:mb-20">
        Read Next
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {blogs?.slice(4, 7).map((blog, index) => (
          <BlogCard index={index} key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ReadNext;
