import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={onClick}
            className={cn(
                "bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
