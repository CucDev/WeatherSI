const express = require('express');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const app = express();

app.use('/api/coords', async (req, res) => {
  let direccion = 'New York';
  res.json(await lugar.getLatLng(direccion));
});

app.use('/api/temp', async (req, res) => {
  res.json(await clima.getClima(35, 139));
});
// lugar.getLatLng('New York').then(data => console.log(data));
// clima.getClima(40.750000, -74.000000).then(data => console.log(data));

// const getInfo = async direccion => {
//   try {
//     const coords = await lugar.getLatLng(direccion);
//     const temp = await clima.getClima(coords.lat, coords.lng);
//     return `El clima de ${coords.dir} es de ${temp}`;
//   } catch (err) {
//     return `No se pudo determinar el clima de ${direccion}`;
//   }
// };

// getInfo('New York')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
app.listen(8001, () => {
  console.log('Ejecutandose en el puerto 8001');
});
