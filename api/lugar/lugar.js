const axios = require('axios');

const getLatLng = async direccion => {
  const encodeURL = encodeURI(direccion);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {
      'x-rapidapi-key': '6e2a5d914emsh233ca1ae7e76a80p1cc536jsn545858f42db8'
    }
  });

  const resp = await instance.get();
  if(resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const dir = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    dir,
    lat,
    lng
  };
};

module.exports = {
  getLatLng
};
