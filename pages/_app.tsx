import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Additional structured data for enhanced SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Influential Marketing Firm",
    image: "https://www.influentialmarketing.in/images/logo.png",
    description:
      "Leading marketing firm in Kochi, Kerala, offering comprehensive marketing solutions for businesses",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marketing Solutions Center",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682xxx",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9312,
      longitude: 76.2673,
    },
    telephone: "+91-XXXXXXXXXX",
    url: "https://www.influentialmarketing.in",
    priceRange: "$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 9.9312,
        longitude: 76.2673,
      },
      geoRadius: "50 km",
    },
    knowsAbout: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Creation",
      "SEO Services",
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Trendingly India -Influencer Marketing Solutions in Kochi, Kerala
        </title>
        <meta
          name="description"
          content="Expert marketing solutions in Kochi. We provide top-tier digital marketing, social media marketing, content creation, and SEO services across Kerala."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Influential Marketing Firm - Marketing Solutions in Kochi"
        />
        <meta
          property="og:description"
          content="Expert marketing solutions in Kochi. We provide top-tier digital marketing, social media marketing, content creation, and SEO services across Kerala."
        />
        <meta
          property="og:image"
          content="https://www.influentialmarketing.in/images/logo.png"
        />
        <meta property="og:url" content="https://www.influentialmarketing.in" />
        <meta
          property="business:contact_data:street_address"
          content="Marketing Solutions Center, Kochi"
        />
        <meta property="business:contact_data:locality" content="Kochi" />
        <meta property="business:contact_data:region" content="Kerala" />
        <meta property="business:contact_data:country_name" content="India" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Influential Marketing Firm - Marketing Solutions in Kochi"
        />
        <meta
          name="twitter:description"
          content="Expert marketing solutions in Kochi. We provide top-tier digital marketing, social media marketing, content creation, and SEO services across Kerala."
        />
        <meta
          name="twitter:image"
          content="https://www.influentialmarketing.in/images/logo.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://www.influentialmarketing.in${router.pathname}`}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi" />
        <meta name="geo.position" content="9.9312;76.2673" />
        <meta name="ICBM" content="9.9312, 76.2673" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
