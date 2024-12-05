import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/app/layout";
import ReadNext from "@/components/app/blog/read-next";
import BlogDetailsInfo from "@/components/app/blog/blog-details-info";
import NotFoundPage from "./not-found-page";
import { blogs } from "@/data";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id == Number(id));

  if (!blog) {
    return (
      <NotFoundPage
        title="<span className='text-indigo-600 font-semibold'>Opps!</span> Blog Not Found"
        description="Please search an another blog"
      />
    );
  }

  return (
    <Layout>
      <div className="container space-y-14">
        <BlogDetailsInfo blog={blog} />
        <ReadNext />
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
