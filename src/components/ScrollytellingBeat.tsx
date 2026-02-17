"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface BeatProps {
    children: ReactNode;
    range: [number, number]; // [start, end] scroll positions (0 to 1)
    className?: string;
}

export default function ScrollytellingBeat({ children, range, className }: BeatProps) {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(
        scrollYProgress,
        [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
        [40, 0, 0, -40]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
