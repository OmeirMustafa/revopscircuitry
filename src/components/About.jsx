import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] border-y border-white/5">
            <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Profile/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-eng-slate/20 blur-[100px] rounded-full"></div>
                    <img
                        src="/profile.jpg"
                        alt="Kazi Ahmed Mustafa - Electronics Engineer"
                        width="800"
                        height="800"
                        loading="lazy"
                        className="relative z-10 w-full md:w-[80%] mx-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 border border-slate-700 shadow-2xl"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-eng-blue font-mono text-sm tracking-widest uppercase mb-4 block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-eng-text mb-8">Engineering with Precision.</h2>
                    <div className="text-lg md:text-xl text-slate-400 space-y-6 font-light leading-relaxed">
                        <p>
                            With a background in Electrical & Electronic Engineering (BSc), I approach hardware development with a focus on first-principles physics and practical reliability.
                        </p>
                        <p>
                            My philosophy is simple: <strong>Function over form.</strong> A pretty PCB that fails EMC testing is useless. I prioritize signal integrity, thermal management, and manufacturability from the very first schematic.
                        </p>
                        <p className="border-l-2 border-eng-blue pl-4 text-slate-300 italic">
                            "I design systems that survive the real world, not just the simulation bench."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
