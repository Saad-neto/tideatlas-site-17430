import { Helmet } from 'react-helmet-async';
import type { City } from '@/data/cities';

interface SEOProps {
  city: City;
  type?: 'home' | 'city' | 'about' | 'privacy';
}

const SEO = ({ city, type = 'city' }: SEOProps) => {
  // Gera title otimizado para SEO
  const title = `Tábua de Marés ${city.name}/${city.stateCode} - Horários de Maré Alta e Baixa Hoje`;

  // Description otimizada com palavras-chave
  const description = `Consulte a tábua de marés de ${city.name}/${city.stateCode} (${city.state}) em tempo real. Previsão completa de maré alta e baixa para os próximos 7 dias. Melhor horário para pesca, surf e navegação.`;

  // Keywords relevantes
  const keywords = [
    `tábua de marés ${city.name}`,
    `maré ${city.name}`,
    `maré alta ${city.name}`,
    `maré baixa ${city.name}`,
    `tabela de marés ${city.stateCode}`,
    `horário maré ${city.name}`,
    `previsão marés ${city.state}`,
    'pesca',
    'surf',
    'navegação',
    'tábua marés Brasil'
  ].join(', ');

  // URL canônica
  const canonicalUrl = `https://tabuademares.com.br/tabuada-mares/${city.slug}`;

  // Open Graph image (pode ser customizada depois)
  const ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png';

  // Schema.org JSON-LD para rich snippets
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // WebSite schema
      {
        "@type": "WebSite",
        "@id": "https://tabuademares.com.br/#website",
        "url": "https://tabuademares.com.br/",
        "name": "Tábua de Marés Brasil",
        "description": "Consulte a tábua de marés de todas as principais cidades costeiras do Brasil",
        "inLanguage": "pt-BR"
      },
      // WebPage schema
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": {
          "@id": "https://tabuademares.com.br/#website"
        }
      },
      // Place schema (cidade)
      {
        "@type": "Place",
        "name": city.name,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": city.lat,
          "longitude": city.lon
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.stateCode,
          "addressCountry": "BR"
        }
      },
      // Organization schema
      {
        "@type": "Organization",
        "name": "Tábua de Marés Brasil",
        "url": "https://tabuademares.com.br/",
        "logo": {
          "@type": "ImageObject",
          "url": ogImage
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Tábua de Marés Brasil" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content={`BR-${city.stateCode}`} />
      <meta name="geo.placename" content={city.name} />
      <meta name="geo.position" content={`${city.lat};${city.lon}`} />
      <meta name="ICBM" content={`${city.lat}, ${city.lon}`} />

      {/* Language */}
      <meta httpEquiv="content-language" content="pt-br" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
