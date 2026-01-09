import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title,
    description = "Senior Product Designer & Engineer bridging the gap between design and engineering.",
    image = "/preview.png",
    url = "https://anthonybenier.vercel.app"
}: SEOProps) => {
    const fullUrl = url.startsWith('http') ? url : `https://anthonybenier.vercel.app${url}`;
    const fullImage = image.startsWith('http') ? image : `https://anthonybenier.vercel.app${image}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
};
