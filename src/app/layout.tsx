import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Fraternity Spirits | La Mejor Distribuidora de Alcohol Premium en México',
  description: 'Fraternity Spirits México - Líder en distribución de destilados premium. Tequila, Mezcal, Whisky japonés y más. Marcas exclusivas con entrega en todo México. Calidad garantizada.',
  keywords: ['distribuidora alcohol México', 'destilados premium México', 'tequila premium', 'mezcal artesanal', 'whisky japonés México', 'distribución bebidas alcohólicas', 'Fraternity Spirits', 'importadora licores México', 'bebidas premium CDMX', 'mayorista alcohol México'],
  authors: [{ name: 'Fraternity Spirits México' }],
  creator: 'Fraternity Spirits México',
  publisher: 'Fraternity Spirits México',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fraternity Spirits | La Mejor Distribuidora de Alcohol Premium en México',
    description: 'Distribuidora líder de destilados premium en México. Marcas exclusivas de tequila, mezcal, whisky y más. Entrega nacional.',
    url: 'https://fraternityspiritsmexico.com',
    siteName: 'Fraternity Spirits México',
    images: [
      {
        url: '/logos/FSlogo.png',
        width: 1200,
        height: 630,
        alt: 'Fraternity Spirits México - Distribuidora Premium',
      }
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fraternity Spirits | Distribuidora Premium México',
    description: 'Tu socio confiable en distribución de destilados premium. Marcas exclusivas, servicio excepcional.',
    images: ['/logos/FSlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fraternityspiritsmexico.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
