"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div
            id="cursor"
            className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-75 ease-out"
            style={{ left: "-10px", top: "-10px" }}
        />
    );
}
