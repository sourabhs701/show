import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Bitcoin } from "lucide-react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Github } from "lucide-react";
import { SiMedium, SiYoutube } from "react-icons/si";
import { Marquee } from "@/components/magicui/marquee";
import TradingChart from "@/components/SkillChart";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const files = [
    {
        name: "Setting Up Tailscale",
        body: "Tailscale is a mesh VPN that allows you to create a private, secure network across your devices. Unlike traditional VPNs, Tailscale doesn't require extensive configuration or a central VPN server. It handles complex networking issues such as NAT traversal, making it ideal for developers and IT administrators.",
    },
    {
        name: "Mistral-7B and Meta-Llama on FastAPI",
        body: "In this blog, we will explore how to set up a powerful and scalable text-generation API using state-of-the-art models like Mistral-7B and Meta-Llama-3–8B-Instruct. These models will be integrated into a Python application with FastAPI, offering fast and efficient endpoints to handle natural language generation tasks. Let's dive into the setup, step by step, and build a robust solution for your NLP needs.",
    },
];


export function AboutMe() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <section className="container mx-auto px-4 py-8 sm:py-24">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-24">
                {/* Header Section */}
                <div className="space-y-4 sm:space-y-8 mb-8 sm:mb-12">
                    <LineShadowText
                        className="italic text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        AboutMe
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-3xl">
                        <span className="text-xl sm:text-2xl">कर्मण्येवाधिकारस्ते मा फलेषु कदाच</span> |
                        Your right is to perform your duty, never to the fruits of your actions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-8 sm:gap-20">
                    {/* Left Side: Profile & Activities */}
                    <div className="space-y-8 sm:space-y-12">
                        {/* Profile Card */}
                        <Card className="bg-transparent rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 mb-8">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto sm:mx-0"
                                    >
                                        <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <div className="space-y-3 text-center sm:text-left">
                                        <motion.h3
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
                                        >
                                            Sourabh Soni
                                        </motion.h3>
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                            <span className="px-3 py-1 text-sm sm:text-base bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                                                Developer
                                            </span>
                                            <span className="px-3 py-1 text-sm sm:text-base bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full">
                                                Gamer
                                            </span>
                                            <span className="px-3 py-1 text-sm sm:text-base bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                                                Trader
                                            </span>
                                            <span className="px-3 py-1 text-sm sm:text-base bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full">
                                                Blogger
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
                                            <motion.a
                                                href="https://maps.google.com/?q=Jaipur,Rajasthan"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500"
                                            >
                                                <MapPin className="w-4 h-4" />
                                                <span>Rajasthan, India</span>
                                            </motion.a>
                                            <motion.a
                                                href="https://github.com/sourabhs701"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>15 projects</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Activities Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {/* Medium Blog Card */}
                            <motion.a
                                href="https://medium.com/@sourabh.sol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group rounded-3xl shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 h-[250px] sm:h-[400px] mb-6 sm:mb-0"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full flex flex-col">
                                    <div className="p-4">
                                        <div className="flex items-center gap-4">
                                            <SiMedium className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <h3 className="font-semibold text-lg sm:text-xl">Technical Blog</h3>
                                        </div>
                                    </div>

                                    <Marquee
                                        pauseOnHover
                                        className="absolute top-14 [--duration:20s] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_40%)]"
                                    >
                                        {files.map((f, idx) => (
                                            <figure
                                                key={idx}
                                                className="relative w-[280px] sm:w-[320px] cursor-pointer overflow-hidden rounded-xl border p-4 mx-2"
                                            >
                                                <div className="flex flex-col">
                                                    <figcaption className="text-sm font-medium dark:text-white">
                                                        {f.name}
                                                    </figcaption>
                                                    <blockquote className="mt-2 text-xs sm:text-sm line-clamp-4">
                                                        {f.body}
                                                    </blockquote>
                                                </div>
                                            </figure>
                                        ))}
                                    </Marquee>
                                </div>
                            </motion.a>

                            {/* Trading Card */}
                            <motion.div
                                className="relative rounded-3xl shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-white/80 dark:bg-gray-900/80 border-0 h-[250px] sm:h-[400px] backdrop-blur-sm mb-6 sm:mb-0"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full p-4 flex flex-col">
                                    <div className="flex items-center gap-4 text-gray-800 dark:text-white mb-4">
                                        <Bitcoin className="w-5 h-5 sm:w-6 sm:h-6" />
                                        <h3 className="font-semibold text-lg sm:text-xl">Trading Strategies</h3>
                                    </div>
                                    <div className="flex-1">
                                        <TradingChart />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Gaming Card */}
                            <motion.a
                                href="https://www.youtube.com/@carryonsrb3263"
                                className="relative col-span-1 sm:col-span-2 rounded-3xl shadow-lg h-[180px] sm:h-[200px] shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-transparent border-0 mt-2 sm:mt-4"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src="/gaming.gif"
                                    alt="Gaming animation"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="relative h-full p-4 sm:p-6">
                                    <div className="flex items-center gap-4 text-white">
                                        <SiYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
                                        <h3 className="font-semibold text-lg sm:text-xl">Gaming Channel</h3>
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: Location */}
                    <motion.div
                        className="h-[250px] sm:h-full mt-4 sm:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Card className="bg-white/80 dark:bg-gray-900/80 border-0 shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 rounded-3xl overflow-hidden backdrop-blur-sm h-full">
                            <CardContent className="p-0 h-full">
                                <motion.a
                                    href="https://maps.google.com/?q=Jaipur,Rajasthan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative h-full"
                                    whileHover={{ scale: 1.04 }}
                                >
                                    <img
                                        src="/jaipur.jpeg"
                                        alt="Jaipur City"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 text-gray-800 dark:text-white">
                                        <p className="text-lg sm:text-xl font-medium">Based in</p>
                                        <h3 className="text-xl sm:text-2xl font-semibold">Jaipur, Rajasthan</h3>
                                    </div>
                                </motion.a>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



{/* <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover' }}
    onLoadedMetadata={(e) => {
        e.target.currentTime = 3.5;
    }}
>
    <source src="/gaming.gif" type="video/mp4" />
</video> */}