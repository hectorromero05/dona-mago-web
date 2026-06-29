import { restaurant } from '../data';

export default function WhatsappButton() {
  return <a className="whatsapp" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Doña Mago por WhatsApp">💬</a>;
}
