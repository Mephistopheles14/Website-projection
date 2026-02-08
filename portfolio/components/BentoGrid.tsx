"use client";

import { motion } from "framer-motion";

const BentoGrid = () => {
    return (
        <section className="relative z-20 py-24 px-4 md:px-8 bg-transparent text-foreground">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-4 md:gap-8">

                {/* 1. Wallpapers (Infinite Scroll) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-8 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative group transition-colors duration-300"
                >
                    <WallpaperGallery />
                </motion.div>

                {/* 2. Intro Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-4 rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-colors duration-300"
                >
                    <IntroCard />
                </motion.div>

                {/* 3. Tools Marquee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 relative transition-colors duration-300"
                >
                    <ToolsMarquee />
                </motion.div>

                {/* 4. Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-4 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative group transition-colors duration-300"
                >
                    <div className="absolute inset-0 bg-muted/20 animate-pulse" /> {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <span className="text-white font-bold text-xl">Pulastya Arya</span>
                    </div>
                </motion.div>

                {/* 5. Video Loop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-4 rounded-3xl overflow-hidden border border-white/10 relative bg-black/50 backdrop-blur-sm transition-colors duration-300"
                >
                    {/* Placeholder Video using a pattern */}
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent animate-slide-horizontal opacity-80" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute top-4 right-4 bg-red-500 rounded-full w-3 h-3 animate-ping" />
                </motion.div>

                {/* 6. Music Player */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-12 rounded-3xl p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between transition-colors duration-300"
                >
                    <MusicPlayer />
                </motion.div>

            </div>
        </section>
    );
};

const IntroCard = () => (
    <>
        <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">About Me</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-2 text-foreground">
                Hi, I&apos;m <span className="text-primary">Pulastya</span>
            </h3>
            <p className="text-muted-foreground">
                SaaS & Cloud Consultant helping enterprises scale securely.
            </p>
        </div>
        <div className="relative mt-8">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-full bg-muted border border-input text-foreground focus:outline-none focus:border-primary transition-colors pr-12 placeholder:text-muted-foreground/50"
            />
            <button className="absolute right-2 top-2 p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
        </div>
    </>
);

const ToolsMarquee = () => {
    const tools = ["GCP", "AWS", "Azure", "M365", "Carbonite", "Webroot", "Mailstore", "KOFAX"];
    return (
        <div className="flex flex-col justify-center h-full bg-accent/20 overflow-hidden">
            <div className="flex w-[200%] animate-marquee gap-8 items-center">
                {[...tools, ...tools].map((tool, i) => (
                    <span key={i} className="text-2xl font-bold text-muted-foreground/40 uppercase whitespace-nowrap">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

const MusicPlayer = () => (
    <div className="w-full flex items-center gap-6">
        <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold">
            PA
        </div>
        <div className="flex-1">
            <h4 className="text-lg font-bold text-foreground">DesignFlow</h4>
            <div className="w-full h-1 bg-muted rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full" />
            </div>
        </div>
        <div className="flex gap-1 h-8 items-end">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-1 bg-primary rounded-t-full animate-music-bar-${i}`} />
            ))}
        </div>
    </div>
);

const WallpaperGallery = () => (
    <div className="flex w-[200%] h-full animate-slide-horizontal">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-1/4 h-full bg-muted/20 border-r border-border flex items-center justify-center">
                <span className="text-muted-foreground/20 font-bold text-4xl">WALLPAPER {i}</span>
            </div>
        ))}
    </div>
);

export default BentoGrid;
