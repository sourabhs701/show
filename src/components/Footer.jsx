import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Mail } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { motion } from "framer-motion";

export function Footer() {
    const { theme } = useTheme();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: SiGithub,
            url: 'https://github.com/yourusername'
        },
        {
            name: 'LinkedIn',
            icon: SiLinkedin,
            url: 'https://linkedin.com/in/yourusername'
        },
        {
            name: 'Twitter',
            icon: SiX,
            url: 'https://twitter.com/yourusername'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:your.email@example.com'
        }
    ];

    return (
        <div className="relative">
            <RetroGrid />
            <MagicCard
                className="mt-8 cursor-pointer flex-col rounded-full relative z-10"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <Card className="bg-transparent border-0 rounded-3xl overflow-hidden backdrop-blur-sm">
                    <CardContent className="p-8">
                        <motion.div
                            className="flex flex-col md:flex-row justify-between items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-gray-600 dark:text-gray-400">
                                <p>© {currentYear} Sourabh Soni. All rights reserved.</p>
                            </div>

                            <div className="flex gap-8">
                                {['About', 'Projects', 'Contact'].map((link, index) => (
                                    <motion.a
                                        key={link}
                                        href="#"
                                        className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                                        whileHover={{ scale: 1.1 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                                        whileHover={{ scale: 1.2 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </CardContent>
                </Card>
            </MagicCard>
        </div>
    );
}



//     <Card className="bg-white/50 dark:bg-gray-900/50 border-0 rounded-3xl overflow-hidden backdrop-blur-sm h-full">
//         <CardContent className="p-0">
//             <motion.a
//                 href="https://maps.google.com/?q=Jaipur,Rajasthan"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block relative h-full aspect-square"
//                 whileHover={{ scale: 1.02 }}
//             >
//                 <img
//                     src="/jaipur.jpeg"
//                     alt="Jaipur City"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                 <div className="absolute bottom-4 left-4 text-white">
//                     <p className="text-sm font-medium">Based in</p>
//                     <h3 className="text-lg font-semibold">Jaipur, Rajasthan</h3>
//                 </div>
//             </motion.a>
//         </CardContent>
//     </Card>