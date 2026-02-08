"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Sofitra",
        category: "Cloud Architecture",
        description: "Designing scalable infrastructure for enterprise partners.",
    },
    {
        title: "Scapia",
        category: "FinTech Security",
        description: "Implementing automated security compliance and CRM integration.",
    },
    {
        title: "Zebra Learn",
        category: "EdTech Optimization",
        description: "Cloud deployment and performance optimization.",
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-transparent py-32 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                        Client Engagements
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Explore how I&apos;ve helped organizations scale their infrastructure and secure their data.
                        Click on any project to view the detailed case study.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.2,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            {/* Glassmorphism Background */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-colors duration-500 group-hover:bg-white/10" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                                <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none radial-gradient" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
