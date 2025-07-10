import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { brands } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Botellas de destilados en un bar"
          fill
          className="object-cover"
          priority
          data-ai-hint="spirits bar background"
        />
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            El Arte de los Destilados Premium
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-8">
            Fraternity Spirits te invita a explorar un mundo de sabores únicos y tradiciones ancestrales a través de nuestra curada selección.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/portafolio">
              Descubre Nuestro Portafolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calidad y Prestigio
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            Nos enorgullece representar a marcas que son sinónimo de excelencia. Cada una con una historia, un terroir y un proceso que las hace excepcionales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Selección Exclusiva</h3>
              <p className="text-muted-foreground">Solo los mejores destilados de México y el mundo.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Conocimiento Profundo</h3>
              <p className="text-muted-foreground">Apasionados por la historia y el arte detrás de cada botella.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Servicio Inigualable</h3>
              <p className="text-muted-foreground">Asesoría y atención personalizada para nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nuestras Marcas
          </h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {brands.map((brand) => (
                <div key={brand.name} className="flex justify-center">
                  <Image
                    src={brand.logoUrl}
                    alt={`Logo de ${brand.name}`}
                    width={150}
                    height={75}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    data-ai-hint="brand logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
