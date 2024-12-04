import Blog from "@/components/app/blog/Blog";
import Layout from "@/components/app/layout/layout";

// Import your blogs array
import  blogs  from "@/data/blogs"; // Adjust the path based on your file structure

function BlogPage() {
    // Filter blogs into featured and top-story categories
    const featuredBlogs = blogs.filter(blog => blog.type === "featured");
    const topStoryBlogs = blogs.filter(blog => blog.type === "top-story");

    return (
        <Layout>
            <section className="section_gap">
                <div className="container space-y-16">
                    {/* Featured Articles */}
                    <div>
                        <h2 className="titleTwo pb-6 border-b border-[#E9EAEC] mb-20">Featured Articles</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {featuredBlogs.map((blog, index) => (
                                <Blog key={index} blog={blog} />
                            ))}
                        </div>
                    </div>

                    {/* Top Stories */}
                    <div>
                        <h2 className="titleTwo pb-6 border-b border-[#E9EAEC] mb-20">Top stories</h2>
                        <div className="grid grid-cols-3 gap-8">
                            {topStoryBlogs.map((blog, index) => (
                                <Blog key={index} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default BlogPage;
