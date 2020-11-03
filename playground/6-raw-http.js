const http = require('http');
const forecastUrl = `http://api.weatherstack.com/current?access_key=1e0017af96e5f2851dc76d38dbccd8f3&query=40,-75&units=m`;

const request = http.request(forecastUrl, response => {
  let data = '';

  response.on('data', chunk => {
    data = data + chunk.toString();
    console.log(chunk);
  })

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body)
  })

})

request.on('error', error => {
  console.log('An error', error);
})

request.end();

