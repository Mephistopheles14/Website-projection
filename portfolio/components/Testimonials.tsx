"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Pulastya handled our complex Azure migration with impressive attention to detail. He ensured zero downtime during the critical cutover phase, which was crucial for our operations.",
        name: "Director of Engineering",
        role: "Team Computers",
        initial: "D"
    },
    {
        quote: "His deep knowledge of AWS security protocols helped us secure our infrastructure against potential vulnerabilities. A true professional who understands both tech and business needs.",
        name: "Senior Solutions Architect",
        role: "Cloud Wizard Consulting",
        initial: "S"
    },
    {
        quote: "Delivered a scalable cloud architecture that reduced our latency significantly. Pulastya is efficient, easy to work with, and brings great insights to the table.",
        name: "CTO",
        role: "Sofitra Partner",
        initial: "C"
    },
    {
        quote: "An exceptional channel partner consultant. He streamlined our onboarding process and helped us identify key revenue opportunities in the cloud sector.",
        name: "Regional Sales Head",
        role: "OpenText Distributor",
        initial: "R"
    }
];

export default function Testimonials() {
    return (
        <section className="relative z-20 bg-background py-32 border-t border-border overflow-hidden transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header */}
                <div className="flex justify-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 uppercase">
                        Testimonials
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
                    {testimonials.map((t, i) => (
                        <div key={i} className="snap-center flex-shrink-0 w-[400px] p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors flex flex-col justify-between group">

                            <div>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8 opacity-20 group-hover:opacity-50 transition-opacity">
                                    <path d="M10 11L8 17H11L10 11ZM10 11L11 7H8L5 11V17H10V11ZM20 11L18 17H21L20 11ZM20 11L21 7H18L15 11V17H20V11Z" fill="currentColor" className="text-foreground" />
                                </svg>

                                <p className="text-muted-foreground leading-relaxed text-lg font-light mb-8">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-xl">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold text-base">
                                        {t.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Padding */}
                    <div className="w-8 flex-shrink-0" />
                </div>
            </div>
        </section>
    );
}
