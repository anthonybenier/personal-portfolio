
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        >
            <motion.div
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 1,
                }}
                className="w-8 h-8 rounded-full border-2 border-[#FF3B00] bg-transparent flex items-center justify-center relative shadow-[0_0_10px_rgba(255,59,0,0.5)]"
            >
                {/* Center dot */}
                <motion.div
                    animate={{ scale: isHovering ? 0 : 1 }}
                    className="w-1 h-1 bg-[#FF3B00] rounded-full"
                />
            </motion.div>
        </motion.div>
    );
};
