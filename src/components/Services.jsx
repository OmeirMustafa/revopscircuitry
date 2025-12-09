import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Services = () => {
    const packages = [
        {
            title: "Revenue Architecture Audit",
            desc: "A complete diagnosis of your revenue system.",
            highlight: false
        },
        {
            title: "Fractional RevOps",
            desc: "Ongoing optimization, workflows, reporting, automation.",
            highlight: true
        },
        {
            title: "Full System Build-out",
            desc: "From zero to fully architected revenue engine.",
            highlight: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#080808]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">Engagement Models</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">How We Can Partner</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-2xl border transition-all flex flex-col justify-between ${pkg.highlight ? 'bg-white/5 border-neon-blue/50 shadow-[0_0_30px_rgba(57,169,255,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}
                        >
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">{pkg.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">{pkg.desc}</p>
                            </div>

                            <Link to="contact" smooth={true} duration={800} className={`inline-flex items-center gap-2 font-bold cursor-pointer transition-colors ${pkg.highlight ? 'text-neon-blue hover:text-white' : 'text-white hover:text-neon-blue'}`}>
                                Start Conversation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
