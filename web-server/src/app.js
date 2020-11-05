const express = require('express');

const app = express()

app.get('', (req, res) => {
  res.send('<h1>Hello Express!</h1>')
});

app.get('/help', (req, res) => {
  res.send({
    name: 'Alex',
    age: '29'
  })
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page.<h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Some forecast',
    location: '49,-29'
  })
})


app.get('*', (req, res) => {
  res.send('404 Page Not Found');
})

app.listen('3000', () => {
  console.log('Server running on port 3000')
});

