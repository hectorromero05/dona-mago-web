# Tarea Codex Online — landing con identidad propia para Doña Mago

## INSTRUCCIONES CRÍTICAS ANTES DE TOCAR CÓDIGO
Antes de modificar código, revisa restaurant.json y el perfil visual.
NO hagas una variación superficial de la plantilla. Rediseña la landing page con identidad propia.
Si no hay imágenes reales, usa placeholders visuales coherentes con el negocio, pero no dejes bloques vacíos.
Usa el negocio real como referencia: nombre, categoría, Google Maps, rating, reseñas, dirección, menú/fotos disponibles y perfil visual.

## Rol y resultado esperado
Actúa como director creativo, diseñador UI senior y desarrollador frontend React + Vite. Debes transformar este repositorio en una landing profesional para restaurante. El sitio final debe parecer diseñado específicamente para Doña Mago, no una copia con el nombre cambiado.

## Datos del restaurante
- Nombre: Doña Mago
- Teléfono: +523336148928
- WhatsApp: +523336148928
- Google Maps: https://www.google.com/maps/place/Do%C3%B1a+Mago/@20.6661379,-103.3528806,17z/data=!4m6!3m5!1s0x8428b1f888bdf9a7:0xac6ae185124c2111!8m2!3d20.6660777!4d-103.3497089!16s%2Fg%2F1pt__3rd2?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D
- Dirección: C. Nicolás Régules 63-Loc 23, Mexicaltzingo, 44180 Guadalajara, Jal.
- Horario: Horario de atención
- Rating: 4.3
- Reseñas: 0
- Categoría/Nicho: Restaurante mexicano / Google Maps URL
- Keywords SEO: Doña Mago, Google Maps URL, Google Maps URL cerca de mí, restaurante en Guadalajara, reservaciones por WhatsApp
- Meta description: Conoce Doña Mago, Google Maps URL con ubicación, menú, reseñas y reservaciones por WhatsApp.

## Perfil visual obligatorio generado desde el prospecto
- Tipo de negocio: Restaurante mexicano
- Concepto visual: restaurante local con identidad construida desde su nombre, categoría, ubicación y reseñas disponibles
- Ambiente: local, honesto y adaptable a las fotos reales del negocio
- Colores dominantes sugeridos: #1F2937, #B45309, #F8F1E7, #111827
- Tipografía sugerida: sans moderna con titulares de personalidad moderada
- Layout elegido: split hero
- Tono de textos: concreto, local y descriptivo; no usar adjetivos premium sin evidencia
- Secciones recomendadas: Hero, Especialidades, Ambiente, Menú, Mapa, Reseñas, CTA
- Palabras clave de marca: local, cercano, sabor, ubicación, reseñas, Doña Mago, Restaurante mexicano
- Diferenciadores: Doña Mago, Restaurante mexicano

## Layouts distintos disponibles
- split hero
- full background hero
- editorial menu
- cards grid
- dark neon bar
- rustic parrilla
- coastal seafood
- minimalist cafe
- street food energetic

Elige y ejecuta el layout indicado por el perfil visual. Si durante la revisión de fotos/datos reales detectas una señal más fuerte, puedes cambiar a uno de la lista, pero explica el criterio en el código o resumen.

## Reglas obligatorias de identidad visual
- Cambiar completamente la estructura visual.
- No reutilizar el mismo hero de la plantilla.
- No usar la misma tipografía en todos los proyectos.
- No usar la misma paleta en todos los proyectos.
- No usar textos genéricos.
- Usar el negocio real como referencia.
- El copy debe mencionar Doña Mago y datos reales disponibles; no inventes atributos no justificados.
- Evita explícitamente estas frases o ideas si no están justificadas por el negocio:
- Una pausa francesa, elegante y cercana
- Experiencia cálida y memorable
- Restaurante premium
- experiencia gastronómica única
- sabores inolvidables
- calidad y tradición
- misma estructura visual de la plantilla
- mismo hero reutilizado
- misma tipografía en todas las demos
- misma paleta para todos los restaurantes
- textos genéricos no basados en datos reales

No uses frases genéricas como "Una pausa francesa, elegante y cercana", "Experiencia cálida y memorable" o "Restaurante premium" salvo que los datos/fotos del negocio lo justifiquen claramente.

## Guía por tipo de negocio y fotos de Google Maps
- Cafetería: puede ser minimalista, cálida, artesanal, moderna o vintage según fotos.
- Bar: puede ser nocturno, neón, oscuro, musical, urbano.
- Mariscos: puede ser costero, fresco, popular, familiar, azul/rojo.
- Taquería: puede ser popular, callejero, mexicano, energético, rojo/amarillo.
- Parrilla: puede ser madera, fuego, carbón, verde oscuro, rústico.
- Ramen/sushi: puede ser japonés urbano, rojo/negro, amarillo, ilustrado.
- Si hay luces moradas/neón, usa estética nocturna.
- Si hay madera, usa estilo cálido/rústico.
- Si hay menú rojo/amarillo, usa colores populares.
- Si hay comida marina, usa colores frescos/costeros.

## Imágenes
Usa siempre rutas locales desde public: /hero.jpg, /logo.png, /galeria1.jpg, /galeria2.jpg, /galeria3.jpg. Nunca dejes imágenes rotas. Implementa fallbacks visuales con gradientes, fondos CSS o placeholders elegantes si una imagen no carga. No dependas de imágenes externas para que la demo funcione.

## Landing obligatoria
Adapta las secciones al nicho y perfil visual. Incluye como mínimo: Hero único, Historia/Ambiente, Especialidades, Galería, Menú, Mapa, botón WhatsApp, botón Google Maps, Reseñas, CTA final y Footer.

## Componentización obligatoria
Separa App.jsx. Crea componentes en src/components/: Hero.jsx, About.jsx, Menu.jsx, Gallery.jsx, Testimonials.jsx, Location.jsx, Footer.jsx, Navbar.jsx, WhatsappButton.jsx. Puedes agregar más componentes si mejora la calidad.

## SEO obligatorio
Actualiza index.html y/o el componente SEO según aplique: title, meta description, keywords, Open Graph, Twitter Card, Schema.org Restaurant en JSON-LD y favicon/logo.

## Calidad técnica
Mantén React + Vite. No migres de framework. No agregues dependencias innecesarias. El sitio debe compilar con npm run build. Prioriza mobile-first, accesibilidad básica, semántica HTML, botones con aria-label, contraste legible y rendimiento.

## CRITERIOS DE CALIDAD
- La página no debe parecer la plantilla original.
- El hero debe ser único y alineado al perfil visual.
- Los colores deben tener relación con el negocio, fotos, logo, menú o categoría.
- El texto debe mencionar el negocio real y evitar copy intercambiable.
- Las secciones deben adaptarse al nicho.
- No debe haber imágenes rotas ni bloques vacíos.
- Debe verse bien en móvil.

## Entregable final
Deja el repositorio listo para commit/push/deploy. Ejecuta o recomienda npm run build. Resume archivos modificados y cualquier dato faltante que haya requerido placeholder.
