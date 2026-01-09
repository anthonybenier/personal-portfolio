import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={cn(
                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all",
                className
            )}
            {...props}
        />
    );
};
