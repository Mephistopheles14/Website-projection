"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Namaste"];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [index]);

    // Use a fixed dark color for preloader or dynamic? 
    // Usually preloader covers everything so it can specify its own static colors
    // or use dynamic. Let's stick to the Dennis Snellenberg dark style but allowing text to be white.
    // Actually, let's make it respect the theme or force dark?
    // Reference site uses dark preloader always. Let's keep it dark for impact, or use bg-background.
    // Let's use bg-foreground text-background to invert it for contrast? 
    // No, let's stick to standard dark since Hero is dark video.

    // Actually, if we are in light mode, the curve reveal should reveal a white background.
    // So the preloader itself should probably be dark (to match the video initially?) or match the theme?
    // If the hero video is dark, preloader should probably be dark.

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div variants={slideUp} initial="initial" exit="exit" className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 text-white cursor-none">
                {dimension.width > 0 && (
                    <>
                        <motion.p variants={opacity} initial="initial" animate="enter" className="flex text-5xl items-center absolute z-10 font-bold tracking-tighter">
                            <span className="block w-[10px] h-[10px] bg-white rounded-full mr-3"></span>
                            {words[index]}
                        </motion.p>
                        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-zinc-900">
                            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                        </svg>
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}

const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}
