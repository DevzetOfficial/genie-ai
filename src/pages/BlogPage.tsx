import Blog from "@/components/app/blog/Blog"
import Layout from "@/components/app/layout/layout"

function BlogPage() {
    return (
        <Layout>
            <section className="section_gap">
                <div className="container space-y-16">
                    <div>
                        <h2 className='titleTwo pb-6 border-b border-[#E9EAEC] mb-20'>Featured Articles</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <Blog />
                            <Blog />
                        </div>
                    </div>
                    <div >
                        <h2 className='titleTwo pb-6 border-b border-[#E9EAEC] mb-20'>Top stories</h2>
                        <div className="grid grid-cols-3 gap-8">
                            <Blog />
                            <Blog />
                            <Blog />
                            <Blog />
                            <Blog />
                            <Blog />
                            <Blog />
                            <Blog />
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    )
}

export default BlogPage