"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        role: "Channel Partner Consultant",
        company: "Digiswitch Infotech Pvt Ltd",
        period: "April 2024 - Present",
        type: "On-site",
        description: "Leading strategic partnerships and optimizing cloud distribution channels. Focusing on revenue growth through targeted partner enablement and technical pre-sales support.",
        skills: ["Channel Strategy", "Cloud Sales", "Partner Management"]
    },
    {
        role: "AWS Cloud Consultant",
        company: "Freelance",
        period: "October 2023 - Present",
        type: "Remote",
        description: "Designing and implementing scalable AWS architectures for global clients. Specializing in serverless migration and cost optimization strategies.",
        skills: ["AWS", "Serverless", "Cost Optimization", "Lambda"]
    },
    {
        role: "Azure Cloud Consultant",
        company: "Microsoft",
        period: "December 2022 - August 2023",
        type: "Hybrid",
        description: "Engaged in high-level enterprise cloud migrations. Collaborated with cross-functional teams to deploy secure and compliant Azure environments for financial institutions.",
        skills: ["Azure", "Enterprise Security", "Compliance", "Migration"]
    },
    {
        role: "AWS Cloud Consultant",
        company: "Tekrosta Cloud",
        period: "October 2022 - December 2022",
        type: "Remote",
        description: "Provided expert consultation on AWS infrastructure best practices. Conducted security audits and implemented automated deployment pipelines.",
        skills: ["AWS", "DevOps", "Security Auditing"]
    },
    {
        role: "Inside Sales Account Manager",
        company: "Majorel India",
        period: "May 2022 - August 2022",
        type: "On-site",
        description: "Managed key accounts and drove inside sales initiatives. utilized CRM tools to track performance and identified upsell opportunities within existing client base.",
        skills: ["Salesforce", "Account Management", "B2B Sales"]
    },
    {
        role: "Cloud Consultant - GCP/Azure",
        company: "Team Computers",
        period: "August 2021 - May 2022",
        type: "On-site",
        description: "Executed multi-cloud strategies involving GCP and Azure. Deployed hybrid cloud solutions and managed Kubernetes clusters for large-scale applications.",
        skills: ["GCP", "Kubernetes", "Hybrid Cloud", "Docker"]
    },
    {
        role: "Marketing Intern",
        company: "Enfys Technologies",
        period: "September 2019 - November 2019",
        type: "Hybrid",
        description: "Assisted in digital marketing campaigns and market research. Analyzed campaign performance metrics to optimize ad spend and user engagement.",
        skills: ["Digital Marketing", "SEO", "Analytics"]
    }
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-background py-32 border-t border-border overflow-hidden transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8 mb-24">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground uppercase">
                    Experience
                </h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 overflow-x-auto px-8 pb-12 snap-x snap-mandatory scrollbar-hide">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="snap-center flex-shrink-0 w-[500px] p-10 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="text-9xl font-black text-foreground select-none">
                                {("0" + (i + 1)).slice(-2)}
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-secondary font-medium mb-6 uppercase tracking-wider text-sm">
                                    {exp.company}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                                    <span className="bg-muted px-3 py-1 rounded-full">{exp.period}</span>
                                    <span>•</span>
                                    <span>{exp.type}</span>
                                </div>

                                <p className="text-muted-foreground/80 leading-relaxed mb-8">
                                    {exp.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="bg-muted text-foreground text-xs px-3 py-1.5 rounded-md border border-border">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* End Padding */}
                <div className="w-8 flex-shrink-0" />
            </div>
        </section>
    );
}
