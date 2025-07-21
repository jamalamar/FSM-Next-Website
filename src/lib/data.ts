export type Spirit = {
  id: number;
  name: string;
  category: 'Tequila' | 'Mezcal' | 'Whisky' | 'Ron' | 'Ginebra' | 'Vermouth' | 'Seltzer' | 'Vodka' | 'Spirit' | 'Liqueur' | 'Brandy' | 'Cocktail' | 'Aperitivo';
  brand: string;
  origin: string;
  tastingNotes: string;
  imageUrl: string;
  alcoholVolume?: string;
  presentation?: string;
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
    name: 'Nobushi Blended Whisky',
    category: 'Whisky',
    brand: 'Nobushi',
    origin: 'Japón',
    tastingNotes: "Nariz: Notas de flores y frutas frescas, especias y ligeras notas de barricas. Paladar: Afrutado y de cuerpo completo, se connotan sabores de especias de invierno y ligeros toques de caramelo y vainilla, así como una percepción redonda de frutos. Final: Largo, afrutado, especias y roble.",
    imageUrl: '/FSMproduct1.png',
    alcoholVolume: '40%',
    presentation: '750 ml'
  },
  {
    id: 2,
    name: 'Nobushi Pure Malt Whisky',
    category: 'Whisky',
    brand: 'Nobushi',
    origin: 'Japón',
    tastingNotes: "Nariz: Nueces calientes mezcladas y pasas. Paladar: Vainilla con almendras y a especia fresca. Final: Largo y picante.",
    imageUrl: '/FSMproduct2.png',
    alcoholVolume: '46.4%',
    presentation: '700 ml'
  },
  {
    id: 3,
    name: 'Tequila Rosaluz Cristalino',
    category: 'Tequila',
    brand: 'Rosaluz',
    origin: 'Jalisco, México',
    tastingNotes: "Inspirado en las aguas más profundas y esmeralda más allá de la orilla. Cristalino es un tequila de notable pureza y claridad. El tono verde refleja la renovación y la serena fuerza de las profundidades del océano, perfecto para un disfrute tranquilo y consciente.",
    imageUrl: '/FSMproduct3.png',
    alcoholVolume: '40%',
    presentation: '700ml'
  },
  {
    id: 4,
    name: 'Tequila Rosaluz Blanco',
    category: 'Tequila',
    brand: 'Rosaluz',
    origin: 'Jalisco, México',
    tastingNotes: "Una expresión vibrante del océano claro y bañado por el sol, Blanco encarna la frescura y la claridad. El tono azul Tiffany refleja la superficie tranquila del mar y el brillo del cielo al mediodía, convirtiéndolo en el compañero ideal para momentos que se sienten llenos de vida y posibilidades.",
    imageUrl: '/FSMproduct4.png',
    alcoholVolume: '40%',
    presentation: '700ml'
  },
  {
    id: 5,
    name: 'Tequila Rosaluz Reposado',
    category: 'Tequila',
    brand: 'Rosaluz',
    origin: 'Jalisco, México',
    tastingNotes: "Reposado refleja la calidez y el resplandor del final de la tarde, cuando el sol proyecta una luz dorada. Esta expresión de tono ámbar captura la energía y el calor del comienzo de la noche, impregnando cada sorbo con el espíritu de la transformación, mientras el día comienza a fundirse con la noche.",
    imageUrl: '/FSMproduct5.png',
    alcoholVolume: '40%',
    presentation: '700ml'
  },
  {
    id: 6,
    name: 'Tequila Rosaluz Añejo',
    category: 'Tequila',
    brand: 'Rosaluz',
    origin: 'Jalisco, México',
    tastingNotes: "Añejo honra los tonos intensos y majestuosos del atardecer, cuando el cielo se transforma en matices más profundos. Con su elegante botella color púrpura, Añejo está diseñado para momentos que invitan a la reflexión y la conexión, encarnando la riqueza del anochecer y la profundidad de la belleza natural.",
    imageUrl: '/FSMproduct6.png',
    alcoholVolume: '40%',
    presentation: '700ml'
  },
  {
    id: 7,
    name: 'Tequila Rosaluz Rosado',
    category: 'Tequila',
    brand: 'Rosaluz',
    origin: 'Jalisco, México',
    tastingNotes: "Rosado es el corazón de Rosaluz, la culminación de un día costero perfecto, capturado en un delicado cristal rosado con base de madera. Esta expresión representa el cálido abrazo del atardecer, ofreciendo una experiencia lujosa y con arraigo, tan elegante como atemporal.",
    imageUrl: '/FSMproduct7.png',
    alcoholVolume: '40%',
    presentation: '700ml'
  },
  {
    id: 8,
    name: 'Mezcal Guerrero Maya Joven',
    category: 'Mezcal',
    brand: 'Guerrero Maya',
    origin: 'San Dionisio Ocotepec, Oaxaca',
    tastingNotes: "Al abrir la botella, una explosión de notas frescas de agave y un toque de cítricos saludan tus sentidos. El aroma baila con la vitalidad de las hierbas verdes, mientras que los sabores del dulce agave y un sutil toque de jalapeño despiertan tu paladar. Nariz: Ahumados limpios y frescos.",
    imageUrl: '/FSMproduct8.png',
    alcoholVolume: '38%',
    presentation: '750ml'
  },
  {
    id: 9,
    name: 'Mezcal Guerrero Maya - Pintado a Mano',
    category: 'Mezcal',
    brand: 'Guerrero Maya',
    origin: 'San Dionisio Ocotepec, Oaxaca',
    tastingNotes: "Nuestro mezcal no tiene aditivos, todo es 100% natural y 100% agave. Nariz: Aromas de madera cálida y agave cocido. Final: suave y persistente en el paladar.",
    imageUrl: '/FSMproduct9.png',
    alcoholVolume: '42%',
    presentation: '750ml'
  },
  {
    id: 10,
    name: 'Mezcal Guerrero Maya Reposado',
    category: 'Mezcal',
    brand: 'Guerrero Maya',
    origin: 'San Dionisio Ocotepec, Oaxaca',
    tastingNotes: "Presenta una experiencia serena y acogedora a través de su seductora fragancia de vainilla tostada, complementada con sutiles notas de roble. Nariz: Aromas de madera cálida y agave cocido. Final: suave y persistente en el paladar.",
    imageUrl: '/FSMproduct10.png',
    alcoholVolume: '40%',
    presentation: '750ml'
  },
  {
    id: 11,
    name: 'Otto\'s Athens Vermouth',
    category: 'Vermouth',
    brand: 'Otto\'s',
    origin: 'Grecia',
    tastingNotes: "Una bebida refrescante de vermut rosa, caracterizada por un ligero amargor y sutiles notas de rosa fresca. Nariz: Aroma refrescante con toques de rosa fresca. Paladar: Dulce balanceado, notas frescas de rosas, limón y naranja. Final: Una mezcla armoniosa de ligero amargor y sutiles notas de rosa.",
    imageUrl: '/FSMproduct11.png',
    alcoholVolume: '17%',
    presentation: '750 ml'
  },
  {
    id: 12,
    name: 'Gin MG Fresa',
    category: 'Ginebra',
    brand: 'Gin MG',
    origin: 'España',
    tastingNotes: "Hecho con aromas naturales de fresa, sin artificios ni aditivos. Nariz: Fino sabor a fresa y enebro con una agradable nota cítrica. Paladar: Fresca, suave y dulce con un característico sabor a fresa. Final: Autenticidad y calidad en cada sorbo.",
    imageUrl: '/FSMproduct12.png',
    alcoholVolume: '40%',
    presentation: '70 cl'
  },
  {
    id: 13,
    name: 'Gin MG London Dry Gin',
    category: 'Ginebra',
    brand: 'Gin MG',
    origin: 'España',
    tastingNotes: "Bebida espirituosa elaborada con agua desmineralizada y alcohol etílico agrícola procedente de cereales, redestilado con destilados de enebro y coriandro. Nariz: Elegante y refinado, con intensos aromas de enebro y hierba fresca. Paladar: Sabor intenso y complejo con mucha presencia de notas de enebro. Final: Una experiencia suave y armoniosa.",
    imageUrl: '/FSMproduct13.png',
    alcoholVolume: '40%',
    presentation: '70 cl'
  },
  {
    id: 14,
    name: 'El Macho Silvestre Mezcal Espadín',
    category: 'Mezcal',
    brand: 'El Macho Silvestre',
    origin: 'Oaxaca, México',
    tastingNotes: "Proceso de doble destilación en alambiques de cobre. Color: transparente y matices brillantes. Nariz: Suave con notas de agave fresco y acentos minerales. Sabor: Agave fresco y notas minerales, cuerpo robusto y retrogusto semi-seco y largo.",
    imageUrl: '/FSMproduct14.png',
    alcoholVolume: '43%',
    presentation: '750ml'
  },
  {
    id: 15,
    name: 'Skinos Mastiha Spirit',
    category: 'Spirit',
    brand: 'Skinos',
    origin: 'Grecia',
    tastingNotes: "Licor griego elaborado con la resina del árbol de lentisco de Quíos. Nariz: Aromas elegantes de fruta y jengibre. Paladar: Miel y floral con profundo aroma a centeno y roble. Final: Largo y decadente acabado mejorado con notas robustas de chocolate negro.",
    imageUrl: '/FSMproduct15.png',
    alcoholVolume: '30%',
    presentation: '700ml'
  },
  {
    id: 16,
    name: 'Busca Vida',
    category: 'Aperitivo',
    brand: 'Busca Vida',
    origin: 'Brasil',
    tastingNotes: "Aperitivo brasileño perfeccionado desde 1998, utilizando ingredientes naturales de calidad como limón y miel. Puede disfrutarse frío en chupitos, con hielo o en cócteles.",
    imageUrl: '/FSMproduct16.png',
    alcoholVolume: '17.2%',
    presentation: '700 ml'
  }
];

export const brands: Brand[] = [
  { name: 'Nobushi', logoUrl: '/logos/logo6.png' },
  { name: 'Rosaluz', logoUrl: '/logos/logo1.png' },
  { name: 'Guerrero Maya', logoUrl: '/logos/logo2.png' },
  { name: 'Otto\'s', logoUrl: '/logos/logo7.png' },
  { name: 'Gin MG', logoUrl: '/logos/logo5.png' },
  { name: 'El Macho Silvestre', logoUrl: '/logos/logo3.png' },
  { name: 'Skinos', logoUrl: '/logos/logo4.png' },
  { name: 'Busca Vida', logoUrl: '/logos/logo8.png' },
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

export const spiritCategories = ['Whisky', 'Tequila', 'Mezcal', 'Vermouth', 'Ginebra', 'Spirit', 'Aperitivo'];

export const spiritBrands = [
  'Nobushi',
  'Rosaluz',
  'Guerrero Maya',
  'Otto\'s',
  'Gin MG',
  'El Macho Silvestre',
  'Skinos',
  'Busca Vida'
];
