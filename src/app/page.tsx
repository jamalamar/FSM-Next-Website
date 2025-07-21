import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { brands, spirits } from '@/lib/data';

const featuredSpirits = spirits.slice(0, 3);
const testimonials = [
    {
        quote: "La selección de Fraternity Spirits es inigualable. Siempre encuentro joyas únicas para mi restaurante. Su conocimiento y servicio son de primera.",
        name: "Ana Sofía Rey",
        role: "Sommelier, Restaurante Contramar"
    },
    {
        quote: "Trabajar con Fraternity ha elevado nuestra oferta de coctelería. Las marcas que manejan son de una calidad excepcional y muy apreciadas por nuestros clientes.",
        name: "Javier Luna",
        role: "Jefe de Barra, Limantour"
    },
    {
        quote: "Desde que colaboramos con ellos, hemos tenido acceso a destilados que antes eran imposibles de conseguir en México. Son un socio estratégico para nosotros.",
        name: "Elena Marcos",
        role: "Gerente de Compras, Grupo Hotelero"
    }
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.pexels.com/photos/28180102/pexels-photo-28180102.jpeg"
          alt="Botellas de destilados en un bar"
          fill
          className="object-cover"
          priority
          data-ai-hint="spirits bar background"
        />
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center animate-fade-in-up duration-1000">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            El Arte de los Destilados Premium
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-8">
            Fraternity Spirits te invita a explorar un mundo de sabores únicos y tradiciones a través de nuestra curada selección.
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
        <div className="container mx-auto px-4 text-center animate-fade-in-up duration-1000 delay-300">
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
        <div className="container mx-auto px-4 animate-fade-in-up duration-1000 delay-500">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Destilados Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredSpirits.map((spirit, index) => (
                    <Card key={spirit.id} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <CardHeader className="p-0 relative h-80">
                            <Image
                                src={spirit.imageUrl}
                                alt={`Botella de ${spirit.name}`}
                                fill
                                className="object-cover"
                                data-ai-hint="spirit bottle"
                            />
                        </CardHeader>
                        <CardContent className="p-4 flex-grow flex flex-col">
                            <p className="text-sm text-primary font-semibold">{spirit.brand}</p>
                            <CardTitle className="text-lg font-bold text-foreground mt-1 flex-grow">{spirit.name}</CardTitle>
                        </CardContent>
                        <div className="p-4 pt-0">
                           <Button asChild variant="outline" className="w-full">
                                <Link href="/portafolio">Ver más</Link>
                           </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 animate-fade-in-up duration-1000 delay-700">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-secondary/30 flex flex-col justify-between p-6 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="p-0 flex flex-col items-start">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 animate-fade-in-up duration-1000 delay-900">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nuestras Marcas
          </h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {brands.slice(0, 10).map((brand) => (
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
      
      <section className="py-20 md:py-32 bg-primary">
         <div className="container mx-auto px-4 text-center animate-fade-in-up duration-1000 delay-1000">
             <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                ¿Listo para Descubrir?
             </h2>
             <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">
                Explora nuestro portafolio completo y encuentra la próxima joya para tu colección o menú. Nuestro equipo está listo para asesorarte.
             </p>
             <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold">
                    <Link href="/portafolio">Ver Portafolio</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Link href="/contacto">Contáctanos</Link>
                </Button>
            </div>
         </div>
      </section>

    </div>
  );
}
