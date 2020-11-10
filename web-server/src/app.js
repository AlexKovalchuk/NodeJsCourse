const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express()


const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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

