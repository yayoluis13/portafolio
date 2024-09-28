import React, { useState } from 'react';

function Navbar({ smoothScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event) => {
    smoothScroll(event);
    setIsMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  return (
    <nav className="nav" id="sticker">
      <div className="nav-container">
        <img src="https://i.imgur.com/O3tywQj.jpg" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={handleLinkClick}>inicio</a>
          <a href="#servicio" onClick={handleLinkClick}>servicio</a>
          <a href="#trabajo" onClick={handleLinkClick}>trabajo</a>
          <a href="#contacto" onClick={handleLinkClick}>contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;