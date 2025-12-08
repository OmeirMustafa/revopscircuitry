import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const About = () => {
    const experiences = [
        { year: '2023 - Present', role: 'Project Manager', company: 'iBusinessFormula', desc: 'Leading revenue workflows & CRM infrastructure.' },
        { year: '2023 - 2024', role: 'Business Dev. Manager', company: 'Inovetix', desc: 'Orchestrated B2B sales cycles & lead gen systems.' },
        { year: '2019 - 2019', role: 'BD Manager', company: 'AplombTech BD', desc: 'Expanded market reach for technical products.' },
    ];

    const values = [
        'Systematic Revenue Architecture',
        'Data-Driven Growth',
        'Automated Workflow Engineering',
        'Technical & Commercial Synergy'
    ];

    return (
        <section id="about" className="section bg-black">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            The Bridge Between <span className="text-emerald-400">Engineering</span> & <span className="text-blue-500">Business</span>.
                        </h2>
                        <p className="text-white/60 text-lg mb-6 leading-relaxed">
                            I am not your typical marketer. With a background in <strong className="text-white">Electrical & Electronic Engineering (EEE)</strong>, I approach revenue generation like a complex circuit—identifying resistance, optimizing flow, and ensuring maximum efficiency.
                        </p>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Over the last 8+ years, I’ve evolved from a hands-on Data Analyst to a **Revenue Systems Architect**. I don't just "do sales"—I build the systems that make sales inevitable. My expertise lies in fusing technical rigor with commercial strategy using tools like HubSpot, Apollo.ai, and advanced automation.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {values.map((val, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="text-emerald-400" size={20} />
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>

                        <div className="flex flex-col gap-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-20 group cursor-default">
                                    {/* Dot */}
                                    <div className="absolute left-[29px] top-2 w-3 h-3 rounded-full bg-emerald-500/50 border border-emerald-500 group-hover:scale-125 transition-transform"></div>

                                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                    <p className="text-emerald-400 font-medium mb-2">{exp.company}</p>
                                    <p className="text-white/50 text-sm mb-2 font-mono">{exp.year}</p>
                                    <p className="text-white/60 text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                            <div className="pl-20 mt-4">
                                <a href="https://linkedin.com/in/kazi-ahmed-mustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all">
                                    View Full Career on LinkedIn <ChevronRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
