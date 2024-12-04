import React from "react";
import { useParams } from "react-router-dom";
import {blogs}  from "@/data/blogData";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {/* Add more blog details */}
    </div>
  );
};

export default BlogDetails;
