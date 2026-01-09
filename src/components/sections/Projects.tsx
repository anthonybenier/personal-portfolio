import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/Button";
import { BlurReveal } from "../ui/BlurReveal";
import BlurText from "../reactbits/BlurText";

const projects = [
    {
        title: "Neon Commerce",
        desc: "A futuristic e-commerce platform built with Next.js and WebGL.",
        tags: ["Next.js", "WebGL", "Tailwind"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=85&w=1200",
    },
    {
        title: "Aura Dashboard",
        desc: "SaaS analytics dashboard with real-time data visualization.",
        tags: ["React", "D3.js", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1200",
    },
    {
        title: "Zenith UI",
        desc: "An open-source React component library for modern apps.",
        tags: ["TypeScript", "Storybook", "NPM"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=85&w=1200",
    },
    {
        title: "Echo Notes",
        desc: "AI-powered note-taking app with voice transcription.",
        tags: ["OpenAI", "React Native", "Firebase"],
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=85&w=1200",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-7xl mx-auto">
                <div className="mb-16">
                    <BlurText
                        text="Selected Works"
                        className="text-3xl md:text-5xl font-bold text-white font-display"
                        delay={50}
                        animateBy="letters"
                        direction="bottom"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <BlurReveal key={index} delay={index * 0.1} className={index % 2 === 1 ? "md:mt-24" : ""}>
                            <Card className="h-full flex flex-col group overflow-hidden p-0 border-0 bg-transparent">
                                <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <Button variant="outline" className="rounded-full p-3"><ExternalLink className="w-5 h-5" /></Button>
                                        <Button variant="outline" className="rounded-full p-3"><Github className="w-5 h-5" /></Button>
                                    </div>
                                </div>

                                <div className="flex-grow px-2">
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors font-display">{project.title}</h3>
                                    <p className="text-white/60 mb-4 line-clamp-2">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-white/80 font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </BlurReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
