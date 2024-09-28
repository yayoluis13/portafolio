const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;
  const data = `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}\n\n`;
  
  fs.appendFile(path.join(__dirname, 'contactos.txt'), data, (err) => {
    if (err) {
      console.error('Error al guardar el contacto:', err);
      res.status(500).send('Error al guardar el contacto');
    } else {
      console.log('Contacto guardado con éxito');
      res.status(200).send('Contacto guardado con éxito');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});