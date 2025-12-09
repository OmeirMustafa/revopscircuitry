import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const WhyFractional = () => {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">The Business Case</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Senior Expertise. <br className="md:hidden" /> Junior Cost.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Column A: Full-Time */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border border-white/5 bg-white/5 flex flex-col grayscale opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Full-Time RevOps Director</h3>
                        <p className="text-sm text-white/50 mb-8 font-mono">traditional_hiring_model.exe</p>

                        <div className="space-y-6 flex-1">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                    <X className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">$140,000 / year</div>
                                    <div className="text-sm text-white/50">+ Benefits, Equity, Overhead</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                    <X className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">3-6 Months</div>
                                    <div className="text-sm text-white/50">Ramp-up time before ROI</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                    <X className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">High Risk</div>
                                    <div className="text-sm text-white/50">Bad hire costs 30% of salary</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column B: Fractional (Winner) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-2xl border border-neon-blue bg-[#080808] flex flex-col shadow-[0_0_50px_rgba(4,217,255,0.1)]"
                    >
                        <div className="absolute top-0 right-0 bg-neon-blue text-black text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Recommended
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">Fractional Revenue Architect</h3>
                        <p className="text-sm text-neon-blue mb-8 font-mono">agile_revenue_system.exe</p>

                        <div className="space-y-6 flex-1">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue shrink-0">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">Flat Monthly Retainer</div>
                                    <div className="text-sm text-white/50">~60% Savings vs Full-Time</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue shrink-0">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">&lt; 14 Days</div>
                                    <div className="text-sm text-white/50">Immediate impact & auditing</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue shrink-0">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">Zero Risk</div>
                                    <div className="text-sm text-white/50">Pause or cancel anytime</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyFractional;
