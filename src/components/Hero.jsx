import {
    Card,
    CardContent,
} from "@/components/ui/card";
import React from 'react';
import toast from "react-hot-toast";
import { Copy } from "lucide-react";
import { Plus } from "lucide-react";
import { useTheme } from "next-themes";

import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";
import { ScrollSection } from "@/components/shared/ScrollSection";

const Hero = () => {
    const [copied, setCopied] = React.useState(false);
    const { theme } = useTheme();

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText('sourabhs701@gmail.com');
            setCopied(true);
            toast.success('Email copied to clipboard!', {
                position: 'bottom-right'
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            toast.error('Failed to copy email', {
                position: 'bottom-right'
            });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ScrollSection className="mt-20 pt-12 lg:pt-0 lg:mt-32 container mx-auto px-4">
            <MagicCard
                className="cursor-pointer flex-col rounded-3xl max-w-7xl mx-auto"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <Card className="bg-transparent border-0 rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                    <CardContent className="relative p-6 sm:p-12">
                        <div className="relative">
                            {/* Mobile Layout */}
                            <div className="lg:hidden space-y-6 text-center">
                                {/* Profile Image for Mobile */}
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-transparent hover:border-gray-400 dark:hover:border-gray-200">
                                        <img
                                            src="/avatar.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Mobile Content */}
                                <div className="space-y-4">
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                        Software Developer Engineer
                                    </p>
                                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
                                        I&apos;m Sourabh Soni
                                    </h1>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                        I build intelligent systems that enhance digital experiences.
                                    </p>
                                </div>

                                {/* Mobile Buttons */}
                                <div className="space-y-3 pt-4">
                                    <CoolMode>
                                        <Button
                                            variant="default"
                                            onClick={scrollToContact}
                                            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-base font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                                        >
                                            Hire me
                                            <Plus size={18} className="animate-pulse" />
                                        </Button>
                                    </CoolMode>

                                    <CoolMode>
                                        <Button
                                            variant="outline"
                                            onClick={copyEmail}
                                            className="w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:text-orange-500 text-base font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:border-orange-500 group"
                                        >
                                            Copy Email
                                            <Copy size={18} className="transition-transform group-hover:rotate-12" />
                                        </Button>
                                    </CoolMode>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden lg:flex items-center justify-between">
                                {/* Desktop Content - Left Side */}
                                <div className="space-y-6 max-w-2xl">
                                    <p className="text-xl text-gray-600 dark:text-gray-400">
                                        Software Developer Engineer
                                    </p>
                                    <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
                                        I&apos;m Sourabh Soni
                                    </h1>
                                    <p className="text-xl text-gray-600 dark:text-gray-400">
                                        I build intelligent systems that enhance digital experiences.
                                    </p>

                                    {/* Desktop Buttons */}
                                    <div className="flex items-center gap-4 pt-6">
                                        <CoolMode>
                                            <Button
                                                variant="default"
                                                onClick={scrollToContact}
                                                className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium px-12 py-6 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105"
                                            >
                                                Hire me
                                                <Plus size={20} className="animate-pulse" />
                                            </Button>
                                        </CoolMode>

                                        <CoolMode>
                                            <Button
                                                variant="outline"
                                                onClick={copyEmail}
                                                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:text-orange-500 text-lg font-medium px-12 py-6 rounded-xl transition-all duration-300 hover:border-orange-500 group"
                                            >
                                                Copy Email
                                                <Copy size={20} className="transition-transform group-hover:rotate-12" />
                                            </Button>
                                        </CoolMode>
                                    </div>
                                </div>

                                {/* Desktop Profile Image - Right Side */}
                                <div className="relative">
                                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-gray-400 dark:hover:border-gray-200">
                                        <img
                                            src="/avatar.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </MagicCard>
        </ScrollSection>
    );
}

export default Hero;