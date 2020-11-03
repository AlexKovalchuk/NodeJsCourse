const {geocode} = require('./utils/geocode');
const {forecast} = require('./utils/forecast');

const locationInput = process.argv[2];
if(!locationInput) return console.log('Please provide address.')

geocode(locationInput, (error, data) => {
  if(error) {
    return console.log('Error:', error);
  }

    console.log('Location:', data.location);
    const {latitude, longtitude} = data
    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) return console.log('Error:', error);
      
      console.log(forecastData);
    })

});



