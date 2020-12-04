const { default: chalk } = require('chalk');
const fs = require('fs')

const getNotes = () => 'Your notes..'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    if (notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.bgGreen('Note removed!'))
    } else{
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright('Listing your notes:'))
    notes.forEach(element => {
        console.log(chalk.blue(element.title))
    });

}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note){
        console.log('Reading note with title ', title)
        console.log(note.body)
    } else{
        console.log('Note with title', title, 'not found!')
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}