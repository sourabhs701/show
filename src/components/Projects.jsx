import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { projectsDocumentation } from "@/data/projects-documentation";
import { ScrollSection } from "@/components/shared/ScrollSection";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    // Convert projectsDocumentation object to array
    const projects = Object.entries(projectsDocumentation).map(([id, project]) => ({
        id: parseInt(id),
        name: project.title || project.overview?.title,
        description: project.summary || project.overview?.summary,
        image: project.hero || project.hero_image || project.overview?.hero,
        tech_stack: project.tech_stack ||
            project.technical?.core_tech ||
            project.technical?.architecture?.flatMap(arch => arch.details),
        highlights: project.highlights ||
            project.overview?.content ||
            project.key_features?.map(f => f.description),
        link: project.link,
        documentation: project // Store full documentation for modal
    }));

    return (

        <ScrollSection className="section-padding container mx-auto ">
            <div className="section-container">
                <div className="space-y-4 container mx-auto">
                    <div className="space-y-4 mb-16 container mx-auto">
                        <LineShadowText className="italic text-6xl font-bold text-gray-700 dark:text-gray-200" shadowColor={shadowColor}>
                            Projects
                        </LineShadowText>
                        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-5xl">
                            <span className="text-2xl">योगः कर्मसु कौशलम्</span> |

                            Excellence in action is yoga.


                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                                "hover:shadow-2xl hover:-translate-y-1",
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
                                        {project.tech_stack?.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech_stack?.length > 3 && (
                                            <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                                +{project.tech_stack.length - 3} more
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
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </ScrollSection>
    );
} 