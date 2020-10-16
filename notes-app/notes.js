const fs = require('fs');

const getNotes = () => {
    return fs.readFileSync('./note.txt', 'utf-8');
}

module.exports = {
    getNotes,
}