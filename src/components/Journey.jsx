import { Chrono } from "react-chrono";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

export function Path() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    const items = [
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/frog.gif",
                    type: "gif"

                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/naruto.webp",
                    type: "webp"

                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/frog.gif",
                    type: "gif"

                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/naruto.webp",
                    type: "webp"

                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/frog.gif",
                    type: "gif"

                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "Thumb.AI",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "/naruto.webp",
                    type: "webp"

                }
            }
        },

    ]

    return (
        <section className="min-h-screen w-full mb-0 mt-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <LineShadowText
                        className="italic text-6xl font-bold text-gray-700 dark:text-gray-200"
                        shadowColor={shadowColor}
                    >
                        Journey
                    </LineShadowText>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-5xl mx-auto">
                        Discover my journey through technology and innovation
                    </p>
                </div>
                <div className="w-full h-full">
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        scrollable={{ scrollbar: true }}
                        disableNavOnKey
                        disableToolbar
                    />
                </div>
            </div>
        </section>
    );

}