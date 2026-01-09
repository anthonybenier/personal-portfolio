import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Create Something Amazing</h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Drop me a line and let's discuss your next project.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 max-w-xl mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input placeholder="Name" />
                        <Input placeholder="Email" type="email" />
                    </div>
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Message" />
                    <Button className="w-full">Send Message</Button>
                </motion.form>
            </div>
        </section>
    );
};
