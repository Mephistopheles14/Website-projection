"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function PomodoroTimer() {
    // Timer state
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<"focus" | "break">("focus"); // focus = 25m, break = 5m

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Toggle Timer
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // Reset Timer
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(mode === "focus" ? 25 * 60 : 5 * 60);
    };

    // Change Mode
    const switchMode = (newMode: "focus" | "break") => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(newMode === "focus" ? 25 * 60 : 5 * 60);
    };

    // Timer Logic
    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if (timerRef.current) clearInterval(timerRef.current);
            // Optional: Play sound or notification here
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft]);

    return (
        <section className="relative z-20 bg-transparent text-foreground py-24 border-t border-white/10 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-12 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    <span>Pomodoro Timer</span>
                    <span>Adjust Time</span>
                </div>

                {/* Description */}
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-16 max-w-3xl">
                    You&apos;ve reached the end! Or have you? Before you vanish into the digital void, I&apos;ve got a quick Pomodoro Timer to help you focus better on your next big thing (or just to remind you to stop doomscrolling).
                </p>

                {/* Timer Container */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-white/20 transition-colors">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Left: Time Display */}
                    <div className="flex flex-col items-center md:items-start z-10">
                        <div className="text-7xl md:text-9xl font-bold tabular-nums tracking-tighter leading-none text-foreground">
                            {formatTime(timeLeft)}
                        </div>
                        <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                            {mode === "focus" ? "Focus Session" : "Break Time"}
                        </span>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-6 z-10">
                        {/* Mode Toggle */}
                        <div className="bg-black/20 backdrop-blur-sm rounded-full p-1 flex items-center border border-white/5">
                            <button
                                onClick={() => switchMode("focus")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${mode === "focus" ? "bg-white/10 text-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                25m
                            </button>
                            <button
                                onClick={() => switchMode("break")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${mode === "break" ? "bg-white/10 text-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                5m
                            </button>
                        </div>

                        {/* Play/Pause Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTimer}
                            className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            {isActive ? (
                                <Pause className="w-6 h-6 fill-current" />
                            ) : (
                                <Play className="w-6 h-6 fill-current ml-1" />
                            )}
                        </motion.button>

                        {/* Reset Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={resetTimer}
                            className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors bg-white/5"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
