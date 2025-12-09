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
        { name: 'Philosophy', to: 'hero' },
        { name: 'Methodology', to: 'process' },
        { name: 'Services', to: 'services' },
        { name: 'About', to: 'about' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'}`}
        >
            <div className="container px-4 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={800} className="text-xl font-bold font-display text-white cursor-pointer tracking-tighter">
                    KAZI<span className="text-neon-blue">.</span>REVOPS
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.to} smooth={true} duration={800} className="text-sm font-medium text-white/70 hover:text-neon-blue transition-colors cursor-pointer uppercase tracking-wider">
                            {link.name}
                        </Link>
                    ))}
                    <Link to="contact" smooth={true} duration={800} className="btn-outline-neon text-sm px-5 py-2">
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link key={link.to} to={link.to} smooth={true} duration={800} onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold text-white hover:text-neon-blue">
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="contact" smooth={true} duration={800} onClick={() => setIsOpen(false)} className="btn-primary-neon mt-4">
                                Let's Talk
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
        <footer className="py-12 bg-[#050505] border-t border-white/5">
            <div className="container px-4 text-center">
                <p className="text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} Kazi Ahmed Mustafa. Revenue Systems Architect.
                </p>
            </div>
        </footer>
    );
}
