"use client";

import { motion } from "framer-motion";

export default function Description() {
    return (
        <section className="relative z-20 bg-background -mt-[100vh] pt-[100vh] pb-32 transition-colors duration-300">
            {/* 1. Marquee Strip */}
            <div className="w-full border-y border-border bg-background/50 backdrop-blur-md overflow-hidden py-6 mb-32 relative z-10">
                <div className="flex w-[200%] animate-marquee whitespace-nowrap">
                    {[0, 1].map((i) => (
                        <div key={i} className="flex gap-16 min-w-full justify-around items-center px-8">
                            {["CLOUD COMPUTING", "SAAS IMPLEMENTATION", "INFRASTRUCTURE EQUITY", "AUTOMATION", "CYBERSECURITY"].map((text, idx) => (
                                <span key={idx} className="text-4xl md:text-6xl font-black text-transparent stroke-text uppercase tracking-tighter opacity-30 dark:opacity-30 opacity-10">
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Centered Description */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-medium leading-tight text-muted-foreground">
                    I blend strategic insight with technical expertise to build <br className="hidden md:block" />
                    <span className="text-foreground font-bold block mt-2">SaaS & Cloud Solutions</span>
                    <span className="text-muted-foreground">that drive real-world business impact.</span>
                </h2>
            </div>
        </section>
    );
}
