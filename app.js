const chalk = require('chalk');
const yargs = require('yargs');
const {getNotes} = require('./note');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note');
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a new note');
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function() {
        console.log('Reading notes');
    }
})

console.log(yargs.argv)
