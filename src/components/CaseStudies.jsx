import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    const cases = [
        {
            title: "B2B SaaS Pipeline Rebuild",
            category: "Revenue Infrastructure",
            result: "+40% Lead Velocity",
            desc: "Redesigned the entire HubSpot CRM architecture for a SaaS client, implementing automatic lead scoring and routing that reduced response time by 4 hours."
        },
        {
            title: "Agency Outbound System",
            category: "Lead Generation",
            result: "150+ Qualified Meetings",
            desc: "Built a multi-channel outbound system using Apollo.ai & LinkedIn Sales Nav. Automated 70% of the initial outreach while maintaining personalization at scale."
        },
        {
            title: "Global Tender Workflow",
            category: "Process Optimization",
            result: "20hrs/Week Saved",
            desc: "Engineered a ClickUp-based tender management system for an industrial firm, allowing them to track and bid on 3x more projects with the same team size."
        }
    ];

    return (
        <section id="work" className="section bg-black">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Selected Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Provenance & Results</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all hover:bg-white/10"
                        >
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4 h-14">
                                {item.result}
                            </div>
                            <p className="text-white/70 text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
