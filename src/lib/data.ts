export type Spirit = {
  id: number;
  name: string;
  category: 'Tequila' | 'Mezcal' | 'Whisky' | 'Ron' | 'Ginebra';
  brand: string;
  origin: string;
  tastingNotes: string;
  imageUrl: string;
};

export type Brand = {
  name: string;
  logoUrl: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

export const spirits: Spirit[] = [
  {
    id: 1,
    name: 'Tequila Blanco "El Despertar"',
    category: 'Tequila',
    brand: 'Casa Agave Real',
    origin: 'Jalisco, México',
    tastingNotes: 'Notas cítricas y herbales, con un final suave y fresco de agave cocido.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 2,
    name: 'Mezcal Joven "Alma de Oaxaca"',
    category: 'Mezcal',
    brand: 'Espíritus Ancestrales',
    origin: 'Oaxaca, México',
    tastingNotes: 'Ahumado sutil, toques de fruta tropical madura y un picor terroso característico.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 3,
    name: 'Whisky de Malta "Roble Dorado"',
    category: 'Whisky',
    brand: 'Destilería del Norte',
    origin: 'Highlands, Escocia',
    tastingNotes: 'Miel, vainilla y un toque de roble especiado, con un final largo y cálido.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 4,
    name: 'Ron Añejo "Tesoro del Caribe"',
    category: 'Ron',
    brand: 'Cañaveral Mágico',
    origin: 'Barbados',
    tastingNotes: 'Caramelo, plátano maduro y notas de coco tostado. Cuerpo completo y sedoso.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 5,
    name: 'Ginebra Botánica "Jardín Secreto"',
    category: 'Ginebra',
    brand: 'El Alambique Inglés',
    origin: 'Londres, Inglaterra',
    tastingNotes: 'Enebro predominante, con notas florales de lavanda y un toque cítrico de piel de naranja.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 6,
    name: 'Tequila Reposado "Sol de Jalisco"',
    category: 'Tequila',
    brand: 'Casa Agave Real',
    origin: 'Jalisco, México',
    tastingNotes: 'Agave cocido, caramelo y un toque de canela. Suave y equilibrado.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 7,
    name: 'Mezcal Artesanal "Espadín Capa"',
    category: 'Mezcal',
    brand: 'Espíritus Ancestrales',
    origin: 'Oaxaca, México',
    tastingNotes: 'Notas herbales, cítricas y un fondo ahumado ligero. Ideal para coctelería.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 8,
    name: 'Whisky Americano "Corazón de Maíz"',
    category: 'Whisky',
    brand: 'Destilería del Norte',
    origin: 'Kentucky, USA',
    tastingNotes: 'Dulce de maíz, vainilla, y un toque de cuero y tabaco. Robusto y complejo.',
    imageUrl: 'https://placehold.co/600x800.png',
  },
];

export const brands: Brand[] = [
  { name: 'Casa Agave Real', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Espíritus Ancestrales', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Destilería del Norte', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Cañaveral Mágico', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'El Alambique Inglés', logoUrl: 'https://placehold.co/200x100.png' },
];

export const team: TeamMember[] = [
  {
    name: 'Juan Pérez',
    role: 'Director General',
    imageUrl: 'https://placehold.co/400x400.png',
  },
  {
    name: 'María García',
    role: 'Directora de Marcas',
    imageUrl: 'https://placehold.co/400x400.png',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de Ventas',
    imageUrl: 'https://placehold.co/400x400.png',
  },
];

export const spiritCategories = ['Tequila', 'Mezcal', 'Whisky', 'Ron', 'Ginebra'];
export const spiritBrands = ['Casa Agave Real', 'Espíritus Ancestrales', 'Destilería del Norte', 'Cañaveral Mágico', 'El Alambique Inglés'];
