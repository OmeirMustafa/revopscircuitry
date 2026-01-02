import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden">
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eng-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-eng-text mb-8 tracking-tight">
                        Start Your <span className="text-eng-blue">Engineering Project</span>
                    </h2>

                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        After you reach out, you’ll receive a short evaluation outlining feasibility, initial scope, and recommended next steps.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-eng-blue hover:bg-sky-400 text-slate-900 font-bold text-xl px-10 py-5 rounded shadow-[0_0_50px_rgba(56,189,248,0.2)] hover:shadow-[0_0_80px_rgba(56,189,248,0.4)] transition-all"
                        >
                            Discuss Feasibility
                        </button>
                    </motion.div>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="https://linkedin.com/in/kazi-ahmed-mustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-eng-blue transition-colors">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-slate-500 hover:text-eng-blue transition-colors">
                            <Mail className="w-5 h-5" /> Email
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
