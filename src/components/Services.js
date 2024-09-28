import React from 'react';

function Services() {
  return (
    <section className="content">
     <div className="grand-title" id="servicio">
        <h4 data-ix="slowfade-scroll-bigs">Tipos de servicios</h4>
      </div>
      <div className="text">
        <div className="inner-text">
          <h3 data-ix="slowfade-scroll-bigs">programador</h3>
          <img src="https://i.imgur.com/emJB5aj.png" alt="programing" />
          <ion-icon name="code-slash-outline"></ion-icon>
          <div className="text-box">
            <h5 data-ix="slowfade-scroll-bigs">front and backend</h5>
            <p>Creacion webhook, E-comerce, Automatizaciones,Creacion de bot</p>
          </div>
        </div>
        <div className="inner-text">
          <h3 data-ix="slowfade-scroll-bigs">Community manager</h3>
          <img src="https://i.imgur.com/TMqI6hR.png" alt="Descripción de la imagen" className="ic2" />
          <div className="text-box">
            <h5 data-ix="slowfade-scroll-bigs">creador de contenido</h5>
            <p data-ix="slowfade-scroll-bigs">experiencia en diseño grafico, Creación de videos, Estudio del mercado, Adaptacion y creación indentidad empresarial, Publicidad ads.</p>
          </div>
        </div>
        <div className="inner-text">
          <h3 data-ix="slowfade-scroll-bigs">engineer prompt</h3>
          <img src="https://i.imgur.com/o1pBvNz.png" alt="promt" />
          <div className="text-box">
            <h5 data-ix="slowfade-scroll-bigs">Especialista en Ia</h5>
            <p data-ix="slowfade-scroll-bigs">manejo todos los tipos de inteligencia artificial que se utlizan actualmente en el mercado. creador de guion, video, Avatar, Imagenes, Musica, libros, voz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
