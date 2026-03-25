import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import MenuSection from './components/sections/MenuSection';
import Experience from './components/sections/Experience';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Reservation from './components/sections/Reservation';
import Contact from './components/sections/Contact';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans text-[var(--color-coconut-brown)] w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Experience />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
