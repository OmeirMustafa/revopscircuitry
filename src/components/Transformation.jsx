import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Transformation = () => {
    const steps = [
        { from: "Chaos", to: "Clarity" },
        { from: "Clarity", to: "Consistency" },
        { from: "Consistency", to: "Automation" },
        { from: "Automation", to: "Predictable Growth" }
    ];

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">The Transformation Framework</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The “System Maturity Ladder”</h2>
                    <p className="text-lg text-white/60">
                        Every company is somewhere on this ladder. <br />
                        My work is to move you upwards fast and permanently.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl md:ml-[calc(50px*var(--index))] hover:border-neon-blue/50 transition-all group relative overflow-hidden"
                            style={{ marginLeft: `${index * 20}px` }} // Slight visual ladder effect
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                            <span className="text-xl md:text-2xl font-bold text-white/40 group-hover:text-white transition-colors">{step.from}</span>
                            <ArrowUp className="text-neon-blue w-6 h-6 rotate-90" />
                            <span className="text-xl md:text-2xl font-bold text-white">{step.to}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transformation;
