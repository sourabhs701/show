import { Card } from "@/components/ui/card";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { projectsDocumentation } from "@/data/projects-documentation";
import { motion } from "framer-motion";

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
        documentation: project
    }));

    return (
        <section className="container mx-auto px-4 py-8 sm:py-24">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
                {/* Header Section */}
                <div className="space-y-4 sm:space-y-8 mb-8 sm:mb-12">
                    <LineShadowText
                        className="italic text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        Projects
                    </LineShadowText>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-3xl">
                        <span className="text-xl sm:text-2xl">योगः कर्मसु कौशलम्</span> |
                        Excellence in action is yoga.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className="h-full"
                        >
                            <Card className={cn(
                                "group h-full",
                                "cursor-pointer overflow-hidden rounded-3xl border-0",
                                "shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20",
                                " backdrop-blur-sm"
                            )}>
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech_stack?.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech_stack?.length > 3 && (
                                            <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                                +{project.tech_stack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
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
        </section>
    );
} 