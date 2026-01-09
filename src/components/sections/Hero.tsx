import { useRef } from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "../reactbits/BlurText";
import Aurora from "../reactbits/Aurora";
import { Magnetic } from "../ui/Magnetic";

export const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="h-screen flex flex-col justify-center px-6 relative overflow-hidden">
            {/* Background Aurora with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </motion.div>

            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-light text-white/60 mb-4 tracking-wider uppercase">
                        Product Designer & Vibe Coder
                    </h2>
                </motion.div>

                <div className="mb-6">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight font-display">
                        <span className="block text-white">Crafting</span>
                        <BlurText
                            text="digital experiences"
                            className="text-white/50"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-lg md:text-xl text-white/40 max-w-2xl mb-10 leading-relaxed"
                >
                    Specialized in creating ultra-modern web interfaces with a focus on motion, interaction, and accessibility.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="flex flex-wrap gap-4"
                >
                    <Magnetic strength={40}>
                        <Button>
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Magnetic>
                    <Magnetic strength={20}>
                        <Button variant="outline">
                            Contact Me
                        </Button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0">
                    <div className="w-full h-1/2 bg-white/50 animate-scroll-down"></div>
                </div>
            </motion.div>
        </section>
    );
};
