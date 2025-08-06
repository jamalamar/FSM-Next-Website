import { ContactForm } from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Distribuidor de Destilados Premium México | Fraternity Spirits',
  description: 'Contáctanos para distribución de destilados premium en México. Atendemos restaurantes, bares y hoteles en CDMX. Cotizaciones personalizadas y asesoría especializada en tequila, mezcal y whisky.',
  keywords: 'contacto distribuidor destilados México, cotización spirits México, proveedor licores restaurantes, distribuidor tequila CDMX, importador whisky México contacto',
  openGraph: {
    title: 'Contacto - Distribuidor Premium de Destilados México',
    description: 'Contáctanos para distribución especializada de destilados premium. Atendemos restaurantes y bares en toda la República Mexicana.',
    url: 'https://fraternityspiritsmexico.com/contacto',
    images: ['/logos/FSlogo.png'],
  },
};

export default function ContactoPage() {
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
            <span className="text-foreground">Ponte en </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Contacto
            </span>
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Desde 2015, conectamos a conocedores con destilados excepcionales. 
            Nuestro equipo de expertos está listo para crear una experiencia única para ti.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6">Nuestra Oficina</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Visítanos o envíanos un correo. Estamos listos para compartir nuestra experiencia y conectarte con destilados excepcionales 
              que celebran la tradición y abrazan la innovación.
            </p>
            
            <div className="space-y-6">
              <div className="group p-4 rounded-lg border border-border/50 hover:border-border transition-all duration-200 hover:bg-card/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      12 de julio de 1859 No. 1056, Av. Leyes de Reforma 3a, Sección Alc, Iztapalapa, 09310 Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-lg border border-border/50 hover:border-border transition-all duration-200 hover:bg-card/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                    <a 
                      href="mailto:contacto@fraternityspirits.com" 
                      className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
                    >
                      contacto@fraternityspirits.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-lg border border-border/50 hover:border-border transition-all duration-200 hover:bg-card/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Teléfono</h3>
                    <a 
                      href="tel:+525512345678" 
                      className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
                    >
                      +52 55 5600 0509
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-border/30">
              <h3 className="font-semibold text-foreground text-sm mb-2">Horarios de Atención</h3>
              <p className="text-sm text-muted-foreground">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Respuesta a emails: Dentro de 24 horas
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
