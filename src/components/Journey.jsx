import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { items } from "../data/experience";

export function Path() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    return (
        <section className="mt-20 container mx-auto">
            <div className="space-y-4 mb-16 container mx-auto">
                <div className="space-y-4 mb-16 container mx-auto">
                    <LineShadowText
                        className="italic text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        WorkExperience
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-5xl">
                        Discover my journey through technology and innovation
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-orange-500/20 transform -translate-x-1/2" />

                <div className="space-y-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative grid grid-cols-1 md:grid-cols-2 gap-8",
                                index % 2 === 0 ? "md:text-center" : "md:text-center md:grid-flow-dense"
                            )}
                        >
                            {/* Timeline Point */}
                            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                            </div>

                            {/* Date Column */}
                            <motion.div
                                className={cn(
                                    "flex flex-col justify-center",
                                    index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"
                                )}
                            >
                                <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                                    {item.title}
                                </span>
                                <span className="text-orange-500 font-medium mt-2">
                                    {item.cardSubtitle}
                                </span>
                            </motion.div>

                            {/* Content Column */}
                            <motion.div
                                className={cn(
                                    "md:flex md:items-center flex flex-col justify-center",
                                    index % 2 === 0 ? "md:col-start-2 md:pl-16" : "md:pr-16"
                                )}
                            >
                                <Card className={cn(
                                    "group relative overflow-hidden rounded-3xl border-0",
                                    "transition-all duration-300",
                                    "shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20",
                                    "hover:shadow-xl hover:-translate-y-1"
                                )}>
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                            {item.cardTitle}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                            {item.cardDetailedText}
                                        </p>
                                        {item.media && (
                                            <div className="mt-4 aspect-[16/9] relative overflow-hidden rounded-lg">
                                                <img
                                                    src={item.media.source.url}
                                                    alt={item.cardTitle}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}