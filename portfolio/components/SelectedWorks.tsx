"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Cloud Migration Strategy",
        client: "Azure Enterprise",
        description: "Orchestrated a zero-downtime migration for a Fortune 500 company, moving 500+ VMs to Azure.",
        src: "project1"
    },
    {
        title: "SaaS Security Audit",
        client: "FinTech Startup",
        description: "Conducted comprehensive security audits and implemented ISO 27001 compliant protocols.",
        src: "project2"
    },
    {
        title: "Automated Workflow Engine",
        client: "Logistics Co.",
        description: "Built a custom automation engine using Power Automate and Logic Apps, reducing manual entry by 80%.",
        src: "project3"
    },
    {
        title: "Multi-Cloud Architecture",
        client: "E-Commerce Giant",
        description: "Designed a resilient multi-cloud disaster recovery strategy across AWS and GCP.",
        src: "project4"
    }
];

export default function SelectedWorks() {
    return (
        <section className="relative z-20 bg-background text-foreground py-32 border-t border-border transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8">
                <div className="mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground uppercase">
                        Selected Works
                    </h2>
                    <p className="text-muted-foreground text-xl mt-4 max-w-2xl">
                        Featured case studies demonstrating expertise in cloud infrastructure and SaaS solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer bg-card border border-border hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-muted/20 group-hover:bg-muted/30 transition-colors duration-500" />

                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                                    {project.client}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-lg line-clamp-2 group-hover:text-foreground transition-colors">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
