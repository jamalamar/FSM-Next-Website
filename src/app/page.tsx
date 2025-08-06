import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote, Award, Users, GraduationCap, Truck } from 'lucide-react';
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
      <section className="relative h-[85vh] md:h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 z-10" />
        
        {/* Premium accent elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 opacity-30 hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/30 rotate-12 opacity-40 hidden lg:block" />
        
        <Image
          src="https://images.pexels.com/photos/28180102/pexels-photo-28180102.jpeg"
          alt="Botellas de destilados en un bar"
          fill
          className="object-cover"
          priority
          data-ai-hint="spirits bar background"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          {/* Trust indicator bar above headline */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-primary/80 text-sm font-medium">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              Desde 2015
            </span>
            <span className="hidden md:flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Marcas Globales
            </span>
            <span className="hidden md:flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Conocedores Locales
            </span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
            <span className="block">El Arte de los</span>
            <span className="block text-primary">Destilados Premium</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Conectamos marcas globales excepcionales con conocedores locales, 
            curando una experiencia única en destilados premium para México
          </p>
          
          {/* Dual CTA with different priorities */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-200">
              <Link href="/portafolio">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 backdrop-blur-sm">
              <Link href="/contacto">
                Solicitar Cotización
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra Pasión por la Excelencia
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Nuestra dedicación a las bebidas espirituosas e innovación nos ha convertido 
              en el puente entre tradiciones destilatorias excepcionales y conocedores mexicanos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Apasionada Selección</h3>
              <p className="text-muted-foreground mb-4">Seleccionamos cada destilado por su calidad, historia y carácter excepcional</p>
              <div className="text-sm text-primary font-medium">Marcas globales selectas</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Innovación y Tradición</h3>
              <p className="text-muted-foreground mb-4">Celebramos las tradiciones destilatorias mientras abrazamos la innovación</p>
              <div className="text-sm text-primary font-medium">10+ años de experiencia</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Truck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Experiencia Curada</h3>
              <p className="text-muted-foreground mb-4">Ofrecemos una experiencia única para verdaderos entusiastas y conocedores</p>
              <div className="text-sm text-primary font-medium">Calidad garantizada</div>
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
                    <Card key={spirit.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group bg-card border-border/20 flex flex-col" style={{animationDelay: `${index * 150}ms`}}>
                        <CardHeader className="p-0 relative h-96 overflow-hidden">
                            <Image
                                src={spirit.imageUrl}
                                alt={`Botella de ${spirit.name}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                data-ai-hint="spirit bottle"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-secondary/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-secondary-foreground font-medium">
                                    Premium Selection
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                            <div className="flex justify-between items-start mb-3">
                                <p className="text-sm text-primary font-semibold uppercase tracking-wide">{spirit.brand}</p>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">750ml</p>
                                </div>
                            </div>
                            <CardTitle className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                                {spirit.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">Destilado excepcional con notas únicas y carácter distintivo</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Link href="/portafolio">
                                    Ver Detalles
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
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

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Nuestra Trayectoria desde 2015
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground font-medium">Años Curando Experiencias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Global</div>
              <div className="text-muted-foreground font-medium">Alcance de Marcas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Local</div>
              <div className="text-muted-foreground font-medium">Conexión con Conocedores</div>
            </div>
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
      
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Sophisticated background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/30"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.2'%3E%3Cpath d='M50 50c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/30 rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/20 rotate-45 opacity-40" />
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute top-1/3 right-16 w-16 h-16 bg-primary/15 rounded-full blur-lg" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Eleva tu </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Carta de Bebidas
              </span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Descubre la diferencia de trabajar con distribuidores apasionados. 
              Conectamos a conocedores con destilados excepcionales que celebran la tradición y abrazan la innovación.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Calidad Premium</h3>
                <p className="text-sm text-muted-foreground">Marcas cuidadosamente seleccionadas</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Asesoría Experta</h3>
                <p className="text-sm text-muted-foreground">Acompañamiento personalizado</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Distribución Confiable</h3>
                <p className="text-sm text-muted-foreground">Logística eficiente y segura</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 transition-all duration-300">
                <Link href="/portafolio">
                  Explorar Catálogo Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-4 text-lg backdrop-blur-sm">
                <Link href="/contacto">Hablar con Especialista</Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Importamos
              </span>
              <div className="w-px h-4 bg-border"></div>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Asesoramos
              </span>
              <div className="w-px h-4 bg-border"></div>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Distribuimos
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
