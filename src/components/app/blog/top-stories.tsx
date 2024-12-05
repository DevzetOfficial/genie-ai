import { blogs } from "@/data";
import { useState } from "react";
import BlogCard from "@/components/app/blog/blog-card";
import { Button } from "@/components/app/shared/frontend-button";

const TopStories = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const topStories = blogs.filter((blog) => blog.type === "top-story");

  const handleLoadMore = () => {
    setVisibleCount(topStories.length);
  };

  return (
    <section>
      <div className="container">
        <div className="mb-14">
          <h2 className="titleTwo pb-3 md:pb-6 border-b border-[#E9EAEC] mb-6 md:mb-20">
            Top Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {topStories.slice(0, visibleCount).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        {visibleCount < topStories.length && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </div>
    </section>
  );
};

export default TopStories;
