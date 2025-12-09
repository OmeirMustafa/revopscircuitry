import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Layers, GitMerge, Database, Clock, EyeOff } from 'lucide-react';

const Symptoms = () => {
    const symptoms = [
        { icon: <AlertTriangle />, text: "Chaotic processes, zero consistency" },
        { icon: <GitMerge />, text: "Leads dropping between departments" },
        { icon: <Database />, text: "No single source of truth" },
        { icon: <Layers />, text: "Tools everywhere, nothing connected" },
        { icon: <Clock />, text: "Manual work slowing down growth" },
        { icon: <EyeOff />, text: "Leadership has no visibility" },
    ];

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="container px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                        If You See Any of These, <span className="text-neon-blue">You Need RevOps</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {symptoms.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-neon-blue/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-medium text-white/90">{item.text}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Symptoms;
