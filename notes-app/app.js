const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote } = require('./notes.js')
const notes = require('./notes.js')
const notesFunction = require('./notes.js')
const { listNotes } = require('./notes.js')
const { readNote } = require('./notes.js')

yargs.version('1.1.0')


//Create add command
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
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {readNote(argv.title)}
})

console.log(yargs.argv)
