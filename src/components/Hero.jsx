import { restaurant } from '../data';

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">{restaurant.category} · {restaurant.shortAddress}</p>
        <h1>Doña Mago: comida mexicana con punto de encuentro en Mexicaltzingo.</h1>
        <p className="hero-text">Una landing pensada para encontrar rápido la ubicación, abrir Google Maps y contactar por WhatsApp a Doña Mago en Guadalajara.</p>
        <div className="hero-actions">
          <a className="button primary" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Reservar o consultar a Doña Mago por WhatsApp">Reservar por WhatsApp</a>
          <a className="button secondary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer" aria-label="Abrir ubicación de Doña Mago en Google Maps">Cómo llegar</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Visual del restaurante Doña Mago">
        <div className="hero-image image-fallback">
          <img src={restaurant.images.hero} alt="Referencia visual de Doña Mago" onError={(event) => { event.currentTarget.remove(); }} />
        </div>
        <div className="hero-card rating-card">
          <strong>{restaurant.rating}</strong>
          <span>Rating en Google Maps</span>
        </div>
        <div className="hero-card address-card">
          <span>Dirección</span>
          <strong>{restaurant.address}</strong>
        </div>
      </div>
    </header>
  );
}
