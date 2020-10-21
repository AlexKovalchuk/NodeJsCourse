const fs = require('fs');

const getNotes = () => {
    return fs.readFileSync('./notes.txt', 'utf-8');
}

module.exports = {
    getNotes,
}