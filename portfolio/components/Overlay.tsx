"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ModeToggle } from "@/components/ModeToggle";

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-between p-8 md:p-12 text-foreground font-sans mix-blend-difference">
            {/* Top Bar */}
            <div className="flex justify-between items-start pointer-events-auto">
                {/* Top Left: Logo & Toggle */}
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold tracking-tighter text-foreground">
                        PA
                    </div>
                    <ModeToggle />
                </div>

                {/* Top Right: Links (Removed) */}
                <div />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-end md:items-end justify-between w-full mt-auto">
                {/* Bottom Left: Title */}
                <div className="mb-0 text-left w-full md:w-auto">
                    <h1 className="text-6xl md:text-[8vw] leading-none font-medium tracking-tight whitespace-nowrap text-foreground">
                        SaaS and <br />
                        Cloud Consultant
                    </h1>
                </div>

                {/* Bottom Right: Description & Scroll Indicator */}
                <div className="flex flex-col items-end gap-6 text-right pb-2 min-w-[300px]">
                    <p className="text-xs md:text-sm font-light text-muted-foreground leading-relaxed max-w-[250px]">
                        Working with top enterprises, applying Cloud and Security to solve real-world business problems.
                    </p>
                    {/* Animated Arrow Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="opacity-80 text-foreground"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
