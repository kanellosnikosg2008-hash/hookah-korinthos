"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(onComplete, 1000);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-cormorant text-4xl md:text-6xl text-accent tracking-widest uppercase">
                            Hookah Lounge
                        </h1>
                        <p className="font-inter text-body mt-4 tracking-widest text-sm uppercase">
                            Εκεί που η Νύχτα Αναπνέει
                        </p>
                    </motion.div>

                    <div className="relative w-64 h-[2px] bg-white/10 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-accent"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-inter text-accent text-[10px] mt-4 uppercase tracking-[0.2em]"
                    >
                        Φορτώνει... {Math.round(progress)}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
