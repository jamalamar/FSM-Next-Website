import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { team, brands } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - La Mejor Distribuidora de Destilados Premium en México | Fraternity Spirits',
  description: 'Conoce la historia de la familia Berardi y Fraternity Spirits México. Desde 2015 somos líderes en importación y distribución de destilados premium: tequila, mezcal, whisky y ginebra para el mercado mexicano.',
  keywords: 'historia Fraternity Spirits México, familia Berardi destilados, distribuidora premium México historia, importadores tequila México, empresa familiar spirits México',
  openGraph: {
    title: 'Sobre Fraternity Spirits México - Distribuidores Premium desde 2015',
    description: 'La historia de la familia Berardi y su pasión por los destilados premium en México. Líderes en distribución para restaurantes y bares.',
    url: 'https://fraternityspiritsmexico.com/sobre-nosotros',
    images: ['/logos/FSlogo.png'],
  },
};


export default function SobreNosotrosPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="relative py-20 md:py-32 text-center overflow-hidden">
        {/* Premium background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Fraternity Spirits
              </span>
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Conectando las mejores marcas de destilados del mundo con los paladares más exigentes de México.
            </p>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="sticky top-8">
                <Image
                  src="/FSmap.jpg"
                  alt="Fraternity Spirits - Conectando destilados premium globalmente"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-300 shadow-lg"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Desde 2015
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Una Historia de{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                    Pasión
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="text-xl text-foreground font-medium">
                  Lo que comenzó como una visión familiar se ha convertido en una de las distribuidoras de destilados premium más respetadas de México.
                </p>
                
                <p>
                  Desde nuestros inicios, hemos mantenido un enfoque inquebrantable en la <strong className="text-primary">calidad sobre la cantidad</strong>. Cada marca que representamos es cuidadosamente seleccionada por su excelencia, historia y compromiso con la tradición destiladora.
                </p>
                
                <p>
                  Nuestro equipo familiar no solo importa destilados; curamos experiencias. Cada botella cuenta una historia, cada marca representa una tradición, y cada cliente se convierte en parte de nuestra comunidad de conocedores.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-foreground">
              La Familia{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Berardi
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tres generaciones unidas por la pasión por los destilados excepcionales y el compromiso con la excelencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={member.name} className="group relative border-0 shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.role} de Fraternity Spirits`}
                      width={400}
                      height={500}
                      className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-4">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <p className="text-primary font-semibold text-lg">{member.role}</p>
                  </div>
                  
                  <div className="mt-6 space-y-3 text-muted-foreground">
                    {member.name === 'Raffaele Berardi' && (
                      <p className="text-sm leading-relaxed">
                        Visionario fundador con más de una década de experiencia en el sector. Su pasión por descubrir destilados excepcionales ha establecido los cimientos de nuestra reputación.
                      </p>
                    )}
                    {member.name === 'Rafael Berardi' && (
                      <p className="text-sm leading-relaxed">
                        Lidera las operaciones diarias con un enfoque estratégico en el crecimiento sostenible y las relaciones comerciales de largo plazo.
                      </p>
                    )}
                    {member.name === 'Gianni Berardi' && (
                      <p className="text-sm leading-relaxed">
                        Especialista en construcción de marca y narrativas que conectan emocionalmente con nuestros clientes y socios comerciales.
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                        <span>Familia Berardi</span>
                      </div>
                      <div className="w-px h-3 bg-border"></div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500/60 rounded-full"></span>
                        <span>Fraternity Spirits</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Marcas de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Prestigio Mundial
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada marca en nuestro portafolio representa excelencia, tradición y la maestría de destiladores excepcionales
            </p>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{brands.length}+</div>
              <p className="text-muted-foreground">Marcas Premium</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Países de Origen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Años Distribuyendo</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Calidad Premium</p>
            </div>
          </div>
          
          {/* Brand Showcase */}
          <div className="bg-card/30 border border-primary/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
              {brands.map((brand, index) => (
                <div 
                  key={brand.name} 
                  className="group relative flex justify-center items-center p-6 rounded-2xl hover:bg-secondary/20 transition-all duration-500 hover:scale-105"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <Image
                    src={brand.logoUrl}
                    alt={`${brand.name} - Distribuido por Fraternity Spirits`}
                    width={160}
                    height={80}
                    className="object-contain h-16 w-auto filter brightness-0 invert-[0.7] group-hover:filter-none transition-all duration-500"
                  />
                  
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Brand Origins */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="text-center mb-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Orígenes Diversos, Calidad Unificada
                </h3>
                <p className="text-muted-foreground text-sm">
                  Destilados cuidadosamente seleccionados de los mejores productores del mundo
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-full">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Japón</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>México</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-full">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Grecia</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-full">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>España</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-full">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              ¿Interesado en conocer más sobre nuestras marcas premium?
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a 
                href="/portafolio" 
                className="button-premium inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300"
              >
                Ver Portafolio Completo
                <span className="ml-2">→</span>
              </a>
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-3 border border-primary/30 text-foreground font-semibold rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
