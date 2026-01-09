
import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import SplashCursor from "../components/reactbits/SplashCursor";
import { SEO } from "../components/seo/SEO";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Anthony Benier | Product Designer & Engineer" />
            <SplashCursor />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Layout>
    );
};
