import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { items } from "../data/experience";

import { ShineBorder } from "@/components/magicui/shine-border";


export function Path() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    return (
        <section className="mt-16 container mx-auto px-4">
            <div className="space-y-4 mb-12">
                <LineShadowText
                    className="italic text-5xl font-bold text-gray-700 dark:text-gray-200"
                    shadowColor={shadowColor}
                >
                    WorkExperience
                </LineShadowText>
                <p className="text-gray-500 dark:text-gray-400 text-base">
                    Discover my journey through technology and innovation
                </p>
            </div>

            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-orange-500/20 transform -translate-x-1/2" />

                <div className="space-y-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative grid grid-cols-1 md:grid-cols-2 gap-6",
                                index % 2 === 0 ? "md:text-right" : "md:text-left md:grid-flow-dense"
                            )}
                        >
                            {/* Timeline Point */}
                            <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                            </div>

                            {/* Date Column */}
                            <motion.div
                                className={cn(
                                    "flex flex-col justify-center",
                                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"
                                )}
                            >
                                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                    {item.title}
                                </span>
                                <span className="text-orange-500 font-medium mt-1 text-sm">
                                    {item.cardSubtitle}
                                </span>
                            </motion.div>

                            {/* Content Column */}

                            <motion.div
                                className={cn(
                                    "md:flex md:items-center",
                                    index % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:pr-12"
                                )}
                            >
                                <ShineBorder
                                    className="relative  rounded-lg"
                                    color={theme.theme === "dark" ? "white" : "black"}
                                >


                                    <Card className={cn(
                                        "group relative overflow-hidden rounded-lg border-0",
                                        "transition-all duration-300",
                                        "shadow-md hover:shadow-lg",
                                        "bg-transparent"
                                    )}>
                                        <div className="p-4 space-y-3">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {item.cardTitle}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {item.cardDetailedText}
                                            </p>
                                            {item.media && (
                                                <div className="mt-3 aspect-video relative overflow-hidden rounded-md">
                                                    <img
                                                        src={item.media.source.url}
                                                        alt={item.cardTitle}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    </Card>
                                </ShineBorder>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}