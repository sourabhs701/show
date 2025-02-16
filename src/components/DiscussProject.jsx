import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { AiFillStar } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { useRef } from 'react';
import { RetroGrid } from "@/components/magicui/retro-grid";

import { BorderBeam } from "@/components/magicui/border-beam";

const DiscussProject = ({ id }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            ref={sectionRef}
            id={id}
            className=" mx-auto px-4 min-h-screen flex items-center justify-center relative"
        >
            {/* Enhanced RetroGrid Background - Moved to top and adjusted opacity */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900" />
                <RetroGrid className="opacity-70 dark:opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
                {/* Main UI Content */}
                <motion.div
                    className="flex flex-col items-center justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="max-w-4xl text-center backdrop-blur-sm p-6 sm:p-8 rounded-3xl 
                                  border border-gray-200/10 
                                 dark:border-gray-700/10 shadow-lg shadow-gray-500/20 
                                 dark:shadow-gray-400/20"
                        variants={childVariants}
                    >
                        <h1 className="text-3xl sm:text-6xl font-bold bg-clip-text text-transparent 
                                     bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 
                                     dark:to-gray-400 mb-4 sm:mb-8">
                            Have an <span className="text-orange-500">Awesome Project</span>
                            <br />
                            Idea? <span className="bg-gradient-to-r from-orange-400 to-orange-600 
                                                 bg-clip-text text-transparent">Let&apos;s Discuss</span>
                        </h1>

                        <motion.div className="mt-8 sm:mt-12 w-full max-w-md mx-auto" variants={childVariants}>
                            <div className="relative flex items-center group">
                                <div className="absolute left-3 text-gray-400 group-hover:text-orange-400 
                                              transition-colors">
                                    <Mail size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full px-10 sm:px-12 py-3 sm:py-4 rounded-full 
                                             bg-white/90 dark:bg-gray-800/90 border border-gray-200 
                                             dark:border-gray-700 focus:outline-none focus:border-orange-400 
                                             focus:ring-2 focus:ring-orange-400/20 shadow-lg backdrop-blur-sm
                                             transition-all duration-300 text-sm sm:text-base"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 px-4 sm:px-8 py-2 sm:py-3 
                                             bg-gradient-to-r from-orange-400 to-orange-500 
                                             text-white rounded-full font-medium text-sm sm:text-base
                                             hover:from-orange-500 hover:to-orange-600 
                                             transition-all duration-300 shadow-lg"
                                >
                                    Send
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-6"
                            variants={childVariants}
                        >
                            <motion.div
                                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
                                         rounded-full bg-white/90 dark:bg-gray-800/90 
                                         text-gray-700 dark:text-gray-300 backdrop-blur-sm 
                                         shadow-lg border border-gray-200/50 
                                         dark:border-gray-700/50 hover:border-orange-400/50 
                                         transition-all duration-300 text-sm sm:text-base"
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <AiFillStar className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                                <span>2+ Years Experience</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 
                                         rounded-full bg-white/90 dark:bg-gray-800/90 
                                         text-gray-700 dark:text-gray-300 backdrop-blur-sm 
                                         shadow-lg text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaUserGraduate className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Certified Software Developer</span>
                            </motion.div>
                        </motion.div>

                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-blue-600 dark:via-blue-500 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={5}
                            size={400}
                            className="from-transparent via-orange-600 dark:via-orange-500 to-transparent"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DiscussProject;
