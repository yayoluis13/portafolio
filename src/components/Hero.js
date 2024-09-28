import React from 'react';

function Hero() {
  return (
    <section className="photo" id="inicio">
      <div className="photo-text">
        <h4 data-ix="skype">Bienvenidos</h4>
        <p className="titulo" data-ix="subtitle-hero-up">
          Soy un desarrollador con experiencia. Me apasiona crear soluciones innovadoras y eficientes.
        </p>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Hero;
