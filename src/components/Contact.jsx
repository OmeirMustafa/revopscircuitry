import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section bg-gradient-to-b from-black to-[#050505]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale Your<br />Revenue Engine?</h2>

                        <p className="text-white/60 mb-10 text-lg">
                            Whether you need a full audit or a specific system build, I'm ready to engineer the solution. Available for fractional roles and project-based work.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:ask.ahmedmustafa@gmail.com" className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors bg-white/5 p-4 rounded-xl border border-white/5 hover:border-emerald-500/40">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 uppercase font-bold">Email Me</p>
                                    <p className="text-lg font-medium">ask.ahmedmustafa@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+8801728407485" className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors bg-white/5 p-4 rounded-xl border border-white/5 hover:border-emerald-500/40">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 uppercase font-bold">Call Me</p>
                                    <p className="text-lg font-medium">+88 01728407485</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 uppercase font-bold">Location</p>
                                    <p className="text-lg font-medium">Bashundhara R/A, Dhaka</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <span className="text-white/40 text-sm mb-4 block uppercase font-bold">Social</span>
                            <a
                                href="https://linkedin.com/in/kazi-ahmed-mustafa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white bg-[#0077b5] py-3 px-6 rounded-lg font-bold hover:bg-[#005a8c] transition-colors"
                            >
                                <Linkedin size={20} /> Connect on LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-bold text-white/70 mb-2">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-white/70 mb-2">Email</label>
                                <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-white/70 mb-2">Message</label>
                                <textarea rows="4" placeholder="Tell me about your revenue goals..." className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
                            </div>

                            <button type="submit" className="w-full btn btn-primary py-4 justify-center text-lg">
                                Send Request <Send size={18} />
                            </button>

                            <p className="text-center text-white/30 text-xs mt-4">
                                *This form is for demonstration. Please email directly.
                            </p>
                        </form>
                    </motion.div>

                </div>

                {/* Footer */}
                <div className="mt-24 pt-10 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kazi Ahmed Mustafa Kamal Uddin. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>Systems Architect</span>
                        <span>RevOps Leader</span>
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
