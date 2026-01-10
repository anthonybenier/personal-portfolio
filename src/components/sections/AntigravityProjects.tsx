import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "PORTFOLIO",
        category: "WEBGL EXP.",
        year: "2024",
        image: "/projects/portfolio-screenshot.png",
    },
    {
        id: 2,
        title: "AURA DASH",
        category: "SAAS PLATFORM",
        year: "2023",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1200",
    },
    {
        id: 3,
        title: "ZENITH UI",
        category: "DESIGN SYSTEM",
        year: "2023",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=85&w=1200",
    },
    {
        id: 4,
        title: "ECHO NOTES",
        category: "MOBILE APP",
        year: "2022",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=85&w=1200",
    },
];

export const AntigravityProjects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    // Parallax for the list
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yList = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#050505] py-32 overflow-hidden flex flex-col justify-center">
            {/* Section Title - Full Width aligned left */}
            <div className="w-full px-4 md:px-20 mb-24 relative z-10">
                <h2 className="text-white/20 font-display text-sm md:text-base mb-4 tracking-[0.3em] uppercase">/// Selected Works</h2>
            </div>

            <div className="w-full relative z-10">
                <motion.div style={{ y: yList }} className="flex flex-col">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to="/project/personal-portfolio"
                            className="group relative border-t border-white/10 py-16 md:py-28 transition-all hover:bg-white/5 px-4 md:px-20"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 md:gap-0 relative z-20 mix-blend-difference">
                                <h3 className="text-5xl md:text-[8vw] font-black text-white group-hover:text-transparent group-hover:stroke-white group-hover:stroke-2 transition-all duration-300 font-display uppercase leading-none tracking-tighter">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-8 md:gap-16">
                                    <span className="text-white/40 font-mono text-sm md:text-xl tracking-widest">{project.category}</span>
                                    <span className="text-white/40 font-mono text-sm md:text-xl tracking-widest">{project.year}</span>
                                    <ArrowUpRight className="text-white w-8 h-8 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
                                </div>
                            </div>

                            {/* Hover Reveal Image - Massive Background Reveal */}
                            <div
                                className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 ${hoveredProject === project.id ? "opacity-30" : ""}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                        </Link>
                    ))}
                    <div className="border-t border-white/10" />
                </motion.div>
            </div>

        </section>
    );
};
