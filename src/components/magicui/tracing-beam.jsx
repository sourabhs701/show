"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TracingBeam = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute left-0 top-3 w-px h-full">
                <motion.div
                    className="h-full w-full bg-gradient-to-b from-orange-500 to-orange-200 dark:from-orange-400 dark:to-orange-600"
                    style={{
                        scaleY: isVisible ? 1 : 0,
                        transformOrigin: "top",
                    }}
                    transition={{ duration: 1.5 }}
                />
            </div>
            <div className="ml-6">{children}</div>
        </motion.div>
    );
}; 