const fs = require('fs');
const chalk = require('chalk');

const removeNote = title => {
    const notes = loadNotes();
    const notesAfterRomoving = notes.filter(note => note.title !== title);
    if(notes.length !== notesAfterRomoving.length) {
        saveNotes(notesAfterRomoving);
        // console.log(chalk.bgGreen(`Removed note ${title}`))
        printColorText(true, `Removed note ${title}`);
    } else {
        // console.log(chalk.bgRed(`Note ${title} is not found`))
        printColorText(false, `Note ${title} is not found`);
    }
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    });

    if(!duplicateNotes.length){
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        // console.log('New note added!')
        printColorText(true, 'New note added!')
    } else {
        // console.log('Note title taken!');
        printColorText(false, 'Note title taken!');
    }

}

const getNotes = () => {
    return loadNotes();
}

const saveNotes = function(notes) {
    fs.writeFileSync('./notes.json', JSON.stringify(notes));
}

const loadNotes = function() {
    try{
        return JSON.parse(fs.readFileSync('./notes.json', 'utf-8'));
    } catch(e) {
        return [];
    }
    
}

const printColorText = (isSuccess, textForPrint) => {
    const colorText = isSuccess ? chalk.bgGreen(textForPrint) : chalk.bgRed(textForPrint);
    console.log(colorText);
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}