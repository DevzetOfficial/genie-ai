import BlogCard from "@/components/app/blog/blog-card";
import { blogs } from "@/data";

const FeaturedArticles = () => {
  return (
    <section className="mb-14">
      <div className="container">
        <h2 className="titleTwo pb-3 md:pb-6 border-b border-[#E9EAEC] mb-6 md:mb-20">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {blogs
            .filter((blog) => blog.type === "featured")
            .map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
