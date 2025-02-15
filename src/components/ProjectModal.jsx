import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsDocumentation } from "@/data/projects-documentation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropTypes from 'prop-types';

export function ProjectModal({ project, onClose }) {
    const projectDoc = projectsDocumentation[project.id];
    const technicalData = projectDoc?.technical?.architecture || [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
            >
                {/* Hero Section */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={projectDoc?.hero_image || project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 space-y-2">
                        <h2 className="text-4xl font-bold text-white">
                            {project.name}
                        </h2>
                        <p className="text-gray-200 max-w-2xl">
                            {projectDoc?.summary || project.description}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Content */}
                <ScrollArea className="h-[calc(90vh-16rem)] p-6">
                    <Tabs defaultValue="overview" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4 lg:w-[400px] bg-gray-100/80 dark:bg-gray-800/80">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="features">Features</TabsTrigger>
                            <TabsTrigger value="technical">Technical</TabsTrigger>
                            <TabsTrigger value="journey">Journey</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-6">
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                {(project.highlights).map((text, idx) => (
                                    <p key={idx} className="leading-relaxed">
                                        {text}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="outline"
                                        className="px-3 py-1 text-sm font-medium bg-gray-100/50 dark:bg-gray-800/50"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Features Tab */}
                        <TabsContent value="features" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projectDoc?.key_features?.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
                                    >
                                        <div className="flex items-start gap-4">
                                            {feature.icon && (
                                                <div className="p-2 rounded-lg bg-primary/10">
                                                    {/* Replace with your icon component */}
                                                    <span className="text-primary">{feature.icon}</span>
                                                </div>
                                            )}
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {feature.description}
                                                </p>
                                                {feature.metrics && (
                                                    <p className="text-sm text-primary/80">
                                                        {feature.metrics}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Technical Tab */}


                        <TabsContent value="technical" className="space-y-8">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                        Architecture
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {technicalData.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
                                            >
                                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                                                    {item.section}
                                                </h4>
                                                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                                    {item.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="text-sm">
                                                            • {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {projectDoc?.technical?.performance_metrics && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                            Performance
                                        </h3>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            {Object.entries(projectDoc.technical.performance_metrics).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
                                                >
                                                    <div className="font-medium text-gray-900 dark:text-gray-100">
                                                        {key.replace(/_/g, ' ')}
                                                    </div>
                                                    <div className="text-primary/80 text-sm">
                                                        {value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </TabsContent>


                        {/* Journey Tab */}
                        <TabsContent value="journey" className="space-y-6">
                            <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 pl-8 space-y-8">
                                {projectDoc?.development_journey?.map((phase, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[22px] top-1.5 dark:bg-gray-800" />
                                        <time className="text-sm text-gray-500 dark:text-gray-400">
                                            {phase.duration}
                                        </time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                                            {phase.phase}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {phase.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {projectDoc?.lessons_learned && (
                                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                        Key Learnings
                                    </h3>
                                    <ul className="space-y-3 pl-4">
                                        {projectDoc.lessons_learned.map((lesson, idx) => (
                                            <li
                                                key={idx}
                                                className="relative pl-6 text-gray-600 dark:text-gray-400 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary"
                                            >
                                                {lesson}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </ScrollArea>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white dark:from-gray-900 via-white/90 dark:via-gray-900/90">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                        View Project <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

ProjectModal.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        tech_stack: PropTypes.arrayOf(PropTypes.string).isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};