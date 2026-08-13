import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({
    src,
    alt,
    className = "",
}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(
        () => {
            if (!containerRef.current || !imageRef.current) {
                return;
            }

            gsap.fromTo(
                imageRef.current,
                {
                    yPercent: -8,
                },
                {
                    yPercent: 8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        },
        {
            scope: containerRef,
        }
    );

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default ParallaxImage;