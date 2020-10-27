const request = require('request');
const apiKey = '1e0017af96e5f2851dc76d38dbccd8f3';

const url = 'http://api.weatherstack.com/current?access_key=1e0017af96e5f2851dc76d38dbccd8f3&query=37.8267,-122.4233';

request({url: url}, (err, response) => {
    console.log(JSON.parse(response.body));
})