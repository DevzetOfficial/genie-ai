import React from "react";

interface TestimonialCardProps {
    logo: boolean;
    testimonialLogo?: string;
    review?: string;
    profileImg?: string;
    reviewerName?: string;
    designation?: string;
    bgColor: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
    logo,
    testimonialLogo,
    review,
    profileImg,
    reviewerName,
    designation,
    bgColor,
}) => {
    return (
        <div
            className="rounded-2xl p-4 md:p-6 lg:p-8 border-8 border-[rgba(255,255,255,0.10)] min-h-[300px]"
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
                        <p className="text-2xl font-semibold text-[rgba(0,0,0,0.70)]">“{review}”</p>
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
