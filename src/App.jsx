import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import { restaurant } from './data';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <section className="cta section" aria-labelledby="cta-title">
          <p className="eyebrow">Contacto directo</p>
          <h2 id="cta-title">¿Vas a visitar Doña Mago?</h2>
          <p>Confirma horario, disponibilidad o reservación por WhatsApp antes de llegar a Mexicaltzingo.</p>
          <a className="button primary" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
