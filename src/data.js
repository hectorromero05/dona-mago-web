export const restaurant = {
  name: 'Doña Mago',
  category: 'Restaurante mexicano',
  phone: '+52 33 3614 8928',
  whatsappUrl: 'https://wa.me/523336148928?text=Hola%20Do%C3%B1a%20Mago%2C%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n%20o%20consultar%20el%20men%C3%BA.',
  mapsUrl: 'https://www.google.com/maps/place/Do%C3%B1a+Mago/@20.6661379,-103.3528806,17z/data=!4m6!3m5!1s0x8428b1f888bdf9a7:0xac6ae185124c2111!8m2!3d20.6660777!4d-103.3497089!16s%2Fg%2F1pt__3rd2?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
  address: 'C. Nicolás Régules 63-Loc 23, Mexicaltzingo, 44180 Guadalajara, Jal.',
  shortAddress: 'Mexicaltzingo, Guadalajara',
  hours: 'Horario de atención',
  rating: '4.3',
  reviews: '0',
  images: {
    logo: '/logo.png',
    hero: '/hero.jpg',
    gallery: ['/galeria1.jpg', '/galeria2.jpg', '/galeria3.jpg'],
  },
  mapEmbed: 'https://www.google.com/maps?q=20.6660777,-103.3497089&z=17&output=embed',
};

export const specialties = [
  'Comida mexicana para quienes buscan un restaurante local en Guadalajara.',
  'Atención por WhatsApp para consultar menú, disponibilidad o reservaciones.',
  'Ubicación en Google Maps en C. Nicolás Régules, dentro de Mexicaltzingo.',
];

export const menuItems = [
  { name: 'Antojitos mexicanos', detail: 'Pregunta por las opciones disponibles del día directamente por WhatsApp.', tag: 'Consulta' },
  { name: 'Platillos de comida mexicana', detail: 'Selección adaptable al menú real del negocio y a la disponibilidad en sitio.', tag: 'Menú' },
  { name: 'Bebidas y complementos', detail: 'Opciones para acompañar tu visita o pedido; confirma detalles con Doña Mago.', tag: 'WhatsApp' },
];
