"use client";

import * as React from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,

} from "framer-motion";
import PropTypes from 'prop-types';

export function AnimatedTooltip({
    children,
    content,
    side = "top",
}) {
    const [isHovered, setIsHovered] = React.useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {children}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className={`absolute ${side === "top" ? "bottom-full mb-2" : "top-full mt-2"
                            } left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10`}
                    >
                        {content}
                        <div
                            className={`absolute ${side === "top" ? "bottom-0 -mb-1" : "top-0 -mt-1"
                                } left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

AnimatedTooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    side: PropTypes.oneOf(['top', 'bottom'])
};