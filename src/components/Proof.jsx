import React from 'react';
import { motion } from 'framer-motion';

const Proof = () => {
    const cases = [
        {
            title: "Case 1: Funnel Visibility Fix",
            situation: "Team couldn’t track lead flow.",
            action: "Rebuilt lifecycle + automated handoff rules.",
            result: "Leadership gained real-time visibility and forecasting accuracy."
        },
        {
            title: "Case 2: Process Automation",
            situation: "Manual processes slowed sales.",
            action: "Designed revenue workflows + automated follow-ups.",
            result: "Faster response times and pipeline movement."
        },
        {
            title: "Case 3: Multi-Tool Unification",
            situation: "Tools were disconnected.",
            action: "Integrated CRM, outreach, forms, reporting.",
            result: "Single source of truth, reduced errors."
        }
    ];

    return (
        <section className="py-24 bg-[#050505]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">Proof of Work</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Outcomes Engineered</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-[#080808] border border-white/5 rounded-2xl hover:border-white/10 transition-all flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">{c.title}</h3>

                            <div className="space-y-4 text-sm text-white/80">
                                <div>
                                    <span className="text-white/40 uppercase text-xs font-bold tracking-wider block mb-1">Situation</span>
                                    {c.situation}
                                </div>
                                <div>
                                    <span className="text-white/40 uppercase text-xs font-bold tracking-wider block mb-1">Action</span>
                                    {c.action}
                                </div>
                                <div>
                                    <span className="text-neon-blue uppercase text-xs font-bold tracking-wider block mb-1">Result</span>
                                    <span className="font-bold text-white">{c.result}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proof;
