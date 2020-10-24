const chalk = require('chalk');
const yargs = require('yargs');
const {
    removeNote, 
    addNote, 
    listNotes,
    readNote
} = require('./notes.js');

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
    handler(argv) {
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
    handler(argv) {
        const {title} = argv;
        removeNote(title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const {title} = argv;
        readNote(title)
    }
})

yargs.parse();
