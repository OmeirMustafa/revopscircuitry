import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            {/* Subtle Gradient Mesh Support */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-0"></div>

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 bg-black/30 backdrop-blur-sm">
                        Revenue Infrastructure Architect
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                >
                    Stop Guessing. <br />
                    <span className="gradient-text">Start Engineering Your Revenue.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed"
                >
                    I build high-velocity revenue engines for B2B SaaS and Agencies.
                    From CRM architecture to automated workflow systems—I turn data into predictable growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to="contact" smooth={true} duration={500} className="btn btn-primary px-8 py-4 text-lg">
                        Consult With Me
                    </Link>
                    <Link to="work" smooth={true} duration={500} className="btn btn-outline px-8 py-4 text-lg">
                        View Case Studies
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
            >
                <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white/50 hover:text-white">
                    <ArrowDown size={32} />
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
