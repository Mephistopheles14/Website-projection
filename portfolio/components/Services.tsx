"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Database, LayoutGrid, Lock, Mail, FileText } from "lucide-react";

const services = [
    {
        title: "GCP",
        sub: "Cloud Infrastructure",
        icon: <Cloud className="w-8 h-8" />,
        color: "from-blue-400 to-blue-600"
    },
    {
        title: "AWS",
        sub: "Amazon Web Services",
        icon: <Server className="w-8 h-8" />,
        color: "from-orange-400 to-orange-600"
    },
    {
        title: "Azure",
        sub: "Microsoft Cloud",
        icon: <LayoutGrid className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "M365",
        sub: "Productivity Suite",
        icon: <FileText className="w-8 h-8" />,
        color: "from-indigo-400 to-purple-600"
    },
    {
        title: "Carbonite",
        sub: "by OpenText",
        icon: <Database className="w-8 h-8" />,
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "Webroot",
        sub: "by OpenText",
        icon: <Shield className="w-8 h-8" />,
        color: "from-green-500 to-teal-500"
    },
    {
        title: "Mailstore",
        sub: "by OpenText",
        icon: <Mail className="w-8 h-8" />,
        color: "from-red-400 to-pink-600"
    },
    {
        title: "KOFAX",
        sub: "by Tungsten Automation",
        icon: <Lock className="w-8 h-8" />,
        color: "from-yellow-400 to-orange-500"
    }
];

export default function Services() {
    return (
        <section className="relative z-20 bg-background py-32 border-t border-border transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground uppercase">
                            Tech Arsenal
                        </h2>
                        <p className="text-muted-foreground text-xl mt-4 max-w-xl">
                            Specialized tools and platforms powering enterprise-grade solutions.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-8 rounded-3xl bg-card border border-border hover:border-border/80 transition-all duration-300 flex flex-col justify-between h-[280px] relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                            <div className="p-4 rounded-2xl bg-muted/50 w-fit text-foreground group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-1">{service.title}</h3>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{service.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
