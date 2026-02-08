"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Footer() {
    const { scrollY } = useScroll();
    const [pixels, setPixels] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setPixels(Math.floor(latest));
    });

    return (
        <footer className="relative z-20 bg-background pt-32 pb-12 border-t border-border transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8">

                {/* Pixel Counter */}
                <div className="flex flex-col items-center justify-center mb-32">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-8 opacity-50">
                        <div className="w-1 h-1 bg-foreground rounded-full animate-ping" />
                    </div>

                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-foreground uppercase text-center leading-none">
                        Thanks for scrolling <br />
                        <span className="text-primary tabular-nums">
                            {pixels} Pixels!
                        </span>
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest border-t border-border pt-8 gap-4">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="#" className="hover:text-foreground transition-colors">Email</a>
                    </div>

                    <div className="flex gap-4 text-center md:text-right">
                        <span>© 2026 Pulastya Arya</span>
                        <span>Designed & Developed</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
