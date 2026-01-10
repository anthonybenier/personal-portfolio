import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/seo/SEO";
import { AntigravityHero } from "../components/sections/AntigravityHero";
import { AntigravityAbout } from "../components/sections/AntigravityAbout";
import { AntigravityProjects } from "../components/sections/AntigravityProjects";
import { AntigravityContact } from "../components/sections/AntigravityContact";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Anthony Benier | Product Designer & Engineer" />

            <main className="w-full bg-[#050505]">
                <AntigravityHero />
                <div className="relative z-10 bg-[#050505]">
                    <AntigravityAbout />
                    <AntigravityProjects />
                    <AntigravityContact />
                </div>
            </main>
        </Layout>
    );
};
