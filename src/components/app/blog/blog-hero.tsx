import { Button } from "@/components/app/shared/frontend-button";

const BlogHero = () => {
  return (
    <section className="py-20 lg:pt-48 lg:pb-[120px]">
      <div className="container">
        <div className=" grid lg:grid-cols-[8fr_4fr]">
          <div className="space-y-4 md:space-y-10">
            <h1 className="text-2xl md:text-5xl lg:text-[80px] text-[#010609] font-semibold">
              Insights, Trends, and Best Practices in Al-Powered Solutions
            </h1>
            <p className="text-xl text-[#010609B2]">
              Welcome to the Genie Blog-your go-to resource for the latest in
              Al, customer support automation, digital workers, and sales
              innovation.
              <br />
              Read through insights, success stories, and actionable tips that
              will help you harness the power of Al to drive growth, streamline
              operations, and deliver unparalleled customer experiences.
            </p>
            <form
              className="pt-2 flex gap-y-1 flex-wrap md:flex-nowrap items-center "
              action="#"
            >
              <input
                className="h-10 md:h-[60px] px-5 md:px-6 py-4 md:py-[18px] placeholder:text-[#B9C0CA] focus:outline-none md:min-w-[400px] border rounded-[40px]"
                type="text"
                placeholder="Enter your email"
              />

              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
