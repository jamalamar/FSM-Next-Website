import { spirits, spiritCategories, spiritBrands } from '@/lib/data';
import PortfolioClient from './portfolio-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio | Fraternity Spirits',
  description: 'Explora nuestro portafolio de tequilas, mezcales, whiskies y más. Filtra por categoría y marca para encontrar tu próximo destilado favorito.',
};

export default function PortafolioPage() {
  // In a real app, this data would be fetched from a database or CMS.
  const allSpirits = spirits;

  return (
    <div className="bg-background text-foreground">
      <header className="py-16 md:py-24 text-center bg-secondary/50">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestro Portafolio</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Una colección curada de los mejores destilados, seleccionados por su calidad, historia y sabor excepcional.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <PortfolioClient
          spirits={allSpirits}
          categories={spiritCategories}
          brands={spiritBrands}
        />
      </main>
    </div>
  );
}
