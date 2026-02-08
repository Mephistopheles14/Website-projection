"use client";

import { motion } from "framer-motion";

const socials = [
    {
        name: "Instagram",
        url: "https://instagram.com",
        path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.65 6.35c.01-.01.01-.02.01-.02.99-1.01 2.37-1.11 2.37-1.11M16 3.13a4.004 4.004 0 0 1 2.68 1.13L16 3.13zm-9.13 1.13A4.004 4.004 0 0 1 9.55 3.13L6.87 4.26zM4.35 9.55a4 4 0 0 1 1.13-2.68L4.35 9.55zm15.4 0a4 4 0 0 1-1.13-2.68l1.13 2.68zm0 4.9a4 4 0 0 1 1.13 2.68l-1.13-2.68zM9.55 20.87a4.004 4.004 0 0 1-2.68-1.13l2.68 1.13zm6.9 0a4.004 4.004 0 0 1 2.68-1.13l-2.68 1.13zM4.35 14.45a4 4 0 0 1-1.13 2.68l1.13-2.68z",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        )
    },
    {
        name: "Facebook",
        url: "https://facebook.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        )
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        )
    },
    {
        name: "Reddit",
        url: "https://reddit.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M17 13c0 2-3 3-5 3s-5-1-5-3"></path>
                <line x1="8.5" y1="9.5" x2="8.5" y2="9.5"></line>
                <line x1="15.5" y1="9.5" x2="15.5" y2="9.5"></line>
                <path d="M12 2a2 2 0 0 0-2 2v2"></path>
            </svg>
        )
    },
    {
        name: "Discord",
        url: "https://discord.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 5h-19C1.4 5 1 5.4 1 6.5v11C1 18.6 1.4 19 2.5 19h19c1.1 0 1.5-.4 1.5-1.5v-11C23 5.4 22.6 5 21.5 5zM8.5 13.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S7 15.8 7 15s.7-1.5 1.5-1.5zm7 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 15.8 14 15s.7-1.5 1.5-1.5z"></path>
            </svg>
        )
    },
    {
        name: "X",
        url: "https://x.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.867L8.867 4H4z"></path>
                <path d="M4 20l6.768-6.768m2.46-2.46L20 4"></path>
            </svg>
        )
    },
    {
        name: "GitHub",
        url: "https://github.com",
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        )
    }
];

export default function Socials() {
    return (
        <section className="relative z-20 bg-background py-24 border-t border-border transition-colors duration-300">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header */}
                <div className="flex justify-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground uppercase">
                        Connect With Me
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-muted group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-muted-foreground group-hover:text-primary transition-colors relative z-10 scale-125">
                                    {social.svg}
                                </div>
                            </div>
                            <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                                {social.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
