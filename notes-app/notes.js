const fs = require('fs');
const chalk = require('chalk');


const readNote = title => {
    const notes = loadNotes();
    findedNote = notes.find(note => note.title === title);
    if(findedNote) {
        const {title, body} = findedNote;
        printColorText(true, `Title: ${title}`); 
        printColorText(true, `Body ${body}`);
    } else {
        printColorText(false, 'ERROR no note found.')
    }
}

const listNotes = () => {
    const notes = loadNotes();
    printColorText(true, 'Notes title:');
    notes.forEach(note => {
        printColorText(true, note.title);
    })
}

const removeNote = title => {
    const notes = loadNotes();
    const notesAfterRomoving = notes.filter(note => note.title !== title);
    if(notes.length !== notesAfterRomoving.length) {
        saveNotes(notesAfterRomoving);
        printColorText(true, `Removed note ${title}`);
    } else {
        printColorText(false, `Note ${title} is not found`);
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if(!duplicateNote){
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        printColorText(true, 'New note added!')
    } else {
        printColorText(false, 'Note title taken!');
    }

}

const saveNotes = notes => {
    fs.writeFileSync('./notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('./notes.json', 'utf-8'));
    } catch(e) {
        return [];
    }
}

const printColorText = (isSuccess, textForPrint) => {
    const colorText = isSuccess ? chalk.green(textForPrint) : chalk.red(textForPrint);
    console.log(colorText);
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}