
import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import { SEO } from "../components/seo/SEO";
import { lazy, Suspense } from "react";

const SplashCursor = lazy(() => import("../components/reactbits/SplashCursor"));

export const Home = () => {
    return (
        <Layout>
            <SEO title="Anthony Benier | Product Designer & Engineer" />
            <Suspense fallback={null}>
                <SplashCursor />
            </Suspense>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Layout>
    );
};
