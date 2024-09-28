import React from 'react';

function Portfolio() {
  return (
    <section className="portafolio" id="trabajo">
      <h4 data-ix="slowfade-scroll-bigs">Proyectos</h4>
      <div className="portafolio-container">
        <section className="portafolio-item">
          <img src="https://drimjuguetes.vtexassets.com/arquivos/ids/839936/Conecta-4_1.jpg?v=637994124605930000" alt="" className="portafolio-img" />
          <section className="portafolio-text">
            <h5>coneta 4</h5>
            <p>divertido juego para distraerte,contiene 2 modalidades de juego. jugar solo contra la ia, o multijugardor</p>
          </section>
        </section>
        <section className="portafolio-item">
          <img src="https://i.imgur.com/ffEyXWa.png" alt="" className="portafolio-img" />
          <section className="portafolio-text">
            <h5>Formulario</h5>
            <p>Fue implementado con react. tiene todas las funciones que un formulario debe tener para ser considerado funcional, adicional puedes registrarte y guarda la informacion sin problema y al inicar sesión te muestra la información que ingresaste en el momento en el cual se registro.</p>
          </section>
        </section>
        <section className="portafolio-item">
          <img src="https://i.imgur.com/W0EOw84.png" alt="" className="portafolio-img" />
          <section className="portafolio-text">
            <h5>Asistente Virtual</h5>
            <p>La implementación de un bot que ayude a solucionar duda e inconvenientes, logra dar alcance a información que el servicio de atención al cliente no pueda dar al momento. Recibe información puede ser conectado a una base de datos, a la web o en su defecto a la Ia</p>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
