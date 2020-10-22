const chalk = require('chalk');
const yargs = require('yargs');
const {removeNote, addNote} = require('./note');

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
        const {title, body} = argv;
        addNote(title, body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const {title} = argv;
        removeNote(title)
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
