import { restaurant, specialties } from '../data';

export default function About() {
  return (
    <section className="about section" id="especialidades">
      <div>
        <p className="eyebrow">Ambiente local</p>
        <h2>Identidad directa: nombre, ubicación y contacto claro.</h2>
        <p>Doña Mago se presenta como restaurante mexicano en Guadalajara. El sitio prioriza datos reales disponibles: dirección en Mexicaltzingo, rating de Google Maps y contacto por WhatsApp.</p>
      </div>
      <div className="specialty-list">
        {specialties.map((item) => <article className="specialty" key={item}><span>◆</span><p>{item}</p></article>)}
        <article className="hours-card"><span>Horario</span><strong>{restaurant.hours}</strong><small>Confirma el horario actualizado antes de visitar.</small></article>
      </div>
    </section>
  );
}
