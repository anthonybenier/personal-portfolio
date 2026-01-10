import { useEffect, useState } from "react";
import Lenis from "lenis";
import { SmoothScrollContext } from "../../hooks/useSmoothScroll";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 2.5, // Increased for heavier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.8, // Slightly reduced to make it feel weightier
            touchMultiplier: 1.5,
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={{ lenis }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};
