
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import { BlurReveal } from "../components/ui/BlurReveal";


export const ProjectDetails = () => {
    const { id } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = {
        title: "Personal Portfolio",
        subtitle: "Bridging the gap between engineering and design with a performance-first immersive experience.",
        role: "Design Engineer",
        timeline: "Jan 2026",
        stack: ["React 19", "Tailwind CSS v4", "WebGL (OGL)", "Framer Motion"],
        image: "/projects/portfolio-screenshot.png",
        challenge: "The challenge was to create a portfolio that doesn't just display work but *demonstrates* it. I wanted to move away from standard grid layouts and create an experience that feels alive, fluid, and premium, without sacrificing performance (maintaining 60fps) or accessibility.",
        solution: "I built a custom design system focused on 'Liquid Glass' aesthetics and fluid interactions. Using WebGL for the 'Aurora' background and 'Splash Cursor' allowed for high-performance visual effects that standard CSS couldn't achieve. React 19 features were leveraged for optimal rendering, and Tailwind v4 provided a modern, zero-runtime styling engine.",
        impact: [
            "100/100 Lighthouse Performance Score.",
            "Seamless 60fps animations across devices.",
            "A reusable component architecture for future projects."
        ]
    };

    if (id !== "personal-portfolio") {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-black text-white pt-32 px-6 md:px-12 lg:px-24 pb-20">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-3xl leading-relaxed">{project.subtitle}</p>
                    </motion.div>

                    {/* Meta Data */}
                    <div className="flex flex-wrap gap-8 mb-16 border-y border-white/10 py-8">
                        <div>
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-2">Role</h3>
                            <p className="font-medium">{project.role}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-2">Timeline</h3>
                            <p className="font-medium">{project.timeline}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-2">Tech Stack</h3>
                            <div className="flex gap-2 flex-wrap">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-sm font-mono">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Visual */}
                    <BlurReveal className="mb-20">
                        <div className="rounded-2xl overflow-hidden aspect-video border border-white/10 relative group">
                            <img
                                src={project.image}
                                alt="Portfolio Hero"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex gap-4">
                                    <Button variant="outline" className="backdrop-blur-md">Live Demo <ExternalLink className="ml-2 w-4 h-4" /></Button>
                                    <Button variant="outline" className="backdrop-blur-md">View Code <Github className="ml-2 w-4 h-4" /></Button>
                                </div>
                            </div>
                        </div>
                    </BlurReveal>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        <BlurReveal delay={0.2}>
                            <h2 className="text-3xl font-bold mb-6 font-display">The Challenge</h2>
                            <p className="text-lg text-white/70 leading-relaxed">
                                {project.challenge}
                            </p>
                        </BlurReveal>
                        <BlurReveal delay={0.4}>
                            <h2 className="text-3xl font-bold mb-6 font-display">The Solution</h2>
                            <p className="text-lg text-white/70 leading-relaxed">
                                {project.solution}
                            </p>
                        </BlurReveal>
                    </div>

                    {/* Impact Section */}
                    <BlurReveal delay={0.6} className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10">
                        <h2 className="text-3xl font-bold mb-10 font-display text-center">Key Features & Metrics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {project.impact.map((item, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-4xl font-bold text-white mb-4">{index === 0 ? "100/100" : index === 1 ? "60fps" : "React 19"}</h3>
                                    <p className="text-white/60">{item}</p>
                                </div>
                            ))}
                        </div>
                    </BlurReveal>

                    {/* Next Project Placeholder */}
                    <div className="mt-32 border-t border-white/10 pt-16 flex justify-between items-center opacity-50 hover:opacity-100 transition-opacity">
                        <span className="text-white/40">Next Project</span>
                        <Link to="/" className="text-2xl font-display font-bold flex items-center gap-4">
                            Aura Dashboard <ArrowLeft className="rotate-180 w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
