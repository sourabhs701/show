import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
const projects = [
    {
        id: 1,
        name: "MakeThumb.com",
        "description": "AI-Powered Automation Tool to transform (resume → portfolio website)",
        image: "/projects/girlrun1.gif",
        "tech_stack": [
            "Node.js",
            "React",
            "AWS",
            "Gemini AI",
            "MongoDB",
            "Express.js"
        ],
        "highlights": [
            "Developed a PDF-to-JSON parser using Gemini Flash 1.5, reducing data parsing errors by 90%.",
            "Set up a reliable infrastructure with AWS S3 for storage and Render for hosting, achieving 99.9% uptime.",
            "Automated the process of converting resumes into portfolio websites, increasing efficiency by 70%.",
            "Implemented user-facing features such as automated email notifications and progress tracking.",
            "Conducted thorough testing to minimize bugs, reducing post-deployment issues by 95%."
        ],
        "link": "http://makethumb.com"
    },
    {
        id: 2,
        "name": "GitHorizon",
        "description": "VS Code extension to visualize Git commit history",
        "image": "/projects/girlrun1.gif",
        "tech_stack": [
            "VS Code API",
            "JavaScript"
        ],
        "highlights": [
            "Created a VS Code extension to visualize Git commit history directly within the editor.",
            "Integrated seamlessly with VS Code’s interface for a smooth user experience.",
            "Processed and displayed over 1,000+ commits from various repositories during testing.",
            "Introduced timeline-based visualizations to simplify version history tracking, improving clarity by 50%.",
            "Designed interactive tooltips and navigation aids to enhance developer productivity."
        ],
        "link": "https://marketplace.visualstudio.com/items?itemName=sourabhsoni.githorizon"
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <section className=" mt-20 container mx-auto ">

            <div className="space-y-4 mb-16 container mx-auto">
                <div className="space-y-4 mb-16 container mx-auto">
                    <LineShadowText className="italic text-6xl font-bold text-gray-700 dark:text-gray-200" shadowColor={shadowColor}>
                        Projects
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-5xl">
                        Discover the projects I have been able to develop, manage, and design over the course of my experiences in recent years.
                    </p>
                </div>
            </div>

            <div className="grid mt-20 grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <Card className={cn(
                            "group relative overflow-hidden rounded-3xl border-0",
                            "cursor-pointer transition-all duration-300",
                            "shadow-xl shadow-gray-600/10",
                            "shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20"
                        )}>
                            <div className="aspect-[16/9] relative overflow-hidden">



                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />



                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6 space-y-4">
                                <motion.h3
                                    className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                                    layout
                                >
                                    {project.name}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 dark:text-gray-400"
                                    layout
                                >
                                    {project.description}
                                </motion.p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech_stack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech_stack.length > 3 && (
                                        <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                            +{project.tech_stack.length} more
                                        </span>
                                    )}
                                </div>
                            </div>
                            <motion.div
                                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                            >
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
} 