import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { team, brands } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Fraternity Spirits',
  description: 'Conoce la historia, el equipo y los valores de Fraternity Spirits, tu distribuidora de confianza en destilados premium.',
};


export default function SobreNosotrosPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="py-16 md:py-24 text-center bg-secondary/50">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Sobre Fraternity Spirits</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Conectando a los conocedores con los mejores destilados del mundo.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/800x600.png"
              alt="Equipo de Fraternity Spirits en una reunión"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
              data-ai-hint="team meeting professional"
            />
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-4">Nuestra Pasión</h2>
            <p>
              Fraternity Spirits México es un negocio familiar dedicado a la importación y distribución de destilados premium. Nuestra misión es conectar marcas de prestigio mundial con los paladares más exigentes de México, creando un puente entre la tradición y la innovación.
            </p>
            <p>
              Nos enfocamos en la calidad, la autenticidad y la celebración de las tradiciones destiladoras. Nos hemos consolidado como un actor clave en la escena de bebidas premium del país, ofreciendo una experiencia curada y única para verdaderos entusiastas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Conoce a Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-lg overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-80"
                    data-ai-hint="professional headshot"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                  <p className="text-primary font-semibold mt-1">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Marcas que Confían en Nosotros
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
