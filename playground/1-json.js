const fs = require('fs');

const personData = JSON.parse(fs.readFileSync('1-json.json', 'utf-8'));
personData.name = 'Songo';
personData.age = 54;
fs.writeFileSync('1-json.json', JSON.stringify(personData))



module.exports = {}