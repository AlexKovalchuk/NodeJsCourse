const request = require('request');
const apiKey = '1e0017af96e5f2851dc76d38dbccd8f3';
const {geocode} = require('./utils/geocode');



const weatherUrl = 'http://api.weatherstack.com/current'
const access_key = 'access_key=1e0017af96e5f2851dc76d38dbccd8f3';
const query = 'query=49.23278,28.48097';
const qr = 'query=';
const units = 'units=m';
const lng = 'en';
const url = `${weatherUrl}?${access_key}&${query}&${units}`;

// request({url: url, json: true}, (error, response) => {
//   if(error) {
//     console.log('Error', error)
//   } else if(response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const {body} = response;
//     const {current} = body
//     const {feelslike, temperature} = current
//     console.log(`It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
//   }
// });

geocode('Kyiv', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});

