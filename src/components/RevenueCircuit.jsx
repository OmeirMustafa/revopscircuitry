import React from 'react';
import { motion } from 'framer-motion';

const RevenueCircuit = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative font-mono text-xs md:text-sm text-white/80 select-none pointer-events-none">

            {/* Connection Lines (Background) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Vertical Line */}
                <div className="w-[1px] h-[80%] bg-gradient-to-b from-transparent via-white/10 to-transparent absolute"></div>
                {/* Glowing Pulse moving down */}
                <motion.div
                    initial={{ top: "0%", opacity: 0 }}
                    animate={{ top: "100%", opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-[2px] h-20 bg-gradient-to-b from-transparent via-neon-blue to-transparent absolute blur-sm"
                ></motion.div>
            </div>

            {/* Step 1: Traffic */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="z-10 bg-[#0A0A0A] border border-white/20 px-4 py-2 rounded mb-8 relative"
            >
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
                TRAFFIC_SOURCE
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
            </motion.div>

            {/* Filter Logic Node */}
            <div className="relative mb-8 z-10">
                <motion.div
                    animate={{ boxShadow: ["0 0 0px rgba(4,217,255,0)", "0 0 20px rgba(4,217,255,0.5)", "0 0 0px rgba(4,217,255,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-black border border-neon-blue/50 rotate-45 flex items-center justify-center"
                >
                    <div className="-rotate-45 text-neon-blue text-[10px]">FILTER</div>
                </motion.div>
            </div>

            {/* Step 2: CRM */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="z-10 bg-[#0A0A0A] border border-white/20 px-4 py-2 rounded mb-8 w-48 text-center relative"
            >
                <div className="text-[10px] text-white/40 mb-1">DATA_ENRICHMENT</div>
                <div className="font-bold text-white">CRM_PIPELINE</div>
            </motion.div>

            {/* Deal Stage */}
            <div className="relative mb-8 z-10">
                <div className="flex gap-1 justify-center">
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1 h-3 bg-neon-blue rounded-full"
                        />
                    ))}
                </div>
            </div>

            {/* Step 3: Revenue */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="z-10 bg-gradient-to-r from-neon-blue/20 to-transparent border border-neon-blue text-neon-blue font-bold px-6 py-3 rounded shadow-[0_0_30px_rgba(4,217,255,0.2)]"
            >
                REVENUE_GENERATED
            </motion.div>

        </div>
    );
};

export default RevenueCircuit;
