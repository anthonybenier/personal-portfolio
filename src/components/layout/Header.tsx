import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../utils/cn";

import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { Magnetic } from "../ui/Magnetic";

export const Header = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [enableEntryAnim, setEnableEntryAnim] = useState(true);
    const isNavHovered = useRef(false);
    const { lenis } = useSmoothScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const handleMouseEnter = (item: string) => {
        if (!isNavHovered.current) {
            setEnableEntryAnim(true);
        } else {
            setEnableEntryAnim(false);
        }
        isNavHovered.current = true;
        setHoveredItem(item);
    };

    const handleNavLeave = () => {
        setHoveredItem(null);
        isNavHovered.current = false;
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(targetId);
        } else {
            // Fallback
            document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-6 py-3 transition-all duration-300 ease-in-out rounded-full border border-white/10",
                isScrolled
                    ? "bg-white/10 backdrop-blur-md shadow-lg w-[90%] md:w-auto md:min-w-[600px]"
                    : "bg-white/5 backdrop-blur-sm w-[90%] md:w-auto md:min-w-[600px]"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-xl tracking-tighter text-white cursor-pointer font-display" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="font-bold">ANTHONY</span>
                <span className="font-light text-white/80">BENIER</span>
            </div>

            <nav className="hidden md:flex items-center gap-1 ml-4" onMouseLeave={handleNavLeave}>
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                    <Magnetic key={item} strength={20}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                            className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors capitalize z-10 block"
                            onMouseEnter={() => handleMouseEnter(item)}
                        >
                            {hoveredItem === item && (
                                <motion.div
                                    layoutId="nav-liquid-pill"
                                    className="absolute inset-0 bg-white/15 rounded-full backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_-2px_rgba(255,255,255,0.2)]"
                                    style={{ borderRadius: 9999 }}
                                    initial={enableEntryAnim ? { opacity: 0 } : false}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6
                                    }}
                                />
                            )}
                            <span className="relative z-20 font-display">{item}</span>
                        </a>
                    </Magnetic>
                ))}
            </nav>

            <button className="md:hidden text-white ml-auto pl-4">
                {/* Mobile Menu Icon Placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
        </motion.header>
    );
};
