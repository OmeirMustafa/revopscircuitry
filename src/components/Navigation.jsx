// --- Navbar.jsx ---
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Capabilities', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'About', to: 'about' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-eng-dark/90 backdrop-blur-lg border-b border-slate-800' : 'py-6 bg-transparent'}`}
        >
            <div className="container px-4 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={800} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-3 h-3 bg-eng-blue rounded-sm shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.8)] transition-shadow"></div>
                    <span className="text-xl font-bold font-mono text-eng-text tracking-tighter">
                        Kazi<span className="text-eng-blue">.Engineer</span>
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.to} smooth={true} duration={800} className="text-sm font-medium text-slate-400 hover:text-eng-blue transition-colors cursor-pointer uppercase tracking-wider">
                            {link.name}
                        </Link>
                    ))}
                    <Link to="contact" smooth={true} duration={800} className="border border-eng-blue text-eng-blue rounded px-5 py-2 hover:bg-eng-blue hover:text-slate-900 transition-all cursor-pointer font-bold uppercase text-xs tracking-wider">
                        Inquire
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(true)} className={`md:hidden text-eng-text ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <Menu />
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-eng-dark z-50 flex flex-col items-center justify-start pt-32 gap-8 md:hidden overflow-y-auto"
                        >
                            {/* Close Button - Fixed/Sticky */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-4 text-eng-text p-2 hover:text-eng-blue transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {navLinks.map((link) => (
                                <Link key={link.to} to={link.to} smooth={true} duration={800} onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold text-eng-text hover:text-eng-blue cursor-pointer">
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="contact" smooth={true} duration={800} onClick={() => setIsOpen(false)} className="bg-eng-blue text-slate-900 font-bold mt-8 text-xl px-8 py-4 rounded">
                                Inquire
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};


// --- Footer.jsx ---
export const Footer = () => {
    return (
        <footer className="py-12 bg-eng-dark border-t border-slate-800">
            <div className="container px-4 text-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Kazi Ahmed Mustafa. Electronics & Circuitry Engineering.
                </p>
            </div>
        </footer>
    );
}
