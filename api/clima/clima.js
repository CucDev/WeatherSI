const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4992ddcc860391ce0e390edfa3f6b564&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
