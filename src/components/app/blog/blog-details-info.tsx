import { BlogProp } from "@/types";
import { getImgUrl } from "@/utils/helper";

const BlogDetailsInfo = ({ blog }: { blog: BlogProp }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-[#010609] font-semibold">
          {blog.title}
        </h1>
        <div className="flex items-center gap-2 text-base text-[#9FA4AD]">
          <span>{blog.readingTime}</span>
          <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
            {blog.time}
          </span>
          <span className="pl-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:h-1 before:bg-[#6E6E6E] before:rounded-full">
            {blog.author}
          </span>
        </div>
      </div>

      <div className="rounded-[32px] overflow-hidden w-full max-h-[600px]">
        <img
          className="size-full object-cover"
          src={getImgUrl(blog.coverImage)}
          alt={`${blog.title} cover`}
        />
      </div>

      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-2 mb-3 md:mb-5">
          <img
            className="size-12 object-cover rounded-full"
            src={getImgUrl(blog.authorImg)}
            alt="author image"
          />
          <div className="space-y-1">
            <div className="text-sm text-[#9EA3AE]">
              By <span className="text-[#010609]">{blog.author}</span>
            </div>
            <span className="text-xs text-[#010609]">{blog.publishDate}</span>
          </div>
        </div>
        <div
          className="prose !max-w-full prose-a:text-primary prose-a:no-underline md:prose-p:text-xl prose-p:text-[#010609B2]/70 prose-blockquote:text-[#010609B2]/70 prose-blockquote:text-xl !prose-blockquote:p-10 prose-blockquote:!border-l-[#010609]/70 prose-blockquote:border-l-2 prose-h2:text-3xl prose-h2:font-semibold prose-li:marker:text-[#010609B2]/70 prose-li:my-0 prose-figcaption:text-center prose-img:rounded-2xl prose-img:aspect-[640/420]"
          dangerouslySetInnerHTML={{ __html: blog.longDesc || "" }}
        />
      </div>
    </>
  );
};

export default BlogDetailsInfo;
