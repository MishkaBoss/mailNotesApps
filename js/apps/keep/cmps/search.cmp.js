import { noteService } from "/js/apps/keep/service/note-service.js"
import addTodosNote from "/js/apps/keep/cmps/add-todos-note.cmp.js"
import addImgNote from "/js/apps/keep/cmps/add-img-note.cmp.js"
import addTxtNote from "/js/apps/keep/cmps/add-txt-note.cmp.js"

export default {
    template: `
    <h1>NOTES APP</h1>
<div class="search-container">
    <component :is="component" @saved="addTxtNote" :notes="notes">
    </component>
    <button @click="changeToTxt" class="add-note-btn txt">add txt</button>
    <button @click="changeToImg" class="add-note-btn img">add image</button>
    <button @click="changeToTodos" class="add-note-btn todo">add todos</button>
</div>
`,
    props: ['note'],
    data() {
        return {
            notes: null,
            component: addTxtNote,
            noteType: '',
        }
    },
    methods: {
        addTxtNote(note) {
            this.notes.push(note)
            console.log(`addTxtNote happened`);
        },
        changeToTxt() {
            this.component = addTxtNote
            this.noteType = 'txt-note'
            this.note.type = this.noteType
        },
        changeToImg() {
            this.component = addImgNote
        },
        changeToTodos() {
            this.component = addTodosNote
        },
    },
    computed: {
    },
    components: {
        addImgNote,
        addTodosNote,
        addTxtNote
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    }

}