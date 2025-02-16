import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import { SiReact, SiMongodb, SiNodedotjs, SiAmazons3, SiGithub, SiPython, SiJavascript, SiDocker } from 'react-icons/si';
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { ScrollCard } from "@/components/shared/ScrollCard";

const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB", level: "Advanced" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", level: "Intermediate" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", level: "Advanced" },
    { icon: SiAmazons3, name: "AWS S3", color: "#FF9900", level: "Intermediate" },
    { icon: SiGithub, name: "GitHub", color: "#181717", level: "Advanced" },
    { icon: SiPython, name: "Python", color: "#3776AB", level: "Advanced" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", level: "Expert" },
    { icon: SiDocker, name: "Docker", color: "#2496ED", level: "Intermediate" }
];

export function SkillsCard() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <section className="py-12 sm:py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
                {/* Header Section */}
                <div className="space-y-4 sm:space-y-6">
                    <LineShadowText
                        className="italic text-3xl sm:text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        SkillCard
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-3xl">
                        <span className="text-xl sm:text-2xl">योगः कर्मसु कौशलम्</span> |
                        Excellence in action is yoga.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-8 sm:gap-20">
                    {/* Left Side: Skills Categories */}
                    <div className="space-y-4 sm:space-y-6">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-transparent rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                                    <CardContent className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 capitalize">
                                            {category.replace('_', ' ')}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.05 }}
                                                    className={cn(
                                                        "px-2 sm:px-3 py-1 text-sm rounded-full",
                                                        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                                                        "hover:bg-emerald-500/20 transition-colors"
                                                    )}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Tech Stack */}
                    <div className="space-y-4 sm:space-y-6">
                        <Card className="bg-transparent rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                            <CardContent className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
                                    Core Technologies
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {technologies.map((tech, index) => (
                                        <ScrollCard key={tech.name} delay={index}>
                                            <motion.div className="tech-card">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-gray-800/50"
                                                >
                                                    <tech.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: tech.color }} />
                                                    <div>
                                                        <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">{tech.name}</p>
                                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{tech.level}</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </ScrollCard>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}


