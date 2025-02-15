"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export function TextGenerateEffect({ words, className }) {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setComplete(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const renderWords = () => {
        if (complete) {
            return <span>{words}</span>;
        }

        return words.split(" ").map((word, idx) => {
            return (
                <motion.span
                    key={word + idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: idx * 0.1,
                    }}
                    className="inline-block"
                >
                    {word}{" "}
                </motion.span>
            );
        });
    };

    return <div className={className}>{renderWords()}</div>;
}

TextGenerateEffect.propTypes = {
    words: PropTypes.string.isRequired,
    className: PropTypes.string
}; 