import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "greek"],
    variable: "--font-inter"
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
});

export const metadata: Metadata = {
    title: "Hookah Lounge | Εκεί που η Νύχτα Αναπνέει",
    description: "Premium Scrollytelling Experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="el">
            <body className={`${inter.variable} ${cormorant.variable} font-inter`}>
                {children}
            </body>
        </html>
    );
}
