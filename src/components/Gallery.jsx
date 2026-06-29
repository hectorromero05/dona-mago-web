import { restaurant } from '../data';

export default function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="section-heading compact">
        <p className="eyebrow">Galería</p>
        <h2>Fotos locales con respaldo visual si una imagen no carga.</h2>
      </div>
      <div className="gallery-grid">
        {restaurant.images.gallery.map((src, index) => (
          <figure className="gallery-tile image-fallback" key={src}>
            <img src={src} alt={`Galería de Doña Mago ${index + 1}`} onError={(event) => { event.currentTarget.remove(); }} />
            <figcaption>{index === 0 ? 'Referencia de platillos' : index === 1 ? 'Ambiente del local' : 'Detalle mexicano'}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
