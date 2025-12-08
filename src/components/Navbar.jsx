import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Case Studies', to: 'work' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold cursor-pointer font-outfit tracking-tighter"
                >
                    KAZI<span className="text-emerald-400">.</span>REVOPS
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm font-medium uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="btn btn-primary"
                    >
                        Let's Talk <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-emerald-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="container py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-white/80 hover:text-white block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary justify-center w-full"
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
