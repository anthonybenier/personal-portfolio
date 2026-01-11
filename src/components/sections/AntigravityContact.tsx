import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export const AntigravityContact = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section id="contact" ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-center py-32">
            {/* Background Mesh - Full Width */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            {/* Massive Header - Full Width (Outside padded container) */}
            <div className="w-full overflow-hidden mb-12 md:mb-24 relative z-10 py-4">
                <motion.h2
                    style={{ x: xText }}
                    className="text-[18vw] leading-[0.8] font-black text-neon-orange whitespace-nowrap opacity-90 font-display"
                >
                    LET'S TALK
                </motion.h2>
            </div>

            <div className="w-full px-4 md:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pb-24">
                    <div className="lg:col-span-5">
                        <p className="text-3xl md:text-5xl text-white font-light leading-tight">
                            Have a project in mind? Let's build something that breaks the internet <span className="text-white/40">(in a good way)</span>.
                        </p>
                        <div className="mt-24 space-y-8">
                            <a href="mailto:hello@anthony.dev" className="block text-2xl md:text-4xl text-white hover:text-neon-orange transition-colors font-display underline decoration-white/20 underline-offset-8">hello@anthony.dev</a>
                            <div className="flex gap-12 pt-8 border-t border-white/10">
                                <a href="#" className="text-white/60 hover:text-neon-orange uppercase text-sm tracking-[0.2em]">Twitter</a>
                                <a href="#" className="text-white/60 hover:text-neon-orange uppercase text-sm tracking-[0.2em]">LinkedIn</a>
                                <a href="#" className="text-white/60 hover:text-neon-orange uppercase text-sm tracking-[0.2em]">Github</a>
                            </div>
                        </div>
                    </div>

                    <form className="lg:col-span-7 space-y-12 mt-12 lg:mt-0" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group relative">
                                <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-neon-orange transition-colors">Name</label>
                                <Input className="bg-transparent border-0 border-b-2 border-white/10 rounded-none px-0 py-6 text-white placeholder:text-transparent focus:border-neon-orange focus:ring-0 text-2xl md:text-3xl font-light transition-all w-full" />
                            </div>
                            <div className="group relative">
                                <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-neon-orange transition-colors">Email</label>
                                <Input className="bg-transparent border-0 border-b-2 border-white/10 rounded-none px-0 py-6 text-white placeholder:text-transparent focus:border-neon-orange focus:ring-0 text-2xl md:text-3xl font-light transition-all w-full" />
                            </div>
                        </div>
                        <div className="group relative">
                            <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-neon-orange transition-colors">Message</label>
                            <Textarea className="bg-transparent border-0 border-b-2 border-white/10 rounded-none px-0 py-6 text-white placeholder:text-transparent focus:border-neon-orange focus:ring-0 text-2xl md:text-3xl font-light min-h-[200px] resize-none transition-all w-full" />
                        </div>

                        <div className="flex justify-end">
                            <Button variant="neon" className="px-12 py-8 text-xl tracking-[0.2em] uppercase">
                                Send Transmission
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
