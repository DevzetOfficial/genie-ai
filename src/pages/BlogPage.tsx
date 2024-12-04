import React from "react";
import { blogs } from "./data/blogs";
import Blog from "./components/Blog";

const BlogPage: React.FC = () => {
  return (
    <section className="section_gap">
      <div className="container space-y-16">
        <div>
          <h2 className="titleTwo pb-6 border-b border-[#E9EAEC] mb-20">
            Featured Articles
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {blogs
              .filter((blog) => blog.type === "featured")
              .map((blog) => (
                <Blog key={blog.id} {...blog} />
              ))}
          </div>
        </div>
        <div>
          <h2 className="titleTwo pb-6 border-b border-[#E9EAEC] mb-20">
            Top Stories
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {blogs
              .filter((blog) => blog.type === "top-story")
              .map((blog) => (
                <Blog key={blog.id} {...blog} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
