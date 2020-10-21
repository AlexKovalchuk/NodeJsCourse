const chalk = require('chalk');
const yargs = require('yargs');
const {getNotes} = require('./note');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Adding a new note');
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
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

yargs.parse();
// console.log(yargs.argv)
