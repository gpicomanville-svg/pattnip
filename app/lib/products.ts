export type Product = {
  id: number
  name: string
  price: number
  emoji: string
  category: 'amigurumis' | 'personajes' | 'jabones' | 'arcilla'
  description: string
  color: string
}

export const products: Product[] = [
  // Amigurumis
  { id: 1, name: 'Osito Crochet', price: 18, emoji: '🐻', category: 'amigurumis', description: 'Osito tejido a mano con hilo suave, perfecto para regalar', color: '#C8A882' },
  { id: 2, name: 'Conejito Rosa', price: 15, emoji: '🐰', category: 'amigurumis', description: 'Adorable conejito con orejitas largas y cola esponjosa', color: '#FFB3BA' },
  { id: 3, name: 'Gatito Travieso', price: 16, emoji: '🐱', category: 'amigurumis', description: 'Gatito con bigotitos bordados y ojos brillantes', color: '#FFA07A' },
  { id: 4, name: 'Perrito Fiel', price: 20, emoji: '🐶', category: 'amigurumis', description: 'Perrito con colita y detalles en marrón y crema', color: '#D2B48C' },
  { id: 5, name: 'Pingüino Polito', price: 17, emoji: '🐧', category: 'amigurumis', description: 'Pingüino regordete con panzota blanca, muy abrazable', color: '#87CEEB' },
  { id: 6, name: 'Ranita Saltarina', price: 14, emoji: '🐸', category: 'amigurumis', description: 'Rana verde brillante con ojos grandes y saltones', color: '#90EE90' },

  // Personajes de Ficción
  { id: 7, name: 'Pikachu', price: 22, emoji: '⚡', category: 'personajes', description: 'El Pokémon más famoso en versión amigurumi', color: '#FFD700' },
  { id: 8, name: 'Stitch', price: 25, emoji: '💙', category: 'personajes', description: 'El experimento 626 en crochet azul con orejas puntiagudas', color: '#4169E1' },
  { id: 9, name: 'Totoro', price: 28, emoji: '🌿', category: 'personajes', description: 'El espíritu del bosque de Miyazaki hecho con amor', color: '#808080' },
  { id: 10, name: 'Baby Yoda', price: 30, emoji: '🌌', category: 'personajes', description: 'El pequeño Grogu con su túnica marrón y orejas verdes', color: '#8FBC8F' },
  { id: 11, name: 'Kirby', price: 20, emoji: '🌸', category: 'personajes', description: 'La bolita rosa más tierna del universo Nintendo', color: '#FFB6C1' },
  { id: 12, name: 'Cinnamoroll', price: 24, emoji: '☁️', category: 'personajes', description: 'El perrito de Sanrio en blanco y azul celeste', color: '#E6F0FF' },

  // Jabones
  { id: 13, name: 'Jabón de Lavanda', price: 8, emoji: '💜', category: 'jabones', description: 'Jabón artesanal con lavanda natural, relajante y suave', color: '#E6E6FA' },
  { id: 14, name: 'Jabón de Rosas', price: 9, emoji: '🌹', category: 'jabones', description: 'Jabón con pétalos de rosa, hidratante y romántico', color: '#FFB6C1' },
  { id: 15, name: 'Set de 3 Jabones', price: 22, emoji: '🎁', category: 'jabones', description: 'Set de regalo con tres jabones artesanales a elegir', color: '#98FB98' },
  { id: 16, name: 'Jabón de Miel', price: 8, emoji: '🍯', category: 'jabones', description: 'Con miel natural, nutre y suaviza la piel', color: '#FFD700' },
  { id: 17, name: 'Jabón de Coco', price: 9, emoji: '🥥', category: 'jabones', description: 'Jabón de aceite de coco, espuma abundante y piel suave', color: '#F5F5DC' },
  { id: 18, name: 'Jabón de Café', price: 10, emoji: '☕', category: 'jabones', description: 'Exfoliante natural de café, revitaliza la piel', color: '#8B4513' },

  // Arcilla
  { id: 19, name: 'Figura Gatito', price: 18, emoji: '🐈', category: 'arcilla', description: 'Figura decorativa de gatito en arcilla polimérica pintada a mano', color: '#DDA0DD' },
  { id: 20, name: 'Colgante Corazón', price: 10, emoji: '💗', category: 'arcilla', description: 'Colgante de arcilla con forma de corazón, para poner en tu bolso o mochila', color: '#FF69B4' },
  { id: 21, name: 'Maceta Miniatura', price: 12, emoji: '🌱', category: 'arcilla', description: 'Pequeña maceta decorativa con diseños únicos', color: '#98FF98' },
  { id: 22, name: 'Imán Personaje', price: 7, emoji: '🧲', category: 'arcilla', description: 'Imán para nevera con tu personaje favorito en arcilla', color: '#87CEEB' },
  { id: 23, name: 'Pendientes Flores', price: 14, emoji: '🌸', category: 'arcilla', description: 'Pendientes de arcilla con diseño floral, ligeros y únicos', color: '#FFB3BA' },
  { id: 24, name: 'Set Decorativo', price: 25, emoji: '✨', category: 'arcilla', description: 'Set de 3 figuras decorativas a juego para tu estantería', color: '#F0E68C' },
]

export const categories = {
  amigurumis: { label: 'Amigurumis', emoji: '🧶', description: 'Animales tejidos a mano con hilo de calidad' },
  personajes: { label: 'Personajes', emoji: '🎮', description: 'Tus personajes favoritos en versión crochet' },
  jabones: { label: 'Jabones', emoji: '🫧', description: 'Jabones artesanales con ingredientes naturales' },
  arcilla: { label: 'Arcilla', emoji: '🎨', description: 'Figuras y accesorios únicos en arcilla polimérica' },
}
