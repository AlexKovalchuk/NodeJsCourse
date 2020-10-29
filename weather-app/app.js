const request = require('request');
const apiKey = '1e0017af96e5f2851dc76d38dbccd8f3';

const weatherUrl = 'http://api.weatherstack.com/current'
const access_key = 'access_key=1e0017af96e5f2851dc76d38dbccd8f3';
const query = 'query=49.23278,28.48097';
const qr = 'query=';
const units = 'units=m';
const lng = 'en';
const url = `${weatherUrl}?${access_key}&${query}&${units}`;

request({url: url, json: true}, (error, response) => {
  if(error) {
    console.log('Error', error)
  } else if(response.body.error) {
    console.log('Unable to find location');
  } else {
    const {body} = response;
    const {current} = body
    const {feelslike, temperature} = current
    console.log(`It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
  }


});

// Geocoding
// Adress -> lat/long -> Weather
const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kyiv.json?'
const mapbox_token = 'access_token=pk.eyJ1IjoiYWxlemFuZGVya292YWxjaHVrIiwiYSI6ImNrNWNlZzFjbjBsbGYzbW5xNnBhOGplb3AifQ.TQqrpm2lLCIYrd3rPIpmew';
const limit = 'limit=1';
const mapbox = `${mapbox_url}${mapbox_token}&${limit}`
request({url: mapbox, json: true}, (error, response) => {
  if(error) {
    console.log('Error: unable to connect to server...', error)
    return null;
  } else if(!response.body.features.length) {
    console.log('Unable to find location');
  } else {
    const {features} = response.body;
    const {center} = features[0];
    const latitude = center[1]
    const longtitude = center[0]
    console.log(`Latitude: ${latitude} and longtitude: ${longtitude}`)
  }

});
