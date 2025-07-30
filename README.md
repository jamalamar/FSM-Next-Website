# Fraternity Spirits México - Sitio Web Oficial

Sitio web corporativo para Fraternity Spirits, la distribuidora líder de destilados premium en México.

## 🥃 Descripción

Fraternity Spirits México es una empresa especializada en la distribución de bebidas alcohólicas premium, con un portafolio exclusivo que incluye tequila, mezcal, whisky japonés, ginebra, vermouth y más. Este sitio web presenta nuestro catálogo completo y facilita el contacto con clientes potenciales.

## 🚀 Características

- **Página Principal:** Hero section impactante con llamada a la acción
- **Catálogo de Productos:** Portfolio completo con sistema de filtrado por categoría y marca
- **Sobre Nosotros:** Información corporativa, equipo directivo y marcas representadas
- **Contacto:** Formulario de contacto directo con validación
- **SEO Optimizado:** Metadata completa para posicionamiento en México
- **Diseño Responsivo:** Adaptado para todos los dispositivos
- **Modo Oscuro:** Interfaz elegante con tema oscuro predeterminado

## 🛠️ Tecnologías

- **Framework:** Next.js 14+ con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Imágenes:** Next.js Image Optimization
- **Formularios:** React Hook Form con validación
- **Hosting:** Optimizado para Vercel

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar build de producción
npm start
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/              # Rutas y páginas (App Router)
├── components/       # Componentes reutilizables
│   ├── layout/      # Header, Footer
│   ├── sections/    # Secciones de páginas
│   └── ui/          # Componentes de UI (shadcn)
├── lib/             # Utilidades y datos
│   └── data.ts      # Catálogo de productos y marcas
└── public/          # Assets estáticos
    ├── logos/       # Logos de marcas
    ├── favicon/     # Favicon del sitio
    └── *.png        # Imágenes de productos
```

## 🎨 Personalización

### Actualizar Productos
Editar `src/lib/data.ts` para agregar o modificar productos en el catálogo.

### Cambiar Colores
Modificar las variables CSS en `src/app/globals.css` para ajustar la paleta de colores.

### SEO y Metadata
Actualizar `src/app/layout.tsx` para modificar títulos, descripciones y metadata SEO.

## 📱 Páginas

- `/` - Página principal
- `/portafolio` - Catálogo completo de productos
- `/nosotros` - Información corporativa
- `/contacto` - Formulario de contacto

## 🌐 Idioma

Todo el sitio está en español mexicano, optimizado para el mercado local.

## 📄 Licencia

© 2025 Fraternity Spirits México. Todos los derechos reservados.
