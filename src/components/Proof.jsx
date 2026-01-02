import React from 'react';
import { motion } from 'framer-motion';

const Proof = () => {
    const testimonials = [
        {
            quote: "Omeir’s insights transformed our deployment strategy overnight.",
            author: "Engineering Lead, SaaS Company"
        },
        {
            quote: "Clear thinker, excellent communicator, and a true DevOps strategist.",
            author: "Senior Platform Engineer"
        },
        {
            quote: "He brought clarity to our chaotic release process and improved uptime significantly.",
            author: "CTO, Fintech Startup"
        }
    ];

    return (
        <section id="proof" className="py-24 bg-[#050505]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">Trust & Social Proof</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Proof That I Deliver</h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        The feedback below reflects the <span className="text-neon-blue italic">value I deliver</span> in real technical environments. These are reviewed quotes from collaborators and team members.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-[#080808] border border-white/5 rounded-2xl hover:border-white/10 transition-all flex flex-col justify-between"
                        >
                            <p className="text-lg text-white/90 italic mb-8 leading-relaxed">"{t.quote}"</p>
                            <div className="text-sm font-bold text-neon-blue uppercase tracking-wider">
                                — {t.author}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proof;
