import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
    lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
    lenis: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
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
