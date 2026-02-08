"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Description from "@/components/Description"; // Added this import
import BentoGrid from "@/components/BentoGrid";
import SelectedWorks from "@/components/SelectedWorks";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import PomodoroTimer from "@/components/PomodoroTimer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    // Initialize Lenis for smooth scrolling
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Simulate loading time for preloader
        setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 2000);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-background min-h-screen text-foreground transition-colors duration-300">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>

            {/* 1. Hero Section (Scroll Triggered Video) */}
            <div className="relative z-10">
                <ScrollyCanvas frameCount={192} />
                <Overlay />
            </div>

            {/* 2. Description Section */}
            <Description />

            {/* 3. Bento Grid (About Section) */}
            <BentoGrid />

            {/* 4. Selected Works */}
            <SelectedWorks />

            {/* 5. Experience Timeline */}
            <Experience />

            {/* 6. Services (Tech Arsenal) */}
            <Services />

            {/* 7. Socials Section */}
            <Socials />

            {/* 8. Testimonials */}
            <Testimonials />

            {/* 9. Pomodoro Timer */}
            <PomodoroTimer />

            {/* 10. Footer */}
            <Footer />
        </main>
    );
}
