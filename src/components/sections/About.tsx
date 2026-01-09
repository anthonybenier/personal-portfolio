import { Code, Palette, Zap } from "lucide-react";
import { BlurReveal } from "../ui/BlurReveal";
import BlurText from "../reactbits/BlurText";

const skills = [
    { icon: Palette, title: "Product Design", desc: "Crafting intuitive and beautiful user experiences." },
    { icon: Code, title: "Frontend Dev", desc: "Building scalable and performant web applications." },
    { icon: Zap, title: "Interaction", desc: "Adding life to interfaces with smooth animations." },
];

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
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl">
                            I'm a multidisciplinary designer and developer who bridges the gap between design and engineering. With a keen eye for detail and a passion for clean code, I build digital products that are not only functional but also delightful to use.
                        </p>
                    </BlurReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <BlurReveal
                            key={index}
                            delay={index * 0.2}
                            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
                        >
                            <skill.icon className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2 font-display">{skill.title}</h3>
                            <p className="text-white/50">{skill.desc}</p>
                        </BlurReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
