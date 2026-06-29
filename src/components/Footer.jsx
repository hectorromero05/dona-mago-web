import { restaurant } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Doña Mago</h2>
        <p>{restaurant.category} en {restaurant.shortAddress}.</p>
      </div>
      <div>
        <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
        <a href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`}>{restaurant.phone}</a>
      </div>
      <small>© 2026 Doña Mago. Landing informativa basada en datos públicos proporcionados.</small>
    </footer>
  );
}
