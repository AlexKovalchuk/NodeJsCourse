const path = require('path');
const express = require('express');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express()
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Oleks Kovalchuk'
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Oleks Kovalchuk',
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Oleks Kovalchuk',
    helpText: 'Call me when you need help!'
  })
});

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

