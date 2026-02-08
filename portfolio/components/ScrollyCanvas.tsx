"use client";

import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({
    frameCount = 192, // Default based on file count observed
}: {
    frameCount?: number;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const { scrollYProgress } = useScroll();

    // Smooth scroll physics (Tuned for tighter tracking to use "every frame")
    const springScroll = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    // Map time (0 to 1) to frame index (0 to frameCount - 1)
    const currentIndex = useTransform(springScroll, [0, 1], [0, frameCount - 1]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const fileName = i.toString().padStart(3, "0");
                    img.src = `/sequence/${fileName}.webp`;
                    img.onload = () => resolve();
                    loadedImages[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setLoaded(true);
        };

        loadImages();
    }, [frameCount]);

    // Render canvas
    const render = (index: number) => {
        if (!images[index] || !canvasRef.current) return;
        const context = canvasRef.current.getContext("2d");
        if (!context) return;

        const img = images[index];

        // Canvas sizing to cover the screen (Object-fit: cover logic)
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Subtle zoom to crop out watermark edges
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * 1.05;

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (!loaded) return;
        const frameIndex = Math.round(latest); // Rounding for better precision
        requestAnimationFrame(() => render(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (loaded) render(0);
    }, [loaded]);

    return (
        <div className="h-[800vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Canvas with Filters */}
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover saturate-[1.1] contrast-[1.1]"
                />

                {/* Theme Overlay (Removed for pure frame colors) */}

                {/* Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
