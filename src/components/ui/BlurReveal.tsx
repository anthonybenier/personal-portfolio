import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

interface BlurRevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    blurAmount?: number;
    yOffset?: number;
}

export const BlurReveal = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    blurAmount = 20,
    yOffset = 20,
    ...props
}: BlurRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: `blur(${blurAmount}px)`, y: yOffset }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: `blur(${blurAmount}px)`, y: yOffset }}
            transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }} // smooth ease-out
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
