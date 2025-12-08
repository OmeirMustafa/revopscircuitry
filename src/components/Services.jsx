import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, Network } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Network className="w-12 h-12" />,
            title: "Revenue Infrastructure Builds",
            desc: "Full-stack setup of your revenue engine. I configure HubSpot/CRM, integrate Apollo/Clodura for data, and link it all to your outreach channels.",
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "Fractional RevOps Leadership",
            desc: "Acting as your part-time Head of Operations. I audit your systems, manage your SDR team's data flow, and ensure your revenue pipeline is leak-proof.",
        },
        {
            icon: <Settings className="w-12 h-12" />,
            title: "Tech Lead Gen Systems",
            desc: "Engineering lead sources. I don't just buy lists; I build scrapers, enrichment workflows, and validation waterfalls to deliver 99% accuracy.",
        },
        {
            icon: <BarChart3 className="w-12 h-12" />,
            title: "Workflow Optimization",
            desc: "Removing friction. I map your entire customer journey and automate manual touchpoints using ClickUp, Asana, and Zapier/Make.",
        },
    ];

    return (
        <section id="services" className="section bg-[#0f0f0f]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for Growth</h2>
                    <p className="text-white/60 text-lg">
                        I don't offer generic "consulting." I deploy specific, high-leverage systems that become permanent assets for your business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all group backdrop-blur-sm"
                        >
                            <div className="mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <div className="flex items-center justify-center">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
