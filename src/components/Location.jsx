import { restaurant } from '../data';

export default function Location() {
  return (
    <section className="location section" id="ubicacion">
      <div className="location-copy">
        <p className="eyebrow">Mapa</p>
        <h2>Encuentra Doña Mago en C. Nicolás Régules.</h2>
        <p>{restaurant.address}</p>
        <div className="location-actions">
          <a className="button primary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a>
          <a className="button secondary" href={`tel:${restaurant.phone.replace(/\s/g, '')}`}>Llamar {restaurant.phone}</a>
        </div>
      </div>
      <iframe title="Mapa de Doña Mago en Guadalajara" src={restaurant.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
