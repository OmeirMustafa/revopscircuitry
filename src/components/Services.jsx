import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, Shield, Rocket, X } from 'lucide-react';

const ServiceCard = ({ product, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 group overflow-hidden ${product.highlight ? 'bg-eng-slate/10 border-eng-blue/30 shadow-[0_0_40px_rgba(56,189,248,0.05)]' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
        >
            <div>
                <div className="mb-6 p-4 bg-slate-900 rounded-xl w-fit border border-slate-800 group-hover:border-eng-blue/30 transition-colors">
                    {product.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-eng-text mb-4">{product.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{product.desc}</p>

                <div className="space-y-3 mb-6">
                    {product.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-eng-blue"></div>
                            <span className="text-sm text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-slate-800 space-y-3 pb-6">
                                {product.details.map((detail, idx) => (
                                    <div key={idx} className="text-sm text-slate-400 pl-2 border-l-2 border-eng-blue/30">
                                        {detail.includes('**') ? (
                                            <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-eng-text">$1</strong>') }} />
                                        ) : (
                                            detail
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`inline-flex items-center gap-2 font-bold cursor-pointer transition-colors py-2 ${product.highlight ? 'text-eng-blue hover:text-eng-text' : 'text-slate-400 hover:text-eng-blue'}`}
            >
                {isExpanded ? (
                    <>Close Details <X className="w-4 h-4" /></>
                ) : (
                    <>View Details <ArrowRight className="w-4 h-4" /></>
                )}
            </button>
        </motion.div>
    );
};

const Services = () => {
    const products = [
        {
            title: "Circuit Design & Analysis",
            icon: <Database className="w-10 h-10 text-eng-blue" />,
            desc: "Schematic capture and rigorous circuit analysis for analog and digital systems. Ensuring functionality before the first prototype.",
            deliverables: ["Schematic Capture", "SPICE Simulation", "Component Selection"],
            details: [
                "Power Supply Design",
                "Signal Conditioning",
                "Design for Manufacturing (DFM)",
                "**Tooling:** Altium / KiCad"
            ],
            highlight: false
        },
        {
            title: "PCB Design & Layout",
            icon: <Shield className="w-10 h-10 text-eng-blue" />,
            desc: "High-quality PCB layout focusing on signal integrity, thermal management, and manufacturability.",
            deliverables: ["Multi-layer Layout", "Gerber Generation", "BOM Management"],
            details: [
                "High-Speed Routing",
                "Impedance Control",
                "3D Step File Export",
                "**Standards:** IPC Compliant"
            ],
            highlight: true
        },
        {
            title: "Prototyping & Testing",
            icon: <Rocket className="w-10 h-10 text-eng-blue" />,
            desc: "Moving from digital design to physical hardware. Assembly, board bring-up, and functional verification.",
            deliverables: ["Board Assembly", "Functional Testing", "Oscilloscope Analysis"],
            details: [
                "SMD Soldering",
                "Fault Isolation",
                "Performance Validation",
                "**Outcome:** Working Hardware"
            ],
            highlight: false
        },
        {
            title: "Embedded Systems",
            icon: <Database className="w-10 h-10 text-eng-blue" />,
            desc: "Firmware development for microcontrollers to bring hardware to life.",
            deliverables: ["Firmware Development", "Driver Implementation", "IoT Integration"],
            details: [
                "C/C++ Programming",
                "STM32 / ESP32 / Arduino",
                "Sensor Interfacing",
                "**Focus:** Reliability & Logic"
            ],
            highlight: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-eng-dark">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-eng-blue font-mono text-sm tracking-widest uppercase mb-4 block">Core Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-eng-text">Engineering Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                    {products.map((product, i) => (
                        <ServiceCard key={i} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
