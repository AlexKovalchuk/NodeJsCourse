const chalk = require('chalk');
const {getNotes} = require('./note');

const msg = getNotes();
console.log(chalk.blue.bold(msg))

