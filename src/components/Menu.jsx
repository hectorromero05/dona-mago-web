import { menuItems, restaurant } from '../data';

export default function Menu() {
  return (
    <section className="menu section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Menú</p>
        <h2>Opciones mexicanas para consultar con Doña Mago.</h2>
        <p>Como no hay carta completa publicada en los datos entregados, estos bloques funcionan como categorías editables y evitan inventar precios o platillos específicos.</p>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-item" key={item.name}>
            <span>{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <a className="button primary menu-button" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">Pedir información del menú</a>
    </section>
  );
}
