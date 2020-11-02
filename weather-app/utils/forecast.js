const request = require('request');

const forecast = (latitude, longtitude, callback) => {
  const forecastUrl = `http://api.weatherstack.com/current?access_key=1e0017af96e5f2851dc76d38dbccd8f3&query=${latitude},${longtitude}&units=m`;

  request({url: forecastUrl, json: true}, (error, response) => {
    if(error) {
      callback('Error: Unable to connect to services!')
    } else if(response.body.error) {
      callback('Error: Unable to find location');
    } else {
      const {body} = response;
      const {current} = body
      const {feelslike, temperature} = current
      callback(undefined, `It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
    }
  });
}

module.exports = {forecast};