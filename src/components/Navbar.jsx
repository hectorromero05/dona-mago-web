import { restaurant } from '../data';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio de Doña Mago">
        <img src={restaurant.images.logo} alt="Logo de Doña Mago" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
        <span>Doña Mago</span>
      </a>
      <div className="navlinks">
        <a href="#especialidades">Especialidades</a>
        <a href="#menu">Menú</a>
        <a href="#ubicacion">Ubicación</a>
        <a className="nav-cta" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </nav>
  );
}
