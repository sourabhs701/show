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
        } catch (err) {
            toast.error('Failed to copy email', {
                position: 'bottom-right'
            });
        }
    };

    return (
        <MagicCard
            className="cursor-pointer container mx-auto flex-col rounded-full mt-32"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
            <Card className="bg-transparent border-0 rounded-3xl overflow-hidden shadow-lg shadow-gray-500/20 dark:shadow-gray-400/20">
                <CardContent className="relative p-8">
                    {/* Top right badge */}
                    {/* <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-1.5 ">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-sm text-gray-400">AVAILABLE FOR JOB</span>
                        </div>
                    </div> */}

                    {/* Main content */}
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                                <p className="text-xl sm:text-lg text-gray-600 dark:text-gray-400">
                                    Software Developer Engineer
                                </p>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
                                    I&apos;m Sourabh Soni
                                </h1>

                                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                                    I build intelligent systems that enhance digital experiences.
                                </p>

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-8 justify-center lg:justify-start">
                                    <CoolMode>
                                        <Button
                                            variant="default"
                                            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg font-medium px-8 sm:px-12 py-4 sm:py-6 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-md"
                                            onClick={() => window.location.href = '#contact'}
                                        >
                                            Hire me
                                            <Plus size={24} className="animate-pulse" />
                                        </Button>
                                    </CoolMode>

                                    <CoolMode>
                                        <Button
                                            variant="outline"
                                            onClick={copyEmail}
                                            className="w-full sm:w-auto flex items-center gap-3 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:text-orange-500 text-base sm:text-lg font-medium px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:border-orange-500 hover:scale-105 shadow-md group"
                                        >
                                            Copy Email
                                            <Copy size={24} className="transition-transform group-hover:rotate-12" />
                                        </Button>
                                    </CoolMode>
                                </div>
                            </div>
                            {/* Right Profile Image */}
                            {/* <div className="relative hidden lg:flex items-center justify-end pr-5"> */}
                            {/* Profile Image - Right side */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-8 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-gray-400 dark:hover:border-gray-200 flex items-center justify-center">


                                    <img
                                        src="/pfp.jpg"
                                        alt="Profile"
                                        className="w-64 h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </MagicCard>
    );
}

export default Hero;