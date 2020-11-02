const request = require('request');

const geocode = (address, callback) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxlemFuZGVya292YWxjaHVrIiwiYSI6ImNrNWNlZzFjbjBsbGYzbW5xNnBhOGplb3AifQ.TQqrpm2lLCIYrd3rPIpmew&limit=1`;
  request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!');
    } else if (!response.body.features.length) {
      callback('Unable to find location. Try another search');
    } else {
      const {features} = response.body;
      const {center, place_name} = features[0];
      const latitude = center[1];
      const longtitude = center[0];
      callback(undefined, {latitude, longtitude, location: place_name});
    }
  })
}

module.exports = {geocode};