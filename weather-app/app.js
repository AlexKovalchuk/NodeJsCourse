const {geocode} = require('./utils/geocode');
const {forecast} = require('./utils/forecast');

geocode('Kyiv', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});

forecast(50.25, 30.5, (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
})

