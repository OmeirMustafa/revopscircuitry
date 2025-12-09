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
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">What I Solve</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                        Most teams don’t have a <span className="text-white/40 line-through decoration-neon-blue/50">revenue problem</span>. <br />
                        They have a <span className="text-neon-blue">system problem</span>.
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-light">
                        Gaps between marketing → sales → ops → success bleed pipeline, kill velocity, and create compounding inefficiency. I design and optimize the end-to-end engine so every part works together.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProp;
