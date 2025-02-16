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
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
            >
                {/* Hero Section */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={projectDoc?.hero_image || project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

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
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-4 lg:w-[400px] mx-5 mt-4 bg-transparent">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="technical">Technical</TabsTrigger>
                        <TabsTrigger value="journey">Journey</TabsTrigger>
                    </TabsList>
                    <ScrollArea className="h-[calc(90vh-16rem-4rem)] px-8 py-6">
                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-8">
                            <div className="space-y-6 text-gray-700 dark:text-gray-300">
                                {(project.highlights).map((text, idx) => (
                                    <p key={idx} className="leading-relaxed text-lg">
                                        {text}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="outline"
                                        className="px-3 py-1.5 text-sm font-medium border-gray-200 dark:border-gray-700"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Features Tab */}
                        <TabsContent value="features" className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {projectDoc?.key_features?.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="space-y-3"
                                    >
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                                {feature.description}
                                            </p>
                                            {feature.metrics && (
                                                <p className="text-sm text-orange-500">
                                                    {feature.metrics}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Technical Tab */}
                        <TabsContent value="technical" className="space-y-12">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                                        Architecture
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {technicalData.map((item, idx) => (
                                            <div key={idx} className="space-y-3">
                                                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                                    {item.section}
                                                </h4>
                                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                                    {item.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="text-lg">
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {projectDoc?.technical?.performance_metrics && (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                                            Performance
                                        </h3>
                                        <div className="grid gap-8 md:grid-cols-2">
                                            {Object.entries(projectDoc.technical.performance_metrics).map(([key, value]) => (
                                                <div key={key} className="space-y-1">
                                                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                                        {key.replace(/_/g, ' ')}
                                                    </div>
                                                    <div className="text-orange-500">
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
                        <TabsContent value="journey" className="space-y-12">
                            <div className="space-y-12">
                                {projectDoc?.development_journey?.map((phase, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <time className="text-sm text-gray-500 dark:text-gray-400">
                                            {phase.duration}
                                        </time>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                                            {phase.phase}
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-400">
                                            {phase.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {projectDoc?.lessons_learned && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                                        Key Learnings
                                    </h3>
                                    <ul className="space-y-4">
                                        {projectDoc.lessons_learned.map((lesson, idx) => (
                                            <li
                                                key={idx}
                                                className="text-lg text-gray-600 dark:text-gray-400"
                                            >
                                                {lesson}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </TabsContent>
                    </ScrollArea>
                </Tabs>

                {/* Footer */}
                <div className="sticky bottom-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
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