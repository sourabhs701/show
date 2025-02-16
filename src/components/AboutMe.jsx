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
        <section className=" container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="space-y-8">
                    <LineShadowText
                        className="italic text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        AboutMe
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl">
                        <span className="text-2xl">कर्मण्येवाधिकारस्ते मा फलेषु कदाच</span> |
                        Your right is to perform your duty, never to the fruits of your actions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-20">
                    {/* Left Side: Profile & Activities */}
                    <div className="h-full ">
                        {/* Profile Card */}
                        <Card className=" bg-transparent rounded-3xl overflow-hidden  shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative w-24 h-24 rounded-full overflow-hidden"
                                    >
                                        <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <div className="space-y-2">
                                        <motion.h3
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                                        >
                                            Sourabh Soni
                                        </motion.h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-base bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                                                Developer
                                            </span>
                                            <span className="px-3 py-1 text-base bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full">
                                                Gamer
                                            </span>
                                            <span className="px-3 py-1 text-base bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                                                Trader
                                            </span>
                                            <span className="px-3 py-1 text-base bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full">
                                                Blogger
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-6">
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
                        <div className="grid grid-cols-2 gap-8 h-[600px] mt-10">
                            {/* Medium Blog Card */}
                            <motion.a
                                href="https://medium.com/@sourabh.sol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group rounded-3xl shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 h-full"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full flex flex-col">
                                    <div className="p-4">
                                        <div className="flex items-center gap-4">
                                            <SiMedium className="w-6 h-6" />
                                            <h3 className="font-semibold text-xl">Technical Blog</h3>
                                        </div>
                                    </div>

                                    <Marquee
                                        pauseOnHover
                                        className="absolute top-14  [--duration:20s] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_40%)]"
                                    >
                                        {files.map((f, idx) => (
                                            <figure
                                                key={idx}
                                                className={cn(
                                                    "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
                                                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                                                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                                    "transform-gpu blur-[0.5px] transition-all duration-300 ease-out hover:blur-none",
                                                )}
                                            >
                                                <div className="flex flex-row items-center gap-2">
                                                    <div className="flex flex-col">
                                                        <figcaption className="text-sm font-medium dark:text-white">
                                                            {f.name}
                                                        </figcaption>
                                                    </div>
                                                </div>
                                                <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                                            </figure>
                                        ))}
                                    </Marquee>
                                </div>
                            </motion.a>

                            {/* Trading Card */}
                            <motion.div
                                className="relative rounded-3xl shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-white/80 dark:bg-gray-900/80 border-0 h-full backdrop-blur-sm"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full p-4 flex flex-col">
                                    <div className="flex items-center gap-4 text-gray-800 dark:text-white mb-4">
                                        <Bitcoin className="w-6 h-6" />
                                        <h3 className="font-semibold text-xl">Trading Strategies</h3>
                                    </div>
                                    <div className="flex-1">
                                        <TradingChart />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Gaming Card - Spans full width */}
                            <motion.a
                                href="https://www.youtube.com/@carryonsrb3263"
                                className="relative col-span-2 rounded-3xl shadow-lg h-[250px] shadow-gray-500/20 dark:shadow-gray-400/20 overflow-hidden bg-transparent border-0"
                                whileHover={{ scale: 1.02 }}
                            >
                                <video
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
                                    <source src="/valorant.mp4" type="video/mp4" />
                                </video>
                                <div className="relative h-full p-6 transition-colors">
                                    <div className="flex items-center gap-4 text-white">
                                        <SiYoutube className="w-6 h-6" />
                                        <h3 className="font-semibold">Gaming Channel</h3>
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: Location */}
                    <motion.div
                        className="h-full mt-0 mb-0"
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
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <img
                                        src="/jaipur.jpeg"
                                        alt="Jaipur City"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0" />
                                </motion.a>
                                <div className="absolute bottom-4 left-4 text-gray-800 dark:text-white">
                                    <p className="text-xl font-medium">Based in</p>
                                    <h3 className="text-2xl font-semibold">Jaipur, Rajasthan</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 