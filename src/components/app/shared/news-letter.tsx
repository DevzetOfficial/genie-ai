import { Button } from "@/components/app/shared/frontend-button";
import { cn } from "@/lib/utils";

const NewsLetter = ({ inputClass }: { inputClass?: string }) => {
  return (
    <form className="pt-2 flex gap-y-1  items-center " action="#">
      <input
        className={cn(
          "h-10 md:h-14 px-5 md:px-6 py-4 md:py-[18px]  placeholder:text-[#B9C0CA] bg-transparent focus:outline-none w-full max-w-[400px] border rounded-full",
          inputClass
        )}
        type="text"
        placeholder="Enter your email"
      />

      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default NewsLetter;
