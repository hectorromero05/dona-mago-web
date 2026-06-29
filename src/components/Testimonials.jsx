import { restaurant } from '../data';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="resenas">
      <div className="reviews-panel">
        <p className="eyebrow">Reseñas</p>
        <h2>{restaurant.rating} en Google Maps</h2>
        <p>Los datos disponibles indican {restaurant.reviews} reseñas. Por eso esta sección no inventa testimonios: invita a revisar la ficha real y dejar una opinión después de visitar.</p>
        <a className="button secondary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Ver ficha en Google Maps</a>
      </div>
      <div className="review-note">
        <span>Nota</span>
        <p>Cuando existan reseñas verificadas, este espacio puede mostrar comentarios reales con nombre, fecha y fuente.</p>
      </div>
    </section>
  );
}
