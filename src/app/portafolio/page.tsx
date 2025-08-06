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
      <header className="py-16 md:py-24 text-center relative overflow-hidden">
        {/* Premium background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Nuestro </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Portafolio
            </span>
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Desde 2015, hemos seleccionado apasionadamente esta colección de destilados excepcionales, 
            curando cada marca por su calidad, tradición e innovación para conocedores mexicanos.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">{allSpirits.length}</div>
              <div className="text-sm text-muted-foreground">Destilados</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">{spiritCategories.length}</div>
              <div className="text-sm text-muted-foreground">Categorías</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">{spiritBrands.length}</div>
              <div className="text-sm text-muted-foreground">Marcas</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">9</div>
              <div className="text-sm text-muted-foreground">Países</div>
            </div>
          </div>
        </div>

        <PortfolioClient
          spirits={allSpirits}
          categories={spiritCategories}
          brands={spiritBrands}
        />
      </main>
    </div>
  );
}
