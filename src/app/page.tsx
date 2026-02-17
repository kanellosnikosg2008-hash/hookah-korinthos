"use client";

import { useState } from "react";
import SmokeCanvas from "@/components/SmokeCanvas";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollytellingBeat from "@/components/ScrollytellingBeat";
import CustomCursor from "@/components/CustomCursor";
import { ChevronDown } from "lucide-react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="relative bg-background min-h-[500vh]">
            <LoadingScreen onComplete={() => setIsLoading(false)} />

            {!isLoading && (
                <>
                    <CustomCursor />
                    <SmokeCanvas />

                    {/* Beat A: 0-20% */}
                    <section className="relative h-screen flex items-center justify-center p-6 text-center">
                        <ScrollytellingBeat range={[0, 0.2]} className="max-w-4xl px-4">
                            <h2 className="font-cormorant text-5xl md:text-8xl text-white/90 leading-tight">
                                Εκεί που η Νύχτα Αναπνέει
                            </h2>
                            <p className="font-inter text-body mt-8 text-base md:text-2xl uppercase tracking-[0.2em]">
                                Ένα lounge φτιαγμένο για όσους απολαμβάνουν τη στιγμή.
                            </p>

                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-accent animate-bounce">
                                <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">Κύλισε για να εξερευνήσεις</span>
                                <ChevronDown size={20} />
                            </div>
                        </ScrollytellingBeat>
                    </section>

                    {/* Beat B: 25-45% */}
                    <section className="relative h-screen flex items-center justify-start px-8 md:px-24">
                        <ScrollytellingBeat range={[0.25, 0.45]} className="max-w-2xl">
                            <span className="text-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block">ΑΠΟ ΤΟ 2018 — ΑΘΗΝΑ</span>
                            <h2 className="font-cormorant text-4xl md:text-7xl text-white/90 leading-tight">
                                Επιλεγμένες Γεύσεις
                            </h2>
                            <p className="font-inter text-body mt-6 text-base md:text-xl max-w-lg">
                                Πάνω από 60 premium μείγματα. Από τον κόσμο στο ποτήρι σου.
                            </p>
                        </ScrollytellingBeat>
                    </section>

                    {/* Beat C: 50-70% */}
                    <section className="relative h-screen flex items-center justify-end px-8 md:px-24 text-right">
                        <ScrollytellingBeat range={[0.5, 0.7]} className="max-w-2xl">
                            <h2 className="font-cormorant text-4xl md:text-7xl text-white/90 leading-tight">
                                Η Ατμόσφαιρα
                            </h2>
                            <p className="font-inter text-body mt-6 text-base md:text-xl max-w-lg ml-auto">
                                Ιδιωτικά καθίσματα. Ambient ήχος. Αργή, απολαυστική εξυπηρέτηση.
                            </p>
                        </ScrollytellingBeat>
                    </section>

                    {/* Beat D: 75-90% */}
                    <section className="relative h-screen flex items-center justify-center p-6 text-center">
                        <ScrollytellingBeat range={[0.75, 0.9]} className="max-w-3xl px-4">
                            <h2 className="font-cormorant text-4xl md:text-8xl text-accent leading-tight">
                                Κλείσε το Βράδυ σου
                            </h2>
                            <p className="font-inter text-body mt-8 text-base md:text-xl uppercase tracking-widest">
                                Οι θέσεις είναι περιορισμένες. Η εμπειρία δεν είναι.
                            </p>

                            <button className="mt-12 px-8 md:px-10 py-3 md:py-4 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 font-inter tracking-[0.2em] uppercase text-xs md:text-sm group focus:outline-none focus:ring-1 focus:ring-accent">
                                Κράτηση Τραπεζιού <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                            </button>
                        </ScrollytellingBeat>
                    </section>

                    {/* Beat E: 92-100% (Footer) */}
                    <footer className="relative h-screen flex items-center justify-center p-6 text-center">
                        <ScrollytellingBeat range={[0.92, 1.0]} className="flex flex-col items-center w-full max-w-5xl">
                            <h2 className="font-cormorant text-3xl md:text-4xl text-accent tracking-[0.3em] uppercase mb-16">
                                Hookah Lounge
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full mb-20 px-4">
                                <div className="space-y-4">
                                    <h3 className="text-accent text-[10px] tracking-[0.2em] uppercase opacity-50">Διεύθυνση</h3>
                                    <p className="text-white/80 text-sm md:text-base leading-relaxed">Κορινθίας 12, Αθήνα 11526</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-accent text-[10px] tracking-[0.2em] uppercase opacity-50">Instagram</h3>
                                    <p className="text-white/80 text-sm md:text-base leading-relaxed">@smoke_lounge_athens</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-accent text-[10px] tracking-[0.2em] uppercase opacity-50">Ωράριο</h3>
                                    <p className="text-white/80 text-sm md:text-base leading-relaxed">Κάθε μέρα 18:00 — 04:00</p>
                                </div>
                            </div>

                            <div className="w-full max-w-md h-px bg-white/10 mb-12" />

                            <p className="font-inter text-body text-[10px] md:text-xs uppercase tracking-[0.4em] max-w-xs md:max-w-none">
                                Έλα για τον καπνό. Μείνε για το συναίσθημα.
                              </p>
                        </ScrollytellingBeat>
                    </footer>
                </>
            )}
        </main>
    );
}
