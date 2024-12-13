import HighlightedLogo from "@/assets/highlighted-logo.png";

const FeatureHighlight = ({ title }: { title: string }) => {
  return (
    <section className="bg-[#E1E9FE] py-6 md:py-10 lg:py-20">
      <div className="container flex flex-col items-center gap-4 text-center sm:gap-6 md:gap-8 lg:gap-14">
        <img
          className="object-contain w-auto h-12 md:h-16"
          src={HighlightedLogo}
          alt={`Highlighted Logo`}
        />
        <h3
          className="text-[#010609] text-2xl leading-tight font-semibold md:text-[40px] [&_br]:hidden lg:[&_br]:block"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </section>
  );
};
export default FeatureHighlight;
