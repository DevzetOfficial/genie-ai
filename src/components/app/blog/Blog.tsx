import React from "react";
import { useNavigate } from "react-router-dom";

interface BlogProps {
  title: string;
  category: string[];
  description: string;
  author: string;
  time: string;
  readingTime: string;
  coverImage: string;
  id: string; // Unique identifier for navigation
}

const Blog: React.FC<BlogProps> = ({
  title,
  category,
  description,
  author,
  time,
  readingTime,
  coverImage,
  id,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/blog/${id}`); // Navigate to blog details page
  };

  return (
    <div onClick={handleNavigation} className="cursor-pointer">
      <div className="mb-5 aspect-[640/420] rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={coverImage}
          alt={`${title} cover`}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        {category.map((cat, index) => (
          <span
            key={index}
            className="px-3 py-1 border text-[#010609] border-[#9EA3AE] text-xs rounded-[40px]"
          >
            {cat}
          </span>
        ))}
      </div>
      <h3 className="titleTwo mb-2 hover:text-primary">{title}</h3>
      <p className="mb-4 text-[#010609B2]">{description}</p>
      <div className="flex items-center gap-2 text-base text-[#9FA4AD]">
        <span>{readingTime}</span>
        <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
          {time}
        </span>
        <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
          {author}
        </span>
      </div>
    </div>
  );
};

export default Blog;
