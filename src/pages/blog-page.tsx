import Layout from "@/components/app/layout";
import BlogHero from "@/components/app/blog/blog-hero";
import TopStories from "@/components/app/blog/top-stories";
import FeaturedArticles from "@/components/app/blog/featured-articles";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <BlogHero />
      <FeaturedArticles />
      <TopStories />
    </Layout>
  );
};

export default BlogPage;
