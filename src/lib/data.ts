export type Spirit = {
  id: number;
  name: string;
  category: 'Tequila' | 'Mezcal' | 'Whisky' | 'Ron' | 'Ginebra' | 'Vermouth' | 'Seltzer' | 'Vodka' | 'Spirit' | 'Liqueur';
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
  {
    id: 9,
    name: 'Gin MG',
    category: 'Ginebra',
    brand: 'Gin MG',
    origin: 'España',
    tastingNotes: "Reflejo de la herencia de elaboración de ginebra de España, elaborada desde 1940 por Manuel Giró, mostrando calidad artesanal y armonía botánica.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 10,
    name: 'Tovaritch Vodka',
    category: 'Vodka',
    brand: 'Tovaritch!',
    origin: 'Rusia',
    tastingNotes: "Arraigado en una receta noble desde la era de la emperatriz Catalina II, muestra la excelencia del vodka de Rusia.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 11,
    name: 'Macho Silvestre',
    category: 'Mezcal',
    brand: 'Mezcal Guerrero Maya', // Using existing brand as per instructions
    origin: 'Oaxaca, México',
    tastingNotes: "Un mezcal artesanal producido en México, con denominación de origen en el estado de Oaxaca, y un proceso de doble destilación en alambiques de cobre.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 12,
    name: 'Kensei',
    category: 'Whisky',
    brand: 'Kensei',
    origin: 'Japón',
    tastingNotes: "El whisky japonés Kensei presenta una colección que encarna la excelencia del whisky de Japón.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 13,
    name: 'Zaya Gran Reserva',
    category: 'Ron',
    brand: 'Zaya',
    origin: 'Trinidad y Tobago', // Common origin for Zaya
    tastingNotes: "Zaya Gran Reserva realza los cócteles con su perfil añejo, suave y aromático.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 14,
    name: 'Saints Hard Seltzer',
    category: 'Seltzer',
    brand: 'Hard Saints',
    origin: 'México',
    tastingNotes: "Saints Hard Seltzer ofrece una opción alcohólica crujiente y ligera con sabores naturales.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 15,
    name: 'Templeton Rye',
    category: 'Whisky',
    brand: 'Templeton',
    origin: "Iowa, USA",
    tastingNotes: "Templeton Rye presenta whiskies premium arraigados en las ricas tradiciones de Iowa.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
  {
    id: 16,
    name: 'Otto\'s',
    category: 'Vermouth',
    brand: 'Otto\'s Athens Vermouth',
    origin: 'Grecia',
    tastingNotes: "El vermut Otto's Athens está elaborado con vino griego y productos botánicos para un sabor distintivo.",
    imageUrl: 'https://placehold.co/600x800.png',
  },
];

export const brands: Brand[] = [
  { name: 'Kensei', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Templeton', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Conde de Cuba', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Zaya', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Carlo Alberto', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Otto\'s Athens Vermouth', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Gin MG', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Hard Saints', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Nobushi', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Tovaritch!', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Mezcal Guerrero Maya', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Chilcuague', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Seventeen', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Skinos', logoUrl: 'https://placehold.co/200x100.png' },
  { name: 'Mezcal Guerrero Maya', logoUrl: 'https://placehold.co/200x100.png' },
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

export const spiritCategories = ['Tequila', 'Mezcal', 'Whisky', 'Ron', 'Ginebra', 'Vermouth', 'Seltzer', 'Vodka', 'Spirit', 'Liqueur'];
export const spiritBrands = [
  'Kensei',
  'Templeton',
  'Conde de Cuba',
  'Zaya',
  'Carlo Alberto',
  'Otto\'s Athens Vermouth',
  'Gin MG',
  'Hard Saints',
  'Nobushi',
  'Tovaritch!',
  'Mezcal Guerrero Maya',
  'Chilcuague',
  'Seventeen',
  'Skinos',
  'Casa Agave Real', 
  'Espíritus Ancestrales', 
  'Destilería del Norte', 
  'Cañaveral Mágico', 
  'El Alambique Inglés'
];
