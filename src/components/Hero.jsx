import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

// Lazy Load Heavy Components
const ContactModal = lazy(() => import('./ContactModal'));
const RevenueCircuit = lazy(() => import('./RevenueCircuit'));

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
            <Suspense fallback={null}>
                <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </Suspense>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-50"></div>

            {/* 3D Grid/System Visual Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

                {/* Left: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        Web Operations & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white/80">Reliability Strategies</span> <br />
                        for SaaS, Scale Ops & High-Trust Digital Systems
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl font-medium leading-relaxed">
                        I help technology teams eliminate operational friction, improve reliability, and build resilient workflows that support growth and confidence.
                    </p>
                    
                    <p className="text-sm md:text-base text-white/50 mb-10 max-w-xl font-light leading-relaxed">
                        Ideal for SaaS teams, DevOps leaders, and engineering organizations seeking higher uptime, smoother deployments, and clearer operational strategy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary-neon group relative overflow-hidden z-20"
                        >
                            <span className="relative z-10 font-bold text-black group-hover:text-black">Discuss Your Challenges</span>
                        </button>
                        <Link to="proof" smooth={true} duration={800} offset={-70} className="btn-secondary-neon z-20 cursor-pointer">
                            Explore My Work
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Revenue Circuit Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                    <div className="absolute top-4 left-4 text-xs font-mono text-white/30">SYSTEM_STATUS: ONLINE</div>
                    <Suspense fallback={<div className="text-white/20 font-mono text-xs">INITIALIZING_circuitry...</div>}>
                        <RevenueCircuit />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
