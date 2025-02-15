import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { motion } from "framer-motion";

export function Contact() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add loading state
        const loadingToast = toast.loading('Sending message...');

        try {
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
            toast.success('Message sent successfully!');
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            toast.dismiss(loadingToast);
        }
    };

    return (
        <div className="relative" id="contact">
            <RetroGrid />
            <MagicCard
                className="mt-8 cursor-pointer flex-col rounded-full relative z-10"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <Card className="bg-transparent border-0 rounded-3xl overflow-hidden backdrop-blur-sm">
                    <CardContent className="p-4 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                                    Get in Touch
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
                                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:sourabhs701@gmail.com"
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                        aria-label="Email me"
                                    >
                                        <Mail className="w-5 h-5" aria-hidden="true" />
                                        <span className="text-sm md:text-base">sourabhs701@gmail.com</span>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                                role="form"
                                aria-label="Contact form"
                            >
                                <div className="space-y-4">
                                    {[
                                        { name: 'name', type: 'text', label: 'Your Name', delay: 0.3 },
                                        { name: 'email', type: 'email', label: 'Your Email', delay: 0.4 },
                                    ].map((field) => (
                                        <motion.div
                                            key={field.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: field.delay }}
                                            className="space-y-2"
                                        >
                                            <label
                                                htmlFor={field.name}
                                                className="sr-only"
                                            >
                                                {field.label}
                                            </label>
                                            <input
                                                id={field.name}
                                                type={field.type}
                                                placeholder={field.label}
                                                className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                                                value={formData[field.name]}
                                                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                                required
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="message" className="sr-only">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        ></textarea>
                                    </motion.div>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:from-orange-600 hover:to-purple-600 flex items-center justify-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-orange-500/20"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" aria-hidden="true" />
                                </motion.button>
                            </motion.form>
                        </div>
                    </CardContent>
                </Card>
            </MagicCard>
        </div>
    );
} 