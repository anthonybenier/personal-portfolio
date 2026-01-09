import { createContext, useContext } from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
    lenis: Lenis | null;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
    lenis: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
