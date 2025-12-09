import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { title: "Step 1 — Diagnose", desc: "Map the entire revenue system end-to-end." },
        { title: "Step 2 — Architect", desc: "Design the new operating model + automations." },
        { title: "Step 3 — Build", desc: "Implement workflows, integrations, data layers, metrics." },
        { title: "Step 4 — Optimize", desc: "Improve velocity, accuracy, and automation depth." }
    ];

    return (
        <section id="process" className="py-24 bg-[#080808]">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">How I Work</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">System Design Process</h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Thread Line */}
                    <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-[#080808] border-2 border-neon-blue rounded-full z-10 shadow-[0_0_15px_rgba(57,169,255,0.5)]"></div>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/60">{step.desc}</p>
                                    </div>
                                </div>
                                {/* Spacer for other side layout */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
