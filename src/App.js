import React, { useEffect } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const pixels = 50;
      if (window.scrollY > pixels) {
        document.querySelector('.nav').classList.add('fixed');
        document.querySelectorAll('.menu a').forEach(link => {
          link.style.color = '#354757';
        });
        document.querySelector('.logo').style.color = '#354757';
      } else {
        document.querySelector('.nav').classList.remove('fixed');
        document.querySelectorAll('.menu a').forEach(link => {
          link.style.color = '#BABCBD';
        });
        document.querySelector('.logo').style.color = '#BABCBD';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (event) => {
    event.preventDefault();
    const hash = event.target.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        // Añadimos un pequeño retraso para asegurar que todos los elementos estén renderizados
        setTimeout(() => {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      } else {
        console.error(`Elemento con selector "${hash}" no encontrado`);
      }
    }
  };
  
  return (
    <div>
      <Navbar smoothScroll={smoothScroll} />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
