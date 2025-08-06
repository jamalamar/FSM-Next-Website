import Script from 'next/script';

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué tipos de destilados distribuye Fraternity Spirits en México?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fraternity Spirits México distribuye una amplia gama de destilados premium incluyendo tequila artesanal, mezcal tradicional, whisky japonés, ginebra europea, vermouth y licores especializados. Todas nuestras marcas son cuidadosamente seleccionadas por su calidad excepcional."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Atienden restaurantes y bares en toda la República Mexicana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Fraternity Spirits México ofrece distribución nacional a restaurantes, bares, hoteles y establecimientos especializados en toda la República Mexicana. Contamos con logística especializada para garantizar la calidad y puntualidad en las entregas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Desde cuándo operan como distribuidores de destilados premium en México?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fraternity Spirits México opera desde 2015 como distribuidores especializados en destilados premium. Con más de 10 años de experiencia, nos hemos consolidado como líderes en la importación y distribución de marcas exclusivas en el mercado mexicano."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué marcas internacionales distribuyen en México?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Distribuimos marcas premium de prestigio internacional como Nobushi (whisky japonés), Guerrero Maya (mezcal), Otto's (vermouth griego), Gin MG (ginebra española), El Macho Silvestre (mezcal), Skinos (licor griego) y Busca Vida (aperitivo brasileño), entre otras marcas exclusivas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo solicitar una cotización para mi restaurante o bar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes contactarnos a través de nuestro formulario en línea, llamando al +52 55 5600 0509, o enviando un correo a contacto@fraternityspirits.com. Nuestro equipo especializado te proporcionará una cotización personalizada y asesoría profesional para tu establecimiento."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}