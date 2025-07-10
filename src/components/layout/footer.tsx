import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Distribuidora de destilados premium.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Navegación</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/portafolio" className="text-muted-foreground hover:text-primary transition-colors">Portafolio</Link></li>
              <li><Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Síguenos</h3>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Fraternity Spirits. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
