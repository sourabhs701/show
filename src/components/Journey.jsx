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
    const chronoTheme = theme.resolvedTheme === "dark"
        ? {
            primary: '#fff',
            secondary: '#4B5563',
            cardBgColor: '#1F2937',
            titleColor: '#fff',
            titleColorActive: '#9CA3AF',
        }
        : {
            primary: '#374151',
            secondary: '#9CA3AF',
            cardBgColor: '#fff',
            titleColor: '#374151',
            titleColorActive: '#111827',
        };

    return (
        <section className="min-h-screen w-full py-24 relative">
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
                <div className="w-full overflow-auto">
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        scrollable={{ scrollbar: true }}
                        disableNavOnKey
                        enableBreakPoint
                        responsiveBreakPoint={768}
                        theme={chronoTheme}
                        borderLessCards
                        highlightCardsOnHover
                        enableQuickJump
                        cardWidth={400}
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"
                        mediaSettings={{ align: 'center', fit: 'cover' }}
                        timelinePointDimension={30}
                        timelinePointShape="circle"
                    />
                </div>
            </div>
        </section>
    );
};