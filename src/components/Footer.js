import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div className="footer" id="contacto">
      <h4 data-ix="slowfade-scroll-bigs">Contacto</h4>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingresa Nombre" className="rect" required />
            </li>
            <li>
              <label htmlFor="correo">Correo</label>
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Ingresa Correo" className="rect" required />
            </li>
            <li>
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingresa Teléfono" className="rect" required />
            </li>
            <li>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea rows="6" name="mensaje" value={formData.mensaje} onChange={handleChange} className="rect" required></textarea>
            </li>
            <li className="center">
              <button type="submit">Enviar</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Footer;