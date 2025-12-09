import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const CoreOffer = () => {
    const features = [
        "CRM optimization (HubSpot / Salesforce)",
        "Workflow automation",
        "Data architecture",
        "GTM process design",
        "Funnel optimization",
        "Reporting + analytics",
        "Cross-functional alignment",
        "Lead lifecycle engineering"
    ];

    return (
        <section className="py-24 bg-[#080808]">
            <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">What I Do</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Revenue Architecture</h2>
                    <p className="text-lg text-white/70 mb-8 leading-relaxed">
                        I combine business strategy, process engineering, automation, and system design into one unified discipline: Revenue Architecture.
                        <br /><br />
                        Most consultants just give advice. I build systems.
                    </p>
                    <div className="text-xl font-display font-bold text-white border-l-4 border-neon-blue pl-6 py-2 bg-white/5 rounded-r-lg">
                        Everything I build is built to scale.
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                            <CheckCircle2 className="text-neon-blue w-5 h-5 flex-shrink-0" />
                            <span className="text-white/90 text-sm font-medium">{feature}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoreOffer;
