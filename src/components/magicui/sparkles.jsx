"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function SparklesCore({
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    className,
    particleColor = "#FFF"
}) {
    const [particles, setParticles] = useState([]);
    const containerRef = useRef(null);
    const frameRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();

        const particleCount = (width * height) / 10000 * particleDensity;
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * (maxSize - minSize) + minSize,
                duration: Math.random() * 2 + 1
            });
        }

        setParticles(newParticles);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [maxSize, minSize, particleDensity]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                background,
                position: "relative",
                overflow: "hidden"
            }}
        >
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: [1, 0, 1],
                        opacity: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        borderRadius: "50%",
                        backgroundColor: particleColor,
                    }}
                />
            ))}
        </div>
    );
} 