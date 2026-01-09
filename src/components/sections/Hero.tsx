import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import BlurText from "../reactbits/BlurText";
import Aurora from "../reactbits/Aurora";

export const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Building digital experiences that feel alive.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50">
                <Aurora
                    colorStops={["#5227FF", "#7cff67", "#5227FF"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>

            <div className="max-w-[1400px] w-full z-10 mx-auto">
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
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-white mb-2">
                        Crafting
                    </h1>
                    <BlurText
                        text={text + "|"}
                        className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-white/50"
                        delay={50}
                        animateBy="letters"
                        direction="bottom"
                    />
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
                    <Button>
                        View Properties <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline">
                        Contact Me
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0">
                    <div className="w-full h-1/2 bg-white/50 animate-scroll-down"></div>
                </div>
            </motion.div>
        </section>
    );
};
