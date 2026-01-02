import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Drones from './components/Drones';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    // 1. Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });

    // 2. Scroll Listener for Navbar and Back-to-Top button
    const handleScroll = () => {
      // Navbar Logic
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        if (nav) {
          nav.style.padding = '0.5rem 0';
          nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        }
      } else {
        if (nav) {
          nav.style.padding = '1rem 0';
          nav.style.boxShadow = 'none';
        }
      }

      // Back to Top Button Logic
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Drones />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      {showScrollBtn && (
        <button id="scrollTop" className="scroll-top-btn" onclick="scrollToTop()">
          <div class="btn-line"></div>
          <i class="bi bi-arrow-up"></i>
          <span class="text-orbitron">TOP</span>
      </button>
      )}
    </>
  );
}

export default App;