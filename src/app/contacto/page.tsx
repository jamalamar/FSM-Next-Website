import { ContactForm } from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Fraternity Spirits',
  description: 'Ponte en contacto con Fraternity Spirits. Estamos aquí para responder tus preguntas y atender tus necesidades.',
};

export default function ContactoPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="py-16 md:py-24 text-center bg-secondary/50">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Ponte en Contacto</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o quieres colaborar con nosotros? Nos encantaría saber de ti.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6">Nuestra Oficina</h2>
            <p>
              Visítanos o envíanos un correo. Nuestro equipo de expertos está listo para asesorarte y ofrecerte la mejor selección de destilados.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span>12 de julio de 1859 No. 1056, Av. Leyes de Reforma 3a, Sección Alc, Iztapalapa, 09310 Ciudad de México, CDMX</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <a href="mailto:contacto@fraternityspirits.com" className="hover:text-primary no-underline">contacto@fraternityspirits.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <a href="tel:+525512345678" className="hover:text-primary no-underline">+52 55 5600 0509</a>
              </div>
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
