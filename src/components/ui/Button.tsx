import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    className?: string; // HTMLMotionProps includes className, but explicit is fine
}

export const Button = ({ children, variant = "primary", className, "aria-label": ariaLabel, ...props }: ButtonProps) => {
    const variants = {
        primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/10",
        ghost: "bg-transparent text-white hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "px-6 py-3 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50",
                variants[variant],
                className
            )}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </motion.button>
    );
};
