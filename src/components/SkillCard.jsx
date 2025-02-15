import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import { SiReact, SiMongodb, SiNodedotjs, SiAmazons3, SiGithub, SiPython, SiJavascript, SiDocker } from 'react-icons/si';
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
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
        <div className="space-y-24 container mx-auto mt-20 justify-center min-w-screen items-center">

            <div className="space-y-4 container mx-auto">
                <div className="space-y-4 mb-16 container mx-auto">
                    <LineShadowText className="italic text-6xl font-bold text-gray-700 dark:text-gray-200" shadowColor={shadowColor}>
                        SkillCard
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-5xl">
                        <span className="text-2xl">योगः कर्मसु कौशलम्</span> |

                        Excellence in action is yoga.


                    </p>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-20">
                {/* Left Side: Skills Categories */}
                <div className="space-y-8">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-transparent rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 capitalize">
                                        {category.replace('_', ' ')}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: skillIndex * 0.05 }}
                                                className={cn(
                                                    "px-3 py-1 text-sm rounded-full",
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
                <div className="space-y-8">
                    <Card className="bg-transparent rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                                Core Technologies
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {technologies.map(({ icon: Icon, name, color, level }, index) => (
                                    <motion.div
                                        key={name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50"
                                    >
                                        <Icon className="w-8 h-8" style={{ color }} />
                                        <div>
                                            <p className="font-medium text-gray-800 dark:text-gray-200">{name}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}


