import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import AbstractArt from "../../assets/black_and_white_stripes_4k_hd_abstract.jpg";

export const AntigravityHero = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end start"]
    });

    // Valid Scroll Parallax Logic (Sticky)
    // As user scrolls the 200vh track, these animate:

    // Text moves slightly slower/creates depth
    const xText1 = useTransform(scrollYProgress, [0, 1], ["-50%", "20%"]);
    const xText2 = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

    // Image scales up and slowly fades/moves
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    // Content fade out as we leave the hero track
    const contentOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={trackRef} className="relative h-[250vh] bg-[#050505]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <motion.div style={{ opacity: contentOpacity }} className="relative w-full h-full flex flex-col justify-center">
                    {/* Text Layer (Background) - Full Width */}
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 mix-blend-difference pointer-events-none select-none overflow-hidden py-12">
                        <motion.h1 style={{ x: xText1 }} className="text-massive font-bold text-white/5 whitespace-nowrap leading-none tracking-tighter">
                            DESIGN
                        </motion.h1>
                        <motion.h1 style={{ x: xText2 }} className="text-massive font-bold text-white/5 whitespace-nowrap ml-32 leading-none tracking-tighter">
                            ENGINEER
                        </motion.h1>
                    </div>

                    {/* Asymmetric Content Grid - Constrained Content */}
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full relative z-10">
                        {/* Image Layer (Foreground) */}
                        <div className="col-span-12 md:col-span-6 md:col-start-4 z-10 flex justify-center">
                            <motion.div
                                style={{ scale: scaleImage, y: yImage }}
                                className="relative w-full md:w-[80%] aspect-[3/4] overflow-hidden"
                            >
                                {/* Blending Mode applied to integrate JPG */}
                                <img
                                    src={AbstractArt}
                                    alt="Abstract Art"
                                    className="w-full h-full object-cover mix-blend-screen opacity-90"
                                />

                                {/* Soft Vignette to hide hard edges */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-80" />

                                {/* Caption inside Image */}
                                <div className="absolute bottom-10 left-8 right-8 text-white z-20">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                                        <span className="text-neon-orange font-mono text-xs tracking-widest uppercase">System.Active</span>
                                    </div>
                                    <h2 className="text-5xl font-display font-bold leading-none mb-2">Anthony<br />Benier</h2>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating CTA */}
                        <div className="absolute bottom-20 right-12 z-20 hidden md:block">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-right"
                            >
                                <p className="text-white/40 max-w-xs mb-6 text-sm leading-relaxed">
                                    Crafting digital experiences<br />that defy gravity.
                                </p>
                                <Button variant="neon" className="px-8 py-6 text-lg tracking-wider" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                    EXPLORE WORK <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-10 text-white/30 font-mono text-xs rotate-90 origin-left z-20"
                >
                    SCROLL TO EXPLORE
                </motion.div>
            </div>
        </section>
    );
};
