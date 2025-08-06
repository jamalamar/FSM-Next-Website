import Script from 'next/script';

interface BusinessStructuredDataProps {
  page?: 'home' | 'about' | 'contact' | 'portfolio';
}

export function BusinessStructuredData({ page = 'home' }: BusinessStructuredDataProps) {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fraternity Spirits México",
    "alternateName": "Fraternity Spirits",
    "description": "La mejor distribuidora de destilados premium en México. Importamos y distribuimos tequila, mezcal, whisky y ginebra de marcas exclusivas para restaurantes y bares.",
    "url": "https://fraternityspirits.com",
    "logo": "https://fraternityspirits.com/logos/FSlogo.png",
    "image": "https://fraternityspirits.com/logos/FSlogo.png",
    "telephone": "+52 55 5600 0509",
    "email": "contacto@fraternityspirits.com",
    "foundingDate": "2015",
    "founders": [
      {
        "@type": "Person",
        "name": "Raffaele Berardi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 de julio de 1859 No. 1056, Av. Leyes de Reforma 3a, Sección",
      "addressLocality": "Iztapalapa",
      "addressRegion": "Ciudad de México",
      "postalCode": "09310",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.3676",
      "longitude": "-99.0818"
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "México"
    },
    "industry": "Importación y Distribución de Destilados Premium",
    "naics": "424820",
    "sameAs": [
      "https://www.instagram.com/fraternityspiritsmx",
      "https://mx.linkedin.com/company/fraternity-spirits-mexico"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Destilados Premium",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Tequila Premium",
            "category": "Destilados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mezcal Artesanal",
            "category": "Destilados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Whisky Japonés",
            "category": "Destilados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Ginebra Premium",
            "category": "Destilados"
          }
        }
      ]
    },
    "knowsAbout": [
      "Destilados Premium",
      "Importación de Licores",
      "Distribución México",
      "Tequila",
      "Mezcal",
      "Whisky",
      "Ginebra",
      "Spirits"
    ],
    "makesOffer": {
      "@type": "Offer",
      "name": "Distribución de Destilados Premium",
      "description": "Servicios de importación y distribución de destilados premium para restaurantes, bares y hoteles en México",
      "areaServed": "México"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fraternity Spirits México",
    "alternateName": "Fraternity Spirits",
    "url": "https://fraternityspirits.com",
    "description": "Distribuidores de destilados premium en México",
    "inLanguage": "es-MX",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fraternityspirits.com/portafolio?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = page !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://fraternityspirits.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": page === 'about' ? 'Sobre Nosotros' : 
                page === 'contact' ? 'Contacto' :
                page === 'portfolio' ? 'Portafolio' : '',
        "item": `https://fraternityspirits.com/${
          page === 'about' ? 'sobre-nosotros' : 
          page === 'contact' ? 'contacto' :
          page === 'portfolio' ? 'portafolio' : ''
        }`
      }
    ]
  } : null;

  return (
    <>
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      {breadcrumbData && (
        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}
    </>
  );
}

export function ProductStructuredData() {
  const productCatalogData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo de Destilados Premium Fraternity Spirits",
    "description": "Catálogo completo de tequilas, mezcales, whiskies y ginebras premium distribuidos por Fraternity Spirits en México",
    "url": "https://fraternityspirits.com/portafolio",
    "numberOfItems": "15+",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Nobushi Blended Whisky",
        "brand": "Nobushi",
        "category": "Whisky Japonés",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Fraternity Spirits México"
          }
        }
      },
      {
        "@type": "Product",
        "name": "Mezcal Guerrero Maya",
        "brand": "Guerrero Maya",
        "category": "Mezcal Artesanal",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Fraternity Spirits México"
          }
        }
      }
    ]
  };

  return (
    <Script
      id="product-catalog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productCatalogData),
      }}
    />
  );
}