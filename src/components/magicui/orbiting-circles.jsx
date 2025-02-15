"use client";

import React from "react";
import { motion } from "framer-motion";

export function OrbitingCircles({ children, radius = 150, speed = 10, reverse = false }) {
    const numberOfElements = React.Children.count(children);
    const angleStep = (2 * Math.PI) / numberOfElements;

    return (
        <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
            {React.Children.map(children, (child, index) => {
                const angle = angleStep * index;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                    <motion.div
                        key={index}
                        initial={{ x, y }}
                        animate={{
                            x: x,
                            y: y,
                            rotate: reverse ? -360 : 360,
                        }}
                        transition={{
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            marginLeft: -20,
                            marginTop: -20,
                        }}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </div>
    );
} 