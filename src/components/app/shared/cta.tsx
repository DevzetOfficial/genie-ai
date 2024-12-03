import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./frontend-button";
import footerImg from "@/assets/footer-img.png";

const CTA: FC = () => {
  return (
    <div className="container relative -bottom-20">
      <div className="bg-primary grid lg:grid-cols-2 items-center gap-8 p-6 rounded-3xl">
        {/* Video Section */}
        <div className="lg:px-20">
          <h3 className="text-[40px] font-semibold text-white mb-8">
            Revolutionize Your <br /> Sales Process?
          </h3>
          <p className="text-[#F5F7F9] text-lg leading-[140%] mb-10">
            Start your free trial today and experience the power of AI-driven
            sales development. Unlock your team's potential and boost your
            revenue!
          </p>
          <Button variant="footer">
            Start your free trial <ArrowRight className="h-8 w-8 shrink-0" />
          </Button>
        </div>

        {/* Image Section */}
        <div>
          <div className="aspect-[616/402] lg:ml-auto max-w-[616px]">
            <img className="size-full" src={footerImg} alt="footer top image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
