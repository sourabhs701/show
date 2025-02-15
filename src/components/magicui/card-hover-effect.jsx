"use client";

import React from "react";
import { motion } from "framer-motion";

export const HoverEffect = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-orange-500/10 hover:border-orange-500/20 transition-colors"
        >
            {children}
        </motion.div>
    );
}; 