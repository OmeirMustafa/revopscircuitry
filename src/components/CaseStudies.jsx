import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    const cases = [
        {
            title: "B2B SaaS Pipeline Rebuild",
            category: "Revenue Infrastructure",
            context: "Hyper-growth SaaS company scaling sales team from 5 to 25 rep headcount.",
            problem: "Leaking leads due to manual routing and lack of scoring. Response times averaged 6+ hours.",
            strategy: "Redesigned HubSpot architecture, implemented automated lead scoring matrix and round-robin routing.",
            outcome: "40% increase in lead velocity. Response time dropped by 4 hours."
        },
        {
            title: "Agency Outbound System",
            category: "Lead Generation",
            context: "Marketing agency needing predictable lead flow outside of referrals.",
            problem: "Zero outbound consistency, heavy reliance on manual prospecting that burned out SDs.",
            strategy: "Built automated Apollo + LinkedIn workflow with unified reporting dashboard.",
            outcome: "150+ qualified meetings generated; 70% of initial outreach automated."
        },
        {
            title: "Global Tender Workflow",
            category: "Process Optimization",
            context: "Industrial firm managing complex global tenders with strict deadlines.",
            problem: "Missed deadlines and lost bids due to scattered email-based tracking.",
            strategy: "Engineered ClickUp-based management system with automated deadline alerts and stage gating.",
            outcome: "Capacity increased 3x (more bids submitted) with same headcount; 20hrs/week saved."
        }
    ];

    return (
        <section id="case-studies" className="py-24 bg-[#050505]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">Field Reports</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Case Studies</h2>
                </div>

                <div className="space-y-12">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#080808] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-neon-blue/20 transition-all"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <span className="text-neon-blue font-mono text-xs uppercase tracking-wider">{item.category}</span>
                                </div>
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Context</h4>
                                        <p className="text-white/80 leading-relaxed">{item.context}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Core Problem</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Strategic Decisions</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.strategy}</p>
                                        </div>
                                    </div>
                                    <div className="bg-neon-blue/5 p-4 rounded-lg border border-neon-blue/10">
                                        <h4 className="text-neon-blue text-xs font-bold uppercase tracking-wider mb-1">Outcome Logic</h4>
                                        <p className="text-white font-medium">{item.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
