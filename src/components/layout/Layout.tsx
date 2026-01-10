import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "../ui/CustomCursor";
import { SmoothScroll } from "../utils/SmoothScroll";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
                <CustomCursor />
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};
