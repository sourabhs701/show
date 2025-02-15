import { motion, useInView } from 'framer-motion';
import { Terminal, Gamepad2, Sparkles } from 'lucide-react';
import { SiOpenai } from "react-icons/si";
import { useRef } from 'react';
import { RetroGrid } from "@/components/magicui/retro-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
const DiscussProject = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section ref={sectionRef} className="relative mt-0 overflow-hidden w-screen h-screen">
            <motion.div
                className="space-y-24 container mx-auto relative z-10 flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div
                    className="max-w-3xl text-center relative p-12 rounded-3xl 
                              bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg 
                              border border-gray-200 dark:border-gray-800
                              shadow-xl"
                    variants={childVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Let&apos;s Build Something
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                            Extraordinary
                        </span>
                    </motion.h2>

                    <motion.div
                        className="mt-12 w-full max-w-md mx-auto relative"
                        variants={childVariants}
                    >
                        <div className="relative flex items-center group">
                            <div className="absolute left-3 text-gray-400 dark:text-gray-500">
                                <Terminal size={20} />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-12 py-4 rounded-lg 
                                         bg-white dark:bg-gray-900
                                         border border-gray-200 dark:border-gray-800 
                                         focus:outline-none focus:ring-2 
                                         focus:ring-indigo-500 dark:focus:ring-purple-500
                                         text-gray-900 dark:text-gray-100
                                         placeholder-gray-400 dark:placeholder-gray-500
                                         transition-all duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="absolute right-2 px-6 py-2 
                                         bg-gradient-to-r from-indigo-500 to-purple-500 
                                         text-white rounded-lg font-medium
                                         transition-all duration-300
                                         hover:opacity-90"
                            >
                                Connect
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-16 flex flex-wrap justify-center gap-4"
                        variants={childVariants}
                    >
                        {[
                            { icon: SiOpenai, text: "AI Integration", desc: "Machine Learning" },
                            { icon: Gamepad2, text: "Game Development", desc: "Interactive Systems" },
                            { icon: Sparkles, text: "Creative Design", desc: "Modern Aesthetics" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 px-5 py-3 rounded-lg
                                         bg-white dark:bg-gray-900
                                         border border-gray-200 dark:border-gray-800
                                         hover:border-indigo-500 dark:hover:border-purple-500 
                                         transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <item.icon
                                    className="text-indigo-500 dark:text-purple-500"
                                    size={18}
                                />
                                <div className="text-left">
                                    <div className="font-medium text-gray-900 dark:text-gray-100">
                                        {item.text}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.desc}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <BorderBeam duration={8} size={100} />
                </motion.div>

            </motion.div>

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10">
                <RetroGrid />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 dark:via-purple-900/5 to-indigo-100/5 dark:to-purple-800/5" />
            </div>
        </section>
    );
};

export default DiscussProject;
