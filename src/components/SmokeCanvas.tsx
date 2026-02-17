"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

const FRAME_COUNT = 120;

export default function SmokeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 28,
    });

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        const preloadImages = () => {
            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                img.src = `/sequence/frame_${i}.jpg`;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) {
                        setImagesLoaded(true);
                    }
                };
                images.push(img);
            }
            imagesRef.current = images;
        };

        preloadImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const drawFrame = (frameProgress: number) => {
            const frameIndex = Math.min(
                Math.floor(frameProgress * FRAME_COUNT),
                FRAME_COUNT - 1
            );
            const img = imagesRef.current[frameIndex];

            if (img && img.complete) {
                // Clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate fit (cover)
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawFrame(smoothProgress.get());
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        // Use requestAnimationFrame for smooth drawing
        let rafId: number;
        const animate = () => {
            drawFrame(smoothProgress.get());
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(rafId);
        };
    }, [imagesLoaded, smoothProgress]);

    return (
        <div className="fixed inset-0 z-0 h-screen w-full bg-background overflow-hidden">
            <canvas
                ref={canvasRef}
                className="h-full w-full"
                style={{ filter: "brightness(0.6) contrast(1.2)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />
        </div>
    );
}
