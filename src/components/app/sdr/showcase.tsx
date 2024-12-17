import ShowcaseCard from "@/components/app/shared/showcase-card";
import HomeShowcaseOneImg from "@/assets/home-showcase-1.png";

const Showcase = () => {
  return (
    <section className="section_gap bg-[#00224D]">
      <div className="container">
        <ShowcaseCard
          title="Build Persona That Converts"
          shortDesc="Our guide to creating high-impact personas will help you target the right leads, enhancing Genie's performance and driving even better results"
          button={{
            label: "Build my persona",
          }}
          image={HomeShowcaseOneImg}
        />
      </div>
    </section>
  );
};

export default Showcase;
