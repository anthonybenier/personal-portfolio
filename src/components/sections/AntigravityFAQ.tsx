
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Image1 from "../../assets/FAQ/My7SNbGqP7RXWC7NQ2gn0m4yxl8.avif";
import Image2 from "../../assets/FAQ/fd3PfavaULEOqoI2kVj4XmiR5g.avif";
import Image3 from "../../assets/FAQ/kDDFdQi11eufzZl2QNW6DZQPHc.avif";
import Image4 from "../../assets/FAQ/uEuzLmHidyU1NDRflf2P1Y4ylsY.avif";

const images = [Image1, Image2, Image3, Image4];

const faqData = [
    {
        id: "01",
        question: "What services do you offer?",
        answer: "I specialize in Design Engineering—bridging the gap between UI/UX design and frontend development. I build high-end websites, interactive experiences, and robust applications using React, TypeScript, and Tailwind."
    },
    {
        id: "02",
        question: "What is your typical turnaround time?",
        answer: "It depends on the scope. A standard landing page takes 1-2 weeks, while a full corporate site or web app can take 4-8 weeks. I prioritize quality and animation polish over rushing."
    },
    {
        id: "03",
        question: "Do you only work in Framer?",
        answer: "No. While I love Framer for quick sites, my core expertise is custom code (React/Next.js). This allows for unlimited creativity, API integrations, and pixel-perfect optimization that no builder can match."
    },
    {
        id: "04",
        question: "Can you handle both design and build?",
        answer: "Absolutely. I am a 'Designer who Codes'. I can take a rough idea through wireframes, high-fidelity design in Figma, and straight into production-ready code."
    },
    {
        id: "05",
        question: "Do you offer brand strategy too?",
        answer: "I focus on digital execution. However, I have a network of talented brand strategists I partner with if you need a full brand overhaul from scratch."
    }
];

export const AntigravityFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#050505] flex flex-col justify-center py-32 z-20">
            {/* Background Mesh - Full Width */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            <div className="w-full px-4 md:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left Column: Visual & Statement */}
                <div className="flex flex-col justify-center relative">
                    <div className="mb-0 relative z-0">
                        <div className="relative w-48 h-72 md:w-64 md:h-96 rounded-lg overflow-hidden -mb-32 ml-4">
                            <img
                                src={images[currentImageIndex]}
                                alt="FAQ Visual"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-neon-orange/10 mix-blend-overlay pointer-events-none" />
                        </div>
                    </div>

                    <h2 className="relative z-10 text-6xl md:text-8xl font-bold font-display text-white leading-[0.85] tracking-tight mix-blend-difference ml-0 md:-ml-8 pointer-events-none">
                        Clarifying <br />
                        <span className="text-white/50">Deliverables</span> <br />
                        Before They <br />
                        Begin with <br />
                        <span className="text-white">Real Answers.</span>
                    </h2>
                </div>

                {/* Right Column: Accordion */}
                <div className="flex flex-col justify-center">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            className="border-b border-white/10 last:border-b-0 group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex items-start justify-between text-left focus:outline-none"
                            >
                                <div className="flex items-baseline gap-8 md:gap-16">
                                    <span className="text-xs font-mono text-neon-orange opacity-60">
                                        {item.id}
                                    </span>
                                    <span className={`text-xl md:text-2xl font-light transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`mt-1 p-1.5 rounded-full border border-white/10 transition-colors duration-300 ${openIndex === index ? 'bg-neon-orange border-neon-orange text-white' : 'text-white/40 group-hover:text-white group-hover:border-white'}`}>
                                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-12 md:pl-24 pr-4 pb-8">
                                            <p className="text-base text-white/40 leading-relaxed max-w-xl">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
