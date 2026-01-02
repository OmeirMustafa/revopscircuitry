import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    const projects = [
        {
            title: "Industrial Automation & IoT",
            category: "AplombTech (Engineering Lead)",
            context: "R&D initiative to modernize legacy industrial monitoring systems for remote accessibility.",
            problem: "Existing PLCs lacked connectivity, requiring manual site visits for diagnostics. Data was siloed and real-time alerts were impossible.",
            strategy: "Designed a custom IoT gateway using ESP32 microcontrollers to interface with RS485 Modbus. Developed a lightweight MQTT reporting protocol.",
            outcome: "Enabled real-time remote monitoring, reducing site visits by 60% and providing predictive maintenance data."
        },
        {
            title: "High-Reliability Power Supply",
            category: "Concept / Demonstration Project",
            context: "Design challenge to create a low-noise, high-efficiency power supply unit for sensitive analog instrumentation.",
            problem: "Standard switching regulators introduced excessive ripple, compromising sensor accuracy in the target application.",
            strategy: "Implemented a hybrid architecture: pre-regulation via high-efficiency buck converter followed by a low-dropout (LDO) linear stage for noise filtering.",
            outcome: "Achieved <5mV ripple at 3A load, ensuring signal integrity for precision measurements (Simulation Data)."
        },
        {
            title: "Remote Environmental Sensor Node",
            category: "Concept / Demonstration Project",
            context: "Prototyping a low-power wireless node for agricultural environmental monitoring.",
            problem: "Requirement for multi-year battery life in harsh outdoor environments while maintaining reliable data transmission.",
            strategy: "Utilized LoRaWAN for long-range, low-power comms. Implemented deep-sleep optimization and energy harvesting compatibility.",
            outcome: "Estimated battery life extended to 3+ years with 15-minute reporting intervals. PCB designed for IP67 enclosure fit."
        }
    ];

    return (
        <section id="projects" className="py-24 bg-eng-dark">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-eng-blue font-mono text-sm tracking-widest uppercase mb-4 block">Selected Engineering Work</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-eng-text mb-6">Technical Challenges</h2>
                </div>

                <div className="space-y-12">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-eng-slate/5 p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-eng-blue/30 transition-all"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
                                    <h3 className="text-2xl font-bold text-eng-text mb-2">{item.title}</h3>
                                    <span className="text-eng-blue font-mono text-xs uppercase tracking-wider">{item.category}</span>
                                </div>
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Context</h4>
                                        <p className="text-slate-300 leading-relaxed">{item.context}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Core Problem</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Engineering Approach</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.strategy}</p>
                                        </div>
                                    </div>
                                    <div className="bg-eng-blue/5 p-4 rounded-lg border border-eng-blue/10">
                                        <h4 className="text-eng-blue text-xs font-bold uppercase tracking-wider mb-1">Result & Capability</h4>
                                        <p className="text-eng-text font-medium">{item.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
