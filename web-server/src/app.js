const path = require('path');
const express = require('express');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express()
app.use(express.static(publicDirectoryPath));

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

