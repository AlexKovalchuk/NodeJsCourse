const fs = require('fs');

const getNotes = () => {
    return fs.readFileSync('./notes', 'utf-8');
}

module.exports = {
    getNotes,
}