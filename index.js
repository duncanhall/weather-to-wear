
const axios = require('axios');

async function getWeather () {
  try {
    const result = await axios.get('https://api.darksky.net/forecast/b8e85a6b64ead685fb74792fc912a808/51.509865,-0.118092?units=si');
    const currentWeather = result.data.currently;

    const { temperature } = currentWeather;

    console.log(`Current temperature: ${temperature}`);

  } catch (e) {
    console.error(e.response.statusText);
  }
}

getWeather();
