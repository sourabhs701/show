import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { AiFillStar } from 'react-icons/ai';
import { MdEmojiEvents } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { useRef } from 'react';
import { RetroGrid } from "@/components/magicui/retro-grid";

import { BorderBeam } from "@/components/magicui/border-beam";

const DiscussProject = () => {
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
            className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center"
        >
            {/* Main UI Content */}
            <motion.div
                className="container mx-auto relative z-10 flex flex-col items-center justify-center mt-24"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div
                    className="max-w-4xl text-center backdrop-blur-sm p-8 rounded-2xl 
                             bg-white/5 dark:bg-gray-900/5 border border-gray-200/10 
                             dark:border-gray-700/10 shadow-2xl"
                    variants={childVariants}
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 
                                 dark:to-gray-400 mb-8">
                        Have an <span className="text-orange-500">Awesome Project</span>
                        <br />
                        Idea? <span className="bg-gradient-to-r from-orange-400 to-orange-600 
                                             bg-clip-text text-transparent">Let&apos;s Discuss</span>
                    </h1>

                    <motion.div className="mt-12 w-full max-w-md mx-auto" variants={childVariants}>
                        <div className="relative flex items-center group">
                            <div className="absolute left-3 text-gray-400 group-hover:text-orange-400 
                                          transition-colors">
                                <Mail size={24} />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="w-full px-12 py-4 rounded-full bg-white/90 
                                         dark:bg-gray-800/90 border border-gray-200 
                                         dark:border-gray-700 focus:outline-none 
                                         focus:border-orange-400 focus:ring-2 
                                         focus:ring-orange-400/20 shadow-lg backdrop-blur-sm
                                         transition-all duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-2 px-8 py-3 bg-gradient-to-r 
                                         from-orange-400 to-orange-500 text-white rounded-full 
                                         font-medium hover:from-orange-500 hover:to-orange-600 
                                         transition-all duration-300 shadow-lg"
                            >
                                Send
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div className="mt-16 flex flex-wrap justify-center gap-6"
                        variants={childVariants}>
                        <motion.div
                            className="flex items-center gap-2 px-6 py-3 rounded-full 
                                     bg-white/90 dark:bg-gray-800/90 text-gray-700 
                                     dark:text-gray-300 backdrop-blur-sm shadow-lg
                                     border border-gray-200/50 dark:border-gray-700/50
                                     hover:border-orange-400/50 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <AiFillStar className="text-orange-400" size={20} />
                            <span>4.9/5 Average Ratings</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <MdEmojiEvents className="text-orange-400" size={20} />
                            <span>25+ Winning Awards</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaUserGraduate className="text-orange-400" size={20} />
                            <span>Certified Product Designer</span>
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

            {/* Enhanced RetroGrid Background */}
            <div className="absolute inset-0 -z-10 opacity-50">
                <RetroGrid />
            </div>
        </section>
    );
};

export default DiscussProject;
