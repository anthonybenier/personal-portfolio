import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export const Textarea = ({ className, ...props }: TextareaProps) => {
    return (
        <textarea
            className={cn(
                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all min-h-[120px]",
                className
            )}
            {...props}
        />
    );
};
