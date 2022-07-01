import { storageService } from '/js/services/async-storage-service.js'
import { utilService } from '/js/services/util-service.js'

const NOTES_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    getById,
    getEmptyNote,
    save
}
function query() {
    return storageService.query(NOTES_KEY)
}
function getById() {
    return Promise.resolve(notes)
}
var notes =
    [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        }
    ]

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    console.log(notes);
    if (!notes || !notes.length) {
        notes = getDemoNotes()
        utilService.saveToStorage(NOTES_KEY, notes)
        console.log(`not from local storage`);
    }
    console.log(notes);
    return notes
}
function getEmptyNote() {
    return {
        id: '',
        type: '',
        isPinned: false,
        info: {}
    }
}

function save(note) {
    note.id = utilService.makeId();
    const notes = query();
    console.log(notes)
    console.log(note);
    notes.then(notes => {
        notes.push(note)
        utilService.saveToStorage(NOTES_KEY, notes);
        console.log(notes);
    })

    return note;
}
function getDemoNotes() {
    return [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        }
    ];
}