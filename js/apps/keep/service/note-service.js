import { storageService } from '/js/services/async-storage-service.js'
import { utilService } from '/js/services/util-service.js'

const NOTES_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    getById,
    getEmptyNote,
    save,
    remove
}
function query() {
    return storageService.query(NOTES_KEY)
}
function remove(noteId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(NOTES_KEY, noteId)
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
                url: "https://www.abc.net.au/news/science/2022-04-06/dog-human-communication-puppy-dog-eyes-facial-expression/100955364",
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
                url: "https://images.unsplash.com/photo-1656608138197-2aea23cc3564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
                    "Driving liscence",
                    "Coding power"
                ]
            }
        }
    ];
}