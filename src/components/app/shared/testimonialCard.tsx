import { cn } from "@/lib/utils";
import React from "react";

interface TestimonialCardProps {
  logo: boolean;
  testimonialLogo?: string;
  review?: string;
  profileImg?: string;
  reviewerName?: string;
  designation?: string;
  bgColor: string;
  className?: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  logo,
  testimonialLogo,
  review,
  profileImg,
  reviewerName,
  designation,
  bgColor,
  className,
}) => {
  return (
    <div
      className={cn("rounded-2xl p-4 md:p-6 lg:p-8 min-h-64", className)}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {logo ? (
        <div className="flex justify-center items-center size-full">
          {testimonialLogo && (
            <div>
              <img
                src={testimonialLogo}
                alt="Brand Logo"
                className="size-full"
              />
            </div>
          )}
        </div>
      ) : (
        <div className=" size-full flex flex-col justify-between gap-12">
          {review && (
            <p className="text-xl md:text-2xl font-semibold text-[rgba(0,0,0,0.70)]">
              “{review}”
            </p>
          )}
          <div className="flex items-center gap-2.5">
            {profileImg && (
              <img
                className="rounded-full object-cover"
                src={profileImg}
                alt={`${reviewerName}'s Profile`}
                width={48}
                height={48}
              />
            )}
            <div>
              {reviewerName && (
                <span className="font-medium text-black block">
                  {reviewerName}
                </span>
              )}
              {designation && (
                <span className="text-[rgba(0,0,0,0.7)] block">
                  {designation}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
