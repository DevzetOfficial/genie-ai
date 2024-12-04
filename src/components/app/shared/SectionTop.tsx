import React from "react";
import { Button, buttonVariants } from "./frontend-button";
import { ArrowRight } from "lucide-react";

interface SectionTopProps {
    title: string;
    size?: string; // Optional size prop
    pSize?: string,
    tColor?: string; // Optional color prop
    pColor?: string;
    marginBottom?: string; // Optional margin-bottom value for the title
    shortDetails?: string; // Optional short details
    buttonLink?: string; // Optional button link
    buttonVarient?: string;
}

const SectionTop: React.FC<SectionTopProps> = ({
    title,
    size,
    pSize,
    tColor,
    pColor,
    marginBottom,
    shortDetails,
    buttonLink,
}) => {
    // Default values for size and color
    // const defaultSize = size || "64px";
    // const defaultColor = color || "white";
    // const defaultMarginBottom = marginBottom || "32px";

    return (
        <div>
            {/* Title */}
            <h2
                className={`text-${size || "[64px]"} md:text-[48px] sm:text-[32px]`}
                style={{
                    color: tColor || "white",
                    marginBottom: marginBottom || "32px",
                }}
            >
                {title}
            </h2>


            {/* Conditional rendering for short details */}
            {shortDetails && <p className={`text-${pSize || 'text-base'}`} style={{
                color: pColor || "white",
            }}>{shortDetails}</p>}

            {/* Conditional rendering for button */}
            {buttonLink && (
                <Button variant={buttonVariants} href={buttonLink}>
                    Start your free trial <ArrowRight className="h-8 w-8 shrink-0" />
                </Button>
            )}
        </div>
    );
};

export default SectionTop;
