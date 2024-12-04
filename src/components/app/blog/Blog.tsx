import featureBlog from "@/assets/blog-1.webp"

function Blog() {
    return (
        <div>
            <div className='mb-5 aspect-[640/420] rounded-3xl overflow-hidden '>
                <img className="size-full object-cover" src={featureBlog} alt="blog cover picture" />
            </div>
            <div className='flex items-center gap-2 mb-2'>
                <span className='px-3 py-1 border text-[#010609] border-[#9EA3AE] text-xs rounded-[40px]'>Tech</span>
            </div>
            <a href="#" className='titleTwo  mb-2  hover:text-primary'>How to build a loyal community online and offline</a>
            <p className='mb-4 text-[#010609B2]'>The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3,000 troops to Russia for possible deployment in Ukraine, a move that could mark a significant escalation in Russia's war against its neighbor.</p>
            <div className='flex items-center gap-2'>
                <span className='text-base text-[#9FA4AD]'>10 min read</span>
                <span className='text-base text-[#9FA4AD] pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:size-1 before:bg-[#6E6E6E] before:rounded-full'>2 hours ago</span>
                <span className='text-base text-[#9FA4AD] pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:size-1 before:bg-[#6E6E6E] before:rounded-full'>Harris Lang</span>

            </div>

        </div>
    )
}

export default Blog