import React from 'react';
import { motion } from 'framer-motion';

const ValueProp = () => {
    return (
        <section className="py-24 bg-[#080808]">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Who I Help & What I Solve
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed font-light">
                            I partner with engineering and technology teams that struggle with:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            "Frequent outages or deployment failures",
                            "Unclear operational boundaries and responsibilities",
                            "Slow or inconsistent release cycles",
                            "Lack of observable, repeatable DevOps processes"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start bg-white/5 p-6 rounded-lg border border-white/10">
                                <div className="w-2 h-2 rounded-full bg-neon-blue mt-2.5 mr-4 flex-shrink-0"></div>
                                <p className="text-lg text-white/80">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-white/70 leading-relaxed font-medium">
                            My focus is on solving these problems with clarity, precision, and real operational improvements — not templates or buzzword solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProp;
