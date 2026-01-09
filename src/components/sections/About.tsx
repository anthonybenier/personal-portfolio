import { BlurReveal } from "../ui/BlurReveal";
import BlurText from "../reactbits/BlurText";




export const About = () => {

    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-black">
            <div className="w-full max-w-7xl mx-auto">
                <div className="mb-16">
                    <BlurText
                        text="About Me"
                        className="text-3xl md:text-5xl font-bold mb-8 text-white font-display"
                        delay={50}
                        animateBy="letters"
                        direction="bottom"
                    />
                    <BlurReveal>
                        <div className="space-y-6 text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl">
                            <p>
                                At the intersection of design and engineering, I don't just hand off designs—I build them. My background allows me to own the entire product lifecycle, ensuring that the original vision is preserved from the first Figma pixel to the final production deploy.
                            </p>
                            <p>
                                I believe that great products are born from a deep understanding of user needs and a relentless commitment to quality. Whether it's refining a micro-interaction or architecting a scalable UI system, I treat code as a creative tool to deliver experiences that feel as good as they look.
                            </p>
                        </div>
                    </BlurReveal>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BlurReveal delay={0.1} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-white mb-4 font-display">Product & Strategy</h3>
                        <p className="text-white/50 leading-relaxed">
                            Translating business goals into user-centric product roadmaps. I focus on discovery, problem definition, and iterative testing to build the right thing, not just the thing right.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.2} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-white mb-4 font-display">UX/UI Design</h3>
                        <p className="text-white/50 leading-relaxed">
                            Crafting intuitive, accessible, and inclusive interfaces. I use Figma not just for visuals, but for rigorous prototyping and design system management that scales.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.3} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-white mb-4 font-display">Frontend & Vibe Coding</h3>
                        <p className="text-white/50 leading-relaxed">
                            Building performant, animated, and responsive frontends with React, TypeScript, and Framer Motion. I obsess over the "feel" of the application, ensuring 60fps interactions.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.4} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-white mb-4 font-display">QA & Product Quality</h3>
                        <p className="text-white/50 leading-relaxed">
                            Quality is not an afterthought. I implement robust testing strategies (Cypress, unit tests) and conduct visual QA to ensure the final product is flawless and bug-free.
                        </p>
                    </BlurReveal>
                </div>

            </div>
        </section>
    );
};
