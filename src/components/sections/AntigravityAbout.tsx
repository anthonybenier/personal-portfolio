import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Avatar from "../../assets/Avatar.png";

export const AntigravityAbout = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-hidden py-32">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Massive Kinetic Text - Full Width */}
            <div className="w-full overflow-hidden mb-24 relative z-10 py-4">
                <motion.h2
                    style={{ x: xText }}
                    className="text-[20vw] leading-[0.8] font-bold text-white/5 whitespace-nowrap font-display"
                >
                    THE CREATOR
                </motion.h2>
            </div>

            <div className="w-full px-4 md:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
                    {/* Content */}
                    <div className="col-span-1 md:col-span-5 md:col-start-2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-neon-orange font-mono mb-6 text-xl tracking-[0.2em]">/// 01. WHO AM I</h3>
                            <p className="text-3xl md:text-5xl text-white font-light leading-tight mb-12">
                                I don't just write code. I engineer <span className="font-bold text-white">digital emotions</span>.
                            </p>
                            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl">
                                Bridging the gap between raw engineering and artistic direction. My work is a constant exploration of motion, interaction, and visual storytelling. I believe the web is an infinite canvas waiting to be broken.
                            </p>

                            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">Design</h4>
                                    <ul className="text-white/40 space-y-2 text-lg">
                                        <li>UI/UX Systems</li>
                                        <li>Motion Design</li>
                                        <li>3D Composition</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">Tech</h4>
                                    <ul className="text-white/40 space-y-2 text-lg">
                                        <li>React / Next.js</li>
                                        <li>WebGL / Three.js</li>
                                        <li>Typescript</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Layer */}
                    <div className="col-span-1 md:col-span-4 md:col-start-8">
                        <motion.div
                            style={{ y: yImage, rotate }}
                            className="relative aspect-[4/5] bg-neutral-900"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 mix-blend-overlay z-20 pointer-events-none" />
                            <img
                                src={Avatar}
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale contrast-125 z-10 relative"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center text-white/20 animate-spin-slow">
                                *
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
