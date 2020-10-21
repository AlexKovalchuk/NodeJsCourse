const fs = require('fs');

const getNotes = () => {
    return loadNotes();
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
        console.log('New note added!')
    } else {
        console.log('Note title taken!');
    }

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

module.exports = {
    getNotes,
    addNote
}